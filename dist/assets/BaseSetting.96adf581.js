import{_ as g}from"./BasicForm.8a90524a.js";import{u as x}from"./useForm.1103fde3.js";import{be as F,d as I,aY as C,B as v,b_ as B,x as w,F as S,r as s,n as U,p as e,aF as y,aW as O,L as m,aX as $,o as A}from"./index.b7a14d4f.js";import{h as N}from"./header.d801b988.js";import{b as k}from"./data.a32591d5.js";import{U as R}from"./index.5cf0b4b1.js";import{R as l,C as u}from"./index.173fb3cc.js";import"./useFormItem.3078eec7.js";import"./index.1fe375b7.js";import"./index.18e73f7c.js";import"./get.17b5f080.js";import"./conductUtil.b952d6da.js";import"./iconUtil.5323a4d2.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./user.d5977986.js";import"./transButton.928b71e3.js";import"./DeleteOutlined.123b484f.js";import"./commonEnum.da040d67.js";import"./useModal.cb74101d.js";import"./useWindowSizeFn.1c78bb1f.js";import"./FullscreenOutlined.c2c9b8db.js";import"./index.f8f362f5.js";import"./index.2fe134dc.js";import"./css.b1edd3c8.js";import"./index.b7943f07.js";import"./index.82115275.js";import"./uuid.2b29000c.js";import"./index.9cae10d5.js";import"./download.19f0ec6f.js";import"./index.ba68f563.js";import"./index.bf350d2a.js";import"./UpOutlined.08898d4e.js";import"./index.4c37e48f.js";import"./vendor.352e3120.js";import"./RedoOutlined.2970476a.js";import"./dayjs.77e2c65c.js";import"./useState.9469ce58.js";import"./index.b5e3a742.js";import"./Col.deca4875.js";import"./responsiveObserve.0e84fd18.js";import"./canUseDom.0bf35682.js";import"./_baseIteratee.580b2020.js";import"./_baseProperty.74f89655.js";import"./findIndex.ca0f29b6.js";import"./toInteger.085db34b.js";import"./useSize.a97ab731.js";import"./uniqBy.272154d9.js";var a;(function(t){t.ACCOUNT_INFO="/account/getAccountInfo"})(a||(a={}));const M=()=>F.get({url:a.ACCOUNT_INFO});var n=I({components:{BasicForm:g,CollapseContainer:C,Button:v,Upload:R,Icon:B,[l.name]:l,[u.name]:u},setup(){const{createMessage:t}=S(),[i,{setFieldsValue:r}]=x({labelWidth:120,schemas:k,showActionButtonGroup:!1});return w(async()=>{const d=await M();r(d)}),{headerImg:N,register:i,handleSubmit:()=>{t.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),We=`.change-avatar img[data-v-dad0b9f0] {
  display: block;
  margin-bottom: 15px;
  border-radius: 50%;
}`;const o=y();O("data-v-dad0b9f0");const T={class:"change-avatar"},V=e("div",{class:"mb-2"}," \u5934\u50CF ",-1),W=m("\u66F4\u6362\u5934\u50CF "),z=m(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ");$();const D=o((t,i,r,d,E,L)=>{const _=s("BasicForm"),c=s("a-col"),f=s("Icon"),p=s("Button"),j=s("Upload"),b=s("a-row"),h=s("CollapseContainer");return A(),U(h,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:o(()=>[e(b,{gutter:24},{default:o(()=>[e(c,{span:14},{default:o(()=>[e(_,{onRegister:t.register},null,8,["onRegister"])]),_:1}),e(c,{span:10},{default:o(()=>[e("div",T,[V,e("img",{width:"140",src:t.headerImg},null,8,["src"]),e(j,{showUploadList:!1},{default:o(()=>[e(p,{type:"ghost",class:"ml-5"},{default:o(()=>[e(f,{icon:"feather:upload"}),W]),_:1})]),_:1})])]),_:1})]),_:1}),e(p,{type:"primary",onClick:t.handleSubmit},{default:o(()=>[z]),_:1},8,["onClick"])]),_:1})});n.render=D,n.__scopeId="data-v-dad0b9f0";export default n;
