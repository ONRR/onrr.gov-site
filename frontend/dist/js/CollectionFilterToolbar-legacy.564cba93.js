(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[364],{7227:function(t,e,r){"use strict";var n=r(7710),i=r(5631);n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},189:function(t,e,r){r(7227)},3811:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return V}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",[r("v-container",{staticClass:"pa-0"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"4"}},[r("TextField",{attrs:{fields:t.searchInputField},on:{update:function(e){t.onUpdateStore("searchQuery",e),t.$emit("searchUpdateEvent",t.searchInputField.text)}}})],1),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("SelectField",{attrs:{fields:t.yearSelectField},on:{update:function(e){t.onUpdateStore("year",e),t.$emit("yearUpdateEvent",t.year)}}})],1),r("v-col",{staticClass:"mt-1",attrs:{cols:"12",sm:"4"}},[r("v-chip",[t._v(t._s(t.searchResults&&t.searchResults.length>1?(t.searchResults&&t.searchResults.length)+" items":(t.searchResults&&t.searchResults.length)+" item"))])],1)],1)],1)],1)},i=[],a=r(7174),s=(r(1539),r(8783),r(3948),r(2707),r(1249),r(2222),r(189),r(2478)),o=r(8930),u=function(){return r.e(707).then(r.bind(r,392))},l=function(){return Promise.all([r.e(860),r.e(248)]).then(r.bind(r,9571))},c={name:"CollectionFilterToolbar",data:function(){return{year:s.h.collections.year,search:s.h.collections.searchQuery,items:[],searchInputField:{label:"Search",text:s.h.collections.searchQuery,ref:"searchInput",color:"secondary",icon:"mdi-magnify",update:this.onUpdateStore("searchQuery")},yearSelectField:{items:[],label:"Year",ref:"yearSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",clearable:!1}}},props:{collection:{type:[Object,Array]},showToolbar:{type:Boolean},searchResults:{type:Array}},components:{TextField:u,SelectField:l},methods:{onUpdateStore:function(t,e){s.P.updateCollections(t,e)},getYears:function(){var t=this,e="All Years"!==this.yearSelectField.selected&&this.collection.map((function(e){return t.getYear(e.date)})).sort((function(t,e){return e-t}));this.yearSelectField.items=["All Years"].concat((0,a.Z)(new Set(e))),this.yearSelectField.selected=this.yearSelectField.items[0],this.onUpdateStore("year",this.yearSelectField.items[0])},getYear:o.So},watch:{"$route.query.tab":function(){this.onUpdateStore("year",this.$refs.yearSelectInput.value||this.yearSelectField.items[0])}},created:function(){setTimeout(function(){this.getYears()}.bind(this),500)}},h=c,d=r(1001),f=r(3453),p=r.n(f),m=r(5844),v=r(3121),y=r(6643),_=r(4254),S=(r(6699),r(2023),r(2479),r(7327),r(4747),r(9826),r(3553)),g=r(6011),w=r(9737),F=(0,S.Z)(g.Z,(0,w.J)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:(0,_.Z)({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),b=r(4722),B=(0,d.Z)(h,n,i,!1,null,null,null),V=B.exports;p()(B,{VChip:m.Z,VCol:v.Z,VContainer:y.Z,VForm:F,VRow:b.Z})}}]);
//# sourceMappingURL=CollectionFilterToolbar-legacy.564cba93.js.map