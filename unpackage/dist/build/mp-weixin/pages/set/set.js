(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"0f0a":function(t,n,e){"use strict";var u=e("8c92"),o=e.n(u);o.a},"0f2f":function(t,n,e){"use strict";e.r(n);var u=e("3caa"),o=e("90ac");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("0f0a");var r,a=e("f0c5"),f=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=f.exports},"20f0":function(t,n,e){"use strict";(function(t){e("e160"),e("921b");u(e("66fd"));var n=u(e("0f2f"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},2963:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;o(e("660b"));var u=e("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},u=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.forEach(function(n){r(t,n,e[n])})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}t.getStorageSync("userInfo");var a={data:function(){return{}},methods:c({},(0,u.mapMutations)(["logout"]),{navTo:function(n){t.navigateTo({url:n})},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),setTimeout(function(){t.navigateBack()},200))}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}})};n.default=a}).call(this,e("543d")["default"])},"3caa":function(t,n,e){"use strict";var u,o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return u})},"8c92":function(t,n,e){},"90ac":function(t,n,e){"use strict";e.r(n);var u=e("2963"),o=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=o.a}},[["20f0","common/runtime","common/vendor"]]]);