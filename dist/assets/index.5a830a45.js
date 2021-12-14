import{d as C,b_ as I,r as n,n as s,p as t,M as m,aE as l,aF as $,o as i,q as c,N as y,L as f}from"./index.b6dfbfcf.js";import{_ as B}from"./BasicForm.ba267815.js";import{searchList as F,actions as k,schemas as O}from"./data.cec9f45c.js";import{_ as L}from"./PageWrapper.69acb2a5.js";import{T as w}from"./index.e5a6a79c.js";import{L as d}from"./index.5c3ef301.js";import"./vendor.352e3120.js";import"./useFormItem.23c9ece5.js";import"./index.658efdb1.js";import"./index.f208c793.js";import"./get.4daef9c8.js";import"./conductUtil.8c9b1169.js";import"./iconUtil.018c1850.js";import"./_baseSet.e7326e09.js";import"./hasIn.babd797c.js";import"./FileOutlined.44378449.js";import"./user.45434715.js";import"./transButton.bd1bd746.js";import"./DeleteOutlined.e9575d1c.js";import"./commonEnum.da040d67.js";import"./useModal.2752a197.js";import"./useWindowSizeFn.fee40caf.js";import"./FullscreenOutlined.fdd43b18.js";import"./index.57ea38db.js";import"./index.ffba0b1a.js";import"./css.b1edd3c8.js";import"./index.1aad4d44.js";import"./uuid.2b29000c.js";import"./index.672abebf.js";import"./uniqBy.c4f2e7ec.js";import"./_baseIteratee.2e9463e3.js";import"./_baseProperty.74f89655.js";import"./findIndex.c7191173.js";import"./toInteger.e4331dbc.js";import"./index.68ce2096.js";import"./download.d97e990c.js";import"./index.03ecce9c.js";import"./index.9816e582.js";import"./UpOutlined.4269b743.js";import"./index.238a8995.js";import"./RedoOutlined.6634afa6.js";import"./dayjs.c72a52f8.js";import"./useState.9c0f957d.js";import"./index.f73b7b74.js";import"./Col.590da3fb.js";import"./responsiveObserve.7206f913.js";import"./canUseDom.0bf35682.js";import"./useSize.fb5b95d6.js";import"./index.fc5361f4.js";import"./usePageContext.4aadab4f.js";import"./onMountedOrActivated.9d53918d.js";import"./index.a846e3a0.js";import"./index.4cbf17ba.js";import"./useBreakpoint.4a44e358.js";import"./ArrowLeftOutlined.7dae0225.js";var _=C({components:{Icon:I,Tag:w,BasicForm:B,PageWrapper:L,[d.name]:d,[d.Item.name]:d.Item,AListItemMeta:d.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:k,schemas:O}}}),Ue=`.list-search__header-form[data-v-118df618] {
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
}`;const a=$(),P=a((e,S,W,M,T,A)=>{const j=n("BasicForm"),u=n("Icon"),b=n("Tag"),h=n("a-list-item-meta"),x=n("a-list-item"),g=n("a-list"),v=n("PageWrapper");return i(),s(v,{class:e.prefixCls,title:"\u641C\u7D22\u5217\u8868"},{headerContent:a(()=>[t(j,{class:`${e.prefixCls}__header-form`,labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])]),default:a(()=>[t("div",{class:`${e.prefixCls}__container`},[t(g,null,{default:a(()=>[(i(!0),s(m,null,l(e.list,r=>(i(),s(x,{key:r.id},{default:a(()=>[t(h,null,{description:a(()=>[t("div",{class:`${e.prefixCls}__content`},c(r.content),3),t("div",{class:`${e.prefixCls}__action`},[(i(!0),s(m,null,l(e.actions,(o,p)=>(i(),s("div",{key:p,class:`${e.prefixCls}__action-item`},[o.icon?(i(),s(u,{key:0,class:`${e.prefixCls}__action-icon`,icon:o.icon,color:o.color},null,8,["class","icon","color"])):y("",!0),f(" "+c(o.text),1)],2))),128)),t("span",{class:`${e.prefixCls}__time`},c(r.time),3)],2)]),title:a(()=>[t("p",{class:`${e.prefixCls}__title`},c(r.title),3),t("div",null,[(i(!0),s(m,null,l(r.description,(o,p)=>(i(),s(b,{key:p,class:"mb-2"},{default:a(()=>[f(c(o),1)]),_:2},1024))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})],2)]),_:1},8,["class"])});_.render=P,_.__scopeId="data-v-118df618";export default _;
