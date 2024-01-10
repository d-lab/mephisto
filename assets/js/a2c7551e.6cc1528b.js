"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3372],{4127:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(1987);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(9375),r=n(8933),o=(n(1987),n(4127)),i=["components"],l={},s=void 0,p={unversionedId:"guides/how_to_contribute/frontend_development",id:"guides/how_to_contribute/frontend_development",title:"frontend_development",description:"\x3c!---",source:"@site/docs/guides/how_to_contribute/frontend_development.md",sourceDirName:"guides/how_to_contribute",slug:"/guides/how_to_contribute/frontend_development",permalink:"/docs/guides/how_to_contribute/frontend_development",draft:!1,editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/how_to_contribute/frontend_development.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"backend_development",permalink:"/docs/guides/how_to_contribute/backend_development"},next:{title:"getting_started",permalink:"/docs/guides/how_to_contribute/getting_started"}},c={},u=[{value:"sidebar_position: 2",id:"sidebar_position-2",level:2},{value:"Cypress Testing",id:"cypress-testing",level:2},{value:"Package Development (new)",id:"package-development-new",level:2},{value:"Tips &amp; Recipes",id:"tips--recipes",level:3},{value:"Package Development (old)",id:"package-development-old",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"sidebar_position-2"},"sidebar_position: 2"),(0,o.kt)("h1",{id:"frontend-dev-setup"},"Frontend: dev setup"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"pre-commit")," to enforce code styles on the code base (using ",(0,o.kt)("inlineCode",{parentName:"p"},"black")," for Python and ",(0,o.kt)("inlineCode",{parentName:"p"},"prettier")," for Javascript)."),(0,o.kt)("p",null,"To setup your local codebase to auto-lint and avoid lint test failures for your PRs, please set up pre-commit for your local repo as such:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pip install pre-commit")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pre-commit install")," to install git hooks"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pre-commit run --all-files")," (optional - run ad-hoc against all files)")),(0,o.kt)("h2",{id:"cypress-testing"},"Cypress Testing"),(0,o.kt)("p",null,"This repo uses cypress to conduct frontend end to end tests. Tasks in the examples folder have cypress tests."),(0,o.kt)("p",null,"To run the tests for a task:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Launch the task using ",(0,o.kt)("inlineCode",{parentName:"li"},"python run_task.py"),"."),(0,o.kt)("li",{parentName:"ul"},"Open cypress by running ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test")," in the tasks' webapp folder."),(0,o.kt)("li",{parentName:"ul"},"Choose the Chrome browser to run the tests (it is the most consistent)."),(0,o.kt)("li",{parentName:"ul"},"Click one of the specs to run its tests.")),(0,o.kt)("h2",{id:"package-development-new"},"Package Development (new)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For commits after the ",(0,o.kt)("inlineCode",{parentName:"em"},"yarn-pkg-reorg")," tag and for newer packages (`@annotated/"),"`)*"),(0,o.kt)("p",null,"This repo uses yarn workspaces to manage its front-end dependencies."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"First ensure that you're on the latest version of yarn.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -g yarn\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Note: Our repo uses yarn v3.0.2 (yarn versions >= 2.0 have codename berry). This version of yarn is checked into the repo at ",(0,o.kt)("inlineCode",{parentName:"em"},".yarn/releases")," and is targeted by the ",(0,o.kt)("inlineCode",{parentName:"em"},'"yarnPath"')," property in the root ",(0,o.kt)("inlineCode",{parentName:"em"},".yarnrc.yml")," file. More details can be found ",(0,o.kt)("a",{parentName:"em",href:"https://yarnpkg.com/cli/set/version"},"here")," and ",(0,o.kt)("a",{parentName:"em",href:"https://yarnpkg.com/configuration/yarnrc#yarnPath"},"here"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install all dependencies.")),(0,o.kt)("p",null,"You can think of this as both running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," in all local workspaces and running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm link")," to link local package dependencies where appropriate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn install\n\n# This is similar to running `lerna --hoist` in the past\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You'll notice that individual packages don't have ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/")," folders anymore. This is because all packages are hoisted to the top level and placed within the ",(0,o.kt)("inlineCode",{parentName:"p"},".yarn/cache")," folder. This speeds up ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install"),"s, attempts to share dependencies between projects when necessary, and avoids ambiguous module resolutions.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Build the workspaces")),(0,o.kt)("p",null,"We can use yarn to build all the dependencies in our project easily."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn build-all\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: You can see the root ",(0,o.kt)("inlineCode",{parentName:"em"},"package.json")," to see the underlying command under this convenience script.")),(0,o.kt)("h3",{id:"tips--recipes"},"Tips & Recipes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"View all of the workspaces in the project:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn workspaces list\n\n\u27a4 YN0000: .\n\u27a4 YN0000: docs/sb\n\u27a4 YN0000: packages/annotated/bbox\n\u27a4 YN0000: packages/annotated/dev-scripts\n\u27a4 YN0000: packages/annotated/keypoint\n\u27a4 YN0000: packages/annotated/shell\n\u27a4 YN0000: packages/annotated/video-player\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run a command in a specific workspace"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn workspace sb build-storybook\n\n$ yarn workspace @annotated/bbox build\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run a command in all workspaces"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn workspaces foreach -ptA run build\n")),(0,o.kt)("p",{parentName:"li"},"  More information on the flags for ",(0,o.kt)("inlineCode",{parentName:"p"},"foreach")," can be found ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/cli/workspaces/foreach"},"here"),"."))),(0,o.kt)("h2",{id:"package-development-old"},"Package Development (old)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For commits before the ",(0,o.kt)("inlineCode",{parentName:"em"},"yarn-pkg-reorg")," tag or for non-workspace packages, e.g. ",(0,o.kt)("inlineCode",{parentName:"em"},"global-context-store"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"annotation-toolkit"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"bootstrap-chat"),".")),(0,o.kt)("p",null,"This repo has a few npm packages. If you're developing on them, you may want them to reference each other so your local edits across packages are reflected in your build.\nTo accomplish this we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Lerna"),". Lerna is also used to hoist ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," across packages to avoid this dreaded warning/error: ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/warnings/invalid-hook-call-warning.html"},"https://reactjs.org/warnings/invalid-hook-call-warning.html")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# In the root of the repo, install Lerna:\nnpm install\n\nnpm run bootstrap\n# under the hood, this runs: lerna bootstrap --hoist=\"{react,react-dom}\" which will link all packages that depend on each other, to each other, while also\n# hoisting react and react-dom to ensure that all packages uses the same version of react.\n\n# You can then link the common react version hoisted at the root, to your client project located somewhere else on disk.\n# Again, from the root:\nnpm link /other-project/located-somewhere-else/node_modules/react\n# This ensure that all projects use the same version of React.\n\n# then in your client project, you can do something like this:\nnpm link annotation-toolkit global-context-store\n\n# NOTE: It's important to specify the 2 links together! otherwise i'm noticing behavior where\n# the second link wipes out the first (npm v7.6.0 & node v15.8.0)\n")))}m.isMDXComponent=!0}}]);