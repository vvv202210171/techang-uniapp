(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/giftList"],{1592:function(t,e,n){},3353:function(t,e,n){"use strict";n.r(e);var i=n("69b8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"3fa2":function(t,e,n){"use strict";var i={"uni-load-more":()=>n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"6221"))},a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"69b8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a")),a=o(n("660b"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,a,o,r){try{var s=t[o](r),u=s.value}catch(d){return void n(d)}s.done?e(u):Promise.resolve(u).then(i,a)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,u,"next",t)}function u(t){r(o,i,a,s,u,"throw",t)}s(void 0)})}}var u=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"6221"))},d={components:{uniLoadMore:u},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",keyword:"",loadingType:"more",filterIndex:0,cateId:0,pageNum:1,cid:null,priceOrder:0,cateList:[],goodsList:[]}},onLoad:function(t){this.keyword=t.keyword,this.cateId=t.sid,this.loadCateList(t.fid,t.sid),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.pageNum=this.pageNum+1,this.loadData("refresh")},onReachBottom:function(){this.pageNum=this.pageNum+1,this.loadData()},methods:{loadCateList:function(){var t=s(i.default.mark(function t(e,n){var o,r,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o={},t.next=3,a.default.apiCall("get",a.default.goods.typeGiftList,o);case 3:r=t.sent,s=r.data.filter(function(t){return null==t.pid}),s.forEach(function(t){var e=r.data.filter(function(e){return e.pid==t.id});t.child=e}),this.cateList=s;case 7:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),loadData:function(){var e=s(i.default.mark(function e(){var n,o,r,s,u,d=this,c=arguments;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=c.length>0&&void 0!==c[0]?c[0]:"add",o=c.length>1?c[1]:void 0,"add"!==n){e.next=8;break}if("nomore"!==this.loadingType){e.next=5;break}return e.abrupt("return");case 5:this.loadingType="loading",e.next=9;break;case 8:this.loadingType="more";case 9:return this.cateId&&(r={pageNum:this.pageNum,productCategoryId:this.cateId},this.keyword&&(r={pageNum:this.pageNum,productCategoryId:this.cateId,keyword:this.keyword})),r=this.keyword?{pageNum:this.pageNum,keyword:this.keyword}:{pageNum:this.pageNum},e.next=13,a.default.apiCall("get",a.default.goods.giftList,r);case 13:s=e.sent,u=s.data.records,"refresh"===n&&(this.goodsList=[]),1===this.filterIndex&&u.sort(function(t,e){return e.sales-t.sales}),2===this.filterIndex&&u.sort(function(t,e){return 1==d.priceOrder?t.price-e.price:e.price-t.price}),this.goodsList=this.goodsList.concat(u),this.loadingType=this.goodsList.length>s.total?"nomore":"more","refresh"===n&&(1==o?t.hideLoading():t.stopPullDownRefresh());case 21:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),tabClick:function(e){this.pageNum=1,this.filterIndex===e&&2!==e||(this.filterIndex=e,this.priceOrder=2===e?1===this.priceOrder?2:1:0,t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var e=this,n="show"===t?10:300,i="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=i},n)},changeCate:function(e){console.log(e.id),this.pageNum=1,this.cateId=e.id,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"})},navToDetailPage:function(e){var n=e.id;t.navigateTo({url:"/pages/product/giftProduct?id=".concat(n)})},stopPrevent:function(){}}};e.default=d}).call(this,n("543d")["default"])},dae3:function(t,e,n){"use strict";n.r(e);var i=n("3fa2"),a=n("3353");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("fa25");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=u.exports},fa25:function(t,e,n){"use strict";var i=n("1592"),a=n.n(i);a.a},fc15:function(t,e,n){"use strict";(function(t){n("e160"),n("921b");i(n("66fd"));var e=i(n("dae3"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fc15","common/runtime","common/vendor"]]]);