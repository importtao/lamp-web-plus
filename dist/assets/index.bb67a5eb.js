import{d as C,b_ as I,r as n,n as s,p as t,M as m,aE as l,aF as $,o as i,q as d,N as y,L as f}from"./index.ff8e7350.js";import{_ as B}from"./BasicForm.7d393d3b.js";import{searchList as F,actions as k,schemas as O}from"./data.cec9f45c.js";import{_ as L}from"./PageWrapper.ed878922.js";import{T as w}from"./index.a9a6f329.js";import{L as c}from"./index.51a28d34.js";import"./vendor.352e3120.js";import"./useFormItem.4d35203f.js";import"./index.33f6c35a.js";import"./index.7b8b790f.js";import"./get.25e661a1.js";import"./conductUtil.2053f1c8.js";import"./iconUtil.57aac0ee.js";import"./_baseSet.47d9038f.js";import"./hasIn.cdeedf38.js";import"./FileOutlined.c1895460.js";import"./user.301754be.js";import"./transButton.8f04232b.js";import"./DeleteOutlined.11a704c5.js";import"./commonEnum.da040d67.js";import"./useModal.1ae7183e.js";import"./useWindowSizeFn.dd41c952.js";import"./FullscreenOutlined.f5cc85ae.js";import"./index.d0beec9f.js";import"./index.4c731c08.js";import"./css.b1edd3c8.js";import"./index.61e91689.js";import"./uuid.2b29000c.js";import"./index.0188a107.js";import"./uniqBy.ad809f18.js";import"./_baseIteratee.219a0b59.js";import"./_baseProperty.74f89655.js";import"./findIndex.fb260bab.js";import"./toInteger.3d2a7161.js";import"./index.2a7bb35e.js";import"./download.ff10bfc9.js";import"./index.84d10328.js";import"./index.71446dfd.js";import"./UpOutlined.b439f448.js";import"./index.d247982f.js";import"./RedoOutlined.581d77bd.js";import"./dayjs.92837c63.js";import"./useState.a76dde6b.js";import"./index.7e22ace8.js";import"./Col.1d424bff.js";import"./responsiveObserve.936f38cb.js";import"./canUseDom.0bf35682.js";import"./useSize.e519a3af.js";import"./index.3aa06684.js";import"./usePageContext.c47bb441.js";import"./onMountedOrActivated.8814f444.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./useBreakpoint.549ec32d.js";import"./ArrowLeftOutlined.e256a87d.js";var _=C({components:{Icon:I,Tag:w,BasicForm:B,PageWrapper:L,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:k,schemas:O}}}),Ue=`.list-search__header-form[data-v-118df618] {
  margin-bottom: -16px;
}
.list-search__container[data-v-118df618] {
  padding: 12px;
  background: #fff;
}
.list-search__title[data-v-118df618] {
  margin-bottom: 12px;
  font-size: 18px;
}
.list-search__content[data-v-118df618] {
  color: rgba(0, 0, 0, 0.65);
}
.list-search__action[data-v-118df618] {
  margin-top: 10px;
}
.list-search__action-item[data-v-118df618] {
  display: inline-block;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.45);
}
.list-search__action-item[data-v-118df618]:nth-child(1) {
  padding-left: 0;
}
.list-search__action-item[data-v-118df618]:nth-child(1), .list-search__action-item[data-v-118df618]:nth-child(2) {
  border-right: 1px solid rgba(206, 206, 206, 0.4);
}
.list-search__action-icon[data-v-118df618] {
  margin-right: 3px;
}
.list-search__time[data-v-118df618] {
  position: absolute;
  right: 20px;
  color: rgba(0, 0, 0, 0.45);
}`;const a=$(),P=a((e,S,W,M,T,A)=>{const j=n("BasicForm"),u=n("Icon"),b=n("Tag"),h=n("a-list-item-meta"),x=n("a-list-item"),g=n("a-list"),v=n("PageWrapper");return i(),s(v,{class:e.prefixCls,title:"\u641C\u7D22\u5217\u8868"},{headerContent:a(()=>[t(j,{class:`${e.prefixCls}__header-form`,labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])]),default:a(()=>[t("div",{class:`${e.prefixCls}__container`},[t(g,null,{default:a(()=>[(i(!0),s(m,null,l(e.list,r=>(i(),s(x,{key:r.id},{default:a(()=>[t(h,null,{description:a(()=>[t("div",{class:`${e.prefixCls}__content`},d(r.content),3),t("div",{class:`${e.prefixCls}__action`},[(i(!0),s(m,null,l(e.actions,(o,p)=>(i(),s("div",{key:p,class:`${e.prefixCls}__action-item`},[o.icon?(i(),s(u,{key:0,class:`${e.prefixCls}__action-icon`,icon:o.icon,color:o.color},null,8,["class","icon","color"])):y("",!0),f(" "+d(o.text),1)],2))),128)),t("span",{class:`${e.prefixCls}__time`},d(r.time),3)],2)]),title:a(()=>[t("p",{class:`${e.prefixCls}__title`},d(r.title),3),t("div",null,[(i(!0),s(m,null,l(r.description,(o,p)=>(i(),s(b,{key:p,class:"mb-2"},{default:a(()=>[f(d(o),1)]),_:2},1024))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})],2)]),_:1},8,["class"])});_.render=P,_.__scopeId="data-v-118df618";export default _;
