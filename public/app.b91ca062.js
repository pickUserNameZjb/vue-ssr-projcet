!function(e){function t(t){for(var r,u,a=t[0],s=t[1],c=t[2],f=0,p=[];f<a.length;f++)u=a[f],o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={1:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=function(e){return u.p+""+({2:"home-view",3:"login-view",4:"test-view"}[e]||e)+"."+{2:"6b824099",3:"28e348ab",4:"c7745dcf"}[e]+".js"}(e);var s=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:a})},12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="http://127.0.0.1:3333/public/",u.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=s;i.push([37,0]),n()}({36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(3),o={name:"App",mounted(){}},i=n(4),u=Object(i.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-view")],1)},[],!1,null,"7a8ad032",null).exports,a=n(1),s=[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:()=>n.e(3).then(n.bind(null,40))},{path:"/home",name:"home",component:()=>n.e(2).then(n.bind(null,41))},{path:"/test",name:"test",component:()=>n.e(4).then(n.bind(null,39))}];n(36);r.default.use(a.default);const{app:c,router:l}=(()=>{const e=(()=>new a.default({mode:"history",routes:s}))();return{app:new r.default({router:e,render:e=>e(u)}),router:e}})();l.onReady(()=>{c.$mount("#root")})},4:function(e,t,n){"use strict";function r(e,t,n,r,o,i,u,a){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=s):o&&(s=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var l=c.render;c.render=function(e,t){return s.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:c}}n.d(t,"a",function(){return r})}});