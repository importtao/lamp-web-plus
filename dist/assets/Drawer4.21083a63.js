import{_ as p,a as c}from"./useDrawer.9766a9b2.js";import{_ as f}from"./BasicForm.7d393d3b.js";import{u as j}from"./useForm.09fdf95d.js";import{d as l,r,o as u,n as b,J as B,p as i,s as _}from"./index.ff8e7350.js";import"./ArrowLeftOutlined.e256a87d.js";import"./index.66116253.js";import"./useFormItem.4d35203f.js";import"./index.33f6c35a.js";import"./index.7b8b790f.js";import"./get.25e661a1.js";import"./conductUtil.2053f1c8.js";import"./iconUtil.57aac0ee.js";import"./_baseSet.47d9038f.js";import"./hasIn.cdeedf38.js";import"./FileOutlined.c1895460.js";import"./user.301754be.js";import"./transButton.8f04232b.js";import"./DeleteOutlined.11a704c5.js";import"./commonEnum.da040d67.js";import"./useModal.1ae7183e.js";import"./useWindowSizeFn.dd41c952.js";import"./FullscreenOutlined.f5cc85ae.js";import"./index.d0beec9f.js";import"./index.4c731c08.js";import"./css.b1edd3c8.js";import"./index.61e91689.js";import"./index.a9a6f329.js";import"./uuid.2b29000c.js";import"./index.0188a107.js";import"./uniqBy.ad809f18.js";import"./_baseIteratee.219a0b59.js";import"./_baseProperty.74f89655.js";import"./findIndex.fb260bab.js";import"./toInteger.3d2a7161.js";import"./index.2a7bb35e.js";import"./download.ff10bfc9.js";import"./index.84d10328.js";import"./index.71446dfd.js";import"./UpOutlined.b439f448.js";import"./index.d247982f.js";import"./vendor.352e3120.js";import"./RedoOutlined.581d77bd.js";import"./dayjs.92837c63.js";import"./useState.a76dde6b.js";import"./index.7e22ace8.js";import"./Col.1d424bff.js";import"./responsiveObserve.936f38cb.js";import"./canUseDom.0bf35682.js";import"./useSize.e519a3af.js";import"./index.3aa06684.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12}}];var a=l({components:{BasicDrawer:p,BasicForm:f},setup(){const[e,{setFieldsValue:o}]=j({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=c(s=>{o({field2:s.data,field1:s.info})});return{register:t,schemas:n,registerForm:e}}});function x(e,o,t,s,F,w){const m=r("BasicForm"),d=r("BasicDrawer");return u(),b(d,_(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:B(()=>[i("div",null,[i(m,{onRegister:e.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}a.render=x;export default a;
