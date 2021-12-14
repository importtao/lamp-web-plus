import{d as L,cK as j,cn as w,bj as k,bd as D,aC as A,g as I,j as S,k as y,A as u,dP as O,aL as $,r,o as c,n as l,p as n,J as a,N as C,L as U,q as M,M as z}from"./index.b361f078.js";import{D as N}from"./siteSetting.31110d56.js";import{b as R}from"./useModal.7bdad3e3.js";import{A as V}from"./index.ad62d489.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.d25090e5.js";import"./FullscreenOutlined.86c5b021.js";import"./useBreakpoint.3b9cff8d.js";import"./responsiveObserve.16e475dd.js";import"./useSize.5dcbe36a.js";var x=L({name:"UserDropdown",components:{Dropdown:j,Menu:w,Avatar:V,MenuItem:k(()=>D(()=>import("./DropMenuItem.5b0603c1.js"),["/lamp-web-plus/assets/DropMenuItem.5b0603c1.js","/lamp-web-plus/assets/index.b361f078.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js"])),MenuDivider:w.Divider,LockAction:k(()=>D(()=>import("./LockModal.fbcaa211.js"),["/lamp-web-plus/assets/LockModal.fbcaa211.js","/lamp-web-plus/assets/LockModal.c2a09df5.css","/lamp-web-plus/assets/index.b361f078.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/useModal.7bdad3e3.js","/lamp-web-plus/assets/useModal.b1a1b797.css","/lamp-web-plus/assets/useWindowSizeFn.d25090e5.js","/lamp-web-plus/assets/FullscreenOutlined.86c5b021.js","/lamp-web-plus/assets/BasicForm.13ecb12b.js","/lamp-web-plus/assets/BasicForm.6e3c2182.css","/lamp-web-plus/assets/useFormItem.17a96bc3.js","/lamp-web-plus/assets/index.325fce14.js","/lamp-web-plus/assets/index.ee85ced9.js","/lamp-web-plus/assets/get.cbc20f33.js","/lamp-web-plus/assets/conductUtil.7ef77030.js","/lamp-web-plus/assets/iconUtil.e9686cd8.js","/lamp-web-plus/assets/_baseSet.60a402c1.js","/lamp-web-plus/assets/hasIn.661f69c5.js","/lamp-web-plus/assets/FileOutlined.a4627299.js","/lamp-web-plus/assets/user.449909fc.js","/lamp-web-plus/assets/transButton.7b09546d.js","/lamp-web-plus/assets/DeleteOutlined.eab5616f.js","/lamp-web-plus/assets/commonEnum.da040d67.js","/lamp-web-plus/assets/index.8d41a8b1.js","/lamp-web-plus/assets/index.fe2e064e.js","/lamp-web-plus/assets/css.b1edd3c8.js","/lamp-web-plus/assets/index.fa7b5b48.js","/lamp-web-plus/assets/index.781b32b3.js","/lamp-web-plus/assets/uuid.2b29000c.js","/lamp-web-plus/assets/index.1c4eb95d.js","/lamp-web-plus/assets/uniqBy.22bab247.js","/lamp-web-plus/assets/_baseIteratee.700ae08f.js","/lamp-web-plus/assets/_baseProperty.74f89655.js","/lamp-web-plus/assets/findIndex.fe35620d.js","/lamp-web-plus/assets/toInteger.f515429e.js","/lamp-web-plus/assets/index.c25573d6.js","/lamp-web-plus/assets/download.8a0fd70b.js","/lamp-web-plus/assets/index.e7aa41c1.js","/lamp-web-plus/assets/index.9cf06c39.css","/lamp-web-plus/assets/index.80320b3c.js","/lamp-web-plus/assets/UpOutlined.cbb592c6.js","/lamp-web-plus/assets/index.08bfe127.js","/lamp-web-plus/assets/RedoOutlined.2709deaa.js","/lamp-web-plus/assets/dayjs.c73a8766.js","/lamp-web-plus/assets/useState.1cc54c32.js","/lamp-web-plus/assets/index.57e65500.js","/lamp-web-plus/assets/Col.4346c2f2.js","/lamp-web-plus/assets/responsiveObserve.16e475dd.js","/lamp-web-plus/assets/canUseDom.0bf35682.js","/lamp-web-plus/assets/useSize.5dcbe36a.js","/lamp-web-plus/assets/index.6cab1e04.js","/lamp-web-plus/assets/useForm.ac288eb4.js","/lamp-web-plus/assets/header.d801b988.js","/lamp-web-plus/assets/index.ad62d489.js","/lamp-web-plus/assets/useBreakpoint.3b9cff8d.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:m}=S(),{getShowDoc:h}=O(),v=y(()=>u.getUserInfoState),[f,{openModal:g}]=R();function s(){g(!0)}function t(){u.confirmLoginOut()}function d(){$(N)}function i(o){switch(o.key){case"logout":t();break;case"doc":d();break;case"lock":s();break}}const p=y(()=>{const o=u.getUserInfoState;if(o.avatar){if(o.avatar.startsWith("http://")||o.avatar.startsWith("https://"))return o.avatar}return o.avatar});return{prefixCls:e,t:m,getUserInfo:v,handleMenuClick:i,getShowDoc:h,getAvatar:p,register:f}}}),Q=`.vben-header-user-dropdown {
  height: 48px;
  padding: 0 0 0 10px;
  padding-right: 10px;
  overflow: hidden;
  font-size: 12px;
  cursor: pointer;
  align-items: center;
}
.vben-header-user-dropdown:hover {
  background: #f6f6f6;
}
.vben-header-user-dropdown img {
  width: 26px;
  height: 26px;
  margin-right: 12px;
}
.vben-header-user-dropdown__header {
  border-radius: 50%;
}
.vben-header-user-dropdown__name {
  font-size: 14px;
}
.vben-header-user-dropdown--dark:hover {
  background: var(--header-bg-hover-color);
}
.vben-header-user-dropdown--light .vben-header-user-dropdown__name {
  color: rgba(0, 0, 0, 0.85);
}
.vben-header-user-dropdown--light .vben-header-user-dropdown__desc {
  color: #7c8087;
}
.vben-header-user-dropdown-dropdown-overlay .ant-dropdown-menu-item {
  min-width: 160px;
}`;function E(e,m,h,v,f,g){const s=r("Avatar"),t=r("MenuItem"),d=r("MenuDivider"),i=r("Menu"),p=r("Dropdown"),o=r("LockAction");return c(),l(z,null,[n(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:a(()=>[n(i,{onClick:e.handleMenuClick},{default:a(()=>[e.getShowDoc?(c(),l(t,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):C("",!0),e.getShowDoc?(c(),l(d,{key:1})):C("",!0),n(t,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"]),n(t,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:a(()=>[n("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[n(s,{src:e.getAvatar,size:26,style:{"margin-right":"12px"}},{default:a(()=>[n(s,{size:26},{default:a(()=>{var _,b;return[U(M((b=(_=e.getUserInfo)==null?void 0:_.name)==null?void 0:b.charAt(0)),1)]}),_:1})]),_:1},8,["src"]),n("span",{class:`${e.prefixCls}__info hidden md:block`},[n("span",{class:[`${e.prefixCls}__name  `,"truncate"]},M(e.getUserInfo.name),3)],2)],2)]),_:1},8,["overlayClassName"]),n(o,{onRegister:e.register},null,8,["onRegister"])],64)}x.render=E;export default x;
