(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/reg"],{"2d94":function(t,e,n){"use strict";var r=n("49d3"),a=n.n(r);a.a},"49d3":function(t,e,n){},6963:function(t,e,n){"use strict";(function(t){n("e160"),n("921b");r(n("66fd"));var e=r(n("eddc"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},9495:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r})},e8f4:function(t,e,n){"use strict";n.r(e);var r=n("fccf"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},eddc:function(t,e,n){"use strict";n.r(e);var r=n("9495"),a=n("e8f4");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("2d94");var u,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=c.exports},fccf:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),a=(n("2f62"),i(n("660b")));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,a,i,u){try{var o=t[i](u),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(t){u(i,r,a,o,c,"next",t)}function c(t){u(i,r,a,o,c,"throw",t)}o(void 0)})}}var c={data:function(){return{mobile:"",password:"",confimpassword:"",parnetId:0,logining:!1}},onLoad:function(t){t.parentId&&(this.parnetId=t.parentId)},methods:{inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value},navBack:function(){t.switchTab({url:"/pages/index/index"})},toRegist:function(){t.navigateTo({url:"/pages/public/login"})},reg:function(){var e=o(r.default.mark(function e(){var n,i,u,o;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=/^1[1-9][0-9]\d{8}$/,e.prev=1,""!=this.mobile){e.next=4;break}throw"请填写手机号";case 4:if(n.test(this.mobile)){e.next=6;break}throw"手机号格式有误";case 6:if(this.password){e.next=8;break}throw"请填写密码";case 8:if(this.password==this.confimpassword){e.next=10;break}throw"密码不一致";case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e["catch"](1),this.$api.msg(e.t0),e.abrupt("return");case 16:return this.logining=!0,i=this.parnetId,u={phone:this.mobile,password:this.password,parentId:i},e.next=21,a.default.apiCall("post",a.default.member.reg,u);case 21:o=e.sent,this.logining=!1,0===o.code?t.navigateTo({url:"/pages/public/login"}):this.$api.msg("注册失败");case 24:case"end":return e.stop()}},e,this,[[1,12]])}));function n(){return e.apply(this,arguments)}return n}()}};e.default=c}).call(this,n("6e42")["default"])}},[["6963","common/runtime","common/vendor"]]]);