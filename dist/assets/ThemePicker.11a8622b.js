import{d,bw as l,g as c,r as m,o as t,n as i,M as f,aE as u,p as v}from"./index.b361f078.js";import{b as _}from"./index.8e395825.js";import"./vendor.352e3120.js";import"./useDrawer.3cc723e3.js";import"./ArrowLeftOutlined.9183eb3a.js";import"./index.c407339a.js";import"./index.8d41a8b1.js";var p=d({name:"ThemePicker",components:{CheckOutlined:l},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:r}=c("setting-theme-picker");function s(a){e.event&&_(e.event,a)}return{prefixCls:r,handleClick:s}}}),O=`.vben-setting-theme-picker {
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
