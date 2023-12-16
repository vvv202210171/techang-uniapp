<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.receiveName" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.receivePhone" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">地址</text>
			<text class="input" @tap="showMulLinkageThreePicker">{{ addressData.address  }}</text>
			<text class="yticon icon-shouhuodizhi" @tap="showMulLinkageThreePicker"></text>
			<mpvueCityPicker :pickerValueDefault="cityPickerValueDefault" @onChange="changeAddr" @onConfirm="changeAddr" ref="mpvueCityPicker" />
		</view>
		<view class="row b-b">
			<text class="tit">详细地址</text>
			<input class="input" type="text" v-model="addressData.detailAddr" placeholder="详细地址" placeholder-class="placeholder" />
		</view>

		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="setDefault" color="#fa436a" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">提交</button>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import {
		mapState
	} from 'vuex';
	import Api from '@/common/api';
	export default {
		components: {
			mpvueCityPicker
		},
		computed:{
			setDefault(){
				return this.addressData.isDefault==1
			}
		},
		data() {
			return {
				defaule: false,
				pickerText: '选择省/市/区',
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				addressData: {
					receivePhone: '',
					receiveName: '',
					detailAddr: '',
					address: '',
					isDefault: 0
				}
			};
		},
		onLoad(option) {
			let title = '新增收货地址';
			if (option.type === 'edit') {
				title = '编辑收货地址';
				this.addressData = JSON.parse(option.data);
				console.log(this.addressData)
				this.addressData.address=this.addressData.province+"-"+this.addressData.city+"-"+this.addressData.area;
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			});
		},

		methods: {
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			changeAddr(e) {
			//	this.$set(this.addressData, 'address', e.label)
				//this.addressData.detailAddr=e.label;
				this.addressData.address = e.label;
				this.$forceUpdate();
			},
			switchChange(e) {
				console.log(e.detail)
				this.addressData.isDefault = e.detail.value?1:0;
			},

			//地图选择地址
			chooseLocation() {
				uni.chooseLocation({
					success: data => {
						console.log(data);
						this.addressData.detailAddr = data.address;
						this.addressData.address = data.name;
					}
				});
			},

			//提交
			async confirm() {
				let data = this.addressData;
				if (!data.receiveName) {
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.receivePhone)) {
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if (!data.address) {
					this.$api.msg('请选择地址');
					return;
				}
				if (!data.detailAddr) {
					this.$api.msg('请填写详细地址信息');
					return;
				}
				let params;
				if (this.manageType == 'edit') {
					params = {
						id: data.id,
						address: data.address,
						isDefault: data.isDefault,
						detailAddr: data.detailAddr,
						receivePhone: data.receivePhone,
						receiveName: data.receiveName
					};
				} else {
					params = {
						address: data.address,
						isDefault: data.isDefault,
						detailAddr: data.detailAddr,
						receivePhone: data.receivePhone,
						receiveName: data.receiveName
					};
				}

				data = await Api.apiCall('post', Api.order.addressSave, params);
				if (data.code === 0) {
					this.$api.msg(`地址${this.manageType == 'edit' ? '修改' : '添加'}成功`);
					setTimeout(() => {
						let url = '/pages/address/address';
						uni.navigateTo({
							url
						});
					}, 800);
				} else {
					this.$api.msg(`地址${this.manageType == 'edit' ? '修改' : '添加'}失败`);
				}
			}
		}
	};
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.input {
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
			min-width: 70%;

		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(0.9);
		}
	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}

	.box {
		width: 690upx;
		padding: 0 30upx;
		height: 80upx;
		line-height: 80upx;
		display: flex;
		margin-bottom: 20upx;
	}

	.box_left {
		width: 20%;
		height: 80upx;
	}

	.box_left_two {
		width: 550upx;
	}

	.box_right {
		width: 70%;
		height: 70upx;
		display: flex;

	}

	.box_right_right {
		width: 70%;
		height: 80upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.box_right_right input {
		width: 87%;
		height: 70upx;
		line-height: 70upx;

	}

	.box_right_right image {
		width: 40upx;
		height: 40upx;
	}

	.box_right image {
		width: 40upx;
		height: 40upx;
		margin-top: 20upx;
		margin-left: 30upx;
	}

	.box_right_two {
		width: 150upx;
	}

	.box_right input {
		width: 97%;
		height: 100%;
		border: 1upx #CCCCCC solid;
		border-radius: 15upx;
		padding-left: 3%;
		margin-top: 10upx;
		background-color: #FFFFFF;
	}

	.btn {
		width: 690upx;
		height: 90upx;
		line-height: 90upx;

		color: #ffffff;
		font-size: 32upx;
		margin-top: 120upx;
	}

	.citybtn {
		width: auto;
		height: 60upx;
		overflow: hidden;
	}
</style>
