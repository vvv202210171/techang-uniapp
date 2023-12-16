<template>
	<view class="content">
		<view class="banner">
			<view class="img" v-if="hasLogin">
				<tki-qrcode ref="qrcode" :size="300" :val="shareUrl" :usingComponents="hasLogin" :showLoading="hasLogin" :loadMake="hasLogin" />
			</view>
			<view class="tgtit">
				推广链接：
				<text class="tugurl">{{ shareUrl }}</text>
			</view>
			<view class="sharbuttn">
				<view class="btn" @click="save">保存二维码</view>
				<view class="btn" @click="sharurl">复制推广链接</view>
			</view>

			<!-- <button class="btn" @click="share">分享</button> -->
			<view class="shartitle"><view>分享</view></view>
			<view class="sharapk" @click="share">
				<view><image src="../../static/wechat.png"></image></view>
	<!-- 			<view><image src="../../static/shar.png"></image></view> -->
				<view><image src="../../static/qq.png"></image></view>
			</view>

			<view class="bottom">
				<view class="view-item">1、好友识别二维码通过手机号进行注册</view>
				<view class="view-item">2、注册后购买商品您即可获得相应团长收益</view>
				<view class="view-item">3、团长收益最高可获得顾客所买商品的10%收益</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';
import Api from '@/common/api';
export default {
	components: { tkiQrcode },
	data() {
		return {
			providerList: [],
			shareUrl: 'www.baidu.com',
			type: 0
		};
	},
	onLoad() {
		this.loadQr();
		this.loadProvider();
	},
	computed: {
		...mapState(['hasLogin', 'userInfo'])
	},
	methods: {
		async loadQr() {
			let data = await Api.apiCall('GET', Api.member.shareUrl, {});
			if (data.code != 0) {
				this.$api.msg(data.msg);
				return;
			}
			this.shareUrl = data.data;
		},
		loadProvider() {
			uni.getProvider({
				service: 'share',
				success: e => {
					let data = [];
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '分享到微信好友',
									id: 'weixin'
								});
								data.push({
									name: '分享到微信朋友圈',
									id: 'weixin',
									type: 'WXSenceTimeline'
								});
								break;
							case 'qq':
								data.push({
									name: '分享到QQ',
									id: 'qq'
								});
								break;
							default:
								break;
						}
					}
					this.providerList = data;
				},
				fail: e => {
					console.log('获取登录通道失败' + JSON.stringify(e));
				}
			});
		},
		//复制分享链接
		sharurl() {
			uni.setClipboardData({
				data: this.shareUrl,
				success: function() {
					console.log('success');
					uni.showModal({
						title: '复制成功',
						content: '内容已复制到粘贴板，可前往其他应用粘贴查看。',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								//console.log('用户点击确定');
							} else if (res.cancel) {
								//console.log('用户点击取消');
							}
						}
					});
				}
			});
		},
		//保存图片到相册
		save() {
			uni.showActionSheet({
				itemList: ['保存图片到相册'],
				success: () => {
					this.$refs.qrcode._saveCode();
				}
			});
		},
		share(e) {
			if (this.providerList.length === 0) {
				uni.showModal({
					title: '当前环境无分享渠道!',
					showCancel: false
				});
				return;
			}
			let itemList = this.providerList.map(function(value) {
				return value.name;
			});

			console.log(itemList);

			uni.showActionSheet({
				itemList: itemList,
				success: res => {
					console.log(this.providerList[res.tapIndex].id);
					if (this.providerList[res.tapIndex].id == 'qq') {
						this.type = 1;
					} else {
						this.type = 0;
					}
					uni.share({
						provider: this.providerList[res.tapIndex].id,
						scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession',
						type: this.type,
						title: '土特产商城',
						summary: '土特产是一个让你找到原生态的商城',
						//imageUrl: 'http://pds.jyt123.com/wxtest/logo.png',
						href: 'https://www.chtechang.cn',
						success: res => {
							console.log('success:' + JSON.stringify(res));
						},
						fail: e => {
							uni.showModal({
								content: e.errMsg,
								showCancel: false
							});
						}
					});
				}
			});
		},
		openLink() {
			plus.runtime.openWeb(this.sourceLink);
		}
	},
	onShareAppMessage(res) {
	 alert()
 }
};
</script>

<style lang="scss">
.tugurl {
	color: #999;
	font-size: $font-base;
}
.sharbuttn {
	display: flex;
	justify-content: center;
}
.shartitle {
	width: 80%;
	text-align: center;
	margin-left: 10%;
	border-bottom: 1px solid #dddddd;
	position: relative;
	height: 60upx;
}
.tgtit {
	text-align: center;
	margin-top: 10upx;
}
.shartitle view {
	height: 50upx;
	line-height: 50upx;
	font-size: 28upx;
	color: #999;
	width: 120upx;
	margin: 32upx auto;
	position: absolute;
	background: #fff;
	left: 50%;
	margin-left: -60upx;
}
.sharapk {
	display: flex;
	justify-content: center;
	margin: 20upx auto;
}
.sharapk view {
	margin: 40upx;
}
.sharapk view image {
	height: 80upx;
	width: 80upx;
}
.content {
	width: 100%;
	background-color: #ffffff;
}
.top {
	width: 100%;
	height: 400upx;
	background: url(https://g1xd.mediav.com/s?type=2&r=20&mv_ref=www.360kuai.com&enup=CAABfVnZ+wgAAvvZWX0A&mvid=NDM3NjkzMTEzMzgzMjA5MTgwNTAwMjA&bid=145aa16e0750b7b1&price=AAAAAF7F2bgAAAAAAA374vw0LDjH6WDzZ2vr9Q==&finfo=DAABCAABAAALwggAAgAAAIMEAAM/eJzI/CpXXQAIAAIAAAADCgADfrpFk4M+p/EIAAQAAAH1BgAKAAAGAA0cEwgADgAAAC8KAA8AAAAABkeDcAA&ugi=FcLilgEVttt3TBUCFUAVWBUAABXm9ZuHBxYEFcgBFoD4/tXOh9MFHBb/25Tl4ZSg58EBFQAAJd7GvNIJAA&uai=FdrtnQIlAhUEFpK9tMXenp66/QEV+Acl6+j26wMlABUaFAgcFpGAh4j/hLLiSBUAAAA&ubi=Fc7YaRXUv5QDFeL+xRoV3PqbXhUGFRwWvPWv5RcWkr3JrOjkorr9ATQCFqDgkIDAAiUGFbbysTgV+gUVACQUFoTbnq6NmObQLRUAJZBOFeoHFQwA&clickid=0&cpx=__OFFSET_X__&cpy=__OFFSET_Y__&cs=__EVENT_TIME_START__&ce=__EVENT_TIME_END__&adsw=__ADSPACE_W__&adsh=__ADSPACE_H__&csign2=vhbIL8AQy1U=&url=http%3A%2F%2Fdfe.zhiruida09.com%2F004%2F)
		no-repeat;
	background-size: 100%;
	background-position: center center;
}
.banner {
	width: 100%;
	background-color: #ffffff;
	border-radius: 60upx 60upx 0 0;
	margin-top: -60upx;
}
.banner dl {
	margin-top: -80upx;
}
.banner dl dt {
	text-align: center;
}
.banner dl dt image {
	width: 160upx;
	height: 160upx;
	border-radius: 50%;
}
.banner dl dd {
	text-align: center;
}
.img {
	width: 300upx;
	height: 300upx;
	background-color: red;
	margin: 0 auto;
	margin-top: 60upx;
}
.img image {
	width: 100%;
	height: 100%;
}
.btn {
	width: 260upx;
	height: 60upx;
	line-height: 60upx;
	margin: 0 auto;
	margin-top: 60upx;
	border-radius: 40upx;
	border: 0;
	font-size: 26upx;
	outline: 0;
	background: #33b17b;
	color: #ffffff;
	text-align: center;
}
.bottom {
	width: 100%;
	padding: $uni-spacing-col-lg;
	font-size: $uni-font-size-lg;
	.view-item {
		line-height: 50upx;
	}
}
</style>
