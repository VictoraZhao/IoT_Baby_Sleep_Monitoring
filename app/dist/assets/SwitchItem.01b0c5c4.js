import{L as s,a as p,b as d,c as l,f as m,aC as c,o as h,i as u,j as f,B as C,p as g,aD as _,r as v}from"./index.44f4e6f0.js";import{S as y}from"./index.cac036d5.js";import{b as S}from"./index.7de23df0.js";import"./index.d99fea39.js";import"./FullscreenOutlined.be388ae7.js";import"./index.02f17a8f.js";import"./useWindowSizeFn.5e7933fa.js";import"./useContentViewHeight.2897f9b2.js";import"./useSortable.d35e5e48.js";import"./_baseIteratee.8808f200.js";import"./_baseIsEqual.57228fbc.js";import"./get.dfcced6d.js";import"./index.e5eb417a.js";import"./warning.be249038.js";import"./lock.d9d65cd3.js";import"./ArrowLeftOutlined.d36e9853.js";import"./isEqual.c7d57178.js";import"./index.b3b51c61.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=d("setting-switch-item"),{t:n}=l(),o=m(()=>e.def?{checked:e.def}:{});function a(i){e.event&&S(e.event,i)}return{prefixCls:t,t:n,handleChange:a,getBindValue:o}}});function B(e,t,n,o,a,i){const r=c("Switch");return h(),u("div",{class:v(e.prefixCls)},[f("span",null,C(e.title),1),g(r,_(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var K=s(b,[["render",B],["__scopeId","data-v-440e72fd"]]);export{K as default};