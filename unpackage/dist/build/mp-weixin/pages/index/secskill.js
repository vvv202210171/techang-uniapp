(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/secskill"],{"0a07":function(t,n,e){"use strict";(function(t){e("e160"),e("921b");a(e("66fd"));var n=a(e("4501"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"0aa8":function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return a})},"0e8d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a")),i=r(e("660b"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,n,e,a,i,r,o){try{var u=t[r](o),c=u.value}catch(s){return void e(s)}u.done?n(c):Promise.resolve(c).then(a,i)}function u(t){return function(){var n=this,e=arguments;return new Promise(function(a,i){var r=t.apply(n,e);function u(t){o(r,a,i,u,c,"next",t)}function c(t){o(r,a,i,u,c,"throw",t)}u(void 0)})}}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s={data:function(){var t;return t={keyword:"",titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],hotProductList:[],brandList:[],homeFlashPromotion:[],subjectList:[],cat_list:[]},c(t,"homeFlashPromotion",[]),c(t,"groupHotGoodsList",[]),c(t,"newProductList",[]),t},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=u(a.default.mark(function t(){var n,e,r;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.logining=!0,n={},t.next=4,i.default.apiCall("get",i.default.index.homeFlashPromotionList,n);case 4:return e=t.sent,this.groupHotGoodsList=e,t.next=8,i.default.apiCall("get",i.default.index.bannerList,n);case 8:r=t.sent,console.log(r),this.carouselList=r||[],this.swiperLength=this.carouselList.length,this.logining=!1;case 13:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),swiperChange:function(t){var n=t.detail.current;this.swiperCurrent=n,this.titleNViewBackground=this.carouselList[n].background},navToTabPage:function(n){t.navigateTo({url:n})},navToDetailPage:function(n){var e=n.id;t.navigateTo({url:"/pages/product/secskillDetail?id=".concat(e)})},navToList:function(){t.navigateTo({url:"/pages/product/list"})}},search:function(){t.navigateTo({url:"/pages/search/search"})},onNavigationBarSearchInputClicked:function(){var n=u(a.default.mark(function n(e){return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:t.navigateTo({url:"/pages/search/search"});case 1:case"end":return n.stop()}},n,this)}));function e(t){return n.apply(this,arguments)}return e}(),onNavigationBarButtonTap:function(n){var e=n.index;0===e?this.$api.msg("点击了扫描"):1===e&&t.navigateTo({url:"/pages/notice/notice"})}};n.default=s}).call(this,e("543d")["default"])},"3fc1":function(t,n,e){"use strict";e.r(n);var a=e("0e8d"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=i.a},4501:function(t,n,e){"use strict";e.r(n);var a=e("0aa8"),i=e("3fc1");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("c8e9");var o,u=e("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=c.exports},c8e9:function(t,n,e){"use strict";var a=e("e421"),i=e.n(a);i.a},e421:function(t,n,e){}},[["0a07","common/runtime","common/vendor"]]]);