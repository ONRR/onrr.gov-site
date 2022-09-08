"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[266],{4976:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"pa-1",attrs:{id:"foo-bar"}},[t("v-expansion-panels",{attrs:{accordion:"",value:e.openedPanel}},e._l(e.blockItems,(function(n,s){return t("v-expansion-panel",{key:s,staticClass:"mb-4",attrs:{"disable-icon-rotate":""},on:{click:function(t){e.addParamsToLocation({panel:e.formattedLabel(n.item.block_label)})}}},[t("v-expansion-panel-header",{ref:e.formattedLabel(n.item.block_label),refInFor:!0,attrs:{color:"expansionPanel"},scopedSlots:e._u([{key:"actions",fn:function(){return[t("v-icon",{staticClass:"v-icon-plus",attrs:{color:"secondary"}},[e._v(" mdi-plus-box ")]),t("v-icon",{staticClass:"v-icon-minus",attrs:{color:"secondary"}},[e._v(" mdi-minus-box ")])]},proxy:!0}],null,!0)},[e._v(" "+e._s(n.item.block_label)+" ")]),t("v-expansion-panel-content",{staticClass:"pt-4"},[t("LayoutBlock",{attrs:{layoutBlocks:n.panelBlocks}})],1)],1)})),1)],1)},a=[],i=t(8930),o=t(3598);const l=()=>t.e(496).then(t.bind(t,1058));var r={mixins:[o.jH,o.hN],name:"ExpansionPanelBlock",data(){return{panels:[],panelQueryParamExists:!1}},props:{block:[Array,Object]},components:{LayoutBlock:l},methods:{getAllIndexes(e,n){const t=[];let s=-1;while(-1!=(s=e.indexOf(n,s+1)))t.push(s);return t},addParamsToLocation(e){setTimeout((()=>{const n={path:this.$route.fullPath,...this.$route.query,query:e};this.$router.push(n).catch((()=>{}))}),0)},formattedLabel(e){return(0,i.lx)(e)},formattedLabelsArr(){const e=this.panels;return e.map((e=>this.formattedLabel(e.item.block_label)))}},computed:{blockItems(){const e=this.block.item.expansion_panel_blocks,n=[];return e&&e.forEach((e=>{null!==e.item&&(e&&"expansion_panel_block_label"===e.item.__typename?(this.panels.push(e),n.push({...e,panelBlocks:[]})):n[n.length-1].panelBlocks.push(e))})),n},openedPanel(){const e=this.block.item.open_by_default?.id;let n,t=this.formattedLabelsArr();return this.$route.query.panel?n=t.findIndex((e=>e===this.$route.query.panel)):e&&(n=this.panels.findIndex((n=>n.item.id===e))),n}},created(){}},p=r,c=t(1001),d=t(3453),h=t.n(d),u=t(2543),v=t(9737),x=t(5598),m=t(3553),b=(0,m.Z)((0,u.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,v.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,x.z9)(this))}}),f=t(51),k=t(2083),y=t(5505);const _=(0,m.Z)(k.Z,y.Z,(0,v.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var g=_.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,n){e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((()=>this.isActive=e))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(f.Fx,this.showLazyContent((()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,x.z9)(this))])])))}}),P=t(3286),A=t(7551);const B=(0,m.Z)(y.Z,(0,v.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var C=B.extend().extend({name:"v-expansion-panel-header",directives:{ripple:A.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=(0,x.z9)(this,"actions")||[this.$createElement(P.Z,this.expandIcon)];return this.$createElement(f.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,x.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),I=t(5143),$=t(5223),w=I.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...I.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,$.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,$.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,n){const t=this.getValue(e,n),s=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(s)}}}),E=t(9639),L=(0,c.Z)(p,s,a,!1,null,"f86ba1a4",null),Z=L.exports;h()(L,{VExpansionPanel:b,VExpansionPanelContent:g,VExpansionPanelHeader:C,VExpansionPanels:w,VIcon:E.Z})}}]);
//# sourceMappingURL=ExpansionPanelBlock.fd2f0e32.js.map