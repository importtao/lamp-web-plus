import{d,bJ as r,g as p,k as c,r as u,o as m,n as f,p as l,q as g,s as v,aF as b}from"./index.0523a5a3.js";import{b as _}from"./index.3dfe553a.js";import"./vendor.352e3120.js";import"./useDrawer.78890a21.js";import"./ArrowLeftOutlined.62657f64.js";import"./index.05d758e3.js";import"./index.8e7c33d5.js";var t=d({name:"SelectItem",components:{Select:r},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:n}=p("setting-select-item"),s=c(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function a(i){e.event&&_(e.event,i)}return{prefixCls:n,handleChange:a,getBindValue:s}}}),$=`.vben-setting-select-item[data-v-e2504774] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-select-item-select[data-v-e2504774] {
  width: 126px;
}`;const y=b(),h=y((e,n,s,a,i,S)=>{const o=u("Select");return m(),f("div",{class:e.prefixCls},[l("span",null,g(e.title),1),l(o,v(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)});t.render=h,t.__scopeId="data-v-e2504774";export default t;
