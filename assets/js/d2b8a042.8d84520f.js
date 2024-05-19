"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9555],{4127:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(1987);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6860:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(9375),o=r(8933),a=(r(1987),r(4127)),i=["components"],l={sidebar_position:3},s="Custom conflict resolver",c={unversionedId:"guides/how_to_use/data_porter/custom_conflict_resolver",id:"guides/how_to_use/data_porter/custom_conflict_resolver",title:"Custom conflict resolver",description:"When importing dump data into local DB, some rows may refer to the same object",source:"@site/docs/guides/how_to_use/data_porter/custom_conflict_resolver.md",sourceDirName:"guides/how_to_use/data_porter",slug:"/guides/how_to_use/data_porter/custom_conflict_resolver",permalink:"/docs/guides/how_to_use/data_porter/custom_conflict_resolver",draft:!1,editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/how_to_use/data_porter/custom_conflict_resolver.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guides",previous:{title:"Reference",permalink:"/docs/guides/how_to_use/data_porter/reference"},next:{title:"Contributing to Mephisto",permalink:"/docs/guides/how_to_contribute/getting_started"}},p={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-conflict-resolver"},"Custom conflict resolver"),(0,a.kt)("p",null,'When importing dump data into local DB, some rows may refer to the same object\n(e.g. two Task rows with hte same value of "name" column). This class contains default logic\nto resolve such merging conflicts (implemented for all currently present DBs).'),(0,a.kt)("p",null,"To change this default behavior, you can write your own coflict resolver class:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new Python module next to this module (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"my_conflict_resolver"),")")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This module must contain a class (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"MyMergeConflictResolver"),")\nthat inherits from either ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseMergeConflictResolver"),"\nor default resolver ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultMergeConflictResolver")," (also in this directory)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from .base_merge_conflict_resolver import BaseMergeConflictResolver\n\nclass CustomMergeConflictResolver(BaseMergeConflictResolver):\n    default_strategy_name = "..."\n    strategies_config = {...}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To use this newly created class, specify its name in import command:\n",(0,a.kt)("inlineCode",{parentName:"p"},"mephisto db import ... --conflict-resolver MyMergeConflictResolver")))),(0,a.kt)("p",null,"The easiest place to start customization is to modify ",(0,a.kt)("inlineCode",{parentName:"p"},"strategies_config")," property,\nand perhaps ",(0,a.kt)("inlineCode",{parentName:"p"},"default_strategy_name")," value (see ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultMergeConflictResolver")," as an example)."),(0,a.kt)("p",null,"NOTE: All available providers must be present in ",(0,a.kt)("inlineCode",{parentName:"p"},"strategies_config"),".\nTable names (under each provider key) are optional, and if missing, ",(0,a.kt)("inlineCode",{parentName:"p"},"default_strategy_name"),"\nwill be used for all conflicts related to this table."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"There is an example of a working custom conflict resolver in module ",(0,a.kt)("inlineCode",{parentName:"li"},"mephisto/tools/db_data_porter/conflict_resolvers/example_merge_conflict_resolver.py"),". You can launch it like this:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mephisto db import ... --conflict-resolver ExampleMergeConflictResolver")))}f.isMDXComponent=!0}}]);