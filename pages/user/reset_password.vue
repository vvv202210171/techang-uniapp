<template>
	<view>
		<!-- <form @submit="formSubmit"> -->
		<view class="section">
			<input name="account" v-model="params.oldPassword" password="true" maxlength="32" placeholder="请输入旧密码" placeholder-style="font-size:15px" class="password" />
			<view class="eyesBox"><image src="http://rs.eonfox.cc/clzy/static/eyes.png" class="eyes"></image></view>
		</view>
		<view class="section">
			<input name="password" password="true" v-model="params.newPassword" maxlength="32" placeholder="请确认新密码" placeholder-style="font-size:26upx" class="password" />
			<view class="eyesBox"><image src="http://rs.eonfox.cc/clzy/static/eyes.png" mode="" class="eyes"></image></view>
		</view>
		<view class="section">
			<input name="password" password="true" v-model="params.confirmPassword" maxlength="32" placeholder="请确认确认密码" placeholder-style="font-size:26upx" class="password" />
			<view class="eyesBox"><image src="http://rs.eonfox.cc/clzy/static/eyes.png" mode="" class="eyes"></image></view>
		</view>
		<view class="remind"><text class="remindText">密码长度8~24位,必须包含数字/字母/符号至少2种以上元素</text></view>
		<view class="btn-area"><button formType="submit" @click="formSubmit()" class="buttons">确认提交</button></view>
		<!-- </form> -->
	</view>
</template>

<script>
import Api from '@/common/api';
export default {
	data() {
		return {
			params:{
				oldPassword: '',
				newPassword: '',
				confirmPassword:""
			}
		};
	},
	methods: {
		async formSubmit() {
			if(this.params.newPassword!=this.params.confirmPassword ){
				this.$api.msg("密码不一致")
				return;
			}
				const data = await Api.apiCall('POST', Api.member.resetPwd, this.params);
				if(data.code!=0){
					this.$api.msg(data.msg);
					return;
				}
			uni.showToast({
				title: '密码修改成功',
				icon: 'success',
				success() {
					setTimeout(function() {
						uni.navigateTo({
							url:'/pages/public/login'
						});
					}, 1000);
				}
			});
	}
	}
};
</script>

<style scoped lang="scss">
.section {
	width: 90%;
	// height 80upx
	margin: 20upx auto;
	padding: 18upx 0;
	background: #f2f2f2;
	border-radius: 10upx;
	position: relative;
	top: 5px;
	.eyesBox {
		position: absolute;
		right: 10upx;
		top: 5upx;
		height: 100%;
		width: 60upx;
		.eyes {
			width: 40upx;
			height: 40upx;
			position: absolute;
			right: 10upx;
			top: 25upx;
		}
	}
}
.remind {
	width: 90%;
	height: 80upx;
	margin: 20upx auto;
	font-size: 26upx;
	color: #a9a9a9;
	.remindText {
		height: 80upx;
		line-height: 80upx;
	}
}
.btn-area {
	width: 90%;
	margin: 10upx auto;
	.buttons {
		color: #fff;
		background: #f76968;
	}
}
</style>
