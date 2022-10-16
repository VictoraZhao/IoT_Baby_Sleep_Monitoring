var f=(e,c,s)=>new Promise((m,a)=>{var d=o=>{try{r(s.next(o))}catch(n){a(n)}},t=o=>{try{r(s.throw(o))}catch(n){a(n)}},r=o=>o.done?m(o.value):Promise.resolve(o.value).then(d,t);r((s=s.apply(e,c)).next())});import{L as y,a as w,c as $,b as L,s as F,f as _,aC as u,o as M,k as S,y as k,j as l,r as p,B as g,p as h,z as I,aD as b}from"./index.44f4e6f0.js";import{B as N,b as R}from"./index.565788eb.js";import{B as P,k as D}from"./useForm.9545d5aa.js";import{u as U}from"./lock.d9d65cd3.js";import{h as V}from"./header.d801b988.js";import"./useWindowSizeFn.5e7933fa.js";import"./FullscreenOutlined.be388ae7.js";import"./isEqual.c7d57178.js";import"./_baseIsEqual.57228fbc.js";import"./index.61f9ff89.js";import"./index.d549b7af.js";import"./responsiveObserve.9d35d569.js";import"./_baseIteratee.8808f200.js";import"./get.dfcced6d.js";import"./useSize.05dd4f1a.js";import"./index.b3b51c61.js";import"./index.a8cc3539.js";import"./index.48fa9907.js";import"./index.3e6dd869.js";import"./warning.be249038.js";import"./index.cac036d5.js";import"./index.d32acd0f.js";import"./useSortable.d35e5e48.js";import"./download.ebb14494.js";import"./index.8075c4fd.js";import"./index.c7745ea8.js";const z=w({name:"LockModal",components:{BasicModal:N,BasicForm:P},setup(){const{t:e}=$(),{prefixCls:c}=L("header-lock-modal"),s=F(),m=U(),a=_(()=>{var i;return(i=s.getUserInfo)==null?void 0:i.realName}),[d,{closeModal:t}]=R(),[r,{validateFields:o,resetFields:n}]=D({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield o()).password;t(),m.setLockInfo({isLock:!0,pwd:C}),yield n()})}const B=_(()=>{const{avatar:i}=s.getUserInfo;return i||V});return{t:e,prefixCls:c,getRealName:a,register:d,registerForm:r,handleLock:v,avatar:B}}}),j=["src"];function q(e,c,s,m,a,d){const t=u("BasicForm"),r=u("a-button"),o=u("BasicModal");return M(),S(o,b({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:k(()=>[l("div",{class:p(`${e.prefixCls}__entry`)},[l("div",{class:p(`${e.prefixCls}__header`)},[l("img",{src:e.avatar,class:p(`${e.prefixCls}__header-img`)},null,10,j),l("p",{class:p(`${e.prefixCls}__header-name`)},g(e.getRealName),3)],2),h(t,{onRegister:e.registerForm},null,8,["onRegister"]),l("div",{class:p(`${e.prefixCls}__footer`)},[h(r,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:k(()=>[I(g(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var ue=y(z,[["render",q]]);export{ue as default};
