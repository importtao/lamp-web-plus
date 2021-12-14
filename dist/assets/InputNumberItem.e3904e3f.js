import{d as p,g as o,r as u,o as m,n as d,p as a,q as l,s as c,aF as b}from"./index.b361f078.js";import{b as f}from"./index.8e395825.js";import{I as v}from"./index.80320b3c.js";import"./vendor.352e3120.js";import"./useDrawer.3cc723e3.js";import"./ArrowLeftOutlined.9183eb3a.js";import"./index.c407339a.js";import"./index.8d41a8b1.js";import"./UpOutlined.cbb592c6.js";var n=p({name:"InputNumberItem",components:{InputNumber:v},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=o("setting-input-number-item");function s(r){e.event&&f(e.event,r)}return{prefixCls:t,handleChange:s}}}),k=`.vben-setting-input-number-item[data-v-c7d8b828] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-input-number-item-input-number[data-v-c7d8b828] {
  width: 126px;
}`;const _=b(),g=_((e,t,s,r,I,h)=>{const i=u("InputNumber");return m(),d("div",{class:e.prefixCls},[a("span",null,l(e.title),1),a(i,c(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)});n.render=g,n.__scopeId="data-v-c7d8b828";export default n;
