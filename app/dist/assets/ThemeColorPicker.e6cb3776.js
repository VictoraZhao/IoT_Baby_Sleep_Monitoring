import{L as m,a as l,c$ as c,b as d,aC as u,o as r,i as o,F as C,aF as _,r as a,bB as f,p as k}from"./index.34bd6b67.js";import{b as h}from"./index.37281393.js";import"./index.3c202b10.js";import"./FullscreenOutlined.43bb8dbd.js";import"./index.6c0c5399.js";import"./useWindowSizeFn.974b1386.js";import"./useContentViewHeight.c99c062b.js";import"./useSortable.25d216f5.js";import"./_baseIteratee.aa255da2.js";import"./_baseIsEqual.a008ce0b.js";import"./get.2b906710.js";import"./index.aa59c14a.js";import"./warning.fe8ee07c.js";import"./lock.ed6fcec6.js";import"./ArrowLeftOutlined.05dd7f76.js";import"./isEqual.2a790ae5.js";import"./index.bc9c37ad.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var G=m(v,[["render",$]]);export{G as default};