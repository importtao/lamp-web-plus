import{d as L,b_ as C,r as s,n as e,M as p,aE as _,aF as h,o as n,p as o,q as r,L as u,N as $}from"./index.b6dfbfcf.js";import{articleList as j,actions as y}from"./data.b49d8f11.js";import{L as d}from"./index.5c3ef301.js";import{T as k}from"./index.e5a6a79c.js";import"./vendor.352e3120.js";import"./Col.590da3fb.js";import"./responsiveObserve.7206f913.js";import"./canUseDom.0bf35682.js";import"./useBreakpoint.4a44e358.js";var m=L({components:{List:d,ListItem:d.Item,ListItemMeta:d.Item.Meta,Tag:k,Icon:C},setup(){return{prefixCls:"account-center-article",list:j,actions:y}}}),G=`.account-center-article__title[data-v-8bb19250] {
  margin-bottom: 12px;
  font-size: 18px;
}
.account-center-article__content[data-v-8bb19250] {
  color: rgba(0, 0, 0, 0.65);
}
.account-center-article__action[data-v-8bb19250] {
  display: inline-block;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.45);
}
.account-center-article__action[data-v-8bb19250]:nth-child(1), .account-center-article__action[data-v-8bb19250]:nth-child(2) {
  border-right: 1px solid rgba(206, 206, 206, 0.4);
}
.account-center-article__action-icon[data-v-8bb19250] {
  margin-right: 3px;
}
.account-center-article__time[data-v-8bb19250] {
  position: absolute;
  right: 20px;
  color: rgba(0, 0, 0, 0.45);
}`;const c=h(),M=c((t,T,N,B,V,w)=>{const b=s("Tag"),f=s("ListItemMeta"),v=s("Icon"),g=s("ListItem"),I=s("List");return n(),e(I,{"item-layout":"vertical",class:t.prefixCls},{default:c(()=>[(n(!0),e(p,null,_(t.list,(i,x)=>(n(),e(g,{key:x},{default:c(()=>[o(f,null,{description:c(()=>[o("div",{class:`${t.prefixCls}__content`},r(i.content),3)]),title:c(()=>[o("p",{class:`${t.prefixCls}__title`},r(i.title),3),o("div",null,[(n(!0),e(p,null,_(i.description,(a,l)=>(n(),e(b,{key:l,class:"mb-2"},{default:c(()=>[u(r(a),1)]),_:2},1024))),128))])]),_:2},1024),o("div",null,[(n(!0),e(p,null,_(t.actions,(a,l)=>(n(),e("div",{key:l,class:`${t.prefixCls}__action`},[a.icon?(n(),e(v,{key:0,class:`${t.prefixCls}__action-icon`,icon:a.icon,color:a.color},null,8,["class","icon","color"])):$("",!0),u(" "+r(a.text),1)],2))),128)),o("span",{class:`${t.prefixCls}__time`},r(i.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])});m.render=M,m.__scopeId="data-v-8bb19250";export default m;
