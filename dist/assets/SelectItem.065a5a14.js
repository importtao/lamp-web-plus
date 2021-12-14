import{d,bJ as r,g as p,k as c,r as u,o as m,n as f,p as l,q as g,s as b,aF as v}from"./index.b6dfbfcf.js";import{b as _}from"./index.c130f86a.js";import"./vendor.352e3120.js";import"./useDrawer.3628b9ed.js";import"./ArrowLeftOutlined.7dae0225.js";import"./index.8c7a9c9a.js";import"./index.57ea38db.js";var t=d({name:"SelectItem",components:{Select:r},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:n}=p("setting-select-item"),s=c(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function a(i){e.event&&_(e.event,i)}return{prefixCls:n,handleChange:a,getBindValue:s}}}),$=`.vben-setting-select-item[data-v-e2504774] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-select-item-select[data-v-e2504774] {
  width: 126px;
}`;const y=v(),h=y((e,n,s,a,i,S)=>{const o=u("Select");return m(),f("div",{class:e.prefixCls},[l("span",null,g(e.title),1),l(o,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)});t.render=h,t.__scopeId="data-v-e2504774";export default t;
