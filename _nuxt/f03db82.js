(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{176:function(t,e,r){"use strict";r.r(e);r(351);var n=r(55),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"VueToNuxtLogo"},[r("div",{staticClass:"Triangle Triangle--two"}),t._v(" "),r("div",{staticClass:"Triangle Triangle--one"}),t._v(" "),r("div",{staticClass:"Triangle Triangle--three"}),t._v(" "),r("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.default=component.exports},177:function(t,e,r){"use strict";r.r(e);r(354);var n=r(55),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:r(353)}})}),[],!1,null,null,null);e.default=component.exports},185:function(t,e,r){"use strict";r.r(e);var n=r(86),o=r(248),l={props:{inscription:{type:Boolean,default:!1}},data:function(){return{loading:!0}},computed:Object(n.c)({authUser:function(t){return t.auth.authUser}}),watch:{authUser:function(t){console.log("ok",t),null!==t&&this.openAppPage()}},mounted:function(){var t=r(356),e=t.auth.AuthUI.getInstance()||new t.auth.AuthUI(this.$fire.auth),n={Google:this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,Email:this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID},l=Object(o.desktop)()?"popup":"redirect",c={credentialHelper:t.auth.CredentialHelper.NONE,signInOptions:[n.Google,n.Email],signInFlow:l,tosUrl:!0===this.inscription?"/tos":void 0,privacyPolicyUrl:!0===this.inscription?"/privacy-policy":void 0,callbacks:{signInSuccessWithAuthResult:this.signInResult,signInFailure:this.signInError,uiShown:this.uiShown}};e.disableAutoSignIn(),this.authUser?this.openAppPage():e.start("#firebaseui-auth-container",c)},methods:{signInResult:function(t,e){return this.loading=!0,console.log("signInResult"),!1},signInError:function(t){console.error(t)},uiShown:function(){this.loading=!1,console.log("uiShown")},openAppPage:function(){this.$router.push({path:"/app"})}}},c=(r(365),r(55)),d=r(94),f=r.n(d),v=r(168),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"firebaseui-auth-container"}}),t._v(" "),t.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VProgressCircular:v.a})},218:function(t,e,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("6570a8f6",content,!0,{sourceMap:!1})},230:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1930a9a0",content,!0,{sourceMap:!1})},231:function(t,e,r){var content=r(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("445c8038",content,!0,{sourceMap:!1})},253:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=r(55),l=r(94),c=r.n(l),d=r(393),f=r(399),v=r(394),h=r(246),m=r(400),x=r(395),w=r(169),_=r(170),I=r(112),M=r(171),N=r(85),y=r(396),A=r(398),k=r(397),C=r(247),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[r("v-icon",[t._v("mdi-application")])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[r("v-icon",[t._v("mdi-minus")])],1),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v(" mdi-repeat ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:f.a,VAppBarNavIcon:v.a,VBtn:h.a,VContainer:m.a,VFooter:x.a,VIcon:w.a,VList:_.a,VListItem:I.a,VListItemAction:M.a,VListItemContent:N.a,VListItemTitle:N.b,VMain:y.a,VNavigationDrawer:A.a,VSpacer:k.a,VToolbarTitle:C.a})},261:function(t,e,r){r(262),t.exports=r(263)},278:function(t,e,r){"use strict";r.r(e),e.default=function(t){var e=t.store,r=t.redirect;e.getters["auth/isLoggedIn"]||(console.log("Not connected"),r("/login"))}},288:function(t,e,r){"use strict";r(218)},289:function(t,e,r){var n=r(17)(!1);n.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=n},294:function(t,e,r){var content=r(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("2998b330",content,!0,{sourceMap:!1})},295:function(t,e,r){var n=r(17)(!1);n.push([t.i,".page-enter-active,.page-leave-active{transition:opacity .4s}.page-enter,.page-leave-active{opacity:0}",""]),t.exports=n},349:function(t,e,r){"use strict";r.r(e),r.d(e,"actions",(function(){return n}));var n={onAuthStateChangedAction:function(t,e){var r=t.dispatch,n=e.authUser,o=e.claims;n&&o&&r("auth/signIn",{authUser:n,claims:o})}}},350:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return l})),r.d(e,"getters",(function(){return c})),r.d(e,"actions",(function(){return d}));r(8),r(9);function n(){return{authUser:null}}var o=n,l={resetStore:function(t){var s={authUser:null};Object.keys(s).forEach((function(e){t[e]=s[e]}))},setAuthUser:function(t,e){t.authUser={uid:e.uid,email:e.email,displayName:e.displayName}}},c={isLoggedIn:function(t){try{return null!==t.authUser.uid}catch(t){return!1}}},d={signIn:function(t,e){var r=t.commit,n=(t.dispatch,e.authUser);e.claims;r("setAuthUser",n)},signOut:function(t){var e=t.commit;this.$fire.auth.signOut().then((function(){e("resetStore")})).catch((function(t){console.error("Erreur",t),alert(t)}))}}},351:function(t,e,r){"use strict";r(230)},352:function(t,e,r){var n=r(17)(!1);n.push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=n},353:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ny41IDEwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxNjk3ZjY7fS5jbHMtMntmaWxsOiM3YmM2ZmY7fS5jbHMtM3tmaWxsOiMxODY3YzA7fS5jbHMtNHtmaWxsOiNhZWRkZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BcnRib2FyZCA0NjwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0My43NSAwIDIzLjMxIDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNDMuNzUgNjIuNSA0My43NSAxMDAgMCAxNC41OCAyMi45MiAxNC41OCA0My43NSA2Mi41Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSI0My43NSAwIDY0LjE5IDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNjQuNTggMTQuNTggODcuNSAxNC41OCA0My43NSAxMDAgNDMuNzUgNjIuNSA2NC41OCAxNC41OCIvPjwvc3ZnPgo="},354:function(t,e,r){"use strict";r(231)},355:function(t,e,r){var n=r(17)(!1);n.push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=n},79:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(288),r(55)),l=r(94),c=r.n(l),d=r(393),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[261,7,2,8]]]);