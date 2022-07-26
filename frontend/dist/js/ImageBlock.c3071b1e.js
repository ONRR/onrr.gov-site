"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[441],{6428:function(){},4722:function(t,e,a){a(6699),a(6428);var n=a(144),l=a(5218),i=a(5598);const r=["sm","md","lg","xl"],s=["start","end","center"];function o(t,e){return r.reduce(((a,n)=>(a[t+(0,i.jC)(n)]=e(),a)),{})}const c=t=>[...s,"baseline","stretch"].includes(t),u=o("align",(()=>({type:String,default:null,validator:c}))),d=t=>[...s,"space-between","space-around"].includes(t),g=o("justify",(()=>({type:String,default:null,validator:d}))),f=t=>[...s,"space-between","space-around","stretch"].includes(t),h=o("alignContent",(()=>({type:String,default:null,validator:f}))),p={align:Object.keys(u),justify:Object.keys(g),alignContent:Object.keys(h)},b={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,a){let n=b[t];if(null!=a){if(e){const a=e.replace(t,"");n+=`-${a}`}return n+=`-${a}`,n.toLowerCase()}}const y=new Map;e["Z"]=n.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...g,alignContent:{type:String,default:null,validator:f},...h},render(t,{props:e,data:a,children:n}){let i="";for(const l in e)i+=String(e[l]);let r=y.get(i);if(!r){let t;for(t in r=[],p)p[t].forEach((a=>{const n=e[a],l=k(t,a,n);l&&r.push(l)}));r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(i,r)}return t(e.tag,(0,l.ZP)(a,{staticClass:"row",class:r}),n)}})},2020:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.alignmentClasses},[a("figure",{staticClass:"figure-block"},[a("v-img",{class:["img-block",t.classObj],attrs:{src:t.fileSrc,"lazy-src":t.lazyImg,alt:t.altTag,width:t.width,height:t.height,"max-height":"100%","max-width":"100%",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),t.block.data.caption?a("figcaption",{class:["font-italic",t.alignmentClasses]},[t._v(t._s(t.block.data.caption))]):t._e()],1)])},l=[],i={name:"ImageBlock",data:()=>({}),props:{block:{type:Object}},computed:{fileSrc(){return`https://dev-onrr-frontend.app.cloud.gov${this.block.data.file.url}`},lazyImg(){return`https://dev-onrr-frontend.app.cloud.gov${this.block.data.file.url}?fit=cover`},width(){const t=parseInt(this.block.data.imgWidth)===parseInt(this.block.data.file.width)||this.block.data.stretched?"100%":this.block.data.imgWidth;return t},height(){const t=parseInt(this.block.data.imgWidth)===parseInt(this.block.data.file.width)||this.block.data.stretched?"auto":this.block.data.imgHeight;return t},altTag(){return this.block.data.altTag||"Office of Natural Resource and Revenue Image"},classObj(){let t="";return this.block.data.withBorder&&(t+=" img--border"),this.block.data.withBackground&&(t+=" img--background"),t},alignmentClasses(){let t="";switch(this.block?.tunes?.alignmentTune?.alignment){case"left":t="d-flex justify-start";break;case"center":t="d-flex justify-center";break;case"right":t="d-flex justify-end";break;default:t="d-flex flex-start";break}return t}}},r=i,s=a(1001),o=a(3453),c=a.n(o),u=a(9253),d=a(4955),g=a(4722),f=(0,s.Z)(r,n,l,!1,null,"231ab944",null),h=f.exports;c()(f,{VImg:u.Z,VProgressCircular:d.Z,VRow:g.Z})}}]);
//# sourceMappingURL=ImageBlock.c3071b1e.js.map