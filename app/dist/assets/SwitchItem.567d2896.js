import{L as s,a as p,b as d,c as l,f as m,aC as c,o as h,i as u,j as f,B as C,p as g,aD as _,r as v}from"./index.34bd6b67.js";import{S as y}from"./index.0827b27a.js";import{b as S}from"./index.37281393.js";import"./index.3c202b10.js";import"./FullscreenOutlined.43bb8dbd.js";import"./index.6c0c5399.js";import"./useWindowSizeFn.974b1386.js";import"./useContentViewHeight.c99c062b.js";import"./useSortable.25d216f5.js";import"./_baseIteratee.aa255da2.js";import"./_baseIsEqual.a008ce0b.js";import"./get.2b906710.js";import"./index.aa59c14a.js";import"./warning.fe8ee07c.js";import"./lock.ed6fcec6.js";import"./ArrowLeftOutlined.05dd7f76.js";import"./isEqual.2a790ae5.js";import"./index.bc9c37ad.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=d("setting-switch-item"),{t:n}=l(),o=m(()=>e.def?{checked:e.def}:{});function a(i){e.event&&S(e.event,i)}return{prefixCls:t,t:n,handleChange:a,getBindValue:o}}});function B(e,t,n,o,a,i){const r=c("Switch");return h(),u("div",{class:v(e.prefixCls)},[f("span",null,C(e.title),1),g(r,_(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var K=s(b,[["render",B],["__scopeId","data-v-440e72fd"]]);export{K as default};