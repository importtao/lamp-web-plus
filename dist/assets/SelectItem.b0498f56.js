import{d as o,bJ as r,g as p,k as c,r as u,o as m,n as f,p as d,q as b,s as g,aF as v}from"./index.b7a14d4f.js";import{b as _}from"./index.cb4cbb02.js";import"./vendor.352e3120.js";import"./useDrawer.1dca4d34.js";import"./ArrowLeftOutlined.70d092e9.js";import"./index.33bf2bdd.js";import"./index.f8f362f5.js";var t=o({name:"SelectItem",components:{Select:r},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:n}=p("setting-select-item"),s=c(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function a(i){e.event&&_(e.event,i)}return{prefixCls:n,handleChange:a,getBindValue:s}}}),$=`.vben-setting-select-item[data-v-e2504774] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-select-item-select[data-v-e2504774] {
  width: 126px;
}`;const y=v(),h=y((e,n,s,a,i,S)=>{const l=u("Select");return m(),f("div",{class:e.prefixCls},[d("span",null,b(e.title),1),d(l,g(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)});t.render=h,t.__scopeId="data-v-e2504774";export default t;
