"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6628],{5110:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(9703);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=o,g=f["".concat(s,".").concat(p)]||f[p]||c[p]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6633:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(9703),o=n(7007),i=n(2532),a=n(3876),l=n(6859);const s=(0,r.createContext)({collectLink:()=>{}});var u=n(978),d=n(9234);const c=function(e){let{isNavLink:t,to:n,href:c,activeClassName:f,isActive:p,"data-noBrokenLinkCheck":g,autoAddBaseUrl:h=!0,...m}=e;var k;const{siteConfig:{trailingSlash:_,baseUrl:w}}=(0,i.Z)(),{withBaseUrl:y}=(0,u.C)(),v=(0,r.useContext)(s),b=n||c,N=(0,a.Z)(b),C=null==b?void 0:b.replace("pathname://","");let O=void 0!==C?(q=C,h&&(e=>e.startsWith("/"))(q)?y(q):q):void 0;var q;O&&N&&(O=(0,d.applyTrailingSlash)(O,{trailingSlash:_,baseUrl:w}));const U=(0,r.useRef)(!1),x=t?o.OL:o.rU,S=l.Z.canUseIntersectionObserver,T=(0,r.useRef)();(0,r.useEffect)((()=>(!S&&N&&null!=O&&window.docusaurus.prefetch(O),()=>{S&&T.current&&T.current.disconnect()})),[T,O,S,N]);const j=null!==(k=null==O?void 0:O.startsWith("#"))&&void 0!==k&&k,P=!O||!N||j;return O&&N&&!j&&!g&&v.collectLink(O),P?r.createElement("a",{href:O,...b&&!N&&{target:"_blank",rel:"noopener noreferrer"},...m}):r.createElement(x,{...m,onMouseEnter:()=>{U.current||null==O||(window.docusaurus.preload(O),U.current=!0)},innerRef:e=>{var t,n;S&&e&&N&&(t=e,n=()=>{null!=O&&window.docusaurus.prefetch(O)},T.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(t),T.current.disconnect(),n())}))})),T.current.observe(t))},to:O||"",...t&&{isActive:p,activeClassName:f}})}},3876:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{Z:()=>o,b:()=>r})},978:(e,t,n)=>{n.d(t,{C:()=>i,Z:()=>a});var r=n(2532),o=n(3876);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:i=!1,absolute:a=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(i)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+l:l}(t,e,n,r)}}function a(e,t){void 0===t&&(t={});const{withBaseUrl:n}=i();return n(e,t)}},7294:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(o,i)}},9234:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(7294);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(325);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},325:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6412:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7086),o=(n(9703),n(5110)),i=n(6633);const a={sidebar_position:4},l="Check against standards with Gold Labels",s={unversionedId:"guides/how_to_use/worker_quality/using_golds",id:"guides/how_to_use/worker_quality/using_golds",isDocsHomePage:!1,title:"Check against standards with Gold Labels",description:"Gold labeling is commonly used for ensuring worker quality over the full duration of a task. It's valuable as an automated measure to track the consistency your workers. For this Mephisto provides the UseGoldUnit blueprint mixin.",source:"@site/docs/guides/how_to_use/worker_quality/using_golds.md",sourceDirName:"guides/how_to_use/worker_quality",slug:"/guides/how_to_use/worker_quality/using_golds",permalink:"/docs/guides/how_to_use/worker_quality/using_golds",editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/how_to_use/worker_quality/using_golds.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guides",previous:{title:"Check worker quality with Screening Units",permalink:"/docs/guides/how_to_use/worker_quality/using_screen_units"},next:{title:"Other methods for quality control",permalink:"/docs/guides/how_to_use/worker_quality/other_methods"}},u=[{value:"Basic configuration",id:"basic-configuration",children:[{value:"<code>get_gold_for_worker</code>",id:"get_gold_for_worker",children:[],level:3}],level:2},{value:"Advanced configuration",id:"advanced-configuration",children:[{value:"<code>worker_needs_gold</code>",id:"worker_needs_gold",children:[],level:3},{value:"<code>worker_qualifies</code>",id:"worker_qualifies",children:[],level:3}],level:2},{value:"Additional Questions?",id:"additional-questions",children:[],level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-against-standards-with-gold-labels"},"Check against standards with Gold Labels"),(0,o.kt)("p",null,"Gold labeling is commonly used for ensuring worker quality over the full duration of a task. It's valuable as an automated measure to track the consistency your workers. For this Mephisto provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"UseGoldUnit")," blueprint mixin. "),(0,o.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,o.kt)("p",null,"There are a few primary configuration parts for using gold units:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hydra args",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blueprint.gold_qualfification_base"),": A string representing the base qualification that required qualifications keeping track of success will be built from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blueprint.use_golds"),": Set to ",(0,o.kt)("inlineCode",{parentName:"li"},"True")," to enable the feature."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"min_golds"),": An int for the minimum number of golds a worker needs to complete for the first time before receiving real units."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_incorrect_golds"),": An int for the number of golds a worker can get incorrect before being disqualified from this task."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GoldUnitSharedState"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_gold_for_worker"),": A factory that generates input data for a gold unit for a worker. Explained in-depth below.")))),(0,o.kt)("p",null,"With these set up, you'll also need to provide additional arguments to your ",(0,o.kt)("inlineCode",{parentName:"p"},"SharedTaskState")," to register the required qualifications and the gold validation function. For example, your run script main may look something like like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"...\ngold_data: List[Dict[str, Any]] = ...\ngold_ans = ...\n\ndef validate_gold_unit(unit: \"Unit\"):\n    agent = unit.get_assigned_agent()\n    data = agent.state.get_data()\n    return data['outputs']['val'] == gold_ans[data['inputs']['ans_key']]\n\nshared_state = SharedTaskState(\n    ...\n    get_gold_for_worker=get_gold_factory(gold_data)\n    on_unit_submitted=UseGoldUnit.create_validation_function(cfg.mephisto, validate_gold_unit)\n)\nshared_state.qualifications += UseGoldUnit.get_mixin_qualifications(cfg.mephisto, shared_state)\n...\n")),(0,o.kt)("h3",{id:"get_gold_for_worker"},(0,o.kt)("inlineCode",{parentName:"h3"},"get_gold_for_worker")),(0,o.kt)("p",null,"The core functionality to provide to your ",(0,o.kt)("inlineCode",{parentName:"p"},"SharedTaskState")," to enable gold units is a ",(0,o.kt)("inlineCode",{parentName:"p"},"get_gold_for_worker")," factory function which produces the input data that a worker should receive when Mephisto is giving them a gold unit."),(0,o.kt)("p",null,"We provide a helper ",(0,o.kt)("inlineCode",{parentName:"p"},"get_gold_factory")," method which takes in a list of ",(0,o.kt)("em",{parentName:"p"},"all")," possible gold data inputs, and returns a factory that randomly selects a gold not yet completed by the given worker. This should be sufficient for most cases, though you can write your own factory if you want to be even more specific about how you assign golds."),(0,o.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,o.kt)("p",null,"There are additional arguments that you can use for more advanced configuration of gold units:\nThere are a few primary configuration parts for using gold units:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GoldUnitSharedState"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"worker_needs_gold"),": A function that, given the counts of completed, correct, and incorrect golds for a given worker, as well as the minimum number of required golds, returns whether or not the worker should be shown a gold task. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"worker_qualifies"),": A function that, given the counts of completed, correct, and incorrect golds for a given worker, as well as the maximum number of incorrect, returns whether or not the worker is eligible to work on the task.")))),(0,o.kt)("h3",{id:"worker_needs_gold"},(0,o.kt)("inlineCode",{parentName:"h3"},"worker_needs_gold")),(0,o.kt)("p",null,"By default we use a logrithmic function that decreases the frequency of gold units as the worker successfully completes them, starting at the ",(0,o.kt)("inlineCode",{parentName:"p"},"min_golds")," value of golds, then 1 gold in the first 10 units, ~%5 golds at 100 units, and ~1% golds at 1000 units."),(0,o.kt)("p",null,"If you want to do something more complicated, or use a different rate, you can override this for a custom scaling rate."),(0,o.kt)("h3",{id:"worker_qualifies"},(0,o.kt)("inlineCode",{parentName:"h3"},"worker_qualifies")),(0,o.kt)("p",null,"By default we use a strikes system, where if the worker exceeds the ",(0,o.kt)("inlineCode",{parentName:"p"},"max_incorrect_golds")," value we prevent them from working on more tasks. Depending on your acceptable level of noise (either in your gold labels, interpretation, or output dataset), you may instead want to base this on a fraction of incorrect golds to golds completed so far."),(0,o.kt)("h2",{id:"additional-questions"},"Additional Questions?"),(0,o.kt)("p",null,"You can find more information on using gold units in the reference documentation for ",(0,o.kt)(i.Z,{target:null,to:"pathname:///python_api/mephisto/abstractions/blueprints/mixins/use_gold_unit.html",mdxType:"Link"},(0,o.kt)("inlineCode",{parentName:"p"},"UseGoldUnit")),"."))}c.isMDXComponent=!0}}]);