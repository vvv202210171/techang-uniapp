(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-createOrder"],{"0a41":function(e,t,i){"use strict";var a,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-navigator",{staticClass:"address-section",attrs:{url:"/pages/address/address?source=1"}},[i("v-uni-view",{staticClass:"order-content"},[i("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"}),e.addressData?i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[e._v(e._s(e.addressData.receiveName))]),i("v-uni-text",{staticClass:"mobile"},[e._v(e._s(e.addressData.receivePhone))])],1),i("v-uni-text",{staticClass:"address"},[e._v(e._s(e.addressData.province)+"-"+e._s(e.addressData.city)+"-"+e._s(e.addressData.area)+"-"+e._s(e.addressData.detailAddr))])],1):i("v-uni-view",{staticClass:"cen"},[i("v-uni-text",[e._v("请设置收货地址")])],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1),i("v-uni-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"}})],1),i("v-uni-view",{staticClass:"goods-section"},[i("v-uni-view",{staticClass:"g-header b-b"},[i("v-uni-image",{staticClass:"logo",attrs:{src:"http://yjlive160322.oss-cn-beijing.aliyuncs.com/mall/images/20190807/QQ%E5%9B%BE%E7%89%8720190807191952.jpg"}}),i("v-uni-text",{staticClass:"name"},[e._v("土特产商城")])],1),e._l(e.cartPromotionItemList,function(t,a){return i("v-uni-view",{key:a,staticClass:"g-item"},[i("v-uni-image",{attrs:{src:t.goodsPicUrl}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp"},[e._v(e._s(t.goodsName))]),t.productAttr?i("v-uni-text",{staticClass:"spec"},[e._v(e._s(t.productAttr))]):e._e(),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[e._v("￥"+e._s(t.goodsPrice))]),i("v-uni-text",{staticClass:"number"},[e._v("x "+e._s(t.quantity))])],1)],1)],1)})],2),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip"},[e._v("￥"+e._s(e.calcAmount.totalAmount))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("优惠金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[e._v("-￥"+e._s(e.calcAmount.promotionAmount))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("运费")]),i("v-uni-text",{staticClass:"cell-tip"},[e._v(e._s(e.calcAmount.freightAmount))])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[e._v("备注")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写备注信息","placeholder-class":"placeholder"},model:{value:e.desc,callback:function(t){e.desc=t},expression:"desc"}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"price-content"},[i("v-uni-text",[e._v("实付款")]),i("v-uni-text",{staticClass:"price-tip"},[e._v("￥")]),i("v-uni-text",{staticClass:"price"},[e._v(e._s(e.calcAmount.payAmount))])],1),i("v-uni-text",{staticClass:"submit",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交订单")])],1)],1)},n=[];i.d(t,"b",function(){return o}),i.d(t,"c",function(){return n}),i.d(t,"a",function(){return a})},"1a6b":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-34a2e1e3]{background:#f8f8f8;padding-bottom:%?100?%}.address-section[data-v-34a2e1e3]{padding:%?30?% 0;background:#fff;position:relative}.address-section .order-content[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-section .icon-shouhuodizhi[data-v-34a2e1e3]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-34a2e1e3]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-34a2e1e3]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .icon-you[data-v-34a2e1e3]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-34a2e1e3]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-34a2e1e3]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-34a2e1e3]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-34a2e1e3]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-34a2e1e3]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?140?%;height:%?140?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-34a2e1e3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-34a2e1e3]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-34a2e1e3]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-34a2e1e3]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-34a2e1e3]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-34a2e1e3]{position:relative}.yt-list[data-v-34a2e1e3]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-34a2e1e3]{background:#fafafa}.yt-list-cell.b-b[data-v-34a2e1e3]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-34a2e1e3]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-34a2e1e3]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-34a2e1e3]{background:#3ab54a}.yt-list-cell .cell-more[data-v-34a2e1e3]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-34a2e1e3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-34a2e1e3]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-34a2e1e3]{color:#909399}.yt-list-cell .cell-tip.active[data-v-34a2e1e3]{color:#fa436a}.yt-list-cell .cell-tip.red[data-v-34a2e1e3]{color:#fa436a}.yt-list-cell.desc-cell .cell-tit[data-v-34a2e1e3]{max-width:%?90?%}.yt-list-cell .desc[data-v-34a2e1e3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}\n/* 支付列表 */.pay-list[data-v-34a2e1e3]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-34a2e1e3]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-34a2e1e3]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#fa436a}.pay-list .tit[data-v-34a2e1e3]{font-size:%?32?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.footer[data-v-34a2e1e3]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-34a2e1e3]{padding-left:%?30?%}.footer .price-tip[data-v-34a2e1e3]{color:#fa436a;margin-left:%?8?%}.footer .price[data-v-34a2e1e3]{font-size:%?36?%;color:#fa436a}.footer .submit[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#fa436a}\n/* 优惠券面板 */.mask[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;-webkit-transition:.3s;transition:.3s}.mask .mask-content[data-v-34a2e1e3]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s;overflow-y:scroll}.mask.none[data-v-34a2e1e3]{display:none}.mask.show[data-v-34a2e1e3]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-34a2e1e3]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-34a2e1e3]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-34a2e1e3]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-34a2e1e3]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-34a2e1e3]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-34a2e1e3]:before{content:"\\FFE5";font-size:%?34?%}.coupon-item .tips[data-v-34a2e1e3]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-34a2e1e3]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-34a2e1e3]{left:auto;right:%?-6?%}\n/* 分类推荐楼层 */.hot-floor[data-v-34a2e1e3]{width:100%;overflow:hidden;margin-bottom:%?20?%}.hot-floor .floor-img-box[data-v-34a2e1e3]{width:100%;height:%?220?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.hot-floor .floor-img-box[data-v-34a2e1e3]:after{padding:10 %?30?%;content:"";position:absolute;width:100%;height:100%;background:-webkit-linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8);background:linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8)}.hot-floor .name[data-v-34a2e1e3]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.hot-floor .floor-img[data-v-34a2e1e3]{width:100%;height:100%}.hot-floor .floor-list[data-v-34a2e1e3]{white-space:nowrap;padding:%?20?%;padding-right:%?50?%;border-radius:%?6?%;margin-top:%?-140?%;margin-left:%?30?%;background:#fff;box-shadow:1px 1px 5px rgba(0,0,0,.2);position:relative;z-index:1}.hot-floor .scoll-wrapper[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.hot-floor .floor-item[data-v-34a2e1e3]{width:%?180?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.hot-floor .floor-item uni-image[data-v-34a2e1e3]{width:%?180?%;height:%?180?%;border-radius:%?6?%}.hot-floor .floor-item .price[data-v-34a2e1e3]{color:#fa436a}.hot-floor .more[data-v-34a2e1e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;width:%?180?%;height:%?180?%;border-radius:%?6?%;background:#f3f3f3;font-size:%?28?%;color:#909399}.hot-floor .more uni-text[data-v-34a2e1e3]:first-child{margin-bottom:%?4?%}body.?%PAGE?%[data-v-34a2e1e3]{background:#f8f8f8}',""])},"8ebc":function(e,t,i){"use strict";var a=i("b044"),o=i.n(a);o.a},a265:function(e,t,i){"use strict";i.r(t);var a=i("0a41"),o=i("e0bf");for(var n in o)"default"!==n&&function(e){i.d(t,e,function(){return o[e]})}(n);i("8ebc");var s,l=i("f0c5"),r=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"34a2e1e3",null,!1,a["a"],s);t["default"]=r.exports},b044:function(e,t,i){var a=i("1a6b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("8e6ec750",a,!0,{sourceMap:!1,shadowMode:!1})},c362:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i("cebc"));i("7514"),i("28a5"),i("96cf");var n=a(i("3b8d")),s=a(i("660b")),l=i("2f62"),r={data:function(){return{desc:"",goodsId:0,cartIds:"",addressId:"",memberReceiveAddressList:[],cartPromotionItemList:[],calcAmount:{totalAmount:0,freightAmount:0,promotionAmount:0,payAmount:0},addressData:{receiveName:"",receivePhone:"",province:"",city:"",area:"",detailAddr:""}}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark(function e(t){var i,a,o,n,l=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o={cartIds:t.cartIds,type:t.type},e.next=3,s.default.apiCall("get",s.default.order.preOrder,o);case 3:a=e.sent,i=a.data,this.cartIds=t.cartIds,n=i.id_nums.split(":"),i.goods.map(function(e){return n.find(function(t){var i=t.split("-");if(e.id==i[0]){var a=i[1];return e.quantity=a,l.calcAmount.totalAmount+=a*e.goodsOriginalPrice,l.calcAmount.promotionAmount+=a*(e.goodsOriginalPrice-e.goodsPrice),l.calcAmount.freightAmount+=e.goodsTransfee,!0}return!1}),e}),this.calcAmount.payAmount=this.calcAmount.totalAmount-this.calcAmount.promotionAmount+this.calcAmount.freightAmount,this.cartPromotionItemList=i.goods,this.addressData=i.address,this.addressData&&(this.addressId=this.addressData.id),this.memberReceiveAddressList=i.memberReceiveAddressListaddress;case 13:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),computed:(0,o.default)({},(0,l.mapState)(["hasLogin","userInfo"])),methods:{numberChange:function(e){this.number=e.number},submit:function(){var e=(0,n.default)(regeneratorRuntime.mark(function e(){var t,i,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.addressId){e.next=3;break}return this.$api.msg("请选择收货地址"),e.abrupt("return");case 3:return t={orderType:1,cartIds:this.cartIds,addressId:this.addressId,content:this.desc},e.next=6,s.default.apiCall("post",s.default.order.bookOrder,t);case 6:i=e.sent,0==i.code?(a=i.data,o="/pages/order/payment/index?order_id="+a+"&type=1",uni.navigateTo({url:o})):this.$api.msg(i.msg);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),stopPrevent:function(){}}};t.default=r},e0bf:function(e,t,i){"use strict";i.r(t);var a=i("c362"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=o.a}}]);