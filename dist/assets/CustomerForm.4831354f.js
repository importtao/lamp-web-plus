import{_}from"./BasicForm.8a90524a.js";import{u as x}from"./useForm.1103fde3.js";import{d as g,aY as C,v as r,da as F,F as v,r as s,o as h,n as B,J as i,p as n}from"./index.b7a14d4f.js";import{_ as O}from"./PageWrapper.62f72559.js";import"./useFormItem.3078eec7.js";import"./index.1fe375b7.js";import"./index.18e73f7c.js";import"./get.17b5f080.js";import"./conductUtil.b952d6da.js";import"./iconUtil.5323a4d2.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./user.d5977986.js";import"./transButton.928b71e3.js";import"./DeleteOutlined.123b484f.js";import"./commonEnum.da040d67.js";import"./useModal.cb74101d.js";import"./useWindowSizeFn.1c78bb1f.js";import"./FullscreenOutlined.c2c9b8db.js";import"./index.f8f362f5.js";import"./index.2fe134dc.js";import"./css.b1edd3c8.js";import"./index.b7943f07.js";import"./index.82115275.js";import"./uuid.2b29000c.js";import"./index.5cf0b4b1.js";import"./uniqBy.272154d9.js";import"./_baseIteratee.580b2020.js";import"./_baseProperty.74f89655.js";import"./findIndex.ca0f29b6.js";import"./toInteger.085db34b.js";import"./index.9cae10d5.js";import"./download.19f0ec6f.js";import"./index.ba68f563.js";import"./index.bf350d2a.js";import"./UpOutlined.08898d4e.js";import"./index.4c37e48f.js";import"./vendor.352e3120.js";import"./RedoOutlined.2970476a.js";import"./dayjs.77e2c65c.js";import"./useState.9469ce58.js";import"./index.b5e3a742.js";import"./Col.deca4875.js";import"./responsiveObserve.0e84fd18.js";import"./canUseDom.0bf35682.js";import"./useSize.a97ab731.js";import"./index.173fb3cc.js";import"./usePageContext.03f0ffc0.js";import"./onMountedOrActivated.64fcf717.js";import"./index.aba8a851.js";import"./index.d9119902.js";import"./useBreakpoint.508a26d1.js";import"./ArrowLeftOutlined.70d092e9.js";const d=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:t})=>F(r,{placeholder:"\u8BF7\u8F93\u5165",value:e[t],onChange:o=>{e[t]=o.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=g({components:{BasicForm:_,CollapseContainer:C,PageWrapper:O,[r.name]:r},setup(){const{createMessage:e}=v(),[t,{setProps:o}]=x({labelWidth:120,schemas:d,actionColOptions:{span:24}});return{register:t,schemas:d,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},setProps:o}}});function P(e,t,o,a,S,I){const c=s("a-input"),l=s("BasicForm"),f=s("CollapseContainer"),j=s("PageWrapper");return h(),B(j,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:i(()=>[n(f,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:i(()=>[n(l,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:i(({model:p,field:m})=>[n(c,{value:p[m],"onUpdate:value":b=>p[m]=b,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}u.render=P;export default u;
