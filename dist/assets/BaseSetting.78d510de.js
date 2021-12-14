import{_ as g}from"./BasicForm.71637030.js";import{u as x}from"./useForm.eec49fca.js";import{be as F,d as I,aY as C,B as v,b_ as B,x as w,F as S,r as s,n as U,p as e,aF as y,aW as O,L as m,aX as $,o as A}from"./index.0523a5a3.js";import{h as N}from"./header.d801b988.js";import{b as k}from"./data.a32591d5.js";import{U as R}from"./index.8b9bc77d.js";import{R as l,C as u}from"./index.4637d8b2.js";import"./useFormItem.ddca9049.js";import"./index.26c5e60b.js";import"./index.a9b2b45a.js";import"./get.108cb567.js";import"./conductUtil.fde7132a.js";import"./iconUtil.f3ee4c23.js";import"./_baseSet.f781a95b.js";import"./hasIn.a020a292.js";import"./FileOutlined.53cb4a4e.js";import"./user.c02d9c13.js";import"./transButton.555d93e9.js";import"./DeleteOutlined.30981501.js";import"./commonEnum.da040d67.js";import"./useModal.131645a5.js";import"./useWindowSizeFn.4268e9dd.js";import"./FullscreenOutlined.d52a1fbe.js";import"./index.8e7c33d5.js";import"./index.09507e37.js";import"./css.b1edd3c8.js";import"./index.436d37b6.js";import"./index.c4d8ae58.js";import"./uuid.2b29000c.js";import"./index.b642a15b.js";import"./download.062b03e8.js";import"./index.383f27d9.js";import"./index.b9116045.js";import"./UpOutlined.a2803449.js";import"./index.587209e3.js";import"./vendor.352e3120.js";import"./RedoOutlined.e111b4c0.js";import"./dayjs.7ad781c8.js";import"./useState.43515907.js";import"./index.315e04ce.js";import"./Col.102f0df6.js";import"./responsiveObserve.43c11602.js";import"./canUseDom.0bf35682.js";import"./_baseIteratee.32c93b4a.js";import"./_baseProperty.74f89655.js";import"./findIndex.0841f873.js";import"./toInteger.1430c119.js";import"./useSize.6627aa05.js";import"./uniqBy.2c7c6ba7.js";var a;(function(t){t.ACCOUNT_INFO="/account/getAccountInfo"})(a||(a={}));const M=()=>F.get({url:a.ACCOUNT_INFO});var n=I({components:{BasicForm:g,CollapseContainer:C,Button:v,Upload:R,Icon:B,[l.name]:l,[u.name]:u},setup(){const{createMessage:t}=S(),[i,{setFieldsValue:r}]=x({labelWidth:120,schemas:k,showActionButtonGroup:!1});return w(async()=>{const d=await M();r(d)}),{headerImg:N,register:i,handleSubmit:()=>{t.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),We=`.change-avatar img[data-v-dad0b9f0] {
  display: block;
  margin-bottom: 15px;
  border-radius: 50%;
}`;const o=y();O("data-v-dad0b9f0");const T={class:"change-avatar"},V=e("div",{class:"mb-2"}," \u5934\u50CF ",-1),W=m("\u66F4\u6362\u5934\u50CF "),z=m(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ");$();const D=o((t,i,r,d,E,L)=>{const _=s("BasicForm"),c=s("a-col"),j=s("Icon"),p=s("Button"),f=s("Upload"),b=s("a-row"),h=s("CollapseContainer");return A(),U(h,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:o(()=>[e(b,{gutter:24},{default:o(()=>[e(c,{span:14},{default:o(()=>[e(_,{onRegister:t.register},null,8,["onRegister"])]),_:1}),e(c,{span:10},{default:o(()=>[e("div",T,[V,e("img",{width:"140",src:t.headerImg},null,8,["src"]),e(f,{showUploadList:!1},{default:o(()=>[e(p,{type:"ghost",class:"ml-5"},{default:o(()=>[e(j,{icon:"feather:upload"}),W]),_:1})]),_:1})])]),_:1})]),_:1}),e(p,{type:"primary",onClick:t.handleSubmit},{default:o(()=>[z]),_:1},8,["onClick"])]),_:1})});n.render=D,n.__scopeId="data-v-dad0b9f0";export default n;
