"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[758],{6428:function(){},3121:function(e,t,n){n(6699),n(6428);var r=n(144),a=n(5218),l=n(5598);const i=["sm","md","lg","xl"],s=(()=>i.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),o=(()=>i.reduce(((e,t)=>(e["offset"+(0,l.jC)(t)]={type:[String,Number],default:null},e)),{}))(),d=(()=>i.reduce(((e,t)=>(e["order"+(0,l.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u={col:Object.keys(s),offset:Object.keys(o),order:Object.keys(d)};function c(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const f=new Map;t["Z"]=r.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:r,parent:l}){let i="";for(const a in t)i+=String(t[a]);let s=f.get(i);if(!s){let e;for(e in s=[],u)u[e].forEach((n=>{const r=t[n],a=c(e,n,r);a&&s.push(a)}));const n=s.some((e=>e.startsWith("col-")));s.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),f.set(i,s)}return e(t.tag,(0,a.ZP)(n,{class:s}),r)}})},6643:function(e,t,n){n.d(t,{Z:function(){return i}});n(9941),n(6428);var r=n(144);function a(e){return r.Z.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:n,data:r,children:a}){r.staticClass=`${e} ${r.staticClass||""}`.trim();const{attrs:l}=r;if(l){r.attrs={};const e=Object.keys(l).filter((e=>{if("slot"===e)return!1;const t=l[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}));e.length&&(r.staticClass+=` ${e.join(" ")}`)}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,r,a)}})}var l=n(5218),i=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:n,children:r}){let a;const{attrs:i}=n;return i&&(n.attrs={},a=Object.keys(i).filter((e=>{if("slot"===e)return!1;const t=i[e];return e.startsWith("data-")?(n.attrs[e]=t,!1):t||"string"===typeof t}))),t.id&&(n.domProps=n.domProps||{},n.domProps.id=t.id),e(t.tag,(0,l.ZP)(n,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(a||[])}),r)}})},4722:function(e,t,n){n(6699),n(6428);var r=n(144),a=n(5218),l=n(5598);const i=["sm","md","lg","xl"],s=["start","end","center"];function o(e,t){return i.reduce(((n,r)=>(n[e+(0,l.jC)(r)]=t(),n)),{})}const d=e=>[...s,"baseline","stretch"].includes(e),u=o("align",(()=>({type:String,default:null,validator:d}))),c=e=>[...s,"space-between","space-around"].includes(e),f=o("justify",(()=>({type:String,default:null,validator:c}))),p=e=>[...s,"space-between","space-around","stretch"].includes(e),g=o("alignContent",(()=>({type:String,default:null,validator:p}))),y={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function h(e,t,n){let r=m[e];if(null!=n){if(t){const n=t.replace(e,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const v=new Map;t["Z"]=r.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...u,justify:{type:String,default:null,validator:c},...f,alignContent:{type:String,default:null,validator:p},...g},render(e,{props:t,data:n,children:r}){let l="";for(const a in t)l+=String(t[a]);let i=v.get(l);if(!i){let e;for(e in i=[],y)y[e].forEach((n=>{const r=t[n],a=h(e,n,r);a&&i.push(a)}));i.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),v.set(l,i)}return e(t.tag,(0,a.ZP)(n,{staticClass:"row",class:i}),r)}})},164:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-4"},[n("v-card",[n("v-data-table",{attrs:{headers:e.headers,items:e.collectionItems,"item-key":"title"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("SelectField",{attrs:{fields:e.designatedAreaInputField}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("MultipleSelectField",{attrs:{fields:e.yearInputField}})],1)],1)],1)]},proxy:!0},{key:"item.designatedArea",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.designatedArea)+" ")]}},{key:"item.year",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.year)+" ")]}},{key:"item.month",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.formatMonth(n.month))+" ")]}},{key:"item.price",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.formatToDollarInt(n.price))+" ")]}},{key:"item.dueDate",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.dueDate)+" ")]}}],null,!0)})],1)],1)},a=[],l=(n(6699),n(8930));const i=()=>Promise.all([n.e(860),n.e(248)]).then(n.bind(n,9571)),s=()=>n.e(486).then(n.bind(n,1622));var o={name:"IndianGasMajorPortionCollection",props:{collection:[Array,Object]},data:()=>({designatedAreaInputField:{items:[],label:"All Areas",ref:"designatedAreaSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"designated_area",clearable:!0},yearInputField:{items:[],label:"All Years",ref:"yearSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"years"}}),components:{SelectField:i,MultipleSelectField:s},methods:{getMonth:l.jw,getYear:l.So,formatToDollarInt:l.Pl,formatMonth(e){return(0,l.jw)(e,"long")},formatYear(e){return(0,l.So)(e)},formatPrice(e){return(0,l.Pl)(e)},designatedAreaList(){let e=[];this.collectionItems&&this.collectionItems.map((t=>{t.designatedArea&&(e.includes(t.designatedArea)||e.push(t.designatedArea))})),this.designatedAreaInputField.items=[...e.sort()]},yearList(){let e=[];this.collectionItems&&this.collectionItems.map((t=>{t.year&&(e.includes(t.year)||e.push(t.year))})),this.yearInputField.items=[...e.sort()].reverse()},designatedAreaFilter(e){return!this.designatedAreaInputField.selected||null===this.designatedAreaInputField.selected||0===this.designatedAreaInputField.selected.length||e.toLowerCase()===this.designatedAreaInputField.selected.toLowerCase()},yearFilter(e){return!this.yearInputField.selected||null===this.yearInputField.selected||0===this.yearInputField.selected.length||this.yearInputField.selected.indexOf(e)>=0}},computed:{headers(){return[{text:"Designated Area",align:"start",sortable:!0,value:"designatedArea",filter:this.designatedAreaFilter},{text:"Year",align:"start",sortable:!0,value:"year",filter:this.yearFilter},{text:"Month",align:"start",sortable:!1,value:"month"},{text:"Price",align:"end",sortable:!1,value:"price"},{text:"Due Date",align:"start",sortable:!1,value:"dueDate"}]},collectionItems(){let e=[];return this.collection&&this.collection.map((t=>{t.index_zones.forEach((n=>{let r={},[a,l,i]=n.dueDate.split("-"),s=[l,i,a].join("/");r.designatedArea=n.designatedArea,r.year=this.formatYear(t.date),r.month=t.date,r.price=n.price,r.dueDate=s,e.push(r)}))})),e}},created(){setTimeout((()=>{this.designatedAreaList(),this.yearList()}),300)},mounted(){const e=this.$route.query.designated_area,t=this.$route.query.years&&this.$route.query.years.split(",");this.designatedAreaInputField.selected=e||null,this.yearInputField.selected=t||null}},d=o,u=n(1001),c=n(3453),f=n.n(c),p=n(9391),g=n(3121),y=n(6643),m=n(9049),h=n(4722),v=(0,u.Z)(d,r,a,!1,null,null,null),b=v.exports;f()(v,{VCard:p.Z,VCol:g.Z,VContainer:y.Z,VDataTable:m.Z,VRow:h.Z})}}]);
//# sourceMappingURL=IndianGasMajorPortion.6024b9f0.js.map