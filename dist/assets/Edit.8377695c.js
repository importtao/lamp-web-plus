var m=Object.assign;import{_ as S,a as k}from"./useDrawer.c824a5fb.js";import{_ as j}from"./BasicForm.2f71c419.js";import{u as R}from"./useForm.f47588eb.js";import{j as h,d as $,w as A,D as v,F as E,r as y,o as T,n as x,J as C,p as P,s as q}from"./index.05ea33df.js";import{A as c}from"./commonEnum.da040d67.js";import{A as g,u as O,s as V}from"./warehouseInventory.4b8af495.js";import{g as L}from"./formValidateService.342f23c9.js";const{t:e}=h(),M=[{title:e("lamp.materials.warehouseInventory.materialsId"),dataIndex:"materialsId"},{title:e("lamp.materials.warehouseInventory.warehouseId"),dataIndex:"warehouseId"},{title:e("lamp.materials.warehouseInventory.skuId"),dataIndex:"skuId"},{title:e("lamp.materials.warehouseInventory.quantity"),dataIndex:"quantity"},{title:e("lamp.materials.warehouseInventory.version"),dataIndex:"version"},{title:e("lamp.materials.warehouseInventory.isDelete"),dataIndex:"isDelete"},{title:e("lamp.common.createTime"),dataIndex:"createTime",sorter:!0,width:180}],G=[{field:"createTimeRange",label:e("lamp.common.createTime"),component:"RangePicker",colProps:{span:6}}],W=[{field:"id",label:"ID",component:"Input",show:!1},{label:e("lamp.materials.warehouseInventory.materialsId"),field:"materialsId",component:"Input"},{label:e("lamp.materials.warehouseInventory.warehouseId"),field:"warehouseId",component:"Input"},{label:e("lamp.materials.warehouseInventory.skuId"),field:"skuId",component:"Input"},{label:e("lamp.materials.warehouseInventory.quantity"),field:"quantity",component:"Input"},{label:e("lamp.materials.warehouseInventory.version"),field:"version",component:"Input"},{label:e("lamp.materials.warehouseInventory.isDelete"),field:"isDelete",component:"RadioButtonGroup",componentProps:{options:[{label:e("lamp.common.yes"),value:!0},{label:e("lamp.common.no"),value:!1}]}}],z=t=>[];var u=$({name:"WarehouseInventoryEdit",components:{BasicDrawer:S,BasicForm:j},emits:["success","register"],setup(t,{emit:p}){const{t:o}=h(),s=A(c.ADD),{createMessage:d}=E(),[f,{setFieldsValue:r,resetFields:n,updateSchema:b,validate:D}]=R({labelWidth:100,schemas:W,showActionButtonGroup:!1,actionColOptions:{span:23}}),[_,{setDrawerProps:i,closeDrawer:F}]=k(async a=>{await n(),i({confirmLoading:!1}),s.value=a==null?void 0:a.type;let I=g.Save;const w=m({},a==null?void 0:a.record);v(s)===c.EDIT?I=g.Update:w.id=void 0,await r(m({},w)),L(I,z()).then(async l=>{l&&l.length>0&&await b(l)})});async function B(){try{const a=await D();i({confirmLoading:!0}),v(s)===c.EDIT?await O(a):await V(a),d.success(o(`common.tips.${s.value}Success`)),F(),p("success")}finally{i({confirmLoading:!1})}}return{t:o,registerDrawer:_,registerForm:f,type:s,handleSubmit:B}}});function J(t,p,o,s,d,f){const r=y("BasicForm"),n=y("BasicDrawer");return T(),x(n,q(t.$attrs,{onRegister:t.registerDrawer,showFooter:"",width:"30%",maskClosable:!1,title:t.t(`common.title.${t.type}`),onOk:t.handleSubmit}),{default:C(()=>[P(r,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}u.render=J;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:u});export{N as E,u as _,M as c,G as s};
