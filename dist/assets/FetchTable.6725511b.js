import{_ as c}from"./TableImg.9360aa8a.js";import"./BasicForm.13ecb12b.js";import{u as j}from"./useTable.ea39631d.js";import{getBasicColumns as l}from"./tableData.252346e9.js";import{d as u}from"./table.3ec74f3e.js";import{d as b,r as n,o as f,n as _,p as t,J as s,L as d}from"./index.b361f078.js";import"./useForm.ac288eb4.js";import"./index.80320b3c.js";import"./UpOutlined.cbb592c6.js";import"./index.08bfe127.js";import"./index.ee85ced9.js";import"./uuid.2b29000c.js";import"./get.cbc20f33.js";import"./useWindowSizeFn.d25090e5.js";import"./useModal.7bdad3e3.js";import"./FullscreenOutlined.86c5b021.js";import"./onMountedOrActivated.db240d29.js";import"./useSortable.622674e9.js";import"./SettingOutlined.f4d9e1f5.js";import"./index.8d41a8b1.js";import"./RedoOutlined.2709deaa.js";import"./useFullScreen.541ad79f.js";import"./index.30914b74.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.1cc54c32.js";import"./conductUtil.7ef77030.js";import"./index.325fce14.js";import"./scrollTo.6277e2ee.js";import"./useBreakpoint.3b9cff8d.js";import"./responsiveObserve.16e475dd.js";import"./useExpose.0ed0f0b1.js";import"./index.fe2e064e.js";import"./useFormItem.17a96bc3.js";import"./iconUtil.e9686cd8.js";import"./_baseSet.60a402c1.js";import"./hasIn.661f69c5.js";import"./FileOutlined.a4627299.js";import"./user.449909fc.js";import"./transButton.7b09546d.js";import"./DeleteOutlined.eab5616f.js";import"./commonEnum.da040d67.js";import"./index.fa7b5b48.js";import"./index.781b32b3.js";import"./index.1c4eb95d.js";import"./uniqBy.22bab247.js";import"./_baseIteratee.700ae08f.js";import"./_baseProperty.74f89655.js";import"./findIndex.fe35620d.js";import"./toInteger.f515429e.js";import"./index.c25573d6.js";import"./download.8a0fd70b.js";import"./index.e7aa41c1.js";import"./vendor.352e3120.js";import"./dayjs.c73a8766.js";import"./index.57e65500.js";import"./Col.4346c2f2.js";import"./useSize.5dcbe36a.js";import"./index.6cab1e04.js";var m=b({components:{BasicTable:c},setup(){const[e,{reload:o}]=j({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:u,columns:l()});function i(){o()}function r(){o({page:1})}return{registerTable:e,handleReloadCurrent:i,handleReload:r}}});const x={class:"p-4"},B=d(" \u5237\u65B0\u5F53\u524D\u9875 "),C=d(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function g(e,o,i,r,h,F){const a=n("a-button"),p=n("BasicTable");return f(),_("div",x,[t(p,{onRegister:e.registerTable},{toolbar:s(()=>[t(a,{type:"primary",onClick:e.handleReloadCurrent},{default:s(()=>[B]),_:1},8,["onClick"]),t(a,{type:"primary",onClick:e.handleReload},{default:s(()=>[C]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}m.render=g;export default m;
