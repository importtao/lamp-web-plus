import{o as v}from"./index.esm.8eeac5af.js";import{d as s,w as r,x as j,o as a,n as d,aG as x,r as c,p,q as O,aF as $}from"./index.05ea33df.js";import{_ as g}from"./PageWrapper.d9e1596c.js";import"./vendor.352e3120.js";import"./usePageContext.918ba169.js";import"./onMountedOrActivated.a12ac1c0.js";import"./index.dbdd549b.js";import"./index.03402249.js";import"./useBreakpoint.249417d5.js";import"./responsiveObserve.968aa5d0.js";import"./useSize.c28e111d.js";import"./transButton.9a1903a9.js";import"./ArrowLeftOutlined.97d250aa.js";var u=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return v(n,()=>{t("clickOutside")}),j(()=>{t("mounted")}),{wrap:n}}});const S={ref:"wrap"};function b(e,t,n,l,m,f){return a(),d("div",S,[x(e.$slots,"default")],512)}u.render=b;var i=s({components:{ClickOutSide:u,PageWrapper:g},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}}),L=`.demo-box[data-v-7a637453] {
  display: flex;
  width: 100%;
  height: 300px;
  font-size: 24px;
  color: #fff;
  background: #408ede;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}`;const o=$(),h=o((e,t,n,l,m,f)=>{const _=c("ClickOutSide"),k=c("PageWrapper");return a(),d(k,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:o(()=>[p(_,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:o(()=>[p("div",{onClick:t[1]||(t[1]=(...C)=>e.innerClick&&e.innerClick(...C)),class:"demo-box"},O(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})});i.render=h,i.__scopeId="data-v-7a637453";export default i;
