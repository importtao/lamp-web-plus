import{d as C,b_ as I,r as o,n as s,p as t,M as m,aE as l,aF as $,o as i,q as c,N as y,L as f}from"./index.b361f078.js";import{_ as B}from"./BasicForm.13ecb12b.js";import{searchList as F,actions as k,schemas as O}from"./data.cec9f45c.js";import{_ as L}from"./PageWrapper.3df1718a.js";import{T as w}from"./index.781b32b3.js";import{L as d}from"./index.0635e943.js";import"./vendor.352e3120.js";import"./useFormItem.17a96bc3.js";import"./index.325fce14.js";import"./index.ee85ced9.js";import"./get.cbc20f33.js";import"./conductUtil.7ef77030.js";import"./iconUtil.e9686cd8.js";import"./_baseSet.60a402c1.js";import"./hasIn.661f69c5.js";import"./FileOutlined.a4627299.js";import"./user.449909fc.js";import"./transButton.7b09546d.js";import"./DeleteOutlined.eab5616f.js";import"./commonEnum.da040d67.js";import"./useModal.7bdad3e3.js";import"./useWindowSizeFn.d25090e5.js";import"./FullscreenOutlined.86c5b021.js";import"./index.8d41a8b1.js";import"./index.fe2e064e.js";import"./css.b1edd3c8.js";import"./index.fa7b5b48.js";import"./uuid.2b29000c.js";import"./index.1c4eb95d.js";import"./uniqBy.22bab247.js";import"./_baseIteratee.700ae08f.js";import"./_baseProperty.74f89655.js";import"./findIndex.fe35620d.js";import"./toInteger.f515429e.js";import"./index.c25573d6.js";import"./download.8a0fd70b.js";import"./index.e7aa41c1.js";import"./index.80320b3c.js";import"./UpOutlined.cbb592c6.js";import"./index.08bfe127.js";import"./RedoOutlined.2709deaa.js";import"./dayjs.c73a8766.js";import"./useState.1cc54c32.js";import"./index.57e65500.js";import"./Col.4346c2f2.js";import"./responsiveObserve.16e475dd.js";import"./canUseDom.0bf35682.js";import"./useSize.5dcbe36a.js";import"./index.6cab1e04.js";import"./usePageContext.48026c97.js";import"./onMountedOrActivated.db240d29.js";import"./index.2682bd6c.js";import"./index.ad62d489.js";import"./useBreakpoint.3b9cff8d.js";import"./ArrowLeftOutlined.9183eb3a.js";var _=C({components:{Icon:I,Tag:w,BasicForm:B,PageWrapper:L,[d.name]:d,[d.Item.name]:d.Item,AListItemMeta:d.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:k,schemas:O}}}),Ue=`.list-search__header-form[data-v-118df618] {
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
}`;const n=$(),P=n((e,S,W,M,T,A)=>{const j=o("BasicForm"),u=o("Icon"),b=o("Tag"),h=o("a-list-item-meta"),x=o("a-list-item"),g=o("a-list"),v=o("PageWrapper");return i(),s(v,{class:e.prefixCls,title:"\u641C\u7D22\u5217\u8868"},{headerContent:n(()=>[t(j,{class:`${e.prefixCls}__header-form`,labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])]),default:n(()=>[t("div",{class:`${e.prefixCls}__container`},[t(g,null,{default:n(()=>[(i(!0),s(m,null,l(e.list,r=>(i(),s(x,{key:r.id},{default:n(()=>[t(h,null,{description:n(()=>[t("div",{class:`${e.prefixCls}__content`},c(r.content),3),t("div",{class:`${e.prefixCls}__action`},[(i(!0),s(m,null,l(e.actions,(a,p)=>(i(),s("div",{key:p,class:`${e.prefixCls}__action-item`},[a.icon?(i(),s(u,{key:0,class:`${e.prefixCls}__action-icon`,icon:a.icon,color:a.color},null,8,["class","icon","color"])):y("",!0),f(" "+c(a.text),1)],2))),128)),t("span",{class:`${e.prefixCls}__time`},c(r.time),3)],2)]),title:n(()=>[t("p",{class:`${e.prefixCls}__title`},c(r.title),3),t("div",null,[(i(!0),s(m,null,l(r.description,(a,p)=>(i(),s(b,{key:p,class:"mb-2"},{default:n(()=>[f(c(a),1)]),_:2},1024))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})],2)]),_:1},8,["class"])});_.render=P,_.__scopeId="data-v-118df618";export default _;
