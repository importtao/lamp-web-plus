import{d as C,b_ as k,r as o,n as e,p as n,M as w,aE as I,aF as y,aW as $,aX as P,o as i,N as d,q as l,L as _}from"./index.ff8e7350.js";import{cardList as L}from"./data.a96915dc.js";import{_ as S}from"./PageWrapper.ed878922.js";import{P as z}from"./index.61e91689.js";import{L as c}from"./index.51a28d34.js";import{R as m,C as b}from"./index.3aa06684.js";import"./vendor.352e3120.js";import"./usePageContext.c47bb441.js";import"./onMountedOrActivated.8814f444.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./useBreakpoint.549ec32d.js";import"./responsiveObserve.936f38cb.js";import"./useSize.e519a3af.js";import"./transButton.8f04232b.js";import"./ArrowLeftOutlined.e256a87d.js";import"./Col.1d424bff.js";import"./canUseDom.0bf35682.js";var p=C({components:{Icon:k,Progress:z,PageWrapper:S,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta,[m.name]:m,[b.name]:b},setup(){return{prefixCls:"list-basic",list:L,pagination:{show:!0,pageSize:3}}}}),fn=`.list-basic__top[data-v-314ba016] {
  padding: 24px;
  text-align: center;
  background: #fff;
}
.list-basic__top-col[data-v-314ba016]:not(:last-child) {
  border-right: 1px dashed rgba(206, 206, 206, 0.4);
}
.list-basic__top-col div[data-v-314ba016] {
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.45);
}
.list-basic__top-col p[data-v-314ba016] {
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.85);
}
.list-basic__content[data-v-314ba016] {
  padding: 24px;
  margin-top: 12px;
  background: #fff;
}
.list-basic__content .list[data-v-314ba016] {
  position: relative;
}
.list-basic__content .icon[data-v-314ba016] {
  font-size: 40px !important;
}
.list-basic__content .extra[data-v-314ba016] {
  position: absolute;
  top: 20px;
  right: 15px;
  font-weight: normal;
  color: #1890ff;
  cursor: pointer;
}
.list-basic__content .description[data-v-314ba016] {
  display: inline-block;
  width: 40%;
}
.list-basic__content .info[data-v-314ba016] {
  display: inline-block;
  width: 30%;
  text-align: center;
}
.list-basic__content .info div[data-v-314ba016] {
  display: inline-block;
  padding: 0 20px;
}
.list-basic__content .info div span[data-v-314ba016] {
  display: block;
}
.list-basic__content .progress[data-v-314ba016] {
  display: inline-block;
  width: 15%;
  vertical-align: top;
}`;const a=y();$("data-v-314ba016");const W=n("div",null,"\u6211\u7684\u5F85\u529E",-1),B=n("p",null,"8\u4E2A\u4EFB\u52A1",-1),M=n("div",null,"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",-1),N=n("p",null,"32\u5206\u949F",-1),O=n("div",null,"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",-1),A=n("p",null,"24\u4E2A\u4EFB\u52A1",-1),V={key:0,class:"extra"},D={class:"description"},F={class:"info"},R=n("span",null,"Owner",-1),q=n("span",null,"\u5F00\u59CB\u65F6\u95F4",-1),E={class:"progress"};P();const T=a((s,U,X,G,H,J)=>{const r=o("a-col"),f=o("a-row"),u=o("Icon"),v=o("Progress"),g=o("a-list-item-meta"),h=o("a-list-item"),x=o("a-list"),j=o("PageWrapper");return i(),e(j,{class:s.prefixCls,title:"\u6807\u51C6\u5217\u8868"},{default:a(()=>[n("div",{class:`${s.prefixCls}__top`},[n(f,{gutter:12},{default:a(()=>[n(r,{span:8,class:`${s.prefixCls}__top-col`},{default:a(()=>[W,B]),_:1},8,["class"]),n(r,{span:8,class:`${s.prefixCls}__top-col`},{default:a(()=>[M,N]),_:1},8,["class"]),n(r,{span:8,class:`${s.prefixCls}__top-col`},{default:a(()=>[O,A]),_:1},8,["class"])]),_:1})],2),n("div",{class:`${s.prefixCls}__content`},[n(x,{pagination:s.pagination},{default:a(()=>[(i(!0),e(w,null,I(s.list,t=>(i(),e(h,{key:t.id,class:"list"},{default:a(()=>[n(g,null,{avatar:a(()=>[t.icon?(i(),e(u,{key:0,class:"icon",icon:t.icon,color:t.color},null,8,["icon","color"])):d("",!0)]),title:a(()=>[n("span",null,l(t.title),1),t.extra?(i(),e("div",V,l(t.extra),1)):d("",!0)]),description:a(()=>[n("div",D,l(t.description),1),n("div",F,[n("div",null,[R,_(l(t.author),1)]),n("div",null,[q,_(l(t.datetime),1)])]),n("div",E,[n(v,{percent:t.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])});p.render=T,p.__scopeId="data-v-314ba016";export default p;
