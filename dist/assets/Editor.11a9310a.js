import{_ as d}from"./BasicForm.7d393d3b.js";import{d as c,aY as u,da as j,F as l,r as s,o as f,n as b,J as i,p as r}from"./index.ff8e7350.js";import{T as _}from"./index.de9ade32.js";import{_ as x}from"./PageWrapper.ed878922.js";import"./useFormItem.4d35203f.js";import"./index.33f6c35a.js";import"./index.7b8b790f.js";import"./get.25e661a1.js";import"./conductUtil.2053f1c8.js";import"./iconUtil.57aac0ee.js";import"./_baseSet.47d9038f.js";import"./hasIn.cdeedf38.js";import"./FileOutlined.c1895460.js";import"./user.301754be.js";import"./transButton.8f04232b.js";import"./DeleteOutlined.11a704c5.js";import"./commonEnum.da040d67.js";import"./useModal.1ae7183e.js";import"./useWindowSizeFn.dd41c952.js";import"./FullscreenOutlined.f5cc85ae.js";import"./index.d0beec9f.js";import"./index.4c731c08.js";import"./css.b1edd3c8.js";import"./index.61e91689.js";import"./index.a9a6f329.js";import"./uuid.2b29000c.js";import"./index.0188a107.js";import"./uniqBy.ad809f18.js";import"./_baseIteratee.219a0b59.js";import"./_baseProperty.74f89655.js";import"./findIndex.fb260bab.js";import"./toInteger.3d2a7161.js";import"./index.2a7bb35e.js";import"./download.ff10bfc9.js";import"./index.84d10328.js";import"./index.71446dfd.js";import"./UpOutlined.b439f448.js";import"./index.d247982f.js";import"./vendor.352e3120.js";import"./RedoOutlined.581d77bd.js";import"./dayjs.92837c63.js";import"./useState.a76dde6b.js";import"./index.7e22ace8.js";import"./Col.1d424bff.js";import"./responsiveObserve.936f38cb.js";import"./canUseDom.0bf35682.js";import"./useSize.e519a3af.js";import"./index.3aa06684.js";import"./usePageContext.c47bb441.js";import"./onMountedOrActivated.8814f444.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./useBreakpoint.549ec32d.js";import"./ArrowLeftOutlined.e256a87d.js";const h=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>j(_,{value:e[t],onChange:o=>{e[t]=o}})}];var a=c({components:{BasicForm:d,CollapseContainer:u,PageWrapper:x},setup(){const{createMessage:e}=l();return{schemas:h,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});function C(e,t,o,g,O,B){const n=s("BasicForm"),m=s("CollapseContainer"),p=s("PageWrapper");return f(),b(p,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[r(m,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[r(n,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}a.render=C;export default a;
