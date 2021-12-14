import{d as I,b_ as P,aC as w,w as x,bH as L,g as N,j as S,ap as M,dK as j,aH as A,dw as D,E as H,dm as _,em as O,di as T,r as h,o as l,n as b,p as V,J as C,N as q,q as B,L as G}from"./index.ff8e7350.js";import{B as R}from"./index.2d596eab.js";import"./vendor.352e3120.js";var E=I({name:"LayoutBreadcrumb",components:{Icon:P,[R.name]:R},props:{theme:w.oneOf(["dark","light"])},setup(){const o=x([]),{currentRoute:i}=L(),{prefixCls:g}=N("layout-breadcrumb"),{getShowBreadCrumbIcon:v}=j(),{t:d}=S();M(()=>{var t,r;if(i.value.name===D)return;const n=(t=i.value)==null?void 0:t.matched;if(!n||n.length===0)return;let a=m(H(n));const e=a.filter(s=>s.path!==_.BASE_HOME);e.length===a.length&&e.unshift({path:_.BASE_HOME,meta:{title:d("layout.header.home"),isLink:!0}}),((r=i.value.meta)==null?void 0:r.currentActiveMenu)&&e.push(i.value),o.value=k(e)});function k(n){const a=[];return n.forEach(e=>{var t;if(((t=e.children)==null?void 0:t.length)===1){const r=e.children[0],s=r.name,u=e.name;s&&`${s}Parent`===u&&(e=r)}a.push(e)}),a}function m(n){return O(n,e=>{const{meta:t}=e;if(!t)return!1;const{title:r,hideBreadcrumb:s,hideMenu:u}=t;return!(!r||s||u)}).filter(e=>{var t,r;return!((t=e.meta)==null?void 0:t.hideBreadcrumb)||!((r=e.meta)==null?void 0:r.hideMenu)})}function f(n,a,e){e==null||e.preventDefault();const{children:t,redirect:r,meta:s}=n;if((t==null?void 0:t.length)&&!r){e==null||e.stopPropagation();return}if(s==null?void 0:s.carryParam)return;const u=T();if(r&&A(r))u(r);else{let c="";if(a.length===1)c=a[0];else{const y=a.slice(1),$=y.pop()||"";c=`${y.pop()||""}/${$}`}c=/^\//.test(c)?c:`/${c}`,u(c)}}function p(n,a){return n.indexOf(a)!==n.length-1}return{routes:o,t:d,prefixCls:g,getShowBreadCrumbIcon:v,handleClick:f,hasRedirect:p}}}),W=`.vben-layout-breadcrumb {
  display: flex;
  padding: 0 8px;
  align-items: center;
}
.vben-layout-breadcrumb .ant-breadcrumb-link .anticon {
  margin-right: 4px;
  margin-bottom: 2px;
}
.vben-layout-breadcrumb--light .ant-breadcrumb-link {
  color: #999;
}
.vben-layout-breadcrumb--light .ant-breadcrumb-link a {
  color: rgba(0, 0, 0, 0.65);
}
.vben-layout-breadcrumb--light .ant-breadcrumb-link a:hover {
  color: #0960bd;
}
.vben-layout-breadcrumb--light .ant-breadcrumb-separator {
  color: #999;
}
.vben-layout-breadcrumb--dark .ant-breadcrumb-link {
  color: rgba(255, 255, 255, 0.6);
}
.vben-layout-breadcrumb--dark .ant-breadcrumb-link a {
  color: rgba(255, 255, 255, 0.8);
}
.vben-layout-breadcrumb--dark .ant-breadcrumb-link a:hover {
  color: #fff;
}
.vben-layout-breadcrumb--dark .ant-breadcrumb-separator, .vben-layout-breadcrumb--dark .anticon {
  color: rgba(255, 255, 255, 0.8);
}`;const J={key:1};function K(o,i,g,v,d,k){const m=h("Icon"),f=h("router-link"),p=h("a-breadcrumb");return l(),b("div",{class:[o.prefixCls,`${o.prefixCls}--${o.theme}`]},[V(p,{routes:o.routes},{itemRender:C(({route:n,routes:a,paths:e})=>[o.getShowBreadCrumbIcon&&n.meta.icon?(l(),b(m,{key:0,icon:n.meta.icon},null,8,["icon"])):q("",!0),o.hasRedirect(a,n)?(l(),b(f,{key:2,to:"",onClick:t=>o.handleClick(n,e,t)},{default:C(()=>[G(B(o.t(n.meta.title)),1)]),_:2},1032,["onClick"])):(l(),b("span",J,B(o.t(n.meta.title)),1))]),_:1},8,["routes"])],2)}E.render=K;export default E;
