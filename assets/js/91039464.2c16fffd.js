"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7356],{5110:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9703);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9789:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7086),a=(n(9703),n(5110));const o={sidebar_position:1},i="10-minute Quickstart",s={unversionedId:"guides/quickstart",id:"guides/quickstart",isDocsHomePage:!1,title:"10-minute Quickstart",description:"First, clone this repo to your local system.",source:"@site/docs/guides/quickstart.md",sourceDirName:"guides",slug:"/guides/quickstart",permalink:"/docs/guides/quickstart",editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guides",next:{title:"Running your first task",permalink:"/docs/guides/tutorials/first_task"}},l=[{value:"Installation",id:"installation",children:[],level:3},{value:"Setup",id:"setup",children:[],level:3},{value:"(Optional) Set up MTurk",id:"optional-set-up-mturk",children:[],level:3},{value:"(Optional) Set up Heroku",id:"optional-set-up-heroku",children:[],level:3},{value:"Let&#39;s get launching!",id:"lets-get-launching",children:[],level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"10-minute-quickstart"},"10-minute Quickstart"),(0,a.kt)("p",null,"First, clone this repo to your local system."),(0,a.kt)("p",null,"Mephisto requires >= Python 3.8 and >= npm v6."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Run the following in the root repo directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pip install -e .\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Alternatively, we also support installation via the dependency/environment manager project ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/python-poetry/poetry"},"poetry")," as an option:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# install poetry\n$ curl -sSL https://install.python-poetry.org | python3 -\n# from the root dir, install Mephisto:\n$ poetry install\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Are you a Docker user? We support that too! Check out ",(0,a.kt)("a",{parentName:"em",href:"../how_to_use/efficiency_organization/docker"},"our Docker guide"),".")),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Now that you have Mephisto installed, you should have access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mephisto")," CLI tool."),(0,a.kt)("p",null,"Let's use this CLI tool to set up a data directory via the ",(0,a.kt)("inlineCode",{parentName:"p"},"mephisto config")," command. The data directory is where the results of your crowdsourcing tasks will be stored."),(0,a.kt)("p",null,'The command below expects that you have created a folder named "mephisto-data" at your home directory and a folder named "data" inside of it.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ mephisto config core.main_data_directory ~/mephisto-data/data\n")),(0,a.kt)("p",null,"Check that everything is set up correctly!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ mephisto check\nMephisto seems to be set up correctly.\n")),(0,a.kt)("h3",{id:"optional-set-up-mturk"},"(Optional) Set up MTurk"),(0,a.kt)("p",null,"If you want to be launching requests on MTurk, you'll want to create a requester. To do this you'll want to create an IAM role on AWS with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MechanicalTurkFullAccess")," permission, on an AWS account that is linked to the requester you want to use. You will be given an ",(0,a.kt)("inlineCode",{parentName:"p"},"access_key_id")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"secret_access_key"),". To register these with Mephisto, a new requester can be setup via the Mephisto CLI (make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"$ACCESS_KEY")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$SECRET_KEY")," below):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ mephisto register mturk \\\n        name=my_mturk_user \\\n        access_key_id=$ACCESS_KEY\\\n        secret_access_key=$SECRET_KEY\nAWS credentials successfully saved in ~/.aws/credentials file.\n\nRegistered successfully.\n")),(0,a.kt)("p",null,"You can choose any name here instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"my_mturk_user")," - this will be the id that you later refer to when using that requester."),(0,a.kt)("p",null,"For an ",(0,a.kt)("inlineCode",{parentName:"p"},"mturk_sandbox")," requester, you should suffix the requester name with ",(0,a.kt)("em",{parentName:"p"},'"_sandbox"'),", e.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"my_mturk_user_sandbox"),"."),(0,a.kt)("p",null,'Here\'s an example of setting up an "mturk_sandbox" requester:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ mephisto register mturk_sandbox \\\n        name=my_mturk_user_sandbox \\\n        access_key_id=$ACCESS_KEY\\\n        secret_access_key=$SECRET_KEY\n\nRegistered successfully.\n")),(0,a.kt)("p",null,"Note that registering a sandbox user will not create a new entry in your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials")," file if it's for the same account as your production user, as sandbox and prod use the same access keys."),(0,a.kt)("p",null,"After this, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"mephisto.provider.requester_name=my_mturk_user")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mephisto.provider.requester_name=my_mturk_user_sandbox")," respectively to launch a task live or on sandbox."),(0,a.kt)("h3",{id:"optional-set-up-heroku"},"(Optional) Set up Heroku"),(0,a.kt)("p",null,"If you want to launch a task publicly, you'll need to use an ",(0,a.kt)("inlineCode",{parentName:"p"},"Architect")," with external access. At the moment, we support the ",(0,a.kt)("inlineCode",{parentName:"p"},"HerokuArchitect")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EC2Architect"),", though the former is simpler to use. The steps for setup can be found by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ python mephisto/scripts/heroku/initialize_heroku.py \n")),(0,a.kt)("p",null,'If you get the message "Successfully identified a logged in heroku user.", then you\'re done. Otherwise, this script will give you a set of steps to log in to the heroku CLI.'),(0,a.kt)("h2",{id:"lets-get-launching"},"Let's get launching!"),(0,a.kt)("p",null,"Now that you have your environment set up, you're ready to get your first task running. ",(0,a.kt)("a",{parentName:"p",href:"../tutorials/first_task"},"Continue here.")))}p.isMDXComponent=!0}}]);