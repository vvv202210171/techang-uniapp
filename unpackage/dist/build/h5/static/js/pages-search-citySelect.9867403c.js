(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-citySelect"],{"0cd1":function(t,e,i){"use strict";i.r(e);var n=i("8bb4"),r=i("7725");for(var c in r)"default"!==c&&function(t){i.d(e,t,function(){return r[t]})}(c);i("def4");var l,s=i("f0c5"),a=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"00bdad8b",null,!1,n["a"],l);e["default"]=a.exports},"362b":function(t,e,i){"use strict";i.r(e);var n=i("71f0"),r=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=r.a},"469f":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("7d7b")},"523e":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("768b")),c=n(i("ca78")),l={props:{hotCitys:{type:Array,default:function(){return[]}},value:{type:String,default:"未设置"}},data:function(){return{citys:c.default,windowHeight:"",scrollIntoId:"F",current:this.value}},mounted:function(){this.getSystemInfo()},methods:{getSystemInfo:function(){var t=this;uni.getSystemInfo().then(function(e){var i=(0,r.default)(e,2),n=(i[0],i[1]);t.windowHeight="".concat(n.windowHeight,"px")})},scrollTo:function(t){this.scrollIntoId="#"===t?"current":t},onSelect:function(t){this.current=t,this.$emit("input",t),this.$emit("on-select",t)}}};e.default=l},"5d73":function(t,e,i){t.exports=i("469f")},6041:function(t,e,i){"use strict";var n={"ss-select-city":i("0cd1").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"demo"},[i("ss-select-city",{attrs:{hotCitys:t.hotCitys},on:{"on-select":function(e){arguments[0]=e=t.$handleEvent(e),t.onSelect.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},c=[];i.d(e,"b",function(){return r}),i.d(e,"c",function(){return c}),i.d(e,"a",function(){return n})},"71f0":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("0cd1")),c={data:function(){return{hotCitys:["杭州","天津","北京","上海","深圳","广州","成都","重庆","厦门"],value:"杭州"}},components:{ssSelectCity:r.default},methods:{onSelect:function(t){console.log(t)}}};e.default=c},"768b":function(t,e,i){"use strict";i.r(e);var n=i("a745"),r=i.n(n);function c(t){if(r()(t))return t}var l=i("5d73"),s=i.n(l);function a(t,e){var i=[],n=!0,r=!1,c=void 0;try{for(var l,a=s()(t);!(n=(l=a.next()).done);n=!0)if(i.push(l.value),e&&i.length===e)break}catch(o){r=!0,c=o}finally{try{n||null==a["return"]||a["return"]()}finally{if(r)throw c}}return i}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){return c(t)||a(t,e)||o()}i.d(e,"default",function(){return u})},7725:function(t,e,i){"use strict";i.r(e);var n=i("523e"),r=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=r.a},"7d7b":function(t,e,i){var n=i("e4ae"),r=i("7cd6");t.exports=i("584a").getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},8200:function(t,e,i){"use strict";i.r(e);var n=i("6041"),r=i("362b");for(var c in r)"default"!==c&&function(t){i.d(e,t,function(){return r[t]})}(c);var l,s=i("f0c5"),a=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"ea047ec8",null,!1,n["a"],l);e["default"]=a.exports},"8bb4":function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"select-city-wrap"},[i("v-uni-view",{staticClass:"select-city"},[i("v-uni-view",{staticClass:"index"},[i("v-uni-view",{staticClass:"index-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollTo("#")}}},[t._v("#")]),t._l(t.citys,function(e){return i("v-uni-view",{key:e.letter,staticClass:"index-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.scrollTo(e.letter)}}},[t._v(t._s(e.letter))])})],2),i("v-uni-scroll-view",{style:{height:t.windowHeight},attrs:{"scroll-into-view":t.scrollIntoId,"scroll-y":!0,"scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"section",attrs:{id:"current"}},[i("v-uni-view",{staticClass:"city-title"},[t._v("当前城市")]),i("v-uni-view",{staticClass:"city-list"},[i("v-uni-view",{staticClass:"city-item"},[t._v(t._s(t.current))])],1)],1),t.hotCitys.length?i("v-uni-view",{staticClass:"section",attrs:{id:"hot"}},[i("v-uni-view",{staticClass:"city-title"},[t._v("热门城市")]),i("v-uni-view",{staticClass:"city-list"},t._l(t.hotCitys,function(e,n){return i("v-uni-view",{key:n,staticClass:"city-item",class:{active:t.current===e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onSelect(e)}}},[t._v(t._s(e))])}),1)],1):t._e(),t._l(t.citys,function(e){return i("v-uni-view",{key:e.letter,staticClass:"section",attrs:{id:e.letter}},[i("v-uni-view",{staticClass:"letter"},[t._v(t._s(e.letter))]),i("v-uni-view",{staticClass:"city-list"},t._l(e.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"city-item",class:{active:t.current===e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onSelect(e)}}},[t._v(t._s(e))])}),1)],1)})],2)],1)],1)],1)},c=[];i.d(e,"b",function(){return r}),i.d(e,"c",function(){return c}),i.d(e,"a",function(){return n})},a6d4:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.select-city-wrap[data-v-00bdad8b]{position:relative;padding:0 %?30?%;background-color:#fff}.select-city .index[data-v-00bdad8b]{position:absolute;right:0;bottom:%?20?%;z-index:999;color:#2f9bfe;font-size:%?32?%}.select-city .index .index-item[data-v-00bdad8b]{width:%?40?%;height:%?42?%;line-height:%?42?%;text-align:center}.select-city .section[data-v-00bdad8b]{margin-bottom:%?19?%}.select-city .section .city-title[data-v-00bdad8b]{color:#333;font-size:%?28?%;margin-bottom:%?28?%}.select-city .section .letter[data-v-00bdad8b]{width:%?44?%;height:%?44?%;color:#fff;border-radius:100%;background-color:#2f9bfe;font-size:%?28?%;line-height:%?44?%;text-align:center;margin-bottom:%?30?%}.select-city .section .city-list[data-v-00bdad8b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.select-city .section .city-list .city-item[data-v-00bdad8b]{width:%?190?%;height:%?55?%;margin-right:%?36?%;margin-bottom:%?28?%;line-height:%?55?%;text-align:center;border:1px solid #dcdcdc;border-radius:%?6?%;color:#999;font-size:%?28?%}.select-city .section .city-list .city-item.active[data-v-00bdad8b]{background-color:#d5ebff;border-color:#2f9bfe;color:#2f9bfe}',""])},ca78:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{letter:"A",list:["安远","安义","安溪","安丘","安宁","安吉","安福","阿城","安阳","安顺","鞍山","安庆","安康","阿里","阿勒泰","阿拉善盟","阿克苏","阿坝"]},{letter:"B",list:["北京","博兴","博罗","博爱","璧山","宾阳","宾县","滨海","巴彦","宝应","亳州","博尔塔拉","滨州","毕节","本溪","北海","巴中","巴音郭楞","巴彦淖尔","包头","保山","宝鸡","保定","蚌埠","白银","白山","百色","白城"]},{letter:"C",list:["成都","常州","长沙","长春","重庆","朝阳","巢湖","长治","昌吉","昌都","常德","沧州","郴州","承德","潮州","滁州","楚雄","崇左","池州","赤峰","枞阳","从化","慈溪","淳安","崇州","崇义","崇仁","茌平","成武","城口","呈贡","潮安","昌邑","长兴","长汀","长泰","常熟","常山","昌乐","长乐","长海","长丰","长岛","曹县","苍山","苍南"]},{letter:"D",list:["丹东","大理","东莞","大连","大兴安岭","大同","大庆","德州","德阳","德宏","达州","大丰","东营","迪庆","定西","单县","当涂","砀山","岱山","大邑","大田","大埔","丹阳","德化","德安","大足","大余","德庆","德清","登封","德惠","定南","垫江","电白","德兴","东海","东阿","定远","定陶","东台","东山","东平","东明","东源","东阳","东乡","洞头","都江堰","都昌","东至"]},{letter:"E",list:["鄂尔多斯","恩施","恩平","鄂州"]},{letter:"F",list:["佛山","福州","防城港","抚顺","阜新","阜阳","抚州","法库","富阳","福清","阜宁","阜南","富民","浮梁","福鼎","福安","佛冈","分宜","凤阳","奉新","丰县","凤台","丰顺","封开","奉节","奉化","丰都","丰城","费县","肥西","肥东","肥城","方正","繁昌"]},{letter:"G",list:["广州","贵阳","甘南","赣州","甘孜","广安","广元","贵港","桂林","果洛","固原","赣县","赣榆","高安","固镇","古田","贵溪","灌云","冠县","灌南","光泽","广饶","广宁","广丰","广德","广昌","巩义","高州","高邮","高邑","高要","高唐","高青","高密","高陵","皋兰","高淳","藁城"]},{letter:"H",list:["杭州","哈尔滨","邯郸","海口","黑河","合肥","鹤岗","河池","鹤壁","汉中","哈密","海西","海南","海东","海北","惠州","呼伦贝尔","葫芦岛","呼和浩特","黄石","黄山","黄南","黄冈","淮南","怀化","淮北","淮安","红河","贺州","菏泽","河源","和田地","衡阳","衡水","怀远","怀宁","怀集","桦甸","华安","洪泽","和县","鹤山","和平","横县","横峰","合川","含山","海阳","海盐","海宁","海门","海丰","海安","湖州","户县","霍山","霍邱","呼兰","湖口","惠民","惠来","惠东","会昌","惠安","化州","桓台"]},{letter:"J",list:["鸡西","酒泉","九江","锦州","晋中","济宁","金华","荆州","荆门","景德镇","晋城","金昌","揭阳","嘉峪关","吉安","江门","佳木斯","济南","吉林","嘉兴","焦作","井冈山","旌德","靖安","即墨","揭西","界首","揭东","嘉祥","嘉善","胶州","胶南","蕉岭","蛟河","吉安","建阳","建瓯","建宁","建湖","江阴","姜堰","江山","将乐","江津","江都","建德","九台","九江","吉水","晋州","金寨","缙云","金乡","金溪","进贤","金堂","金坛","晋宁","金门","晋江","金湖","井陉","泾县","景宁","靖江","巨野","莒县","句容","莒南","鄄城","济源","济阳","绩溪"]},{letter:"K",list:["昆明","开封","喀什地","克拉玛依","克孜勒","开化","开平","开县","开阳","康平","垦利","昆山"]},{letter:"L",list:["连云港","凉山","乐山","拉萨","廊坊","莱芜","来宾","洛阳","柳州","兰州","六盘水","六安","丽水","林芝","临沂","临夏","临汾","临沧","丽江","辽源","辽阳","聊城","乐亭","乐清","乐平","乐陵","雷州","乐昌","乐安","兰溪","蓝田","郎溪","莱州","莱阳","莱西","来安","吕梁","泸州","漯河","娄底","龙岩","陇南","临邑","临沭","临朐","临泉","临清","临海","陵县","灵寿","灵璧","临安","利津","黎川","辽中","连州","涟水","连山","连平","连南","廉江","连江","莲花","梁山","梁平","连城","鹿寨","芦溪","禄劝","鹿泉","罗源","洛宁","罗定","庐江","陆河","陆丰","滦县","滦南","栾川","栾城","龙游","龙泉","龙南","龙门","龙口","龙海","龙川","隆安","溧阳","利辛","浏阳","柳江","柳城","溧水"]},{letter:"M",list:["马鞍山","茂名","眉山","梅州","绵阳","牡丹江","马山","梅县","蒙城","孟津","蒙阴","孟州","明光","明溪","闽侯","闽清","木兰"]},{letter:"N",list:["南昌","南京","南宁","南通","宁波","南充","南平","南阳","那曲","内江","宁德","怒江","南安","南澳","南城","南川","南丰","南靖","南康","南陵","南雄","宁都","宁国","宁海","宁化","宁津","宁乡","宁阳","农安"]},{letter:"P",list:["盘锦","攀枝花","平顶山","平凉","萍乡","普洱","莆田","濮阳","磐安","磐石","沛县","蓬莱","彭水","彭泽","彭州","平度","平和","平湖","屏南","平山","平潭","平阳","平阴","平邑","平原","平远","郫县","邳州","鄱阳","浦城","浦江","蒲江","普兰店","普宁"]},{letter:"Q",list:["青岛","泉州","黔东","黔南","黔西南","庆阳","清远","秦皇岛","钦州","齐齐哈尔","七台河","曲靖","衢州","迁安","潜山","铅山","迁西","启东","齐河","綦江","祁门","清流","青田","清新","青阳","庆元","庆云","清镇","青州","沁阳","邛崃","栖霞","全椒","曲江","曲阜","全南"]},{letter:"R",list:["日喀则","日照","饶平","仁化","融安","荣昌","荣成","融水","如东","如皋","瑞安","瑞昌","瑞金","乳山","汝阳","乳源"]},{letter:"S",list:["上海","沈阳","深圳","石家庄","苏州","三门峡","三明","三亚","商丘","商洛","上饶","汕尾","汕头","绍兴","韶关","山南","邵阳","十堰","双鸭山","石嘴山","绥化","松原","四平","朔州","泗阳","泗县","泗水","四会","泗洪","沭阳","顺昌","舒兰","舒城","双流","双城","寿县","寿宁","寿光","石柱","始兴","石台","石狮","石林","石城","射阳","歙县","深泽","莘县","嵊州","嵊泗","沙县","绍兴","邵武","尚志","上虞","上犹","上饶","上林","上栗","商河","上杭","上高","诏安","三门","三江","松阳","嵩县","松溪","嵩明","宿州","宿迁","随州","遂宁","宿松","遂溪","濉溪","睢宁","遂川","遂昌","宿豫"]},{letter:"T",list:["天津","台州","唐山","塔城地","泰安","太原","泰州","天水","铁岭","铜川","通化","通辽","铜陵","铜仁","通州","桐乡","铜山","潼南","桐庐","铜陵","铜梁","通河","铜鼓","桐城","天台","天长","滕州","唐海","郯城","泰兴","泰顺","台山","泰宁","太湖","泰和","太和","太仓","吐鲁番"]},{letter:"W",list:["潍坊","威海","武汉","无锡","渭南","文山","温州","乌海","芜湖","乌兰察布","乌鲁木齐","武威","吴忠","武陟","婺源","武夷山","武义","巫溪","无为","巫山","武平","武宁","武鸣","武隆","五莲","吴江","无极","五华","芜湖","五河","无棣","吴川","武城","五常","涡阳","温县","汶上","温岭","翁源","文登","文成","微山","万载","万年","望江","望城","万安","瓦房店","梧州"]},{letter:"X",list:["厦门","西安","许昌","徐州","襄樊","湘潭","湘西","咸宁","咸阳","孝感","锡林郭勒盟","兴安盟","邢台","西宁","新乡","信阳","新余","忻州","西双版纳","宣城","峡江","夏津","象山","响水","仙居","仙游","萧县","霞浦","息烽","新安","新昌","信丰","新丰","新干","兴国","兴化","兴宁","行唐","荥阳","星子","辛集","新建","新津","新乐","新民","新密","新泰","新兴","新沂","信宜","新郑","休宁","秀山","修水","修文","修武","寻甸","盱眙","徐闻","寻乌"]},{letter:"Y",list:["扬州","烟台","雅安","延安","延边","盐城","阳江","阳泉","宜宾","宜昌","伊春","宜春","伊犁哈萨克","银川","营口","鹰潭","益阳","永州","岳阳","玉林","榆林","运城","云浮","玉树","玉溪","阳春","阳东","阳谷","阳山","阳信","阳西","扬中","偃师","延寿","兖州","伊川","宜丰","宜黄","依兰","宜良","沂南","英德","颍上","沂水","义乌","黟县","宜兴","弋阳","宜阳","沂源","仪征","永安","永川","永春","永登","永定","永丰","永吉","永嘉","永康","邕宁","永泰","永新","永修","尤溪","酉阳","元氏","禹城","于都","岳西","余干","玉环","余江","郁南","云安","郓城","云和","云霄","云阳","玉山","榆树","鱼台","玉田","余姚","榆中"]},{letter:"Z",list:["漳州","遵化","郑州","中山","珠海","枣庄","张家界","张家口","张掖","湛江","肇庆","昭通","镇江","中卫","周口","舟山","驻马店","株洲","淄博","自贡","资阳","遵义","赞皇","增城","张家港","漳平","漳浦","章丘","樟树","沾化","赵县","招远","正定","政和","柘荣","中牟","忠县","周宁","周至","庄河","诸城","诸暨","紫金","资溪","邹城","邹平"]}],r=n;e.default=r},def4:function(t,e,i){"use strict";var n=i("e8f8"),r=i.n(n);r.a},e8f8:function(t,e,i){var n=i("a6d4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("0f9ffbe4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);