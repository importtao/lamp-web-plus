import{_ as v}from"./BasicForm.7d393d3b.js";import{u as h}from"./useForm.09fdf95d.js";import{step2Schemas as F}from"./data.2505cb7f.js";import{d as B,r as o,n as g,p as e,aF as I,aW as O,L as i,aX as S,o as y}from"./index.ff8e7350.js";import{A as _}from"./index.2a7bb35e.js";import{D as l}from"./index.d0beec9f.js";import{D as n}from"./index.2d6fe37c.js";import"./useFormItem.4d35203f.js";import"./index.33f6c35a.js";import"./index.7b8b790f.js";import"./get.25e661a1.js";import"./conductUtil.2053f1c8.js";import"./iconUtil.57aac0ee.js";import"./_baseSet.47d9038f.js";import"./hasIn.cdeedf38.js";import"./FileOutlined.c1895460.js";import"./user.301754be.js";import"./transButton.8f04232b.js";import"./DeleteOutlined.11a704c5.js";import"./commonEnum.da040d67.js";import"./useModal.1ae7183e.js";import"./useWindowSizeFn.dd41c952.js";import"./FullscreenOutlined.f5cc85ae.js";import"./index.4c731c08.js";import"./css.b1edd3c8.js";import"./index.61e91689.js";import"./index.a9a6f329.js";import"./uuid.2b29000c.js";import"./index.0188a107.js";import"./uniqBy.ad809f18.js";import"./_baseIteratee.219a0b59.js";import"./_baseProperty.74f89655.js";import"./findIndex.fb260bab.js";import"./toInteger.3d2a7161.js";import"./download.ff10bfc9.js";import"./index.84d10328.js";import"./index.71446dfd.js";import"./UpOutlined.b439f448.js";import"./index.d247982f.js";import"./vendor.352e3120.js";import"./RedoOutlined.581d77bd.js";import"./dayjs.92837c63.js";import"./useState.a76dde6b.js";import"./index.7e22ace8.js";import"./Col.1d424bff.js";import"./responsiveObserve.936f38cb.js";import"./canUseDom.0bf35682.js";import"./useSize.e519a3af.js";import"./index.3aa06684.js";var m=B({components:{BasicForm:v,[_.name]:_,[l.name]:l,[n.name]:n,[n.Item.name]:n.Item},emits:["next","prev"],setup(p,{emit:a}){const[c,{validate:u,setProps:r}]=h({labelWidth:80,schemas:F,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:f,submitFunc:d});async function f(){a("prev")}async function d(){try{const t=await u();r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),a("next",t)},1500)}catch(t){}}return{register:c}}}),De=`.step2[data-v-01481d2f] {
  width: 450px;
  margin: 0 auto;
}`;const s=I();O("data-v-01481d2f");const w={class:"step2"},D=i(" ant-design@alipay.com "),$=i(" test@example.com "),A=i(" Vben "),C=i(" 500\u5143 ");S();const E=s((p,a,c,u,r,f)=>{const d=o("a-alert"),t=o("a-descriptions-item"),j=o("a-descriptions"),b=o("a-divider"),x=o("BasicForm");return y(),g("div",w,[e(d,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(j,{column:1,class:"mt-5"},{default:s(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:s(()=>[D]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:s(()=>[$]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:s(()=>[A]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:s(()=>[C]),_:1})]),_:1}),e(b),e(x,{onRegister:p.register},null,8,["onRegister"])])});m.render=E,m.__scopeId="data-v-01481d2f";export default m;
