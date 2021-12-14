import{d as p,g as o,r as u,o as d,n as m,p as r,q as l,s as c,aF as f}from"./index.f012a3f4.js";import{b}from"./index.21e8ef7b.js";import{I as v}from"./index.22fa49e6.js";import"./vendor.352e3120.js";import"./useDrawer.803df328.js";import"./ArrowLeftOutlined.61d94bda.js";import"./index.a9d5c22c.js";import"./index.a99c15a9.js";import"./UpOutlined.5f7f87c9.js";var n=p({name:"InputNumberItem",components:{InputNumber:v},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=o("setting-input-number-item");function s(a){e.event&&b(e.event,a)}return{prefixCls:t,handleChange:s}}}),k=`.vben-setting-input-number-item[data-v-c7d8b828] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-input-number-item-input-number[data-v-c7d8b828] {
  width: 126px;
}`;const _=f(),g=_((e,t,s,a,I,h)=>{const i=u("InputNumber");return d(),m("div",{class:e.prefixCls},[r("span",null,l(e.title),1),r(i,c(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)});n.render=g,n.__scopeId="data-v-c7d8b828";export default n;
