import{d as c,g as l,j as p,k as u,r as f,o as h,n as m,p as o,q as g,s as b,aF as C}from"./index.b7a14d4f.js";import{b as v}from"./index.cb4cbb02.js";import{S as _}from"./index.4c37e48f.js";import"./vendor.352e3120.js";import"./useDrawer.1dca4d34.js";import"./ArrowLeftOutlined.70d092e9.js";import"./index.33bf2bdd.js";import"./index.f8f362f5.js";var n=c({name:"SwitchItem",components:{Switch:_},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=l("setting-switch-item"),{t:s}=p(),a=u(()=>e.def?{checked:e.def}:{});function d(i){e.event&&v(e.event,i)}return{prefixCls:t,t:s,handleChange:d,getBindValue:a}}}),V=`.vben-setting-switch-item[data-v-3a858942] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}`;const w=C(),y=w((e,t,s,a,d,i)=>{const r=f("Switch");return h(),m("div",{class:e.prefixCls},[o("span",null,g(e.title),1),o(r,b(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)});n.render=y,n.__scopeId="data-v-3a858942";export default n;
