var R=(C,u,r)=>new Promise((i,g)=>{var a=n=>{try{c(r.next(n))}catch(m){g(m)}},x=n=>{try{c(r.throw(n))}catch(m){g(m)}},c=n=>n.done?i(n.value):Promise.resolve(n.value).then(a,x);c((r=r.apply(C,u)).next())});import{a as A,I as B,c as N,b as P,s as U,t as k,v as h,f as K,l as e,o as O,i as V,w as L,x as D,p as s,y as o,z as f,B as p,C as v,D as G,F as q,E as W}from"./index.44f4e6f0.js";import{C as j}from"./index.a8cc3539.js";import{F as T}from"./index.61f9ff89.js";import"./index.d549b7af.js";import{u as H,a as J,L as w,_ as Q,b as X}from"./LoginFormTitle.e9a66164.js";import{C as Y,R as Z}from"./index.c7745ea8.js";import"./_baseIteratee.8808f200.js";import"./_baseIsEqual.57228fbc.js";import"./get.dfcced6d.js";import"./isEqual.c7d57178.js";import"./useSize.05dd4f1a.js";import"./responsiveObserve.9d35d569.js";const fe=A({__name:"LoginForm",setup(C){const u=Y,r=Z,i=T.Item,g=B.Password,{t:a}=N(),{notification:x,createErrorModal:c}=W(),{prefixCls:n}=P("login"),m=U(),{setLoginState:_,getLoginState:$}=H(),{getFormRules:z}=J(),F=k(),S=k(!1),b=k(!1),d=h({account:"",password:""}),{validForm:M}=X(F),E=K(()=>e($)===w.LOGIN);function I(){return R(this,null,function*(){const y=yield M();if(!!y)try{S.value=!0;const t=yield m.login({password:y.password,username:y.account,mode:"none"});t&&x.success({message:a("sys.login.loginSuccessTitle"),description:`${a("sys.login.loginSuccessDesc")}: ${t.realName}`,duration:3})}catch(t){c({title:a("sys.api.errorTip"),content:t.message||a("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${n}`)||document.body})}finally{S.value=!1}})}return(y,t)=>(O(),V(q,null,[L(s(Q,{class:"enter-x"},null,512),[[D,e(E)]]),L(s(e(T),{class:"p-4 enter-x",model:d,rules:e(z),ref_key:"formRef",ref:F,onKeypress:G(I,["enter"])},{default:o(()=>[s(e(i),{name:"account",class:"enter-x"},{default:o(()=>[s(e(B),{size:"large",value:d.account,"onUpdate:value":t[0]||(t[0]=l=>d.account=l),placeholder:"\u961F\u957F\u8EAB\u4EFD\u8BC1\u53F7",class:"fix-auto-fill"},null,8,["value"])]),_:1}),s(e(i),{name:"password",class:"enter-x"},{default:o(()=>[s(e(g),{size:"large",visibilityToggle:"",value:d.password,"onUpdate:value":t[1]||(t[1]=l=>d.password=l),placeholder:"\u5BC6\u7801"},null,8,["value"])]),_:1}),s(e(r),{class:"enter-x"},{default:o(()=>[s(e(u),{span:12},{default:o(()=>[s(e(i),null,{default:o(()=>[s(e(j),{checked:b.value,"onUpdate:checked":t[2]||(t[2]=l=>b.value=l),size:"small"},{default:o(()=>[f(p(e(a)("sys.login.rememberMe")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),s(e(u),{span:12},{default:o(()=>[s(e(i),{style:{"text-align":"right"}},{default:o(()=>[s(e(v),{type:"link",size:"small",onClick:t[3]||(t[3]=l=>e(_)(e(w).RESET_PASSWORD))},{default:o(()=>[f(p(e(a)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),s(e(i),{class:"enter-x"},{default:o(()=>[s(e(v),{type:"primary",size:"large",block:"",onClick:I,loading:S.value},{default:o(()=>[f(p(e(a)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1}),s(e(r),{class:"enter-x"},{default:o(()=>[s(e(u),{md:8,xs:24},{default:o(()=>[s(e(v),{block:"",onClick:t[4]||(t[4]=l=>e(_)(e(w).MOBILE))},{default:o(()=>[f(p(e(a)("sys.login.mobileSignInFormTitle")),1)]),_:1})]),_:1}),s(e(u),{md:8,xs:24},{default:o(()=>[s(e(v),{block:"",onClick:t[5]||(t[5]=l=>e(_)(e(w).REGISTER))},{default:o(()=>[f(p(e(a)("sys.login.registerButton")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","onKeypress"]),[[D,e(E)]])],64))}});export{fe as default};
