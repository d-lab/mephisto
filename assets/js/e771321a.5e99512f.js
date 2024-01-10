"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[469],{4127:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(1987);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5278:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(9375),o=n(8933),a=(n(1987),n(4127)),i=["components"],s={},l=void 0,u={permalink:"/blog/2022/03/22/mephisto-1.0",editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/blog/blog/2022-03-22-mephisto-1.0.md",source:"@site/blog/2022-03-22-mephisto-1.0.md",title:"mephisto-1.0",description:"\x3c!---",date:"2022-03-22T00:00:00.000Z",formattedDate:"March 22, 2022",tags:[],readingTime:2.33,hasTruncateMarker:!1,authors:[],frontMatter:{}},d={authorsImageUrls:[]},p=[{value:"tags: releases",id:"tags-releases",level:2},{value:"What&#39;s new?",id:"whats-new",level:2},{value:"<strong>Live Metrics Dasbhoard</strong>",id:"live-metrics-dasbhoard",level:3},{value:"<strong>Model-in-the-loop</strong>",id:"model-in-the-loop",level:3},{value:"<strong>Reduced boilerplate</strong>",id:"reduced-boilerplate",level:3},{value:"<strong>Validation and Gold units</strong>",id:"validation-and-gold-units",level:3},{value:"<strong>New Docs Website</strong>",id:"new-docs-website",level:3},{value:"<strong>UI Package Updates</strong>",id:"ui-package-updates",level:3},{value:"<strong>IO protocol revamp</strong>",id:"io-protocol-revamp",level:3},{value:"...and more",id:"and-more",level:3}],c={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"slug: mephisto-1.0\ntitle: Announcing Mephisto 1.0\nauthors: ","[core]"),(0,a.kt)("h2",{id:"tags-releases"},"tags: ","[releases]"),(0,a.kt)("p",null,"We are super excited to announce Mephisto 1.0! "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5945).Z,width:"1775",height:"1113"})),(0,a.kt)("h2",{id:"whats-new"},"What's new?"),(0,a.kt)("h3",{id:"live-metrics-dasbhoard"},(0,a.kt)("strong",{parentName:"h3"},"Live Metrics Dasbhoard")),(0,a.kt)("p",null,"Gain insights into your task runs for better observability and debugging. Built upon the rich Prometheus and Grafana ecosystems. To get started, run ",(0,a.kt)("inlineCode",{parentName:"p"},"mephisto metrics install")," using the CLI tool before your next task."),(0,a.kt)("h3",{id:"model-in-the-loop"},(0,a.kt)("strong",{parentName:"h3"},"Model-in-the-loop")),(0,a.kt)("p",null,"We provide an all new ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoteQueryBlueprint")," for tasks to enable model-in-the-loop capabilities via the ability to invoke remote procedures from the front-end to the back-end. Check out the new example we added at ",(0,a.kt)("inlineCode",{parentName:"p"},"/examples/remote_procedure/mnist/"),"."),(0,a.kt)("h3",{id:"reduced-boilerplate"},(0,a.kt)("strong",{parentName:"h3"},"Reduced boilerplate")),(0,a.kt)("p",null,"We've vastly reduced the amount of boilerplate code needed to create a Mephisto run script. In some cases, up to a 30% reduction in lines of code. Our examples have been updated to reflect the new workflow."),(0,a.kt)("h3",{id:"validation-and-gold-units"},(0,a.kt)("strong",{parentName:"h3"},"Validation and Gold units")),(0,a.kt)("p",null,"Improving on our QA functionality, we've introduced validation and gold units. These are launched as additional units during a run to check for worker quality either at the start or throughout the duration of a task. Both are usable by default on Static and RemoteQuery tasks. You can also add these mixins to any Blueprint you write to get this functionality for free."),(0,a.kt)("h3",{id:"new-docs-website"},(0,a.kt)("strong",{parentName:"h3"},"New Docs Website")),(0,a.kt)("p",null,"We're revamped our docs on our brand new docs website. We've added more tutorials, Python API references, and design documentation."),(0,a.kt)("h3",{id:"ui-package-updates"},(0,a.kt)("strong",{parentName:"h3"},"UI Package Updates")),(0,a.kt)("p",null,"We've updated our package management to be cleaner and scale towards the future. This will allow us to provide more templated and sharable components as we work with teams to build new tasks."),(0,a.kt)("h3",{id:"io-protocol-revamp"},(0,a.kt)("strong",{parentName:"h3"},"IO protocol revamp")),(0,a.kt)("p",null,"Mephisto's communication layer has been rebuilt from the ground-up to vastly simplify the client/server interface, improve reliability, reduce the number of messages required, and provide clear error messaging for task developers and workers."),(0,a.kt)("h3",{id:"and-more"},"...and more"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Asyncio Integration + Refactoring"),":\nWe've migrated to an asyncio-based design under-the-hood to prevent threading and locking issues, reduce invalid states, and prepare us for adopting multiprocessing in future releases. This means Mephisto 1.0 now requires Python >= 3.7."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Other Performance Improvements"),": Database indexing, SingletonDB by default, and other minor enhancements should improve run performance and the maximum number of concurrent tasks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Improved Developer Tooling"),": For Mephisto developers and people interested in working on Mephisto, we've built out new tooling to ensure that our releases are automated/tested, scripts to facilitate entering dev mode, and documentation specifically for you. We've also refactored parts of our underlying codebase to make it easier to jump into and work with."),(0,a.kt)("p",null,"To upgrade your existing projects to Mephisto 1.0, ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/upgrade_to_1/guide"},"see our upgrade guide here"),"."))}m.isMDXComponent=!0},5945:function(e,t,n){t.Z=n.p+"assets/images/Mephisto1.0-360a05ab76cb2eb72e39213ac8a78eb6.png"}}]);