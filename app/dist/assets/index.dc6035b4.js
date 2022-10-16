import{p as g,b2 as h,L as y,a as _,bX as F,c as C,bR as S,bs as w,b as L,t as G,f as R,l as i,aX as $,aC as m,o as O,k as I,y as B,j as l,B as b,r as d,m as U,ee as D,ef as k}from"./index.44f4e6f0.js";import{D as P,G as j,S as H}from"./siteSetting.c485f07c.js";import{a as N}from"./useContentViewHeight.2897f9b2.js";import"./useWindowSizeFn.5e7933fa.js";var T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"},W=T;function v(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),n.forEach(function(r){A(e,r,o[r])})}return e}function A(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var f=function(t,o){var n=v({},t,o.attrs);return g(h,v({},n,{icon:W}),null)};f.displayName="GithubFilled";f.inheritAttrs=!1;var V=f;const z=_({name:"LayoutFooter",components:{Footer:F.Footer,GithubFilled:V},setup(){const{t:e}=C(),{getShowFooter:t}=S(),{currentRoute:o}=w(),{prefixCls:n}=L("layout-footer"),r=G(null),{setFooterHeight:u}=N();return{getShowLayoutFooter:R(()=>{var s,a;if(i(t)){const p=(s=i(r))==null?void 0:s.$el;u((p==null?void 0:p.offsetHeight)||0)}else u(0);return i(t)&&!((a=i(o).meta)!=null&&a.hiddenFooter)}),prefixCls:n,t:e,DOC_URL:P,GITHUB_URL:j,SITE_URL:H,openWindow:$,footerRef:r}}}),E=e=>(D("data-v-0201179d"),e=e(),k(),e),M=E(()=>l("div",null,"Copyright \xA92020 Baby Sleep Monitor",-1));function X(e,t,o,n,r,u){const c=m("GithubFilled"),s=m("Footer");return e.getShowLayoutFooter?(O(),I(s,{key:0,class:d(e.prefixCls),ref:"footerRef"},{default:B(()=>[l("div",{class:d(`${e.prefixCls}__links`)},[l("a",{onClick:t[0]||(t[0]=a=>e.openWindow(e.SITE_URL))},b(e.t("layout.footer.onlinePreview")),1),g(c,{onClick:t[1]||(t[1]=a=>e.openWindow(e.GITHUB_URL)),class:d(`${e.prefixCls}__github`)},null,8,["class"]),l("a",{onClick:t[2]||(t[2]=a=>e.openWindow(e.DOC_URL))},b(e.t("layout.footer.onlineDocument")),1)],2),M]),_:1},8,["class"])):U("",!0)}var Y=y(z,[["render",X],["__scopeId","data-v-0201179d"]]);export{Y as default};