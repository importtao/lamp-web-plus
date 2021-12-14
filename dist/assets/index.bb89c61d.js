import{o as v}from"./index.esm.65e48d53.js";import{d as s,w as r,x as b,o as a,n as d,aG as j,r as c,p,q as x,aF as O}from"./index.b6dfbfcf.js";import{_ as $}from"./PageWrapper.69acb2a5.js";import"./vendor.352e3120.js";import"./usePageContext.4aadab4f.js";import"./onMountedOrActivated.9d53918d.js";import"./index.a846e3a0.js";import"./index.4cbf17ba.js";import"./useBreakpoint.4a44e358.js";import"./responsiveObserve.7206f913.js";import"./useSize.fb5b95d6.js";import"./transButton.bd1bd746.js";import"./ArrowLeftOutlined.7dae0225.js";var u=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return v(n,()=>{t("clickOutside")}),b(()=>{t("mounted")}),{wrap:n}}});const g={ref:"wrap"};function S(e,t,n,l,f,m){return a(),d("div",g,[j(e.$slots,"default")],512)}u.render=S;var i=s({components:{ClickOutSide:u,PageWrapper:$},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}}),L=`.demo-box[data-v-7a637453] {
  display: flex;
  width: 100%;
  height: 300px;
  font-size: 24px;
  color: #fff;
  background: #408ede;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}`;const o=O(),h=o((e,t,n,l,f,m)=>{const _=c("ClickOutSide"),k=c("PageWrapper");return a(),d(k,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:o(()=>[p(_,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:o(()=>[p("div",{onClick:t[1]||(t[1]=(...C)=>e.innerClick&&e.innerClick(...C)),class:"demo-box"},x(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})});i.render=h,i.__scopeId="data-v-7a637453";export default i;
