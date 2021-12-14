import{d as C,b_ as I,r as a,n as s,p as t,M as m,aE as l,aF as $,o as i,q as d,N as y,L as f}from"./index.b7a14d4f.js";import{_ as B}from"./BasicForm.8a90524a.js";import{searchList as F,actions as k,schemas as O}from"./data.cec9f45c.js";import{_ as L}from"./PageWrapper.62f72559.js";import{T as w}from"./index.82115275.js";import{L as c}from"./index.280bdee5.js";import"./vendor.352e3120.js";import"./useFormItem.3078eec7.js";import"./index.1fe375b7.js";import"./index.18e73f7c.js";import"./get.17b5f080.js";import"./conductUtil.b952d6da.js";import"./iconUtil.5323a4d2.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./user.d5977986.js";import"./transButton.928b71e3.js";import"./DeleteOutlined.123b484f.js";import"./commonEnum.da040d67.js";import"./useModal.cb74101d.js";import"./useWindowSizeFn.1c78bb1f.js";import"./FullscreenOutlined.c2c9b8db.js";import"./index.f8f362f5.js";import"./index.2fe134dc.js";import"./css.b1edd3c8.js";import"./index.b7943f07.js";import"./uuid.2b29000c.js";import"./index.5cf0b4b1.js";import"./uniqBy.272154d9.js";import"./_baseIteratee.580b2020.js";import"./_baseProperty.74f89655.js";import"./findIndex.ca0f29b6.js";import"./toInteger.085db34b.js";import"./index.9cae10d5.js";import"./download.19f0ec6f.js";import"./index.ba68f563.js";import"./index.bf350d2a.js";import"./UpOutlined.08898d4e.js";import"./index.4c37e48f.js";import"./RedoOutlined.2970476a.js";import"./dayjs.77e2c65c.js";import"./useState.9469ce58.js";import"./index.b5e3a742.js";import"./Col.deca4875.js";import"./responsiveObserve.0e84fd18.js";import"./canUseDom.0bf35682.js";import"./useSize.a97ab731.js";import"./index.173fb3cc.js";import"./usePageContext.03f0ffc0.js";import"./onMountedOrActivated.64fcf717.js";import"./index.aba8a851.js";import"./index.d9119902.js";import"./useBreakpoint.508a26d1.js";import"./ArrowLeftOutlined.70d092e9.js";var _=C({components:{Icon:I,Tag:w,BasicForm:B,PageWrapper:L,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:k,schemas:O}}}),Ue=`.list-search__header-form[data-v-118df618] {
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
}`;const n=$(),P=n((e,S,W,M,T,A)=>{const j=a("BasicForm"),u=a("Icon"),b=a("Tag"),h=a("a-list-item-meta"),x=a("a-list-item"),g=a("a-list"),v=a("PageWrapper");return i(),s(v,{class:e.prefixCls,title:"\u641C\u7D22\u5217\u8868"},{headerContent:n(()=>[t(j,{class:`${e.prefixCls}__header-form`,labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])]),default:n(()=>[t("div",{class:`${e.prefixCls}__container`},[t(g,null,{default:n(()=>[(i(!0),s(m,null,l(e.list,r=>(i(),s(x,{key:r.id},{default:n(()=>[t(h,null,{description:n(()=>[t("div",{class:`${e.prefixCls}__content`},d(r.content),3),t("div",{class:`${e.prefixCls}__action`},[(i(!0),s(m,null,l(e.actions,(o,p)=>(i(),s("div",{key:p,class:`${e.prefixCls}__action-item`},[o.icon?(i(),s(u,{key:0,class:`${e.prefixCls}__action-icon`,icon:o.icon,color:o.color},null,8,["class","icon","color"])):y("",!0),f(" "+d(o.text),1)],2))),128)),t("span",{class:`${e.prefixCls}__time`},d(r.time),3)],2)]),title:n(()=>[t("p",{class:`${e.prefixCls}__title`},d(r.title),3),t("div",null,[(i(!0),s(m,null,l(r.description,(o,p)=>(i(),s(b,{key:p,class:"mb-2"},{default:n(()=>[f(d(o),1)]),_:2},1024))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})],2)]),_:1},8,["class"])});_.render=P,_.__scopeId="data-v-118df618";export default _;
