(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"1c80":function(t,e,n){"use strict";var s=n("ee43"),o=n.n(s);o.a},"29fa":function(t,e,n){"use strict";var s,o=function(){var t=this,e=t.$createElement,n=(t._self._c,(10*t.goods.goodsPrice/t.goods.goodsOriginalPrice).toFixed(1));t.$mp.data=Object.assign({},{$root:{g0:n}})},r=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return s})},"2b55":function(t,e,n){"use strict";n.r(e);var s=n("29fa"),o=n("a898");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("1c80");var a,i=n("f0c5"),u=Object(i["a"])(o["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=u.exports},"75b1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(n("a34a")),o=a(n("660b")),r=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,s,o,r,a){try{var i=t[r](a),u=i.value}catch(c){return void n(c)}i.done?e(u):Promise.resolve(u).then(s,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(s,o){var r=t.apply(e,n);function a(t){i(r,s,o,a,u,"next",t)}function u(t){i(r,s,o,a,u,"throw",t)}a(void 0)})}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(){return n.e("components/share").then(n.bind(null,"353a"))},f={components:{share:d},computed:c({},(0,r.mapGetters)(["hasLogin"])),data:function(){return{specClass:"none",specSelected:[],luobos:[],goods:{},sku:[],detailData:[],basicMarkingList:[],basicGiftsList:[],favorite:!0,shareList:[],desc:"",skuList:[],consultList:[],consultCount:{all:0,bad:0,general:0,goods:0},specList:[],specChildList:[]}},onLoad:function(){var e=u(s.default.mark(function e(n){var r,a,i,u,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=n.id,!r){e.next=25;break}return a={id:n.id},e.next=5,o.default.apiCall("get",o.default.goods.goodsDetail,a);case 5:if(i=e.sent,0!=i.code){e.next=25;break}u=i.data,console.log(u),this.goods.goodsDetail=u.goodsDetail,this.luobos=JSON.parse(u.goodsDetail.goodsGallery),e.t0=s.default.keys(u.goodsDetail);case 12:if((e.t1=e.t0()).done){e.next=19;break}if(c=e.t1.value,"goodsGallery"!=c){e.next=16;break}return e.abrupt("continue",12);case 16:this.goods[c]=u.goodsDetail[c],e.next=12;break;case 19:this.consultCount.all=u.total,this.consultCount.bad=u.chaping,this.consultCount.general=u.yiban,this.consultCount.goods=u.haoping,this.consultCount.persent=u.haopingPencent,t.setNavigationBarTitle({title:this.goods.goodsName});case 25:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),methods:{toggleSpec:function(){var t=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){t.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},selectSpec:function(t,e){var n=this,s=this.specChildList;s.forEach(function(t){t.pid===e&&n.$set(t,"selected",!1)}),this.$set(s[t],"selected",!0);var o="";if(this.specSelected=[],s){s.forEach(function(t){!0===t.selected&&(n.specSelected.push(t),o=t.name+","+o)});var r=o.substr(0,o.length-1).split(",");this.skuList.forEach(function(t){1==r.length&&t.sp1==r[0]&&(n.sku=t),2==r.length&&t.sp2==r[0]&&t.sp1==r[1]&&(n.sku=t),3==r.length&&t.sp3==r[0]&&t.sp2==r[1]&&t.sp1==r[2]&&(n.sku=t),n.sku.pic||(n.sku.pic=n.goods.pic),n.sku.stock||(n.sku.stock=0),n.sku.price||(n.sku.price=n.goods.price)})}},share:function(){this.$refs.share.toggleMask()},toFavorite:function(){var t=u(s.default.mark(function t(e){var n,r;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.hasLogin){t.next=3;break}return this.toLogin(),t.abrupt("return");case 3:return this.favorite=!this.favorite,n={memberId:userInfo.id,goodsId:e.id,type:1,goodsName:e.goodsName,goodsPicUrl:e.goodsPicUrl,goodsPrice:e.goodsPrice,goodsSaleNum:e.goodsSaleNum},t.next=7,o.default.apiCall("post",o.default.goods.favoriteSave,n);case 7:r=t.sent,0==r.code&&this.$api.msg("收藏成功");case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),buy:function(){var e=u(s.default.mark(function e(n){var r;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.hasLogin){e.next=3;break}return this.toLogin(),e.abrupt("return");case 3:if(!(this.goods.stock<1)){e.next=6;break}return t.showToast({title:"库存不够！"}),e.abrupt("return");case 6:return e.next=8,o.default.apiCall("post",o.default.order.addCart,{goodsId:n.id});case 8:if(r=e.sent,0==r.code){e.next=12;break}return this.$api.msg(r.msg),e.abrupt("return",!1);case 12:t.navigateTo({url:"/pages/order/createOrder?cartIds=".concat(n.id)});case 13:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),toLogin:function(){var e="/pages/public/login";t.navigateTo({url:e})},addCart:function(){var e=u(s.default.mark(function e(n){var r,a;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.hasLogin){e.next=3;break}return this.toLogin(),e.abrupt("return");case 3:if(r=n.id,!(this.goods.stock<1)){e.next=7;break}return t.showToast({title:"库存不够！"}),e.abrupt("return");case 7:return e.next=9,o.default.apiCall("post",o.default.order.addCart,{goodsId:r});case 9:if(a=e.sent,0!=a.code){e.next=13;break}return this.$api.msg("添加购物车成功!"),e.abrupt("return",!0);case 13:this.$api.msg(a.msg);case 14:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),stopPrevent:function(){},toEvaluate:function(){t.navigateTo({url:"/pages/order/evaluateList?id="+this.goods.id})}}};e.default=f}).call(this,n("543d")["default"])},9165:function(t,e,n){"use strict";(function(t){n("e160"),n("921b");s(n("66fd"));var e=s(n("2b55"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},a898:function(t,e,n){"use strict";n.r(e);var s=n("75b1"),o=n.n(s);for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);e["default"]=o.a},ee43:function(t,e,n){}},[["9165","common/runtime","common/vendor"]]]);