import{d,bw as l,g as c,r as m,o as t,n as i,M as f,aE as u,p as v}from"./index.0523a5a3.js";import{b as _}from"./index.3dfe553a.js";import"./vendor.352e3120.js";import"./useDrawer.78890a21.js";import"./ArrowLeftOutlined.62657f64.js";import"./index.05d758e3.js";import"./index.8e7c33d5.js";var p=d({name:"ThemePicker",components:{CheckOutlined:l},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:r}=c("setting-theme-picker");function s(a){e.event&&_(e.event,a)}return{prefixCls:r,handleClick:s}}}),O=`.vben-setting-theme-picker {
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
}`;function k(e,r,s,a,g,h){const o=m("CheckOutlined");return t(),i("div",{class:e.prefixCls},[(t(!0),i(f,null,u(e.colorList||[],n=>(t(),i("span",{key:n,onClick:x=>e.handleClick(n),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===n}],style:{background:n}},[v(o)],14,["onClick"]))),128))],2)}p.render=k;export default p;
