import{d as $,aY as T,b_ as k,r as c,n as o,p as a,M as i,aE as l,aF as y,aW as I,aX as w,o as s,L as b,q as d,aI as P}from"./index.f012a3f4.js";import S from"./Article.591b484f.js";import A from"./Application.32d76974.js";import L from"./Project.520d7ce7.js";import{h as B}from"./header.d801b988.js";import{tags as D,teams as E,details as O,achieveList as z}from"./data.2163dd7b.js";import{T as F}from"./index.5919009b.js";import{T as v}from"./index.fb19caf5.js";import{R as x,C as g}from"./index.41a9c009.js";import"./vendor.352e3120.js";import"./index.a3803284.js";import"./Col.13d8b9cb.js";import"./responsiveObserve.40f9db24.js";import"./canUseDom.0bf35682.js";import"./useBreakpoint.521f32f2.js";import"./index.126f0ac9.js";import"./UpOutlined.5f7f87c9.js";import"./PlusOutlined.0c40939d.js";var f=$({components:{CollapseContainer:T,Icon:k,Tag:F,Tabs:v,TabPane:v.TabPane,Article:S,Application:A,Project:L,[x.name]:x,[g.name]:g},setup(){return{prefixCls:"account-center",headerImg:B,tags:D,teams:E,details:O,achieveList:z}}}),da=`.account-center-col[data-v-7b11fce3]:not(:last-child) {
  padding: 0 10px;
}
.account-center-col[data-v-7b11fce3]:not(:last-child):not(:last-child) {
  border-right: 1px dashed #cecece;
}
.account-center-top[data-v-7b11fce3] {
  padding: 10px;
  margin: 16px 16px 12px 16px;
  background: #fff;
  border-radius: 3px;
}
.account-center-top__avatar[data-v-7b11fce3] {
  text-align: center;
}
.account-center-top__avatar img[data-v-7b11fce3] {
  border-radius: 50%;
}
.account-center-top__avatar span[data-v-7b11fce3] {
  display: block;
  font-size: 20px;
  font-weight: 500;
}
.account-center-top__avatar div[data-v-7b11fce3] {
  margin-top: 3px;
  font-size: 12px;
}
.account-center-top__detail[data-v-7b11fce3] {
  padding-left: 20px;
  margin-top: 15px;
}
.account-center-top__team-item[data-v-7b11fce3] {
  display: inline-block;
  padding: 4px 24px;
}
.account-center-top__team span[data-v-7b11fce3] {
  margin-left: 3px;
}
.account-center-bottom[data-v-7b11fce3] {
  padding: 10px;
  margin: 0 16px 16px 16px;
  background: #fff;
  border-radius: 3px;
}`;const e=y();I("data-v-7b11fce3");const M=a("span",null,"Serati Ma",-1),N=a("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1);w();const R=e((n,U,V,q,W,X)=>{const r=c("a-col"),_=c("Icon"),m=c("a-row"),C=c("Tag"),u=c("CollapseContainer"),j=c("TabPane"),h=c("Tabs");return s(),o("div",{class:n.prefixCls},[a(m,{class:`${n.prefixCls}-top`},{default:e(()=>[a(r,{span:9,class:`${n.prefixCls}-col`},{default:e(()=>[a(m,null,{default:e(()=>[a(r,{span:8},{default:e(()=>[a("div",{class:`${n.prefixCls}-top__avatar`},[a("img",{width:"70",src:n.headerImg},null,8,["src"]),M,N],2)]),_:1}),a(r,{span:16},{default:e(()=>[a("div",{class:`${n.prefixCls}-top__detail`},[(s(!0),o(i,null,l(n.details,(t,p)=>(s(),o("p",{key:p},[a(_,{icon:t.icon},null,8,["icon"]),b(" "+d(t.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),a(r,{span:7,class:`${n.prefixCls}-col`},{default:e(()=>[a(u,{title:"\u6807\u7B7E",canExpan:!1},{default:e(()=>[(s(!0),o(i,null,l(n.tags,(t,p)=>(s(),o(C,{key:p,class:"mb-2"},{default:e(()=>[b(d(t),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),a(r,{span:8,class:`${n.prefixCls}-col`},{default:e(()=>[a(u,{class:`${n.prefixCls}-top__team`,title:"\u56E2\u961F",canExpan:!1},{default:e(()=>[(s(!0),o(i,null,l(n.teams,(t,p)=>(s(),o("div",{key:p,class:`${n.prefixCls}-top__team-item`},[a(_,{icon:t.icon,color:t.color},null,8,["icon","color"]),a("span",null,d(t.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),a("div",{class:`${n.prefixCls}-bottom`},[a(h,null,{default:e(()=>[(s(!0),o(i,null,l(n.achieveList,t=>(s(),o(j,{key:t.key,tab:t.name},{default:e(()=>[(s(),o(P(t.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)});f.render=R,f.__scopeId="data-v-7b11fce3";export default f;
