import{d as p,g as o,r as u,o as d,n as m,p as a,q as l,s as b,aF as c}from"./index.05ea33df.js";import{b as f}from"./index.388488ea.js";import{I as v}from"./index.021ff727.js";import"./vendor.352e3120.js";import"./useDrawer.c824a5fb.js";import"./ArrowLeftOutlined.97d250aa.js";import"./index.965e0ed2.js";import"./index.be446867.js";import"./UpOutlined.b05eb3d5.js";var n=p({name:"InputNumberItem",components:{InputNumber:v},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=o("setting-input-number-item");function s(r){e.event&&f(e.event,r)}return{prefixCls:t,handleChange:s}}}),k=`.vben-setting-input-number-item[data-v-c7d8b828] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-input-number-item-input-number[data-v-c7d8b828] {
  width: 126px;
}`;const _=c(),g=_((e,t,s,r,I,h)=>{const i=u("InputNumber");return d(),m("div",{class:e.prefixCls},[a("span",null,l(e.title),1),a(i,b(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)});n.render=g,n.__scopeId="data-v-c7d8b828";export default n;
