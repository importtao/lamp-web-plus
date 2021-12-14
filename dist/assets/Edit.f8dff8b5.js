var m=Object.assign;import{_ as v,a as B}from"./useDrawer.c824a5fb.js";import{_ as k}from"./BasicForm.2f71c419.js";import{u as A}from"./useForm.f47588eb.js";import{j as D,d as M,w as S,D as I,F as T,r as w,o as R,n as j,J as $,p as E,s as P}from"./index.05ea33df.js";import{A as c}from"./commonEnum.da040d67.js";import{u as C,s as q,A as g}from"./buyOrder.d49e05b7.js";import{g as x}from"./formValidateService.342f23c9.js";const{t:e}=D(),V=[{title:"\u8BA2\u5355\u7F16\u53F7",dataIndex:"id",width:220},{title:"\u7269\u6599\u89C4\u683C",dataIndex:"materials"},{title:e("lamp.materials.buyOrder.quantity"),dataIndex:"quantity"},{title:e("lamp.materials.buyOrder.status"),dataIndex:"status",width:120},{title:"\u53D1\u8D77\u4EBA",dataIndex:"createUser",sorter:!1,width:250},{title:e("lamp.common.createTime"),dataIndex:"createTime",sorter:!1,width:180}],L=[{field:"createTimeRange",label:e("lamp.common.createTime"),component:"RangePicker",colProps:{span:6}}],Q=[{field:"id",label:"ID",component:"Input",show:!1},{label:e("lamp.materials.buyOrder.materialsId"),field:"materialsId",component:"Input"},{label:e("lamp.materials.buyOrder.skuId"),field:"skuId",component:"Input"},{label:e("lamp.materials.buyOrder.quantity"),field:"quantity",component:"Input",show:!1},{label:e("lamp.materials.buyOrder.actualQuantity"),field:"actualQuantity",component:"Input"},{label:e("lamp.materials.buyOrder.minRequireTime"),field:"minRequireTime",component:"DatePicker",componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD"}},{label:e("lamp.materials.buyOrder.expectedArrivalTime"),field:"expectedArrivalTime",component:"DatePicker",componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD"}},{label:e("lamp.materials.buyOrder.remark"),field:"remark",component:"Input"},{label:e("lamp.materials.buyOrder.contractInfo"),field:"contractInfo",component:"Input"},{label:e("lamp.materials.buyOrder.supplierInfo"),field:"supplierInfo",component:"Input"}],U=t=>[];var u=M({name:"BuyOrderEdit",components:{BasicDrawer:v,BasicForm:k},emits:["success","register"],setup(t,{emit:p}){const{t:s}=D(),r=S(c.ADD),{createMessage:d}=T(),[f,{setFieldsValue:o,resetFields:n,updateSchema:h,validate:F}]=A({labelWidth:100,schemas:Q,showActionButtonGroup:!1,actionColOptions:{span:23}}),[_,{setDrawerProps:i,closeDrawer:O}]=B(async a=>{await n(),i({confirmLoading:!1}),r.value=a==null?void 0:a.type;let b=g.Save;const y=m({},a==null?void 0:a.record);I(r)===c.EDIT?b=g.Update:y.id=void 0,await o(m({},y)),x(b,U()).then(async l=>{l&&l.length>0&&await h(l)})});async function Y(){try{const a=await F();i({confirmLoading:!0}),I(r)===c.EDIT?await C(a):await q(a),d.success(s(`common.tips.${r.value}Success`)),O(),p("success")}finally{i({confirmLoading:!1})}}return{t:s,registerDrawer:_,registerForm:f,type:r,handleSubmit:Y}}});function z(t,p,s,r,d,f){const o=w("BasicForm"),n=w("BasicDrawer");return R(),j(n,P(t.$attrs,{onRegister:t.registerDrawer,showFooter:"",width:"30%",maskClosable:!1,title:t.t(`common.title.${t.type}`),onOk:t.handleSubmit}),{default:$(()=>[E(o,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}u.render=z;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:u});export{G as E,u as _,V as c,L as s};
