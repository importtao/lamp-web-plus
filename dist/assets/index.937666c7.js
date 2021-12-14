var de=Object.assign;import{S as B,d as T,p as f,ad as ze,w as I,a4 as Te,dn as pn,Y as Be,Z as fe,_ as he,a5 as ft,s as D,I as De,R as ht,a0 as bn,ae as re,dp as yt,x as xe,af as _t,b0 as gn,bq as vn,as as fn,aC as M,dq as se,dr as hn,ds as Ct,j as ce,b_ as ye,g as A,k as g,r as h,o as p,n as b,N as L,L as St,q as J,cn as We,J as O,M as W,aE as me,D as t,bc as yn,E as Ie,dt as _n,du as Le,ct as j,y as we,c1 as _e,bH as je,dv as Oe,dw as Ke,dx as Pe,aB as Cn,ca as $t,c9 as Mt,ap as Sn,V as Ee,dy as $n,aK as Ve,aG as Q,aZ as Ue,dz as Mn,dA as wn,dB as kn,dC as wt,d0 as Tn,bF as kt,cx as Tt,c6 as xt,cd as It,G as ee,H as pe,bj as ne,bd as te,dD as be,dE as Lt,dF as G,dG as Ge,dH as xn,dI as Ot,dJ as In,b5 as Pt,a$ as Ln,dK as He,e as Ye,dL as Et,aL as Ht,di as qe,f as Rt,dM as At,dN as Nt,dO as On,dP as Re,dQ as Ce,dR as Y,dS as Ae,dT as Ft,dU as zt,dV as Bt,dW as Pn,dX as Dt,aI as En,cX as Hn,dY as Rn,bg as Wt,aF as An,aD as Nn,db as jt,u as Kt,dZ as Vt,d_ as Ut,d$ as Fn,c0 as Gt,e0 as Yt,df as zn,A as qt,e1 as Xt}from"./index.0523a5a3.js";import{u as Qt}from"./useFullScreen.4feb3b86.js";import{F as Zt,a as Jt}from"./FullscreenOutlined.d52a1fbe.js";import{i as ea}from"./isNumeric.2bec345d.js";import na from"./index.8e1ef517.js";import{u as ta}from"./uniqBy.2c7c6ba7.js";import{c as aa}from"./usePageContext.0fc2e04d.js";import{u as oa}from"./useWindowSizeFn.4268e9dd.js";import{D as ia}from"./index.05d758e3.js";import{R as ra}from"./RedoOutlined.e111b4c0.js";import{u as sa}from"./useSortable.d1ae52c9.js";import{T as Bn}from"./index.08635ac9.js";var Xe={prefixCls:B.string,hasSider:B.looseBool,tagName:B.string};function Ne(e){var n=e.suffixCls,a=e.tagName,o=e.name;return function(i){var l=T({name:o,props:Xe,setup:function(c,r){var d=r.slots,u=ze(n,c),v=u.prefixCls;return function(){var m,y=he(he({},c),{},{prefixCls:v.value,tagName:a});return f(i,y,{default:function(){return[(m=d.default)===null||m===void 0?void 0:m.call(d)]}})}}});return l}}var Qe=T({props:Xe,setup:function(n,a){var o=a.slots;return function(){var i;return f(n.tagName,{class:n.prefixCls},(i=o.default)===null||i===void 0?void 0:i.call(o))}}}),la=T({props:Xe,setup:function(n,a){var o=a.slots,i=ze("",n),l=i.direction,s=I([]),c={addSider:function(d){s.value=[].concat(ft(s.value),[d])},removeSider:function(d){s.value=s.value.filter(function(u){return u!==d})}};return Te(pn,c),function(){var r,d,u=n.prefixCls,v=n.hasSider,m=n.tagName,y=Be(u,(r={},fe(r,"".concat(u,"-has-sider"),typeof v=="boolean"?v:s.value.length>0),fe(r,"".concat(u,"-rtl"),l.value==="rtl"),r));return f(m,{class:y},(d=o.default)===null||d===void 0?void 0:d.call(o))}}}),N=Ne({suffixCls:"layout",tagName:"section",name:"ALayout"})(la),ua=Ne({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(Qe),da=Ne({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(Qe),ca=Ne({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(Qe);N.Header=ua,N.Footer=da,N.Content=ca;var ma={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};function pa(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),o.forEach(function(i){ba(e,i,a[i])})}return e}function ba(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var Ze=function(n,a){var o=pa({},n,a.attrs);return f(De,D(o,{icon:ma}),null)};Ze.displayName="BarsOutlined",Ze.inheritAttrs=!1;var Dn={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},ga={prefixCls:B.string,collapsible:B.looseBool,collapsed:B.looseBool,defaultCollapsed:B.looseBool,reverseArrow:B.looseBool,zeroWidthTriggerStyle:B.style,trigger:B.VNodeChild,width:B.oneOfType([B.number,B.string]),collapsedWidth:B.oneOfType([B.number,B.string]),breakpoint:B.oneOf(fn("xs","sm","md","lg","xl","xxl")),theme:B.oneOf(fn("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function},va=function(){var e=0;return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,"".concat(n).concat(e)}}(),fa=T({name:"ALayoutSider",inheritAttrs:!1,props:ht(ga,{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup:function(n,a){var o=a.emit,i=a.attrs,l=a.slots,s=ze("layout-sider",n),c=s.prefixCls,r=bn(pn,void 0),d=I(!!(n.collapsed!==void 0?n.collapsed:n.defaultCollapsed)),u=I(!1);re(function(){return n.collapsed},function(){d.value=!!n.collapsed}),Te(yt,d);var v=function($,x){n.collapsed===void 0&&(d.value=$),o("update:collapsed",$),o("collapse",$,x)},m=I(function(_){u.value=_.matches,o("breakpoint",_.matches),d.value!==_.matches&&v(_.matches,"responsive")}),y;function C(_){return m.value(_)}var S=va("ant-sider-");xe(function(){if(typeof window!="undefined"){var _=window,$=_.matchMedia;if($&&n.breakpoint&&n.breakpoint in Dn){y=$("(max-width: ".concat(Dn[n.breakpoint],")"));try{y.addEventListener("change",C)}catch(x){y.addListener(C)}C(y)}}r&&r.addSider(S)}),_t(function(){try{var _;(_=y)===null||_===void 0||_.removeEventListener("change",C)}catch(x){var $;($=y)===null||$===void 0||$.removeListener(C)}r&&r.removeSider(S)});var w=function(){v(!d.value,"clickTrigger")};return function(){var _,$,x=c.value,F=n.collapsedWidth,z=n.width,k=n.reverseArrow,P=n.zeroWidthTriggerStyle,E=n.trigger,ae=n.collapsible,V=n.theme,le=d.value?F:z,q=ea(le)?"".concat(le,"px"):String(le),oe=parseFloat(String(F||0))===0?f("span",{onClick:w,class:Be("".concat(x,"-zero-width-trigger"),"".concat(x,"-zero-width-trigger-").concat(k?"right":"left")),style:P},[E||f(Ze,null,null)]):null,ie={expanded:k?f(gn,null,null):f(vn,null,null),collapsed:k?f(vn,null,null):f(gn,null,null)},ue=d.value?"collapsed":"expanded",ge=ie[ue],H=E!==null?oe||f("div",{class:"".concat(x,"-trigger"),onClick:w,style:{width:q}},[E||ge]):null,X=he(he({},i.style),{},{flex:"0 0 ".concat(q),maxWidth:q,minWidth:q,width:q}),U=Be(x,"".concat(x,"-").concat(V),(_={},fe(_,"".concat(x,"-collapsed"),!!d.value),fe(_,"".concat(x,"-has-trigger"),ae&&E!==null&&!oe),fe(_,"".concat(x,"-below"),!!u.value),fe(_,"".concat(x,"-zero-width"),parseFloat(q)===0),_),i.class);return f("aside",he(he({},i),{},{class:U,style:X,ref:I}),[f("div",{class:"".concat(x,"-children")},[($=l.default)===null||$===void 0?void 0:$.call(l)]),ae||u.value&&oe?H:null])}}});N.Sider=fa,N.install=function(e){return e.component(N.name,N),e.component(N.Header.name,N.Header),e.component(N.Footer.name,N.Footer),e.component(N.Sider.name,N.Sider),e.component(N.Content.name,N.Content),e},N.Header,N.Footer,N.Sider,N.Content;var ha={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"};function ya(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),o.forEach(function(i){_a(e,i,a[i])})}return e}function _a(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var Je=function(n,a){var o=ya({},n,a.attrs);return f(De,D(o,{icon:ha}),null)};Je.displayName="MenuFoldOutlined",Je.inheritAttrs=!1;var Ca={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"};function Sa(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),o.forEach(function(i){$a(e,i,a[i])})}return e}function $a(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var en=function(n,a){var o=Sa({},n,a.attrs);return f(De,D(o,{icon:Ca}),null)};en.displayName="MenuUnfoldOutlined",en.inheritAttrs=!1;const Ma={items:{type:Array,default:()=>[]},collapsedShowTitle:M.bool,inlineIndent:M.number.def(20),mode:{type:String,default:se.INLINE},type:{type:String,default:hn.MIX},theme:M.string.def(Ct.DARK),inlineCollapsed:M.bool,mixSider:M.bool,isHorizontal:M.bool,accordion:M.bool.def(!0),beforeClickFn:{type:Function}},Wn={item:{type:Object,default:{}},level:M.number,theme:M.oneOf(["dark","light"]),showTitle:M.bool,isHorizontal:M.bool},wa={item:{type:Object,default:null},showTitle:M.bool.def(!0),level:M.number.def(0),isHorizontal:M.bool.def(!0)},{t:ka}=ce();var nn=T({name:"MenuItemContent",components:{Icon:ye},props:wa,setup(e){const{prefixCls:n}=A("basic-menu-item-content"),a=g(()=>{var i;return ka((i=e.item)==null?void 0:i.name)}),o=g(()=>{var i;return(i=e.item)==null?void 0:i.icon});return{prefixCls:n,getI18nName:a,getIcon:o}}});function Ta(e,n,a,o,i,l){const s=h("Icon");return p(),b("span",{class:`${e.prefixCls}-wrapper`},[e.getIcon?(p(),b(s,{key:0,icon:e.getIcon,size:18,class:`${e.prefixCls}-wrapper__icon`},null,8,["icon","class"])):L("",!0),St(" "+J(e.getI18nName),1)],2)}nn.render=Ta;var jn=T({name:"BasicMenuItem",components:{MenuItem:We.Item,MenuItemContent:nn},props:Wn,setup(){const{prefixCls:e}=A("basic-menu-item");return{prefixCls:e}}});function xa(e,n,a,o,i,l){const s=h("MenuItemContent"),c=h("MenuItem");return p(),b(c,null,{default:O(()=>[f(s,D(e.$props,{item:e.item}),null,16,["item"])]),_:1})}jn.render=xa;var Kn=T({name:"BasicSubMenuItem",isSubMenu:!0,components:{BasicMenuItem:jn,SubMenu:We.SubMenu,MenuItemContent:nn},props:Wn,setup(e){const{prefixCls:n}=A("basic-menu-item"),a=g(()=>{var i;return!((i=e.item.meta)==null?void 0:i.hideMenu)});function o(i){return Reflect.has(i,"children")&&!!i.children&&i.children.length>0}return{prefixCls:n,menuHasChildren:o,getShowMenu:a}}});function Ia(e,n,a,o,i,l){const s=h("BasicMenuItem"),c=h("MenuItemContent"),r=h("_self"),d=h("SubMenu");return p(),b(W,null,[!e.menuHasChildren(e.item)&&e.getShowMenu?(p(),b(s,D({key:0},e.$props),null,16)):L("",!0),e.menuHasChildren(e.item)&&e.getShowMenu?(p(),b(d,{key:1,class:[e.theme],popupClassName:"app-top-menu-popup"},{title:O(()=>[f(c,D(e.$props,{item:e.item}),null,16,["item"])]),default:O(()=>[(p(!0),b(W,null,me(e.item.children||[],u=>(p(),b(r,D({key:u.path},e.$props,{item:u}),null,16,["item"]))),128))]),_:1},8,["class"])):L("",!0)],64)}Kn.render=Ia;function La(e,n,a,o){const{getCollapsed:i,getIsMixSidebar:l}=j();async function s(u){if(a.value===se.HORIZONTAL)return;const v=t(l);yn(()=>{const m=Ie(n.value);if((m==null?void 0:m.length)===0){e.openKeys=[];return}t(o)?e.openKeys=Le(m,u):e.openKeys=_n([...e.openKeys,...Le(m,u)])},16,!v)}const c=g(()=>(t(l)?!1:t(i))?e.collapsedOpenKeys:e.openKeys);function r(){e.selectedKeys=[],e.openKeys=[]}function d(u){if(t(a)===se.HORIZONTAL||!t(o)||t(l))e.openKeys=u;else{const v=[];for(const{children:m,path:y}of t(n))m&&m.length>0&&v.push(y);if(t(i))e.collapsedOpenKeys=u;else{const m=u.find(y=>e.openKeys.indexOf(y)===-1);v.indexOf(m)===-1?e.openKeys=u:e.openKeys=m?[m]:[]}}}return{setOpenKeys:s,resetKeys:r,getOpenKeys:c,handleOpenChange:d}}var Vn=T({name:"BasicMenu",components:{Menu:We,BasicSubMenuItem:Kn},props:Ma,emits:["menuClick"],setup(e,{emit:n}){const a=I(!1),o=I(""),i=we({defaultSelectedKeys:[],openKeys:[],selectedKeys:[],collapsedOpenKeys:[]}),{prefixCls:l}=A("basic-menu"),{items:s,mode:c,accordion:r}=_e(e),{getCollapsed:d,getIsHorizontal:u,getTopMenuAlign:v,getSplit:m}=j(),{currentRoute:y}=je(),{handleOpenChange:C,setOpenKeys:S,getOpenKeys:w}=La(i,s,c,r),_=g(()=>{const{type:k,mode:P}=e;return k===hn.TOP_MENU&&P===se.HORIZONTAL||e.isHorizontal&&t(m)}),$=g(()=>{const k=e.isHorizontal&&t(m)?"start":t(v);return[l,`justify-${k}`,{[`${l}__second`]:!e.isHorizontal&&t(m),[`${l}__sidebar-hor`]:t(_)}]}),x=g(()=>{const k=e.mode===se.INLINE,P={};return k&&(P.inlineCollapsed=e.mixSider?!1:t(d)),P});Oe(k=>{var P;k.name!==Ke&&(z(k),o.value=(P=k.meta)==null?void 0:P.currentActiveMenu,t(o)&&(i.selectedKeys=[t(o)],S(t(o))))}),!e.mixSider&&re(()=>e.items,()=>{z()});async function F({key:k}){const{beforeClickFn:P}=e;P&&Cn(P)&&!await P(k)||(n("menuClick",k),a.value=!0,i.selectedKeys=[k])}async function z(k){if(t(a)){a.value=!1;return}const P=(k||t(y)).path;if(S(P),!t(o))if(e.isHorizontal&&t(m)){const E=await Pe(P);i.selectedKeys=[E]}else{const E=await Le(e.items,P);i.selectedKeys=E}}return de({prefixCls:l,getIsHorizontal:u,handleMenuClick:F,getInlineCollapseOptions:x,getMenuClass:$,handleOpenChange:C,getOpenKeys:w},_e(i))}}),Do=`.app-top-menu-popup {
  min-width: 150px;
}
.vben-basic-menu {
  width: 100%;
}
.vben-basic-menu .ant-menu-item {
  transition: unset;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal {
  display: flex;
  align-items: center;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark {
  background: transparent;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu:hover, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item-open, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-open, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item-selected, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-selected, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item:hover, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item-active, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-active, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-title:hover {
  color: #fff;
  background: var(--header-active-menu-bg-color) !important;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item:hover, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item-active, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-active, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu-title:hover {
  background: var(--header-active-menu-bg-color);
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .vben-basic-menu-item__level1 {
  background: transparent;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .vben-basic-menu-item__level1.ant-menu-item-selected, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .vben-basic-menu-item__level1.ant-menu-submenu-selected {
  background: var(--header-active-menu-bg-color) !important;
}
.vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item.vben-basic-menu-item__level1, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu.vben-basic-menu-item__level1, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-item .ant-menu-submenu-title, .vben-basic-menu__sidebar-hor.ant-menu-horizontal.ant-menu-dark .ant-menu-submenu .ant-menu-submenu-title {
  height: 48px;
  line-height: 48px;
}
.vben-basic-menu .ant-menu-submenu, .vben-basic-menu .ant-menu-submenu-inline {
  transition: unset;
}
.vben-basic-menu .ant-menu-inline.ant-menu-sub {
  box-shadow: unset !important;
  transition: unset;
}`;function Oa(e,n,a,o,i,l){const s=h("BasicSubMenuItem"),c=h("Menu");return p(),b(c,D({selectedKeys:e.selectedKeys,defaultSelectedKeys:e.defaultSelectedKeys,mode:e.mode,multiple:!1,openKeys:e.getOpenKeys,inlineIndent:e.inlineIndent,theme:e.theme,onOpenChange:e.handleOpenChange,class:e.getMenuClass,onClick:e.handleMenuClick,subMenuOpenDelay:.2},e.getInlineCollapseOptions),{default:O(()=>[(p(!0),b(W,null,me(e.items,r=>(p(),b(s,{key:r.path,item:r,theme:e.theme,isHorizontal:e.isHorizontal},null,8,["item","theme","isHorizontal"]))),128))]),_:1},16,["selectedKeys","defaultSelectedKeys","mode","openKeys","inlineIndent","theme","onOpenChange","class","onClick","subMenuOpenDelay"])}Vn.render=Oa;const Un=Symbol();function Pa(e){return $t(e,Un,{readonly:!1,native:!0})}function Gn(){return Mt(Un)}var Yn=T({name:"Menu",props:{theme:M.oneOf(["light","dark"]).def("light"),activeName:M.oneOfType([M.string,M.number]),openNames:{type:Array,default:[]},accordion:M.bool.def(!0),width:M.string.def("100%"),collapsedWidth:M.string.def("48px"),indentSize:M.number.def(16),collapse:M.bool.def(!0),activeSubMenuNames:{type:Array,default:[]}},emits:["select","open-change"],setup(e,{emit:n}){const a=new $n,o=Ve(),i=I(""),l=I([]),{prefixCls:s}=A("menu"),c=I(!1);Pa({rootMenuEmitter:a,activeName:i});const r=g(()=>{const{theme:C}=e;return[s,`${s}-${C}`,`${s}-vertical`,{[`${s}-collapse`]:e.collapse}]});Sn(()=>{l.value=e.openNames}),Sn(()=>{e.activeName&&(i.value=e.activeName)}),re(()=>e.openNames,()=>{Ee(()=>{d()})});function d(){a.emit("on-update-opened",l.value)}function u(C){l.value.includes(C)||(l.value.push(C),d())}function v(C){l.value=l.value.filter(S=>S!==C),d()}function m(){l.value=[],d()}function y(C){C!==-1&&(l.value=l.value.slice(0,C+1),d())}return Te(`subMenu:${o==null?void 0:o.uid}`,{addSubMenu:u,removeSubMenu:v,getOpenNames:()=>l.value,removeAll:m,isRemoveAllPopup:c,sliceIndex:y,level:0,props:e}),xe(()=>{l.value=e.collapse?[]:[...e.openNames],d(),a.on("on-menu-item-select",C=>{i.value=C,Ee(()=>{e.collapse&&m()}),n("select",C)})}),{getClass:r,openedNames:l}}}),Wo=`.light-border::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 2px;
  background: #0960bd;
  content: '';
}
.vben-menu-menu-popover .ant-popover-arrow {
  display: none;
}
.vben-menu-menu-popover .ant-popover-inner-content {
  padding: 0;
}
.vben-menu-menu-popover .vben-menu-opened > * > .vben-menu-menu-popover .vben-menu-submenu-title-icon {
  transform: translateY(-50%) rotate(90deg) !important;
}
.vben-menu-menu-popover .vben-menu-item, .vben-menu-menu-popover .vben-menu-submenu-title {
  position: relative;
  z-index: 1;
  padding: 12px 20px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.vben-menu-menu-popover .vben-menu-item-icon, .vben-menu-menu-popover .vben-menu-submenu-title-icon {
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%) rotate(-90deg);
  transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.vben-menu-menu-popover .vben-menu-dark .vben-menu-item, .vben-menu-menu-popover .vben-menu-dark .vben-menu-submenu-title {
  color: rgba(255, 255, 255, 0.7);
}
.vben-menu-menu-popover .vben-menu-dark .vben-menu-item:hover, .vben-menu-menu-popover .vben-menu-dark .vben-menu-submenu-title:hover {
  color: #fff;
}
.vben-menu-menu-popover .vben-menu-dark .vben-menu-item-selected, .vben-menu-menu-popover .vben-menu-dark .vben-menu-submenu-title-selected {
  color: #fff;
  background: #0960bd !important;
}
.vben-menu-menu-popover .vben-menu-light .vben-menu-item, .vben-menu-menu-popover .vben-menu-light .vben-menu-submenu-title {
  color: rgba(0, 0, 0, 0.85);
}
.vben-menu-menu-popover .vben-menu-light .vben-menu-item:hover, .vben-menu-menu-popover .vben-menu-light .vben-menu-submenu-title:hover {
  color: #0960bd;
}
.vben-menu-menu-popover .vben-menu-light .vben-menu-item-selected, .vben-menu-menu-popover .vben-menu-light .vben-menu-submenu-title-selected {
  z-index: 2;
  color: #0960bd;
  background: rgba(9, 96, 189, 0.1);
}
.vben-menu-menu-popover .vben-menu-light .vben-menu-item-selected::after, .vben-menu-menu-popover .vben-menu-light .vben-menu-submenu-title-selected::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 2px;
  background: #0960bd;
  content: '';
}
.vben-menu {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  list-style: none;
  outline: none;
}
.vben-menu .collapse-transition {
  transition: 0.2s height ease-in-out, 0.2s padding-top ease-in-out, 0.2s padding-bottom ease-in-out;
}
.vben-menu-light {
  background: #fff;
}
.vben-menu-light .vben-menu-submenu-active {
  color: #0960bd !important;
}
.vben-menu-light .vben-menu-submenu-active-border::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 2px;
  background: #0960bd;
  content: '';
}
.vben-menu-dark .vben-menu-submenu-active {
  color: #fff !important;
}
.vben-menu-item {
  position: relative;
  z-index: 1;
  display: flex;
  font-size: 14px;
  color: inherit;
  list-style: none;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.vben-menu-item:hover, .vben-menu-item:active {
  color: inherit;
}
.vben-menu-item > i {
  margin-right: 6px;
}
.vben-menu-submenu-title > i, .vben-menu-submenu-title span > i {
  margin-right: 8px;
}
.vben-menu-vertical .vben-menu-item, .vben-menu-vertical .vben-menu-submenu-title {
  position: relative;
  z-index: 1;
  padding: 12px 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.vben-menu-vertical .vben-menu-item:hover, .vben-menu-vertical .vben-menu-submenu-title:hover {
  color: #0960bd;
}
.vben-menu-vertical .vben-menu-item .vben-menu-tooltip, .vben-menu-vertical .vben-menu-submenu-title .vben-menu-tooltip {
  width: calc(100% - 0px);
  padding: 12px 0;
  text-align: center;
}
.vben-menu-vertical .vben-menu-item .vben-menu-submenu-popup, .vben-menu-vertical .vben-menu-submenu-title .vben-menu-submenu-popup {
  padding: 12px 0;
}
.vben-menu-vertical .vben-menu-submenu-collapse .vben-menu-submenu-popup {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vben-menu-vertical .vben-menu-submenu-collapse .vben-menu-submenu-collapsed-show-tit {
  flex-direction: column;
}
.vben-menu-vertical.vben-menu-collapse .vben-menu-item, .vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-title {
  padding: 0 0;
}
.vben-menu-vertical .vben-menu-submenu-title-icon {
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
}
.vben-menu-submenu-title-icon {
  transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.vben-menu-vertical .vben-menu-opened > * > .vben-menu-submenu-title-icon {
  transform: translateY(-50%) rotate(180deg);
}
.vben-menu-vertical .vben-menu-submenu-nested {
  padding-left: 20px;
}
.vben-menu-vertical .vben-menu-submenu .vben-menu-item {
  padding-left: 43px;
}
.vben-menu-light.vben-menu-vertical .vben-menu-item-active:not(.vben-menu-submenu) {
  z-index: 2;
  color: #0960bd;
  background: rgba(9, 96, 189, 0.1);
}
.vben-menu-light.vben-menu-vertical .vben-menu-item-active:not(.vben-menu-submenu)::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 2px;
  background: #0960bd;
  content: '';
}
.vben-menu-light.vben-menu-vertical .vben-menu-item-active.vben-menu-submenu {
  color: #0960bd;
}
.vben-menu-light.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active, .vben-menu-light.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active {
  position: relative;
  background: rgba(9, 96, 189, 0.05);
}
.vben-menu-light.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active::after, .vben-menu-light.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active::after {
  display: none;
}
.vben-menu-light.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active::before, .vben-menu-light.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #0960bd;
  content: '';
}
.vben-menu-dark.vben-menu-vertical .vben-menu-item, .vben-menu-dark.vben-menu-vertical .vben-menu-submenu-title {
  color: rgba(255, 255, 255, 0.7);
}
.vben-menu-dark.vben-menu-vertical .vben-menu-item-active:not(.vben-menu-submenu), .vben-menu-dark.vben-menu-vertical .vben-menu-submenu-title-active:not(.vben-menu-submenu) {
  color: #fff !important;
  background: #0960bd !important;
}
.vben-menu-dark.vben-menu-vertical .vben-menu-item:hover, .vben-menu-dark.vben-menu-vertical .vben-menu-submenu-title:hover {
  color: #fff;
}
.vben-menu-dark.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active, .vben-menu-dark.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active {
  position: relative;
  color: #fff !important;
  background-color: var(--sider-dark-darken-bg-color) !important;
}
.vben-menu-dark.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active::before, .vben-menu-dark.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #0960bd;
  content: '';
}
.vben-menu-dark.vben-menu-vertical.vben-menu-collapse > li.vben-menu-item-active .vben-menu-submenu-collapse, .vben-menu-dark.vben-menu-vertical.vben-menu-collapse .vben-menu-submenu-active .vben-menu-submenu-collapse {
  background-color: transparent;
}
.vben-menu-dark.vben-menu-vertical .vben-menu-submenu .vben-menu-item-active, .vben-menu-dark.vben-menu-vertical .vben-menu-submenu .vben-menu-item-active:hover {
  color: #fff;
  border-right: none;
}
.vben-menu-dark.vben-menu-vertical .vben-menu-child-item-active > .vben-menu-submenu-title {
  color: #fff;
}
.vben-menu-dark.vben-menu-vertical .vben-menu-opened .vben-menu-submenu-has-parent-submenu .vben-menu-submenu-title {
  background: transparent;
}`;function Ea(e,n,a,o,i,l){return p(),b("ul",{class:e.getClass},[Q(e.$slots,"default")],2)}Yn.render=Ea;function qn(e){const n=g(()=>l(["Menu","SubMenu"])),a=g(()=>l(["Menu"])),o=g(()=>l(["SubMenu"])),i=g(()=>{var v,m,y;let r=e==null?void 0:e.parent;if(!r)return{};const d=(m=(v=t(a))==null?void 0:v.props.indentSize)!=null?m:20;let u=d;if((y=t(a))==null?void 0:y.props.collapse)u=d;else for(;r&&r.type.name!=="Menu";)r.type.name==="SubMenu"&&(u+=d),r=r.parent;return{paddingLeft:u+"px"}});function l(r){let d=e==null?void 0:e.parent;if(!d)return null;for(;d&&r.indexOf(d.type.name)===-1;)d=d.parent;return d}function s(){let r=e;if(!r)return{uidList:[],list:[]};const d=[];for(;r&&r.type.name!=="Menu";)r.type.name==="SubMenu"&&d.push(r),r=r.parent;return{uidList:d.map(u=>u.uid),list:d}}function c(r,d="SubMenu"){let u=r.parent;for(;u;){if(u.type.name!==d)return u;u=u.parent}return u}return{getParentMenu:n,getParentInstance:c,getParentRootMenu:a,getParentList:s,getParentSubMenu:o,getItemStyle:i}}var Xn=T({name:"MenuItem",components:{Tooltip:Ue},props:{name:{type:[String,Number],required:!0},disabled:M.bool},setup(e,{slots:n}){const a=Ve(),o=I(!1),{getItemStyle:i,getParentList:l,getParentMenu:s,getParentRootMenu:c}=qn(a),{prefixCls:r}=A("menu"),{rootMenuEmitter:d,activeName:u}=Gn(),v=g(()=>[`${r}-item`,{[`${r}-item-active`]:t(o),[`${r}-item-selected`]:t(o),[`${r}-item-disabled`]:!!e.disabled}]),m=g(()=>{var S;return(S=t(c))==null?void 0:S.props.collapse}),y=g(()=>{var S;return((S=t(s))==null?void 0:S.type.name)==="Menu"&&t(m)&&n.title});function C(){const{disabled:S}=e;if(S||(d.emit("on-menu-item-select",e.name),t(m)))return;const{uidList:w}=l();d.emit("on-update-opened",{opend:!1,parent:a==null?void 0:a.parent,uidList:w})}return re(()=>u.value,S=>{if(S===e.name){const{list:w,uidList:_}=l();o.value=!0,w.forEach($=>{$.proxy&&($.proxy.active=!0)}),d.emit("on-update-active-name:submenu",_)}else o.value=!1},{immediate:!0}),{getClass:v,prefixCls:r,getItemStyle:i,getCollapse:m,handleClickItem:C,showTooptip:y}}});function Ha(e,n,a,o,i,l){const s=h("Tooltip");return p(),b("li",{class:e.getClass,onClick:n[1]||(n[1]=Mn((...c)=>e.handleClickItem&&e.handleClickItem(...c),["stop"])),style:e.getCollapse?{}:e.getItemStyle},[e.showTooptip?(p(),b(s,{key:0,placement:"right"},{title:O(()=>[Q(e.$slots,"title")]),default:O(()=>[f("div",{class:`${e.prefixCls}-tooltip`},[Q(e.$slots,"default")],2)]),_:3})):(p(),b(W,{key:1},[Q(e.$slots,"default"),Q(e.$slots,"title")],64))],6)}Xn.render=Ha;var Qn=T({name:"MenuCollapseTransition",setup(){return{on:{beforeEnter(e){wn(e,"collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,e.scrollHeight!==0?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){kn(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(wn(e,"collapse-transition"),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){kn(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}}}});function Ra(e,n,a,o,i,l){return p(),b(Tn,D({mode:"out-in"},wt(e.on)),{default:O(()=>[Q(e.$slots,"default")]),_:3},16)}Qn.render=Ra;const Zn=200;var Jn=T({name:"SubMenu",components:{Icon:ye,MenuCollapseTransition:Qn,Popover:kt},props:{name:{type:[String,Number],required:!0},disabled:M.bool,collapsedShowTitle:M.bool},setup(e){var ge;const n=Ve(),a=we({active:!1,opened:!1}),o=we({timeout:null,mouseInChild:!1,isChild:!1}),{getParentSubMenu:i,getItemStyle:l,getParentMenu:s,getParentList:c}=qn(n),{prefixCls:r}=A("menu"),d=new $n,{rootMenuEmitter:u}=Gn(),{addSubMenu:v,removeSubMenu:m,removeAll:y,getOpenNames:C,isRemoveAllPopup:S,sliceIndex:w,level:_,props:$,handleMouseleave:x}=bn(`subMenu:${(ge=s.value)==null?void 0:ge.uid}`),F=g(()=>[`${r}-submenu`,{[`${r}-item-active`]:a.active,[`${r}-opened`]:a.opened,[`${r}-submenu-disabled`]:e.disabled,[`${r}-submenu-has-parent-submenu`]:t(i),[`${r}-child-item-active`]:a.active}]),z=g(()=>$.accordion),k=g(()=>$.collapse),P=g(()=>$.theme),E=g(()=>({minWidth:"200px"})),ae=g(()=>{const H=e.name;return t(k)?C().includes(H):a.opened}),V=g(()=>{const H=$.activeSubMenuNames.includes(e.name);return[`${r}-submenu-title`,{[`${r}-submenu-active`]:H,[`${r}-submenu-active-border`]:H&&_===0,[`${r}-submenu-collapse`]:t(k)&&_===0}]});function le(H){return t(k)?{onMouseenter:oe,onMouseleave:()=>ie(H)}:{}}function q(){const{disabled:H}=e;if(H||t(k))return;const X=a.opened;if(t(z)){const{uidList:U}=c();u.emit("on-update-opened",{opend:!1,parent:n==null?void 0:n.parent,uidList:U})}a.opened=!X}function oe(){if(e.disabled)return;d.emit("submenu:mouse-enter-child");const X=C().findIndex(Z=>Z===e.name);w(X),_===0&&C().length===2&&y(),o.isChild=C().includes(e.name),clearTimeout(o.timeout),o.timeout=setTimeout(()=>{v(e.name)},Zn)}function ie(H=!1){var U;((U=s.value)==null?void 0:U.props.name)||(S.value=!0),C().slice(-1)[0]===e.name&&(o.isChild=!1),d.emit("submenu:mouse-leave-child"),o.timeout&&(clearTimeout(o.timeout),o.timeout=setTimeout(()=>{S.value?y():o.mouseInChild||m(e.name)},Zn)),H&&i.value&&(x==null||x(!0))}Tt(()=>{d.on("submenu:mouse-enter-child",()=>{o.mouseInChild=!0,S.value=!1,clearTimeout(o.timeout)}),d.on("submenu:mouse-leave-child",()=>{o.isChild||(o.mouseInChild=!1,clearTimeout(o.timeout))}),u.on("on-update-opened",H=>{if(!t(k)){if(xt(H)){a.opened=H;return}if(It(H)){const{opend:X,parent:U,uidList:Z}=H;U===(n==null?void 0:n.parent)?a.opened=X:Z.includes(n==null?void 0:n.uid)||(a.opened=!1);return}e.name&&Array.isArray(H)&&(a.opened=H.includes(e.name))}}),u.on("on-update-active-name:submenu",H=>{(n==null?void 0:n.uid)&&(a.active=H.includes(n==null?void 0:n.uid))})});function ue(H){a.opened=H}return Te(`subMenu:${n==null?void 0:n.uid}`,{addSubMenu:v,removeSubMenu:m,getOpenNames:C,removeAll:y,isRemoveAllPopup:S,sliceIndex:w,level:_+1,handleMouseleave:ie,props:$}),de(de({getClass:F,prefixCls:r,getCollapse:k,getItemStyle:l,handleClick:q,handleVisibleChange:ue,getParentSubMenu:i,getOverlayStyle:E,getTheme:P,getIsOpend:ae,getEvents:le,getSubClass:V},_e(a)),_e(o))}});function Aa(e,n,a,o,i,l){const s=h("Icon"),c=h("MenuCollapseTransition"),r=h("Popover");return p(),b("li",{class:e.getClass},[e.getCollapse?(p(),b(r,{key:1,placement:"right",overlayClassName:`${e.prefixCls}-menu-popover`,visible:e.getIsOpend,onVisibleChange:e.handleVisibleChange,overlayStyle:e.getOverlayStyle,align:{offset:[0,0]}},{content:O(()=>[f("div",e.getEvents(!0),[f("ul",{class:[e.prefixCls,`${e.prefixCls}-${e.getTheme}`,`${e.prefixCls}-popup`]},[Q(e.$slots,"default")],2)],16)]),default:O(()=>[f("div",D({class:e.getSubClass},e.getEvents(!1)),[f("div",{class:[{[`${e.prefixCls}-submenu-popup`]:!e.getParentSubMenu,[`${e.prefixCls}-submenu-collapsed-show-tit`]:e.collapsedShowTitle}]},[Q(e.$slots,"title")],2),e.getParentSubMenu?(p(),b(s,{key:0,icon:"eva:arrow-ios-downward-outline",size:14,class:`${e.prefixCls}-submenu-title-icon`},null,8,["class"])):L("",!0)],16)]),_:3},8,["overlayClassName","visible","onVisibleChange","overlayStyle"])):(p(),b(W,{key:0},[f("div",{class:`${e.prefixCls}-submenu-title`,onClick:n[1]||(n[1]=Mn((...d)=>e.handleClick&&e.handleClick(...d),["stop"])),style:e.getItemStyle},[Q(e.$slots,"title"),f(s,{icon:"eva:arrow-ios-downward-outline",size:14,class:`${e.prefixCls}-submenu-title-icon`},null,8,["class"])],6),f(c,null,{default:O(()=>[ee(f("ul",{class:e.prefixCls},[Q(e.$slots,"default")],2),[[pe,e.opened]])]),_:3})],64))],2)}Jn.render=Aa;var et=T({name:"SimpleSubMenu",components:{SubMenu:Jn,MenuItem:Xn,SimpleMenuTag:ne(()=>te(()=>Promise.resolve().then(function(){return ja}),void 0)),Icon:ye},props:{item:{type:Object,default:{}},parent:M.bool,collapsedShowTitle:M.bool,collapse:M.bool,theme:M.oneOf(["dark","light"])},setup(e){const{t:n}=ce(),{prefixCls:a}=A("simple-menu"),o=g(()=>{var u,v;return!((v=(u=e.item)==null?void 0:u.meta)==null?void 0:v.hideMenu)}),i=g(()=>{var u;return(u=e.item)==null?void 0:u.icon}),l=g(()=>{var u;return n((u=e.item)==null?void 0:u.name)}),s=g(()=>!e.collapse||!e.parent),c=g(()=>!!e.collapse&&!!e.parent),r=g(()=>[{[`${a}__parent`]:e.parent,[`${a}__children`]:!e.parent}]);function d(u){return Reflect.has(u,"children")&&!!u.children&&u.children.length>0}return{prefixCls:a,menuHasChildren:d,getShowMenu:o,getIcon:i,getI18nName:l,getShowSubTitle:s,getLevelClass:r,getIsCollapseParent:c}}});const Na={key:1,class:"mt-1 collapse-title"},Fa={key:1,class:"mt-2 collapse-title"};function za(e,n,a,o,i,l){const s=h("Icon"),c=h("SimpleMenuTag"),r=h("MenuItem"),d=h("_self"),u=h("SubMenu");return p(),b(W,null,[!e.menuHasChildren(e.item)&&e.getShowMenu?(p(),b(r,D({key:0,name:e.item.path},e.$props,{class:e.getLevelClass}),{title:O(()=>[f("span",{class:["ml-2",`${e.prefixCls}-sub-title`]},J(e.getI18nName),3),f(c,{item:e.item,collapseParent:e.getIsCollapseParent},null,8,["item","collapseParent"])]),default:O(()=>[e.getIcon?(p(),b(s,{key:0,icon:e.getIcon,size:16},null,8,["icon"])):L("",!0),e.collapsedShowTitle&&e.getIsCollapseParent?(p(),b("div",Na,J(e.getI18nName),1)):L("",!0)]),_:1},16,["name","class"])):L("",!0),e.menuHasChildren(e.item)&&e.getShowMenu?(p(),b(u,{key:1,name:e.item.path,class:[e.getLevelClass,e.theme],collapsedShowTitle:e.collapsedShowTitle},{title:O(()=>[e.getIcon?(p(),b(s,{key:0,icon:e.getIcon,size:16},null,8,["icon"])):L("",!0),e.collapsedShowTitle&&e.getIsCollapseParent?(p(),b("div",Fa,J(e.getI18nName),1)):L("",!0),ee(f("span",{class:["ml-2",`${e.prefixCls}-sub-title`]},J(e.getI18nName),3),[[pe,e.getShowSubTitle]]),f(c,{item:e.item,collapseParent:!!e.collapse&&!!e.parent},null,8,["item","collapseParent"])]),default:O(()=>[(p(!0),b(W,null,me(e.item.children||[],v=>(p(),b(d,D({key:v.path},e.$props,{item:v,parent:!1}),null,16,["item"]))),128))]),_:1},8,["name","class","collapsedShowTitle"])):L("",!0)],64)}et.render=za;function Ba(e,n,a,o,i){async function l(c){const r=!o.value;yn(()=>{const d=Ie(n.value);if((d==null?void 0:d.length)===0){e.activeSubMenuNames=[],e.openNames=[];return}const u=Le(d,c);t(a)?e.openNames=u:e.openNames=_n([...e.openNames,...u]),e.activeSubMenuNames=e.openNames},16,r)}const s=g(()=>t(i)?[]:e.openNames);return{setOpenKeys:l,getOpenKeys:s}}var tn=T({name:"SimpleMenu",components:{Menu:Yn,SimpleSubMenu:et},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},collapse:M.bool,mixSider:M.bool,theme:M.string,accordion:M.bool.def(!0),collapsedShowTitle:M.bool,beforeClickFn:{type:Function}},emits:["menuClick"],setup(e,{attrs:n,emit:a}){const o=I(""),i=I(!1),l=we({activeName:"",openNames:[],activeSubMenuNames:[]}),{currentRoute:s}=je(),{prefixCls:c}=A("simple-menu"),{items:r,accordion:d,mixSider:u,collapse:v}=_e(e),{setOpenKeys:m,getOpenKeys:y}=Ba(l,r,d,u,v),C=g(()=>de(de({},n),e));re(()=>e.collapse,_=>{_?l.openNames=[]:m(s.value.path)},{immediate:!0}),Oe(_=>{var $;_.name!==Ke&&(o.value=($=_.meta)==null?void 0:$.currentActiveMenu,S(_),t(o)&&(l.activeName=t(o),m(t(o))))});async function S(_){if(t(i)){i.value=!1;return}const $=(_||t(s)).path;l.activeName=$,m($)}async function w(_){const{beforeClickFn:$}=e;$&&Cn($)&&!await $(_)||(a("menuClick",_),i.value=!0,m(_),l.activeName=_)}return de({prefixCls:c,getBindValues:C,handleSelect:w,getOpenKeys:y},_e(l))}}),jo=`.vben-menu-dark.vben-menu-vertical .vben-simple-menu__parent {
  background-color: var(--sider-dark-bg-color);
}
.vben-menu-dark.vben-menu-vertical .vben-simple-menu__parent > .vben-menu-submenu-title {
  background-color: var(--sider-dark-bg-color);
}
.vben-menu-dark.vben-menu-vertical .vben-simple-menu__children, .vben-menu-dark.vben-menu-popup .vben-simple-menu__children {
  background-color: var(--sider-dark-lighten-1-bg-color);
}
.vben-menu-dark.vben-menu-vertical .vben-simple-menu__children > .vben-menu-submenu-title, .vben-menu-dark.vben-menu-popup .vben-simple-menu__children > .vben-menu-submenu-title {
  background-color: var(--sider-dark-lighten-1-bg-color);
}
.vben-menu .collapse-title {
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vben-simple-menu-sub-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.3s;
}
.vben-simple-menu-tag {
  position: absolute;
  top: calc(50% - 8px);
  right: 30px;
  display: inline-block;
  padding: 2px 3px;
  margin-right: 4px;
  font-size: 10px;
  line-height: 14px;
  color: #fff;
  border-radius: 2px;
}
.vben-simple-menu-tag--collapse {
  top: 6px !important;
  right: 2px;
}
.vben-simple-menu-tag--dot {
  top: calc(50% - 2px);
  width: 6px;
  height: 6px;
  padding: 0;
  border-radius: 50%;
}
.vben-simple-menu-tag--primary {
  background: #0960bd;
}
.vben-simple-menu-tag--error {
  background: #ED6F6F;
}
.vben-simple-menu-tag--success {
  background: #55D187;
}
.vben-simple-menu-tag--warn {
  background: #EFBD47;
}`;function Da(e,n,a,o,i,l){const s=h("SimpleSubMenu"),c=h("Menu");return p(),b(c,D(e.getBindValues,{onSelect:e.handleSelect,activeName:e.activeName,openNames:e.getOpenKeys,class:e.prefixCls,activeSubMenuNames:e.activeSubMenuNames}),{default:O(()=>[(p(!0),b(W,null,me(e.items,r=>(p(),b(s,{key:r.path,item:r,parent:!0,collapsedShowTitle:e.collapsedShowTitle,collapse:e.collapse},null,8,["item","collapsedShowTitle","collapse"]))),128))]),_:1},16,["onSelect","activeName","openNames","class","activeSubMenuNames"])}tn.render=Da;var an=T({name:"SimpleMenuTag",props:{item:{type:Object,default:{}},dot:M.bool,collapseParent:M.bool},setup(e){const{prefixCls:n}=A("simple-menu"),a=g(()=>{const{item:l}=e;if(!l)return!1;const{tag:s}=l;if(!s)return!1;const{dot:c,content:r}=s;return!(!c&&!r)}),o=g(()=>{if(!a.value)return"";const{item:l,collapseParent:s}=e,{tag:c}=l,{dot:r,content:d}=c;return r||s?"":d});return{getTagClass:g(()=>{const{item:l,collapseParent:s}=e,{tag:c={}}=l||{},{dot:r,type:d="error"}=c,u=`${n}-tag`;return[u,[`${u}--${d}`],{[`${u}--collapse`]:s,[`${u}--dot`]:r||e.dot}]}),getShowTag:a,getContent:o}}});function Wa(e,n,a,o,i,l){return e.getShowTag?(p(),b("span",{key:0,class:e.getTagClass},J(e.getContent),3)):L("",!0)}an.render=Wa;var ja=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:an});function Ka(e){const n=I([]),{currentRoute:a}=je(),{getIsMobile:o}=be(),{setMenuSetting:i,getIsHorizontal:l,getSplit:s}=j(),[c]=Lt(m,50),r=g(()=>t(e)!==G.LEFT&&!t(l)),d=g(()=>!t(s)||t(e)!==G.LEFT),u=g(()=>t(e)===G.TOP),v=g(()=>t(e)===G.NONE||!t(s));re([()=>t(a).path,()=>t(e)],async([C])=>{if(t(r)||t(o))return;const{meta:S}=t(a),w=S.currentActiveMenu;let _=await Pe(C);_||(_=await Pe(w)),_&&c(_)},{immediate:!0}),re([()=>xn.getLastBuildMenuTimeState,()=>xn.getBackMenuListState],()=>{y()},{immediate:!0}),re([()=>s.value],()=>{t(r)||y()});async function m(C){if(t(d)||t(o))return;const S=await Ge(C);if(!S||!S.length){i({hidden:!0}),n.value=[];return}i({hidden:!1}),n.value=S}async function y(){if(t(v)||t(o)){n.value=await Ot();return}if(t(u)){const C=await In();n.value=C;return}}return{menusRef:n}}var nt=T({name:"LayoutMenu",props:{theme:M.oneOf(["light","dark"]),splitType:{type:Number,default:G.NONE},isHorizontal:M.bool,menuMode:{type:[String],default:""}},setup(e){const n=qe(),{getMenuMode:a,getMenuType:o,getMenuTheme:i,getCollapsed:l,getCollapsedShowTitle:s,getAccordion:c,getIsHorizontal:r,getIsSidebarType:d}=j(),{getShowLogo:u}=He(),{prefixCls:v}=A("layout-menu"),{menusRef:m}=Ka(Pt(e,"splitType")),{getIsMobile:y}=be(),C=g(()=>t(y)?se.INLINE:e.menuMode||t(a)),S=g(()=>e.theme||t(i)),w=g(()=>t(u)&&t(d)),_=g(()=>!t(r)&&(t(d)||e.splitType===G.LEFT||e.splitType===G.NONE)),$=g(()=>({height:`calc(100% - ${t(w)?"48px":"0px"})`})),x=g(()=>[`${v}-logo`,t(S),{[`${v}--mobile`]:t(y)}]);function F(E){n(E)}async function z(E){return Et(E)?(Ht(E),!1):!0}function k(){return!t(w)&&!t(y)?null:f(Ye,{showTitle:!t(l),class:t(x),theme:t(S)},null)}function P(){const E=t(m);return!E||!E.length?null:e.isHorizontal?f(Vn,{beforeClickFn:z,isHorizontal:e.isHorizontal,type:t(o),collapsedShowTitle:t(s),showLogo:t(w),mode:t(C),theme:t(S),items:E,accordion:t(c),onMenuClick:F},null):f(tn,{beforeClickFn:z,items:E,theme:t(S),accordion:t(c),collapse:t(l),collapsedShowTitle:t(s),onMenuClick:F},null)}return()=>f(W,null,[k(),t(_)?f(Ln,{style:t($)},{default:()=>P()}):P()])}}),Ko=`.vben-layout-menu-logo {
  height: 48px;
  padding: 10px 4px 10px 10px;
}
.vben-layout-menu-logo img {
  width: 32px;
  height: 32px;
}
.vben-layout-menu--mobile .vben-app-logo__title {
  opacity: 1;
}`,on=T({name:"HeaderTrigger",components:{MenuUnfoldOutlined:en,MenuFoldOutlined:Je},props:{theme:M.oneOf(["light","dark"])},setup(){const{getCollapsed:e,toggleCollapsed:n}=j(),{prefixCls:a}=A("layout-header-trigger");return{getCollapsed:e,toggleCollapsed:n,prefixCls:a}}});function Va(e,n,a,o,i,l){const s=h("MenuUnfoldOutlined"),c=h("MenuFoldOutlined");return p(),b("span",{class:[e.prefixCls,e.theme],onClick:n[1]||(n[1]=(...r)=>e.toggleCollapsed&&e.toggleCollapsed(...r))},[e.getCollapsed?(p(),b(s,{key:0})):(p(),b(c,{key:1}))],2)}on.render=Va;var rn=T({name:"LayoutTrigger",components:{SiderTrigger:ne(()=>te(()=>import("./SiderTrigger.6195811d.js"),["/lamp-web-plus/assets/SiderTrigger.6195811d.js","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js"])),HeaderTrigger:on},props:{sider:M.bool.def(!0),theme:M.oneOf(["light","dark"])}});function Ua(e,n,a,o,i,l){const s=h("SiderTrigger"),c=h("HeaderTrigger");return e.sider?(p(),b(s,{key:0})):(p(),b(c,{key:1,theme:e.theme},null,8,["theme"]))}rn.render=Ua;var tt=T({name:"FullScreen",components:{FullscreenExitOutlined:Zt,FullscreenOutlined:Jt,Tooltip:Ue},setup(){const{t:e}=ce(),{toggleFullscreen:n,isFullscreenRef:a}=Qt();return{getTitle:g(()=>t(a)?e("layout.header.tooltipExitFull"):e("layout.header.tooltipEntryFull")),isFullscreen:a,toggleFullscreen:n}}});function Ga(e,n,a,o,i,l){const s=h("FullscreenOutlined"),c=h("FullscreenExitOutlined"),r=h("Tooltip");return p(),b(r,{title:e.getTitle,placement:"bottom",mouseEnterDelay:.5},{default:O(()=>[f("span",{onClick:n[1]||(n[1]=(...d)=>e.toggleFullscreen&&e.toggleFullscreen(...d))},[e.isFullscreen?(p(),b(c,{key:1})):(p(),b(s,{key:0}))])]),_:1},8,["title","mouseEnterDelay"])}tt.render=Ga;const Ya=ne(()=>te(()=>import("./index.c1c0447f.js"),["/lamp-web-plus/assets/index.c1c0447f.js","/lamp-web-plus/assets/index.97fa012b.css","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/siteSetting.31110d56.js","/lamp-web-plus/assets/useModal.131645a5.js","/lamp-web-plus/assets/useModal.b1a1b797.css","/lamp-web-plus/assets/useWindowSizeFn.4268e9dd.js","/lamp-web-plus/assets/FullscreenOutlined.d52a1fbe.js","/lamp-web-plus/assets/index.814a8df7.js","/lamp-web-plus/assets/useBreakpoint.a9fc3198.js","/lamp-web-plus/assets/responsiveObserve.43c11602.js","/lamp-web-plus/assets/useSize.6627aa05.js"]),{loading:!0}),qa=ne(()=>te(()=>import("./Breadcrumb.6d44093e.js"),["/lamp-web-plus/assets/Breadcrumb.6d44093e.js","/lamp-web-plus/assets/Breadcrumb.0ed653b1.css","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/index.e2c95991.js"])),Xa=ne(()=>te(()=>import("./index.b5efc893.js"),["/lamp-web-plus/assets/index.b5efc893.js","/lamp-web-plus/assets/index.9ec975f4.css","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/index.814a8df7.js","/lamp-web-plus/assets/useBreakpoint.a9fc3198.js","/lamp-web-plus/assets/responsiveObserve.43c11602.js","/lamp-web-plus/assets/useSize.6627aa05.js","/lamp-web-plus/assets/index.c860e084.js","/lamp-web-plus/assets/Col.102f0df6.js","/lamp-web-plus/assets/canUseDom.0bf35682.js","/lamp-web-plus/assets/index.c4d8ae58.js","/lamp-web-plus/assets/index.08635ac9.js","/lamp-web-plus/assets/UpOutlined.a2803449.js","/lamp-web-plus/assets/PlusOutlined.3cbe2bbe.js","/lamp-web-plus/assets/index.b912ae44.js","/lamp-web-plus/assets/isNumeric.2bec345d.js"])),Qa=ne(()=>te(()=>import("./ErrorAction.1b888d00.js"),["/lamp-web-plus/assets/ErrorAction.1b888d00.js","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/index.b912ae44.js","/lamp-web-plus/assets/isNumeric.2bec345d.js"]));var sn=T({name:"LayoutHeader",components:{Header:N.Header,AppLogo:Ye,LayoutTrigger:rn,LayoutBreadcrumb:qa,LayoutMenu:nt,UserDropDown:Ya,AppLocalePicker:Rt,FullScreen:tt,Notify:Xa,AppSearch:At,ErrorAction:Qa,SettingDrawer:ne(()=>te(()=>import("./index.3dfe553a.js").then(function(e){return e.i}),["/lamp-web-plus/assets/index.3dfe553a.js","/lamp-web-plus/assets/useDrawer.78890a21.js","/lamp-web-plus/assets/useDrawer.25440082.css","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/ArrowLeftOutlined.62657f64.js","/lamp-web-plus/assets/index.05d758e3.js","/lamp-web-plus/assets/index.8e7c33d5.js"]),{loading:!0})},props:{fixed:M.bool},setup(e){const{prefixCls:n}=A("layout-header"),{getShowTopMenu:a,getShowHeaderTrigger:o,getSplit:i,getIsMixMode:l,getMenuWidth:s,getIsMixSidebar:c}=j(),{getUseErrorHandle:r,getShowSettingButton:d,getSettingButtonPosition:u}=He(),{getHeaderTheme:v,getUseLockPage:m,getShowFullScreen:y,getShowNotice:C,getShowContent:S,getShowBread:w,getShowHeaderLogo:_,getShowHeader:$}=Re(),{getShowLocalePicker:x}=Nt(),{getIsMobile:F}=be(),z=g(()=>{const V=t(v);return[n,{[`${n}--fixed`]:e.fixed,[`${n}--mobile`]:t(F),[`${n}--${V}`]:V}]}),k=g(()=>{if(!t(d))return!1;const V=t(u);return V===On.AUTO?t($):V===On.HEADER}),P=g(()=>!t(l)||t(F)?{}:{width:`${t(s)<180?180:t(s)}px`}),E=g(()=>t(i)?G.TOP:G.NONE),ae=g(()=>t(i)?se.HORIZONTAL:null);return{prefixCls:n,getHeaderClass:z,getShowHeaderLogo:_,getHeaderTheme:v,getShowHeaderTrigger:o,getIsMobile:F,getShowBread:w,getShowContent:S,getSplitType:E,getSplit:i,getMenuMode:ae,getShowTopMenu:a,getShowLocalePicker:x,getShowFullScreen:y,getShowNotice:C,getUseLockPage:m,getUseErrorHandle:r,getLogoWidth:P,getIsMixSidebar:c,getShowSettingButton:d,getShowSetting:k}}}),Vo=`.vben-layout-header {
  display: flex;
  height: 48px;
  padding: 0;
  margin-left: -1px;
  line-height: 48px;
  color: #fff;
  background: #fff;
  align-items: center;
  justify-content: space-between;
}
.vben-layout-header--mobile .vben-layout-breadcrumb, .vben-layout-header--mobile .error-action, .vben-layout-header--mobile .notify-item, .vben-layout-header--mobile .fullscreen-item {
  display: none;
}
.vben-layout-header--mobile .vben-app-logo {
  min-width: unset;
  padding-right: 0;
}
.vben-layout-header--mobile .vben-app-logo__title {
  display: none;
}
.vben-layout-header--mobile .vben-layout-header-trigger {
  padding: 0 4px 0 8px !important;
}
.vben-layout-header--mobile .vben-layout-header-action {
  padding-right: 4px;
}
.vben-layout-header--fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
}
.vben-layout-header-logo {
  height: 48px;
  min-width: 192px;
  padding: 0 10px;
  font-size: 14px;
}
.vben-layout-header-logo img {
  width: 32px;
  height: 32px;
  margin-right: 2px;
}
.vben-layout-header-left {
  display: flex;
  height: 100%;
  align-items: center;
}
.vben-layout-header-left .vben-layout-header-trigger {
  display: flex;
  height: 100%;
  padding: 1px 10px 0 16px;
  cursor: pointer;
  align-items: center;
}
.vben-layout-header-left .vben-layout-header-trigger .anticon {
  font-size: 16px;
}
.vben-layout-header-left .vben-layout-header-trigger.light:hover {
  background: #f6f6f6;
}
.vben-layout-header-left .vben-layout-header-trigger.light svg {
  fill: #000;
}
.vben-layout-header-left .vben-layout-header-trigger.dark:hover {
  background: var(--header-bg-hover-color);
}
.vben-layout-header-menu {
  height: 100%;
  min-width: 0;
  flex: 1;
  align-items: center;
}
.vben-layout-header-action {
  display: flex;
  min-width: 180px;
  align-items: center;
}
.vben-layout-header-action__item {
  display: flex !important;
  height: 48px;
  padding: 0 2px;
  font-size: 1.2em;
  cursor: pointer;
  align-items: center;
}
.vben-layout-header-action__item .ant-badge {
  height: 48px;
  line-height: 48px;
}
.vben-layout-header-action__item .ant-badge-dot {
  top: 10px;
  right: 2px;
}
.vben-layout-header-action span[role='img'] {
  padding: 0 8px;
}
.vben-layout-header--light {
  background: #fff;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
}
.vben-layout-header--light .vben-layout-header-logo {
  color: rgba(0, 0, 0, 0.85);
}
.vben-layout-header--light .vben-layout-header-logo:hover {
  background: #f6f6f6;
}
.vben-layout-header--light .vben-layout-header-action__item {
  color: rgba(0, 0, 0, 0.85);
}
.vben-layout-header--light .vben-layout-header-action__item .app-iconify {
  padding: 0 10px;
  font-size: 16px !important;
}
.vben-layout-header--light .vben-layout-header-action__item:hover {
  background: #f6f6f6;
}
.vben-layout-header--light .vben-layout-header-action-icon, .vben-layout-header--light .vben-layout-header-action span[role='img'] {
  color: rgba(0, 0, 0, 0.85);
}
.vben-layout-header--dark {
  background: var(--header-bg-color);
}
.vben-layout-header--dark .vben-layout-header-logo:hover {
  background: var(--header-bg-hover-color);
}
.vben-layout-header--dark .vben-layout-header-action__item:hover {
  background: var(--header-bg-hover-color);
}`;function Za(e,n,a,o,i,l){const s=h("AppLogo"),c=h("LayoutTrigger"),r=h("LayoutBreadcrumb"),d=h("LayoutMenu"),u=h("AppSearch"),v=h("ErrorAction"),m=h("Notify"),y=h("FullScreen"),C=h("AppLocalePicker"),S=h("UserDropDown"),w=h("SettingDrawer"),_=h("Header");return p(),b(_,{class:e.getHeaderClass},{default:O(()=>[f("div",{class:`${e.prefixCls}-left`},[e.getShowHeaderLogo||e.getIsMobile?(p(),b(s,{key:0,class:`${e.prefixCls}-logo`,theme:e.getHeaderTheme,style:e.getLogoWidth},null,8,["class","theme","style"])):L("",!0),e.getShowContent&&e.getShowHeaderTrigger&&!e.getSplit&&!e.getIsMixSidebar||e.getIsMobile?(p(),b(c,{key:1,theme:e.getHeaderTheme,sider:!1},null,8,["theme"])):L("",!0),e.getShowContent&&e.getShowBread?(p(),b(r,{key:2,theme:e.getHeaderTheme},null,8,["theme"])):L("",!0)],2),e.getShowTopMenu&&!e.getIsMobile?(p(),b("div",{key:0,class:`${e.prefixCls}-menu`},[f(d,{isHorizontal:!0,theme:e.getHeaderTheme,splitType:e.getSplitType,menuMode:e.getMenuMode},null,8,["theme","splitType","menuMode"])],2)):L("",!0),f("div",{class:`${e.prefixCls}-action`},[f(u,{class:`${e.prefixCls}-action__item `},null,8,["class"]),e.getUseErrorHandle?(p(),b(v,{key:0,class:`${e.prefixCls}-action__item error-action`},null,8,["class"])):L("",!0),e.getShowNotice?(p(),b(m,{key:1,class:`${e.prefixCls}-action__item notify-item`},null,8,["class"])):L("",!0),e.getShowFullScreen?(p(),b(y,{key:2,class:`${e.prefixCls}-action__item fullscreen-item`},null,8,["class"])):L("",!0),e.getShowLocalePicker?(p(),b(C,{key:3,reload:!0,showText:!1,class:`${e.prefixCls}-action__item`},null,8,["class"])):L("",!0),f(S,{theme:e.getHeaderTheme},null,8,["theme"]),e.getShowSetting?(p(),b(w,{key:4,class:`${e.prefixCls}-action__item`},null,8,["class"])):L("",!0)],2)]),_:1},8,["class"])}sn.render=Za;function Ja(){const{currentRoute:e}=Ce,{getShowMultipleTab:n}=Ae(),a=g(()=>i(Ie(Ce.getRoutes()))||[]),o=g(()=>Y.getTabsState.reduce((c,r)=>(r.meta&&Reflect.has(r.meta,"frameSrc")&&c.push(r.name),c),[]));function i(c){let r=[];for(const d of c){const{meta:{frameSrc:u}={},children:v}=d;u&&r.push(d),v&&v.length&&r.push(...i(v))}return r=ta(r,"name"),r}function l(c){return c.name===t(e).name}function s(c){return t(n)?t(o).includes(c):Ce.currentRoute.value.name===c}return{hasRenderFrame:s,getFramePages:a,showIframe:l,getAllFramePages:i}}var at=T({name:"FrameLayout",components:{FramePage:na},setup(){const{getFramePages:e,hasRenderFrame:n,showIframe:a}=Ja(),o=g(()=>t(e).length>0);return{getFramePages:e,hasRenderFrame:n,showIframe:a,showFrame:o}}});const eo={key:0};function no(e,n,a,o,i,l){const s=h("FramePage");return e.showFrame?(p(),b("div",eo,[(p(!0),b(W,null,me(e.getFramePages,c=>(p(),b(W,{key:c.path},[c.meta.frameSrc&&e.hasRenderFrame(c.name)?ee((p(),b(s,{key:0,frameSrc:c.meta.frameSrc},null,8,["frameSrc"])),[[pe,e.showIframe(c)]]):L("",!0)],64))),128))])):L("",!0)}at.render=no;var ot=T({name:"PageLayout",components:{FrameLayout:at},setup(){const{getCaches:e}=Ft(!0),{getShowMultipleTab:n}=Ae(),{getOpenKeepAlive:a,getCanEmbedIFramePage:o}=He(),{getBasicTransition:i,getEnableTransition:l}=Pn(),s=g(()=>t(a)&&t(n));return{getTransitionName:zt,openCache:s,getEnableTransition:l,getBasicTransition:i,getCaches:e,getCanEmbedIFramePage:o,getKey:Bt}}});function to(e,n,a,o,i,l){const s=h("RouterView"),c=h("FrameLayout");return p(),b("div",null,[f(s,null,{default:O(({Component:r,route:d})=>[f(Tn,{name:e.getTransitionName({route:d,openCache:e.openCache,enableTransition:e.getEnableTransition,cacheTabs:e.getCaches,def:e.getBasicTransition}),mode:"out-in",appear:""},{default:O(()=>[e.openCache?(p(),b(Dt,{key:0,include:e.getCaches},[(p(),b(En(r),e.getKey(r,d),null,16))],1032,["include"])):(p(),b(En(r),D({key:1},e.getKey(r,d)),null,16))]),_:2},1032,["name"])]),_:1}),e.getCanEmbedIFramePage?(p(),b(c,{key:0})):L("",!0)])}ot.render=to;const it=I(0);function ao(){const e=I(window.innerHeight),n=I(window.innerHeight),a=g(()=>t(e)-t(it)||0);oa(()=>{e.value=window.innerHeight},100,{immediate:!0});async function o(i){n.value=i}aa({contentHeight:a,setPageHeight:o,pageHeight:n})}var rt=T({name:"LayoutContent",components:{PageLayout:ot},setup(){const{prefixCls:e}=A("layout-content"),{getOpenPageLoading:n}=Pn(),{getLayoutContentMode:a,getPageLoading:o}=He();return ao(),{prefixCls:e,getOpenPageLoading:n,getLayoutContentMode:a,getPageLoading:o}}}),Uo=`.vben-layout-content {
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
}
.vben-layout-content.fixed {
  width: 1200px;
  margin: 0 auto;
}
.vben-layout-content-loading {
  position: absolute;
  top: 200px;
  z-index: 10000;
}`;function oo(e,n,a,o,i,l){const s=h("PageLayout"),c=Hn("loading");return ee((p(),b("div",{class:[e.prefixCls,e.getLayoutContentMode]},[f(s)],2)),[[c,e.getOpenPageLoading&&e.getPageLoading]])}rt.render=oo;function io(){const e=I(!1),n=I(!1),a=I(!0),{setMenuSetting:o,getCollapsed:i,getMiniWidthNumber:l}=j(),s=g(()=>t(n)?0:t(l));function c(d){e.value?(a.value=d,o({collapsed:d})):!t(i)&&o({collapsed:d}),e.value=!0}function r(d){n.value=d}return{getCollapsedWidth:s,onCollapseChange:c,onBreakpointChange:r}}function ro(e){const{getTrigger:n,getSplit:a}=j(),o=g(()=>{const l=t(n);return l!==Rn.NONE&&!t(e)&&(l===Rn.FOOTER||t(a))});return{getTriggerAttr:g(()=>t(o)?{}:{trigger:null}),getShowTrigger:o}}function st(e,n,a=!1){const{getMiniWidthNumber:o,getCollapsed:i,setMenuSetting:l}=j();xe(()=>{Ee(()=>{const[u]=Wt(d,80);u()})});function s(u){var m;const v=t(u);return v?Reflect.has(v,"$el")?(m=t(u))==null?void 0:m.$el:t(u):null}function c(u,v,m){document.onmousemove=function(y){let C=u.left+(y.clientX-m);y=y||window.event;const S=800,w=t(o);return C<0&&(C=0),C>S&&(C=S),C<w&&(C=w),u.style.left=v.style.width=C+"px",!1}}function r(u){const v=s(e);document.onmouseup=function(){var y;document.onmousemove=null,document.onmouseup=null,v.style.transition="width 0.2s";const m=parseInt(v.style.width);if(a)l({menuWidth:m});else{const C=t(o);t(i)?m>C&&l({collapsed:!1,menuWidth:m}):m>C+20?l({menuWidth:m}):l({collapsed:!0})}(y=u.releaseCapture)==null||y.call(u)}}function d(){const u=s(n);if(!u)return;const v=s(e);!v||(u.onmousedown=m=>{var C;v.style.transition="unset";const y=m==null?void 0:m.clientX;return u.left=u.offsetLeft,c(u,v,y),r(u),(C=u.setCapture)==null||C.call(u),!1})}return{}}var ln=T({name:"DargBar",props:{mobile:Boolean},setup(e){const{getMiniWidthNumber:n,getCollapsed:a,getCanDrag:o}=j(),{prefixCls:i}=A("darg-bar"),l=g(()=>t(a)?{left:`${t(n)}px`}:{}),s=g(()=>[i,{[`${i}--hide`]:!t(o)||e.mobile}]);return{prefixCls:i,getDragBarStyle:l,getClass:s}}}),Go=`.vben-darg-bar[data-v-6bb6ed28] {
  position: absolute;
  top: 0;
  right: -2px;
  z-index: 200;
  width: 2px;
  height: 100%;
  cursor: col-resize;
  border-top: none;
  border-bottom: none;
}
.vben-darg-bar--hide[data-v-6bb6ed28] {
  display: none;
}
.vben-darg-bar[data-v-6bb6ed28]:hover {
  background: #0960bd;
  box-shadow: 0 0 4px 0 rgba(28, 36, 56, 0.15);
}`;const so=An(),lo=so((e,n,a,o,i,l)=>(p(),b("div",{class:e.getClass,style:e.getDragBarStyle},null,6)));ln.render=lo,ln.__scopeId="data-v-6bb6ed28";var lt=T({name:"LayoutSideBar",components:{Sider:N.Sider,LayoutMenu:nt,DragBar:ln,LayoutTrigger:rn},setup(){const e=I(null),n=I(null),{getCollapsed:a,getMenuWidth:o,getSplit:i,getMenuTheme:l,getRealWidth:s,getMenuHidden:c,getMenuFixed:r,getIsMixMode:d}=j(),{prefixCls:u}=A("layout-sideBar"),{getIsMobile:v}=be(),{getTriggerAttr:m,getShowTrigger:y}=ro(v);st(n,e);const{getCollapsedWidth:C,onBreakpointChange:S,onCollapseChange:w}=io(),_=g(()=>t(i)?se.INLINE:null),$=g(()=>t(i)?G.LEFT:G.NONE),x=g(()=>t(i)?!t(c):!0),F=g(()=>[u,{[`${u}--fixed`]:t(r),[`${u}--mix`]:t(d)&&!t(v)}]),z=g(()=>{const k=`${t(s)}px`;return{width:k,overflow:"hidden",flex:`0 0 ${k}`,maxWidth:k,minWidth:k,transition:"all 0.2s"}});return{prefixCls:u,sideRef:n,dragBarRef:e,getIsMobile:v,getHiddenDomStyle:z,getSiderClass:F,getTriggerAttr:m,getCollapsedWidth:C,getMenuFixed:r,showClassSideBarRef:x,getMenuWidth:o,getCollapsed:a,getMenuTheme:l,onBreakpointChange:S,getMode:_,getSplitType:$,onCollapseChange:w,getShowTrigger:y}}}),Yo=`.vben-layout-sideBar {
  z-index: 510;
}
.vben-layout-sideBar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}
.vben-layout-sideBar--mix {
  top: 48px;
  height: calc(100% - 48px);
}
.vben-layout-sideBar.ant-layout-sider-dark {
  background: var(--sider-dark-bg-color);
}
.vben-layout-sideBar.ant-layout-sider-dark .ant-layout-sider-trigger {
  color: #bfbfbf;
  background: rgba(255, 255, 255, 0.1);
}
.vben-layout-sideBar.ant-layout-sider-dark .ant-layout-sider-trigger:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}
.vben-layout-sideBar:not(.ant-layout-sider-dark) .ant-layout-sider-trigger {
  color: rgba(0, 0, 0, 0.85);
  border-top: 1px solid #ebeef5;
}
.vben-layout-sideBar .ant-layout-sider-zero-width-trigger {
  top: 40%;
  z-index: 10;
}
.vben-layout-sideBar .ant-layout-sider-trigger {
  height: 36px;
  line-height: 36px;
}`;function uo(e,n,a,o,i,l){const s=h("LayoutTrigger"),c=h("LayoutMenu"),r=h("DragBar"),d=h("Sider");return p(),b(W,null,[e.getMenuFixed&&!e.getIsMobile?ee((p(),b("div",{key:0,style:e.getHiddenDomStyle},null,4)),[[pe,e.showClassSideBarRef]]):L("",!0),ee(f(d,D({ref:"sideRef",breakpoint:"lg",collapsible:"",class:e.getSiderClass,width:e.getMenuWidth,collapsed:e.getIsMobile?!1:e.getCollapsed,collapsedWidth:e.getCollapsedWidth,theme:e.getMenuTheme,onCollapse:e.onCollapseChange,onBreakpoint:e.onBreakpointChange},e.getTriggerAttr),Nn({default:O(()=>[f(c,{theme:e.getMenuTheme,menuMode:e.getMode,splitType:e.getSplitType},null,8,["theme","menuMode","splitType"]),f(r,{ref:"dragBarRef"},null,512)]),_:2},[e.getShowTrigger?{name:"trigger",fn:O(()=>[f(s)])}:void 0]),1040,["class","width","collapsed","collapsedWidth","theme","onCollapse","onBreakpoint"]),[[pe,e.showClassSideBarRef]])],64)}lt.render=uo;var ut=T({name:"LayoutMixSider",components:{ScrollContainer:Ln,AppLogo:Ye,SimpleMenu:tn,Icon:ye,Trigger:on,SimpleMenuTag:an},directives:{clickOutside:jt},setup(){let e=I([]);const n=I(""),a=I([]),o=I(!1),i=I(null),l=I(null),s=I(null),{prefixCls:c}=A("layout-mix-sider"),r=qe(),{t:d}=ce(),{getMenuWidth:u,getCanDrag:v,getCloseMixSidebarOnChange:m,getMenuTheme:y,getMixSideTrigger:C,getRealWidth:S,getMixSideFixed:w,mixSideHasChildren:_,setMenuSetting:$,getIsMixSidebar:x,getCollapsed:F}=j(),{title:z}=Kt();st(l,i,!0);const k=g(()=>({width:t(o)?`${t(u)}px`:0,left:`${t(E)}px`})),P=g(()=>{_.value=t(a).length>0;const R=t(w)&&t(_);return R&&(o.value=!0),R}),E=g(()=>t(F)?Vt:Ut),ae=g(()=>{const R=t(P)?t(S):0,ve=`${t(E)+R}px`;return oe(ve)}),V=g(()=>{const R=`${t(E)}px`;return oe(R)}),le=g(()=>t(w)?{}:{onMouseleave:()=>{Z()}}),q=g(()=>t(v));xe(async()=>{e.value=await In()}),Oe(R=>{s.value=R,ue(!0),t(m)&&Z()});function oe(R){return{width:R,maxWidth:R,minWidth:R,flex:`0 0 ${R}`}}async function ie(R,ve=!1){const $e=await Ge(R);if(t(n)===R?(ve||(t(o)?Z():o.value=!0),t(o)||ue()):(o.value=!0,n.value=R),!$e||$e.length===0){r(R),a.value=[],Z();return}a.value=$e}async function ue(R=!1){var cn;const ve=(cn=s.value)==null?void 0:cn.path;if(!ve)return;const $e=await Pe(ve);if(n.value=$e,t(x)){const Fe=t(e).find(Me=>Me.path===t(n)),mn=Fe==null?void 0:Fe.path;if(mn){const Me=await Ge(mn);R&&(a.value=Me,t(w)&&(o.value=Me.length>0)),Me.length===0&&(a.value=[])}}}function ge(R){r(R)}function H(){ue(!0),Z()}function X(R){return t(C)==="hover"?{onMouseenter:()=>ie(R.path,!0)}:{onClick:()=>ie(R.path)}}function U(){$({mixSideFixed:!t(P)})}function Z(){t(P)||(o.value=!1)}return{t:d,prefixCls:c,menuModules:e,hanldeModuleClick:ie,activePath:n,chilrenMenus:a,getShowDragBar:q,handleMenuClick:ge,getMenuStyle:k,handleClickOutside:H,sideRef:l,dragBarRef:i,title:z,openMenu:o,getMenuTheme:y,getItemEvents:X,getMenuEvents:le,getDomStyle:ae,handleFixedMenu:U,getMixSideFixed:w,getWrapStyle:V,getCollapsed:F}}}),qo=`.vben-layout-mix-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 550;
  height: 100%;
  overflow: hidden;
  background: var(--sider-dark-bg-color);
  transition: all 0.2s ease 0s;
}
.vben-layout-mix-sider-dom {
  height: 100%;
  overflow: hidden;
  transition: all 0.2s ease 0s;
}
.vben-layout-mix-sider-logo {
  display: flex;
  height: 48px;
  padding-left: 0 !important;
  justify-content: center;
}
.vben-layout-mix-sider-logo img {
  width: 32px;
  height: 32px;
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-logo {
  border-bottom: 1px solid #eeeeee;
}
.vben-layout-mix-sider.light.open > .scrollbar {
  border-right: 1px solid #eeeeee;
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-module__item {
  font-weight: normal;
  color: rgba(0, 0, 0, 0.65);
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-module__item--active {
  color: #0960bd;
  background: unset;
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-menu-list__content {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-menu-list__title .pushpin {
  color: rgba(0, 0, 0, 0.35);
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-menu-list__title .pushpin:hover {
  color: rgba(0, 0, 0, 0.85);
}
.vben-layout-mix-sider.dark.open > .scrollbar {
  border-right: 1px solid var(--sider-dark-lighten-1-bg-color);
}
.vben-layout-mix-sider.dark .vben-layout-mix-sider-menu-list {
  background: var(--sider-dark-bg-color);
}
.vben-layout-mix-sider.dark .vben-layout-mix-sider-menu-list__title {
  color: #fff;
  border-bottom: none;
  border-bottom: 1px solid var(--sider-dark-lighten-1-bg-color);
}
.vben-layout-mix-sider > .scrollbar {
  height: calc(100% - 48px - 38px);
}
.vben-layout-mix-sider.mini .vben-layout-mix-sider-module__name {
  display: none;
}
.vben-layout-mix-sider.mini .vben-layout-mix-sider-module__icon {
  margin-bottom: 0;
}
.vben-layout-mix-sider-module {
  position: relative;
  padding-top: 1px;
}
.vben-layout-mix-sider-module__item {
  position: relative;
  padding: 12px 0;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.vben-layout-mix-sider-module__item:hover {
  color: #fff;
}
.vben-layout-mix-sider-module__item--active {
  font-weight: 700;
  color: #fff;
  background: var(--sider-dark-darken-bg-color);
}
.vben-layout-mix-sider-module__item--active::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #0960bd;
  content: '';
}
.vben-layout-mix-sider-module__icon {
  margin-bottom: 8px;
  font-size: 24px;
  transition: all 0.2s;
}
.vben-layout-mix-sider-module__name {
  margin-bottom: 0;
  font-size: 12px;
  transition: all 0.2s;
}
.vben-layout-mix-sider-trigger {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 6px;
  padding-left: 12px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  background: var(--sider-dark-bg-color);
}
.vben-layout-mix-sider.light .vben-layout-mix-sider-trigger {
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
}
.vben-layout-mix-sider-menu-list {
  position: fixed;
  top: 0;
  width: 0;
  width: 200px;
  height: calc(100%);
  background: #fff;
  transition: all 0.2s;
}
.vben-layout-mix-sider-menu-list__title {
  display: flex;
  height: 48px;
  font-size: 18px;
  color: #0960bd;
  border-bottom: 1px solid #eeeeee;
  opacity: 0;
  transition: unset;
  align-items: center;
  justify-content: space-between;
}
.vben-layout-mix-sider-menu-list__title.show {
  min-width: 130px;
  opacity: 1;
  transition: all 0.5s ease;
}
.vben-layout-mix-sider-menu-list__title .pushpin {
  margin-right: 6px;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
}
.vben-layout-mix-sider-menu-list__title .pushpin:hover {
  color: #fff;
}
.vben-layout-mix-sider-menu-list__content {
  height: calc(100% - 48px) !important;
}
.vben-layout-mix-sider-menu-list__content .scrollbar__wrap {
  height: 100%;
  overflow-x: hidden;
}
.vben-layout-mix-sider-menu-list__content .scrollbar__bar.is-horizontal {
  display: none;
}
.vben-layout-mix-sider-menu-list__content .ant-menu {
  height: 100%;
}
.vben-layout-mix-sider-menu-list__content .ant-menu-inline, .vben-layout-mix-sider-menu-list__content .ant-menu-vertical, .vben-layout-mix-sider-menu-list__content .ant-menu-vertical-left {
  border-right: 1px solid transparent;
}
.vben-layout-mix-sider-drag-bar {
  position: absolute;
  top: 50px;
  right: -1px;
  width: 1px;
  height: calc(100% - 50px);
  cursor: ew-resize;
  background: #f8f8f9;
  border-top: none;
  border-bottom: none;
  box-shadow: 0 0 4px 0 rgba(28, 36, 56, 0.15);
}`;const co={class:"text"};function mo(e,n,a,o,i,l){const s=h("AppLogo"),c=h("Trigger"),r=h("SimpleMenuTag"),d=h("Icon"),u=h("ScrollContainer"),v=h("SimpleMenu"),m=Hn("click-outside");return p(),b(W,null,[f("div",{class:`${e.prefixCls}-dom`,style:e.getDomStyle},null,6),ee(f("div",D({style:e.getWrapStyle,class:[e.prefixCls,e.getMenuTheme,{open:e.openMenu,mini:e.getCollapsed}]},e.getMenuEvents),[f(s,{showTitle:!1,class:`${e.prefixCls}-logo`},null,8,["class"]),f(c,{class:`${e.prefixCls}-trigger`},null,8,["class"]),f(u,null,{default:O(()=>[f("ul",{class:`${e.prefixCls}-module`},[(p(!0),b(W,null,me(e.menuModules,y=>(p(),b("li",D({class:[`${e.prefixCls}-module__item `,{[`${e.prefixCls}-module__item--active`]:y.path===e.activePath}]},e.getItemEvents(y),{key:y.path}),[f(r,{item:y,collapseParent:"",dot:""},null,8,["item"]),f(d,{class:`${e.prefixCls}-module__icon`,size:e.getCollapsed?16:20,icon:y.icon||y.meta&&y.meta.icon},null,8,["class","size","icon"]),f("p",{class:`${e.prefixCls}-module__name`},J(e.t(y.name)),3)],16))),128))],2)]),_:1}),f("div",{class:`${e.prefixCls}-menu-list`,ref:"sideRef",style:e.getMenuStyle},[ee(f("div",{class:[`${e.prefixCls}-menu-list__title`,{show:e.openMenu}]},[f("span",co,J(e.title),1),f(d,{size:16,icon:e.getMixSideFixed?"ri:pushpin-2-fill":"ri:pushpin-2-line",class:"pushpin",onClick:e.handleFixedMenu},null,8,["icon","onClick"])],2),[[pe,e.openMenu]]),f(u,{class:`${e.prefixCls}-menu-list__content`},{default:O(()=>[f(v,{items:e.chilrenMenus,theme:e.getMenuTheme,mixSider:"",onMenuClick:e.handleMenuClick},null,8,["items","theme","onMenuClick"])]),_:1},8,["class"]),ee(f("div",{class:`${e.prefixCls}-drag-bar`,ref:"dragBarRef"},null,2),[[pe,e.getShowDragBar&&e.openMenu]])],6)],16),[[m,e.handleClickOutside]])],64)}ut.render=mo;var dt=T({name:"SiderWrapper",components:{Sider:lt,Drawer:ia,MixSider:ut},setup(){const{prefixCls:e}=A("layout-sider-wrapper"),{getIsMobile:n}=be(),{setMenuSetting:a,getCollapsed:o,getMenuWidth:i,getIsMixSidebar:l}=j();function s(){a({collapsed:!0})}return{prefixCls:e,getIsMobile:n,getCollapsed:o,handleClose:s,getMenuWidth:i,getIsMixSidebar:l}}}),Xo=`.vben-layout-sider-wrapper .ant-drawer-body {
  height: 100vh;
  padding: 0;
}
.vben-layout-sider-wrapper .ant-drawer-header-no-title {
  display: none;
}`;function po(e,n,a,o,i,l){const s=h("Sider"),c=h("Drawer"),r=h("MixSider");return e.getIsMobile?(p(),b(c,{key:0,placement:"left",class:e.prefixCls,width:e.getMenuWidth,getContainer:null,visible:!e.getCollapsed,onClose:e.handleClose},{default:O(()=>[f(s)]),_:1},8,["class","width","visible","onClose"])):e.getIsMixSidebar?(p(),b(r,{key:1})):(p(),b(s,{key:2}))}dt.render=po;var ke;(function(e){e[e.TAB_TYPE=0]="TAB_TYPE",e[e.EXTRA_TYPE=1]="EXTRA_TYPE"})(ke||(ke={}));var K;(function(e){e[e.REFRESH_PAGE=0]="REFRESH_PAGE",e[e.CLOSE_CURRENT=1]="CLOSE_CURRENT",e[e.CLOSE_LEFT=2]="CLOSE_LEFT",e[e.CLOSE_RIGHT=3]="CLOSE_RIGHT",e[e.CLOSE_OTHER=4]="CLOSE_OTHER",e[e.CLOSE_ALL=5]="CLOSE_ALL",e[e.SCALE=6]="SCALE"})(K||(K={}));const{t:Se}=ce();function bo(e){const n=we({current:null,currentIndex:0}),{currentRoute:a}=Ce,o=g(()=>e.type===ke.TAB_TYPE),i=g(()=>t(o)?e.tabItem:t(a)),l=g(()=>{if(!t(i))return;const{meta:d}=t(i),{path:u}=t(a),v=n.current,m=n.currentIndex,y=v?v.path!==u:!0,C=m===0,S=Y.getTabsState.length===1,w=m===Y.getTabsState.length-1&&Y.getLastDragEndIndexState>=0;return[{icon:"ion:reload-sharp",event:K.REFRESH_PAGE,text:Se("layout.multipleTab.reload"),disabled:y},{icon:"clarity:close-line",event:K.CLOSE_CURRENT,text:Se("layout.multipleTab.close"),disabled:(d==null?void 0:d.affix)||S,divider:!0},{icon:"line-md:arrow-close-left",event:K.CLOSE_LEFT,text:Se("layout.multipleTab.closeLeft"),disabled:C,divider:!1},{icon:"line-md:arrow-close-right",event:K.CLOSE_RIGHT,text:Se("layout.multipleTab.closeRight"),disabled:w,divider:!0},{icon:"dashicons:align-center",event:K.CLOSE_OTHER,text:Se("layout.multipleTab.closeOther"),disabled:S},{icon:"clarity:minus-line",event:K.CLOSE_ALL,text:Se("layout.multipleTab.closeAll"),disabled:S}]}),s=g(()=>t(o)?["contextmenu"]:["click"]);function c(d){return u=>{if(!d)return;u==null||u.preventDefault();const v=Y.getTabsState.findIndex(m=>m.path===d.path);n.current=d,n.currentIndex=v}}function r(d){const{refreshPage:u,closeAll:v,close:m,closeLeft:y,closeOther:C,closeRight:S}=Fn(),{event:w}=d;switch(w){case K.SCALE:scaleScreen();break;case K.REFRESH_PAGE:u();break;case K.CLOSE_CURRENT:m(e.tabItem);break;case K.CLOSE_LEFT:y();break;case K.CLOSE_RIGHT:S();break;case K.CLOSE_OTHER:C();break;case K.CLOSE_ALL:v();break}}return{getDropMenuList:l,handleMenuEvent:r,handleContextMenu:c,getTrigger:s,isTabs:o}}var un=T({name:"TabContent",components:{Dropdown:Gt,Icon:ye},props:{tabItem:{type:Object,default:null},type:{type:Number,default:ke.TAB_TYPE}},setup(e){const{prefixCls:n}=A("multiple-tabs-content"),{t:a}=ce(),o=g(()=>{const{tabItem:{meta:u}={}}=e;return u&&a(u.title)}),{getDropMenuList:i,handleMenuEvent:l,handleContextMenu:s,getTrigger:c,isTabs:r}=bo(e);function d(u){e.tabItem&&s(e.tabItem)(u)}return{prefixCls:n,getDropMenuList:i,handleMenuEvent:l,handleContext:d,getTrigger:c,isTabs:r,getTitle:o}}});const go={class:"ml-1"};function vo(e,n,a,o,i,l){const s=h("Icon"),c=h("Dropdown");return p(),b(c,{dropMenuList:e.getDropMenuList,trigger:e.getTrigger,onMenuEvent:e.handleMenuEvent},{default:O(()=>[e.isTabs?(p(),b("div",{key:0,class:`${e.prefixCls}__info`,onContextmenu:n[1]||(n[1]=(...r)=>e.handleContext&&e.handleContext(...r))},[f("span",go,J(e.getTitle),1)],34)):(p(),b("span",{key:1,class:`${e.prefixCls}__extra-quick`,onClick:n[2]||(n[2]=(...r)=>e.handleContext&&e.handleContext(...r))},[f(s,{icon:"ion:chevron-down"})],2))]),_:1},8,["dropMenuList","trigger","onMenuEvent"])}un.render=vo;var ct=T({name:"QuickButton",components:{TabContent:un},setup(){return{TabContentEnum:ke}}});function fo(e,n,a,o,i,l){const s=h("TabContent");return p(),b(s,{type:e.TabContentEnum.EXTRA_TYPE,tabItem:e.$route},null,8,["type","tabItem"])}ct.render=fo;var mt=T({name:"FoldButton",components:{Icon:ye},setup(){const{prefixCls:e}=A("multiple-tabs-content"),{getShowMenu:n,setMenuSetting:a}=j(),{getShowHeader:o,setHeaderSetting:i}=Re(),l=g(()=>!t(n)&&!t(o)),s=g(()=>t(l)?"codicon:screen-normal":"codicon:screen-full");function c(){const r=!t(n)&&!t(o);a({show:r,hidden:!r}),i({show:r})}return{prefixCls:e,getIcon:s,handleFold:c}}});function ho(e,n,a,o,i,l){const s=h("Icon");return p(),b("span",{class:`${e.prefixCls}__extra-fold`,onClick:n[1]||(n[1]=(...c)=>e.handleFold&&e.handleFold(...c))},[f(s,{icon:e.getIcon},null,8,["icon"])],2)}mt.render=ho;var pt=T({name:"TabContent",components:{RedoOutlined:ra,Tooltip:Ue},setup(){const e=I(!1),{prefixCls:n}=A("multiple-tabs-content"),{t:a}=ce(),{refreshPage:o}=Fn();async function i(){e.value=!0,await o(),setTimeout(()=>{e.value=!1},1e3)}return{prefixCls:n,t:a,handleRedo:i,loading:e}}});function yo(e,n,a,o,i,l){const s=h("RedoOutlined"),c=h("Tooltip");return p(),b(c,{title:e.t("common.redo"),placement:"bottom",mouseEnterDelay:.5},{default:O(()=>[f("span",{class:`${e.prefixCls}__extra-redo`,onClick:n[1]||(n[1]=(...r)=>e.handleRedo&&e.handleRedo(...r))},[f(s,{spin:e.loading},null,8,["spin"])],2)]),_:1},8,["title","mouseEnterDelay"])}pt.render=yo;function _o(){const e=I([]);function n(i){const l=[];return i&&i.forEach(s=>{s.meta&&s.meta.affix&&l.push(Ie(s))}),l}function a(){const i=n(Ce.getRoutes());e.value=i;for(const l of i)Y.addTabAction({meta:l.meta,name:l.name,path:l.path})}let o=!1;return o||(a(),o=!0),e.value.map(i=>{var l;return(l=i.meta)==null?void 0:l.title}).filter(Boolean)}function Co(e){const{multiTabsSetting:n}=Yt,{prefixCls:a}=A("multiple-tabs");Ee(()=>{var l;if(!n.canDrag)return;const o=(l=document.querySelectorAll(`.${a} .ant-tabs-nav > div`))==null?void 0:l[0],{initSortable:i}=sa(o,{filter:s=>{var r;const c=(r=s==null?void 0:s.target)==null?void 0:r.innerText;return c?e.includes(c):!1},onEnd:s=>{const{oldIndex:c,newIndex:r}=s;zn(c)||zn(r)||c===r||Y.commitSortTabs({oldIndex:c,newIndex:r})}});i()})}var bt=T({name:"MultipleTabs",components:{QuickButton:ct,TabRedo:pt,FoldButton:mt,Tabs:Bn,TabPane:Bn.TabPane,TabContent:un},setup(){const e=_o(),n=I("");Co(e);const{prefixCls:a}=A("multiple-tabs"),o=qe(),{getShowQuick:i,getShowRedo:l,getShowFold:s}=Ae(),c=g(()=>Y.getTabsState.filter(m=>{var y;return!((y=m.meta)==null?void 0:y.hideTab)})),r=g(()=>t(c).length===1),d=g(()=>[a,{[`${a}--hide-close`]:t(r)}]);Oe(m=>{const{name:y}=m;if(y===Ke||!m||!qt.getTokenState)return;const{path:C,fullPath:S,meta:w={}}=m,{currentActiveMenu:_,hideTab:$}=w,x=$?_:null,F=x||S||C;if(n.value!==F&&(n.value=F),x){const z=Ce.getRoutes().find(k=>k.path===_);z&&Y.addTabAction(z)}else Y.addTabAction(t(m))});function u(m){n.value=m,o(m,!1)}function v(m){t(r)||Y.closeTabByKeyAction(m)}return{prefixCls:a,unClose:r,getWrapClass:d,handleEdit:v,handleChange:u,activeKeyRef:n,getTabsState:c,getShowQuick:i,getShowRedo:l,getShowFold:s}}}),Qo=`.vben-multiple-tabs {
  z-index: 10;
  height: 32px;
  line-height: 32px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(29, 35, 41, 0.05);
}
.vben-multiple-tabs .ant-tabs-small {
  height: 30px;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar {
  height: 30px;
  margin: 0;
  background: #fff;
  border: 0;
  box-shadow: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container {
  height: 30px;
  padding-top: 2px;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
  height: calc(30px - 2px);
  padding-right: 12px;
  line-height: calc(30px - 2px);
  color: #606266;
  background: #fff;
  border: 1px solid #d7ddeb;
  transition: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab:hover .ant-tabs-close-x {
  opacity: 1;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
  width: 8px;
  height: 12px;
  font-size: 12px;
  color: inherit;
  opacity: 0;
  transition: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x:hover svg {
  width: 0.8em;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab svg {
  fill: rgba(0, 0, 0, 0.85);
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
  position: relative;
  padding-left: 26px;
  color: #fff;
  background: #0960bd;
  border: 0;
  transition: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active::before {
  position: absolute;
  top: calc(50% - 3px);
  left: 8px;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  content: '';
  transition: none;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active .ant-tabs-close-x {
  opacity: 1;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active svg {
  width: 0.7em;
  fill: #fff;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-nav > div:nth-child(1) {
  padding: 0 6px;
}
.vben-multiple-tabs .ant-tabs.ant-tabs-card .ant-tabs-nav > div:nth-child(1) .ant-tabs-tab {
  margin-right: 3px !important;
}
.vben-multiple-tabs .ant-tabs-tab:not(.ant-tabs-tab-active) .anticon-close {
  font-size: 12px;
}
.vben-multiple-tabs .ant-tabs-tab:not(.ant-tabs-tab-active) .anticon-close svg {
  width: 0.6em;
}
.vben-multiple-tabs .ant-tabs-extra-content {
  margin-top: 2px;
  line-height: 30px !important;
}
.vben-multiple-tabs .ant-dropdown-trigger {
  display: inline-flex;
}
.vben-multiple-tabs--hide-close .ant-tabs-close-x {
  opacity: 0 !important;
}
.vben-multiple-tabs-content__extra-quick, .vben-multiple-tabs-content__extra-redo, .vben-multiple-tabs-content__extra-fold {
  display: inline-block;
  width: 36px;
  height: 30px;
  line-height: 30px;
  color: #666;
  text-align: center;
  cursor: pointer;
  border-left: 1px solid #eee;
}
.vben-multiple-tabs-content__extra-quick:hover, .vben-multiple-tabs-content__extra-redo:hover, .vben-multiple-tabs-content__extra-fold:hover {
  color: rgba(0, 0, 0, 0.85);
}
.vben-multiple-tabs-content__extra-quick span[role='img'], .vben-multiple-tabs-content__extra-redo span[role='img'], .vben-multiple-tabs-content__extra-fold span[role='img'] {
  transform: rotate(90deg);
}
.vben-multiple-tabs-content__extra-redo span[role='img'] {
  transform: rotate(0deg);
}
.vben-multiple-tabs-content__info {
  display: inline-block;
  width: 100%;
  height: 28px;
  padding-left: 0;
  margin-left: -10px;
  font-size: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}`;function So(e,n,a,o,i,l){const s=h("TabContent"),c=h("TabPane"),r=h("TabRedo"),d=h("QuickButton"),u=h("FoldButton"),v=h("Tabs");return p(),b("div",{class:e.getWrapClass},[f(v,{type:"editable-card",size:"small",animated:!1,hideAdd:!0,tabBarGutter:3,activeKey:e.activeKeyRef,onChange:e.handleChange,onEdit:e.handleEdit},Nn({default:O(()=>[(p(!0),b(W,null,me(e.getTabsState,m=>(p(),b(c,{key:m.query?m.fullPath:m.path,closable:!(m&&m.meta&&m.meta.affix)},{tab:O(()=>[f(s,{tabItem:m},null,8,["tabItem"])]),_:2},1032,["closable"]))),128))]),_:2},[e.getShowRedo||e.getShowQuick?{name:"tabBarExtraContent",fn:O(()=>[e.getShowRedo?(p(),b(r,{key:0})):L("",!0),e.getShowQuick?(p(),b(d,{key:1})):L("",!0),e.getShowFold?(p(),b(u,{key:2})):L("",!0)])}:void 0]),1032,["activeKey","onChange","onEdit"])],2)}bt.render=So;const gt=48,$o=32;var dn=T({name:"LayoutMultipleHeader",components:{LayoutHeader:sn,MultipleTabs:bt},setup(){const{prefixCls:e}=A("layout-multiple-header"),{getCalcContentWidth:n,getSplit:a}=j(),{getIsMobile:o}=be(),{getFixed:i,getShowInsetHeaderRef:l,getShowFullHeaderRef:s,getHeaderTheme:c,getShowHeader:r}=Re(),{getFullContent:d}=Xt(),{getShowMultipleTab:u}=Ae(),v=g(()=>t(u)&&!t(d)),m=g(()=>t(i)||t(s)),y=g(()=>{const _={};return t(i)&&(_.width=t(o)?"100%":t(n)),t(s)&&(_.top=`${gt}px`),_}),C=g(()=>t(i)||t(s)),S=g(()=>{let _=0;return(t(s)||!t(a))&&t(r)&&!t(d)&&(_+=gt),t(u)&&!t(d)&&(_+=$o),it.value=_,{height:`${_}px`}});return{getClass:g(()=>[e,`${e}--${t(c)}`,{[`${e}--fixed`]:t(C)}]),prefixCls:e,getPlaceholderDomStyle:S,getIsFixed:C,getWrapStyle:y,getIsShowPlaceholderDom:m,getShowTabs:v,getShowInsetHeaderRef:l}}}),Zo=`.vben-layout-multiple-header[data-v-42a153ba] {
  transition: width 0.2s;
  flex: 0 0 auto;
}
.vben-layout-multiple-header--dark[data-v-42a153ba] {
  margin-left: 0;
}
.vben-layout-multiple-header--fixed[data-v-42a153ba] {
  position: fixed;
  top: 0;
  z-index: 505;
  width: 100%;
}`;const Mo=An(),wo=Mo((e,n,a,o,i,l)=>{const s=h("LayoutHeader"),c=h("MultipleTabs");return p(),b(W,null,[e.getIsShowPlaceholderDom?(p(),b("div",{key:0,style:e.getPlaceholderDomStyle},null,4)):L("",!0),f("div",{style:e.getWrapStyle,class:e.getClass},[e.getShowInsetHeaderRef?(p(),b(s,{key:0})):L("",!0),e.getShowTabs?(p(),b(c,{key:1})):L("",!0)],6)],64)});dn.render=wo,dn.__scopeId="data-v-42a153ba";var vt=T({name:"DefaultLayout",components:{LayoutFeatures:ne(()=>te(()=>import("./index.beae78d4.js"),["/lamp-web-plus/assets/index.beae78d4.js","/lamp-web-plus/assets/index.afc8bb32.css","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/scrollTo.63faf8a4.js"])),LayoutFooter:ne(()=>te(()=>import("./index.7799d8cb.js"),["/lamp-web-plus/assets/index.7799d8cb.js","/lamp-web-plus/assets/index.a5af55c2.css","/lamp-web-plus/assets/siteSetting.31110d56.js","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/GithubFilled.15d30a40.js","/lamp-web-plus/assets/useFullScreen.4feb3b86.js","/lamp-web-plus/assets/FullscreenOutlined.d52a1fbe.js","/lamp-web-plus/assets/isNumeric.2bec345d.js","/lamp-web-plus/assets/index.8e1ef517.js","/lamp-web-plus/assets/index.a9fdc7b4.css","/lamp-web-plus/assets/useWindowSizeFn.4268e9dd.js","/lamp-web-plus/assets/uniqBy.2c7c6ba7.js","/lamp-web-plus/assets/_baseIteratee.32c93b4a.js","/lamp-web-plus/assets/get.108cb567.js","/lamp-web-plus/assets/hasIn.a020a292.js","/lamp-web-plus/assets/_baseProperty.74f89655.js","/lamp-web-plus/assets/usePageContext.0fc2e04d.js","/lamp-web-plus/assets/index.05d758e3.js","/lamp-web-plus/assets/RedoOutlined.e111b4c0.js","/lamp-web-plus/assets/useSortable.d1ae52c9.js","/lamp-web-plus/assets/index.08635ac9.js","/lamp-web-plus/assets/UpOutlined.a2803449.js","/lamp-web-plus/assets/PlusOutlined.3cbe2bbe.js"])),LayoutHeader:sn,LayoutContent:rt,LayoutSideBar:dt,LayoutMultipleHeader:dn,Layout:N},setup(){const{prefixCls:e}=A("default-layout"),{getIsMobile:n}=be(),{getShowFullHeaderRef:a}=Re(),{getShowSidebar:o,getIsMixSidebar:i}=j(),l=g(()=>({"ant-layout-has-sider":t(i)}));return{getShowFullHeaderRef:a,getShowSidebar:o,prefixCls:e,getIsMobile:n,getIsMixSidebar:i,layoutClass:l}}}),Jo=`.vben-default-layout {
  display: flex;
  width: 100%;
  min-height: 100%;
  background: #f4f7f9;
  flex-direction: column;
}
.vben-default-layout > .ant-layout {
  min-height: 100%;
}
.vben-default-layout-main {
  margin-left: 1px;
}`;function ko(e,n,a,o,i,l){const s=h("LayoutFeatures"),c=h("LayoutHeader"),r=h("LayoutSideBar"),d=h("LayoutMultipleHeader"),u=h("LayoutContent"),v=h("LayoutFooter"),m=h("Layout");return p(),b(m,{class:e.prefixCls},{default:O(()=>[f(s),e.getShowFullHeaderRef?(p(),b(c,{key:0,fixed:""})):L("",!0),f(m,{class:e.layoutClass},{default:O(()=>[e.getShowSidebar||e.getIsMobile?(p(),b(r,{key:0})):L("",!0),f(m,{class:`${e.prefixCls}-main`},{default:O(()=>[f(d),f(u),f(v)]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"])}vt.render=ko;var To=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vt});export{N as L,To as i};
