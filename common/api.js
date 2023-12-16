import store from '../store/index';
export default {

	//BASEURI: 'https://www.chtechang.cn/',
	BASEURI: 'http://localhost:8090/',
	es: {
		searchList: 'search',
	},
	/**
	 * 接口名称
	 */
	member: {
		reg: "api/member/reg",
		login: "api/member/login",
		memberInfo: 'api/member/find',
		geneCode: 'api/member/genecode',
		forgetPwd: "api/member/forgetpwd",
		resetPwd: "api/member/updatepwd",
		shareUrl:"api/member/share",
		friendList:'api/member/friendlist',
		profitList:'api/member/profitlist',
		loginByWxApplet:'api/member/loginbyweixin'
	},
	goods: {
		home: 'api/goods/home', //首页信息
		randomProductList: 'api/goods/findlist',
		goodsDetail: 'api/goods/find',
		typeGoodsList: 'api/category/list',
		goodsList: "api/goods/findlist",
		favoriteSave: "api/goods/favorite",
		listCollect: "api/goods/collect",
		deleteCollect: "api/goods/deletecollect"
	},
	order: {
		addCart: "api/order/addcart",
		cartList: "api/order/cartlist",
		updateQuantity: "api/order/updatequantity",
		deleteCart: "api/order/deletecart",
		addressSave: "api/memberaddress/edit",
		listAddress: "api/memberaddress/findlist",
		deleteAddress: "api/memberaddress/deleteaddress",
		preOrder: "api/order/preorder",
		bookOrder: "api/order/createorder",
		closeOrder: "api/order/clearorder",
		confimDelivery: "api/order/confimdelivery",
		applyRefund: "api/order/applyrefund",
		orderDetail: "api/order/orderdetail",
		orderList: "api/order/findlist",

	},
	payments: {
		paymentlist: "api/payments/paymentlist",
		balancePay: "api/payments/balancepay",
		aliPay:"api/payments/alipay",
		weixinPay: "api/payments/weixinpay",
		wxOrderQuery:"api/payments/wxorderquery"
	},
	notice: {
		noticeList: 'api/notice/findlist',
		getNotice: "api/notice/find"
	},
	comment: {
		edit: "api/comment/edit",
		commentList: "api/comment/findlist"
	},
	/**
	 * 封装请求（async await 封装uni.request）
	 * method	   post/get
	 * endpoint    接口方法名
	 * data		   所需传递参数
	 * load		   是否需要loading
	 */
	async apiCall(method, endpoint, data, load) {
		if (!load) {
			uni.showLoading({
				title: '请稍候',
				mask: true
			});
		}
		let fullurl = this.BASEURI + endpoint;
		let Authorization;
		let userInfo = store.getters.userInfo;
		if (userInfo) {
			if (userInfo && userInfo.id) {
				let mid = userInfo.id;
				if (mid) {
					data.memberId = mid;
					Authorization = userInfo.token;
				}
			}
		}
		let [error, res] = await uni.request({
			url: fullurl,
			data: data,
			method: method,
			header: {
				'client_id': 'app',
				'client_secret': 'app',
				'storeid': 1,
				'content-type': 'application/json',
				'Authorization': Authorization || ''
			},
		});
		if (!load) {
			uni.hideLoading();
		}
		console.log(res);
		if (res.data.code == 1002) {
			store.commit('logout');
			uni.showToast({
				title: '请先登录',
				icon: 'none'
			});
			uni.navigateTo({
				url: `/pages/public/login`
			})
			return;
		}
		return res.data;

	},
}
