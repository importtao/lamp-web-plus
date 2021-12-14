import{d as L,cK as j,cn as w,bj as k,bd as D,aC as A,g as I,j as S,k as y,A as u,dP as O,aL as $,r,o as c,n as l,p as n,J as a,N as C,L as U,q as M,M as z}from"./index.b7a14d4f.js";import{D as N}from"./siteSetting.31110d56.js";import{b as R}from"./useModal.cb74101d.js";import{A as V}from"./index.d9119902.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.1c78bb1f.js";import"./FullscreenOutlined.c2c9b8db.js";import"./useBreakpoint.508a26d1.js";import"./responsiveObserve.0e84fd18.js";import"./useSize.a97ab731.js";var x=L({name:"UserDropdown",components:{Dropdown:j,Menu:w,Avatar:V,MenuItem:k(()=>D(()=>import("./DropMenuItem.1c25e35f.js"),["/lamp-web-plus/assets/DropMenuItem.1c25e35f.js","/lamp-web-plus/assets/index.b7a14d4f.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js"])),MenuDivider:w.Divider,LockAction:k(()=>D(()=>import("./LockModal.2d910f3c.js"),["/lamp-web-plus/assets/LockModal.2d910f3c.js","/lamp-web-plus/assets/LockModal.c2a09df5.css","/lamp-web-plus/assets/index.b7a14d4f.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/useModal.cb74101d.js","/lamp-web-plus/assets/useModal.b1a1b797.css","/lamp-web-plus/assets/useWindowSizeFn.1c78bb1f.js","/lamp-web-plus/assets/FullscreenOutlined.c2c9b8db.js","/lamp-web-plus/assets/BasicForm.8a90524a.js","/lamp-web-plus/assets/BasicForm.6e3c2182.css","/lamp-web-plus/assets/useFormItem.3078eec7.js","/lamp-web-plus/assets/index.1fe375b7.js","/lamp-web-plus/assets/index.18e73f7c.js","/lamp-web-plus/assets/get.17b5f080.js","/lamp-web-plus/assets/conductUtil.b952d6da.js","/lamp-web-plus/assets/iconUtil.5323a4d2.js","/lamp-web-plus/assets/_baseSet.62e0ca1c.js","/lamp-web-plus/assets/hasIn.55ea5e75.js","/lamp-web-plus/assets/FileOutlined.633a7a92.js","/lamp-web-plus/assets/user.d5977986.js","/lamp-web-plus/assets/transButton.928b71e3.js","/lamp-web-plus/assets/DeleteOutlined.123b484f.js","/lamp-web-plus/assets/commonEnum.da040d67.js","/lamp-web-plus/assets/index.f8f362f5.js","/lamp-web-plus/assets/index.2fe134dc.js","/lamp-web-plus/assets/css.b1edd3c8.js","/lamp-web-plus/assets/index.b7943f07.js","/lamp-web-plus/assets/index.82115275.js","/lamp-web-plus/assets/uuid.2b29000c.js","/lamp-web-plus/assets/index.5cf0b4b1.js","/lamp-web-plus/assets/uniqBy.272154d9.js","/lamp-web-plus/assets/_baseIteratee.580b2020.js","/lamp-web-plus/assets/_baseProperty.74f89655.js","/lamp-web-plus/assets/findIndex.ca0f29b6.js","/lamp-web-plus/assets/toInteger.085db34b.js","/lamp-web-plus/assets/index.9cae10d5.js","/lamp-web-plus/assets/download.19f0ec6f.js","/lamp-web-plus/assets/index.ba68f563.js","/lamp-web-plus/assets/index.9cf06c39.css","/lamp-web-plus/assets/index.bf350d2a.js","/lamp-web-plus/assets/UpOutlined.08898d4e.js","/lamp-web-plus/assets/index.4c37e48f.js","/lamp-web-plus/assets/RedoOutlined.2970476a.js","/lamp-web-plus/assets/dayjs.77e2c65c.js","/lamp-web-plus/assets/useState.9469ce58.js","/lamp-web-plus/assets/index.b5e3a742.js","/lamp-web-plus/assets/Col.deca4875.js","/lamp-web-plus/assets/responsiveObserve.0e84fd18.js","/lamp-web-plus/assets/canUseDom.0bf35682.js","/lamp-web-plus/assets/useSize.a97ab731.js","/lamp-web-plus/assets/index.173fb3cc.js","/lamp-web-plus/assets/useForm.1103fde3.js","/lamp-web-plus/assets/header.d801b988.js","/lamp-web-plus/assets/index.d9119902.js","/lamp-web-plus/assets/useBreakpoint.508a26d1.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:m}=S(),{getShowDoc:h}=O(),f=y(()=>u.getUserInfoState),[v,{openModal:g}]=R();function s(){g(!0)}function t(){u.confirmLoginOut()}function d(){$(N)}function i(o){switch(o.key){case"logout":t();break;case"doc":d();break;case"lock":s();break}}const p=y(()=>{const o=u.getUserInfoState;if(o.avatar){if(o.avatar.startsWith("http://")||o.avatar.startsWith("https://"))return o.avatar}return o.avatar});return{prefixCls:e,t:m,getUserInfo:f,handleMenuClick:i,getShowDoc:h,getAvatar:p,register:v}}}),Q=`.vben-header-user-dropdown {
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
}`;function E(e,m,h,f,v,g){const s=r("Avatar"),t=r("MenuItem"),d=r("MenuDivider"),i=r("Menu"),p=r("Dropdown"),o=r("LockAction");return c(),l(z,null,[n(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:a(()=>[n(i,{onClick:e.handleMenuClick},{default:a(()=>[e.getShowDoc?(c(),l(t,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):C("",!0),e.getShowDoc?(c(),l(d,{key:1})):C("",!0),n(t,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"]),n(t,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:a(()=>[n("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[n(s,{src:e.getAvatar,size:26,style:{"margin-right":"12px"}},{default:a(()=>[n(s,{size:26},{default:a(()=>{var _,b;return[U(M((b=(_=e.getUserInfo)==null?void 0:_.name)==null?void 0:b.charAt(0)),1)]}),_:1})]),_:1},8,["src"]),n("span",{class:`${e.prefixCls}__info hidden md:block`},[n("span",{class:[`${e.prefixCls}__name  `,"truncate"]},M(e.getUserInfo.name),3)],2)],2)]),_:1},8,["overlayClassName"]),n(o,{onRegister:e.register},null,8,["onRegister"])],64)}x.render=E;export default x;
