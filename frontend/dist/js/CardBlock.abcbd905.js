"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[674],{9391:function(t,e,r){r.d(e,{Z:function(){return n}});var s=r(2238),c=r(2413),o=r(8084),a=r(3553),n=(0,a.Z)(c.Z,o.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...o.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.Z.options.computed.classes.call(this)}},styles(){const t={...s.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=c.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},306:function(t,e,r){r.d(e,{EB:function(){return l},Qq:function(){return a},ZB:function(){return n}});var s=r(9391),c=r(5598);const o=(0,c.Ji)("v-card__actions"),a=(0,c.Ji)("v-card__subtitle"),n=(0,c.Ji)("v-card__text"),l=(0,c.Ji)("v-card__title");s.Z},8521:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"card v-card__item card-block",class:t.blockColor},[t.cardTitle?r("v-card-title",{staticClass:"text-h5 black--text"},[t._v(" "+t._s(t.cardTitle)+" ")]):t._e(),t.cardSubtitle?r("v-card-subtitle",{staticClass:"v-card__subtitle black--text"},[t._v(" "+t._s(t.cardSubtitle)+" ")]):t._e(),r("v-card-text",{staticClass:"text--primary body-1"},[0===t.blockItems.length?r("div",t._l(t.block.item.block_content.blocks,(function(t){return r("div",{key:t.id},[r("EditorBlock",{attrs:{blockContent:t}})],1)})),0):t._e(),t.blockItems.length>1?r("LayoutBlock",{attrs:{layoutBlocks:t.blockItems}}):t._e()],1)],1)},c=[],o=r(3598);const a=()=>r.e(496).then(r.bind(r,1058));var n={mixins:[o.hN,o.jH],name:"CardBlock",data(){return{data:{}}},props:{cardTitle:{type:String},cardSubtitle:{type:String},cardContent:{type:[String,Array]},block:[Array,Object]},components:{LayoutBlock:a},mounted(){},computed:{blocks(){const t=this.block.block_content.blocks;return t},blockColor(){return this.block.item.block_color},blockItems(){const t=[...this.block.item.card_content_blocks.filter((t=>null!==t.item))];return t}}},l=n,i=r(1001),d=r(3453),u=r.n(d),b=r(9391),k=r(306),h=(0,i.Z)(l,s,c,!1,null,"4cc910bf",null),_=h.exports;u()(h,{VCard:b.Z,VCardSubtitle:k.Qq,VCardText:k.ZB,VCardTitle:k.EB})}}]);
//# sourceMappingURL=CardBlock.abcbd905.js.map