"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7299],{4127:function(t,e,i){i.d(e,{Zo:function(){return c},kt:function(){return h}});var a=i(1987);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,a,n=function(t,e){if(null==t)return{};var i,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)i=o[a],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)i=o[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var l=a.createContext({}),u=function(t){var e=a.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},f="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var i=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),f=u(i),p=n,h=f["".concat(l,".").concat(p)]||f[p]||d[p]||o;return i?a.createElement(h,r(r({ref:e},c),{},{components:i})):a.createElement(h,r({ref:e},c))}));function h(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=i.length,r=new Array(o);r[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[f]="string"==typeof t?t:n,r[1]=s;for(var u=2;u<o;u++)r[u]=i[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},5329:function(t,e,i){i.r(e),i.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var a=i(9375),n=i(8933),o=(i(1987),i(4127)),r=["components"],s={sidebar_position:1},l="Using qualifications to improve worker quality",u={unversionedId:"guides/how_to_use/worker_quality/common_qualification_flows",id:"guides/how_to_use/worker_quality/common_qualification_flows",title:"Using qualifications to improve worker quality",description:"Qualification control is a powerful component of Mephisto, allowing you to filter out workers with both manual and automatic controls. Within this are typical allowlists and blocklists, setting up value-based qualifications, making automatic qualifications for onboarding, and also utilizing the qualifications that various crowdsourcing providers have to offer. This document seeks to describe some common use cases for qualifications, and how we currently go about using them.",source:"@site/docs/guides/how_to_use/worker_quality/common_qualification_flows.md",sourceDirName:"guides/how_to_use/worker_quality",slug:"/guides/how_to_use/worker_quality/common_qualification_flows",permalink:"/docs/guides/how_to_use/worker_quality/common_qualification_flows",draft:!1,editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/how_to_use/worker_quality/common_qualification_flows.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guides",previous:{title:"Adding Feedback",permalink:"/docs/guides/how_to_use/worker_experience/feedback"},next:{title:"Teach potential workers with Onboarding",permalink:"/docs/guides/how_to_use/worker_quality/using_onboarding"}},c={},f=[{value:"Blocking qualifications",id:"blocking-qualifications",level:3},{value:"Onboarding qualifications",id:"onboarding-qualifications",level:3},{value:"Allowlists and Blocklists",id:"allowlists-and-blocklists",level:3},{value:"Adding custom qualifications to SharedTaskState",id:"adding-custom-qualifications-to-sharedtaskstate",level:3},{value:"What if I want to block a worker that hasn&#39;t connected before?",id:"what-if-i-want-to-block-a-worker-that-hasnt-connected-before",level:3},{value:"What if I want to use qualifications only set by a provider?",id:"what-if-i-want-to-use-qualifications-only-set-by-a-provider",level:3}],d={toc:f};function p(t){var e=t.components,i=(0,n.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-qualifications-to-improve-worker-quality"},"Using qualifications to improve worker quality"),(0,o.kt)("p",null,"Qualification control is a powerful component of Mephisto, allowing you to filter out workers with both manual and automatic controls. Within this are typical allowlists and blocklists, setting up value-based qualifications, making automatic qualifications for onboarding, and also utilizing the qualifications that various crowdsourcing providers have to offer. This document seeks to describe some common use cases for qualifications, and how we currently go about using them."),(0,o.kt)("h3",{id:"blocking-qualifications"},"Blocking qualifications"),(0,o.kt)("p",null,"When you set a ",(0,o.kt)("inlineCode",{parentName:"p"},"block_qualification")," during a launch, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker.grant_qualification(<block_qualification>)")," will prevent that worker from working on any tasks that you have set the same ",(0,o.kt)("inlineCode",{parentName:"p"},"block_qualification")," for. You can use this to set up blocklists for specific tasks, or for groups of tasks."),(0,o.kt)("h3",{id:"onboarding-qualifications"},"Onboarding qualifications"),(0,o.kt)("p",null,"Mephisto has an automatic setup for assigning workers qualifications for particular tasks that they've worked on, such that it's possible to specify a qualification that a worker can be granted on the first time they take out a particular task. This qualification is given the name ",(0,o.kt)("inlineCode",{parentName:"p"},"onboarding_qualification"),", and is compatible with any blueprints that have onboarding tasks."),(0,o.kt)("p",null,"When a worker accepts your task for the first time, they will have neither the passing or failing version of the onboarding qualification, and will be put into a test version of the task that determines if they are qualified. Then only those that qualify the first time will be able to continue working on that task."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"onboarding_qualification")," is shared between all task runs that use the same qualification name, and as such you can ensure that a worker need not repeatedly qualify for the same or similar tasks by sharing the same lists."),(0,o.kt)("p",null,"You can also set up tasks that are only available to workers that have passed an existing onboarding (potentially for tasks that don't have their own onboarding), or use the onboarding failure list as a block list for a future task. Both examples are shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from mephisto.abstractions.blueprints.mixins.onboarding_required import OnboardingRequired\nfrom mephisto.data_model.qualification import QUAL_EQUAL, QUAL_NOT_EXIST\nfrom mephisto.utils.qualifications import make_qualification_dict\n\nONBOARDING_QUALIFICATION_NAME = "TEST_ONBOARDING_QUAL_NAME"\n\n# Making a qualification that requires a worker has \n# passed an onboarding from a different task\nshared_state.qualifications = [\n    make_qualification_dict(\n        ONBOARDING_QUALIFICATION_NAME,\n        QUAL_EQUAL,\n        1,\n    )\n]\n\n# Making a qualification that requires that a worker \n# has not failed a particular onboarding from a different task\nshared_state.qualifications = [\n    make_qualification_dict(\n        OnboardingRequired.get_failed_qual(ONBOARDING_QUALIFICATION_NAME),\n        QUAL_NOT_EXIST,\n        None,\n    )\n]\n')),(0,o.kt)("h3",{id:"allowlists-and-blocklists"},"Allowlists and Blocklists"),(0,o.kt)("p",null,"Similarly to how the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"block_qualification")," works, it's possible to add additional qualifications to ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker"),"s by granting workers qualifications and making their existence exclusive or inclusive. This is accomplished by adding the qualifications to your ",(0,o.kt)("inlineCode",{parentName:"p"},"SharedTaskState"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from mephisto.data_model.qualification import QUAL_NOT_EXIST\nfrom mephisto.utils.qualifications import make_qualification_dict\n\n# Qualifications\nALLOWLIST_QUALIFICATION = "some_allowlist_qual"\nBLOCKLIST_QUALIFICATION = "some_blocklist_qual"\n\n# ... potentially in some other script\nw = unit.get_assigned_agent().get_worker()\n# worker did well\nw.grant_qualfication(ALLOWLIST_QUALIFICATION)\n# worker did not do well\nw.grant_qualification(BLOCKLIST_QUALIFICATION)\n\n# ... when launching a task\nshared_state.qualifications = [\n    make_qualification_dict(\n        ALLOWLIST_QUALIFICATION,\n        QUAL_EXISTS,\n        None,\n    ),\n    make_qualification_dict(\n        BLOCKLIST_QUALIFICATION,\n        QUAL_NOT_EXISTS,\n        None,\n    ),\n]\n')),(0,o.kt)("h3",{id:"adding-custom-qualifications-to-sharedtaskstate"},"Adding custom qualifications to SharedTaskState"),(0,o.kt)("p",null,"You should be able to specify a qualification in Mephisto using the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from mephisto.utils.qualifications import find_or_create_qualification\n\nfind_or_create_qualification(db, "MY_QUALIFICATION_NAME")\n')),(0,o.kt)("p",null,"This will create a local Mephisto registration for the given qualification by name. Later on if you try to use this qualification with a crowd provider (like MTurk), it'll go through the process of making sure it's registered with them properly for you. So then later on you can do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from mephisto.utils.qualifications import make_qualification_dict\n...\nshared_state.qualifications = [\n    make_qualification_dict(\n        "MY_QUALIFICATION_NAME", QUAL_COMPARATOR, QUAL_VALUE\n    )\n]\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"QUAL_COMPARATOR")," is any of the comparators available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Mephisto/blob/9ca7534696eeab9ddb8ead06b110125b91789baf/mephisto/data_model/qualification.py#L21-L30"},"here")," in the Qualification module and ",(0,o.kt)("inlineCode",{parentName:"p"},"QUAL_VALUE")," is the desired value of that qualification (must be ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"QUAL_EXISTS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"QUAL_NOT_EXIST"),")."),(0,o.kt)("p",null,"You can directly grant that qualification to mephisto ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker"),"'s using ",(0,o.kt)("inlineCode",{parentName:"p"},'Worker.grant_qualification("QUALIFICATION_NAME", qualification_value)'),"."),(0,o.kt)("h3",{id:"what-if-i-want-to-block-a-worker-that-hasnt-connected-before"},"What if I want to block a worker that hasn't connected before?"),(0,o.kt)("p",null,"For this you'll want to use the interface that a ",(0,o.kt)("inlineCode",{parentName:"p"},"CrowdProvider")," has set up to do the granting process directly. An example for this can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"abstractions.providers.mturk.utils.script_utils"),". "),(0,o.kt)("p",null,"Note, while you're able to grant these qualifications to a worker that isn't tracked by Mephisto, it will not be possible for Mephisto to help in bookkeeping qualifications granted to workers in this manner."),(0,o.kt)("h3",{id:"what-if-i-want-to-use-qualifications-only-set-by-a-provider"},"What if I want to use qualifications only set by a provider?"),(0,o.kt)("p",null,"For the special case of provider-specific qualifications, ",(0,o.kt)("inlineCode",{parentName:"p"},"SharedTaskState")," has fields for ",(0,o.kt)("inlineCode",{parentName:"p"},"<provider>_specific_qualifications")," wherein you can put qualifications in the expected format for that crowd provider. For instance, you can do the following for using an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_QualificationRequirementDataStructureArticle.html#ApiReference_QualificationType-IDs"},"MTurk-specific qualification")," on a task:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'shared_state = #... initialize a SharedTaskState for your run\n\nshared_state.mturk_specific_qualifications = [\n    {\n         "QualificationTypeId": "00000000000000000040",\n         "Comparator": "GreaterThanOrEqualTo",\n         "IntegerValues": [1000],\n         "ActionsGuarded": "DiscoverPreviewAndAccept",\n    },\n]\n')))}p.isMDXComponent=!0}}]);