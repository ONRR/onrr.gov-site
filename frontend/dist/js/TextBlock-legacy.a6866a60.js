"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[738],{100:function(t,e,a){a.r(e),a.d(e,{default:function(){return i}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:[t.textClass,"black--text"],attrs:{role:t.textRole,"aria-level":t.textLevel,variant:t.textVariant},domProps:{innerHTML:t._s(t.content)}})},n=[],c=(a(2222),{name:"TextBlock",data:function(){return{}},props:{block:{type:Object}},computed:{textClass:function(){var t,e,a,r="",n="text-".concat(null===(t=this.block)||void 0===t||null===(e=t.tunes)||void 0===e||null===(a=e.alignmentTune)||void 0===a?void 0:a.alignment)||0;switch(this.block.type){case"header":r="text-h".concat(this.block.data.level," ").concat(n," mt-4 mb-6");break;case"paragraph":r="text-body1 ".concat(n);break;default:r="text-body1 ".concat(n);break}return r},textRole:function(){var t="";switch(this.block.type){case"header":t="heading";break;case"paragraph":t="";break;default:t="";break}return t},textLevel:function(){var t="";switch(this.block.type){case"header":t=this.block.data.level;break;case"paragraph":t="";break;default:t="";break}return t},textVariant:function(){var t="";switch(this.block.type){case"header":t="h".concat(this.block.data.level);break;case"paragraph":t="body1";break;default:t="body1";break}return t},content:function(){return this.block.data.text}}}),l=c,o=a(1001),s=(0,o.Z)(l,r,n,!1,null,"daba2c46",null),i=s.exports}}]);
//# sourceMappingURL=TextBlock-legacy.a6866a60.js.map