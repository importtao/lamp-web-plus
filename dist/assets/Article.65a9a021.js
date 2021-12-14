import{d as L,b_ as C,r,n as e,M as p,aE as _,aF as h,o as n,p as o,q as c,L as u,N as $}from"./index.b7a14d4f.js";import{articleList as j,actions as y}from"./data.7957a078.js";import{L as d}from"./index.280bdee5.js";import{T as k}from"./index.82115275.js";import"./vendor.352e3120.js";import"./Col.deca4875.js";import"./responsiveObserve.0e84fd18.js";import"./canUseDom.0bf35682.js";import"./useBreakpoint.508a26d1.js";var m=L({components:{List:d,ListItem:d.Item,ListItemMeta:d.Item.Meta,Tag:k,Icon:C},setup(){return{prefixCls:"account-center-article",list:j,actions:y}}}),G=`.account-center-article__title[data-v-8bb19250] {
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
}`;const s=h(),M=s((t,T,N,B,V,w)=>{const b=r("Tag"),f=r("ListItemMeta"),v=r("Icon"),g=r("ListItem"),I=r("List");return n(),e(I,{"item-layout":"vertical",class:t.prefixCls},{default:s(()=>[(n(!0),e(p,null,_(t.list,(i,x)=>(n(),e(g,{key:x},{default:s(()=>[o(f,null,{description:s(()=>[o("div",{class:`${t.prefixCls}__content`},c(i.content),3)]),title:s(()=>[o("p",{class:`${t.prefixCls}__title`},c(i.title),3),o("div",null,[(n(!0),e(p,null,_(i.description,(a,l)=>(n(),e(b,{key:l,class:"mb-2"},{default:s(()=>[u(c(a),1)]),_:2},1024))),128))])]),_:2},1024),o("div",null,[(n(!0),e(p,null,_(t.actions,(a,l)=>(n(),e("div",{key:l,class:`${t.prefixCls}__action`},[a.icon?(n(),e(v,{key:0,class:`${t.prefixCls}__action-icon`,icon:a.icon,color:a.color},null,8,["class","icon","color"])):$("",!0),u(" "+c(a.text),1)],2))),128)),o("span",{class:`${t.prefixCls}__time`},c(i.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])});m.render=M,m.__scopeId="data-v-8bb19250";export default m;
