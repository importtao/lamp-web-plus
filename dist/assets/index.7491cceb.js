import{o as v}from"./index.esm.145cf43a.js";import{d as s,w as r,x as j,o as a,n as d,aG as x,r as c,p,q as O,aF as $}from"./index.f012a3f4.js";import{_ as g}from"./PageWrapper.06ac3dfa.js";import"./vendor.352e3120.js";import"./usePageContext.2729de0d.js";import"./onMountedOrActivated.a84ead65.js";import"./index.df461530.js";import"./index.069b5dd9.js";import"./useBreakpoint.521f32f2.js";import"./responsiveObserve.40f9db24.js";import"./useSize.5c4412c9.js";import"./transButton.77ed102e.js";import"./ArrowLeftOutlined.61d94bda.js";var u=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return v(n,()=>{t("clickOutside")}),j(()=>{t("mounted")}),{wrap:n}}});const S={ref:"wrap"};function b(e,t,n,l,f,m){return a(),d("div",S,[x(e.$slots,"default")],512)}u.render=b;var i=s({components:{ClickOutSide:u,PageWrapper:g},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}}),L=`.demo-box[data-v-7a637453] {
  display: flex;
  width: 100%;
  height: 300px;
  font-size: 24px;
  color: #fff;
  background: #408ede;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}`;const o=$(),h=o((e,t,n,l,f,m)=>{const _=c("ClickOutSide"),k=c("PageWrapper");return a(),d(k,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:o(()=>[p(_,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:o(()=>[p("div",{onClick:t[1]||(t[1]=(...C)=>e.innerClick&&e.innerClick(...C)),class:"demo-box"},O(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})});i.render=h,i.__scopeId="data-v-7a637453";export default i;
