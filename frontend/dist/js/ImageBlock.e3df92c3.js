(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ImageBlock"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),i=n("5530"),r=(n("d3b7"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,a){return n[t+Object(s["E"])(a)]=e(),n}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},h=l("justify",(function(){return{type:String,default:null,validator:v}})),g=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},p=l("alignContent",(function(){return{type:String,default:null,validator:g}})),b={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(p)},k={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var a=k[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var m=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},h),{},{alignContent:{type:String,default:null,validator:g}},p),render:function(t,e){var n=e.props,i=e.data,r=e.children,s="";for(var c in n)s+=String(n[c]);var u=m.get(s);return u||function(){var t,e;for(e in u=[],b)b[e].forEach((function(t){var a=n[t],i=y(e,t,a);i&&u.push(i)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),m.set(s,u)}(),t(n.tag,Object(o["a"])(i,{staticClass:"row",class:u}),r)}})},"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),i=n("6566");a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var a=n("9bf2").f,i=n("7c73"),r=n("e2cc"),o=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,v=n("69f3"),h=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,a){s(t,v),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=a&&c(a,t[u],{that:t,AS_ENTRIES:n})})),v=l.prototype,p=g(e),b=function(t,e,n){var a,i,r=p(t),o=k(t,e);return o?o.value=n:(r.last=o={index:i=f(e,!0),key:e,value:n,previous:a=r.last,next:void 0,removed:!1},r.first||(r.first=o),a&&(a.next=o),d?r.size++:t.size++,"F"!==i&&(r.index[i]=o)),t},k=function(t,e){var n,a=p(t),i=f(e);if("F"!==i)return a.index[i];for(n=a.first;n;n=n.next)if(n.key==e)return n};return r(v,{clear:function(){var t=this,e=p(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),a=k(e,t);if(a){var i=a.next,r=a.previous;delete n.index[a.index],a.removed=!0,r&&(r.next=i),i&&(i.previous=r),n.first==a&&(n.first=i),n.last==a&&(n.last=r),d?n.size--:e.size--}return!!a},forEach:function(t){var e,n=p(this),a=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!k(this,t)}}),r(v,n?{get:function(t){var e=k(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),d&&a(v,"size",{get:function(){return p(this).size}}),l},setStrong:function(t,e,n){var a=e+" Iterator",i=g(e),r=g(a);u(t,e,(function(t,e){h(this,{type:a,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),i=n("da84"),r=n("e330"),o=n("94ca"),s=n("6eeb"),c=n("f183"),u=n("2266"),l=n("19aa"),d=n("1626"),f=n("861d"),v=n("d039"),h=n("1c7e"),g=n("d44e"),p=n("7156");t.exports=function(t,e,n){var b=-1!==t.indexOf("Map"),k=-1!==t.indexOf("Weak"),y=b?"set":"add",m=i[t],w=m&&m.prototype,x=m,j={},O=function(t){var e=r(w[t]);s(w,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(k&&!f(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return k&&!f(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(k&&!f(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},S=o(t,!d(m)||!(k||w.forEach&&!v((function(){(new m).entries().next()}))));if(S)x=n.getConstructor(e,t,b,y),c.enable();else if(o(t,!0)){var C=new x,z=C[y](k?{}:-0,1)!=C,I=v((function(){C.has(1)})),E=h((function(t){new m(t)})),_=!k&&v((function(){var t=new m,e=5;while(e--)t[y](e,e);return!t.has(-0)}));E||(x=e((function(t,e){l(t,w);var n=p(new m,t,x);return void 0!=e&&u(e,n[y],{that:n,AS_ENTRIES:b}),n})),x.prototype=w,w.constructor=x),(I||_)&&(O("delete"),O("has"),b&&O("get")),(_||z)&&O(y),k&&w.clear&&delete w.clear}return j[t]=x,a({global:!0,forced:x!=m},j),g(x,t),k||n.setStrong(x,t,b),x}},a0db:function(t,e,n){},c7d7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.alignmentClasses},[n("figure",{staticClass:"figure-block"},[n("v-img",{class:["img-block",t.classObj],attrs:{src:t.fileSrc,"lazy-src":t.lazyImg,alt:t.altTag,width:t.width,height:t.height,"max-height":"100%","max-width":"100%",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),t.block.data.caption?n("figcaption",{class:["font-italic",t.alignmentClasses]},[t._v(t._s(t.block.data.caption))]):t._e()],1)])},i=[],r=(n("99af"),{name:"ImageBlock",data:function(){return{}},props:{block:{type:Object}},computed:{fileSrc:function(){return"".concat("https://dev-onrr-cms.app.cloud.gov").concat(this.block.data.file.url)},lazyImg:function(){return"".concat("https://dev-onrr-cms.app.cloud.gov").concat(this.block.data.file.url,"?fit=cover")},width:function(){var t=parseInt(this.block.data.imgWidth)===parseInt(this.block.data.file.width)||this.block.data.stretched?"100%":this.block.data.imgWidth;return t},height:function(){var t=parseInt(this.block.data.imgWidth)===parseInt(this.block.data.file.width)||this.block.data.stretched?"auto":this.block.data.imgHeight;return t},altTag:function(){return this.block.data.altTag||"Office of Natural Resource and Revenue Image"},classObj:function(){var t="";return this.block.data.withBorder&&(t+=" img--border"),this.block.data.withBackground&&(t+=" img--background"),t},alignmentClasses:function(){var t,e,n,a="";switch(null===(t=this.block)||void 0===t||null===(e=t.tunes)||void 0===e||null===(n=e.alignmentTune)||void 0===n?void 0:n.alignment){case"left":a="d-flex justify-start";break;case"center":a="d-flex justify-center";break;case"right":a="d-flex justify-end";break;default:a="d-flex flex-start";break}return a}}}),o=r,s=(n("dbf0"),n("2877")),c=n("6544"),u=n.n(c),l=n("adda"),d=n("490a"),f=n("0fd9"),v=Object(s["a"])(o,a,i,!1,null,"231ab944",null);e["default"]=v.exports;u()(v,{VImg:l["a"],VProgressCircular:d["a"],VRow:f["a"]})},dbf0:function(t,e,n){"use strict";n("a0db")}}]);
//# sourceMappingURL=ImageBlock.e3df92c3.js.map