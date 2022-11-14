"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6103],{3681:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(9703),n=a(1892),r=a(9767),s=a(6633);const i="sidebar_q7nN",m="sidebarItemTitle_N5ka",o="sidebarItemList_WirO",c="sidebarItem_nhKf",d="sidebarItemLink_VRco",g="sidebarItemLinkActive_GY1L";var p=a(8103);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}const v=function(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},3816:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(9703),n=a(1892),r=a(5110),s=a(8103),i=a(6633),m=a(978),o=a(8942),c=a(9169),d=a(5688);const g="blogPostTitle_VuVj",p="blogPostData_7Eq1",u="blogPostDetailsFull_Z40b";var v=a(2544);const h="image_gkjb";const E=function(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:s}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:h,src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_eIAM";function _(e){let{authors:t,assets:a}=e;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>{var r;return l.createElement("div",{className:(0,n.Z)("col col--6",b),key:t},l.createElement(E,{author:{...e,imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL}}))})))}const N=function(e){var t;const a=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:h}=(0,m.C)(),{children:E,frontMatter:b,assets:N,metadata:f,truncated:k,isBlogPostPage:Z=!1}=e,{date:P,formattedDate:L,permalink:C,tags:w,readingTime:T,title:I,editUrl:y,authors:x}=f,M=null!=(t=N.image)?t:b.image,A=!Z&&k,H=w.length>0;return l.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=Z?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:g,itemProp:"headline"},Z?I:l.createElement(i.Z,{itemProp:"url",to:C},I)),l.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},L),void 0!==T&&l.createElement(l.Fragment,null," \xb7 ",a(T))),l.createElement(_,{authors:x,assets:N}))})(),M&&l.createElement("meta",{itemProp:"image",content:h(M,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:c.Z},E)),(H||k)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[u]:Z})},H&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":A})},l.createElement(v.Z,{tags:w})),Z&&y&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:y})),A&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":H})},l.createElement(i.Z,{to:f.permalink,"aria-label":"Read more about "+I},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},7700:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(9703),n=a(181),r=a(3681),s=a(3816),i=a(8103),m=a(6633);const o=function(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(8942),d=a(9634);const g=function(e){var t;const{content:a,sidebar:i}=e,{frontMatter:m,assets:g,metadata:p}=a,{title:u,description:v,nextItem:h,prevItem:E,date:b,tags:_,authors:N}=p,{hide_table_of_contents:f,keywords:k,toc_min_heading_level:Z,toc_max_heading_level:P}=m,L=null!=(t=g.image)?t:m.image;return l.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:i,toc:!f&&a.toc&&a.toc.length>0?l.createElement(d.Z,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:P}):void 0},l.createElement(n.Z,{title:u,description:v,keywords:k,image:L},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:b}),N.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:N.map((e=>e.url)).filter(Boolean).join(",")}),_.length>0&&l.createElement("meta",{property:"article:tag",content:_.map((e=>e.label)).join(",")})),l.createElement(s.Z,{frontMatter:m,assets:g,metadata:p,isBlogPostPage:!0},l.createElement(a,null)),(h||E)&&l.createElement(o,{nextItem:h,prevItem:E}))}},5688:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(9703),n=a(8103),r=a(7086),s=a(1892);const i="iconEdit_78kM",m=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var o=a(8942);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9634:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7086),n=a(9703),r=a(1892),s=a(6429);const i="tableOfContents_gAAo";const m=function(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},n.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},6429:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7086),n=a(9703),r=a(8942);function s(e){let{toc:t,className:a,linkClassName:l,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function i(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:o,maxHeadingLevel:c,...d}=e;const g=(0,r.LU)(),p=null!=o?o:g.tableOfContents.minHeadingLevel,u=null!=c?c:g.tableOfContents.maxHeadingLevel,v=(0,r.DA)({toc:t,minHeadingLevel:p,maxHeadingLevel:u}),h=(0,n.useMemo)((()=>{if(i&&m)return{linkClassName:i,linkActiveClassName:m,minHeadingLevel:p,maxHeadingLevel:u}}),[i,m,p,u]);return(0,r.Si)(h),n.createElement(s,(0,l.Z)({toc:v,className:a,linkClassName:i},d))}},1217:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9703),n=a(1892),r=a(6633);const s="tag_1XuM",i="tagRegular_x6wH",m="tagWithCount_Jasq";const o=function(e){const{permalink:t,name:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[i]:!o,[m]:o})},a,o&&l.createElement("span",null,o))}},2544:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9703),n=a(1892),r=a(8103),s=a(1217);const i="tags_7jjI",m="tag_n1d8";function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:m},l.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);