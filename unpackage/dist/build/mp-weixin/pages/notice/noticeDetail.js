(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notice/noticeDetail"],{"22ec":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),c=u(n("660b"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,c,u,i){try{var o=t[u](i),a=o.value}catch(f){return void n(f)}o.done?e(a):Promise.resolve(a).then(r,c)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(r,c){var u=t.apply(e,n);function o(t){i(u,r,c,o,a,"next",t)}function a(t){i(u,r,c,o,a,"throw",t)}o(void 0)})}}var a={data:function(){return{notice:{noticePic:"",createTime:"",noticeTitle:"",noticeContent:""}}},onLoad:function(t){this.loadNotice(t.id)},methods:{loadNotice:function(){var t=o(r.default.mark(function t(e){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.default.apiCall("GET",c.default.notice.getNotice,{id:e});case 2:if(n=t.sent,0!=n.code){t.next=6;break}return this.notice=n.data,t.abrupt("return");case 6:this.$Api.msg(n.msg);case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=a},"45e2":function(t,e,n){"use strict";n.r(e);var r=n("c22d"),c=n("ec03");for(var u in c)"default"!==u&&function(t){n.d(e,t,function(){return c[t]})}(u);n("8c95");var i,o=n("f0c5"),a=Object(o["a"])(c["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=a.exports},"8c95":function(t,e,n){"use strict";var r=n("f401"),c=n.n(r);c.a},c22d:function(t,e,n){"use strict";var r,c=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},ec03:function(t,e,n){"use strict";n.r(e);var r=n("22ec"),c=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=c.a},f401:function(t,e,n){},fe8e:function(t,e,n){"use strict";(function(t){n("e160"),n("921b");r(n("66fd"));var e=r(n("45e2"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fe8e","common/runtime","common/vendor"]]]);