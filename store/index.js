import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo:null
	},
	getters:{
		userInfo: function(state){
			if(state.userInfo) return state.userInfo;
			 let userInfo= uni.getStorageSync('userInfo');
			 if(userInfo) return userInfo;
			 return null;
		},
		hasLogin:function(state){
			if(state.userInfo) return true;
			 let userInfo= uni.getStorageSync('userInfo');
			 if(userInfo) return true;
			 return false;
		}
	},
	mutations: {
		login(state, provider) {
			state.userInfo=provider;
			state.hasLogin=true;
			uni.setStorageSync("userInfo",provider);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = null;
			uni.removeStorage({  
                key: 'userInfo'  
            })
		}
	}
})

export default store
