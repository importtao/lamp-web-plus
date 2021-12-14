import{d as f,aY as v,a$ as w,aW as b,aX as g,r as a,o,n as _,p as t,M as x,aE as I,q as n,L as i,aF as L}from"./index.b6dfbfcf.js";import{h as C}from"./header.d801b988.js";import{n as j}from"./data.aa527d47.js";import{L as l}from"./index.5c3ef301.js";import"./vendor.352e3120.js";import"./Col.590da3fb.js";import"./responsiveObserve.7206f913.js";import"./canUseDom.0bf35682.js";import"./useBreakpoint.4a44e358.js";var c=f({components:{List:l,ListItem:l.Item,ListItemMeta:l.Item.Meta,CollapseContainer:v,ScrollContainer:w},setup(){return{newList:j,headerImg:C}}}),Z=`.news-list__item-avatar[data-v-0399ad30] {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.news-list__item-title[data-v-0399ad30] {
  font-size: 14px;
  line-height: 22px;
  color: #000;
  opacity: 0.65;
}
.news-list__item-time[data-v-0399ad30] {
  font-size: 14px;
  line-height: 22px;
  color: #000;
  opacity: 0.45;
}
.news-list__item-light[data-v-0399ad30] {
  font-size: 14px;
  line-height: 22px;
  color: #000;
  opacity: 0.85;
}
.news-list__item-cnte[data-v-0399ad30] {
  background: #eef3fb;
  border-radius: 2px;
  opacity: 0.6;
}
.news-list__item-cnte__title[data-v-0399ad30] {
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.85);
}`;const s=L();b("data-v-0399ad30");const y={class:"news-list__item-desc"},S={class:"news-list__item-time mb-1"},$={class:"news-list__item-title mb-1"},k={class:"news-list__item-light"},M=i("\u7533\u8BF7\u8FED\u4EE3 "),z={class:"news-list__item-light"},B=i("\u53D1\u5E03 "),N={class:"news-list__item-cnte p-2"},D={class:"news-list__item-cnte__title"},E=t("br",null,null,-1),F=t("br",null,null,-1),R=t("br",null,null,-1);g();const T=s((r,V,q,O,U,W)=>{const d=a("ListItemMeta"),p=a("ListItem"),m=a("List"),h=a("ScrollContainer"),u=a("CollapseContainer");return o(),_(u,{class:"news-list",title:"\u52A8\u6001",canExpan:!1},{default:s(()=>[t(h,null,{default:s(()=>[t(m,null,{default:s(()=>[(o(!0),_(x,null,I(r.newList,e=>(o(),_(p,{key:e.id,class:"news-list__item"},{default:s(()=>[t(d,null,{avatar:s(()=>[t("img",{src:r.headerImg,class:"news-list__item-avatar"},null,8,["src"])]),description:s(()=>[t("div",y,[t("div",S,n(e.sendTime),1),t("div",$,[t("span",k,n(e.sender)+"\xA0",1),M,t("span",z,"\xA0"+n(e.title)+"\xA0",1),B]),t("div",N,[t("span",D,n(e.cnteId),1),E,i(" Status: "+n(e.cnteStas)+" ",1),F,i(" Repository: "+n(e.cnteRepo)+" ",1),R])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})});c.render=T,c.__scopeId="data-v-0399ad30";export default c;
