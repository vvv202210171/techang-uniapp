<!-- components/evaluate-components/index.wxml -->
<template>
	<view class="evaluateBox">
		<view class="evaluate-header">
			<view class="title">
				<text v-if="isShowIcon" class="iconfont" style="color:#999">&#xe640;</text>
				<text v-if="isShowTotal" style="margin-left: 10upx;">评价 ({{ total }})</text>
			</view>
			<view class="total">
				<view class="stars">
					<view class="stars-normal">
						<view class="box">
							<block v-for="i in 5" :key="i"><text class="iconfont">&#xe870;</text></block>
						</view>
					</view>
					<view class="stars-selected" :style="{ width: (rate / 5) * 100 + '%' }">
						<view class="box">
							<block v-for="j in 5" :key="j"><text class="iconfont">&#xe870;</text></block>
						</view>
					</view>
				</view>
				<text>{{ rate }}{{ (rate * 10) % 10 == 0 ? '.0' : '' }}</text>
			</view>
		</view>

		<view class="lists" v-if="listData.length > 0">
			<block v-for="(item, index_) in listData" :key="index_">
				<view class="item">
					<view class="icon"><image :src="item.headerImg" mode="widthFix" style="width:100%" /></view>
					<view class="info">
						<view class="name-time">
							<text class="name">{{ item.commentMemberName }}</text>
							<text class="time">{{ item.createTime }}</text>
						</view>
						<view class="stars">
							<view class="stars-normal">
								<view class="box">
									<block v-for="i_ in 5" :key="i_"><text class="iconfont">&#xe870;</text></block>
								</view>
							</view>
							<view class="stars-selected" :style="{ width: (item.commentStar / 5) * 100 + '%' }">
								<view class="box">
									<block v-for="j_ in 5" :key="j_"><text class="iconfont">&#xe870;</text></block>
								</view>
							</view>
						</view>
						<view class="evaluate-content">
							<text>{{ item.commentText || '用户暂未评价' }}</text>
							<view class="imgs" v-if="item.commentPic">
								<block v-for="(imgurl, index) in item.commentPic" :key="index">
									<view class="imgs-box"><image :src="imgurl" mode="widthFix" style="width: 100%;" @click="previewImg(imgurl, item.commentPic)"></image></view>
								</block>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<view class="no-lists" v-else>暂无评论</view>
	</view>
</template>

<script>
//数据模拟
import Api from '@/common/api';
export default {
	data() {
		return { listData: [], isShowTotal: true, isShowIcon: true, rate: 5,loadFinish:false,page:{pageSize:6,pageNum:1,commentGoodsId:0},total:0};
	},
	onLoad(option) {
		this.page.commentGoodsId=option.id;
		this.loadUserComment();
	},
	methods: {
		previewImg(src, urls) {
			uni.previewImage({
				current: src,
				urls
			});
		},
		async loadUserComment(){
			let data=await Api.apiCall("GET",Api.comment.commentList,this.page);
			if(data.code==0){
				let data1=data.data;
				data1.records= data1.records.map(v=>{
					v.commentPic=JSON.parse(v.commentPic);
					v.headerImg=require("@/static/missing-face.png")
					return v;
				})
				this.listData.push(...data1.records);
				this.total=data1.total;
				if(data1.total<=this.listData.length)this.loadFinish=true;
				this.page.pageNum++;
			}
		},
			onReachBottom() {
				if(!this.loadFinish)
			 this.loadRandomProduct();
			}
	}
};
</script>
<style scoped>
@font-face {
	font-family: 'iconfont'; /* project id 1237225 */
	src: url('https://at.alicdn.com/t/font_1237225_y90nldmnpij.eot');
	src: url('https://at.alicdn.com/t/font_1237225_y90nldmnpij.eot?#iefix') format('embedded-opentype'),
		url('https://at.alicdn.com/t/font_1237225_y90nldmnpij.woff2') format('woff2'), url('https://at.alicdn.com/t/font_1237225_y90nldmnpij.woff') format('woff'),
		url('https://at.alicdn.com/t/font_1237225_y90nldmnpij.ttf') format('truetype'), url('https://at.alicdn.com/t/font_1237225_y90nldmnpij.svg#iconfont') format('svg');
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-pingjia-copy:before {
	content: '\e640';
}

.icon-xingxing:before {
	content: '\e870';
}

.evaluateBox {
	width: 100%;
	margin-bottom: 120upx;
}

.evaluate-header {
	width: 100%;
	height: 80upx;
	display: flex;
	justify-content: space-between;
	padding: 20upx;
	align-items: center;
	margin-bottom: 12upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #e5e5e5;
}

.evaluateBox .title {
	display: flex;
	align-items: center;
	color: #000000;
	font-size: 30upx;
}

.total {
	/* flex: 1; */
	height: 100%;
	font-size: 30upx;
	color: #d76d9d;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.stars {
	width: 180upx;
	height: 36upx;
	position: relative;
}
.stars .box {
	width: 180upx;
}
.stars-normal {
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	color: #ccc;
}
.stars-selected {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
	color: #fde16d;
	overflow: hidden;
}
.stars-selected .iconfont,
.stars-normal .iconfont {
	font-size: 36upx;
}

.lists .item {
	padding: 20upx;
	display: flex;
	/* height: auto; */
	/* align-items: center; */
	font-size: 22upx;
	color: #999;
}

.lists .item .icon {
	width: 60upx;
	height: 60upx;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 26upx;
	/* align-self: flex-start; */
}

.lists .item .info {
	flex: 1;
	font-size: 26upx;
	color: #666;
}

.info .name-time {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 6upx;
}
.lists .info .stars {
	width: 140upx;
}

.info .stars-normal .iconfont,
.info .stars-selected .iconfont {
	font-size: 28upx;
}

.info .stars .box {
	width: 140upx;
}
.lists .info .evaluate-content {
	color: #000;
	font-size: 28upx;
	text-align: left;
	padding-top: 6upx;
}
.info .evaluate-content .imgs {
	display: flex;
	flex-wrap: wrap;
	padding-top: 6upx;
}
.evaluate-content .imgs .imgs-box {
	width: 25%;
	padding-right: 10upx;
	box-sizing: border-box;
}
/* .evaluate-content .imgs .imgs-box:nth-child(4n+1){
	padding-left: 0;
}
.evaluate-content .imgs .imgs-box:nth-child(4n){
	padding-right: 0;
} */
.no-lists {
	padding: 20upx 0;
	text-align: center;
	font-size: 24upx;
	color: #666;
}
</style>
