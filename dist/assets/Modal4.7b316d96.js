import{_ as d,a as p}from"./useModal.cb74101d.js";import{_ as c}from"./BasicForm.8a90524a.js";import{u as l}from"./useForm.1103fde3.js";import{d as j,w as f,r as i,o as u,n as b,J as B,p as _,s as x}from"./index.b7a14d4f.js";import"./useWindowSizeFn.1c78bb1f.js";import"./FullscreenOutlined.c2c9b8db.js";import"./useFormItem.3078eec7.js";import"./index.1fe375b7.js";import"./index.18e73f7c.js";import"./get.17b5f080.js";import"./conductUtil.b952d6da.js";import"./iconUtil.5323a4d2.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./user.d5977986.js";import"./transButton.928b71e3.js";import"./DeleteOutlined.123b484f.js";import"./commonEnum.da040d67.js";import"./index.f8f362f5.js";import"./index.2fe134dc.js";import"./css.b1edd3c8.js";import"./index.b7943f07.js";import"./index.82115275.js";import"./uuid.2b29000c.js";import"./index.5cf0b4b1.js";import"./uniqBy.272154d9.js";import"./_baseIteratee.580b2020.js";import"./_baseProperty.74f89655.js";import"./findIndex.ca0f29b6.js";import"./toInteger.085db34b.js";import"./index.9cae10d5.js";import"./download.19f0ec6f.js";import"./index.ba68f563.js";import"./index.bf350d2a.js";import"./UpOutlined.08898d4e.js";import"./index.4c37e48f.js";import"./vendor.352e3120.js";import"./RedoOutlined.2970476a.js";import"./dayjs.77e2c65c.js";import"./useState.9469ce58.js";import"./index.b5e3a742.js";import"./Col.deca4875.js";import"./responsiveObserve.0e84fd18.js";import"./canUseDom.0bf35682.js";import"./useSize.a97ab731.js";import"./index.173fb3cc.js";const r=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12}}];var n=j({components:{BasicModal:d,BasicForm:c},setup(){const e=f({}),[s,{}]=l({labelWidth:120,schemas:r,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=p(o=>{e.value={field2:o.data,field1:o.info}});return{register:t,schemas:r,registerForm:s,model:e}}});function F(e,s,t,o,g,I){const m=i("BasicForm"),a=i("BasicModal");return u(),b(a,x(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:B(()=>[_(m,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])]),_:1},16,["onRegister"])}n.render=F;export default n;
