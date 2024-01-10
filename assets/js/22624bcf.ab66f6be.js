"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7559],{4127:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(1987);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5450:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var n=r(9375),o=r(8933),a=(r(1987),r(4127)),i=r(2590),s=["components"],c={},p=void 0,l={unversionedId:"reference/overview",id:"reference/overview",title:"overview",description:"\x3c!---",source:"@site/docs/reference/overview.md",sourceDirName:"reference",slug:"/reference/overview",permalink:"/docs/reference/overview",draft:!1,editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/reference/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Blueprints",permalink:"/docs/reference/blueprints"},next:{title:"Providers",permalink:"/docs/reference/providers"}},u={},m=[{value:"sidebar_position: 1",id:"sidebar_position-1",level:2}],f={toc:m};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sidebar_position-1"},"sidebar_position: 1"),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Our Python API documentation can be found ",(0,a.kt)(i.Z,{target:null,to:"pathname:///python_api/mephisto.html",mdxType:"Link"},"here"),"."),(0,a.kt)("p",null,"Other sections of the documentation may soon be auto-generated."),(0,a.kt)("p",null,"In the meanwhile, you may find reference documentation in the following locations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/mephisto-task"},(0,a.kt)("inlineCode",{parentName:"a"},"mephisto-task"))," - This package provides two hooks to faciliate React-based front-end development for Mephisto tasks. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"useMephistoTask")," for simple, static tasks or ",(0,a.kt)("inlineCode",{parentName:"li"},"useMephistoLiveTask")," for multi-turn, socket-based tasks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/mephisto-worker-addons"},(0,a.kt)("inlineCode",{parentName:"a"},"mephisto-worker-addons"))," - This package provides the tips and feedback components to allow for collection of tips and feedback from workers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/bootstrap-chat"},(0,a.kt)("inlineCode",{parentName:"a"},"bootstrap-chat")),"A set of UI components based on Bootstrap v3 for facilitating chat-based tasks for Mephisto."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/annotation-toolkit"},(0,a.kt)("inlineCode",{parentName:"a"},"annotation-toolkit")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"@annotated"))," - This package helps users to build out review & annotation tooling for their research tasks. ",(0,a.kt)("inlineCode",{parentName:"li"},"annotation-toolkit")," has been deprecated in favor of ",(0,a.kt)("inlineCode",{parentName:"li"},"@annotated"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/cra-template-mephisto-review"},(0,a.kt)("inlineCode",{parentName:"a"},"cra-template-mephisto-review"))," - A customizable base template for creating data exploration interfaces with first-class support for the ",(0,a.kt)("inlineCode",{parentName:"li"},"mephisto review")," command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Mephisto/tree/main/packages/mephisto-review-hook"},(0,a.kt)("inlineCode",{parentName:"a"},"mephisto-review-hook"))," - TODO")))}h.isMDXComponent=!0}}]);