(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/paiMaiList"],{3376:function(t,e,n){"use strict";(function(t){n("e160"),n("921b");o(n("66fd"));var e=o(n("b827"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"3b58":function(t,e,n){"use strict";var o=n("601b"),i=n.n(o);i.a},"601b":function(t,e,n){},a9c9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a34a")),i=a(n("660b"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,o,i,a,r){try{var s=t[a](r),u=s.value}catch(d){return void n(d)}s.done?e(u):Promise.resolve(u).then(o,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,u,"next",t)}function u(t){r(a,o,i,s,u,"throw",t)}s(void 0)})}}var u=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"6221"))},d={components:{uniLoadMore:u},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",keyword:"",loadingType:"more",filterIndex:0,cateId:0,pageNum:1,cid:null,priceOrder:0,cateList:[],goodsList:[]}},onLoad:function(t){this.keyword=t.keyword,this.cateId=t.sid,this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.pageNum=this.pageNum+1,this.loadData("refresh")},onReachBottom:function(){this.pageNum=this.pageNum+1,this.loadData()},methods:{loadCateList:function(t,e){var n={},o=i.default.apiCall("get",i.default.goods.typeList,n);console.log(o);var a=o.filter(function(t){return null==t.pid});a.forEach(function(t){var e=o.filter(function(e){return e.pid==t.id});t.child=e}),this.cateList=a},loadData:function(){var e=s(o.default.mark(function e(){var n,a,r,s,u,d=this,c=arguments;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=c.length>0&&void 0!==c[0]?c[0]:"add",a=c.length>1?c[1]:void 0,"add"!==n){e.next=8;break}if("nomore"!==this.loadingType){e.next=5;break}return e.abrupt("return");case 5:this.loadingType="loading",e.next=9;break;case 8:this.loadingType="more";case 9:return this.cateId&&(r={pageNum:this.pageNum,productCategoryId:this.cateId,type:2},this.keyword&&(r={pageNum:this.pageNum,productCategoryId:this.cateId,keyword:this.keyword,type:2})),r=this.keyword?{pageNum:this.pageNum,keyword:this.keyword,type:2}:{pageNum:this.pageNum,type:2},e.next=13,i.default.apiCall("get",i.default.goods.goodsList,r);case 13:s=e.sent,u=s.records,"refresh"===n&&(this.goodsList=[]),1===this.filterIndex&&u.sort(function(t,e){return e.sales-t.sales}),2===this.filterIndex&&u.sort(function(t,e){return 1==d.priceOrder?t.price-e.price:e.price-t.price}),this.goodsList=this.goodsList.concat(u),this.loadingType=this.goodsList.length>s.total?"nomore":"more","refresh"===n&&(1==a?t.hideLoading():t.stopPullDownRefresh());case 21:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),tabClick:function(e){this.pageNum=1,this.filterIndex===e&&2!==e||(this.filterIndex=e,this.priceOrder=2===e?1===this.priceOrder?2:1:0,t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1))},toggleCateMask:function(t){var e=this,n="show"===t?10:300,o="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=o},n)},changeCate:function(e){this.pageNum=1,this.cateId=e.id,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1)},navToDetailPage:function(e){var n=e.id;t.navigateTo({url:"/pages/product/paiMaiDetail?id=".concat(n)})},stopPrevent:function(){}}};e.default=d}).call(this,n("543d")["default"])},b827:function(t,e,n){"use strict";n.r(e);var o=n("db69"),i=n("da11");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("3b58");var r,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=u.exports},da11:function(t,e,n){"use strict";n.r(e);var o=n("a9c9"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},db69:function(t,e,n){"use strict";var o={"uni-load-more":()=>n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"6221"))},i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})}},[["3376","common/runtime","common/vendor"]]]);