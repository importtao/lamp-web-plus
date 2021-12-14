import{d as $,aY as T,b_ as k,r as c,n as o,p as a,M as i,aE as l,aF as y,aW as I,aX as w,o as s,L as b,q as d,aI as P}from"./index.0523a5a3.js";import S from"./Article.66f7456d.js";import A from"./Application.d8d86b18.js";import L from"./Project.087c60fa.js";import{h as B}from"./header.d801b988.js";import{tags as D,teams as E,details as O,achieveList as z}from"./data.e00c2600.js";import{T as F}from"./index.c4d8ae58.js";import{T as v}from"./index.08635ac9.js";import{R as x,C as g}from"./index.4637d8b2.js";import"./vendor.352e3120.js";import"./index.c860e084.js";import"./Col.102f0df6.js";import"./responsiveObserve.43c11602.js";import"./canUseDom.0bf35682.js";import"./useBreakpoint.a9fc3198.js";import"./index.a91ea070.js";import"./UpOutlined.a2803449.js";import"./PlusOutlined.3cbe2bbe.js";var f=$({components:{CollapseContainer:T,Icon:k,Tag:F,Tabs:v,TabPane:v.TabPane,Article:S,Application:A,Project:L,[x.name]:x,[g.name]:g},setup(){return{prefixCls:"account-center",headerImg:B,tags:D,teams:E,details:O,achieveList:z}}}),da=`.account-center-col[data-v-7b11fce3]:not(:last-child) {
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
}`;const n=y();I("data-v-7b11fce3");const M=a("span",null,"Serati Ma",-1),N=a("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1);w();const R=n((e,U,V,q,W,X)=>{const r=c("a-col"),_=c("Icon"),m=c("a-row"),C=c("Tag"),u=c("CollapseContainer"),j=c("TabPane"),h=c("Tabs");return s(),o("div",{class:e.prefixCls},[a(m,{class:`${e.prefixCls}-top`},{default:n(()=>[a(r,{span:9,class:`${e.prefixCls}-col`},{default:n(()=>[a(m,null,{default:n(()=>[a(r,{span:8},{default:n(()=>[a("div",{class:`${e.prefixCls}-top__avatar`},[a("img",{width:"70",src:e.headerImg},null,8,["src"]),M,N],2)]),_:1}),a(r,{span:16},{default:n(()=>[a("div",{class:`${e.prefixCls}-top__detail`},[(s(!0),o(i,null,l(e.details,(t,p)=>(s(),o("p",{key:p},[a(_,{icon:t.icon},null,8,["icon"]),b(" "+d(t.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),a(r,{span:7,class:`${e.prefixCls}-col`},{default:n(()=>[a(u,{title:"\u6807\u7B7E",canExpan:!1},{default:n(()=>[(s(!0),o(i,null,l(e.tags,(t,p)=>(s(),o(C,{key:p,class:"mb-2"},{default:n(()=>[b(d(t),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),a(r,{span:8,class:`${e.prefixCls}-col`},{default:n(()=>[a(u,{class:`${e.prefixCls}-top__team`,title:"\u56E2\u961F",canExpan:!1},{default:n(()=>[(s(!0),o(i,null,l(e.teams,(t,p)=>(s(),o("div",{key:p,class:`${e.prefixCls}-top__team-item`},[a(_,{icon:t.icon,color:t.color},null,8,["icon","color"]),a("span",null,d(t.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),a("div",{class:`${e.prefixCls}-bottom`},[a(h,null,{default:n(()=>[(s(!0),o(i,null,l(e.achieveList,t=>(s(),o(j,{key:t.key,tab:t.name},{default:n(()=>[(s(),o(P(t.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)});f.render=R,f.__scopeId="data-v-7b11fce3";export default f;
