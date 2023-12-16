<template>
	<view class="charge-wrapper">
		<view class="charge-header">
			<view class="">
				<text>充值账号：</text>
				<text>{{ user.username }}</text>
			</view>
			<view>
				<text>当前余额：</text>
				<text>{{ user.balance }}</text>
			</view>
		</view>
		<view class="charge-content">
			<view class="charge-content-item" :class="{ active: curr == 0 }" @click="pay(10, 0)"><text>10￥</text></view>
			<view class="charge-content-item" :class="{ active: curr == 1 }" @click="pay(50, 1)"><text>50￥</text></view>
			<view class="charge-content-item" :class="{ active: curr == 2 }" @click="pay(100, 2)"><text>100￥</text></view>
			<view class="charge-content-item" :class="{ active: curr == 3 }" @click="pay(500, 3)"><text>500￥</text></view>
			<view class="charge-content-item" :class="{ active: curr == 4 }" @click="pay(1000, 4)"><text>1000￥</text></view>
			<view class="charge-content-item" :class="{ active: curr == 5 }" @click="pay(payment, 5)"><text>其他金额</text></view>
		</view>

		<view class="other-amount" v-if="curr == 5">
			<text>其他金额:</text>
			<input type="number" value="" v-model="payment" />
			<text class="ch-red">充值金额在10-100000元</text>
		</view>

		<view class="pay-amount">
			<text>应付金额:</text>
			<text class="pay-red">{{ payment }}</text>
		</view>
		<view class="pay-btn"><button type="primary" @click="toPpay()">确认支付</button></view>
	</view>
</template>

<script>
import Api from '@/common/api';
export default {
	data() {
		return {
			payment: 10,
			curr: 0,
			user: { username: '', balance: 0 }
		};
	},
	async onShow() {
		let params = {};
		let data = await Api.apiCall('get', Api.member.memberInfo, params);
		if (data.code != 0) {
			this.$api.msg(data.msg);
			return;
		}
		this.user = data.data;
	},
	methods: {
		pay(amount, index) {
			this.curr = index;
			this.payment = amount;
		},
		async toPpay(){
		if(!this.payment||this.payment<10||this.payment>100000){
			this.$api.msg("充值金额必须在10-100000元");
			return;
		}
		let params={orderType:2,payAmount:this.payment}
			let data = await Api.apiCall('POST', Api.order.bookOrder, params);
			console.log(data)
			if(data.code!=0){
				this.$common.errorToShow(data.msg);
				return;
			}
			let url = '/pages/order/payment/index?order_id=' + data.data + '&type=2&recharge='+this.payment;
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style lang="scss">
.charge-wrapper {
	font-size: $font-lg;
	.charge-header {
		display: flex;
		font-size: $font-base;
		justify-content: space-between;
		padding: $uni-spacing-col-lg;
		background: rgba(39, 176, 214, 0.15);
		margin: $uni-spacing-col-lg;
		border-radius: $uni-border-radius-lg;
	}
	.charge-content {
		display: flex;
		flex-wrap: wrap;
		.charge-content-item {
			width: 200upx;
			text-align: center;
			border: 2upx solid $border-color-base;
			height: 100upx;
			line-height: 100upx;
			margin: $uni-spacing-col-lg;
			border-radius: $uni-border-radius-lg;
		}
		.active {
			background: url(../../static/success1.png) no-repeat bottom right;
			border: 2upx solid #27b0d6;
			color: #27b0d6;
		}
	}
	.other-amount {
		display: flex;
		align-items: center;
		margin: $uni-spacing-col-lg;
		font-size: $font-base;
		input {
			width: 200upx;
			height: 80upx;
			border: 2upx solid $border-color-base;
			margin: 0 $uni-spacing-col-base;
		}
		.ch-red {
			color: $base-color;
		}
	}
	.pay-amount {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 50upx $uni-spacing-col-lg;
		.pay-red {
			color: #27b0d6;
			font-weight: bolder;
			font-size: 40upx;
		}
	}
	.pay-btn {
		margin: $uni-spacing-col-lg;
		button {
			background: #27b0d6;
		}
	}
}
</style>
