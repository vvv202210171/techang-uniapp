<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular="true" duration="400" autoplay="true">
				<swiper-item class="swiper-item" v-for="(item, index) in luobos" :key="index">
					<view class="image-wrapper"><image :src="item" class="loaded" mode="aspectFill"></image></view>
				</swiper-item>
			</swiper>
		</view>

		<view class="introduce-section">
			<text class="title">{{ goods.goodsName }}</text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">{{ goods.goodsPrice }}</text>
				<text class="m-price">¥{{ goods.goodsOriginalPrice }}</text>
				<text class="coupon-tip">{{ ((goods.goodsPrice * 10) / goods.goodsOriginalPrice).toFixed(1) }}折</text>
			</view>
			<view class="bot-row">
				<text>销量: {{ goods.goodsSaleNum }}</text>
				<text>库存: {{ goods.goodsStock }}</text>
				<text>浏览量: {{ goods.goodsHit }}</text>
			</view>
		</view>

		<!--  分享 -->
		<view class="share-section" @click="share">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>
		</view>

		<view class="c-list">
			<view class="c-row b-b">
				<text class="tit">服务</text>
				<view class="bz-list con">
					<text>7天无理由退换货 ·</text>
					<text>假一赔十 ·</text>
				</view>
			</view>
		</view>

		<!-- 评价 -->
		<view class="eva-section" @click="toEvaluate">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>({{ consultCount.all }})</text>
				<text class="tit">好评</text>
				<text>({{ consultCount.goods }})</text>

				<text class="tit">一般</text>
				<text>({{ consultCount.general }})</text>

				<text class="tit">差评</text>
				<text>({{ consultCount.bad }})</text>
				<text class="tip" v-if="consultCount.persent != 200">好评率 {{ consultCount.persent }}%</text>
				<text class="yticon icon-you"></text>
			</view>
			<view class="eva-box" v-for="(item, index) in consultList" :key="item.id">
				<image :src="item.pic" class="portrait" mode="aspectFill"></image>
				<view class="right">
					<text class="name">{{ item.memberName }}</text>
					<text class="con">{{ item.consultContent }}</text>
					<view class="bot">
						<text class="attr">购买类型：{{ item.attr }}</text>
						<text class="time">{{ item.consultAddtime }}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="detail-desc">
			<view class="d-header"><text>图文详情</text></view>
			<rich-text :nodes="goods.goodsDetail"></rich-text>
		</view>

		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-gouwuche"></text>
				<text>购物车</text>
			</navigator>
			<view class="p-b-btn" :class="{ active: favorite }" @click="toFavorite(goods)">
				<text class="yticon icon-shoucang"></text>
				<text>收藏</text>
			</view>

			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy(goods)">立即购买</button>
				<button type="primary" class=" action-btn no-border add-cart-btn" @click="addCart(goods)">加入购物车</button>
			</view>
		</view>

		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="stopPrevent" @click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image :src="sku.pic"></image>
					<view class="right">
						<text class="price">¥{{ sku.price }}</text>
						<text class="stock">库存：{{ sku.stock }}件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">{{ sItem.name }}</text>
						</view>
					</view>
				</view>
				<view v-for="(item, index) in specList" :key="index" class="attr-list">
					<text>{{ item.name }}</text>
					<view class="item-list">
						<text
							v-for="(childItem, childIndex) in specChildList"
							v-if="childItem.pid === item.id"
							:key="childIndex"
							class="tit"
							:class="{ selected: childItem.selected }"
							@click="selectSpec(childIndex, childItem.pid)"
						>
							{{ childItem.name }}
						</text>
					</view>
				</view>
				<button class="btn" @click="toggleSpec">完成</button>
			</view>
		</view>
		<!-- 分享 -->
		<share ref="share" :contentHeight="580" :shareList="shareList"></share>
	</view>
</template>

<script>
import Api from '@/common/api';
import share from '@/components/share';
import { mapGetters } from 'vuex';
export default {
	components: {
		share
	},
	computed: {
		...mapGetters(['hasLogin'])
	},
	data() {
		return {
			specClass: 'none',
			specSelected: [],
			luobos: [],
			goods: {},
			sku: [],
			detailData: [],
			basicMarkingList: [],
			basicGiftsList: [],
			favorite: true,
			shareList: [],
			desc: ``,
			skuList: [],
			consultList: [],
			consultCount: {
				all: 0,
				bad: 0,
				general: 0,
				goods: 0
			},
			specList: [],
			specChildList: []
		};
	},
	async onLoad(ops) {
		//接收传值,id里面放的是标题，因为测试数据并没写id
		let id = ops.id;
		if (id) {
			let params = {
				id: ops.id
			};
			let data = await Api.apiCall('get', Api.goods.goodsDetail, params);
			if (data.code == 0) {
				let data1 = data.data;
				console.log(data1);
				this.goods.goodsDetail = data1.goodsDetail;
				this.luobos = JSON.parse(data1.goodsDetail.goodsGallery);

				for (let k in data1.goodsDetail) {
					if (k == 'goodsGallery') continue;
					this.goods[k] = data1.goodsDetail[k];
				}
				this.consultCount.all = data1.total;
				this.consultCount.bad = data1.chaping;
				this.consultCount.general = data1.yiban;
				this.consultCount.goods = data1.haoping;
				this.consultCount.persent = data1.haopingPencent;
				uni.setNavigationBarTitle({
					title: this.goods.goodsName
				});
			}
		}
	},

	methods: {
		//规格弹窗开关
		toggleSpec() {
			if (this.specClass === 'show') {
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			} else if (this.specClass === 'none') {
				this.specClass = 'show';
			}
		},
		//选择规格
		selectSpec(index, pid) {
			let list = this.specChildList;
			list.forEach(item => {
				if (item.pid === pid) {
					this.$set(item, 'selected', false);
				}
			});

			this.$set(list[index], 'selected', true);
			//存储已选择
			/**
			 * 修复选择规格存储错误
			 * 将这几行代码替换即可
			 * 选择的规格存放在specSelected中
			 */
			var specs = '';
			this.specSelected = [];
			if (list) {
				list.forEach(item => {
					if (item.selected === true) {
						this.specSelected.push(item);
						specs = item.name + ',' + specs;
					}
				});
				let valuesA = specs.substr(0, specs.length - 1).split(',');

				this.skuList.forEach(item => {
					if (valuesA.length == 1 && item.sp1 == valuesA[0]) {
						this.sku = item;
					}
					if (valuesA.length == 2 && item.sp2 == valuesA[0] && item.sp1 == valuesA[1]) {
						this.sku = item;
					}
					if (valuesA.length == 3 && item.sp3 == valuesA[0] && item.sp2 == valuesA[1] && item.sp1 == valuesA[2]) {
						this.sku = item;
					}
					if (!this.sku.pic) {
						this.sku.pic = this.goods.pic;
					}
					if (!this.sku.stock) {
						this.sku.stock = 0;
					}
					if (!this.sku.price) {
						this.sku.price = this.goods.price;
					}
				});
			}
		},
		//分享
		share() {
			this.$refs.share.toggleMask();
		},
		//收藏
		async toFavorite(item) {
			if (!this.hasLogin) {
				this.toLogin();
				return;
			}
			this.favorite = !this.favorite;
			let params = {
				memberId: userInfo.id,
				goodsId: item.id,
				type: 1,
				goodsName: item.goodsName,
				goodsPicUrl: item.goodsPicUrl,
				goodsPrice: item.goodsPrice,
				goodsSaleNum: item.goodsSaleNum
			};
			let data = await Api.apiCall('post', Api.goods.favoriteSave, params);
			if (data.code == 0) {
				this.$api.msg('收藏成功');
			}
		},
		async buy(item) {
			if (!this.hasLogin) {
				this.toLogin();
				return;
			}
			if (this.goods.stock < 1) {
				uni.showToast({
					title: '库存不够！'
				});
				return;
			}
			let data = await Api.apiCall('post', Api.order.addCart, {
				goodsId: item.id
			});
			if(data.code!=0){
				this.$api.msg(data.msg)
				return false;
			}
			uni.navigateTo({
				url: `/pages/order/createOrder?cartIds=${item.id}`
			});
		},
		toLogin() {
			let url = '/pages/public/login';
			uni.navigateTo({
				url
			});
		},
		async addCart(item) {
			if (!this.hasLogin) {
				this.toLogin();
				return;
			}
			let id = item.id;
			if (this.goods.stock < 1) {
				uni.showToast({
					title: '库存不够！'
				});
				return;
			}
			let data = await Api.apiCall('post', Api.order.addCart, { goodsId: id });
			if (data.code == 0) {
				this.$api.msg('添加购物车成功!');
				return true;
			}
			this.$api.msg(data.msg);
		},
		stopPrevent() {},
		toEvaluate() {
			uni.navigateTo({
				url: '/pages/order/evaluateList?id=' + this.goods.id
			});
		}
	}
};
</script>

<style lang="scss">
page {
	background: $page-color-base;
	padding-bottom: 160upx;
}

.icon-you {
	font-size: $font-base + 2upx;
	color: #888;
}

.carousel {
	height: 722upx;
	position: relative;

	swiper {
		height: 100%;
	}

	.image-wrapper {
		width: 100%;
		height: 100%;
	}

	.swiper-item {
		display: flex;
		justify-content: center;
		align-content: center;
		height: 750upx;
		overflow: hidden;

		image {
			width: 100%;
			height: 100%;
		}
	}
}

/* 标题简介 */
.introduce-section {
	background: #fff;
	padding: 20upx 30upx;

	.title {
		font-size: 32upx;
		color: $font-color-dark;
		height: 50upx;
		line-height: 50upx;
	}

	.price-box {
		display: flex;
		align-items: baseline;
		height: 64upx;
		padding: 10upx 0;
		font-size: 26upx;
		color: $uni-color-primary;
	}

	.price {
		font-size: $font-lg + 2upx;
	}

	.m-price {
		margin: 0 12upx;
		color: $font-color-light;
		text-decoration: line-through;
	}

	.coupon-tip {
		align-items: center;
		padding: 4upx 10upx;
		background: $uni-color-primary;
		font-size: $font-sm;
		color: #fff;
		border-radius: 6upx;
		line-height: 1;
		transform: translateY(-4upx);
	}

	.bot-row {
		display: flex;
		align-items: center;
		height: 50upx;
		font-size: $font-sm;
		color: $font-color-light;

		text {
			flex: 1;
		}
	}
}

/* 分享 */
.share-section {
	display: flex;
	align-items: center;
	color: $font-color-base;
	background: linear-gradient(left, #fdf5f6, #fbebf6);
	padding: 12upx 30upx;

	.share-icon {
		display: flex;
		align-items: center;
		width: 70upx;
		height: 30upx;
		line-height: 1;
		border: 1px solid $uni-color-primary;
		border-radius: 4upx;
		position: relative;
		overflow: hidden;
		font-size: 22upx;
		color: $uni-color-primary;

		&:after {
			content: '';
			width: 50upx;
			height: 50upx;
			border-radius: 50%;
			left: -20upx;
			top: -12upx;
			position: absolute;
			background: $uni-color-primary;
		}
	}

	.icon-xingxing {
		position: relative;
		z-index: 1;
		font-size: 24upx;
		margin-left: 2upx;
		margin-right: 10upx;
		color: #fff;
		line-height: 1;
	}

	.tit {
		font-size: $font-base;
		margin-left: 10upx;
	}

	.icon-bangzhu1 {
		padding: 10upx;
		font-size: 30upx;
		line-height: 1;
	}

	.share-btn {
		flex: 1;
		text-align: right;
		font-size: $font-sm;
		color: $uni-color-primary;
	}

	.icon-you {
		font-size: $font-sm;
		margin-left: 4upx;
		color: $uni-color-primary;
	}
}

.c-list {
	font-size: $font-sm + 2upx;
	color: $font-color-base;
	background: #fff;

	.c-row {
		display: flex;
		align-items: center;
		padding: 20upx 30upx;
		position: relative;
	}

	.tit {
		width: 140upx;
	}

	.con {
		flex: 1;
		color: $font-color-dark;

		.selected-text {
			margin-right: 10upx;
		}
	}

	.bz-list {
		height: 40upx;
		font-size: $font-sm + 2upx;
		color: $font-color-dark;

		text {
			display: inline-block;
			margin-right: 30upx;
		}
	}

	.con-list {
		flex: 1;
		display: flex;
		flex-direction: column;
		color: $font-color-dark;
		line-height: 40upx;
	}

	.red {
		color: $uni-color-primary;
	}
}

/* 评价 */
.eva-section {
	display: flex;
	flex-direction: column;
	padding: 20upx 30upx;
	background: #fff;
	margin-top: 16upx;

	.e-header {
		display: flex;
		align-items: center;
		height: 70upx;
		font-size: $font-sm + 2upx;
		color: $font-color-light;

		.tit {
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			margin-right: 4upx;
		}

		.tip {
			flex: 1;
			text-align: right;
		}

		.icon-you {
			margin-left: 10upx;
		}
	}
}

.eva-box {
	display: flex;
	padding: 20upx 0;

	.portrait {
		flex-shrink: 0;
		width: 80upx;
		height: 80upx;
		border-radius: 100px;
	}

	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
		font-size: $font-base;
		color: $font-color-base;
		padding-left: 26upx;

		.con {
			font-size: $font-base;
			color: $font-color-dark;
			padding: 20upx 0;
		}

		.bot {
			display: flex;
			justify-content: space-between;
			font-size: $font-sm;
			color: $font-color-light;
		}
	}
}

/*  详情 */
.detail-desc {
	background: #fff;
	margin-top: 16upx;

	.d-header {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80upx;
		font-size: $font-base + 2upx;
		color: $font-color-dark;
		position: relative;

		text {
			padding: 0 20upx;
			background: #fff;
			position: relative;
			z-index: 1;
		}

		&:after {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translateX(-50%);
			width: 300upx;
			height: 0;
			content: '';
			border-bottom: 1px solid #ccc;
		}
	}
}

/* 规格选择弹窗 */
.attr-content {
	padding: 10upx 30upx;

	.a-t {
		display: flex;

		image {
			width: 170upx;
			height: 170upx;
			flex-shrink: 0;
			margin-top: -40upx;
			border-radius: 8upx;
		}

		.right {
			display: flex;
			flex-direction: column;
			padding-left: 24upx;
			font-size: $font-sm + 2upx;
			color: $font-color-base;
			line-height: 42upx;

			.price {
				font-size: $font-lg;
				color: $uni-color-primary;
				margin-bottom: 10upx;
			}

			.selected-text {
				margin-right: 10upx;
			}
		}
	}

	.attr-list {
		display: flex;
		flex-direction: column;
		font-size: $font-base + 2upx;
		color: $font-color-base;
		padding-top: 30upx;
		padding-left: 10upx;
	}

	.item-list {
		padding: 20upx 0 0;
		display: flex;
		flex-wrap: wrap;

		text {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #eee;
			margin-right: 20upx;
			margin-bottom: 20upx;
			border-radius: 100upx;
			min-width: 60upx;
			height: 60upx;
			padding: 0 20upx;
			font-size: $font-base;
			color: $font-color-dark;
		}

		.selected {
			background: #fbebee;
			color: $uni-color-primary;
		}
	}
}

/*  弹出层 */
.popup {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 99;

	&.show {
		display: block;

		.mask {
			animation: showPopup 0.2s linear both;
		}

		.layer {
			animation: showLayer 0.2s linear both;
		}
	}

	&.hide {
		.mask {
			animation: hidePopup 0.2s linear both;
		}

		.layer {
			animation: hideLayer 0.2s linear both;
		}
	}

	&.none {
		display: none;
	}

	.mask {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.layer {
		position: fixed;
		z-index: 99;
		bottom: 0;
		width: 100%;
		min-height: 40vh;
		border-radius: 10upx 10upx 0 0;
		background-color: #fff;

		.btn {
			height: 66upx;
			line-height: 66upx;
			border-radius: 100upx;
			background: $uni-color-primary;
			font-size: $font-base + 2upx;
			color: #fff;
			margin: 30upx auto 20upx;
		}
	}

	@keyframes showPopup {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes hidePopup {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes showLayer {
		0% {
			transform: translateY(120%);
		}

		100% {
			transform: translateY(0%);
		}
	}

	@keyframes hideLayer {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(120%);
		}
	}
}

/* 底部操作菜单 */
.page-bottom {
	position: fixed;
	left: 30upx;
	bottom: 30upx;
	z-index: 95;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 690upx;
	height: 100upx;
	background: rgba(255, 255, 255, 0.9);
	box-shadow: 0 0 20upx 0 rgba(0, 0, 0, 0.5);
	border-radius: 16upx;

	.p-b-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: $font-sm;
		color: $font-color-base;
		width: 96upx;
		height: 80upx;

		.yticon {
			font-size: 40upx;
			line-height: 48upx;
			color: $font-color-light;
		}

		&.active,
		&.active .yticon {
			color: $uni-color-primary;
		}

		.icon-fenxiang2 {
			font-size: 42upx;
			transform: translateY(-2upx);
		}

		.icon-shoucang {
			font-size: 46upx;
		}
	}

	.action-btn-group {
		display: flex;
		height: 76upx;
		border-radius: 100px;
		overflow: hidden;
		box-shadow: 0 20upx 40upx -16upx #fa436a;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
		background: linear-gradient(to right, #ffac30, #fa436a, #f56c6c);
		margin-left: 20upx;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			top: 50%;
			right: 50%;
			transform: translateY(-50%);
			height: 28upx;
			width: 0;
			border-right: 1px solid rgba(255, 255, 255, 0.5);
		}

		.action-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 180upx;
			height: 100%;
			font-size: $font-base;
			padding: 0;
			border-radius: 0;
			background: transparent;
		}
	}
}

/* 分类推荐楼层 */
.hot-floor {
	width: 100%;
	overflow: hidden;
	margin-bottom: 20upx;

	.floor-img-box {
		width: 100%;
		height: 220upx;
		position: relative;
		display: flex;

		&:after {
			padding: 10 30upx;
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: linear-gradient(rgba(255, 255, 255, 0.06) 30%, #f8f8f8);
		}
	}

	.name {
		font-size: 30upx;
		color: $font-color-base;
		margin-left: 24upx;
	}

	.floor-img {
		width: 100%;
		height: 100%;
	}

	.floor-list {
		white-space: nowrap;
		padding: 20upx;
		padding-right: 50upx;
		border-radius: 6upx;
		margin-top: -140upx;
		margin-left: 30upx;
		background: #fff;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
		position: relative;
		z-index: 1;
	}

	.scoll-wrapper {
		display: flex;
		align-items: flex-start;
	}

	.floor-item {
		width: 180upx;
		margin-right: 20upx;
		font-size: $font-sm + 2upx;
		color: $font-color-dark;
		line-height: 1.8;

		image {
			width: 100upx;
			height: 180upx;
			border-radius: 6upx;
		}

		.price {
			color: $uni-color-primary;
		}
	}

	.more {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex-shrink: 0;
		width: 180upx;
		height: 180upx;
		border-radius: 6upx;
		background: #f3f3f3;
		font-size: $font-base;
		color: $font-color-light;

		text:first-child {
			margin-bottom: 4upx;
		}
	}
}
</style>
