(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/share"],{"249b":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t("a34a")),o=t("2f62"),i=c(t("660b"));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,n,t,r,o,i,c){try{var s=e[i](c),a=s.value}catch(u){return void t(u)}s.done?n(a):Promise.resolve(a).then(r,o)}function a(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var i=e.apply(n,t);function c(e){s(i,r,o,c,a,"next",e)}function a(e){s(i,r,o,c,a,"throw",e)}c(void 0)})}}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){l(e,n,t[n])})}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=function(){return Promise.all([t.e("common/vendor"),t.e("components/tki-qrcode/tki-qrcode")]).then(t.bind(null,"b3d7"))},d={components:{tkiQrcode:f},data:function(){return{providerList:[],shareUrl:"www.baidu.com",type:0}},onLoad:function(){this.loadQr(),this.loadProvider()},computed:u({},(0,o.mapState)(["hasLogin","userInfo"])),methods:{loadQr:function(){var e=a(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.apiCall("GET",i.default.member.shareUrl,{});case 2:if(n=e.sent,0==n.code){e.next=6;break}return this.$api.msg(n.msg),e.abrupt("return");case 6:this.shareUrl=n.data;case 7:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),loadProvider:function(){var n=this;e.getProvider({service:"share",success:function(e){for(var t=[],r=0;r<e.provider.length;r++)switch(e.provider[r]){case"weixin":t.push({name:"分享到微信好友",id:"weixin"}),t.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":t.push({name:"分享到QQ",id:"qq"});break;default:break}n.providerList=t},fail:function(e){console.log("获取登录通道失败"+JSON.stringify(e))}})},sharurl:function(){e.setClipboardData({data:this.shareUrl,success:function(){console.log("success"),e.showModal({title:"复制成功",content:"内容已复制到粘贴板，可前往其他应用粘贴查看。",showCancel:!1,success:function(e){e.confirm||e.cancel}})}})},save:function(){var n=this;e.showActionSheet({itemList:["保存图片到相册"],success:function(){n.$refs.qrcode._saveCode()}})},share:function(n){var t=this;if(0!==this.providerList.length){var r=this.providerList.map(function(e){return e.name});console.log(r),e.showActionSheet({itemList:r,success:function(n){console.log(t.providerList[n.tapIndex].id),"qq"==t.providerList[n.tapIndex].id?t.type=1:t.type=0,e.share({provider:t.providerList[n.tapIndex].id,scene:t.providerList[n.tapIndex].type&&"WXSenceTimeline"===t.providerList[n.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:t.type,title:"土特产商城",summary:"土特产是一个让你找到原生态的商城",href:"https://www.chtechang.cn",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(n){e.showModal({content:n.errMsg,showCancel:!1})}})}})}else e.showModal({title:"当前环境无分享渠道!",showCancel:!1})},openLink:function(){plus.runtime.openWeb(this.sourceLink)}},onShareAppMessage:function(e){alert()}};n.default=d}).call(this,t("543d")["default"])},3477:function(e,n,t){"use strict";var r={"tki-qrcode":()=>Promise.all([t.e("common/vendor"),t.e("components/tki-qrcode/tki-qrcode")]).then(t.bind(null,"b3d7"))},o=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"b",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return r})},"4ec1":function(e,n,t){"use strict";var r=t("bd38"),o=t.n(r);o.a},"5f08":function(e,n,t){"use strict";(function(e){t("e160"),t("921b");r(t("66fd"));var n=r(t("8f26"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"8f26":function(e,n,t){"use strict";t.r(n);var r=t("3477"),o=t("d409");for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);t("4ec1");var c,s=t("f0c5"),a=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);n["default"]=a.exports},bd38:function(e,n,t){},d409:function(e,n,t){"use strict";t.r(n);var r=t("249b"),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);n["default"]=o.a}},[["5f08","common/runtime","common/vendor"]]]);