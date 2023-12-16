<template>
	<view class="pay-type-list">
		<view class="type-item b-b" v-for="item in payments" :key="item.code" @click="toPayHandler(item)" v-if="!(type == 2 && item.code == 'balancepay')">
			<text v-if="item.code == 'wechatpay'" class="icon yticon icon-weixinzhifu"></text>
			<text v-if="item.code == 'alipay'" class="icon yticon icon-alipay"></text>
			<text v-if="item.code == 'offline'" class="icon yticon icon-weixinzhifu"></text>
			<text v-if="item.code == 'balancepay'" class="icon yticon icon-erjiye-yucunkuan"></text>
			<view class="con">
				<text class="tit">{{ item.name }}</text>
				<text>{{ item.memo }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { baseUrl } from '@/config/config.js';
import Api from '@/common/api';
export default {
	props: {
		// 如果是商品订单此参数必须
		orderId: {
			type: String,
			default() {
				return '';
			}
		},
		// 如果是充值订单此参数必须
		recharge: {
			type: Number,
			default() {
				return 0;
			}
		},
		// 用户id
		uid: {
			type: Number,
			default() {
				return 0;
			}
		},
		// 订单类型
		type: {
			type: Number,
			default() {
				return 1;
			}
		}
	},
	data() {
		return {
			payments: [],
			openid: ''
		};
	},
	mounted() {
		this.getPayments();
	},
	methods: {
		// 获取可用支付方式列表
		async getPayments() {
			let params = {};
			this.orderInfo = await Api.apiCall('get', Api.payments.paymentlist, params);
			this.payments = this.formatPayments(this.orderInfo.data);
		},
		// 支付方式处理
		formatPayments(payments) {
			console.log(payments);
			// h5支付并且是在微信浏览器内 过滤支付宝支付
			if (this.$common.isWeiXinBrowser()) {
				payments = payments.filter(item => item.code !== 'alipay');
			}
			// #ifdef H5
			payments = payments.filter(item => item.code !== 'alipay');
			// #endif

			// 如果是充值订单 过滤余额支付 过滤非线上支付方式
			if (this.type === 2) {
				payments = payments.filter(item => item.code !== 'balancepay' || item.is_online === 1);
			}

			// 设置logo图片
			payments.forEach(item => {
				this.$set(item, 'icon', '/static/image/' + item.code + '.png');
			});
			return payments;
		},
		//微信小程序支付
		// #ifdef MP-WEIXIN
		handlerWexinAppletPay(params) {
			let oid = this.orderId;
			let _this = this;
			params['payKey'] = 'applet';
			uni.login({
				success: async e => {
					console.log(e.code);
					params['weixinCode'] = e.code; //此code为获取openId
					let result = await Api.apiCall('POST', Api.payments.weixinPay, params);
					if (result.code == 0) {
						let data = result.data;
						console.log(`data`, data);
						uni.requestPayment({
							provider: 'wxpay',
							timeStamp: data.timeStamp,
							nonceStr: data.nonceStr,
							package: data.package,
							signType: data.signType,
							paySign: data.paySign,
							success: async function(r) {
								let res = await Api.apiCall('GET', Api.payments.wxOrderQuery, { orderSn: oid });
								if (res.code != 0) {
									_this.$api.msg(res.msg);
									return;
								}
								uni.redirectTo({
									url: '/pages/order/payment/result?order=' + oid
								});
							},
							fail: function(err) {
								console.log('fail:' + JSON.stringify(err));
							}
						});
					}
				}
			});
		},
		// #endif
		//微信h5支付
		// #ifdef H5
		async handlerWexinH5Pay(params) {
			let oid = this.orderId;
			let _this = this;
			params['payKey'] = 'h5';
			let result = await Api.apiCall('POST', Api.payments.weixinPay, params);
			if (result.code != 0) {
				this.$api.msg(result.msg);
				return;
			}
			let data = result.data;
			uni.navigateTo({
				url: '/pages/order/payment/toThirdPage/toThirdPage?url=' + data
			});
		},
		// #endif
		//微信app支付
		// #ifdef APP-PLUS
		async handlerWexinAppPay(params) {
			let oid = this.orderId;
			let _this = this;
			params['payKey'] = 'app';
			let result = await Api.apiCall('POST', Api.payments.weixinPay, params);
			if (result.code != 0) {
				this.$api.msg(result.msg);
				return;
			}
			uni.requestPayment({
				provider: 'wxpay', // wxpay、alipay
				orderInfo: JSON.stringify(result.data), //微信、支付宝订单数据
				success: async function(r) {
					let res = await Api.apiCall('GET', Api.payments.wxOrderQuery, { orderSn: oid });
					if (res.code != 0) {
						_this.$api.msg(res.msg);
						return;
					}
					uni.redirectTo({
						url: '/pages/order/payment/result?order=' + oid
					});
				},
				fail: function(err) {
					console.log('fail:' + JSON.stringify(err));
				}
			});
		},
		// #endif
		//阿里app支付
		async aliApp(params) {
			let res = await Api.apiCall('POST', Api.payments.aliPay, params);
			if (res.code != 0) {
				this.$api.msg(res.msg);
				return;
			}
			let data = res.data;
			uni.requestPayment({
				provider: 'alipay',
				orderInfo: data,
				success: async function(r) {
					let res = await Api.apiCall('GET', Api.payments.aliOrderQuery, { orderSn: oid });
					if (res.code != 0) {
						_this.$api.msg(res.msg);
						return;
					}
					uni.redirectTo({
						url: '/pages/order/payment/result?order=' + oid
					});
				},
				fail: function(err) {
					console.log('fail:' + JSON.stringify(err));
				}
			});
		},
		//余额支付
		async balancepay(code) {
			/**
			 *  用户余额支付
			 *
			 */
			if ((this.type == 5 || this.type == 6) && this.recharge) {
				data['params'] = {
					orderId: this.orderId
				};
			}
			let params1 = {
				orderId: this.orderId,
				code: code
			};
			let data1 = await Api.apiCall('post', Api.payments.balancePay, params1);
			if (data1.code == 0) {
				uni.redirectTo({
					url: '/pages/order/payment/result?order=' + JSON.stringify(data1)
				});
			} else {
				this.$api.msg(data1.msg);
			}
		},
		// 用户点击支付方式处理
		async toPayHandler(item) {
			let code = item.code;
			let params = {
				orderId: this.orderId,
				code: item.code
			};
			switch (code) {
				case 'alipay':
					this.aliApp(params);
					break;
				case 'wechatpay':
					//微信小程序支付
					// #ifdef MP-WEIXIN
					this.handlerWexinAppletPay(params);
					// #endif
					//微信h5支付
					//#ifdef H5
					this.handlerWexinH5Pay(params);
					// #endif
					//微信app支付
					//#ifdef APP-PLUS
					this.handlerWexinAppPay(params);
					// #endif
					break;
				case 'balancepay':
					this.balancepay(code);
					break;
				case 'offline':
					/**
					 * 线下支付
					 */
					this.$common.modelShow('线下支付说明', '请联系客服进行线下支付qq:951449465', () => {}, false, '取消', '确定');
					break;
			}
		}
	}
};
</script>

<style lang="scss">
.app {
	width: 100%;
}

.price-box {
	background-color: #fff;
	height: 265upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 28upx;
	color: #909399;

	.price {
		font-size: 50upx;
		color: #303133;
		margin-top: 12upx;

		&:before {
			content: '￥';
			font-size: 40upx;
		}
	}
}

.pay-type-list {
	margin-top: 20upx;
	background-color: #fff;
	padding-left: 60upx;

	.type-item {
		height: 120upx;
		padding: 20upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 60upx;
		font-size: 30upx;
		position: relative;
	}

	.icon {
		width: 100upx;
		font-size: 52upx;
	}

	.icon-erjiye-yucunkuan {
		color: #fe8e2e;
	}

	.icon-weixinzhifu {
		color: #36cb59;
	}

	.icon-alipay {
		color: #01aaef;
	}

	.tit {
		font-size: $font-lg;
		color: $font-color-dark;
		margin-bottom: 4upx;
	}

	.con {
		flex: 1;
		display: flex;
		flex-direction: column;
		font-size: $font-sm;
		color: $font-color-light;
	}
}

.mix-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 630upx;
	height: 80upx;
	margin: 80upx auto 30upx;
	font-size: $font-lg;
	color: #fff;
	background-color: $base-color;
	border-radius: 10upx;
	box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
}
</style>
