import{d,bw as l,g as c,r as m,o as t,n as i,M as f,aE as u,p as v}from"./index.ff8e7350.js";import{b as _}from"./index.f69bf391.js";import"./vendor.352e3120.js";import"./useDrawer.9766a9b2.js";import"./ArrowLeftOutlined.e256a87d.js";import"./index.66116253.js";import"./index.d0beec9f.js";var p=d({name:"ThemePicker",components:{CheckOutlined:l},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:r}=c("setting-theme-picker");function s(a){e.event&&_(e.event,a)}return{prefixCls:r,handleClick:s}}}),O=`.vben-setting-theme-picker {
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
  justify-content: space-around;
}
.vben-setting-theme-picker__item {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 2px;
}
.vben-setting-theme-picker__item svg {
  display: none;
}
.vben-setting-theme-picker__item--active {
  border: 1px solid #0b79ee;
}
.vben-setting-theme-picker__item--active svg {
  display: inline-block;
  margin: 0 0 3px 3px;
  font-size: 12px;
  fill: #fff !important;
}`;function k(e,r,s,a,b,g){const o=m("CheckOutlined");return t(),i("div",{class:e.prefixCls},[(t(!0),i(f,null,u(e.colorList||[],n=>(t(),i("span",{key:n,onClick:h=>e.handleClick(n),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===n}],style:{background:n}},[v(o)],14,["onClick"]))),128))],2)}p.render=k;export default p;
