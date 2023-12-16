<template>
	<view class="content">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
			 @click="tabClick(index)">{{ item.text }}</view>
		</view>

		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300">
			<swiper-item class="tab-content" v-for="(tabItem, tabIndex) in navList" :key="tabIndex">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					<!-- 空白页 -->
					<empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty>

					<!-- 订单列表 -->
					<view v-for="(item, index) in tabItem.orderList" :key="index" class="order-item">
						<view class="i-top b-b">
							<text class="time" @click="navToDetailPage(item)">{{ item.createTime }}</text>
							<text class="state" :style="{ color: item.stateTipColor }" @click="navToDetailPage(item)">{{ item.id }}--</text>
							<text class="state" :style="{ color: item.stateTipColor }" @click="navToDetailPage(item)">{{ item.stateTip }}</text>
							<text v-if="item.orderStatus === 0" class="del-btn yticon icon-iconfontshanchu1" @click="cancelOrder(index)"></text>
						</view>

						<scroll-view v-if="item.orderItemList.length > 1" class="goods-box" scroll-y>
							<view v-for="(goodsItem, goodsIndex) in item.orderItemList" :key="goodsIndex" class="goods-item">
								<img class="goods-img" :src="goodsItem.goodsPicUrl" @click="navToDetailPage(item)" mode="aspectFill"></img>
							</view>
						</scroll-view>
						<view v-if="item.orderItemList.length === 1" class="goods-box-single" v-for="(goodsItem, goodsIndex) in item.orderItemList"
						 :key="goodsIndex">
							<img class="goods-img" :src="goodsItem.goodsPicUrl" mode="aspectFill"></img>
							<view class="right" @click="navToDetailPage(item)">
								<text class="title clamp">{{ goodsItem.goodsName }}</text>
								<text class="attr-box">数量： {{ goodsItem.buyNumber }}</text>
								<text class="price">{{ goodsItem.goodsPrice }}</text>
							</view>
						</view>

						<view class="price-box">
							共
							<text class="num">{{ item.orderItemList.length }}</text>
							件商品 实付款
							<text class="price">{{ item.orderPayAmount }}</text>
						</view>
						<view class="action-box b-t">
							<button v-if="item.orderStatus == 0" class="action-btn" @click="cancelOrder(item)">取消订单</button>
							<button v-if="item.orderStatus == 0" class="action-btn recom" @click="payOrder(item)">立即支付</button>
							<button v-if="item.orderStatus == 2" class="action-btn recom" @click="confimDelivery(item)">确认收货</button>
							<button v-if="item.orderStatus ==3" class="action-btn recom" @click="applyRefund(item)">申请退款</button>
							<button v-if="item.orderStatus === 3" class='action-btn recom' hover-class="btn-hover"  @click="toEvaluate(item.orderSn)">立即评价</button>
						</view>
					</view>
					<uni-load-more :status="loadingType"></uni-load-more>
				</scroll-view>

			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	import Api from '@/common/api';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from '@/components/empty';
	import {
		formatDate
	} from '@/common/date';
	export default {
		components: {
			uniLoadMore,
			empty
		},
		data() {
			return {
				tabCurrentIndex: 0,
				pageNum: 1,
				headerPosition: 'fixed',
				headerTop: '0px',
				loadingType: 'more', //加载更多状态
				navList: [{
						status: -1,
						text: '全部',
						loadingType: 'more',
						orderList: []
					},
					{
						status: 0,
						text: '待付款',
						loadingType: 'more',
						orderList: []
					},
					{
						status: 1,
						text: '待发货',
						loadingType: 'more',
						orderList: []
					},
					{
						status: 2,
						text: '已发货',
						loadingType: 'more',
						orderList: []
					},
					{
						status: 3,
						text: '已完成',
						loadingType: 'more',
						orderList: []
					},
					{
						status: 4,
						text: '申请退款',
						loadingType: 'more',
						orderList: []
					}
				]
			};
		},

		onLoad(options) {
			/**
			 * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
			 * 替换onLoad下代码即可
			 */
			this.tabCurrentIndex = this.navList.findIndex(v => v.status == options.status);

			this.loadData();
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = 'fixed';
			} else {
				this.headerPosition = 'absolute';
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.pageNum = 1;
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom() {
			this.pageNum = this.pageNum + 1;
			this.loadData();
		},
		computed: {
			...mapGetters(['hasLogin'])
		},
		methods: {
			//详情
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				uni.navigateTo({
					url: `/pages/order/orderDetail?orderSn=${item.orderSn}`
				});
			},
			//获取订单列表
			async loadData(type = 'add', loading) {
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let status = navItem.status;
				if (!this.hasLogin) {
					let url = '/pages/public/login';
					uni.navigateTo({
						url
					});
					return;
				}

				let params = {
					pageNum: this.pageNum,
					status: status
				};
				if (type === 'refresh') {
					navItem.orderList = [];
				}
				let data = await Api.apiCall('get', Api.order.orderList, params);
				const isfinish = navItem.orderList.length >= data.data.total;
				this.loadingType =isfinish? 'nomore' : 'more';
				if(isfinish) return ;
				let orderList = data.data.records;
				orderList=orderList.map(item=>{
					let obj= this.orderStateExp(item.orderStatus);
					console.log(obj)
					return Object.assign(obj,item);
				})
				console.log(orderList)
				navItem.orderList.push(...orderList);
				if (type === 'refresh') {
					if (loading == 1) {
						uni.hideLoading();
					} else {
						uni.stopPullDownRefresh();
					}
				}
			},

			//顶部tab点击
			tabClick(index) {
				this.pageNum = 1;
				this.tabCurrentIndex = index;
				this.loadData('refresh');
			},
			//删除订单
			async deleteOrder(index) {
				uni.showLoading({
					title: '请稍后'
				});
				setTimeout(() => {
					this.navList[this.tabCurrentIndex].orderList.splice(index, 1);
					uni.hideLoading();
				}, 600);
			},
			async payOrder(item) {
				this.$common.navigateTo(
					'/pages/order/payment/index?type=1&order_id=' + item.orderSn
				)

			},
			//取消订单
			async cancelOrder(item) {
				let params = {
					orderId: item.id
				};
				this.showOrderModal(Api.order.closeOrder,params,"您确定要取消订单吗？",0)

			},
			showOrderModal(url,params,content,tabCurrentIndex){
				let _this=this;
				uni.showModal({
					cancelText:"关闭",
					confirmText:"确定",
					content:content,
					async complete(res) {
						if(res.confirm){
							let data = await Api.apiCall('post', url, params);
							if (data.code==0) {
								_this.tabCurrentIndex = tabCurrentIndex;
								_this.pageNum = 1;
								_this.loadData('refresh');
							}else{
								_this.$api.msg(data.msg)
							}
						}
					}
				})
			},
			//订单确认收货
			async confimDelivery(item) {
				let params = {
					orderId: item.id
				};
				this.showOrderModal(Api.order.confimDelivery,params,"确认收货？",4)

			},
			//订单申请退款
			async applyRefund(item) {
			let params = {
				orderId: item.id
			};
			this.showOrderModal(Api.order.applyRefund,params,"您确定要申请退款吗？",5)
			},
			// 去评价
			toEvaluate(orderSn) {
				this.$common.navigateTo(
					'/pages/order/orderDetail?orderSn=' + orderSn
				)
			},

			//订单状态文字和颜色
			orderStateExp(value) {
				let stateTip = '',
					stateTipColor = '#fa436a';
				if (value === 0) {
					stateTipColor = '#909399';
					stateTip = '待付款';
				}else if (value === 1) {
					stateTipColor = '#909399';
					stateTip = '待发货';
				}else if (value === 2) {
					stateTip = '已发货';
				} else if (value === 3) {
					stateTip = '已完成';
				} else if (value === 4) {
					stateTip = '申请退款';
				} else if (value === 5) {
					stateTip = '无效订单';
				} else if (value === 6) {
					stateTipColor = '#909399';
					stateTip = '维权中';
				} else if (value === 7) {
					stateTip = ' 维权已完成';
				} else if (value === 8) {
					stateTip = '待分享';
				} else if (value === 13) {
					stateTip = '申请退款';
				} else if (value === 14) {
					stateTip = '已退款';
				} else if (value === 15) {
					stateTip = '已关闭';
				} else if (value === 16) {
					stateTip = '无效订单';
				} else {
					stateTip = '待付款';
				}

				return {
					stateTip,
					stateTipColor
				};
			},

			dateFormat(time) {
				if (time == null || time === '') {
					return 'N/A';
				}
				let date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
			}
		}
	};
</script>

<style lang="scss">
	page,
	.content {
		background: $page-color-base;
		height: 100%;
	}

	.swiper-box {
		height: calc(100% - 40px);
	}

	.list-scroll-content {
		height: 100%;
	}

	.navbar {
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
		position: relative;
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			color: $font-color-dark;
			position: relative;

			&.current {
				color: $base-color;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid $base-color;
				}
			}
		}
	}

	.uni-swiper-item {
		height: auto;
	}

	.order-item {
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		background: #fff;
		margin-top: 16upx;

		.i-top {
			display: flex;
			align-items: center;
			height: 80upx;
			padding-right: 30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;

			.time {
				flex: 1;
			}

			.state {
				color: $base-color;
			}

			.del-btn {
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;

				&:after {
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}

		/* 多条商品 */
		.goods-box {
			height: 160upx;
			padding: 20upx 0;
			white-space: nowrap;

			.goods-item {
				width: 120upx;
				height: 120upx;
				display: inline-block;
				margin-right: 24upx;
			}

			.goods-img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}

		/* 单条商品 */
		.goods-box-single {
			display: flex;
			padding: 20upx 0;

			.goods-img {
				display: block;
				width: 120upx;
				height: 120upx;
			}

			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;

				.title {
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					line-height: 1;
				}

				.attr-box {
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					padding: 10upx 12upx;
				}

				.price {
					font-size: $font-base + 2upx;
					color: $font-color-dark;

					&:before {
						content: '￥';
						font-size: $font-sm;
						margin: 0 2upx 0 8upx;
					}
				}
			}
		}

		.price-box {
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 30upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;

			.num {
				margin: 0 8upx;
				color: $font-color-dark;
			}

			.price {
				font-size: $font-lg;
				color: $font-color-dark;

				&:before {
					content: '￥';
					font-size: $font-sm;
					margin: 0 2upx 0 8upx;
				}
			}
		}

		.action-box {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100upx;
			position: relative;
			padding-right: 30upx;
		}

		.action-btn {
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			background: #fff;
			border-radius: 100px;

			&:after {
				border-radius: 100px;
			}

			&.recom {
				background: #fff9f9;
				color: $base-color;

				&:after {
					border-color: #f7bcc8;
				}
			}
		}
	}

	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center;
	}

	.uni-load-more__text {
		font-size: 28upx;
		color: #999;
	}

	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px;
	}

	.uni-load-more__img>view {
		position: absolute;
	}

	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: 0.2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite;
	}

	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px;
	}

	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0;
	}

	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px;
	}

	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0;
	}

	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px;
	}

	.load2 {
		transform: rotate(30deg);
	}

	.load3 {
		transform: rotate(60deg);
	}

	.load1 view:nth-child(1) {
		animation-delay: 0s;
	}

	.load2 view:nth-child(1) {
		animation-delay: 0.13s;
	}

	.load3 view:nth-child(1) {
		animation-delay: 0.26s;
	}

	.load1 view:nth-child(2) {
		animation-delay: 0.39s;
	}

	.load2 view:nth-child(2) {
		animation-delay: 0.52s;
	}

	.load3 view:nth-child(2) {
		animation-delay: 0.65s;
	}

	.load1 view:nth-child(3) {
		animation-delay: 0.78s;
	}

	.load2 view:nth-child(3) {
		animation-delay: 0.91s;
	}

	.load3 view:nth-child(3) {
		animation-delay: 1.04s;
	}

	.load1 view:nth-child(4) {
		animation-delay: 1.17s;
	}

	.load2 view:nth-child(4) {
		animation-delay: 1.3s;
	}

	.load3 view:nth-child(4) {
		animation-delay: 1.43s;
	}

	@-webkit-keyframes load {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0.2;
		}
	}
</style>
