import{d as v,aY as L,aZ as b,B as I,a_ as T,aW as j,aX as C,r as n,o as a,n as l,p as t,M as B,aE as k,q as i,L as s,aF as y}from"./index.b7a14d4f.js";import{t as w}from"./data.aa527d47.js";import{L as d}from"./index.280bdee5.js";import{T as z}from"./index.82115275.js";import"./vendor.352e3120.js";import"./Col.deca4875.js";import"./responsiveObserve.0e84fd18.js";import"./canUseDom.0bf35682.js";import"./useBreakpoint.508a26d1.js";var _=v({name:"TodoList",components:{CollapseContainer:L,List:d,ListItem:d.Item,ListItemMeta:d.Item.Meta,Tag:z,Tooltip:b,AntButton:I,EllipsisOutlined:T},setup(){return{todoList:w}}}),tt=`.todo-list[data-v-51a477c6] {
  position: relative;
}
.todo-list__total[data-v-51a477c6] {
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background: rgba(255, 0, 0, 0.7);
  border-radius: 50%;
}
.todo-list__all[data-v-51a477c6] {
  position: absolute;
  top: 0;
  right: 10px;
  height: 56px;
  font-size: 24px;
  line-height: 56px;
  text-align: center;
  cursor: pointer;
}
.todo-list__item[data-v-51a477c6] {
  padding: 8px;
}
.todo-list__item-title[data-v-51a477c6] {
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  color: #1c1d21;
}
.todo-list__item-memo[data-v-51a477c6] {
  font-size: 12px;
  font-weight: normal;
  line-height: 22px;
  color: #7c8087;
}
.todo-list__item-desc[data-v-51a477c6] {
  font-size: 12px;
  line-height: 22px;
  color: #7c8087;
}`;const o=y();j("data-v-51a477c6");const E=t("span",null,[s(" \u5F85\u529E\u4E8B\u9879 "),t("span",{class:"todo-list__total"},"30")],-1),M={class:"todo-list__item-title"},$={class:"todo-list__item-memo"},O={class:"todo-list__item-desc"},S=t("br",null,null,-1),A=s(" \u5F85\u5BA1\u6279 "),D={class:"todo-list__all"},F=s(" \u67E5\u770B\u66F4\u591A ");C();const N=o((p,V,q,R,U,W)=>{const c=n("ListItemMeta"),r=n("Tag"),m=n("AntButton"),u=n("ListItem"),h=n("List"),f=n("EllipsisOutlined"),x=n("Tooltip"),g=n("CollapseContainer");return a(),l(g,{class:"todo-list",title:"\u5F85\u529E\u4E8B\u9879",canExpan:!1},{title:o(()=>[E]),default:o(()=>[t(h,null,{default:o(()=>[(a(!0),l(B,null,k(p.todoList,e=>(a(),l(u,{key:e.id,class:"todo-list__item"},{default:o(()=>[t(c,null,{title:o(()=>[t("div",null,[t("span",M,i(e.title),1),t("span",$,i(e.memo),1)])]),description:o(()=>[t("div",O,[s(" \u63D0\u4EA4\u4EBA\uFF1A"+i(e.sbmter)+" ",1),S,s(" \u63D0\u4EA4\u65F6\u95F4\uFF1A"+i(e.sbmtTime),1)])]),_:2},1024),t(m,{type:"link"},{default:o(()=>[t(r,{color:"blue"},{default:o(()=>[A]),_:1})]),_:1})]),_:2},1024))),128))]),_:1}),t("div",D,[t(x,{placement:"topRight"},{title:o(()=>[F]),default:o(()=>[t(f)]),_:1})])]),_:1})});_.render=N,_.__scopeId="data-v-51a477c6";export default _;
