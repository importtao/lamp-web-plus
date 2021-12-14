import{d as p,g as o,r as d,o as u,n as m,p as a,q as l,s as b,aF as c}from"./index.b7a14d4f.js";import{b as f}from"./index.cb4cbb02.js";import{I as v}from"./index.bf350d2a.js";import"./vendor.352e3120.js";import"./useDrawer.1dca4d34.js";import"./ArrowLeftOutlined.70d092e9.js";import"./index.33bf2bdd.js";import"./index.f8f362f5.js";import"./UpOutlined.08898d4e.js";var n=p({name:"InputNumberItem",components:{InputNumber:v},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=o("setting-input-number-item");function s(r){e.event&&f(e.event,r)}return{prefixCls:t,handleChange:s}}}),k=`.vben-setting-input-number-item[data-v-c7d8b828] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-input-number-item-input-number[data-v-c7d8b828] {
  width: 126px;
}`;const _=c(),g=_((e,t,s,r,I,h)=>{const i=d("InputNumber");return u(),m("div",{class:e.prefixCls},[a("span",null,l(e.title),1),a(i,b(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)});n.render=g,n.__scopeId="data-v-c7d8b828";export default n;
