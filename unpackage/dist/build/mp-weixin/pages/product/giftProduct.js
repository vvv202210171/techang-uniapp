(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/giftProduct"],{"1e9a":function(t,e,n){"use strict";var a=n("d2fd"),i=n.n(a);i.a},2824:function(t,e,n){"use strict";n.r(e);var a=n("2eb1"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"2eb1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a")),i=r(n("660b"));n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,a,i,r,s){try{var o=t[r](s),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(a,i)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var r=t.apply(e,n);function o(t){s(r,a,i,o,u,"next",t)}function u(t){s(r,a,i,o,u,"throw",t)}o(void 0)})}}var u=function(){return n.e("components/share").then(n.bind(null,"353a"))},c=t.getStorageSync("userInfo"),d={components:{share:u},data:function(){return{specClass:"none",specSelected:[],small:null,sku:[],detailData:[],favorite:!0,shareList:[],desc:'\n\t\t\t\t\t<div style="width:100%">\n\t\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t</div>\n\t\t\t\t',skuList:[]}},onLoad:function(){var e=o(a.default.mark(function e(n){var r,s,o,u,c;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=n.id,!r){e.next=21;break}return this.logining=!0,s={id:n.id},e.next=6,i.default.apiCall("get",i.default.goods.giftDetail,s);case 6:if(o=e.sent,this.logining=!1,!o){e.next=21;break}return u=o.data.goods,this.favorite=o.data.favorite,this.typeGoodsList=u.typeGoodsList,u.albumPics,this.desc=u.content,e.next=16,this.$api.json("shareList");case 16:c=e.sent,this.loaded=!0,this.detailData=u,this.shareList=c,t.setNavigationBarTitle({title:u.name});case 21:return e.next=23,this.$api.json("shareList");case 23:this.shareList=e.sent;case 24:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),methods:{share:function(){this.$refs.share.toggleMask()},toFavorite:function(e){if(c.id){this.favorite=!this.favorite;var n={objId:e.id,type:4,memberId:c.id,name:e.name,meno1:e.pic,meno2:e.price,meno3:e.sale};i.default.apiCall("post",i.default.goods.favoriteSave,n)}else{var a="/pages/public/login";t.navigateTo({url:a})}},jifenPay:function(){var e=o(a.default.mark(function e(n){var r,s,o,u;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(c.id){e.next=4;break}return r="/pages/public/login",t.navigateTo({url:r}),e.abrupt("return",!1);case 4:return s=n.id,u={goodsId:s,memberId:c.id},e.next=8,i.default.apiCall("post",i.default.order.jifenPay,u);case 8:o=e.sent,o.data&&this.$api.msg(o.data);case 10:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),stopPrevent:function(){}}};e.default=d}).call(this,n("543d")["default"])},d2fd:function(t,e,n){},d32d:function(t,e,n){"use strict";n.r(e);var a=n("de2a"),i=n("2824");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("1e9a");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=u.exports},d7b2:function(t,e,n){"use strict";(function(t){n("e160"),n("921b");a(n("66fd"));var e=a(n("d32d"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},de2a:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})}},[["d7b2","common/runtime","common/vendor"]]]);