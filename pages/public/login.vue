<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">欢迎回来！</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input type="number" v-model="username" placeholder="请输入手机号码" />
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input type="password" placeholder="请输入密码" v-model="password" @confirm="toLogin" />
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin" :disabled="logining">登录</button>
			<!-- #ifdef MP-WEIXIN -->
			<button class="confirm-btn" type="primary" open-type="getUserInfo" @getuserinfo="wxGetUserInfo" withCredentials="true">微信登录</button>
			<!-- #endif -->
			<view class="forget-section" @click="toForgetPwd">忘记密码?</view>
		</view>
		<view class="register-section">
			还没有账号?
			<text @click="toRegist">马上注册</text>
		</view>
	</view>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Api from '@/common/api';
import store from '@/store/index';
export default {
	data() {
		return {
			username: '15917045458',
			password: '15917045458',
			logining: false
		};
	},
	onLoad() {},

	methods: {
		...mapMutations(['login']),
		inputChange(e) {
			const key = e.currentTarget.dataset.key;
			this[key] = e.detail.value;
		},
		navBack() {
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		toForgetPwd() {
			uni.navigateTo({
				url: '/pages/public/forgetPwd'
			});
		},
		toRegist() {
			uni.navigateTo({
				url: '/pages/public/reg'
			});
		},
		wxGetUserInfo: function(res) {
			if (!res.detail.iv) {
				uni.showToast({
					title: '您取消了授权,登录失败',
					icon: 'none'
				});
				return false;
			}
			const that = this;
			let raw= res.detail.rawData;
			let cloudID= res.detail.cloudID;
			let encryptedData= res.detail.encryptedData;
			let iv=res.detail.iv;
			let signature=res.detail.signature;
			uni.login({
				provider: 'weixin',
				success: async function(loginRes) {
					let params= {
							code: loginRes.code,
							userInfo:raw ,
							cloudID:cloudID ,
							encrypted_data: encryptedData,
							iv:iv ,
							type: 1,
							signature:signature 
						}
					let res= await Api.apiCall('post', Api.member.loginByWxApplet, params);
					that.loginSuccess(res)
				}
			});
		},
		async toLogin() {
			let phoneReg = /^1[1-9][0-9]\d{8}$/;
			try {
				if (this.username == '') {
					throw '请填写手机号';
				}
				if (!phoneReg.test(this.username)) {
					throw '手机号格式有误';
				}
				if (this.password == '') {
					throw '请填写密码';
				}
			} catch (err) {
				this.$api.msg(err);
				return;
			}
			this.logining = true;
			let params = { username: this.username, password: this.password };
			let data = await Api.apiCall('post', Api.member.login, params);
			this.logining = false;
			this.loginSuccess(data);
		},
		loginSuccess(data){
			if (data.code == 0) {
				let data1 = data.data;
				this.login(data1);
				uni.switchTab({
					url: '/pages/index/index'
				});
			} else {
				this.$api.msg(data.msg);
			}
			
		}
		
	}
};
</script>

<style lang="scss">
page {
	background: #fff;
}
.container {
	padding-top: 115px;
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background: #fff;
}
.wrapper {
	position: relative;
	z-index: 90;
	background: #fff;
	padding-bottom: 40upx;
}
.back-btn {
	position: absolute;
	left: 40upx;
	z-index: 9999;
	padding-top: var(--status-bar-height);
	top: 40upx;
	font-size: 40upx;
	color: $font-color-dark;
}
.left-top-sign {
	font-size: 120upx;
	color: $page-color-base;
	position: relative;
	left: -16upx;
}
.right-top-sign {
	position: absolute;
	top: 80upx;
	right: -30upx;
	z-index: 95;
	&:before,
	&:after {
		display: block;
		content: '';
		width: 400upx;
		height: 80upx;
		background: #b4f3e2;
	}
	&:before {
		transform: rotate(50deg);
		border-radius: 0 50px 0 0;
	}
	&:after {
		position: absolute;
		right: -198upx;
		top: 0;
		transform: rotate(-50deg);
		border-radius: 50px 0 0 0;
		/* background: pink; */
	}
}
.left-bottom-sign {
	position: absolute;
	left: -270upx;
	bottom: -320upx;
	border: 100upx solid #d0d1fd;
	border-radius: 50%;
	padding: 180upx;
}
.welcome {
	position: relative;
	left: 50upx;
	top: -90upx;
	font-size: 46upx;
	color: #555;
	text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
}
.input-content {
	padding: 0 60upx;
}
.input-item {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 0 30upx;
	background: $page-color-light;
	height: 120upx;
	border-radius: 4px;
	margin-bottom: 50upx;
	&:last-child {
		margin-bottom: 0;
	}
	.tit {
		height: 50upx;
		line-height: 56upx;
		font-size: $font-sm + 2upx;
		color: $font-color-base;
	}
	input {
		height: 60upx;
		font-size: $font-base + 2upx;
		color: $font-color-dark;
		width: 100%;
	}
}

.confirm-btn {
	width: 630upx;
	height: 76upx;
	line-height: 76upx;
	border-radius: 50px;
	margin-top: 70upx;
	background: $uni-color-primary;
	color: #fff;
	font-size: $font-lg;
	&:after {
		border-radius: 100px;
	}
}
.forget-section {
	font-size: $font-sm + 2upx;
	color: $font-color-spec;
	text-align: center;
	margin-top: 40upx;
}
.register-section {
	position: absolute;
	left: 0;
	bottom: 50upx;
	width: 100%;
	font-size: $font-sm + 2upx;
	color: $font-color-base;
	text-align: center;
	text {
		color: $font-color-spec;
		margin-left: 10upx;
	}
}
</style>
