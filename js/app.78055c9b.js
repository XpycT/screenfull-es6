(function(e){function t(t){for(var r,c,o=t[0],i=t[1],u=t[2],f=0,m=[];f<o.length;f++)c=o[f],l[c]&&m.push(l[c][0]),l[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);a&&a(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==l[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},l={1:0},s=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/screenfull-es6/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var a=i;s.push([2,0]),n()})({2:function(e,t,n){e.exports=n("Vtdi")},M55Q:function(e,t,n){},TTRI:function(e,t,n){"use strict";var r=n("s0z0"),l=n.n(r);l.a},UP9w:function(e,t,n){"use strict";var r=n("M55Q"),l=n.n(r);l.a},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{role:"main"}},[n("GithubCorner"),n("FullScreenComponent")],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"github-corner",attrs:{href:"https://github.com/XpycT/screenfull-es6","aria-label":"View source on Github"}},[n("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0","z-index":"20"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},o=[],i=(n("TTRI"),n("KHd+")),u={},a=Object(i["a"])(u,c,o,!1,null,"28042097",null),f=a.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e._m(0),n("section",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col col-md-4"},[n("div",{ref:"card",staticClass:"card mb-4 shadow "},[n("img",{ref:"image",staticClass:"card-img-top",attrs:{src:"https://sindresorhus.com/unicorn"},on:{click:e.toggleImage}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[e._v("Try out the Fullscreen API.")]),n("p",{staticClass:"card-text"},[e._v("Click the image to make it fullscreen")]),n("section",[n("ul",[n("li",{attrs:{id:"supported"}},[e._v("Supported/allowed: "+e._s(e.ScreenFullEnabled))]),n("li",{attrs:{id:"status"}},[e._v("Is fullscreen: "+e._s(e.fullscreen))]),n("li",{attrs:{id:"element"}},[e._v("Element: "+e._s(e.element))])])]),n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:e.request}},[e._v("Request")]),n("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button"},on:{click:e.exit}},[e._v("Exit")]),n("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"button"},on:{click:e.toggle}},[e._v("Toggle")]),n("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:e.requestDocument}},[e._v("Request document")])])])])])])])])])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"jumbotron text-center"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"jumbotron-heading"},[e._v("ScreenFull-ES6 Demo")]),n("p",{staticClass:"lead text-muted"},[e._v("Simple wrapper for cross-browser usage of the JavaScript\n        "),n("a",{attrs:{href:"https://developer.mozilla.org/en/DOM/Using_full-screen_mode"}},[e._v("Fullscreen API")]),e._v(", which lets you bring\n        the page or any element into fullscreen.")])])])}],h={fn:function(e){for(var t,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,l=n.length,s={};r<l;r++)if(t=n[r],t&&t[1]in document){for(r=0;r<t.length;r++)s[n[0][r]]=t[r];return s[e]}return!1},get enabled(){return Boolean(document[this.fn("fullscreenEnabled")])},get element(){return document[this.fn("fullscreenElement")]},get isFullscreen(){return Boolean(document[this.fn("fullscreenElement")])},get eventNameMap(){return{change:this.fn("fullscreenchange"),error:this.fn("fullscreenerror")}},request:function(e){var t=this.fn("requestFullscreen");if(e=e||document.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent))e[t]();else{var n="undefined"!==typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element;e[t](n&&Element.ALLOW_KEYBOARD_INPUT)}},exit:function(){document[this.fn("exitFullscreen")]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,t){var n=this.eventNameMap[e];n&&document.addEventListener(n,t,!1)},off:function(e,t){var n=this.eventNameMap[e];n&&document.removeEventListener(n,t,!1)}},p=h,b={name:"FullScreenComponent",data:function(){return{element:"",fullscreen:!1}},mounted:function(){p.on("change",this.fullscreenChange)},computed:{ScreenFullEnabled:function(){return!!p.enabled}},methods:{request:function(){p.request(this.$refs.card)},exit:function(){p.exit()},toggle:function(){p.toggle(this.$refs.card)},toggleImage:function(){p.toggle(this.$refs.image)},requestDocument:function(){p.request()},fullscreenChange:function(){this.fullscreen=p.isFullscreen;var e=p.element;this.element=e.localName+(e.id?"#"+e.id:"")}}},g=b,v=(n("UP9w"),Object(i["a"])(g,m,d,!1,null,"594411a7",null)),C=v.exports,_={name:"app",components:{GithubCorner:f,FullScreenComponent:C}},w=_,F=Object(i["a"])(w,l,s,!1,null,null,null),y=F.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},s0z0:function(e,t,n){}});
//# sourceMappingURL=app.78055c9b.js.map