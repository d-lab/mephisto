"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1516],{4127:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var r=a(1987);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},262:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=a(9375),n=a(8933),o=(a(1987),a(4127)),i=["components"],l={sidebar_position:1},u="Simple usage",p={unversionedId:"guides/how_to_use/data_porter/simple_usage",id:"guides/how_to_use/data_porter/simple_usage",title:"Simple usage",description:"Introduction",source:"@site/docs/guides/how_to_use/data_porter/simple_usage.md",sourceDirName:"guides/how_to_use/data_porter",slug:"/guides/how_to_use/data_porter/simple_usage",permalink:"/docs/guides/how_to_use/data_porter/simple_usage",draft:!1,editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/how_to_use/data_porter/simple_usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guides",previous:{title:"MTurk",permalink:"/docs/guides/how_to_use/providers/mturk"},next:{title:"Reference",permalink:"/docs/guides/how_to_use/data_porter/reference"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Common use scenarios",id:"common-use-scenarios",level:2},{value:"Backing up data",id:"backing-up-data",level:3},{value:"Restoring a backup",id:"restoring-a-backup",level:3},{value:"Exporting data",id:"exporting-data",level:3},{value:"Legacy PKs note",id:"legacy-pks-note",level:4},{value:"Importing data",id:"importing-data",level:3}],d={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"simple-usage"},"Simple usage"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Sometimes you may want to run Mephisto remotely on remote server(s) for data collection, since that stage takes a while.\nThe Data Porter feature allows to move around data collected by different Mephisto instances, for ease of review and record keeping."),(0,o.kt)("p",null,"Data Porter can do the following for you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backing up your local data"),(0,o.kt)("li",{parentName:"ul"},"Restoring your local data"),(0,o.kt)("li",{parentName:"ul"},"Exporting part of your local data (into a data dump)"),(0,o.kt)("li",{parentName:"ul"},"Importing data from a data dump (into your local data)")),(0,o.kt)("p",null,"Before making any changes to data, we recommend creating a backup of your local data\n(so you can roll back the changes if anything goes wrong)."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"common-use-scenarios"},"Common use scenarios"),(0,o.kt)("h3",{id:"backing-up-data"},"Backing up data"),(0,o.kt)("p",null,"The below backup command will create an archived version of your local ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," directory\n(that contains all data for the project), and place it in ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs/backup/")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mephisto db backup\n")),(0,o.kt)("h3",{id:"restoring-a-backup"},"Restoring a backup"),(0,o.kt)("p",null,"You can restore a snapshot of your local data from a backup data dump (created with ",(0,o.kt)("inlineCode",{parentName:"p"},"mephisto db backup")," command):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mephisto db restore --file <FILE_PATH>\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"<FILE_PATH>")," can be either full path to a file, or just the filename (if it's located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs/backup/")," directory)"),(0,o.kt)("p",null,"Important notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your current local data will be erased (to make room for the restored data)"),(0,o.kt)("li",{parentName:"ul"},"If DB schema of the data dump is outdated, Mephisto when launched will automatically try to apply all existing migrations")),(0,o.kt)("h3",{id:"exporting-data"},"Exporting data"),(0,o.kt)("p",null,"To export all local data (and make it importable later), run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mephisto db export\n")),(0,o.kt)("p",null,"To export partial data only partially (i.e. from a few selected Task Runs), you have a few options of identifying the imported data. The simplest method is by using Task name(s):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'mephisto db export --export-tasks-by-names "My first Task" --export-tasks-by-names "My second Task"\n')),(0,o.kt)("p",null,"This will generate an archive file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs/export/")," directory."),(0,o.kt)("h4",{id:"legacy-pks-note"},"Legacy PKs note"),(0,o.kt)("p",null,'If you\'re exporting "legacy" data entries (i.e. created before May 2024), you should add parameter ',(0,o.kt)("inlineCode",{parentName:"p"},"--randomize-legacy-ids"),' to your export command. This will ensure lack of conflicts when importing this dump into a "legacy" dated database.\nAll this parameter does is change (within the dump) sequential integer PKs to random integer PKs, while preserving all object relations.'),(0,o.kt)("h3",{id:"importing-data"},"Importing data"),(0,o.kt)("p",null,"You can restore data dump content (created with ",(0,o.kt)("inlineCode",{parentName:"p"},"mephisto db export")," command) into your local data like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mephisto db import --file <FILE_PATH>\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"<FILE_PATH>")," can be either full path to a file, or just the filename (if it's located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs/export/")," directory)"),(0,o.kt)("p",null,"Note that before the import starts, a full backup of your local data will be automatically created and saved to ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs/backup/")," directory."))}m.isMDXComponent=!0}}]);