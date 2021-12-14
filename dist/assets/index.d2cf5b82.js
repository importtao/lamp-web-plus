import{o as v}from"./index.esm.eda70424.js";import{d as s,w as r,x as j,o as a,n as d,aG as x,r as c,p,q as O,aF as $}from"./index.0523a5a3.js";import{_ as g}from"./PageWrapper.40d43df1.js";import"./vendor.352e3120.js";import"./usePageContext.0fc2e04d.js";import"./onMountedOrActivated.a2faf533.js";import"./index.e2c95991.js";import"./index.814a8df7.js";import"./useBreakpoint.a9fc3198.js";import"./responsiveObserve.43c11602.js";import"./useSize.6627aa05.js";import"./transButton.555d93e9.js";import"./ArrowLeftOutlined.62657f64.js";var u=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return v(n,()=>{t("clickOutside")}),j(()=>{t("mounted")}),{wrap:n}}});const S={ref:"wrap"};function h(e,t,n,l,f,m){return a(),d("div",S,[x(e.$slots,"default")],512)}u.render=h;var i=s({components:{ClickOutSide:u,PageWrapper:g},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}}),L=`.demo-box[data-v-7a637453] {
  display: flex;
  width: 100%;
  height: 300px;
  font-size: 24px;
  color: #fff;
  background: #408ede;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}`;const o=$(),w=o((e,t,n,l,f,m)=>{const _=c("ClickOutSide"),k=c("PageWrapper");return a(),d(k,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:o(()=>[p(_,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:o(()=>[p("div",{onClick:t[1]||(t[1]=(...C)=>e.innerClick&&e.innerClick(...C)),class:"demo-box"},O(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})});i.render=w,i.__scopeId="data-v-7a637453";export default i;
