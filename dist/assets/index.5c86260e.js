import{d as C,b_ as I,r as n,n as s,p as t,M as m,aE as l,aF as $,o as i,q as d,N as y,L as f}from"./index.f012a3f4.js";import{_ as B}from"./BasicForm.2d8a4167.js";import{searchList as F,actions as k,schemas as O}from"./data.cec9f45c.js";import{_ as L}from"./PageWrapper.06ac3dfa.js";import{T as w}from"./index.5919009b.js";import{L as c}from"./index.a3803284.js";import"./vendor.352e3120.js";import"./useFormItem.828d968c.js";import"./index.656c6dbf.js";import"./index.6b5846e1.js";import"./get.4bb36d6d.js";import"./conductUtil.e383e830.js";import"./iconUtil.f2afc0cc.js";import"./_baseSet.77ab947c.js";import"./hasIn.e5f45297.js";import"./FileOutlined.dfec8941.js";import"./user.8beb92fb.js";import"./transButton.77ed102e.js";import"./DeleteOutlined.4af221e4.js";import"./commonEnum.da040d67.js";import"./useModal.31640c24.js";import"./useWindowSizeFn.21617b5b.js";import"./FullscreenOutlined.db659752.js";import"./index.a99c15a9.js";import"./index.8cfd22dd.js";import"./css.b1edd3c8.js";import"./index.ccba4a8f.js";import"./uuid.2b29000c.js";import"./index.3a3a0b83.js";import"./uniqBy.1b31fa16.js";import"./_baseIteratee.c907cd0a.js";import"./_baseProperty.74f89655.js";import"./findIndex.2bc5b0a2.js";import"./toInteger.87149fb4.js";import"./index.1df1593d.js";import"./download.09c2660b.js";import"./index.86f670f0.js";import"./index.22fa49e6.js";import"./UpOutlined.5f7f87c9.js";import"./index.fcff9c6a.js";import"./RedoOutlined.bbea3551.js";import"./dayjs.881e239d.js";import"./useState.b98aa3d0.js";import"./index.412350b3.js";import"./Col.13d8b9cb.js";import"./responsiveObserve.40f9db24.js";import"./canUseDom.0bf35682.js";import"./useSize.5c4412c9.js";import"./index.41a9c009.js";import"./usePageContext.2729de0d.js";import"./onMountedOrActivated.a84ead65.js";import"./index.df461530.js";import"./index.069b5dd9.js";import"./useBreakpoint.521f32f2.js";import"./ArrowLeftOutlined.61d94bda.js";var _=C({components:{Icon:I,Tag:w,BasicForm:B,PageWrapper:L,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta},setup(){return{prefixCls:"list-search",list:F,actions:k,schemas:O}}}),Ue=`.list-search__header-form[data-v-118df618] {
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
