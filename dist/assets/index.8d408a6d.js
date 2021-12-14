import{_ as m}from"./BasicForm.71637030.js";import{u as d}from"./useForm.eec49fca.js";import{d as l,F,r as i,n as b,p as j,aF as f,o as B}from"./index.0523a5a3.js";import{_ as E}from"./PageWrapper.40d43df1.js";import"./useFormItem.ddca9049.js";import"./index.26c5e60b.js";import"./index.a9b2b45a.js";import"./get.108cb567.js";import"./conductUtil.fde7132a.js";import"./iconUtil.f3ee4c23.js";import"./_baseSet.f781a95b.js";import"./hasIn.a020a292.js";import"./FileOutlined.53cb4a4e.js";import"./user.c02d9c13.js";import"./transButton.555d93e9.js";import"./DeleteOutlined.30981501.js";import"./commonEnum.da040d67.js";import"./useModal.131645a5.js";import"./useWindowSizeFn.4268e9dd.js";import"./FullscreenOutlined.d52a1fbe.js";import"./index.8e7c33d5.js";import"./index.09507e37.js";import"./css.b1edd3c8.js";import"./index.436d37b6.js";import"./index.c4d8ae58.js";import"./uuid.2b29000c.js";import"./index.8b9bc77d.js";import"./uniqBy.2c7c6ba7.js";import"./_baseIteratee.32c93b4a.js";import"./_baseProperty.74f89655.js";import"./findIndex.0841f873.js";import"./toInteger.1430c119.js";import"./index.b642a15b.js";import"./download.062b03e8.js";import"./index.383f27d9.js";import"./index.b9116045.js";import"./UpOutlined.a2803449.js";import"./index.587209e3.js";import"./vendor.352e3120.js";import"./RedoOutlined.e111b4c0.js";import"./dayjs.7ad781c8.js";import"./useState.43515907.js";import"./index.315e04ce.js";import"./Col.102f0df6.js";import"./responsiveObserve.43c11602.js";import"./canUseDom.0bf35682.js";import"./useSize.6627aa05.js";import"./index.4637d8b2.js";import"./usePageContext.0fc2e04d.js";import"./onMountedOrActivated.a2faf533.js";import"./index.e2c95991.js";import"./index.814a8df7.js";import"./useBreakpoint.a9fc3198.js";import"./ArrowLeftOutlined.62657f64.js";const _=[{field:"title",component:"Input",label:"\u6807\u9898",componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"RangePicker",label:"\u8D77\u6B62\u65E5\u671F",required:!0},{field:"target",component:"InputTextArea",label:"\u76EE\u6807\u63CF\u8FF0",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"\u8861\u91CF\u6807\u51C6",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",rows:4},required:!0},{field:"client",component:"Input",label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"inviteer",component:"Input",label:"\u9080\u8BC4\u4EBA",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"weights",component:"InputNumber",label:"\u6743\u91CD",subLabel:"( \u9009\u586B )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"disclosure",component:"RadioGroup",label:"\u76EE\u6807\u516C\u5F00",itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>e.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];var o=l({components:{BasicForm:m,PageWrapper:E},setup(){const{createMessage:e}=F(),[t,{validate:r,setProps:u}]=d({labelCol:{span:7},wrapperCol:{span:10},schemas:_,actionColOptions:{offset:8},submitButtonOptions:{text:"\u63D0\u4EA4"},submitFunc:s});async function s(){try{await r(),u({submitButtonOptions:{loading:!0}}),setTimeout(()=>{u({submitButtonOptions:{loading:!1}}),e.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(a){}}return{register:t}}}),xe=`.form-wrap[data-v-5cbaa0f1] {
  padding: 24px;
  background: #fff;
}`;const n=f(),C=n((e,t,r,u,s,a)=>{const p=i("BasicForm"),c=i("PageWrapper");return B(),b(c,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",content:" \u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002",contentClass:"p-4"},{default:n(()=>[j(p,{onRegister:e.register},null,8,["onRegister"])]),_:1})});o.render=C,o.__scopeId="data-v-5cbaa0f1";export default o;
