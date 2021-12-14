import{d as c,aZ as d,g as s,aW as f,aX as u,r as m,o as t,n as i,M as v,aE as l,p as a,aF as _}from"./index.f012a3f4.js";import"./vendor.352e3120.js";var r=c({name:"MenuTypePicker",components:{Tooltip:d},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>{}},def:{type:String,default:""}},setup(){const{prefixCls:e}=s("setting-menu-type-picker");return{prefixCls:e}}}),I=`.vben-setting-menu-type-picker[data-v-c5cf2698] {
  display: flex;
}
.vben-setting-menu-type-picker__item[data-v-c5cf2698] {
  position: relative;
  width: 56px;
  height: 48px;
  margin-right: 16px;
  overflow: hidden;
  cursor: pointer;
  background-color: #f0f2f5;
  border-radius: 4px;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.18);
}
.vben-setting-menu-type-picker__item[data-v-c5cf2698]::before, .vben-setting-menu-type-picker__item[data-v-c5cf2698]::after {
  position: absolute;
  content: '';
}
.vben-setting-menu-type-picker__item--sidebar[data-v-c5cf2698]::before {
  top: 0;
  left: 0;
  z-index: 1;
  width: 33%;
  height: 100%;
  background-color: #273352;
  border-radius: 4px 0 0 4px;
}
.vben-setting-menu-type-picker__item--sidebar[data-v-c5cf2698]::after {
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background-color: #fff;
}
.vben-setting-menu-type-picker__item--mix[data-v-c5cf2698]::before {
  top: 0;
  left: 0;
  width: 33%;
  height: 100%;
  background-color: #fff;
  border-radius: 4px 0 0 4px;
}
.vben-setting-menu-type-picker__item--mix[data-v-c5cf2698]::after {
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 25%;
  background-color: #273352;
}
.vben-setting-menu-type-picker__item--top-menu[data-v-c5cf2698]::after {
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background-color: #273352;
}
.vben-setting-menu-type-picker__item--mix-sidebar[data-v-c5cf2698]::before {
  top: 0;
  left: 0;
  z-index: 1;
  width: 25%;
  height: 100%;
  background-color: #273352;
  border-radius: 4px 0 0 4px;
}
.vben-setting-menu-type-picker__item--mix-sidebar[data-v-c5cf2698]::after {
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background-color: #fff;
}
.vben-setting-menu-type-picker__item--mix-sidebar .mix-sidebar[data-v-c5cf2698] {
  position: absolute;
  left: 25%;
  width: 15%;
  height: 100%;
  background-color: #fff;
}
.vben-setting-menu-type-picker__item[data-v-c5cf2698]:hover, .vben-setting-menu-type-picker__item--active[data-v-c5cf2698] {
  padding: 12px;
  border: 2px solid #0960bd;
}
.vben-setting-menu-type-picker__item[data-v-c5cf2698]:hover::before, .vben-setting-menu-type-picker__item--active[data-v-c5cf2698]::before, .vben-setting-menu-type-picker__item[data-v-c5cf2698]:hover::after, .vben-setting-menu-type-picker__item--active[data-v-c5cf2698]::after {
  border-radius: 0;
}
.vben-setting-menu-type-picker img[data-v-c5cf2698] {
  width: 100%;
  height: 100%;
  cursor: pointer;
}`;const o=_();f("data-v-c5cf2698");const b=a("div",{class:"mix-sidebar"},null,-1);u();const g=o((e,h,k,y,x,w)=>{const p=m("Tooltip");return t(),i("div",{class:e.prefixCls},[(t(!0),i(v,null,l(e.menuTypeList||[],n=>(t(),i(p,{key:n.title,title:n.title,placement:"bottom"},{default:o(()=>[a("div",{onClick:C=>e.handler(n),class:[`${e.prefixCls}__item`,`${e.prefixCls}__item--${n.type}`,{[`${e.prefixCls}__item--active`]:e.def===n.type}]},[b],10,["onClick"])]),_:2},1032,["title"]))),128))],2)});r.render=g,r.__scopeId="data-v-c5cf2698";export default r;
