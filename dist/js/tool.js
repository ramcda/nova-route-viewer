!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t,e,n,r,s,o){var a,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,i=t.default);var c,l="function"==typeof i?i.options:i;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId=s),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:i,options:l}}},function(t,e,n){n(2),t.exports=n(14)},function(t,e,n){Nova.booting(function(t,e){e.addRoutes([{name:"route-viewer",path:"/route-viewer",component:n(3)}])})},function(t,e,n){var r=n(0)(n(9),n(13),!1,function(t){n(4)},null,null);t.exports=r.exports},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(7)("8d07fd26",r,!0,{})},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var s=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([s]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(r[o]=!0)}for(s=0;s<t.length;s++){var a=t[s];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(8),o={},a=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,u=0,c=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(g(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(g(n.parts[s]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(p){var s=u++;r=i||(i=v()),e=x.bind(null,r,s,!1),n=x.bind(null,r,s,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);f.ssrId&&t.setAttribute(d,e.id);s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){c=n,f=r||{};var a=s(t,e);return h(a),function(e){for(var n=[],r=0;r<a.length;r++){var i=a[r];(u=o[i.id]).refs--,n.push(u)}e?h(a=s(t,e)):a=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}};var m,b=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,r){var s=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,s);else{var o=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},s=0;s<e.length;s++){var o=e[s],a=o[0],i={id:t+":"+s,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),s=n.n(r);e.default={components:{RouteTable:s.a},data:function(){return{routes:[],search:"",sort:{field:"",order:-1},showNova:!1}},mounted:function(){this.getRoutes()},methods:{getRoutes:function(){var t=this;Nova.request().get("/nova-vendor/route-viewer/routes").then(function(e){t.routes=e.data})},sortBy:function(t){var e=this;this.sort.field=t,this.sort.order*=-1,this.routes.sort(function(t,n){var r=0;return t[e.sort.field]<n[e.sort.field]&&(r=-1),t[e.sort.field]>n[e.sort.field]&&(r=1),r*e.sort.order})},toggleNova:function(){this.showNova=!this.showNova}},computed:{filteredRoutes:function(){if(!this.search.length)return this.visibleRoutes;var t=this.searchRegex;return t?this.visibleRoutes.filter(function(e){var n=!1;for(var r in e)Array.isArray(e[r])?e[r].forEach(function(e){t.test(e)&&(n=!0)}):t.test(e[r])&&(n=!0);return n}):{}},visibleRoutes:function(){return this.showNova?this.routes:this.routes.filter(function(t){return!(t.action.length&&0===t.action.indexOf("Laravel\\Nova")||t.as.length&&0===t.as.indexOf("nova")||t.middleware.includes("nova"))})},searchRegex:function(){try{return new RegExp("("+this.search+")","i")}catch(t){return!1}}}}},function(t,e,n){var r=n(0)(n(11),n(12),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s,o,a=(r=0,s={},o=["bg-success text-white","bg-80 text-white","bg-primary-dark text-white","bg-warning text-90","bg-info text-white","bg-danger text-white"],{generate:function(t){return r>=o.length&&(r=0),s.hasOwnProperty(t)||(s[t]=o[r]),r++,s[t]}});e.default={data:function(){return{fields:[{label:"Route",attribute:"uri"},{label:"Name",attribute:"as"},{label:"Methods",attribute:"methods"},{label:"Action",attribute:"action"},{label:"Middleware",attribute:"middleware"}]}},props:{routes:{type:Array,required:!0},sort:{type:Function}},methods:{style:function(t){return a.generate(t)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden overflow-x-auto relative"},[n("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0"}},[n("thead",[n("tr",t._l(t.fields,function(e){return n("th",{staticClass:"text-left"},[n("sortable-icon",{attrs:{"resource-name":t.resourceName,"uri-key":e.attribute},on:{sort:function(n){t.sort(e.attribute)}}},[t._v("\n                    "+t._s(t.__(e.label))+"\n                ")])],1)}))]),t._v(" "),n("tbody",t._l(t.routes,function(e,r){return n("tr",{key:r,attrs:{route:e}},[n("td",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n                "+t._s(e.uri)+"\n            ")]),t._v(" "),n("td",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n                "+t._s(e.as)+"\n            ")]),t._v(" "),n("td",{staticClass:"whitespace-no-wrap text-left"},t._l(e.methods,function(e){return n("span",{class:{"px-2 py-1 text-xs font-semibold rounded mr-2":["GET","HEAD","POST","PUT","PATCH","DELETE"].includes(e),"bg-success text-white":"GET"===e,"bg-80 text-white":"HEAD"===e,"bg-primary-dark text-white":"POST"===e,"bg-warning text-90":"PUT"===e,"bg-info text-white":"PATCH"===e,"bg-danger text-white":"DELETE"===e}},[t._v("\n                    "+t._s(e)+"\n                ")])})),t._v(" "),n("td",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n                "+t._s(e.action)+"\n            ")]),t._v(" "),n("td",{staticClass:"whitespace-no-wrap text-left"},t._l(e.middleware,function(e){return n("span",{staticClass:"px-2 py-1 text-xs font-semibold rounded mr-2",class:t.style(e)},[t._v("\n                    "+t._s(e)+"\n                ")])}))])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("heading",{staticClass:"mb-6"},[t._v(t.__("Route Viewer"))]),t._v(" "),n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"relative h-9 flex items-center mb-6"},[n("icon",{staticClass:"absolute ml-3 text-70",attrs:{type:"search"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"appearance-none form-control form-input w-search pl-search",attrs:{placeholder:t.__("Search"),type:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})],1),t._v(" "),n("div",{staticClass:"flex items-center mb-6 ml-6"},[n("checkbox",{attrs:{checked:t.showNova},on:{input:t.toggleNova}}),t._v(" "),n("label",{staticClass:"cursor-pointer pl-2",on:{click:t.toggleNova}},[t._v("\n                "+t.__("Show Nova routes")+"\n            ")])],1),t._v(" "),n("span",{staticClass:"ml-auto mb-6"},[n("button",{staticClass:"btn btn-default btn-primary",on:{click:function(e){t.getRoutes()}}},[t._v("\n                "+t.__("Refresh")+"\n            ")])])]),t._v(" "),n("card",[n("route-table",{attrs:{routes:t.filteredRoutes,sort:t.sortBy}})],1)],1)},staticRenderFns:[]}},function(t,e){}]);
