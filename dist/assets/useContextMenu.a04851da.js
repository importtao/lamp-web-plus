var h=Object.assign;import{aC as b,d as L,w as _,k as j,x as D,V as $,ai as k,D as x,p as s,M as O,cn as y,bl as S,b_ as V,en as N,eo as P,aK as z}from"./index.f012a3f4.js";import{D as A}from"./index.a99c15a9.js";var Y=`.context-menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: block;
  width: 156px;
  margin: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0.25rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.06);
  background-clip: padding-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.context-menu li {
  display: inline-block;
  width: 100%;
  height: 42px !important;
  margin: 0 !important;
  line-height: 42px !important;
}
.context-menu li span {
  line-height: 42px !important;
}
.context-menu li > div {
  margin: 0 !important;
}
.context-menu li:not(.ant-menu-item-disabled):hover {
  color: rgba(0, 0, 0, 0.85);
  background: #eee;
}
.context-menu .ant-divider {
  margin: 0 0;
}
.context-menu__popup .ant-divider {
  margin: 0 0;
}
.context-menu__popup li {
  display: inline-block;
  width: 100%;
  height: 42px !important;
  margin: 0 !important;
  line-height: 42px !important;
}
.context-menu__popup li span {
  line-height: 42px !important;
}
.context-menu__popup li > div {
  margin: 0 !important;
}
.context-menu__popup li:not(.ant-menu-item-disabled):hover {
  color: rgba(0, 0, 0, 0.85);
  background: #eee;
}`;const H={width:b.number.def(156),customEvent:{type:Object,default:null},styles:b.style,showIcon:b.bool.def(!0),axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}};function R(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!S(n)}const g="context-menu",C=n=>{const{item:t}=n;return s("span",{style:"display: inline-block; width: 100%;",onClick:n.handler.bind(null,t)},[n.showIcon&&t.icon&&s(V,{class:"mr-2",icon:t.icon},null),s("span",null,[t.label])])};var T=L({name:"ContextMenu",props:H,setup(n){const t=_(null),d=_(!1),l=j(()=>{const{axis:o,items:e,styles:r,width:i}=n,{x:c,y:p}=o||{x:0,y:0},f=(e||[]).length*40,v=i,w=document.body,I=w.clientWidth<c+v?c-v:c,E=w.clientHeight<p+f?p-f:p;return h(h({},r),{width:`${i}px`,left:`${I+1}px`,top:`${E+1}px`})});D(()=>{$(()=>d.value=!0)}),k(()=>{const o=x(t);o&&document.body.removeChild(o)});function m(o,e){const{handler:r,disabled:i}=o;i||(d.value=!1,e==null||e.stopPropagation(),e==null||e.preventDefault(),r==null||r())}function a(o){return o.map(e=>{const{disabled:r,label:i,children:c,divider:p=!1}=e,f=p?s(A,{key:`d-${i}`},null):null;return!c||c.length===0?s(O,null,[s(y.Item,{disabled:r,class:`${g}__item`,key:i},{default:()=>[s(C,{showIcon:n.showIcon,item:e,handler:m},null)]}),f]):x(d)?s(y.SubMenu,{key:i,disabled:r,popupClassName:`${g}__popup`},{title:()=>s(C,{showIcon:n.showIcon,item:e,handler:m},null),default:()=>a(c)}):null})}return()=>{let o;const{items:e}=n;return x(d)?s(y,{inlineIndent:12,mode:"vertical",class:g,ref:t,style:x(l)},R(o=a(e))?o:{default:()=>[o]}):null}}});const u={domList:[],resolve:()=>{}},W=function(n){const{event:t}=n||{};if(t&&(t==null||t.preventDefault()),!!N)return new Promise(d=>{const l=document.body,m=document.createElement("div"),a={};n.styles&&(a.styles=n.styles),n.items&&(a.items=n.items),n.event&&(a.customEvent=t,a.axis={x:t.clientX,y:t.clientY});const o=s(T,a);P(o,m);const e=function(){u.resolve("")};u.domList.push(m);const r=function(){u.domList.forEach(i=>{try{i&&l.removeChild(i)}catch(c){}}),l.removeEventListener("click",e),l.removeEventListener("scroll",e)};u.resolve=function(...i){r(),d(i[0])},r(),l.appendChild(m),l.addEventListener("click",e),l.addEventListener("scroll",e)})},M=function(){u&&(u.resolve(""),u.domList=[])};function F(n=!0){return z()&&n&&k(()=>{M()}),[W,M]}export{F as u};
