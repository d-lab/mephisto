"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9514,1103],{688:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(9703),o=a(5110),l=a(7407),c=a(9767),r=a(1892),i=a(8942),s=a(2131),d=a(8211),m=a(7086);const u=e=>n.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var p=a(8103),b=a(6633),h=a(3876),E=a(3688);const f="menuLinkText_K2hk",g=(e,t)=>"link"===e.type?(0,i.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>g(e,t))),k=(0,n.memo)((function(e){let{items:t,...a}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>n.createElement(v,(0,m.Z)({key:t,item:e},a)))))}));function v(e){let{item:t,...a}=e;return"category"===t.type?0===t.items.length?null:n.createElement(_,(0,m.Z)({item:t},a)):n.createElement(C,(0,m.Z)({item:t},a))}function _(e){let{item:t,onItemClick:a,activePath:o,level:l,...c}=e;const{items:s,label:d,collapsible:u,className:p}=t,b=g(t,o),{collapsed:h,setCollapsed:E,toggleCollapsed:v}=(0,i.uR)({initialState:()=>!!u&&(!b&&t.collapsed)});return function(e){let{isActive:t,collapsed:a,setCollapsed:o}=e;const l=(0,i.D9)(t);(0,n.useEffect)((()=>{t&&!l&&a&&o(!1)}),[t,l,a,o])}({isActive:b,collapsed:h,setCollapsed:E}),n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":h},p)},n.createElement("a",(0,m.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":u,"menu__link--active":u&&b,[f]:!u}),onClick:u?e=>{e.preventDefault(),v()}:void 0,href:u?"#":void 0},c),d),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.createElement(k,{items:s,tabIndex:h?-1:0,onItemClick:a,activePath:o,level:l+1})))}function C(e){let{item:t,onItemClick:a,activePath:o,level:l,...c}=e;const{href:s,label:d,className:u}=t,p=g(t,o);return n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",u),key:d},n.createElement(b.Z,(0,m.Z)({className:(0,r.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:a},c),(0,h.Z)(s)?d:n.createElement("span",null,d,n.createElement(E.Z,null))))}const N="sidebar_eBiS",S="sidebarWithHideableNavbar_L6k0",Z="sidebarHidden_og86",T="sidebarLogo_Ri2H",I="menu_3xqN",M="menuWithAnnouncementBar_l7dP",w="collapseSidebarButton_e7B7",B="collapseSidebarButtonIcon_duUF";function L(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",w),onClick:t},n.createElement(u,{className:B}))}function y(e){let{path:t,sidebar:a,onCollapse:o,isHidden:l}=e;const c=function(){const{isActive:e}=(0,i.nT)(),[t,a]=(0,n.useState)(e);return(0,i.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}(),{navbar:{hideOnScroll:s},hideableSidebar:m}=(0,i.LU)();return n.createElement("div",{className:(0,r.Z)(N,{[S]:s,[Z]:l})},s&&n.createElement(d.Z,{tabIndex:-1,className:T}),n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",I,{[M]:c})},n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(k,{items:a,activePath:t,level:1}))),m&&n.createElement(L,{onClick:o}))}const F=e=>{let{toggleSidebar:t,sidebar:a,path:o}=e;return n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(k,{items:a,activePath:o,onItemClick:()=>t(),level:1}))};function A(e){return n.createElement(i.Cv,{component:F,props:e})}const x=n.memo(y),P=n.memo(A);function R(e){const t=(0,s.Z)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(x,e),o&&n.createElement(P,e))}var H=a(9169),D=a(1103);const W="backToTopButton_3vOb",z="backToTopButtonShow_nFFL";function U(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}const Y=function(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:o,cancelScrollToTop:l}=U();return(0,i.RF)(((e,n)=>{let{scrollY:o}=e;const c=null==n?void 0:n.scrollY;if(!c)return;if(a.current)return void(a.current=!1);const r=o<c;if(r||l(),o<300)t(!1);else if(r){const e=document.documentElement.scrollHeight;o+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.kM.common.backToTopButton,W,{[z]:e}),type:"button",onClick:()=>o()})};var q=a(7314);const K={docPage:"docPage_-38h",docMainContainer:"docMainContainer_g-Ma",docSidebarContainer:"docSidebarContainer_Eefv",docMainContainerEnhanced:"docMainContainerEnhanced_nXck",docSidebarContainerHidden:"docSidebarContainerHidden_DNjg",collapsedDocSidebar:"collapsedDocSidebar_Rb5l",expandSidebarButtonIcon:"expandSidebarButtonIcon_BUdR",docItemWrapperEnhanced:"docItemWrapperEnhanced_l3ff"};var O=a(8761);function X(e){let{currentDocRoute:t,versionMetadata:a,children:l}=e;const{pluginId:s,version:d}=a,m=t.sidebar,b=m?a.docsSidebars[m]:void 0,[h,E]=(0,n.useState)(!1),[f,g]=(0,n.useState)(!1),k=(0,n.useCallback)((()=>{f&&g(!1),E((e=>!e))}),[f]);return n.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:d,tag:(0,i.os)(s,d)}},n.createElement("div",{className:K.docPage},n.createElement(Y,null),b&&n.createElement("aside",{className:(0,r.Z)(K.docSidebarContainer,{[K.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(K.docSidebarContainer)&&h&&g(!0)}},n.createElement(R,{key:m,sidebar:b,path:t.path,onCollapse:k,isHidden:f}),f&&n.createElement("div",{className:K.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:k,onClick:k},n.createElement(u,{className:K.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,r.Z)(K.docMainContainer,{[K.docMainContainerEnhanced]:h||!b})},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",K.docItemWrapper,{[K.docItemWrapperEnhanced]:h})},n.createElement(o.Zo,{components:H.Z},l)))))}const j=function(e){const{route:{routes:t},versionMetadata:a,location:o}=e,c=t.find((e=>(0,q.LX)(o.pathname,e)));return c?n.createElement(n.Fragment,null,n.createElement(O.Z,null,n.createElement("html",{className:a.className})),n.createElement(X,{currentDocRoute:c,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a}))):n.createElement(D.default,null)}},1103:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(9703),o=a(9767),l=a(8103);const c=function(){return n.createElement(o.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);