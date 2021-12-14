import{d as C,b_ as I,r as n,n as s,p as t,M as m,aE as l,aF as $,o as i,q as d,N as y,L as f}from"./index.0523a5a3.js";import{_ as B}from"./BasicForm.71637030.js";import{searchList as F,actions as k,schemas as O}from"./data.cec9f45c.js";import{_ as L}from"./PageWrapper.40d43df1.js";import{T as w}from"./index.c4d8ae58.js";import{L as c}from"./index.c860e084.js";import"./vendor.352e3120.js";import"./useFormItem.ddca9049.js";import"./index.26c5e60b.js";import"./index.a9b2b45a.js";import"./get.108cb567.js";import"./conductUtil.fde7132a.js";import"./iconUtil.f3ee4c23.js";import"./_baseSet.f781a95b.js";import"./hasIn.a020a292.js";import"./FileOutlined.53cb4a4e.js";import"./user.c02d9c13.js";import"./transButton.555d93e9.js";import"./DeleteOutlined.30981501.js";import"./commonEnum.da040d67.js";import"./useModal.131645a5.js";import"./useWindowSizeFn.4268e9dd.js";import"./FullscreenOutlined.d52a1fbe.js";import"./index.8e7c33d5.js";import"./index.09507e37.js";import"./css.b1edd3c8.js";import"./index.436d37b6.js";import"./uuid.2b29000c.js";import"./index.8b9bc77d.js";import"./uniqBy.2c7c6ba7.js";import"./_baseIteratee.32c93b4a.js";import"./_baseProperty.74f89655.js";import"./findIndex.0841f873.js";import"./toInteger.1430c119.js";import"./index.b642a15b.js";import"./download.062b03e8.js";import"./index.383f27d9.js";import"./index.b9116045.js";import"./UpOutlined.a2803449.js";import"./index.587209e3.js";import"./RedoOutlined.e111b4c0.js";import"./dayjs.7ad781c8.js";import"./useState.43515907.js";import"./index.315e04ce.js";import"./Col.102f0df6.js";import"./responsiveObserve.43c11602.js";import"./canUseDom.0bf35682.js";import"./useSize.6627aa05.js";import"./index.4637d8b2.js";import"./usePageContext.0fc2e04d.js";import"./onMountedOrActivated.a2faf533.js";import"./index.e2c95991.js";import"./index.814a8df7.js";import"./useBreakpoint.a9fc3198.js";import"./ArrowLeftOutlined.62657f64.js";var _=C({components:{Icon:I,Tag:w,BasicForm:B,PageWrapper:L,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:k,schemas:O}}}),Ue=`.list-search__header-form[data-v-118df618] {
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
