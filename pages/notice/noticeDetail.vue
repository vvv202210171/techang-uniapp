<template>
	<view>
		<view class="notice-item">
			<text class="time">{{ notice.createTime }}</text>
			<view class="content">
				<text class="title">{{ notice.noticeTitle }}</text>
				<view class="img-wrapper"><image class="pic" :src="notice.noticePic"></image></view>
				<text class="introduce">{{ notice.noticeContent }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import Api from '@/common/api';
export default {
	data() {
		return { notice: { noticePic: '', createTime: '', noticeTitle: '', noticeContent: '' } };
	},
	onLoad(option) {
		this.loadNotice(option.id);
	},
	methods: {
		async loadNotice(id) {
			const data = await Api.apiCall('GET', Api.notice.getNotice, { id: id });
			if (data.code == 0) {
				this.notice = data.data;
				return;
			}
			this.$Api.msg(data.msg);
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f7f7f7;
	padding-bottom: 30upx;
}

.notice-item {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.time {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80upx;
	padding-top: 10upx;
	font-size: 26upx;
	color: #7d7d7d;
}

.content {
	width: 710upx;
	padding: 0 24upx;
	background-color: #fff;
	border-radius: 4upx;
}

.title {
	display: flex;
	align-items: center;
	height: 90upx;
	font-size: 32upx;
	color: #303133;
}

.img-wrapper {
	width: 100%;
	height: 260upx;
	position: relative;
}

.pic {
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 6upx;
}

.cover {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	font-size: 36upx;
	color: #fff;
}

.introduce {
	display: inline-block;
	padding: 16upx 0;
	font-size: 28upx;
	color: #606266;
	line-height: 38upx;
}

.bot {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80upx;
	font-size: 24upx;
	color: #707070;
	position: relative;
}

.more-icon {
	font-size: 32upx;
}
</style>
