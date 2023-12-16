<template>
	<view>
		<myIssue @submit="submit"><upload-images :url="uploadUrl" slot="upload" :imageList="imageList"></upload-images></myIssue>
	</view>
</template>

<script>
import Api from '@/common/api';
import myIssue from '@/components/myIssue.vue';
import uploadImages from '@/components/upload-images';
let userInfo = uni.getStorageSync('userInfo');
export default {
	components: {
		myIssue,
		uploadImages
	},
	onShow() {
		this.uploadUrl = Api.BASEURI + '/api/image/upload';
	},
	data() {
		return {
			imageList: [],
			uploadUrl: '',
			orderSn: 0,
			goodsId: 0
		};
	},
	onLoad(option) {
		this.orderSn = option.orderSn;
		this.goodsId = option.goodsId;
	},
	methods: {
		async loadEvaluate(id) {},
		async submit(value) {
			let pic = JSON.stringify(this.imageList.map(v => v.src));
			let param = {
				commentStar: value.score,
				commentPic: pic,
				commentOrderSn: this.orderSn,
				commentGoodsId: this.goodsId,
				commentText: value.textareaValue,
				commentMemberId: userInfo.id
			};
			let data = await Api.apiCall('POST', Api.comment.edit, param);
			if (data.code == 0) {
				uni.showModal({
					title: '提示',
					content: '谢谢您参与评论',
					showCancel: false,
					confirmText: '确定',
					success: function(res) {
						uni.navigateTo({
							url: '/pages/order/order?status='+0
						});
					}
				});
				return;
			}
			this.$api.msg(data.msg);
		}
	}
};
</script>

<style lang="scss"></style>
