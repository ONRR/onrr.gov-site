"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[21],{938:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"sideMenu",staticClass:"side-menu-wrap"},[n("v-list",{staticClass:"pa-0"},[n("v-list-item-group",{attrs:{color:"primary"}},[n("v-list-item",{attrs:{link:"",exact:"",to:""+e.parentUrl}},[e._v(" "+e._s(e.parentTitle+" Home")+" ")]),e._l(e.sideMenuItems,(function(t){return n("div",{key:t.id},e._l(t.menu_children,(function(t){return n("v-list-item",{key:t.id,attrs:{link:"","active-class":"active",to:""+t.pages_id.url}},[e._v(" "+e._s(t.pages_id.title)+" ")])})),1)}))],2)],1)],1)},s=[],r=n(9985),l={name:"SideMenu",data(){return{menus:[],pages:[],parentTitle:null,parentSlug:null}},apollo:{menus:{query:r.id,loadingKey:"loading..."},pages:{query:r.KY,loadingKey:"loading...",result({data:e}){if(e)return e.pages}}},created(){this.getParentSlug(),this.getParentPageTitleBySlug()},methods:{getParentSlug(){const e=this.$route.fullPath;e.indexOf(1),e.toLowerCase();const t=e.split("/")[1];this.parentSlug=t},getParentPageTitleBySlug(){const e=this.pages.find((e=>e.slug===this.parentSlug));this.parentTitle=e.title,this.parentUrl=e.url}},computed:{sideMenuItems(){return this.menus.filter((e=>"main"===e.menu&&e.link_to_page.slug===this.parentSlug))}}},a=l,u=n(1001),o=n(3453),p=n.n(o),d=n(1317),g=n(5243),c=n(4674),m=(0,u.Z)(a,i,s,!1,null,"d85fb180",null),_=m.exports;p()(m,{VList:d.Z,VListItem:g.Z,VListItemGroup:c.Z})}}]);
//# sourceMappingURL=Sidemenu.5d92d1cf.js.map