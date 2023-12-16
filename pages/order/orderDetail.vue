<template>
	<view>
		<view class="main-body">
			<view class="order-sn">
				<view class="order-sn-lable">单号：{{ pageData.orderSn }}</view>
				<view class="order-sn-content">
					<view>
						<view>创建时间：{{ pageData.createTime }}</view>
					</view>
					<view style=" color: #fa436a ">{{ orderStatus[pageData.orderStatus] }}</view>
				</view>
			</view>
			<view class="order-items">
				<view v-for="(item, index) in pageData.orderItemList" :key="index" class="order-item">
					<view><image :src="item.goodsPicUrl" class="imgbox"></image></view>

					<view class="order-item-content">
						<view class="order-item-name">{{ item.goodsName }}</view>
						<view class="order-item-wrappper">
							<view class="order-item-desc">
								<view class="order-item-desc-number">x {{ item.buyNumber }}</view>
								<view class="order-item-desc-price">￥{{ item.goodsPrice }}</view>
							</view>
							<view>
								<button plain="true" :disabled="item.isComment == 1" size="mini" class="order-item-btn" @click="toevaluate(item)">
									{{ item.isComment == 1 ? '已评论' : '评价' }}
								</button>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="order-desc-wrapper">
				<view class="order-tongji-wrapper">
					<view class="order-tongji">
						<view class="order-tongji-label">件数（商品）</view>
						<view class="order-tongji-num">{{ pageData == null ? 0 : pageData.orderItemList.length }}件</view>
					</view>
					<view class="order-tongji">
						<view class="order-tongji-label">运费</view>
						<view class="order-tongji-num">{{ pageData.orderFreightAmount }}元</view>
					</view>
					<view class="order-tongji">
						<view class="order-tongji-label">合计（含运费）</view>
						<view class="order-tongji-num">{{ pageData.orderPayAmount }}元</view>
					</view>
				</view>

				<view class="order-tongji-wrapper">
					<view class="order-tongji">
						<view class="order-tongji-label">收货人</view>
						<view class="order-tongji-num">{{ pageData.orderReceiveName }}</view>
					</view>
					<view class="order-tongji">
						<view class="order-tongji-label">收货人电话</view>
						<view class="order-tongji-num">{{ pageData.orderReceivePhone }}元</view>
					</view>
					<view class="order-tongji">
						<view class="order-tongji-label">收货人地址</view>
						<view class="order-tongji-num">{{ pageData.orderReceiveAddr }}元</view>
					</view>
				</view>

				<view class="order-tongji-wrapper" v-if="pageData.orderStatus == 2">
					<view class="order-tongji">
						<view class="order-tongji-label">物流公司</view>
						<view class="order-tongji-num">{{ pageData.expressCorpName }}</view>
					</view>
					<view class="order-tongji">
						<view class="order-tongji-label">物流单号</view>
						<view class="order-tongji-num">{{ pageData.deliveryLogiNo }}元</view>
					</view>
					<view class="order-tongji">
						<view class="order-tongji-label">物流信息</view>
						<view class="order-tongji-num">{{ pageData.deliveryLogiInformation }}元</view>
					</view>
				</view>

				<view class="order-status-wrapper" v-if="pageData.orderStatus == 0">
					<view class="order-status">
						<view @click="goGuest()" class="btn  ">联系客服</view>
						<view class="btn" @click="cancelOrder">取消订单</view>
						<view v-if="pageData.orderPayType == 0" @click="pay" class="btn">去支付</view>
					</view>
				</view>

				<view class="order-status-wrapper" v-if="pageData.orderStatus == 1">
					<view class="order-status"><view class="btn  " @click="goGuest()">联系客服</view></view>
				</view>

				<view class="order-status-wrapper" v-if="pageData.orderStatus == 2">
					<view class="order-status">
						<view class="btn" @click="goGuest()">联系客服</view>
						<view class="btn">查看物流</view>
						<view class="btn" @click="receive">确认收货</view>
					</view>
				</view>

				<view class="order-status-wrapper" v-if="pageData.orderStatus == 3">
					<view class="order-status"><view class="btn">联系客服</view></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import Api from '@/common/api';
export default {
	data() {
		return {
			pageLoad: false,
			pageData: { orderItemList: [] },
			orderid: 0,
			orderStatus: {
				0: '待付款',
				1: '待发货',
				2: '已发货',
				3: '已完成',
				4: '已关闭',
				5: '无效订单'
			}
		};
	},

	onLoad(ops) {
		this.orderSn = ops.orderSn;
		this.getPage();
	},

	methods: {
		goGuest() {
			this.$common.modelShow('线下支付说明', '请联系客服qq:1083479528', () => {}, false, '取消', '确定');
		},
		goPin(orderid) {
			uni.navigateTo({
				url: '../b2c_pintuan/invite?orderid=' + orderid
			});
		},
		toevaluate(item) {
			uni.navigateTo({
				url: `/pages/order/evaluate?orderSn=${item.orderSn}&goodsId=${item.goodsId}`
			});
		},
		async getPage() {
			var that = this;
			this.pageLoad = true;
			let data = await Api.apiCall('GET', Api.order.orderDetail, { orderSn: this.orderSn });
			this.pageLoad = false;
			if (data.code != 0) {
				this.$api.msg(data.msg);
				return;
			}
			this.pageData = data.data;
		},
		//取消订单
		async cancelOrder(item) {
			let params = {
				orderId: this.pageData.id
			};
			this.showOrderModal(Api.order.closeOrder, params, '您确定要取消订单吗？', 0);
		},
		showOrderModal(url, params, content, tabCurrentIndex) {
			let _this = this;
			uni.showModal({
				cancelText: '关闭',
				confirmText: '确定',
				content: content,
				async complete(res) {
					if (res.confirm) {
						let data = await Api.apiCall('post', url, params);
						if (data.code == 0) {
							_this.getPage();
						} else {
							_this.$api.msg(data.msg);
						}
					}
				}
			});
		},
		receive() {
			let params = {
				orderId: this.pageData.id
			};
			this.showOrderModal(Api.order.confimDelivery, params, '确认收货？', 4);
		},
		goRaty() {
			uni.navigateTo({
				url: '../b2c_order/raty?orderid=' + this.orderid
			});
		},
		pay() {
			let url = '/pages/order/payment/index?order_id=' + this.orderid + '&type=1';
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>
<style lang="scss">
.main-body {
	.order-sn {
		display: flex;
		flex-direction: column;
		font-size: $font-base;
		margin: $uni-spacing-col-base;
		.order-sn-content {
			display: flex;
			justify-content: space-between;
			padding: $uni-spacing-col-base 0;
			margin-bottom: $uni-spacing-col-base;
			border-bottom: 2upx solid $border-color-dark;
		}
	}
	.order-items {
		display: flex;
		flex-direction: column;
		margin: $uni-spacing-col-base;
		margin-top: $uni-spacing-col-base;
		.order-item {
			display: flex;
			margin-bottom: $uni-spacing-col-base;
			.imgbox {
				width: 144upx;
				height: 144upx;
			}
			.order-item-content {
				font-size: $font-lg;
				margin-left: 66upx;
				.order-item-wrappper {
					display: flex;
					width: 500upx;
					margin-top: $uni-spacing-row-lg;
					justify-content: space-between;
					.order-item-desc {
						display: flex;
						font-size: $font-base;
						.order-item-desc-number {
							color: $font-color-light;
						}
						.order-item-desc-price {
							margin-left: $uni-spacing-col-lg;
							color: $font-color-red;
						}
					}
					.order-item-btn {
						border-color: $font-color-spec;
						line-height: 50upx;
						height: 50upx;
					}
				}
			}
		}
	}
	.order-desc-wrapper {
		background-color: $all_bgcolor;
		padding-top: $uni-spacing-col-base;
		.order-tongji-wrapper {
			display: flex;
			font-size: $font-base;
			flex-direction: column;
			background-color: $uni-text-color-inverse;
			margin: $uni-spacing-col-base 0;
			.order-tongji {
				display: flex;
				justify-content: space-between;
				margin: $uni-spacing-col-sm 0;
				padding: 0 $uni-spacing-col-base;
				.order-tongji-num {
					color: $base-color;
				}
			}
		}
	}
	.order-status-wrapper {
		display: flex;
		.order-status {
			display: flex;
			justify-content: center;
			width: 100%;
			.btn {
				font-size: $font-base;
				border: 2upx solid $uni-color-success;
				padding: $uni-spacing-row-sm;
				margin: $uni-spacing-col-sm;
				border-radius: $uni-border-radius-lg;
				color: $font-color-spec;
				background: white;
			}
		}
	}
}
</style>
