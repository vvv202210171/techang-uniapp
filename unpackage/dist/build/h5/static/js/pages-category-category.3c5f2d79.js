(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"4b55":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-75e03944],uni-page-body[data-v-75e03944]{height:100%;background-color:#f8f8f8}.content[data-v-75e03944]{display:-webkit-box;display:-webkit-flex;display:flex}.left-aside[data-v-75e03944]{-webkit-flex-shrink:0;flex-shrink:0;width:%?200?%;height:100%;background-color:#fff}.f-item[data-v-75e03944]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:%?100?%;font-size:%?28?%;color:#606266;position:relative}.f-item.active[data-v-75e03944]{color:#fa436a;background:#f8f8f8}.f-item.active[data-v-75e03944]:before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?36?%;width:%?8?%;background-color:#fa436a;border-radius:0 4px 4px 0;opacity:.8}.right-aside[data-v-75e03944]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;padding-left:%?20?%}.s-item[data-v-75e03944]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?70?%;padding-top:%?8?%;font-size:%?28?%;color:#303133}.t-list[data-v-75e03944]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.t-list[data-v-75e03944]:after{content:"";-webkit-box-flex:99;-webkit-flex:99;flex:99;height:0}.t-item[data-v-75e03944]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?176?%;font-size:%?26?%;color:#666;padding-bottom:%?20?%}.t-item uni-image[data-v-75e03944]{width:%?140?%;height:%?140?%}body.?%PAGE?%[data-v-75e03944]{background-color:#f8f8f8}',""])},"4c8c":function(t,e,i){"use strict";i.r(e);var n=i("6ec6"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},5478:function(t,e,i){var n=i("4b55");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f896f2e6",n,!0,{sourceMap:!1,shadowMode:!1})},"56e0":function(t,e,i){"use strict";i.r(e);var n=i("fa1e"),a=i("4c8c");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("bcaf");var o,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"75e03944",null,!1,n["a"],o);e["default"]=l.exports},"6ec6":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("20d6"),i("ac6a"),i("96cf");var a=n(i("3b8d")),s=n(i("660b")),o=(uni.getStorageSync("userInfo"),{data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var e,i,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={},t.next=3,s.default.apiCall("get",s.default.goods.typeGoodsList,e);case 3:i=t.sent,i.data.forEach(function(t){"L1"==t.level?n.flist.push(t):"L2"==t.level?n.slist.push(t):n.tlist.push(t)});case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),tabtap:function(t){this.sizeCalcState||this.calcSize(),this.currentId=t.id;var e=this.slist.findIndex(function(e){return e.pid===t.id});e>=0&&(this.tabScrollTop=this.slist[e].top)},asideScroll:function(t){this.sizeCalcState||this.calcSize();var e=t.detail.scrollTop,i=this.slist.filter(function(t){return t.top<=e}).reverse();i.length>0&&(this.currentId=i[0].pid)},calcSize:function(){var t=0;this.slist.forEach(function(e){var i=uni.createSelectorQuery().select("#main-"+e.id);i.fields({size:!0},function(i){e.top=t,t+=i.height,e.bottom=t}).exec()}),this.sizeCalcState=!0},navToList:function(t,e){uni.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(t,"&tid=").concat(e)})}}});e.default=o},bcaf:function(t,e,i){"use strict";var n=i("5478"),a=i.n(n);a.a},fa1e:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":!0}},t._l(t.flist,function(e){return i("v-uni-view",{key:e.id,staticClass:"f-item b-b",class:{active:e.id===t.currentId},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabtap(e)}}},[t._v(t._s(e.name))])}),1),i("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":!0,"scroll-y":!0,"scroll-top":t.tabScrollTop},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.asideScroll.apply(void 0,arguments)}}},t._l(t.slist,function(e){return i("v-uni-view",{key:e.id,staticClass:"s-list",attrs:{id:"main-"+e.id}},[i("v-uni-text",{staticClass:"s-item"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"t-list"},t._l(t.tlist,function(n){return n.pid===e.id?i("v-uni-view",{key:n.id,staticClass:"t-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToList(e.id,n.id)}}},[i("v-uni-image",{attrs:{src:n.picUrl}}),i("v-uni-text",[t._v(t._s(n.name))])],1):t._e()}),1)],1)}),1)],1)},s=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return n})}}]);