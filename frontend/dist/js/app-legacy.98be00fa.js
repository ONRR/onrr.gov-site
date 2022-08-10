(function(){"use strict";var n={9985:function(n,e,t){t.d(e,{qH:function(){return tn},Qs:function(){return cn},OI:function(){return yn},Ig:function(){return Cn},xT:function(){return ln},yk:function(){return _n},jI:function(){return fn},M4:function(){return pn},if:function(){return gn},q9:function(){return bn},id:function(){return en},tv:function(){return un},sI:function(){return an},KY:function(){return on},$S:function(){return rn},eg:function(){return In},dw:function(){return dn},um:function(){return vn},KT:function(){return An},Yn:function(){return kn},Nm:function(){return mn},NH:function(){return hn},cR:function(){return sn}});var o,r,a,i,l,s,c,u,d,A,m,f,_,p,g,b,h,v,k,y,C,I,Z,w,B,P,F,E,x,S,T,q,O,L,N,V,Q,R,H,M=t(7909),j=t(9989),U=(0,j.ZP)(o||(o=(0,M.Z)(["\n  fragment contentBlocks on content_blocks {\n    content\n  }\n"]))),G=(0,j.ZP)(r||(r=(0,M.Z)(["\n  fragment contentBlockFields on content_blocks {\n    id\n    block_label\n    block_v_col\n    block_content\n    equal_col_height\n  }\n"]))),K=(0,j.ZP)(a||(a=(0,M.Z)(["\n  fragment layoutColumnBlockFields on layout_column_blocks {\n    id\n    layoutCol: block_v_col\n  }\n"]))),z=(0,j.ZP)(i||(i=(0,M.Z)(["\n  fragment cardBlockFields on card_blocks {\n    id\n    block_color\n    block_label\n    block_v_col\n    block_icon\n    block_content\n    equal_col_height\n    card_content_blocks {\n      id\n      item {\n        ...contentBlockFields\n      }\n    }\n  }\n"]))),X=(0,j.ZP)(l||(l=(0,M.Z)(["\n  fragment tabBlockLabelFields on tab_block_label {\n    id\n    tab_block_label\n  }\n"]))),D=((0,j.ZP)(s||(s=(0,M.Z)(["\n  fragment sectionHeadingBlocks on section_heading_blocks {\n    section_heading\n    section_heading_type\n  }\n"]))),(0,j.ZP)(c||(c=(0,M.Z)(["\n  fragment expansionPanelBlockLabel on expansion_panel_block_label {\n    id\n    block_label\n  }\n"])))),W=(0,j.ZP)(u||(u=(0,M.Z)(["\n  ","\n  ","\n  ","\n  fragment expansionPanelBlockFields on expansion_panels {\n    id\n    block_label\n    open_by_default {\n      id\n    }\n    expansion_panel_blocks {\n      id\n      item {\n        __typename\n        ...expansionPanelBlockLabel\n        ...contentBlockFields\n        ...cardBlockFields\n      }\n    }\n  }\n"])),D,G,z),Y=(0,j.ZP)(d||(d=(0,M.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  fragment nestedNestedTabBlockFields on tab_blocks {\n    id\n    tab_blocks {\n        id\n        item {\n          __typename\n          ...tabBlockLabelFields\n          ...contentBlockFields\n          ...cardBlockFields\n          ...expansionPanelBlockFields\n          ...layoutColumnBlockFields\n        }\n    }\n  }\n"])),X,G,z,W,K),J=(0,j.ZP)(A||(A=(0,M.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  fragment nestedTabBlockFields on tab_blocks {\n    id\n    tab_blocks {\n        id\n        item {\n          __typename\n          ...tabBlockLabelFields\n          ...contentBlockFields\n          ...cardBlockFields\n          ...nestedNestedTabBlockFields\n          ...expansionPanelBlockFields\n          ...layoutColumnBlockFields\n        }\n    }\n  }\n"])),X,G,z,Y,K),$=(0,j.ZP)(m||(m=(0,M.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  fragment tabBlockFields on tab_blocks {\n    id\n    tab_blocks {\n      id\n      item {\n        __typename\n        ...tabBlockLabelFields\n        ...contentBlockFields\n        ...cardBlockFields\n        ...nestedTabBlockFields\n        ...expansionPanelBlockFields\n        ...layoutColumnBlockFields\n      }\n    }\n  }\n"])),X,G,z,J,W,K),nn=(0,j.ZP)(f||(f=(0,M.Z)(["\n ","\n ","\n ","\n ","\n ","\n  fragment pageFields on pages {\n    id\n    title\n    slug\n    hero_image {\n      id\n      description\n    }\n    hero_title\n    page_blocks {\n      id\n      item {\n        __typename\n        ...contentBlockFields\n        ...tabBlockFields\n        ...cardBlockFields\n        ...expansionPanelBlockFields\n        ...layoutColumnBlockFields\n      }\n    }\n    meta_title\n    meta_description\n  }\n"])),G,$,z,W,K),en=((0,j.ZP)(_||(_=(0,M.Z)(["\n  ","\n  fragment cardBlocks on card_blocks {\n    card_title\n    card_subtitle\n    card_content_block {\n      item {\n        __typename\n        ...contentBlocks\n      }\n    }\n  }\n"])),U),(0,j.ZP)(p||(p=(0,M.Z)(["\n  fragment fileCollectionFields on reporter_letters {\n    id\n    title\n    date\n    file {\n        id\n    }\n  }\n"]))),(0,j.ZP)(g||(g=(0,M.Z)(["query {\n  menus {\n    id\n    custom_url\n    link_to_page {\n      id\n      slug\n      url\n    }\n    menu\n    menu_children {\n      pages_id {\n        id\n        title\n        url\n      }\n    }\n    menu_icon\n    menu_label\n  }\n}"])))),tn=(0,j.ZP)(b||(b=(0,M.Z)(["query {\n  announcements {\n    id\n    title \n    content\n    status\n  }\n}"]))),on=(0,j.ZP)(h||(h=(0,M.Z)(["\nquery {\n  pages(limit: -1) {\n    id\n    slug\n    title\n    url\n    template\n    parent {\n      id\n    }\n  }\n}"]))),rn=((0,j.ZP)(v||(v=(0,M.Z)(["\nquery {\n  redirects(limit: -1) {\n    id\n    old_url\n    new_url\n  }  \n}\n"]))),(0,j.ZP)(k||(k=(0,M.Z)(["\nquery {\n  pages(limit: -1 ) {\n    id\n    slug\n    title\n    url\n  }\n  redirects(limit: -1) {\n    id\n    old_url\n    new_url\n  }  \n}\n"])))),an=(0,j.ZP)(y||(y=(0,M.Z)(["\n","\nquery PagesById($ID: ID!) {\n  pages_by_id (id: $ID) {\n    ...pageFields\n  }\n}"])),nn),ln=(0,j.ZP)(C||(C=(0,M.Z)(["\n","\nquery PagesById($ID: ID!) {\n  pages_by_id (id: $ID) {\n    ...pageFields\n    sidebar_blocks\n  }\n}"])),nn),sn=((0,j.ZP)(I||(I=(0,M.Z)(["\n  query {\n    files {\n      id\n      storage\n      filename_disk\n      title\n      filesize\n      location\n      folder {\n        id \n        name\n      }\n    }\n    folders {\n      id\n      name\n    }\n  }\n"]))),(0,j.ZP)(Z||(Z=(0,M.Z)(['\n  query {\n    revenue_fiscal_years: period(\n      distinct_on: fiscal_year, \n      where: {revenues: {revenue: {_is_null: false}, period: {period: {_eq: "Fiscal Year"}}}}, \n      order_by: {fiscal_year: asc}) {\n        fiscal_year\n    }\n\n    disbursement_fiscal_years: period(\n      distinct_on: fiscal_year, \n      where: {disbursements: {disbursement: {_is_null: false}, period: {period: {_eq: "Fiscal Year"}}}}, \n      order_by: {fiscal_year: asc}) {\n        fiscal_year\n    }\n    total_yearly_fiscal_revenue(where: {year: {_eq: 2020}}) {\n      sum\n    }\n\n    total_yearly_fiscal_disbursement(where: {year: {_eq: 2020}}) {\n      sum\n    }\n    disbursement_gomesa: disbursement_source_summary(\n      where: {fiscal_year: {_eq: "2020"}, source: {_eq: "GOMESA offshore"}, state_or_area: {_eq: "NF"}}, \n      order_by: {fiscal_year: asc, total: desc}\n      ) {\n      source\n      sum: total\n    }\n  }\n'])))),cn=(0,j.ZP)(w||(w=(0,M.Z)(['\n  query {\n    contacts(sort: ["header", "letter"], limit: -1) {\n      id\n      status\n      page\n      tab\n      accordion\n      company_yn\n      letter\n      header\n      company_name\n      operator_number\n      agency\n      primary_contact\n      primary_role\n      email\n      phone\n      fax\n      contact_2\n      role_2\n      email_2\n      phone_2\n      contact_3\n      role_3\n      email_3\n      phone_3\n      contact_4\n      role_4\n      email_4\n      phone_4\n      contact_5\n      role_5\n      email_5\n      phone_5\n      contact_6\n      role_6\n      email_6\n      phone_6\n    }\n  }   \n']))),un=(0,j.ZP)(B||(B=(0,M.Z)(["\n  query {\n    NYMEX(limit: -1) {\n      id\n      status\n      date\n      average\n      roll\n      Spreadsheet {\n        id,\n        filename_download\n      }\n    }\n  }\n"]))),dn=(0,j.ZP)(P||(P=(0,M.Z)(["\n  query {\n    press_releases(limit: -1) {\n      id\n      title\n      date\n      file {\n        id\n        filename_download\n        title\n      }\n      link\n      excerpt\n      status\n    }\n  }\n"]))),An=(0,j.ZP)(F||(F=(0,M.Z)(["\n  query {\n    reporter_letters(limit: -1) {\n      id\n      title\n      date\n      file {\n        id\n        filename_download\n        title\n        type\n      }\n      accessible_file {\n        id\n        filename_download\n        title\n        type\n      }\n      link\n      status\n      topics\n    }\n  }\n"]))),mn=(0,j.ZP)(E||(E=(0,M.Z)(["\n  query {\n    rulemakings {\n      id\n      status\n      final_publication_date\n      rin\n      rule_title\n      informal_title\n      commodity_subject_matter\n      webpage_link\n    }\n  }\n"]))),fn=(0,j.ZP)(x||(x=(0,M.Z)(['\n  query {\n    index_zones(sort: ["sort", "-date"], limit: -1) {\n      id\n      status\n      date\n      spreadsheet {\n        id\n        filename_download\n        type\n        title\n      }\n      index_zones\n    }\n  }\n']))),_n=(0,j.ZP)(S||(S=(0,M.Z)(['\n  query {\n    ibmp(sort: ["sort", "-date"], limit: -1) {\n      id\n      status\n      date\n      spreadsheet {\n          id\n      }\n      ibmp_line_items\n    }\n  }\n']))),pn=(0,j.ZP)(T||(T=(0,M.Z)(['\n  query {\n    indian_gas_major_portion(sort: ["sort", "-date"], limit: -1) {\n      id\n      status\n      date\n      spreadsheet {\n        id\n      }\n      index_zones\n    }\n  }\n']))),gn=(0,j.ZP)(q||(q=(0,M.Z)(['\n  query {\n    Interest_Oil_and_Gas(sort: ["sort", "-sort"], limit: -1) {\n      id\n      sort\n      status\n      Period\n      Indian_Late_and_Underpayments\n      Federal_Late_and_Underpayments\n      Federal_Overpayments\n    }\n  }\n']))),bn=(0,j.ZP)(O||(O=(0,M.Z)(['\n  query {\n    Interest_Solids(sort: ["sort", "-sort"], limit: -1) {\n      id\n      sort\n      status\n      Period\n      Federal_and_Indian_Late_and_Underpayments\n    }\n  }\n']))),hn=(0,j.ZP)(L||(L=(0,M.Z)(["\n  query {\n    solid_minerals_handbook(limit: -1) {\n      id\n      status\n      chapter\n      section\n      title\n      actual_page\n      toc_page\n      url\n    }\n  }\n"]))),vn=(0,j.ZP)(N||(N=(0,M.Z)(["\n  query {\n    production_handbook(limit: -1) {\n      id\n      status\n      chapter\n      section\n      title\n      actual_page\n      toc_page\n      url\n    }\n  }\n"]))),kn=(0,j.ZP)(V||(V=(0,M.Z)(["\n  query {\n    revenue_handbook(limit: -1) {\n      id\n      status\n      chapter\n      section\n      title\n      actual_page\n      toc_page\n      url\n    }\n  }\n"]))),yn=(0,j.ZP)(Q||(Q=(0,M.Z)(["\n  query {\n    geothermal_class_1(limit: -1) {\n      id\n      status\n      chapter\n      section\n      title\n      actual_page\n      toc_page\n      url\n    }\n  }\n"]))),Cn=(0,j.ZP)(R||(R=(0,M.Z)(["\n  query {\n    geothermal_class_2_3(limit: -1) {\n      id\n      status\n      chapter\n      section\n      title\n      actual_page\n      toc_page\n      url\n    }\n  }\n"]))),In=(0,j.ZP)(H||(H=(0,M.Z)(["\n  query {\n    plant_specific_ucas {\n      id\n      status\n      transportation_system_or_gas_plant\n      file {\n        id\n        filename_download\n        type\n        title\n      }\n      type\n      operator\n      location \n      doc_date\n    }\n  }\n"])))},824:function(n,e,t){t.d(e,{l:function(){return On}});t(6992),t(8674),t(9601),t(7727);var o=t(144),r=t(7356),a=t(4208),i=(t(5666),t(1539),t(8783),t(3948),t(7941),t(9714),t(9826),t(6699),t(2023),t(4916),t(3123),t(2222),t(8309),t(8345)),l=t(9985);o.Z.use(i.Z);var s=[{path:"/",name:"Home",component:function(){return Promise.all([t.e(343),t.e(268)]).then(t.bind(t,1776))},meta:{breadcrumb:"Home"},props:!0},{path:"/404",name:"PageNotFound",component:function(){return t.e(892).then(t.bind(t,7290))},meta:{breadcrumb:"Page Not Found"}},{path:"/:slug",name:"TwoColumnLeft",component:function(){return Promise.all([t.e(343),t.e(21)]).then(t.bind(t,1224))},props:!0,meta:{breadcrumb:""},children:[{path:"/",component:function(){return t.e(439).then(t.bind(t,1174))}},{path:":slug1",component:function(){return t.e(439).then(t.bind(t,1174))},props:!0,meta:{breadcrumb:""},children:[{path:":slug2",component:function(){return t.e(439).then(t.bind(t,1174))},props:!0,meta:{breadcrumb:""},children:[{path:":slug3",component:function(){return t.e(439).then(t.bind(t,1174))},props:!0,meta:{breadcrumb:""},children:[{path:":slug4",component:function(){return t.e(439).then(t.bind(t,1174))},props:!0,meta:{breadcrumb:""},children:[{path:":slug5",component:function(){return t.e(439).then(t.bind(t,1174))},props:!0,meta:{breadcrumb:""}}]}]}]}]}]},{path:"/:catchAll(.*)",redirect:"/404"}],c=new i.Z({mode:"history",linkExactActiveClass:"nav-active-class",routes:s,scrollBehavior:function(n,e,t){return n.hash?{selector:n.hash,behavior:"smooth"}:t||void 0}});function u(n){return!!Object.keys(n.query).length}function d(){return On.query({query:l.$S})}c.beforeEach(function(){var n=(0,a.Z)(regeneratorRuntime.mark((function n(e,t,o){var r,a,i,l,s,c,A,m,f,_,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,d();case 2:r=n.sent,a=location.origin,i=location.pathname.toString(),l=decodeURI(i),r&&(s=r.data.pages,c=r.data.redirects,A=c.find((function(n){return n.old_url===l}))),A?(m=A.new_url.includes("?")?A.new_url.split("?")[0]:A.new_url.split("#")[0],f=s.find((function(n){return n.url===m})),_=m.includes(".")?m.split(".").pop():void 0,f?window.location.href="".concat(a).concat(A.new_url):_?(window.open("".concat(a).concat(A.new_url),"_blank","noopener noreferrer"),history.back()):location.href="/404"):(p=s.find((function(n){return n.url===i})),p?!u(e)&&u(t)?o({name:e.name,query:t.query}):o():location.href="/404"),!u(e)&&u(t)?o({name:e.name,query:t.query}):o();case 9:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}());var A=c,m=t(2489),f=t(6495),_=t(5543),p=t(4153),g=t(3300),b=t.n(g),h=t(443);o.Z.use(h.Z);var v=new h.Z({theme:{themes:{dark:{primary:"#121212",secondary:"#19642a9",anchor:"#0076a3"},light:{primary:{base:"#1a227e",lighten9:"#e8eaf5",lighten8:"#c5c9e8",lighten7:"#9ea7d8",lighten6:"#7885c8",lighten5:"#5b6abc",lighten4:"#3f50b1",lighten3:"#3948a7",lighten2:"#303e9b",lighten1:"#28348f",darken1:"#000051"},secondary:{base:"#0076a3",lighten8:"#e1f4f9",lighten7:"#b3e4f0",lighten6:"#83d2e7",lighten5:"#57c0de",lighten4:"#38b3da",lighten3:"#19a6d6",lighten2:"#0f98c9",lighten1:"#0086b6",darken1:"#005682"},anchor:"#0076a3",accent:"#534aae",black:"#000000",green:{base:"#097d4d",lighten1:"#4aad79",darken1:"#005024"},purple:{base:"#650d79",lighten1:"#960d79",lighten2:"#dfdcef",darken1:"#36004c"},yellow:{base:"#b6890f",lighten1:"#ecb947",darken1:"#825c10"},white:"#ffffff",neutrals:{base:"#262431",lighten1:"#484554",lighten2:"#ebebed",lighten3:"#fafafa"},expansionPanel:"#ebebed"}},options:{customProperties:!0}}}),k=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-app",[t("AppToolbar"),t("v-main",[t("router-view",{key:n.$route.path})],1),t("Footer")],1)},y=[],C=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",[o("v-system-bar",{staticClass:"system-bar",class:{"hidden-system-bar":!n.showSystemBar},attrs:{app:"",height:"30"}},[o("div",{staticClass:"banner-wrap"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"U.S. Flag",contain:"",src:t(7838),transition:"scale-transition",width:"20"}}),n._v(" An official website of the U.S. government ")],1)]),o("v-app-bar",{staticClass:"v-app-bar-wrap",class:{"hidden-system-bar":!n.showSystemBar},attrs:{app:"",color:"primary darken-1",dark:"",height:n.showSystemBar?"80px":"60px"},scopedSlots:n._u([n.isMobile?null:{key:"extension",fn:function(){return[o("div",{staticClass:"d-none d-lg-block"},[o("MainMenu")],1)]},proxy:!0}],null,!0)},[o("div",{staticClass:"d-flex logo"},[o("router-link",{attrs:{to:"/"}},[o("v-img",{staticClass:"logo shrink mr-2",attrs:{alt:"Office of Natural Resources and Revenue (ONRR) Logo",contain:"",src:t(9271),transition:"scale-transition"}})],1),o("router-link",{attrs:{to:"/"}},[o("v-toolbar-title",[o("div",{staticClass:"logo-content"},[o("span",[n._v("U.S. Department of the Interior")]),o("span",[n._v("Office of Natural")]),o("span",[n._v("Resources Revenue (ONRR)")])])])],1)],1),o("v-spacer"),o("HeaderMenu"),o("div",{staticClass:"d-lg-none"},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),n.drawer=!n.drawer}}})],1)],1),o("v-navigation-drawer",{attrs:{app:"",temporary:"",right:"",dark:""},model:{value:n.drawer,callback:function(e){n.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-subheader",[n._v("Menu")]),o("v-list-item-group",[o("v-list-item",{attrs:{to:"/"}},[o("v-list-item-title",[n._v("Home")])],1),n._l(n.menuItems,(function(e){return o("v-list-item",{key:e.id,attrs:{to:""+(e.custom_url||e.link_to_page.url)}},[o("v-list-item-title",{domProps:{textContent:n._s(e.menu_label)}})],1)}))],2)],1),o("hr"),o("v-list",{attrs:{dense:""}},[o("v-list-item-group",[o("v-list-item",{attrs:{to:"/search-results"}},[o("v-list-item-icon",[o("v-icon",[n._v("mdi-magnify")])],1),o("v-list-item-title",[n._v("Search")])],1),n._l(n.utilityItems,(function(e){return o("v-list-item",{key:e.id,attrs:{to:""+(e.custom_url||e.link_to_page.url)}},[o("v-list-item-icon",[o("v-icon",{domProps:{textContent:n._s(e.menu_icon)}})],1),o("v-list-item-title",{domProps:{textContent:n._s(e.menu_label)}})],1)}))],2)],1)],1),o("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:n.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:n.fab,expression:"fab"}],attrs:{color:"primary",dark:"",fab:"",fixed:"",bottom:"",left:"",elevation:"2"},on:{click:n.toTop}},[o("v-icon",{attrs:{color:"white"}},[n._v("mdi-chevron-up")])],1)],1)},I=[],Z=(t(7327),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"d-none d-lg-block header-menu"},[n._l(n.menuItems,(function(e){return t("v-btn",{key:e.id,staticClass:"no-btn-hover",attrs:{to:e.link_to_page&&e.link_to_page.url,href:e.custom_url&&e.custom_url,text:"",dark:"",target:e.custom_url&&e.custom_url?"_blank":"_self"}},["Revenue Data"===e.menu_label?t("span",{staticClass:"v-btn__content-btn"},[t("v-btn",{staticClass:"mb-1",attrs:{color:"primary"}},[e.menu_icon?t("v-icon",{staticClass:"mr-1",attrs:{color:"white"}},[n._v(n._s(e.menu_icon))]):n._e(),e.menu_label?t("span",{staticClass:"mr-2"},[n._v(n._s(e.menu_label))]):n._e()],1)],1):t("span",{staticClass:"v-btn__content"},[e.menu_icon?t("v-icon",{staticClass:"mr-1",attrs:{color:"white"}},[n._v(n._s(e.menu_icon))]):n._e(),e.menu_label?t("span",{staticClass:"mr-2"},[n._v(n._s(e.menu_label))]):n._e()],1)])})),"localhost"===n.hostname||"192.168.0.22"===n.hostname?t("v-btn",{attrs:{plain:""}},[t("v-switch",{attrs:{flat:"",color:"anchor",label:""},model:{value:n.themeSwitch,callback:function(e){n.themeSwitch=e},expression:"themeSwitch"}})],1):n._e()],2)}),w=[],B={name:"HeaderMenu",data:function(){return{hostname:location.hostname,menus:[],themeSwitch:!1}},apollo:{menus:{query:l.id,loadingKey:"loading..."}},computed:{menuItems:function(){return this.menus.filter((function(n){return"header"===n.menu}))}},watch:{themeSwitch:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},P=B,F=t(1001),E=t(3453),x=t.n(E),S=t(2774),T=t(9639),q=t(9342),O=(0,F.Z)(P,Z,w,!1,null,"f7253402",null),L=O.exports;x()(O,{VBtn:S.Z,VIcon:T.Z,VSwitch:q.Z});var N=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n.$apollo.loading?t("label",{attrs:{text:""}}):t("nav",{staticClass:"primary",attrs:{id:"main-menu"}},[t("ul",[n._l(n.menuItems,(function(e){return t("li",{key:e.id},[t("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:n._u([{key:"activator",fn:function(o){var r=o.on,a=o.attrs;return[t("v-btn",n._g(n._b({staticClass:"menu-btn",attrs:{color:"white",text:"",dark:""}},"v-btn",a,!1),r),[t("v-list-item-content",[t("v-list-item-title",{attrs:{id:a["aria-labelledby"]},domProps:{textContent:n._s(e.menu_label)}})],1)],1)]}}],null,!0)},[t("v-list",[t("v-list-item",{staticClass:"menu-btn",attrs:{to:e.link_to_page.url}},[n._v(" "+n._s(e.menu_label+" Home")+" ")]),n._l(e.menu_children,(function(e,o){return t("v-list-item",{key:o,staticClass:"menu-btn",attrs:{link:"",to:""+e.pages_id.url}},[n._v(" "+n._s(e.pages_id.title)+" ")])}))],2)],1)],1)})),t("li",[t("form",{attrs:{id:"search_form",action:"https://search.usa.gov/search","accept-charset":"UTF-8",method:"get"}},[t("input",{attrs:{type:"hidden",name:"affiliate",id:"affiliate",value:"onrr.gov",autocomplete:"off"}}),t("v-text-field",{staticClass:"search-input",attrs:{"solo-inverted":"",name:"query",dense:"",label:"Search","prepend-inner-icon":"mdi-magnify"}})],1)])],2)])])},V=[],Q={name:"MainMenu",data:function(){return{menus:[],cItems:[]}},apollo:{menus:{query:l.id,loadingKey:"loading..."}},methods:{onClick:function(n){n&&console.debug("You clicked ".concat(n))},childItems:function(n){this.cItems=this.menus&&this.menus.filter((function(e){return e.id===n}))[0].menu_children}},computed:{menuItems:function(){return this.menus.filter((function(n){return"main"===n.menu}))}}},R=Q,H=t(1317),M=t(5243),j=t(1033),U=t(3346),G=t(4690),K=(0,F.Z)(R,N,V,!1,null,"2bc94b3c",null),z=K.exports;x()(K,{VBtn:S.Z,VList:H.Z,VListItem:M.Z,VListItemContent:j.km,VListItemTitle:j.V9,VMenu:U.Z,VTextField:G.Z});var X=30,D=150,W={name:"AppToolbar",data:function(){return{showSystemBar:!0,lastScrollPosition:0,scrollValue:0,drawer:!1,group:null,isMobile:!1,fab:!1,menus:[]}},apollo:{menus:{query:l.id,loadingKey:"loading..."}},components:{HeaderMenu:L,MainMenu:z},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll),"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.lastScrollPosition=window.pageYOffset,window.addEventListener("scroll",this.onScroll);var n=document.createElement("meta");n.name="viewport",n.content="width=device-width, initial-scale=1",document.head.appendChild(n),this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},watch:{group:function(){this.drawer=!1}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},onScroll:function(n){if("undefined"!==typeof window){var e=window.pageYOffset||n.target.scrollTop||0;this.fab=e>D,window.pageYOffset<0||Math.abs(window.pageYOffset-this.lastScrollPosition)<X||(this.showSystemBar=window.pageYOffset<this.lastScrollPosition,this.lastScrollPosition=window.pageYOffset)}},toTop:function(){this.$vuetify.goTo(0)},onResize:function(){this.isMobile=window.innerWidth<1264}},computed:{menuItems:function(){return this.menus.filter((function(n){return"main"===n.menu}))},utilityItems:function(){return this.menus.filter((function(n){return"header"===n.menu}))},height:function(){switch(this.$vuetify.breakpoint.name){case"lg":return 50;default:return 50}}}},Y=W,J=t(4977),$=t(4549),nn=t(9937),en=t(4674),tn=t(9565),on=t(6774),rn=t(1453),an=t(5042),ln=t(4078),sn=t(3201),cn=t(6392),un=t.n(cn),dn=t(1638),An=(0,F.Z)(Y,C,I,!1,null,"098c1111",null),mn=An.exports;x()(An,{VAppBar:J.Z,VAppBarNavIcon:$.Z,VBtn:S.Z,VIcon:T.Z,VImg:nn.Z,VList:H.Z,VListItem:M.Z,VListItemGroup:en.Z,VListItemIcon:tn.Z,VListItemTitle:j.V9,VNavigationDrawer:on.Z,VSpacer:rn.Z,VSubheader:an.Z,VSystemBar:ln.Z,VToolbarTitle:sn.qW}),un()(An,{Scroll:dn.Z});var fn=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("v-footer",{staticClass:"footer",attrs:{padless:""}},[o("v-toolbar",{staticClass:"top",attrs:{tag:"div",dense:"",elevation:"0"}},[o("v-toolbar-items",n._l(n.menuItemsTop,(function(e){return o("v-btn",{key:e.id,attrs:{to:e.link_to_page&&e.link_to_page.url,href:e.custom_url&&e.custom_url,target:e.custom_url?"_blank":"_self",plain:"",color:"white"}},[n._v(" "+n._s(e.menu_label)+" ")])})),1)],1),o("v-toolbar",{staticClass:"bottom",attrs:{dense:"",elevation:"0",tag:"div"}},[o("v-toolbar-items",n._l(n.menuItemsBottom,(function(e){return o("v-btn",{key:e.id,attrs:{to:e.link_to_page&&e.link_to_page.url,href:e.custom_url&&e.custom_url,target:e.custom_url?"_blank":"_self",plain:"",color:"white"}},[n._v(" "+n._s(e.menu_label)+" ")])})),1)],1),o("v-toolbar",{staticClass:"abs-bottom",attrs:{tag:"div",height:"120px",elevation:"0"}},[o("v-toolbar-title",[o("div",{staticClass:"footer-logo-wrap"},[o("router-link",{attrs:{to:"/"}},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"ONNR Logo",contain:"",src:t(9271),transition:"scale-transition",width:"70"}})],1),o("router-link",{attrs:{to:"/"}},[o("div",{staticClass:"logo-content"},[o("span",[n._v("U.S. Department of the Interior")]),o("span",[n._v("Office of Natural")]),o("span",[n._v("Resources Revenue (ONRR)")])])])],1)]),o("v-spacer"),o("v-toolbar-items",{staticClass:"social-menu"},n._l(n.socialMenuItems,(function(e){return o("v-btn",{key:e.id,staticClass:"no-btn-hover",attrs:{to:e.link_to_page&&e.link_to_page.url,href:e.custom_url&&e.custom_url,text:"",dark:"",target:e.custom_url?"_blank":"_self"}},[o("span",{staticClass:"v-btn__content"},[e.menu_icon?o("v-icon",{attrs:{color:"white"}},[n._v(n._s(e.menu_icon))]):n._e(),"Contact Us"===e.menu_label?o("span",{staticClass:"mr-2",staticStyle:{color:"white"}},[n._v(n._s(e.menu_label))]):n._e()],1)])})),1)],1)],1)},_n=[],pn={name:"FooterNav",data:function(){return{menus:[]}},apollo:{menus:{query:l.id,loadingKey:"loading..."}},computed:{menuItemsTop:function(){var n=this.menus.filter((function(n){return"footer"===n.menu}));return n.filter((function(n,e){return e<5}))},menuItemsBottom:function(){var n=this.menus.filter((function(n){return"footer"===n.menu}));return n.filter((function(n,e){return e>4}))},socialMenuItems:function(){return this.menus.filter((function(n){return"social"===n.menu}))}}},gn=pn,bn=t(2022),hn=t(5922),vn=(0,F.Z)(gn,fn,_n,!1,null,"134e8c9e",null),kn=vn.exports;x()(vn,{VBtn:S.Z,VFooter:bn.Z,VIcon:T.Z,VImg:nn.Z,VSpacer:rn.Z,VToolbar:hn.Z,VToolbarItems:sn.lj,VToolbarTitle:sn.qW});var yn={name:"App",metaInfo:function(){return{title:"Office of Natural Resources Revenue",titleTemplate:"%s | Office of Natual Resources Revenue",meta:[{property:"og:site_name",content:"Office of Natural Resources Revenue"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]}},components:{AppToolbar:mn,Footer:kn},data:function(){return{}},created:function(){}},Cn=yn,In=t(4819),Zn=t(213),wn=(0,F.Z)(Cn,k,y,!1,null,null,null),Bn=wn.exports;x()(wn,{VApp:In.Z,VMain:Zn.Z});var Pn=JSON.parse('{"card_blocks_card_content_blocks_item_union":["content_blocks"],"expansion_panels_expansion_panel_blocks_item_union":["card_blocks","content_blocks","expansion_panel_block_label"],"pages_page_blocks_item_union":["content_blocks","tab_blocks","card_blocks","expansion_panels","layout_column_blocks"],"tab_blocks_tab_blocks_item_union":["card_blocks","content_blocks","tab_blocks","tab_block_label","expansion_panels","layout_column_blocks"]}'),Fn=t(5527),En=t.n(Fn),xn=new f.h({possibleTypes:Pn}),Sn=(0,_.L)({uri:"".concat("https://preview-onrr-frontend.app.cloud.gov","/graphql")}),Tn=(0,_.L)({uri:"".concat("https://preview-onrr-frontend.app.cloud.gov","/graphql/system")}),qn=(0,_.L)({uri:"".concat("https://hasura-dev.app.cloud.gov","/v1/graphql")}),On=new p.f({fetch:b(),link:Sn,cache:xn,resolvers:{}}),Ln=new p.f({fetch:b(),link:Tn,cache:xn,resolvers:{}}),Nn=new p.f({fetch:b(),link:qn,cache:xn,resolvers:{}}),Vn=new m.ZP({defaultClient:On,clients:{a:Ln,b:Nn}});o.Z.config.productionTip=!1,o.Z.use(m.ZP),o.Z.use(r.Z),o.Z.use(En(),{id:"UA-33523145-1",router:A}),new o.Z({vuetify:v,apolloProvider:Vn,router:A,render:function(n){return n(Bn)}}).$mount("#app")},7838:function(n){n.exports="data:image/png;base64,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"},9271:function(n,e,t){n.exports=t.p+"img/ONRR-mark-200x200.9b6d4ee1.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return n[o].call(a.exports,a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,a){if(!o){var i=1/0;for(u=0;u<n.length;u++){o=n[u][0],r=n[u][1],a=n[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](o[s])}))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){n.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=n.length;u>0&&n[u-1][2]>a;u--)n[u]=n[u-1];n[u]=[o,r,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+({0:"PlantSpecificUCAsCollection",21:"TwoColumnLeft",51:"SideMenu",62:"NYMEXCollection",124:"AnnouncementsCollection",156:"Breadcrumbs",167:"CompaniesCollection",169:"HorizontalRuleBlock",184:"TabsBlock",188:"InterestOilGas",229:"TableBlock",248:"SelectField",266:"ExpansionPanelBlock",268:"Home",315:"Contacts",345:"CodeBlock",364:"CollectionFilterToolbar",409:"ContentBlock",429:"ListBlock",439:"Page",441:"ImageBlock",486:"MultipleSelectField",495:"EventsCollection",496:"LayoutBlock",505:"CollectionBlock",520:"Rulemakings",567:"IndexZones",669:"EditorBlock",674:"CardBlock",675:"ContactsSearch",707:"TextField",738:"TextBlock",758:"IndianGasMajorPortion",793:"ReporterLettersCollection",795:"HeroImage",824:"CustomBlock",883:"IBMPCollection",892:"PageNotFound",911:"InterestSolids",943:"ContactsSearchResults",952:"SolidMineralsReporterHandbook"}[n]||n)+"-legacy."+{0:"9aee2e04",21:"19e0863d",51:"66eef01e",58:"c3408801",62:"090551ec",124:"8c11236c",156:"9d80ac16",167:"45a23e53",169:"0b0939fe",174:"df1ddee3",184:"9475c374",188:"940a9d3b",229:"d1e944d9",248:"1b1e76e1",266:"126fb672",268:"87f43909",315:"63d2c6c6",343:"6dcb7497",345:"7e57602c",354:"2ab1a8e0",364:"2f24720a",409:"827926b0",429:"7074dc1b",439:"f9c46348",441:"2e4c04f1",486:"6db252a5",495:"268e2872",496:"469496b1",505:"69b90fd8",520:"aeb38cc5",567:"1fcb0ec0",669:"b6dbf8c6",674:"fb906027",675:"72c60c76",707:"39614557",738:"ae1e74a5",758:"3d584291",793:"28577c0f",795:"e9d74dd0",824:"d1ddab18",860:"56236dd9",883:"ddd54b01",892:"5108d49f",911:"69b66ed9",943:"2aafe8fe",952:"58969f35"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+({0:"PlantSpecificUCAsCollection",21:"TwoColumnLeft",51:"SideMenu",62:"NYMEXCollection",124:"AnnouncementsCollection",156:"Breadcrumbs",184:"TabsBlock",229:"TableBlock",248:"SelectField",266:"ExpansionPanelBlock",268:"Home",315:"Contacts",409:"ContentBlock",439:"Page",441:"ImageBlock",496:"LayoutBlock",520:"Rulemakings",567:"IndexZones",669:"EditorBlock",674:"CardBlock",675:"ContactsSearch",738:"TextBlock",758:"IndianGasMajorPortion",793:"ReporterLettersCollection",795:"HeroImage",883:"IBMPCollection",892:"PageNotFound",952:"SolidMineralsReporterHandbook"}[n]||n)+"."+{0:"1ecf3cab",21:"fe4c5b97",51:"25fb7f6b",58:"b6d454c9",62:"1ecf3cab",124:"9abd241d",156:"79a7979b",174:"cddf072f",184:"a194c0dc",229:"f2282e42",248:"0b5718b4",266:"1f4466ac",268:"d5ab0c93",315:"1be6e4f5",354:"12f2cce6",409:"a61247d1",439:"fb5cad81",441:"7e912d80",496:"c7f410d8",520:"1ecf3cab",567:"1ecf3cab",669:"e8e8d45b",674:"9bfb981b",675:"00a0b468",738:"4fd666bc",758:"1ecf3cab",793:"9b9aec51",795:"0c7d6d63",883:"1ecf3cab",892:"db148cb4",952:"1ecf3cab"}[n]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="onrr-frontend-app-vue:";t.l=function(o,r,a,i){if(n[o])n[o].push(r);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",e+a),l.src=o),n[o]=[r];var A=function(e,t){l.onerror=l.onload=null,clearTimeout(m);var r=n[o];if(delete n[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(n){return n(t)})),e)return e(t)},m=setTimeout(A.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=A.bind(null,l.onerror),l.onload=A.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n=function(n,e,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||e,s=new Error("Loading CSS chunk "+n+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=a,r.href=e,document.head.appendChild(r),r},e=function(n,e){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===n||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===n||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),l=t.p+i;if(e(i,l))return r();n(o,l,r,a)}))},r={143:0};t.f.miniCss=function(n,e){var t={0:1,21:1,51:1,58:1,62:1,124:1,156:1,174:1,184:1,229:1,248:1,266:1,268:1,315:1,354:1,409:1,439:1,441:1,496:1,520:1,567:1,669:1,674:1,675:1,738:1,758:1,793:1,795:1,883:1,892:1,952:1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=o(n).then((function(){r[n]=0}),(function(e){throw delete r[n],e})))}}(),function(){var n={143:0};t.f.j=function(e,o){var r=t.o(n,e)?n[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=n[e]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(e),l=new Error,s=function(o){if(t.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};t.l(i,s,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,a,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(s)var u=s(t)}for(e&&e(o);c<i.length;c++)a=i[c],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(u)},o=self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(824)}));o=t.O(o)})();
//# sourceMappingURL=app-legacy.98be00fa.js.map