(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/createOrder"],{"0812":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(r("a34a")),a=i(r("660b")),o=r("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){u(t,e,r[e])})}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e,r,n,a,o,i){try{var s=t[o](i),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,a)}function d(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function i(t){c(o,n,a,i,s,"next",t)}function s(t){c(o,n,a,i,s,"throw",t)}i(void 0)})}}var f={data:function(){return{desc:"",payType:1,type:1,skillId:0,goodsId:0,mgId:1,cartId:"",cartIds:"",addressId:"",memberReceiveAddressList:[],cartPromotionItemList:[],calcAmount:{totalAmount:0,freightAmount:0,promotionAmount:0,payAmount:0},addressData:{receiveName:"",receivePhone:"",province:"",city:"",area:"",detailAddr:""}}},onLoad:function(){var t=d(n.default.mark(function t(e){var r,o,i,s,u,c=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.type=e.type,1!=e.type){t.next=10;break}return this.cartId=e.id,i={cartIds:e.id,type:e.type},t.next=6,a.default.apiCall("get",a.default.order.preOrder,i);case 6:o=t.sent,r=o.data,t.next=17;break;case 10:if(2!=e.type){t.next=17;break}return s={cartIds:e.cartIds,type:e.type},t.next=14,a.default.apiCall("get",a.default.order.preOrder,s);case 14:o=t.sent,r=o.data,this.cartIds=e.cartIds;case 17:u=r.id_nums.split(":"),r.goods.map(function(t){return u.find(function(e){var r=e.split("-");if(t.id==r[0]){var n=r[1];return t.quantity=n,c.calcAmount.totalAmount+=n*t.goodsOriginalPrice,c.calcAmount.promotionAmount+=n*(t.goodsOriginalPrice-t.goodsPrice),c.calcAmount.freightAmount+=t.goodsTransfee,!0}return!1}),t}),this.calcAmount.payAmount=this.calcAmount.totalAmount-this.calcAmount.promotionAmount+this.calcAmount.freightAmount,this.cartPromotionItemList=r.goods,this.addressData=r.address,this.addressData&&(this.addressId=this.addressData.id),this.memberReceiveAddressList=r.memberReceiveAddressListaddress;case 24:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),computed:s({},(0,o.mapState)(["hasLogin","userInfo"])),methods:{numberChange:function(t){this.number=t.number},changePayType:function(t){this.payType=t},submit:function(){var e=d(n.default.mark(function e(){var r,o,i,s,u;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.addressId){e.next=3;break}return this.$api.msg("请选择收货地址"),e.abrupt("return");case 3:if(1!=this.type){e.next=8;break}return o={orderType:1,type:1,cartIds:this.cartId,addressId:this.addressId,memberCouponId:this.memberCouponId,content:this.desc},e.next=7,a.default.apiCall("post",a.default.order.bookOrder,o);case 7:r=e.sent;case 8:if(2!=this.type){e.next=13;break}return i={orderType:1,type:2,cartIds:this.cartIds,addressId:this.addressId,content:this.desc},e.next=12,a.default.apiCall("post",a.default.order.bookOrder,i);case 12:r=e.sent;case 13:0==r.code?(s=r.data,u="/pages/order/payment/index?order_id="+s+"&type=1",t.navigateTo({url:u})):this.$api.msg(r.msg);case 14:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}(),stopPrevent:function(){}}};e.default=f}).call(this,r("6e42")["default"])},"247f":function(t,e,r){},2611:function(t,e,r){"use strict";(function(t){r("e160"),r("921b");n(r("66fd"));var e=n(r("a265"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},"6eb6":function(t,e,r){"use strict";var n=r("247f"),a=r.n(n);a.a},7696:function(t,e,r){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];r.d(e,"b",function(){return a}),r.d(e,"c",function(){return o}),r.d(e,"a",function(){return n})},a265:function(t,e,r){"use strict";r.r(e);var n=r("7696"),a=r("e0bf");for(var o in a)"default"!==o&&function(t){r.d(e,t,function(){return a[t]})}(o);r("6eb6");var i,s=r("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);e["default"]=u.exports},e0bf:function(t,e,r){"use strict";r.r(e);var n=r("0812"),a=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}},[["2611","common/runtime","common/vendor"]]]);