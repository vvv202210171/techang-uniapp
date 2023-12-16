<template>
	<view class="content">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>

		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300">
			<swiper-item class="tab-content" v-for="(tabItem, tabIndex) in navList" :key="tabIndex">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					<!-- 空白页 -->
					<empty v-if="tabItem.loaded === true && tabItem.list.length === 0"></empty>

					<view class="fri" v-if="tabIndex == 0">
						<view class="fri-row" v-for="(user,key) in tabItem.list" :key="key">
							<view class="fri-col">{{user.username}}</view>
							<view class="fri-col">{{user.createTime}}</view>
						</view>
					</view>

					<view class="profit" v-if="tabIndex == 1">
						<view class="profit-row">
							<view class="profit-user">谁给的</view>
							<view class="profit-amt">金额(元)</view>
							<view class="profit-date">时间</view>
						</view>
						<view class="profit-row" v-for="(profit,key) in tabItem.list" :key="key">
							<view class="profit-user">{{profit.createBy}}</view>
							<view class="profit-amt">{{profit.userCapitalAmount}}</view>
							<view class="profit-date">{{profit.createTime}}</view>
						</view>
					</view>

					<uni-load-more :status="loadingType"></uni-load-more>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import { mapGetters } from 'vuex';
import Api from '@/common/api';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import empty from '@/components/empty';
import { formatDate } from '@/common/date';
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
			navList: [
				{
					text: '邀请列表',
					loadingType: 'more',
					list: []
				},
				{
					text: '收益',
					loadingType: 'more',
					list: []
				}
			]
		};
	},

	onLoad() {
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
		//获取订单列表
		async loadData(type = 'add', loading) {
			//这里是将订单挂载到tab列表下
			let index = this.tabCurrentIndex;
			let navItem = this.navList[index];
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
				navItem.list = [];
			}
			let data=null;
			if(index==0){
				data = await Api.apiCall('get', Api.member.friendList, params);
			}else{
				data=await  Api.apiCall('get', Api.member.profitList, params);
			}
			
			const isfinish = navItem.list.length >= data.data.total;
			this.loadingType = isfinish ? 'nomore' : 'more';
			if (isfinish) return;
			let list = data.data.records;
			navItem.list.push(...list);
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
							_this.tabCurrentIndex = tabCurrentIndex;
							_this.pageNum = 1;
							_this.loadData('refresh');
						} else {
							_this.$api.msg(data.msg);
						}
					}
				}
			});
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
	background: $uni-bg-color-grey;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
	position: relative;
	z-index: 10;
	color: $color-light;
	.nav-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 15px;
		position: relative;

		&.current {
			color: $uni-text-color-inverse;
			background: $theme-color;
		}
	}
}

.uni-swiper-item {
	height: auto;
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

.uni-load-more__img > view {
	position: absolute;
}

.uni-load-more__img > view view {
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

.uni-load-more__img > view view:nth-child(1) {
	transform: rotate(90deg);
	top: 2px;
	left: 9px;
}

.uni-load-more__img > view view:nth-child(2) {
	transform: rotate(180deg);
	top: 11px;
	right: 0;
}

.uni-load-more__img > view view:nth-child(3) {
	transform: rotate(270deg);
	bottom: 2px;
	left: 9px;
}

.uni-load-more__img > view view:nth-child(4) {
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
.fri-row {
	display: flex;
	justify-content: space-between;
	padding: 30upx 10upx 10upx;
	font-size: $font-base;
	border-bottom: 2upx solid $theme-color;
}
.profit-row {
	display: flex;
	justify-content: space-around;
	padding: 30upx 10upx 10upx;
	font-size: $font-base;
	border-bottom: 2upx solid $theme-color;
	text-align: center;
	.profit-user{
		width: 250upx;
	}
	.profit-amt{
		width: 150upx;
	}
	.profit-date{
		width: 350upx;
	}
}
</style>
