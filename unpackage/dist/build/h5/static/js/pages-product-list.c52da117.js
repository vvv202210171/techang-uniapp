(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-list"],{"0137":function(t,e,i){"use strict";var a=i("9298"),n=i.n(a);n.a},1666:function(t,e,i){"use strict";i.r(e);var a=i("b44b"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"1dda":function(t,e,i){"use strict";var a=i("79c6"),n=i.n(a);n.a},2224:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},6221:function(t,e,i){"use strict";i.r(e);var a=i("2224"),n=i("1666");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("1dda");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"d5fd4f76",null,!1,a["a"],s);e["default"]=d.exports},"6f9c":function(t,e,i){"use strict";var a={"uni-load-more":i("6221").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"navbar",style:{position:t.headerPosition,top:t.headerTop}},[i("v-uni-view",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("综合排序")]),i("v-uni-view",{staticClass:"nav-item",class:{current:1===t.filterIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(1)}}},[t._v("销量优先")]),i("v-uni-view",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(2)}}},[i("v-uni-text",[t._v("价格")]),i("v-uni-view",{staticClass:"p-box"},[i("v-uni-text",{staticClass:"yticon icon-shang",class:{active:1===t.priceOrder&&2===t.filterIndex}}),i("v-uni-text",{staticClass:"yticon icon-shang xia",class:{active:2===t.priceOrder&&2===t.filterIndex}})],1)],1),i("v-uni-text",{staticClass:"cate-item yticon icon-fenlei1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleCateMask("show")}}})],1),i("v-uni-view",{staticClass:"goods-list"},t._l(t.goodsList,function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToDetailPage(e)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:e.goodsPicUrl,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.goodsName))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.goodsPrice))]),i("v-uni-text",[t._v("已售 "+t._s(e.goodsSaleNum))])],1)],1)}),1),i("uni-load-more",{attrs:{status:t.loadingType}}),i("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleCateMask.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cate-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":!0}},t._l(t.cateList,function(e){return i("v-uni-view",{key:e.id},[i("v-uni-view",{staticClass:"cate-item b-b two"},[t._v(t._s(e.name))]),t._l(e.child,function(e){return i("v-uni-view",{key:e.id,staticClass:"cate-item b-b",class:{active:e.id==t.cateId},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeCate(e)}}},[t._v(t._s(e.name))])})],2)}),1)],1)],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"70ae":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-load-more[data-v-d5fd4f76]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-d5fd4f76]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-d5fd4f76]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-d5fd4f76]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-d5fd4f76]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-d5fd4f76 1.56s ease infinite;animation:load-data-v-d5fd4f76 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-d5fd4f76]:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-d5fd4f76]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-d5fd4f76]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-d5fd4f76]:nth-child(4){top:11px;left:0}.load1[data-v-d5fd4f76],.load2[data-v-d5fd4f76],.load3[data-v-d5fd4f76]{height:24px;width:24px}.load2[data-v-d5fd4f76]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-d5fd4f76]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-d5fd4f76]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-d5fd4f76]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-d5fd4f76]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-d5fd4f76]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-d5fd4f76]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-d5fd4f76]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-d5fd4f76]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-d5fd4f76]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-d5fd4f76]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-d5fd4f76]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-d5fd4f76]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-d5fd4f76]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-d5fd4f76{0%{opacity:1}to{opacity:.2}}",""])},"79c6":function(t,e,i){var a=i("70ae");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3cb6872b",a,!0,{sourceMap:!1,shadowMode:!1})},9298:function(t,e,i){var a=i("cb41");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6039ed56",a,!0,{sourceMap:!1,shadowMode:!1})},ad9a:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("96cf");var n=a(i("3b8d")),o=a(i("660b")),s=a(i("6221")),r=(uni.getStorageSync("userInfo"),{components:{uniLoadMore:s.default},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",keyword:"",loadingType:"more",filterIndex:0,cateId:0,pageNum:1,cid:null,priceOrder:0,saleSort:0,cateList:[],goodsList:[]}},onLoad:function(t){this.headerTop=document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px",this.keyword=t.keyword,this.cateId=t.tid,this.loadCateList(t.fid,t.sid),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.pageNum=this.pageNum+1,this.loadData("refresh")},onReachBottom:function(){this.pageNum=this.pageNum+1,this.loadData()},methods:{loadCateList:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(e,i){var a,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a={},t.next=3,o.default.apiCall("get",o.default.goods.typeGoodsList,a);case 3:n=t.sent,n=n.data,s=n.filter(function(t){return"L1"==t.level}),s.forEach(function(t){var e=n.filter(function(e){return e.pid==t.id});t.child=e}),this.cateList=s;case 8:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}(),loadData:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(){var e,i,a,n,s,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:"add",i=r.length>1?r[1]:void 0,"add"!==e){t.next=8;break}if("nomore"!==this.loadingType){t.next=5;break}return t.abrupt("return");case 5:this.loadingType="loading",t.next=9;break;case 8:this.loadingType="more";case 9:return a={pageNum:this.pageNum,keyword:this.keyword,cateId:this.cateId,priceOrder:this.priceOrder,saleSort:this.saleSort},"refresh"===e&&(this.goodsList=[]),t.next=13,o.default.apiCall("get",o.default.goods.goodsList,a);case 13:n=t.sent,s=n.data.records,this.goodsList=this.goodsList.concat(s),this.loadingType=this.goodsList.length>n.total?"nomore":"more","refresh"===e&&(1==i?uni.hideLoading():uni.stopPullDownRefresh());case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),tabClick:function(t){this.pageNum=1,this.filterIndex===t&&2!==t||(this.filterIndex=t,this.saleSort=1===t?1:0,this.priceOrder=2===t?1===this.priceOrder?2:1:0,uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var e=this,i="show"===t?10:300,a="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=a},i)},changeCate:function(t){this.pageNum=1,this.cateId=t.id,this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"})},navToDetailPage:function(t){var e=t.id;uni.navigateTo({url:"/pages/product/product?id=".concat(e)})},stopPrevent:function(){}}});e.default=r},b44b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=a},bee8:function(t,e,i){"use strict";i.r(e);var a=i("ad9a"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},cb41:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-0e52472f],uni-page-body[data-v-0e52472f]{background:#f8f8f8}.content[data-v-0e52472f]{padding-top:%?96?%}.navbar[data-v-0e52472f]{position:fixed;left:0;top:var(--window-top);display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?80?%;background:#fff;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-0e52472f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:%?30?%;color:#303133;position:relative}.navbar .nav-item.current[data-v-0e52472f]{color:#fa436a}.navbar .nav-item.current[data-v-0e52472f]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #fa436a}.navbar .p-box[data-v-0e52472f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.navbar .p-box .yticon[data-v-0e52472f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?26?%;color:#888}.navbar .p-box .yticon.active[data-v-0e52472f]{color:#fa436a}.navbar .p-box .xia[data-v-0e52472f]{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.navbar .cate-item[data-v-0e52472f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.navbar .cate-item[data-v-0e52472f]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}\n/* 分类 */.cate-mask[data-v-0e52472f]{position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:95;-webkit-transition:.3s;transition:.3s}.cate-mask .cate-content[data-v-0e52472f]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:.3s;transition:.3s}.cate-mask.none[data-v-0e52472f]{display:none}.cate-mask.show[data-v-0e52472f]{background:rgba(0,0,0,.4)}.cate-mask.show .cate-content[data-v-0e52472f]{-webkit-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-0e52472f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%}.cate-list .cate-item[data-v-0e52472f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?90?%;padding-left:%?30?%;font-size:%?28?%;color:#555;position:relative}.cate-list .two[data-v-0e52472f]{height:%?64?%;color:#303133;font-size:%?30?%;background:#f8f8f8}.cate-list .active[data-v-0e52472f]{color:#fa436a}\n/* 商品列表 */.goods-list[data-v-0e52472f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.goods-list .goods-item[data-v-0e52472f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?40?%}.goods-list .goods-item[data-v-0e52472f]:nth-child(odd){margin-right:4%}.goods-list .image-wrapper[data-v-0e52472f]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.goods-list .image-wrapper uni-image[data-v-0e52472f]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-0e52472f]{font-size:%?32?%;color:#303133;line-height:%?80?%}.goods-list .price-box[data-v-0e52472f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-0e52472f]{font-size:%?32?%;color:#fa436a;line-height:1}.goods-list .price[data-v-0e52472f]:before{content:"\\FFE5";font-size:%?26?%}body.?%PAGE?%[data-v-0e52472f]{background:#f8f8f8}',""])},d739:function(t,e,i){"use strict";i.r(e);var a=i("6f9c"),n=i("bee8");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("0137");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0e52472f",null,!1,a["a"],s);e["default"]=d.exports}}]);