var t=Object.assign;import{_ as R,a as y}from"./useDrawer.c824a5fb.js";import{_ as P}from"./BasicForm.2f71c419.js";import{u as k}from"./useForm.f47588eb.js";import{cu as n,be as m,j as T,d as x,w as B,D as F,F as L,r as D,o as $,n as j,J as M,p as q,s as C}from"./index.05ea33df.js";import{S as i,A as f}from"./commonEnum.da040d67.js";import{g as U}from"./formValidateService.342f23c9.js";const o={Page:{url:i.MATERIALS+"/useOrg/page",method:n.POST},Save:{url:i.MATERIALS+"/useOrg",method:n.POST},Update:{url:i.MATERIALS+"/useOrg",method:n.PUT},Delete:{url:i.MATERIALS+"/useOrg",method:n.DELETE},Query:{url:i.MATERIALS+"/useOrg/query",method:n.POST}},V=e=>m.request(t(t({},o.Page),{params:e})),z=e=>m.request(t(t({},o.Save),{params:e})),G=e=>m.request(t(t({},o.Update),{params:e})),H=e=>m.request(t(t({},o.Delete),{params:e})),{t:a}=T(),J=[{title:a("lamp.materials.useOrg.name"),dataIndex:"name"},{title:a("lamp.materials.useOrg.auditFirst"),dataIndex:"auditFirst"},{title:a("lamp.materials.useOrg.auditSecond"),dataIndex:"auditSecond"},{title:a("lamp.materials.useOrg.auditThird"),dataIndex:"auditThird"},{title:a("lamp.materials.useOrg.warehouseIndex"),dataIndex:"warehouseIndex"},{title:a("lamp.materials.useOrg.remark"),dataIndex:"remark"},{title:a("lamp.common.createTime"),dataIndex:"createTime",sorter:!0,width:180}],N=[{field:"createTimeRange",label:a("lamp.common.createTime"),component:"RangePicker",colProps:{span:6}}],Q=[{field:"id",label:"ID",component:"Input",show:!1},{label:a("lamp.materials.useOrg.name"),field:"name",component:"Input"},{label:a("lamp.materials.useOrg.auditFirst"),field:"auditFirst",component:"Input"},{label:a("lamp.materials.useOrg.auditSecond"),field:"auditSecond",component:"Input"},{label:a("lamp.materials.useOrg.auditThird"),field:"auditThird",component:"Input"},{label:a("lamp.materials.useOrg.warehouseIndex"),field:"warehouseIndex",component:"Input"},{label:a("lamp.materials.useOrg.remark"),field:"remark",component:"Input"}],W=e=>[];var g=x({name:"UseOrgEdit",components:{BasicDrawer:R,BasicForm:P},emits:["success","register"],setup(e,{emit:h}){const{t:l}=T(),r=B(f.ADD),{createMessage:I}=L(),[S,{setFieldsValue:c,resetFields:u,updateSchema:_,validate:b}]=k({labelWidth:100,schemas:Q,showActionButtonGroup:!1,actionColOptions:{span:23}}),[E,{setDrawerProps:d,closeDrawer:A}]=y(async s=>{await u(),d({confirmLoading:!1}),r.value=s==null?void 0:s.type;let w=o.Save;const O=t({},s==null?void 0:s.record);F(r)===f.EDIT?w=o.Update:O.id=void 0,await c(t({},O)),U(w,W()).then(async p=>{p&&p.length>0&&await _(p)})});async function v(){try{const s=await b();d({confirmLoading:!0}),F(r)===f.EDIT?await G(s):await z(s),I.success(l(`common.tips.${r.value}Success`)),A(),h("success")}finally{d({confirmLoading:!1})}}return{t:l,registerDrawer:E,registerForm:S,type:r,handleSubmit:v}}});function K(e,h,l,r,I,S){const c=D("BasicForm"),u=D("BasicDrawer");return $(),j(u,C(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",width:"30%",maskClosable:!1,title:e.t(`common.title.${e.type}`),onOk:e.handleSubmit}),{default:M(()=>[q(c,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}g.render=K;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g});export{X as E,g as _,J as c,V as p,H as r,N as s};
