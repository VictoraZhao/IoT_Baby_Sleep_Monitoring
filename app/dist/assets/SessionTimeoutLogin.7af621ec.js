import{L as a,a as m,b as p,s as u,bL as c,bV as d,t as l,J as _,ae as f,o as g,k as v,y as S,j as B,p as I,r as x,l as C,c1 as L,eb as M}from"./index.14bac29a.js";import T from"./Login.c7e8f248.js";import"./LoginForm.3aa7264a.js";import"./index.d4d63f2b.js";import"./index.1b5dc619.js";import"./index.6eda807a.js";import"./responsiveObserve.4260d159.js";import"./_baseIteratee.c02c9642.js";import"./_baseIsEqual.bd941228.js";import"./get.c10fe5c6.js";import"./isEqual.13e377e2.js";import"./useSize.541fcc18.js";import"./LoginFormTitle.2af7d950.js";import"./index.4efb7cce.js";import"./ForgetPasswordForm.6bb60a27.js";import"./index.0c75a5a7.js";import"./RegisterForm.a8928175.js";import"./index.927ae7b1.js";import"./MobileForm.ce2da95a.js";import"./QrCodeForm.8fcdda0d.js";import"./index.f53a3973.js";import"./download.20b6275b.js";const U=m({__name:"SessionTimeoutLogin",setup(b){const{prefixCls:t}=p("st-login"),e=u(),r=c(),i=d(),o=l(0),n=()=>i.getProjectConfig.permissionMode===M.BACK;return _(()=>{var s;o.value=(s=e.getUserInfo)==null?void 0:s.userId,console.log("Mounted",e.getUserInfo)}),f(()=>{(o.value&&o.value!==e.getUserInfo.userId||n()&&r.getLastBuildMenuTime===0)&&document.location.reload()}),(s,k)=>(g(),v(L,null,{default:S(()=>[B("div",{class:x(C(t))},[I(T,{sessionTimeout:""})],2)]),_:1}))}});var X=a(U,[["__scopeId","data-v-07eaddea"]]);export{X as default};
