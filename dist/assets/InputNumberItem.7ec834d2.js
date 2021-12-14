import{d as p,g as o,r as u,o as m,n as d,p as a,q as l,s as c,aF as b}from"./index.0523a5a3.js";import{b as f}from"./index.3dfe553a.js";import{I as v}from"./index.b9116045.js";import"./vendor.352e3120.js";import"./useDrawer.78890a21.js";import"./ArrowLeftOutlined.62657f64.js";import"./index.05d758e3.js";import"./index.8e7c33d5.js";import"./UpOutlined.a2803449.js";var n=p({name:"InputNumberItem",components:{InputNumber:v},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=o("setting-input-number-item");function s(r){e.event&&f(e.event,r)}return{prefixCls:t,handleChange:s}}}),k=`.vben-setting-input-number-item[data-v-c7d8b828] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-input-number-item-input-number[data-v-c7d8b828] {
  width: 126px;
}`;const _=b(),g=_((e,t,s,r,I,h)=>{const i=u("InputNumber");return m(),d("div",{class:e.prefixCls},[a("span",null,l(e.title),1),a(i,c(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)});n.render=g,n.__scopeId="data-v-c7d8b828";export default n;
