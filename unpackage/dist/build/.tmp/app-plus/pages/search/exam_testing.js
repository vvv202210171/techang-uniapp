(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/exam_testing"],{"04b0":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=function(){return n.e("components/Li-ExamWidght").then(n.bind(null,"b265"))},u={components:{examWidght:s},data:function(){return{fldTestPaperID:void 0,fldTestRecordID:void 0,items:[],index:0,QuestionList:[]}},onLoad:function(t){e("log",111," at pages\\search\\exam_testing.vue:25"),a=this,a.getTestPaper()},onUnload:function(){},methods:{finish:function(t){e("log","-----finish------"," at pages\\search\\exam_testing.vue:32"),e("log",t," at pages\\search\\exam_testing.vue:33")},selectItem:function(t){e("log","-----selectItem------"," at pages\\search\\exam_testing.vue:36"),e("log",t," at pages\\search\\exam_testing.vue:37")},selectFinish:function(t){e("log","-----selectFinish------"," at pages\\search\\exam_testing.vue:40"),e("log",t," at pages\\search\\exam_testing.vue:41"),t.index++;var n=t.index+"/"+t.total;0==t.question.questionType?n+="  单选题":1==t.question.questionType?n+="  多选题":n+="  填选题",i.setNavigationBarTitle({title:n})},getTestPaper:function(){var t=n("01fb");if(e("log",t.QuestionList," at pages\\search\\exam_testing.vue:57"),a.QuestionList=t.QuestionList,a.QuestionList.length>0){var s="1/"+a.QuestionList.length;0==a.QuestionList[0].questionType?s+="  单选题":1==a.QuestionList[0].questionType?s+="  多选题":s+="  填空题",i.setNavigationBarTitle({title:s})}}}};t.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},"57e8":function(e,t,n){"use strict";(function(e){n("e160"),n("921b");i(n("66fd"));var t=i(n("7532"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},7532:function(e,t,n){"use strict";n.r(t);var i=n("9aec"),a=n("d96a");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);var u,o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=c.exports},"9aec":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return i})},d96a:function(e,t,n){"use strict";n.r(t);var i=n("04b0"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a}},[["57e8","common/runtime","common/vendor"]]]);