import{d as v,b7 as _,aC as w,w as o,g as b,k as S,D as r,x as y,dd as x,V as $,r as k,o as C,n as H,p as g,aF as W}from"./index.b6dfbfcf.js";import{u as z}from"./useWindowSizeFn.fee40caf.js";import"./vendor.352e3120.js";var f=v({name:"IFrame",components:{Spin:_},props:{frameSrc:w.string.def("")},setup(){const e=o(!1),d=o(50),s=o(window.innerHeight),a=o(null),{prefixCls:p}=b("iframe-page");z(i,150,{immediate:!0});const l=S(()=>({height:`${r(s)}px`}));function i(){const n=r(a);if(!n)return;let{top:t}=x(n);t+=20,d.value=t,s.value=window.innerHeight-t;const h=document.documentElement.clientHeight-t;n.style.height=`${h}px`}function c(){e.value=!1,i()}function u(){$(()=>{const n=r(a);if(!n)return;const t=n;t.attachEvent?t.attachEvent("onload",()=>{c()}):n.onload=()=>{c()}})}return y(()=>{e.value=!0,u()}),{getWrapStyle:l,loading:e,frameRef:a,prefixCls:p}}}),E=`.vben-iframe-page .ant-spin-nested-loading[data-v-10f18273] {
  position: relative;
  height: 100%;
}
.vben-iframe-page .ant-spin-nested-loading .ant-spin-container[data-v-10f18273] {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.vben-iframe-page__mask[data-v-10f18273] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.vben-iframe-page__main[data-v-10f18273] {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  border: 0;
  box-sizing: border-box;
}`;const m=W(),F=m((e,d,s,a,p,l)=>{const i=k("Spin");return C(),H("div",{class:e.prefixCls,style:e.getWrapStyle},[g(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:m(()=>[g("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])]),_:1},8,["spinning","style"])],6)});f.render=F,f.__scopeId="data-v-10f18273";export default f;
