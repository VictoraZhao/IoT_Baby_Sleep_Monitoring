import{L as a,a as m,b as p,s as u,bL as c,bV as d,t as l,J as _,ae as f,o as g,k as v,y as S,j as B,p as I,r as x,l as C,c1 as L,eb as M}from"./index.34bd6b67.js";import T from"./Login.47a6be7d.js";import"./LoginForm.4c655d21.js";import"./index.cccd113a.js";import"./index.cbf60885.js";import"./index.f14d329f.js";import"./responsiveObserve.61d0409e.js";import"./_baseIteratee.aa255da2.js";import"./_baseIsEqual.a008ce0b.js";import"./get.2b906710.js";import"./isEqual.2a790ae5.js";import"./useSize.a8e4c835.js";import"./LoginFormTitle.614cc404.js";import"./index.24be7962.js";import"./ForgetPasswordForm.56e577c7.js";import"./index.2353e09f.js";import"./RegisterForm.10549963.js";import"./index.9a79a704.js";import"./MobileForm.9a44894f.js";import"./QrCodeForm.9d77977b.js";import"./index.bc9c37ad.js";import"./download.cb148929.js";const U=m({__name:"SessionTimeoutLogin",setup(b){const{prefixCls:t}=p("st-login"),e=u(),r=c(),i=d(),o=l(0),n=()=>i.getProjectConfig.permissionMode===M.BACK;return _(()=>{var s;o.value=(s=e.getUserInfo)==null?void 0:s.userId,console.log("Mounted",e.getUserInfo)}),f(()=>{(o.value&&o.value!==e.getUserInfo.userId||n()&&r.getLastBuildMenuTime===0)&&document.location.reload()}),(s,k)=>(g(),v(L,null,{default:S(()=>[B("div",{class:x(C(t))},[I(T,{sessionTimeout:""})],2)]),_:1}))}});var X=a(U,[["__scopeId","data-v-07eaddea"]]);export{X as default};