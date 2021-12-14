var t=Object.assign;import{_ as F,a as R}from"./useDrawer.3628b9ed.js";import{_ as B}from"./BasicForm.ba267815.js";import{u as L}from"./useForm.93cfb83b.js";import{cu as n,be as i,j as w,d as $,w as j,D,F as M,r as v,o as O,n as k,J as q,p as C,s as x}from"./index.b6dfbfcf.js";import{S as c,A as f}from"./commonEnum.da040d67.js";import{g as U}from"./formValidateService.c9ec958e.js";const r={Page:{url:c.MATERIALS+"/categoryPath/treeTableList",method:n.POST},Save:{url:c.MATERIALS+"/categoryPath",method:n.POST},Update:{url:c.MATERIALS+"/categoryPath",method:n.PUT},Delete:{url:c.MATERIALS+"/categoryPath",method:n.DELETE},Query:{url:c.MATERIALS+"/categoryPath/query",method:n.POST}},V=e=>i.request(t(t({},r.Page),{params:e})),G=e=>i.request(t(t({},r.Save),{params:e})),z=e=>i.request(t(t({},r.Update),{params:e})),H=e=>i.request(t(t({},r.Delete),{params:e})),{t:a}=w(),J=[{title:a("lamp.materials.categoryPath.ancestor"),dataIndex:"ancestor"},{title:a("lamp.materials.categoryPath.descendant"),dataIndex:"descendant"},{title:a("lamp.materials.categoryPath.distance"),dataIndex:"distance"},{title:a("lamp.materials.categoryPath.version"),dataIndex:"version"},{title:a("lamp.materials.categoryPath.isDelete"),dataIndex:"isDelete"},{title:a("lamp.common.createTime"),dataIndex:"createTime",sorter:!0,width:180}],N=[{field:"createTimeRange",label:a("lamp.common.createTime"),component:"RangePicker",colProps:{span:6}}],Q=[{field:"id",label:"ID",component:"Input",show:!1},{label:a("lamp.materials.categoryPath.ancestor"),field:"ancestor",component:"Input"},{label:a("lamp.materials.categoryPath.descendant"),field:"descendant",component:"Input"},{label:a("lamp.materials.categoryPath.distance"),field:"distance",component:"Input"},{label:a("lamp.materials.categoryPath.version"),field:"version",component:"Input"},{label:a("lamp.materials.categoryPath.isDelete"),field:"isDelete",component:"RadioButtonGroup",componentProps:{options:[{label:a("lamp.common.yes"),value:!0},{label:a("lamp.common.no"),value:!1}]}}],W=e=>[];var g=$({name:"CategoryPathEdit",components:{BasicDrawer:F,BasicForm:B},emits:["success","register"],setup(e,{emit:h}){const{t:l}=w(),o=j(f.ADD),{createMessage:y}=M(),[P,{setFieldsValue:m,resetFields:p,updateSchema:I,validate:T}]=L({labelWidth:100,schemas:Q,showActionButtonGroup:!1,actionColOptions:{span:23}}),[_,{setDrawerProps:d,closeDrawer:E}]=R(async s=>{await p(),d({confirmLoading:!1}),o.value=s==null?void 0:s.type;let b=r.Save;const S=t({},s==null?void 0:s.record);D(o)===f.EDIT?b=r.Update:S.id=void 0,await m(t({},S)),U(b,W()).then(async u=>{u&&u.length>0&&await I(u)})});async function A(){try{const s=await T();d({confirmLoading:!0}),D(o)===f.EDIT?await z(s):await G(s),y.success(l(`common.tips.${o.value}Success`)),E(),h("success")}finally{d({confirmLoading:!1})}}return{t:l,registerDrawer:_,registerForm:P,type:o,handleSubmit:A}}});function K(e,h,l,o,y,P){const m=v("BasicForm"),p=v("BasicDrawer");return O(),k(p,x(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",width:"30%",maskClosable:!1,title:e.t(`common.title.${e.type}`),onOk:e.handleSubmit}),{default:q(()=>[C(m,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}g.render=K;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g});export{X as E,g as _,J as c,V as p,H as r,N as s};
