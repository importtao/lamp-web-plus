import{w as m,ai as l,D as o,cj as d,ae as f,ch as u,V as h,ck as y}from"./index.05ea33df.js";function F(s){const r=m(null),n=m(!1);async function a(){const e=o(r);return e||u("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),await h(),e}function c(e){l(()=>{r.value=null,n.value=null}),!(o(n)&&d()&&e===o(r))&&(r.value=e,n.value=!0,f(()=>s,()=>{s&&e.setProps(y(s))},{immediate:!0,deep:!0}))}return[c,{scrollToField:async(e,t)=>{(await a()).scrollToField(e,t)},setProps:async e=>{(await a()).setProps(e)},updateSchema:async e=>{(await a()).updateSchema(e)},clearValidate:async e=>{(await a()).clearValidate(e)},resetFields:async()=>{a().then(async e=>{await e.resetFields()})},removeSchemaByFiled:async e=>{(await a()).removeSchemaByFiled(e)},getFieldsValue:()=>{var e;return(e=o(r))==null?void 0:e.getFieldsValue()},setFieldsValue:async e=>{(await a()).setFieldsValue(e)},appendSchemaByField:async(e,t,i)=>{(await a()).appendSchemaByField(e,t,i)},submit:async()=>(await a()).submit(),validate:async e=>(await a()).validate(e),validateFields:async e=>(await a()).validateFields(e)}]}export{F as u};
