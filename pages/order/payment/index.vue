<template>
	<view class="app">
		<view class="price-box">
			<text>支付金额</text>
			<text class="price">{{orderInfo.orderPayAmount}}</text>
		</view>
		<payments-by-h5
				:orderId="orderId"
				:recharge="recharge"
				:type="type"
				:uid="userInfo.id"
		></payments-by-h5>
	</view>
</template>



<script>
    import paymentsByH5 from '@/pages/order/payment/paymentsByH5.vue'

	import Api from '@/common/api';

    export default {

        data () {
            return {
                orderId: 0,
                recharge: 0,
                type: 1,	// 订单类型 1商品订单 2充值订单
                orderInfo: {}, // 订单详情
                userInfo: {},	// 用户信息
				form_id:0
            }
        },

        components: {
            paymentsByH5
        },

        onLoad (options) {
            this.orderId = options.order_id
            this.type = Number(options.type)
			this.getOrderInfo()
       
        },
        methods: {
            // 获取订单详情
			async getOrderInfo () {

				let params = {'orderSn':this.orderId};
				let orderInfos = await Api.apiCall('get',Api.order.orderDetail,params);
				if(orderInfos.code!=0){
					this.$api.msg(orderInfos.msg);
					return;
				}
				this.orderInfo = orderInfos.data;
            }
        }
    }
</script>
<style lang='scss'>
	.app {
		width: 100%;
	}

	.price-box {
		background-color: #fff;
		height: 265upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #909399;

		.price{
			font-size: 50upx;
			color: #303133;
			margin-top: 12upx;
			&:before{
				content: '￥';
				font-size: 40upx;
			}
		}
	}

	.pay-type-list {
		margin-top: 20upx;
		background-color: #fff;
		padding-left: 60upx;

		.type-item{
			height: 120upx;
			padding: 20upx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60upx;
			font-size: 30upx;
			position:relative;
		}

		.icon{
			width: 100upx;
			font-size: 52upx;
		}
		.icon-erjiye-yucunkuan {
			color: #fe8e2e;
		}
		.icon-weixinzhifu {
			color: #36cb59;
		}
		.icon-alipay {
			color: #01aaef;
		}
		.tit{
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 4upx;
		}
		.con{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-sm;
			color: $font-color-light;
		}
	}
	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 630upx;
		height: 80upx;
		margin: 80upx auto 30upx;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}

</style>
