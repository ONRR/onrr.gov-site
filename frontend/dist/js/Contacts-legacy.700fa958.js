"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[315],{9391:function(t,e,i){i.d(e,{Z:function(){return l}});var a=i(4254),n=(i(9653),i(4944),i(3792),i(2238)),r=i(2413),o=i(8084),s=i(3553),l=(0,s.Z)(r.Z,o.Z,n.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return(0,a.Z)((0,a.Z)({"v-card":!0},o.Z.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.Z.options.computed.classes.call(this))},styles:function(){var t=(0,a.Z)({},n.Z.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},306:function(t,e,i){i.d(e,{EB:function(){return l},Qq:function(){return o},ZB:function(){return s}});var a=i(9391),n=i(5598),r=(0,n.Ji)("v-card__actions"),o=(0,n.Ji)("v-card__subtitle"),s=(0,n.Ji)("v-card__text"),l=(0,n.Ji)("v-card__title");a.Z},6643:function(t,e,i){i.d(e,{Z:function(){return o}});i(7327),i(1539),i(7941),i(6755),i(2222),i(9941),i(6428),i(3210),i(9600);var a=i(144);function n(t){return a.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var a=i.props,n=i.data,r=i.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(n.staticClass+=" ".concat(s.join(" ")))}return a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),e(a.tag,n,r)}})}var r=i(9312),o=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,a=e.props,n=e.data,o=e.children,s=n.attrs;return s&&(n.attrs={},i=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),t(a.tag,(0,r.ZP)(n,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),o)}})},5310:function(t,e,i){i.r(e),i.d(e,{default:function(){return w}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",{staticClass:"pa-0 mt-10"},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6"}},[i("TextField",{attrs:{fields:t.searchInputField}})],1)],1),t.searchResults?i("v-row",[i("v-col",{attrs:{cols:"12",sm:"4"}},[i("SelectField",{attrs:{fields:t.categoriesSelectField}})],1),t.tabCategoriesSelectField.items.length>1?i("v-col",{attrs:{cols:"12",sm:"4"}},[i("SelectField",{attrs:{fields:t.tabCategoriesSelectField}})],1):t._e(),t.accordionCategoriesSelectField.items.length>1?i("v-col",{attrs:{cols:"12",sm:"4"}},[i("SelectField",{attrs:{fields:t.accordionCategoriesSelectField}})],1):t._e()],1):t._e(),i("v-row",[i("v-col",[i("div",{staticClass:"text-left mt-4"},[t._v(" Displaying "+t._s(t.visibleItems.length)+" of "+t._s(t.filteredCollectionItems.length)+" contacts ")])]),i("v-col",[i("div",{staticClass:"text-right mb-4"},[i("v-pagination",{attrs:{color:"secondary",length:Math.ceil(t.filteredCollectionItems.length/t.perPage)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])],1)],1),t.visibleItems.length>0?i("div",[i("v-fade-transition",{attrs:{group:"","hide-on-leave":"","leave-absolute":"",origin:"top left"}},t._l(t.visibleItems,(function(e,a){return i("div",{key:a,staticClass:"mb-5"},[i("h2",{staticClass:"collection-category pa-3 mb-3"},[t.searchResults?t._e():i("span",[t._v(" "+t._s(e.header)+" "),null!==e.agency?i("span",[t._v("("+t._s(e.agency)+")")]):t._e(),null!==e.operatorNumber?i("span",[t._v("(Operator #: "+t._s(e.operatorNumber)+")")]):t._e()]),t.searchResults?i("span",[t._v(" "+t._s(e.page)+" "+t._s(e.tab&&"> "+e.tab)+" "+t._s(e.accordion&&"> "+e.accordion)+" "+t._s(e.header&&"> "+e.header)+" "),null!==e.agency?i("span",[t._v("("+t._s(e.agency)+")")]):t._e(),null!==e.operatorNumber?i("span",[t._v("(Operator #: "+t._s(e.operatorNumber)+")")]):t._e()]):t._e()]),i("v-container",{staticClass:"pa-0"},[i("v-row",t._l(e.contacts,(function(e,a){return i("v-col",{key:a,attrs:{cols:"12",sm:"4"}},[e.contact?i("v-card",{staticClass:"text-wrap contact-card",attrs:{elevation:"1"}},[i("v-card-title",{class:[t.formatToSlug(e.role).toLowerCase(),"contact-title"]},[t._v(t._s(e.role))]),i("v-card-text",{staticClass:"pa-4"},[e.contact?i("div",{staticClass:"contact contact-row"},[t._v(t._s(e.contact))]):t._e(),e.email?i("div",{staticClass:"contact-row"},[i("v-icon",{staticClass:"mr-1",attrs:{color:"secondary"}},[t._v("mdi-email")]),i("a",{attrs:{href:"mailto:"+e.email}},[t._v(t._s(e.email))])],1):t._e(),e.phone?i("div",{staticClass:"contact-row"},[i("v-icon",{staticClass:"mr-1",attrs:{color:"secondary"}},[t._v("mdi-phone")]),i("a",{attrs:{href:"tel:"+e.phone}},[t._v(t._s(e.phone))])],1):t._e(),e.fax?i("div",{staticClass:"contact-row"},[i("v-icon",{staticClass:"mr-1",attrs:{color:"secondary"}},[t._v("mdi-fax")]),i("a",{attrs:{href:"tel:"+e.fax}},[t._v(t._s(e.fax))])],1):t._e()])],1):t._e()],1)})),1)],1)],1)})),0)],1):i("div",[t._v("No contacts found.")]),i("v-container",{staticClass:"pa-0"},[i("v-row",[i("v-col",[i("div",{staticClass:"text-left mt-4"},[t._v(" Displaying "+t._s(t.visibleItems.length)+" of "+t._s(t.filteredCollectionItems.length)+" contacts ")])]),i("v-col",[i("div",{staticClass:"text-right mb-4"},[i("v-pagination",{attrs:{color:"secondary",length:Math.ceil(t.filteredCollectionItems.length/t.perPage)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])],1)],1)],1)},n=[],r=i(4254),o=(i(1539),i(8783),i(3948),i(7327),i(4916),i(3123),i(6699),i(2023),i(1249),i(7042),i(8930)),s=function(){return i.e(707).then(i.bind(i,392))},l=function(){return Promise.all([i.e(860),i.e(248)]).then(i.bind(i,9571))},c={name:"ContactsCollection",data:function(){return{page:1,perPage:5,searchInputField:{label:"Search contacts",text:null,ref:"searchContactsInput",color:"secondary",icon:"mdi-magnify"},categoriesSelectField:{items:[],label:"All Categories",ref:"categoriesSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"category",clearable:!0},tabCategoriesSelectField:{items:[],label:"All Subcategories",ref:"tabCateegoriesSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"topic",clearable:!0},accordionCategoriesSelectField:{items:[],label:"All Subcategories",ref:"accordionCateegoriesSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"subtopic",clearable:!0},filterBy:this.filter,searchResults:!1,contactsByCompanyPage:!1,filteredResults:null,contactsCollection:null}},props:{collection:[Object,Array],collectionName:String,collectionLayout:String,collectionPage:String,collectionTab:String,collectionAccordion:String,showToolbar:Boolean,filter:String},components:{TextField:s,SelectField:l},methods:{formatToSlug:o.lx,groupBy:o.vM,resetPagination:function(){return this.page=1},findSearchValue:function(t){if(null!==t&&void 0!==this.searchInputField.text&&null!==this.searchInputField.text)return this.searchInputField.text.toLowerCase().split(" ").every((function(e){return t&&t.toLowerCase().includes(e)}))},filterProperties:function(t){var e=this,i=t.filter((function(t){var i=t.page,a=t.tab,n=t.accordion,r=t.letter,o=t.header,s=t.operatorNumber,l=t.companyName,c=t.agency;return e.findSearchValue(r)||e.findSearchValue(o)||e.findSearchValue(s)||e.findSearchValue(l)||e.findSearchValue(c)||e.findSearchValue(i)||e.findSearchValue(a)||e.findSearchValue(n)}));return i||t},filterContacts:function(t){var e=this,i=t.map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{contacts:t.contacts.filter((function(t){if(null!==t.contact)return e.findSearchValue(t.contact)||e.findSearchValue(t.email)||e.findSearchValue(t.role)}))})})).filter((function(t){return t.contacts.length>0}));return i},filterByCategory:function(t){var e,i=this;return null!==this.categoriesSelectField.selected&&(e=t.filter((function(t){return t.page===i.categoriesSelectField.selected}))),e||t},createContactItem:function(t){var e={};return e.__typename=t.__typename,e.id=t.id,e.status=t.status,e.page=t.page,e.tab=t.tab,e.accordion=t.accordion,e.company=t.company_yn,e.letter=t.letter,e.header=t.header,e.companyName=t.company_name,e.operatorNumber=t.operator_number,e.agency=t.agency,e.contacts=[{contact:t.primary_contact,role:t.primary_role,email:t.email,phone:t.phone,fax:t.fax},{contact:t.contact_2,role:t.role_2,email:t.email_2,phone:t.phone_2},{contact:t.contact_3,role:t.role_3,email:t.email_3,phone:t.phone_3},{contact:t.contact_4,role:t.role_4,email:t.email_4,phone:t.phone_4},{contact:t.contact_5,role:t.role_5,email:t.email_5,phone:t.phone_5},{contact:t.contact_6,role:t.role_6,email:t.email_6,phone:t.phone_6}],e},filterByPage:function(t){var e=this.collectionPage||this.categoriesSelectField.selected,i=null!==e?t.filter((function(t){return t.page===e})):t;return i},filterByTab:function(t){var e=this.collectionTab||this.tabCategoriesSelectField.selected,i=null!==e?t.filter((function(t){return t.tab===e})):t;return i},filterByAccordion:function(t){var e=this.collectionAccordion||this.accordionCategoriesSelectField.selected,i=null!==e?t.filter((function(t){return t.accordion===e})):t;return i},categoryItems:function(){var t=[];this.collection&&this.collection.map((function(e){t.includes(e.page)||t.push(e.page)})),this.categoriesSelectField.items=t}},computed:{formattedContactsCollection:function(){var t=this,e=[];return this.collection&&this.collection.map((function(i){var a=t.createContactItem(i);e.push(a)})),e},visibleItems:function(){return this.filteredCollectionItems.slice((this.page-1)*this.perPage,this.page*this.perPage)},filteredCollectionItems:function(){this.resetPagination();var t=this.collectionPage||this.searchResults?this.filterByPage(this.filterByTab(this.filterByAccordion(this.formattedContactsCollection))):this.filterProperties(this.formattedContactsCollection);if(null===this.categoriesSelectField.selected&&null===this.searchInputField.text)return this.formattedContactsCollection;if(console.log("filteredList yo ------\x3e ",t),this.searchInputField.text){var e=this.filterProperties(t);return 0===e.length?this.filterContacts(t):this.filterProperties(t)}return t||this.formattedContactsCollection}},watch:{"searchInputField.text":function(){return this.categoryItems()},"categoriesSelectField.selected":function(t){var e=[];this.collection&&this.collection.map((function(i){i.page===t&&(e.includes(i.tab)||e.push(i.tab))})),this.tabCategoriesSelectField.items=e},"tabCategoriesSelectField.selected":function(t){var e=[];this.collection&&this.collection.map((function(i){i.tab===t&&(e.includes(i.accordion)||e.push(i.accordion))})),this.accordionCategoriesSelectField.items=e}},created:function(){var t=this;setTimeout((function(){t.categoryItems()}),250);var e="search-results"===this.$route.params.slug2,i="company-contacts"===this.$route.params.slug2;e&&(this.searchResults=!0),i&&(this.contactsByCompanyPage=!0)},mounted:function(){var t=this;setTimeout((function(){t.categoriesSelectField.selected=t.$route.query.category?decodeURI(t.$route.query.category):null,t.tabCategoriesSelectField.selected=t.$route.query.topic?decodeURI(t.$route.query.topic):null,t.accordionCategoriesSelectField.selected=t.$route.query.subtopic?decodeURI(t.$route.query.subtopic):null,t.searchInputField.text=t.$route.query.q?decodeURI(t.$route.query.q):""}),250)}},u=c,d=i(1001),h=i(3453),p=i.n(h),f=i(9391),g=i(306),v=i(3121),m=i(6643),_=i(51),b=i(9639),y=i(7174),C=(i(9653),i(2222),i(9714),i(3286)),S=i(2139),x=i(5505),I=i(8250),Z=i(171),F=i(3553),$=(0,F.Z)(x.Z,(0,I.Z)({onVisible:["init"]}),Z.Z).extend({name:"v-pagination",directives:{Resize:S.Z},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return(0,r.Z)({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,a=Math.floor(e/2),n=this.length-a+1+i;if(this.value>a&&this.value<n){var r=1,o=this.length,s=this.value-a+2,l=this.value+a-2-i,c=s-1===r+1?2:"...",u=l+1===o-1?l+1:"...";return[1,c].concat((0,y.Z)(this.range(s,l)),[u,this.length])}if(this.value===a){var d=this.value+a-1-i;return[].concat((0,y.Z)(this.range(1,d)),["...",this.length])}if(this.value===n){var h=this.value-a+1;return[1,"..."].concat((0,y.Z)(this.range(h,this.length)))}return[].concat((0,y.Z)(this.range(1,a)),["..."],(0,y.Z)(this.range(n,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var a=t;a<=e;a++)i.push(a);return i},genIcon:function(t,e,i,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":n},on:i?{}:{click:a}},[t(C.Z,[e])])])},genItem:function(t,e){var i=this,a=e===this.value&&(this.color||"primary"),n=e===this.value,r=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(r,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,a){return t("li",{key:a},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),P=i(4722),B=(0,d.Z)(u,a,n,!1,null,"6ea0f5b6",null),w=B.exports;p()(B,{VCard:f.Z,VCardText:g.ZB,VCardTitle:g.EB,VCol:v.Z,VContainer:m.Z,VFadeTransition:_.Z5,VIcon:b.Z,VPagination:$,VRow:P.Z})}}]);
//# sourceMappingURL=Contacts-legacy.700fa958.js.map