"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[675],{4765:function(t,e,n){var i=n(6916),s=n(7007),a=n(9670),c=n(4488),r=n(1150),o=n(1340),l=n(8173),u=n(7651);s("search",(function(t,e,n){return[function(e){var n=c(this),s=void 0==e?void 0:l(e,t);return s?i(s,e,n):new RegExp(e)[t](o(n))},function(t){var i=a(this),s=o(t),c=n(e,i,s);if(c.done)return c.value;var l=i.lastIndex;r(l,0)||(i.lastIndex=0);var h=u(i,s);return r(i.lastIndex,l)||(i.lastIndex=l),null===h?-1:h.index}]}))},6643:function(t,e,n){n.d(e,{Z:function(){return c}});n(7327),n(1539),n(7941),n(6755),n(2222),n(9941),n(6428),n(3210),n(9600);var i=n(144);function s(t){return i.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,s=n.data,a=n.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var c=s.attrs;if(c){s.attrs={};var r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(s.staticClass+=" ".concat(r.join(" ")))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,a)}})}var a=n(9312),c=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,s=e.data,c=e.children,r=s.attrs;return r&&(s.attrs={},n=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,(0,a.ZP)(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),c)}})},1378:function(t,e,n){n.r(e),n.d(e,{default:function(){return F}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"mr-1",attrs:{cols:"12",sm:"10"}},[n("v-autocomplete",{attrs:{items:t.contactsSearchField.items,label:t.contactsSearchField.label,color:t.contactsSearchField.color,"append-icon":t.contactsSearchField.icon,"search-input":t.contactsSearchField.search,loading:t.loading,outlined:"",clearable:"","hide-no-data":""},on:{"update:searchInput":function(e){return t.$set(t.contactsSearchField,"search",e)},"update:search-input":function(e){return t.$set(t.contactsSearchField,"search",e)},change:function(e){return t.submitSearch(e,t.contactsSearchField.select||t.contactsSearchField.search)}},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(i)}})],1)]}},{key:"item",fn:function(e){var i=e.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(i)}})],1)]}}]),model:{value:t.contactsSearchField.select,callback:function(e){t.$set(t.contactsSearchField,"select",e)},expression:"contactsSearchField.select"}})],1),n("v-col",{attrs:{cols:"12",sm:"1"}},[n("v-btn",{staticClass:"contacts-search-button",attrs:{large:"",color:"secondary"},on:{click:function(e){return t.submitSearch(e,t.contactsSearchField.select||t.contactsSearchField.search)}}},[n("v-icon",[t._v(" mdi-magnify ")])],1)],1)],1)],1)},s=[],a=n(4254),c=(n(1249),n(4916),n(4765),n(7327),n(1539),{name:"ContactsSearch",data:function(){return{contactsSearchField:{items:[],select:null,search:null,label:"Search by operator or payor company, contact name, or category",ref:"contactsSearchInput",color:"secondary",icon:"mdi-chevron-down"},loading:!1}},props:{blockItems:[Object,Array]},computed:{searchItems:function(){var t=[];return this.blockItems&&this.blockItems.contacts.map((function(e){null!==e&&void 0!==e&&e.header&&t.push(e.header),null!==e&&void 0!==e&&e.company_name&&t.push(e.company_name),null!==e&&void 0!==e&&e.operator_number&&t.push(e.operator_number),null!==e&&void 0!==e&&e.agency&&t.push(e.agency),null!==e&&void 0!==e&&e.page&&t.push(e.page),null!==e&&void 0!==e&&e.primary_contact&&t.push(e.primary_contact),null!==e&&void 0!==e&&e.contact_2&&t.push(e.contact_2),null!==e&&void 0!==e&&e.contact_3&&t.push(e.contact_3),null!==e&&void 0!==e&&e.contact_4&&t.push(e.contact_4),null!==e&&void 0!==e&&e.contact_5&&t.push(e.contact_5),null!==e&&void 0!==e&&e.contact_6&&t.push(e.contact_6)})),t}},watch:{"contactsSearchField.search":function(t){t&&t!==this.contactsSearchField.select&&this.querySelections(t)},searchItems:{deep:!0,handler:function(t){this.contactsSearchField.search=t[0],this.contactsSearchField.items=t}}},methods:{querySelections:function(t){var e=this;this.loading=!0,setTimeout((function(){e.contactsSearchField.items=e.searchItems.filter((function(e){return(e||"").toLowerCase().indexOf((t||"").toLowerCase())>-1})),e.loading=!1}),500)},submitSearch:function(t,e){console.log("submit search yo -------\x3e ",t,e);var n=(0,a.Z)((0,a.Z)({path:"/about/contact/search-results"},this.$route.query),{},{query:{q:encodeURIComponent(e)||void 0}});this.$router.push(n).catch((function(){}))}}}),r=c,o=n(1001),l=n(3453),u=n.n(l),h=(n(3210),n(9826),n(4553),n(6699),n(2023),n(6364)),d=n(4690),p=n(9312),m=n(5598),f=(0,a.Z)((0,a.Z)({},h.l),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),v=h.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:h.Z.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return(0,a.Z)((0,a.Z)({},h.Z.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=(0,m.qF)(e,t.itemText),i=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=h.Z.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),(0,a.Z)((0,a.Z)({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=h.Z.options.computed.listData.call(this);return t.props=(0,a.Z)((0,a.Z)({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var i=e[this.$refs.menu.listIndex];i?this.setMenuIndex(t.findIndex((function(t){return t===i}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===m.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===m.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==m.Do.backspace&&t!==m.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=this.selectedItems.length,s=t!==i-1?t:t-1,a=this.selectedItems[s];a?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,h.Z.options.methods.clearableCallback.call(this)},genInput:function(){var t=d.Z.options.methods.genInput.call(this);return t.data=(0,p.ZP)(t.data,{attrs:{"aria-activedescendant":(0,m.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,m.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=h.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?h.Z.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[m.Do.home,m.Do.end].includes(e)||h.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){h.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){h.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){h.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],s=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",s),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),t.preventDefault()}}}}),I=n(2774),S=n(3121),g=n(6643),y=n(9639),x=n(1033),b=n(4722),C=(0,o.Z)(r,i,s,!1,null,"d5117d56",null),F=C.exports;u()(C,{VAutocomplete:v,VBtn:I.Z,VCol:S.Z,VContainer:g.Z,VIcon:y.Z,VListItemContent:x.km,VListItemTitle:x.V9,VRow:b.Z})}}]);
//# sourceMappingURL=ContactsSearch-legacy.72c60c76.js.map