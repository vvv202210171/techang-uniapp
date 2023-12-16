<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="welcome">欢迎回来！</view>
		<view class="wrapper">
			<view class="input-content">
				<view class="input-item">
					<text class="tit">新密码</text>
					<input type="password" placeholder="请输入新密码" v-model="newPassword" @confirm="update" />
				</view>
				<view class="input-item">
					<text class="tit">确认密码</text>
					<input type="password" placeholder="请输入确认密码" v-model="confimpassword" @confirm="update" />
				</view>
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input type="number" v-model="phone" placeholder="请输入手机号码" />
				</view>
				<view class="input-item input-code">
					<input type="number" v-model="code" placeholder="验证码" />
					<button type="primary" class="btn-get" :disabled="isCodeDisable" @click="clickSendCode()">{{btnText}}</button>
				</view>
			</view>
			<button class="confirm-btn" @click="update" :disabled="logining">确定</button>
		</view>
	</view>
</template>

<script>
	import Api from '@/common/api';
	export default {
		data() {
			return {
				newPassword: "",
				confimpassword: "",
				phone: "",
				logining: false,
				isCodeDisable: false,
				btnText: "获取验证码",
				timer: null,
				code: "",
				countdown: 30,
			};
		},
		methods: {
			navBack(){
				uni.navigateTo({
					url:'/pages/public/login'
				})
			},
			async clickSendCode() {
				if (!/^1[1-9][0-9]\d{8}$/.test(this.phone)) {
					this.$api.msg("手机号码格式有误");
					return;
				}
				const data = await Api.apiCall("POST", Api.member.geneCode, {
					phone: this.phone
				});
				if (data.code == 0) {
					this.isCodeDisable = true;
					this.timer = setInterval(() => {
						this.btnText = "倒计时" + (--this.countdown);
						if (this.countdown <= 0) {
							this.countdown=30;
							this.isCodeDisable = false;
							clearInterval(this.timer);
							this.btnText="获取验证码";
						}
					}, 1000);
					return;
				}
				uni.showToast({
					title: data.msg
				})
			},
			validateForm() {
				try {
					if (!this.phone) {
						throw '请填写手机号';
					}
					let phoneReg = /^1[1-9][0-9]\d{8}$/;
					if (!phoneReg.test(this.phone)) {
						throw '手机号格式有误';
					}
					if (!this.newPassword) {
						throw '请填写密码';
					}
					if (this.newPassword != this.confimpassword) {
						throw "密码不一致";
					}
					return true;
				} catch (err) {
					this.$api.msg(err);
					return false;
				}
			},
			async update() {
				if (!this.validateForm()) return;
				let params = {
					newPassword: this.newPassword,
					phone: this.phone,
					code: this.code
				};
				const data = await Api.apiCall('POST', Api.member.forgetPwd, params);
				if (data.code == 0) {
					this.$api.msg("修改成功");
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/public/login'
						})
					}, 1000);

					return true;
				}
				this.$api.msg(data.msg);
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #fff;
	}

	.container {
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
		top: 160upx;
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

	.input-code {
		flex-direction: row;
		align-items: center;
		height: 96upx;
		line-height: 96upx;
		color: $bgcolor_white;

		.btn-get {
			background-color: #bf9fff;
			width: 288upx;
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
