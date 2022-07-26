"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[793],{6428:function(){},3121:function(t,e,i){i(6699),i(6428);var l=i(144),s=i(5218),n=i(5598);const o=["sm","md","lg","xl"],r=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),a=(()=>o.reduce(((t,e)=>(t["offset"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(r),offset:Object.keys(a),order:Object.keys(c)};function u(t,e,i){let l=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");l+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(l+=`-${i}`,l.toLowerCase()):l.toLowerCase()}}const p=new Map;e["Z"]=l.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...a,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:l,parent:n}){let o="";for(const s in e)o+=String(e[s]);let r=p.get(o);if(!r){let t;for(t in r=[],d)d[t].forEach((i=>{const l=e[i],s=u(t,i,l);s&&r.push(s)}));const i=r.some((t=>t.startsWith("col-")));r.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),p.set(o,r)}return t(e.tag,(0,s.ZP)(i,{class:r}),l)}})},6643:function(t,e,i){i.d(e,{Z:function(){return o}});i(9941),i(6428);var l=i(144);function s(t){return l.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:l,children:s}){l.staticClass=`${t} ${l.staticClass||""}`.trim();const{attrs:n}=l;if(n){l.attrs={};const t=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(l.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(l.staticClass+=` ${t.join(" ")}`)}return i.id&&(l.domProps=l.domProps||{},l.domProps.id=i.id),e(i.tag,l,s)}})}var n=i(5218),o=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:l}){let s;const{attrs:o}=i;return o&&(i.attrs={},s=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,(0,n.ZP)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),l)}})},4722:function(t,e,i){i(6699),i(6428);var l=i(144),s=i(5218),n=i(5598);const o=["sm","md","lg","xl"],r=["start","end","center"];function a(t,e){return o.reduce(((i,l)=>(i[t+(0,n.jC)(l)]=e(),i)),{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=a("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...r,"space-between","space-around"].includes(t),p=a("justify",(()=>({type:String,default:null,validator:u}))),f=t=>[...r,"space-between","space-around","stretch"].includes(t),m=a("alignContent",(()=>({type:String,default:null,validator:f}))),v={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(m)},h={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){let l=h[t];if(null!=i){if(e){const i=e.replace(t,"");l+=`-${i}`}return l+=`-${i}`,l.toLowerCase()}}const g=new Map;e["Z"]=l.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...p,alignContent:{type:String,default:null,validator:f},...m},render(t,{props:e,data:i,children:l}){let n="";for(const s in e)n+=String(e[s]);let o=g.get(n);if(!o){let t;for(t in o=[],v)v[t].forEach((i=>{const l=e[i],s=y(t,i,l);s&&o.push(s)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),g.set(n,o)}return t(e.tag,(0,s.ZP)(i,{staticClass:"row",class:o}),l)}})},2478:function(t,e,i){i.d(e,{P:function(){return n},h:function(){return s}});var l=i(144);const s=l.Z.observable({collections:{searchQuery:"",year:(new Date).getFullYear(),queryParams:{}},queryParams:{tabs:[],panel:""}}),n={updateCollections(t,e){console.log("updateCollectionsSearchQuery --------\x3e ",e),s.collections[t]=e},updateQueryParams(t,e){console.log("updateQueryParams --------\x3e ",e),s.queryParams[t]=e}}},5684:function(t,e,i){i.r(e),i.d(e,{default:function(){return I}});var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["basic"===t.collectionLayout?i("div",[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"secondary"}},t._l(t.slicedCollection,(function(e,l){return i("v-list-item",{key:l,staticClass:"pa-0",attrs:{href:t.fileLink(t.API+"/press-releases/",e),target:"_blank"}},[i("v-list-item-icon",{staticClass:"mr-1"},[i("v-icon",{attrs:{color:"secondary"}},[t._v("mdi-file-pdf-box")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"secondary--text text-body-1 text-wrap text-decoration-underline",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"mx-auto",attrs:{color:"secondary",href:"/about/public-affairs"}},[t._v("View All")])],1)],1):t._e(),"full"===t.collectionLayout?i("div",[i("CollectionFilterToolbar",{ref:"collectionFilterToolbar",attrs:{collection:t.collection,searchResults:t.filterCollection}}),t._l(t.filterCollection,(function(e,l){return i("v-card",{key:l,staticClass:"ml-1 mr-1 mt-1 mb-4",attrs:{elevation:"1",transition:"fade-transition"}},[i("v-list-item",{staticClass:"pa-2",attrs:{"three-line":""}},[i("v-list-item-avatar",{staticClass:"d-flex flex-column justify-start mr-2",attrs:{tile:"",size:"80"}},[i("div",{staticClass:"secondary--text font-weight-bold text-h1"},[t._v(t._s(t.getDay(e.date,"numeric")))]),i("div",{staticClass:"font-weight-bold text-uppercase"},[t._v(t._s(t.getMonth(e.date,"short")))])]),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-h5 mb-1 text-wrap"},[t._v(" "+t._s(e.title)+" "),"archived"===e.status?i("v-chip",{attrs:{small:"",color:"orange",outlined:""}},[t._v(t._s(e.status))]):t._e()],1),i("v-list-item-subtitle",{staticClass:"mb-2 black--text"},[i("v-icon",[t._v("mdi-calendar-month")]),t._v(" "+t._s(t.getFullDate(e.date))+" ")],1),e.excerpt?i("div",{staticClass:"mb-2 text-body-1",domProps:{innerHTML:t._s(e.excerpt)}}):t._e(),t.fileLink(t.API+"/press-releases/",e)?i("div",[i("a",{attrs:{href:t.fileLink(t.API+"/press-releases/",e),target:"_blank"}},[t._v("View press release document ")]),i("v-icon",{attrs:{color:"secondary"}},[t._v("mdi-file-pdf-box")])],1):t._e()],1)],1)],1)}))],2):t._e()])},s=[],n=(i(6699),i(2478)),o=i(3598);const r=()=>i.e(364).then(i.bind(i,3811));var a={name:"PressReleasesCollection",mixins:[o.DV,o.Gn],data(){return{API:"https://preview-onrr-frontend.app.cloud.gov"}},props:{showToolbar:Boolean},components:{CollectionFilterToolbar:r},computed:{filterCollection(){const t=this.collection&&[...this.collection].sort(((t,e)=>t.date<e.date?1:-1)),e=Number(n.h.collections.year)?this.filterCollectionByYear(this.filterCollectionBySearch(t)):this.filterCollectionBySearch(t);return e&&0!==e.length?e:t}},methods:{filterCollectionBySearch(t){const e=n.h.collections.searchQuery||"",i=""!==e?t.filter((t=>e.toLowerCase().split(" ").every((e=>t.title.toLowerCase().includes(e))))):t;return i},filterCollectionByYear(t){const e=n.h.collections.year,i=t&&t.filter((t=>this.getYear(t.date)===e));return i}}},c=a,d=i(1001),u=i(3453),p=i.n(u),f=i(2774),m=i(9391),v=i(5844),h=i(9639),y=i(1317),g=i(5243),b=i(6796),C=i(1033),x=i(4674),_=i(9565),k=(0,d.Z)(c,l,s,!1,null,"43594e40",null),I=k.exports;p()(k,{VBtn:f.Z,VCard:m.Z,VChip:v.Z,VIcon:h.Z,VList:y.Z,VListItem:g.Z,VListItemAvatar:b.Z,VListItemContent:C.km,VListItemGroup:x.Z,VListItemIcon:_.Z,VListItemSubtitle:C.oZ,VListItemTitle:C.V9})},8836:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["basic"===t.collectionLayout?i("div",[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"secondary"}},t._l(t.filteredCollection,(function(e,l){return i("v-list-item",{key:l,staticClass:"pa-0",attrs:{href:t.fileLink(t.API+"/reporter-letters/",e),target:"_blank"}},[i("v-list-item-icon",{staticClass:"mr-1"},[i("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.fileIcon(e.file.type)))])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"secondary--text text-body-1 text-wrap text-decoration-underline",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"mx-auto",attrs:{color:"secondary",href:t.viewAllLink}},[t._v("View All")])],1)],1):t._e(),"full"===t.collectionLayout?i("div",[i("v-card",[i("v-data-table",{attrs:{headers:t.headers,items:t.collection,"item-key":"title"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6"}},[i("MultipleSelectField",{attrs:{fields:t.topicsInputField}})],1),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("TextField",{attrs:{fields:t.titleInputField}})],1)],1)],1)]},proxy:!0},{key:"header.title",fn:function(e){var l=e.header;return[i("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(l.text))])]}},{key:"header.date",fn:function(e){var l=e.header;return[i("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(l.text))])]}},{key:"header.topics",fn:function(e){var l=e.header;return[i("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(l.text))])]}},{key:"item.title",fn:function(e){var l=e.item;return[i("div",[i("a",{staticClass:"link-item",attrs:{href:t.fileLink(t.API+"/reporter-letters/",l),target:"_blank"}},[t._v(t._s(l.title))]),i("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.fileIcon(l.file.type)))])],1),l.accessible_file?i("div",[i("a",{staticClass:"link-item",attrs:{href:t.accessibleFileLink(t.API+"/reporter-letters/",l),target:"_blank"}},[t._v(t._s(l.accessible_file.title))]),i("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.fileIcon(l.accessible_file.type)))])],1):t._e()]}},{key:"item.date",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.formatNiceDate(i.date))+" ")]}},{key:"item.topics",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.getTopics(i.topics))+" ")]}}],null,!0)})],1)],1):t._e()])},s=[],n=(i(6699),i(3598)),o=i(8930);const r=()=>i.e(486).then(i.bind(i,1622)),a=()=>i.e(707).then(i.bind(i,392));var c={name:"ReporterLettersCollection",mixins:[n.DV,n.Gn],data:()=>({API:"https://preview-onrr-frontend.app.cloud.gov",titleInputField:{label:"Search",text:"",ref:"searchInput",color:"secondary",icon:"mdi-magnify"},topicsInputField:{items:[],label:"All Topics",ref:"topicSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"topic"},filteredByTopicCollection:null}),props:{collection:[Array,Object],collectionName:String,collectionLayout:String,collectionTopics:Array},components:{MultipleSelectField:r,TextField:a},methods:{getTopics(t){let e;return e=t.length>1?t.join(", "):t[0],e},topicList(){let t=[];this.collection.map((e=>{e.topics&&e.topics.length>0?e.topics.map((e=>{t.includes(e)||t.push(e)})):t.includes(e)||t.push(e)})),this.topicsInputField.items=[...t.sort()]},titleFilter(t){return!this.titleInputField.text||t.toLowerCase().includes(this.titleInputField.text.toLowerCase())},topicsFilter(t){return console.log("topcis filter value --------\x3e ",t),!this.topicsInputField.selected||null===this.topicsInputField.selected||0===this.topicsInputField.selected.length||t.some((t=>this.topicsInputField.selected.indexOf(t)>=0))},addParamsToLocation(t){const e={path:this.$route.fullPath,...this.$route.query,query:t};this.$router.push(e).catch((()=>{}))},formattedLabel(t){return(0,o.lx)(t)},fileIcon(t){let e;switch(t){case"application/pdf":case"pdf":e="mdi-file-pdf-box";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":e="mdi-file-word-box";break;case"xls":case"xlsx":case"vnd.openxmlformats-officedocument.spreadsheetml.sheet":e="mdi-file-excel-box";break;case"vnd.openxmlformats-officedocument.presentationml.presentation":e="mdi-file-powerpoint-box";break;case"plain":e="mdi-text-box";break;default:e=void 0;break}return e},filterCollectionByTopic(){return this.collectionTopics.map((t=>this.collection.filter((({topics:e})=>e.includes(t)))))}},computed:{headers(){return[{text:"Reporter Letters",align:"start",sortable:!1,value:"title",filter:this.titleFilter},{text:"Date",align:"start",sortable:!0,value:"date"},{text:"Topics",align:"start",sortable:!1,value:"topics",filter:this.topicsFilter}]},filteredCollection(){const t=this.filteredByTopicCollection?this.filteredByTopicCollection[0].slice(0,5):this.collection&&this.collection.slice(0,5);return t},viewAllLink(){const t=this.filteredByTopicCollection?`/references/reporter-letters?topic=${encodeURIComponent(this.collectionTopics.join(","))}`:"/references/reporter-letters";return t}},created(){setTimeout(function(){this.topicList(),this.filteredByTopicCollection=this.filterCollectionByTopic()}.bind(this),500)},mounted(){const t=this.$route.query.topic&&this.$route.query.topic.split(",");this.topicsInputField.selected=t||null}},d=c,u=i(1001),p=i(3453),f=i.n(p),m=i(2774),v=i(9391),h=i(3121),y=i(6643),g=i(9049),b=i(9639),C=i(1317),x=i(5243),_=i(1033),k=i(4674),I=i(9565),L=i(4722),w=(0,u.Z)(d,l,s,!1,null,"1c79ce60",null),S=w.exports;f()(w,{VBtn:m.Z,VCard:v.Z,VCol:h.Z,VContainer:y.Z,VDataTable:g.Z,VIcon:b.Z,VList:C.Z,VListItem:x.Z,VListItemContent:_.km,VListItemGroup:k.Z,VListItemIcon:I.Z,VListItemTitle:_.V9,VRow:L.Z})}}]);
//# sourceMappingURL=ReporterLettersCollection.02b74093.js.map