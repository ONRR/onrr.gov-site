"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[567],{6428:function(){},3121:function(e,t,n){n(6699),n(6428);var r=n(144),i=n(5218),l=n(5598);const s=["sm","md","lg","xl"],o=(()=>s.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),a=(()=>s.reduce(((e,t)=>(e["offset"+(0,l.jC)(t)]={type:[String,Number],default:null},e)),{}))(),d=(()=>s.reduce(((e,t)=>(e["order"+(0,l.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c={col:Object.keys(o),offset:Object.keys(a),order:Object.keys(d)};function u(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const f=new Map;t["Z"]=r.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...a,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:r,parent:l}){let s="";for(const i in t)s+=String(t[i]);let o=f.get(s);if(!o){let e;for(e in o=[],c)c[e].forEach((n=>{const r=t[n],i=u(e,n,r);i&&o.push(i)}));const n=o.some((e=>e.startsWith("col-")));o.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),f.set(s,o)}return e(t.tag,(0,i.ZP)(n,{class:o}),r)}})},6643:function(e,t,n){n.d(t,{Z:function(){return s}});n(9941),n(6428);var r=n(144);function i(e){return r.Z.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:n,data:r,children:i}){r.staticClass=`${e} ${r.staticClass||""}`.trim();const{attrs:l}=r;if(l){r.attrs={};const e=Object.keys(l).filter((e=>{if("slot"===e)return!1;const t=l[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}));e.length&&(r.staticClass+=` ${e.join(" ")}`)}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,r,i)}})}var l=n(5218),s=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:n,children:r}){let i;const{attrs:s}=n;return s&&(n.attrs={},i=Object.keys(s).filter((e=>{if("slot"===e)return!1;const t=s[e];return e.startsWith("data-")?(n.attrs[e]=t,!1):t||"string"===typeof t}))),t.id&&(n.domProps=n.domProps||{},n.domProps.id=t.id),e(t.tag,(0,l.ZP)(n,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(i||[])}),r)}})},4722:function(e,t,n){n(6699),n(6428);var r=n(144),i=n(5218),l=n(5598);const s=["sm","md","lg","xl"],o=["start","end","center"];function a(e,t){return s.reduce(((n,r)=>(n[e+(0,l.jC)(r)]=t(),n)),{})}const d=e=>[...o,"baseline","stretch"].includes(e),c=a("align",(()=>({type:String,default:null,validator:d}))),u=e=>[...o,"space-between","space-around"].includes(e),f=a("justify",(()=>({type:String,default:null,validator:u}))),p=e=>[...o,"space-between","space-around","stretch"].includes(e),m=a("alignContent",(()=>({type:String,default:null,validator:p}))),h={align:Object.keys(c),justify:Object.keys(f),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(e,t,n){let r=g[e];if(null!=n){if(t){const n=t.replace(e,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const x=new Map;t["Z"]=r.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...c,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:p},...m},render(e,{props:t,data:n,children:r}){let l="";for(const i in t)l+=String(t[i]);let s=x.get(l);if(!s){let e;for(e in s=[],h)h[e].forEach((n=>{const r=t[n],i=y(e,n,r);i&&s.push(i)}));s.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),x.set(l,s)}return e(t.tag,(0,i.ZP)(n,{staticClass:"row",class:s}),r)}})},1884:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-4"},[n("v-card",[n("v-data-table",{attrs:{headers:e.headers,items:e.collectionItems,"item-key":"title"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("SelectField",{attrs:{fields:e.indexZonesInputField}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("MultipleSelectField",{attrs:{fields:e.indexZonesYearsInputField}})],1)],1)],1)]},proxy:!0},{key:"item.index_zone",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.index_zone)+" ("+e._s(n.abbreviation)+") ")]}},{key:"item.year",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.year)+" ")]}},{key:"item.month",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.formatMonth(n.month))+" ")]}},{key:"item.price",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.formatToDollarInt(n.price))+" ")]}}],null,!0)})],1)],1)},i=[],l=(n(6699),n(8930));const s=()=>Promise.all([n.e(860),n.e(248)]).then(n.bind(n,9571)),o=()=>n.e(486).then(n.bind(n,1622));var a={name:"IndexZonesCollection",data:()=>({indexZonesInputField:{items:[],label:"Index Zone",ref:"indexZoneSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"index_zone",clearable:!0},indexZonesYearsInputField:{items:[],label:"All Years",ref:"indexZoneSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"years"}}),props:{collection:[Array,Object]},components:{SelectField:s,MultipleSelectField:o},methods:{getMonth:l.jw,getYear:l.So,formatToDollarInt:l.Pl,formatMonth(e){return(0,l.jw)(e,"long")},formatYear(e){return(0,l.So)(e)},formatPrice(e){return(0,l.Pl)(e)},indexZonesList(){let e=[];this.collectionItems&&this.collectionItems.map((t=>{t.index_zone&&(e.includes(t.index_zone)||e.push(t.index_zone))})),this.indexZonesInputField.items=[...e.sort()]},indexZonesYearList(){let e=[];this.collectionItems&&this.collectionItems.map((t=>{t.year&&(e.includes(t.year)||e.push(t.year))})),this.indexZonesYearsInputField.items=[...e.sort().reverse()]},indexZonesFilter(e){return!this.indexZonesInputField.selected||null===this.indexZonesInputField.selected||0===this.indexZonesInputField.selected.length||e.toLowerCase()===this.indexZonesInputField.selected.toLowerCase()},indexZonesYearFilter(e){return!this.indexZonesYearsInputField.selected||null===this.indexZonesYearsInputField.selected||0===this.indexZonesYearsInputField.selected.length||this.indexZonesYearsInputField.selected.indexOf(e)>=0}},computed:{headers(){return[{text:"Index Zone",align:"start",sortable:!0,value:"index_zone",filter:this.indexZonesFilter},{text:"Year",align:"start",sortable:!0,value:"year",filter:this.indexZonesYearFilter},{text:"Month",align:"start",sortable:!1,value:"month"},{text:"Price",align:"end",sortable:!1,value:"price"}]},collectionItems(){let e=[];return this.collection&&this.collection.map((t=>{t.index_zones.forEach((n=>{let r={};r.index_zone=n.index_zone,r.year=this.formatYear(t.date),r.month=t.date,r.price=n.price,r.abbreviation=n.abbreviation,e.push(r)}))})),e}},created(){setTimeout((()=>{this.indexZonesList(),this.indexZonesYearList()}),300)},mounted(){const e=this.$route.query.index_zone,t=this.$route.query.years&&this.$route.query.years.split(",");this.indexZonesInputField.selected=e||null,this.indexZonesYearsInputField.selected=t||null}},d=a,c=n(1001),u=n(3453),f=n.n(u),p=n(9391),m=n(3121),h=n(6643),g=n(9049),y=n(4722),x=(0,c.Z)(d,r,i,!1,null,null,null),v=x.exports;f()(x,{VCard:p.Z,VCol:m.Z,VContainer:h.Z,VDataTable:g.Z,VRow:y.Z})}}]);
//# sourceMappingURL=IndexZones.b6cf2f2d.js.map