import{_ as d}from"./BasicForm.71637030.js";import{d as c,aY as u,da as j,F as l,r as o,o as f,n as b,J as r,p as i}from"./index.0523a5a3.js";import{M as _}from"./index.aa85b9fa.js";import{_ as x}from"./PageWrapper.40d43df1.js";import"./useFormItem.ddca9049.js";import"./index.26c5e60b.js";import"./index.a9b2b45a.js";import"./get.108cb567.js";import"./conductUtil.fde7132a.js";import"./iconUtil.f3ee4c23.js";import"./_baseSet.f781a95b.js";import"./hasIn.a020a292.js";import"./FileOutlined.53cb4a4e.js";import"./user.c02d9c13.js";import"./transButton.555d93e9.js";import"./DeleteOutlined.30981501.js";import"./commonEnum.da040d67.js";import"./useModal.131645a5.js";import"./useWindowSizeFn.4268e9dd.js";import"./FullscreenOutlined.d52a1fbe.js";import"./index.8e7c33d5.js";import"./index.09507e37.js";import"./css.b1edd3c8.js";import"./index.436d37b6.js";import"./index.c4d8ae58.js";import"./uuid.2b29000c.js";import"./index.8b9bc77d.js";import"./uniqBy.2c7c6ba7.js";import"./_baseIteratee.32c93b4a.js";import"./_baseProperty.74f89655.js";import"./findIndex.0841f873.js";import"./toInteger.1430c119.js";import"./index.b642a15b.js";import"./download.062b03e8.js";import"./index.383f27d9.js";import"./index.b9116045.js";import"./UpOutlined.a2803449.js";import"./index.587209e3.js";import"./vendor.352e3120.js";import"./RedoOutlined.e111b4c0.js";import"./dayjs.7ad781c8.js";import"./useState.43515907.js";import"./index.315e04ce.js";import"./Col.102f0df6.js";import"./responsiveObserve.43c11602.js";import"./canUseDom.0bf35682.js";import"./useSize.6627aa05.js";import"./index.4637d8b2.js";import"./usePageContext.0fc2e04d.js";import"./onMountedOrActivated.a2faf533.js";import"./index.e2c95991.js";import"./index.814a8df7.js";import"./useBreakpoint.a9fc3198.js";import"./ArrowLeftOutlined.62657f64.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>j(_,{value:e[t],onChange:s=>{e[t]=s}})}];var a=c({components:{BasicForm:d,CollapseContainer:u,PageWrapper:x},setup(){const{createMessage:e}=l();return{schemas:g,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});function h(e,t,s,C,F,O){const n=o("BasicForm"),m=o("CollapseContainer"),p=o("PageWrapper");return f(),b(p,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:r(()=>[i(m,{title:"MarkDown\u8868\u5355"},{default:r(()=>[i(n,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}a.render=h;export default a;
