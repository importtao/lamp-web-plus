import{a5 as $,p as d,s as H,I as R,O as M,S as m,d as A,a0 as N,a3 as U,w as z,y as q,ae as Z,V as y,x as G,cZ as W,eF as X,af as J,k as C,_ as b,Z as w,ag as Q,ah as Y,cG as K,bj as D,bd as E,g as tt,D as T,dO as j,dK as et,dP as nt,r as S,o as k,n as O,N as F,M as rt}from"./index.05ea33df.js";import{s as at,g as ot}from"./scrollTo.f3bf3653.js";import"./vendor.352e3120.js";function it(e){var t,n=function(c){return function(){t=null,e.apply(void 0,$(c))}},r=function(){if(t==null){for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];t=requestAnimationFrame(n(s))}};return r.cancel=function(){return cancelAnimationFrame(t)},r}var ct={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};function st(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){lt(e,o,n[o])})}return e}function lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(t,n){var r=st({},t,n.attrs);return d(R,H(r,{icon:ct}),null)};x.displayName="VerticalAlignTopOutlined",x.inheritAttrs=!1;var ut={visibilityHeight:m.number.def(400),duration:m.number.def(450),target:Function,prefixCls:m.string,onClick:m.func},ft=A({name:"ABackTop",inheritAttrs:!1,props:ut,emits:["click"],setup:function(t,n){var r=n.slots,o=n.attrs,c=n.emit,s=N("configProvider",U),a=z(),f=q({visible:!1,scrollEvent:null}),B=function(){return a.value&&a.value.ownerDocument?a.value.ownerDocument:window},V=function(l){var u=t.target,v=u===void 0?B:u,g=t.duration;at(0,{getContainer:v,duration:g}),c("click",l)},_=it(function(i){var l=t.visibilityHeight,u=ot(i.target,!0);f.visible=u>l}),h=function(){var l=t.target,u=l||B,v=u();f.scrollEvent=K(v,"scroll",function(g){_(g)}),_({target:v})},P=function(){f.scrollEvent&&f.scrollEvent.remove(),_.cancel()};Z(function(){return t.target},function(){P(),y(function(){h()})}),G(function(){y(function(){h()})}),W(function(){y(function(){h()})}),X(function(){P()}),J(function(){P()});var p=C(function(){return s.getPrefixCls("back-top",t.prefixCls)});return function(){var i,l,u=d("div",{class:"".concat(p.value,"-content")},[d("div",{class:"".concat(p.value,"-icon")},[d(x,null,null)])]),v=b(b({},o),{},{onClick:V,class:(i={},w(i,"".concat(p.value),!0),w(i,"".concat(o.class),o.class),w(i,"".concat(p.value,"-rtl"),s.direction==="rtl"),i)}),g=f.visible?d("div",b(b({},v),{},{ref:a}),[((l=r.default)===null||l===void 0?void 0:l.call(r))||u]):null,I=Q("fade");return d(Y,I,{default:function(){return[g]}})}}}),dt=M(ft),L=A({name:"LayoutFeatures",components:{BackTop:dt,LayoutLockPage:D(()=>E(()=>import("./index.f2c81d54.js"),["/assets/index.f2c81d54.js","/assets/LockPage.24e5f063.js","/assets/LockPage.4e79694f.css","/assets/index.05ea33df.js","/assets/index.03307a49.css","/assets/vendor.352e3120.js","/assets/header.d801b988.js"])),SettingDrawer:D(()=>E(()=>import("./index.388488ea.js").then(function(e){return e.i}),["/assets/index.388488ea.js","/assets/useDrawer.c824a5fb.js","/assets/useDrawer.25440082.css","/assets/index.05ea33df.js","/assets/index.03307a49.css","/assets/vendor.352e3120.js","/assets/ArrowLeftOutlined.97d250aa.js","/assets/index.965e0ed2.js","/assets/index.be446867.js"]))},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:n,getFullContent:r}=et(),{prefixCls:o}=tt("setting-drawer-fearure"),{getShowHeader:c}=nt(),s=C(()=>{if(!T(t))return!1;const a=T(n);return a===j.AUTO?!T(c)||T(r):a===j.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:s,prefixCls:o}}}),Tt=`.vben-setting-drawer-fearure {
  position: absolute;
  top: 45%;
  right: 0;
  z-index: 10;
  display: flex;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  background: #0960bd;
  border-radius: 6px 0 0 6px;
  justify-content: center;
  align-items: center;
}
.vben-setting-drawer-fearure svg {
  width: 1em;
  height: 1em;
}`;function vt(e,t,n,r,o,c){const s=S("LayoutLockPage"),a=S("BackTop"),f=S("SettingDrawer");return k(),O(rt,null,[d(s),e.getUseOpenBackTop?(k(),O(a,{key:0,target:e.getTarget},null,8,["target"])):F("",!0),e.getIsFixedSettingDrawer?(k(),O(f,{key:1,class:e.prefixCls},null,8,["class"])):F("",!0)],64)}L.render=vt;export default L;
