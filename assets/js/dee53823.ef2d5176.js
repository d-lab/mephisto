"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4284],{4127:function(e,i,t){t.d(i,{Zo:function(){return p},kt:function(){return f}});var n=t(1987);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},p=function(e){var i=u(e.components);return n.createElement(s.Provider,{value:i},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},d=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?n.createElement(f,a(a({ref:i},p),{},{components:t})):n.createElement(f,a({ref:i},p))}));function f(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var s in i)hasOwnProperty.call(i,s)&&(o[s]=i[s]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6252:function(e,i,t){t.r(i),t.d(i,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=t(9375),r=t(8933),l=(t(1987),t(4127)),a=["components"],o={sidebar_position:3},s="Participant Eligibility Requirements",u={unversionedId:"guides/how_to_use/providers/prolific/eligibility_requirements",id:"guides/how_to_use/providers/prolific/eligibility_requirements",title:"Participant Eligibility Requirements",description:"Prolific offers Eligibility Requirements to limit access to your Task (or Study, as Prolific calls it)",source:"@site/docs/guides/how_to_use/providers/prolific/eligibility_requirements.md",sourceDirName:"guides/how_to_use/providers/prolific",slug:"/guides/how_to_use/providers/prolific/eligibility_requirements",permalink:"/docs/guides/how_to_use/providers/prolific/eligibility_requirements",draft:!1,editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/how_to_use/providers/prolific/eligibility_requirements.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guides",previous:{title:"Steps of running a Study",permalink:"/docs/guides/how_to_use/providers/prolific/running_study"},next:{title:"Prolific API oddities",permalink:"/docs/guides/how_to_use/providers/prolific/prolific_api_oddities"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Usage in shared state",id:"usage-in-shared-state",level:3},{value:"Usage in task config",id:"usage-in-task-config",level:3},{value:"Supported Eligibility Requirements",id:"supported-eligibility-requirements",level:2},{value:"Block and Allow lists",id:"block-and-allow-lists",level:2}],m={toc:c};function d(e){var i=e.components,t=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"participant-eligibility-requirements"},"Participant Eligibility Requirements"),(0,l.kt)("p",null,"Prolific offers Eligibility Requirements to limit access to your Task (or Study, as Prolific calls it)\nto fitting Participants only.\nThese are similar to Mephisto's qualifications, except they exist in Prolific's cloud, not your local Mephisto DB.\nThis can be helpful in the beginning, when you're still building a pool of locally saved known workers."),(0,l.kt)("p",null,"As a technicality, filtering by Mephisto's Qualifications in Prolific is accomplished\nvia creating a disposable (and dynamically updated) Eligible Participant Group (EGP) on Prolific, that\ncontains all known workers satisfying Mephisto qualifications.\nMephisto automatically generates and passes that EGP id to Prolific\n(as a ",(0,l.kt)("inlineCode",{parentName:"p"},"ParticipantGroupEligibilityRequirement")," Study requirement),\nand when Task is complete, Mephisto deletes that EPG."),(0,l.kt)("p",null,"When usingseveral Eligibility Requirements together (e.g.\n",(0,l.kt)("inlineCode",{parentName:"p"},"CustomBlacklistEligibilityRequirement"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomWhitelistEligibilityRequirement"),", and\nMephisto qualifications), then Participants will be selected by\nintersecting all of these requirements."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"You can specify Prolific qualifications via Task config file, or directly in TaskRun shared state."),(0,l.kt)("h3",{id:"usage-in-shared-state"},"Usage in shared state"),(0,l.kt)("p",null,"Shared state can handle Prolific-supported qualifications. Example in ",(0,l.kt)("inlineCode",{parentName:"p"},"run_task.py"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'shared_state.prolific_specific_qualifications = [\n    {\n        "name": "AgeRangeEligibilityRequirement",\n        "min_age": 18,\n        "max_age": 100,\n    },\n]\n\nshared_state.qualifications = [\n    make_qualification_dict("sample_qual_name", QUAL_GREATER_EQUAL, 1),\n]\n')),(0,l.kt)("h3",{id:"usage-in-task-config"},"Usage in task config"),(0,l.kt)("p",null,"Prolific-supported requirements can be specified in Hydra YAML Task config file,\nunder the key ",(0,l.kt)("inlineCode",{parentName:"p"},"prolific_eligibility_requirements"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'mephisto:\n  provider:\n    prolific_eligibility_requirements:\n      - name: "AgeRangeEligibilityRequirement"\n        min_age: 10\n        max_age: 20\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"supported-eligibility-requirements"},"Supported Eligibility Requirements"),(0,l.kt)("p",null,"Mephisto currently supports the following Eligibility Requirements\nunder ",(0,l.kt)("inlineCode",{parentName:"p"},"SharedState.prolific_specific_qualifications"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'[\n    {\n        "name": "AgeRangeEligibilityRequirement",\n        "min_age": "<value>",\n        "max_age": "<value>",\n    },\n    {\n        "name": "ApprovalNumbersEligibilityRequirement",\n        "minimum_approvals": "<value>",\n        "maximum_approvals": "<value>",\n    },\n    {\n        "name": "ApprovalRateEligibilityRequirement",\n        "minimum_approval_rate": "<value>",\n        "maximum_approval_rate": "<value>",\n    },\n    {\n        "name": "CustomBlacklistEligibilityRequirement",\n        "black_list": "<value>",\n    },\n    {\n        "name": "CustomWhitelistEligibilityRequirement",\n        "white_list": "<value>",\n    },\n    {\n        "name": "JoinedBeforeEligibilityRequirement",\n        "joined_before": "<value>",\n    },\n    {\n        "name": "ParticipantGroupEligibilityRequirement",\n        "id": "<value>",\n    },\n]\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"NOTE: this list (last updated 2023.07.11) is derived from list of available classes\nin ",(0,l.kt)("inlineCode",{parentName:"em"},"mephisto/abstractions/providers/prolific/api/eligibility_requirement_classes"),".")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"block-and-allow-lists"},"Block and Allow lists"),(0,l.kt)("p",null,"Prolific provides a way to limit Study participants based on their IDs\nvia EGPs called ",(0,l.kt)("inlineCode",{parentName:"p"},"prolific_allow_list_group_name"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"prolific_block_list_group_name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Manual allow list is applied via ",(0,l.kt)("inlineCode",{parentName:"li"},"CustomWhitelistEligibilityRequirement"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This can be useful when testing your Task, and limiting its visibility to only a few test workers"))),(0,l.kt)("li",{parentName:"ul"},"Manual block list is applied via ",(0,l.kt)("inlineCode",{parentName:"li"},"CustomBlacklistEligibilityRequirement"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- We do not recommend using manual block list directly, because we auto-compose it during every TaskRun,\n")),"based on ",(0,l.kt)("inlineCode",{parentName:"li"},"is_blocked")," column in the local datastore.")))}d.isMDXComponent=!0}}]);