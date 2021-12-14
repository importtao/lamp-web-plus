import{d as C,b_ as I,r as n,n as s,p as t,M as m,aE as l,aF as $,o as i,q as d,N as y,L as f}from"./index.05ea33df.js";import{_ as B}from"./BasicForm.2f71c419.js";import{searchList as F,actions as k,schemas as O}from"./data.cec9f45c.js";import{_ as L}from"./PageWrapper.d9e1596c.js";import{T as w}from"./index.cfb51f70.js";import{L as c}from"./index.4057a262.js";import"./vendor.352e3120.js";import"./useFormItem.902ca43e.js";import"./index.faeec8a2.js";import"./index.cf387d6d.js";import"./get.f4e2a1c0.js";import"./conductUtil.82525e99.js";import"./iconUtil.d875d1ff.js";import"./_baseSet.e2b00d8d.js";import"./hasIn.3c39ff13.js";import"./FileOutlined.72b26251.js";import"./user.16e1967f.js";import"./transButton.9a1903a9.js";import"./DeleteOutlined.3986c5e6.js";import"./commonEnum.da040d67.js";import"./useModal.024b9b70.js";import"./useWindowSizeFn.bedcc730.js";import"./FullscreenOutlined.6ef047e2.js";import"./index.be446867.js";import"./index.8795eb20.js";import"./css.b1edd3c8.js";import"./index.c3f5e4ba.js";import"./uuid.2b29000c.js";import"./index.74eb6f9c.js";import"./uniqBy.6f8da1a0.js";import"./_baseIteratee.6051ea54.js";import"./_baseProperty.74f89655.js";import"./findIndex.0ad6ac98.js";import"./toInteger.e36ca646.js";import"./index.1393b71a.js";import"./download.5d8f05f1.js";import"./index.fe88e9db.js";import"./index.021ff727.js";import"./UpOutlined.b05eb3d5.js";import"./index.d265e78b.js";import"./RedoOutlined.d497a357.js";import"./dayjs.26660a9f.js";import"./useState.20f1f9ca.js";import"./index.e5a1f932.js";import"./Col.8bf95754.js";import"./responsiveObserve.968aa5d0.js";import"./canUseDom.0bf35682.js";import"./useSize.c28e111d.js";import"./index.48bbff73.js";import"./usePageContext.918ba169.js";import"./onMountedOrActivated.a12ac1c0.js";import"./index.dbdd549b.js";import"./index.03402249.js";import"./useBreakpoint.249417d5.js";import"./ArrowLeftOutlined.97d250aa.js";var _=C({components:{Icon:I,Tag:w,BasicForm:B,PageWrapper:L,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:k,schemas:O}}}),Ue=`.list-search__header-form[data-v-118df618] {
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
