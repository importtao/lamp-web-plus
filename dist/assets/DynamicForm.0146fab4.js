import{_ as j}from"./BasicForm.2f71c419.js";import{u as f}from"./useForm.f47588eb.js";import{d as h,aY as _,r,o as C,n as F,J as t,p as o,L as p}from"./index.05ea33df.js";import{_ as P}from"./PageWrapper.d9e1596c.js";import"./useFormItem.902ca43e.js";import"./index.faeec8a2.js";import"./index.cf387d6d.js";import"./get.f4e2a1c0.js";import"./conductUtil.82525e99.js";import"./iconUtil.d875d1ff.js";import"./_baseSet.e2b00d8d.js";import"./hasIn.3c39ff13.js";import"./FileOutlined.72b26251.js";import"./user.16e1967f.js";import"./transButton.9a1903a9.js";import"./DeleteOutlined.3986c5e6.js";import"./commonEnum.da040d67.js";import"./useModal.024b9b70.js";import"./useWindowSizeFn.bedcc730.js";import"./FullscreenOutlined.6ef047e2.js";import"./index.be446867.js";import"./index.8795eb20.js";import"./css.b1edd3c8.js";import"./index.c3f5e4ba.js";import"./index.cfb51f70.js";import"./uuid.2b29000c.js";import"./index.74eb6f9c.js";import"./uniqBy.6f8da1a0.js";import"./_baseIteratee.6051ea54.js";import"./_baseProperty.74f89655.js";import"./findIndex.0ad6ac98.js";import"./toInteger.e36ca646.js";import"./index.1393b71a.js";import"./download.5d8f05f1.js";import"./index.fe88e9db.js";import"./index.021ff727.js";import"./UpOutlined.b05eb3d5.js";import"./index.d265e78b.js";import"./vendor.352e3120.js";import"./RedoOutlined.d497a357.js";import"./dayjs.26660a9f.js";import"./useState.20f1f9ca.js";import"./index.e5a1f932.js";import"./Col.8bf95754.js";import"./responsiveObserve.968aa5d0.js";import"./canUseDom.0bf35682.js";import"./useSize.c28e111d.js";import"./index.48bbff73.js";import"./usePageContext.918ba169.js";import"./onMountedOrActivated.a12ac1c0.js";import"./index.dbdd549b.js";import"./index.03402249.js";import"./useBreakpoint.249417d5.js";import"./ArrowLeftOutlined.97d250aa.js";const b=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},labelWidth:200}],g=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:i=>{e.f2=i.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:async()=>{const{validate:i}=e,n=await i();console.log(n)}})}];var B=h({components:{BasicForm:j,CollapseContainer:_,PageWrapper:P},setup(){const[e,{setProps:i,updateSchema:n,appendSchemaByField:u,removeSchemaByFiled:c}]=f({labelWidth:120,schemas:b,actionColOptions:{span:24}}),[m]=f({labelWidth:120,schemas:g,actionColOptions:{span:24}});function s(){n({field:"field3",label:"\u5B57\u6BB53 New"})}function l(){n([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function a(){u({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function d(){c("field11")}return{register:e,register1:m,schemas:b,setProps:i,changeLabel3:s,changeLabel34:l,appendField:a,deleteField:d}}});const x={class:"mb-4"},k=p(" \u66F4\u6539\u5B57\u6BB53label "),w=p(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),W=p(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),S=p(" \u5220\u9664\u5B57\u6BB511 ");function v(e,i,n,u,c,m){const s=r("a-button"),l=r("BasicForm"),a=r("CollapseContainer"),d=r("PageWrapper");return C(),F(d,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:t(()=>[o("div",x,[o(s,{onClick:e.changeLabel3,class:"mr-2"},{default:t(()=>[k]),_:1},8,["onClick"]),o(s,{onClick:e.changeLabel34,class:"mr-2"},{default:t(()=>[w]),_:1},8,["onClick"]),o(s,{onClick:e.appendField,class:"mr-2"},{default:t(()=>[W]),_:1},8,["onClick"]),o(s,{onClick:e.deleteField,class:"mr-2"},{default:t(()=>[S]),_:1},8,["onClick"])]),o(a,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:t(()=>[o(l,{onRegister:e.register},null,8,["onRegister"])]),_:1}),o(a,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:t(()=>[o(l,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}B.render=v;export default B;
