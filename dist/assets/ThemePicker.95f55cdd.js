import{d as o,bw as l,g as c,r as m,o as t,n as i,M as f,aE as u,p as b}from"./index.b7a14d4f.js";import{b as v}from"./index.cb4cbb02.js";import"./vendor.352e3120.js";import"./useDrawer.1dca4d34.js";import"./ArrowLeftOutlined.70d092e9.js";import"./index.33bf2bdd.js";import"./index.f8f362f5.js";var p=o({name:"ThemePicker",components:{CheckOutlined:l},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:r}=c("setting-theme-picker");function s(a){e.event&&v(e.event,a)}return{prefixCls:r,handleClick:s}}}),O=`.vben-setting-theme-picker {
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
}`;function _(e,r,s,a,k,g){const d=m("CheckOutlined");return t(),i("div",{class:e.prefixCls},[(t(!0),i(f,null,u(e.colorList||[],n=>(t(),i("span",{key:n,onClick:h=>e.handleClick(n),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===n}],style:{background:n}},[b(d)],14,["onClick"]))),128))],2)}p.render=_;export default p;
