"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7559],{5110:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9703);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6633:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(9703),o=r(7007),a=r(2532),i=r(3876),s=r(6859);const c=(0,n.createContext)({collectLink:()=>{}});var l=r(978),u=r(9234);const p=function(e){let{isNavLink:t,to:r,href:p,activeClassName:f,isActive:d,"data-noBrokenLinkCheck":h,autoAddBaseUrl:m=!0,...v}=e;var k;const{siteConfig:{trailingSlash:b,baseUrl:g}}=(0,a.Z)(),{withBaseUrl:w}=(0,l.C)(),y=(0,n.useContext)(c),O=r||p,N=(0,i.Z)(O),C=null==O?void 0:O.replace("pathname://","");let P=void 0!==C?(j=C,m&&(e=>e.startsWith("/"))(j)?w(j):j):void 0;var j;P&&N&&(P=(0,u.applyTrailingSlash)(P,{trailingSlash:b,baseUrl:g}));const M=(0,n.useRef)(!1),T=t?o.OL:o.rU,E=s.Z.canUseIntersectionObserver,x=(0,n.useRef)();(0,n.useEffect)((()=>(!E&&N&&null!=P&&window.docusaurus.prefetch(P),()=>{E&&x.current&&x.current.disconnect()})),[x,P,E,N]);const U=null!==(k=null==P?void 0:P.startsWith("#"))&&void 0!==k&&k,_=!P||!N||U;return P&&N&&!U&&!h&&y.collectLink(P),_?n.createElement("a",{href:P,...O&&!N&&{target:"_blank",rel:"noopener noreferrer"},...v}):n.createElement(T,{...v,onMouseEnter:()=>{M.current||null==P||(window.docusaurus.preload(P),M.current=!0)},innerRef:e=>{var t,r;E&&e&&N&&(t=e,r=()=>{null!=P&&window.docusaurus.prefetch(P)},x.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.current.unobserve(t),x.current.disconnect(),r())}))})),x.current.observe(t))},to:P||"",...t&&{isActive:d,activeClassName:f}})}},3876:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{Z:()=>o,b:()=>n})},978:(e,t,r)=>{r.d(t,{C:()=>a,Z:()=>i});var n=r(2532),o=r(3876);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,n){let{forcePrependBaseUrl:a=!1,absolute:i=!1}=void 0===n?{}:n;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(a)return t+r;const s=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+s:s}(t,e,r,n)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:r}=a();return r(e,t)}},7294:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[o]=e.split(/[#?]/),a="/"===o||o===n?o:(i=o,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(o,a)}},9234:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(7294);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var a=r(325);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},325:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6076:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7086),o=(r(9703),r(5110)),a=r(6633);const i={sidebar_position:1},s="Overview",c={unversionedId:"reference/overview",id:"reference/overview",isDocsHomePage:!1,title:"Overview",description:"Our Python API documentation can be found here.",source:"@site/docs/reference/overview.md",sourceDirName:"reference",slug:"/reference/overview",permalink:"/docs/reference/overview",editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/reference/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",next:{title:"Architects",permalink:"/docs/reference/architects"}},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Our Python API documentation can be found ",(0,o.kt)(a.Z,{target:null,to:"pathname:///python_api/mephisto.html",mdxType:"Link"},"here"),"."),(0,o.kt)("p",null,"Other sections of the documentation may soon be auto-generated."),(0,o.kt)("p",null,"In the meanwhile, you may find reference documentation in the following locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/mephisto-task"},(0,o.kt)("inlineCode",{parentName:"a"},"mephisto-task"))," - This package provides two hooks to faciliate React-based front-end development for Mephisto tasks. Use ",(0,o.kt)("inlineCode",{parentName:"li"},"useMephistoTask")," for simple, static tasks or ",(0,o.kt)("inlineCode",{parentName:"li"},"useMephistoLiveTask")," for multi-turn, socket-based tasks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/mephisto-worker-addons"},(0,o.kt)("inlineCode",{parentName:"a"},"mephisto-worker-addons"))," - This package provides the tips and feedback components to allow for collection of tips and feedback from workers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/bootstrap-chat"},(0,o.kt)("inlineCode",{parentName:"a"},"bootstrap-chat")),"A set of UI components based on Bootstrap v3 for facilitating chat-based tasks for Mephisto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/annotation-toolkit"},(0,o.kt)("inlineCode",{parentName:"a"},"annotation-toolkit")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"@annotated"))," - This package helps users to build out review & annotation tooling for their research tasks. ",(0,o.kt)("inlineCode",{parentName:"li"},"annotation-toolkit")," has been deprecated in favor of ",(0,o.kt)("inlineCode",{parentName:"li"},"@annotated"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/cra-template-mephisto-review"},(0,o.kt)("inlineCode",{parentName:"a"},"cra-template-mephisto-review"))," - A customizable base template for creating data exploration interfaces with first-class support for the ",(0,o.kt)("inlineCode",{parentName:"li"},"mephisto review")," command."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/mephisto-review-hook"},(0,o.kt)("inlineCode",{parentName:"a"},"mephisto-review-hook"))," - TODO")))}p.isMDXComponent=!0}}]);