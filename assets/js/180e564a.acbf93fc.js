"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[113],{4127:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return m}});var n=i(1987);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(i),f=r,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return i?n.createElement(m,a(a({ref:t},d),{},{components:i})):n.createElement(m,a({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},3550:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=i(9375),r=i(8933),o=(i(1987),i(4127)),a=["components"],l={sidebar_position:4},s="Prolific API oddities",u={unversionedId:"guides/how_to_use/providers/prolific/prolific_api_oddities",id:"guides/how_to_use/providers/prolific/prolific_api_oddities",title:"Prolific API oddities",description:"Last updated 2023.07.08",source:"@site/docs/guides/how_to_use/providers/prolific/prolific_api_oddities.md",sourceDirName:"guides/how_to_use/providers/prolific",slug:"/guides/how_to_use/providers/prolific/prolific_api_oddities",permalink:"/docs/guides/how_to_use/providers/prolific/prolific_api_oddities",draft:!1,editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/how_to_use/providers/prolific/prolific_api_oddities.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guides",previous:{title:"Participant Eligibility Requirements",permalink:"/docs/guides/how_to_use/providers/prolific/eligibility_requirements"},next:{title:"Prolific Python SDK",permalink:"/docs/guides/how_to_use/providers/prolific/prolific_python_sdk"}},d={},p=[{value:"Statuses",id:"statuses",level:2},{value:"Studies/Submissions",id:"studiessubmissions",level:2},{value:"Groups",id:"groups",level:2}],c={toc:p};function f(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prolific-api-oddities"},"Prolific API oddities"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Last updated 2023.07.08")," ",(0,o.kt)("br",null),"\n",(0,o.kt)("em",{parentName:"p"},"Prolific doesn't publish API releases and release notes, so these could've already been fixed")),(0,o.kt)("h2",{id:"statuses"},"Statuses"),(0,o.kt)("p",null,"Prolific lacks several important statuses for Studies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EXPIRED")," status: we simulate it with adding a special suffix to ",(0,o.kt)("inlineCode",{parentName:"li"},"Study.internal_name"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"STOPPED")," status: whether Study has naturally completed,\nor it was manually stopped via Prolific UI, in both cases it will transition to ",(0,o.kt)("inlineCode",{parentName:"li"},"AWAITING_REVIEW"),"\nstatus."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FINISHED")," status: all ",(0,o.kt)("inlineCode",{parentName:"li"},"COMPLETED")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"AWAITING_REVIEW")," studies in Prolific are not really\ncompleted - they can still be reactivated by increasing their ",(0,o.kt)("inlineCode",{parentName:"li"},"total_available_places")," parameter.")),(0,o.kt)("p",null,"You may also bump against some unobvious behaviours of Prolific Studies:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We cannot stop Study via Prolific UI when ",(0,o.kt)("inlineCode",{parentName:"li"},"max_num_concurrent_units")," is specified,\nbecause Mephisto will keep on launching additional Units (and thus reactivating the Study)\nevery time Study falls into ",(0,o.kt)("inlineCode",{parentName:"li"},"AWAITING_REVIEW")," status, until all created Units have been launched."),(0,o.kt)("li",{parentName:"ol"},"When we use ",(0,o.kt)("inlineCode",{parentName:"li"},"max_num_concurrent_units"),", every time available places drop to zero for a moment,\nProlific will automatically transition Study into ",(0,o.kt)("inlineCode",{parentName:"li"},"AWAITING_REVIEW")," status,\nas if the Study has already finished."),(0,o.kt)("li",{parentName:"ol"},"Every time Prolific is updating status of a Study or Submission, it briefly puts that object\nstatus to an undocumented ",(0,o.kt)("inlineCode",{parentName:"li"},"PROCESSING")," status.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"studiessubmissions"},"Studies/Submissions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When Prolific Study is created with ",(0,o.kt)("inlineCode",{parentName:"li"},"ParticipantGroupEligibilityRequirement"),",\nProlific UI doesn't show it under ",(0,o.kt)("inlineCode",{parentName:"li"},"Study.eligibility_requirements")," - it's only\nvisible via an API request. (And ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," in that Eligibility Requirement will be\nnot the EPG ID, but rather some internal ID from Prolific DB.)"),(0,o.kt)("li",{parentName:"ol"},"After Study has been publiched, Prolific only allows updating ",(0,o.kt)("inlineCode",{parentName:"li"},"internal_name")," and\n",(0,o.kt)("inlineCode",{parentName:"li"},"total_available_places")," (all other fields are read-only, including Allow List and Block List).\nThis is the reason we're using disposable EPGs for every Study."),(0,o.kt)("li",{parentName:"ol"},"Prolific only allows increasing (but not decreasing) ",(0,o.kt)("inlineCode",{parentName:"li"},"total_available_places")),(0,o.kt)("li",{parentName:"ol"},"The way to set Submission as completed is not by issuing an API call, but by redirecting\na Participant in their browser to a page with a specific URL that includes a Study completion code."),(0,o.kt)("li",{parentName:"ol"},"Prolific does not allow to specify custom Study completion code during creation of a Study,\ntherefore we have to generate our own completion codes based on Study's ID and\nupdate it in Prolific when creating a Study.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"groups"},"Groups"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prolific caches ",(0,o.kt)("inlineCode",{parentName:"li"},"eligible_participant_count")," for Groups (so it always shows the initial value,\ndespite any changes of Particpants in the Group)"),(0,o.kt)("li",{parentName:"ol"},"Deletion of Participant Groups is soft on Prolific side, and their API response doesn't\nindicate that a Group has been soft-deleted (as if it's still active)")))}f.isMDXComponent=!0}}]);