<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">注册</view>
			<view class="welcome">欢迎回来！</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input type="number" v-model="mobile" placeholder="请输入手机号码" />
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input type="password" placeholder="请输入密码" v-model="password" @confirm="reg" />
				</view>
				<view class="input-item">
					<text class="tit">确认密码</text>
					<input type="password" placeholder="请输入确认密码" v-model="confimpassword" @confirm="reg" />
				</view>
			</view>
			<button class="confirm-btn" @click="reg" :disabled="logining">注册</button>
			<view class="forget-section">忘记密码?</view>
		</view>
		<view class="register-section">
			已经有账号?
			<text @click="toRegist">马上登录</text>
		</view>
	</view>
</template>

<script>
import { mapMutations } from 'vuex';
import Api from '@/common/api';
export default {
	data() {
		return {
			mobile: '',
			password: '',
			confimpassword: '',
			parnetId: 0,
			logining: false
		};
	},
	onLoad(ops) {
		if (ops.parentId) this.parnetId = ops.parentId;
	},
	methods: {
		inputChange(e) {
			const key = e.currentTarget.dataset.key;
			this[key] = e.detail.value;
		},
		navBack() {
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		toRegist() {
			uni.navigateTo({
				url: '/pages/public/login'
			});
		},
		async reg() {
			let phoneReg = /^1[1-9][0-9]\d{8}$/;
			try {
				if (this.mobile == '') {
					throw '请填写手机号';
				}
				if (!phoneReg.test(this.mobile)) {
					throw '手机号格式有误';
				}
				if (!this.password) {
					throw '请填写密码';
				}
				if (this.password != this.confimpassword) {
					throw '密码不一致';
				}
			} catch (err) {
				this.$api.msg(err);
				return;
			}

			this.logining = true;
			let parentId = this.parnetId;
			let params = { phone: this.mobile, password: this.password, parentId: parentId };
			let data = await Api.apiCall('post', Api.member.reg, params);
			this.logining = false;
			if (data.code === 0) {
				this.$common.modelShow(
					'线下支付说明',
					'请联系客服进行线下支付qq:951449465',
					() => {
						uni.navigateTo({
							url: '/pages/public/login'
						});
					},
					false,
					'确定'
				);
			} else {
				this.$api.msg('注册失败');
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
