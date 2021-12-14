import{d as p,g as o,r as u,o as d,n as m,p as a,q as l,s as b,aF as c}from"./index.ff8e7350.js";import{b as f}from"./index.f69bf391.js";import{I as v}from"./index.71446dfd.js";import"./vendor.352e3120.js";import"./useDrawer.9766a9b2.js";import"./ArrowLeftOutlined.e256a87d.js";import"./index.66116253.js";import"./index.d0beec9f.js";import"./UpOutlined.b439f448.js";var n=p({name:"InputNumberItem",components:{InputNumber:v},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=o("setting-input-number-item");function s(r){e.event&&f(e.event,r)}return{prefixCls:t,handleChange:s}}}),k=`.vben-setting-input-number-item[data-v-c7d8b828] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-input-number-item-input-number[data-v-c7d8b828] {
  width: 126px;
}`;const _=c(),g=_((e,t,s,r,I,h)=>{const i=u("InputNumber");return d(),m("div",{class:e.prefixCls},[a("span",null,l(e.title),1),a(i,b(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)});n.render=g,n.__scopeId="data-v-c7d8b828";export default n;
