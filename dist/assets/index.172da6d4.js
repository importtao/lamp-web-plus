import{o as v}from"./index.esm.3cea883b.js";import{d as s,w as r,x as j,o as a,n as d,aG as x,r as c,p,q as O,aF as $}from"./index.b7a14d4f.js";import{_ as b}from"./PageWrapper.62f72559.js";import"./vendor.352e3120.js";import"./usePageContext.03f0ffc0.js";import"./onMountedOrActivated.64fcf717.js";import"./index.aba8a851.js";import"./index.d9119902.js";import"./useBreakpoint.508a26d1.js";import"./responsiveObserve.0e84fd18.js";import"./useSize.a97ab731.js";import"./transButton.928b71e3.js";import"./ArrowLeftOutlined.70d092e9.js";var u=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return v(n,()=>{t("clickOutside")}),j(()=>{t("mounted")}),{wrap:n}}});const g={ref:"wrap"};function S(e,t,n,l,f,m){return a(),d("div",g,[x(e.$slots,"default")],512)}u.render=S;var i=s({components:{ClickOutSide:u,PageWrapper:b},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}}),L=`.demo-box[data-v-7a637453] {
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
