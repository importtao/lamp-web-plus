import{d as l,g as c,j as p,k as u,r as h,o as m,n as f,p as o,q as g,s as C,aF as v}from"./index.0523a5a3.js";import{b as _}from"./index.3dfe553a.js";import{S as w}from"./index.587209e3.js";import"./vendor.352e3120.js";import"./useDrawer.78890a21.js";import"./ArrowLeftOutlined.62657f64.js";import"./index.05d758e3.js";import"./index.8e7c33d5.js";var n=l({name:"SwitchItem",components:{Switch:w},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=c("setting-switch-item"),{t:s}=p(),a=u(()=>e.def?{checked:e.def}:{});function i(d){e.event&&_(e.event,d)}return{prefixCls:t,t:s,handleChange:i,getBindValue:a}}}),V=`.vben-setting-switch-item[data-v-3a858942] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}`;const y=v(),j=y((e,t,s,a,i,d)=>{const r=h("Switch");return m(),f("div",{class:e.prefixCls},[o("span",null,g(e.title),1),o(r,C(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)});n.render=j,n.__scopeId="data-v-3a858942";export default n;
