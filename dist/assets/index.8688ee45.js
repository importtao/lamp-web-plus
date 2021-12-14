import{d as L,cK as j,cn as b,bj as k,bd as D,aC as A,g as I,j as S,k as y,A as u,dP as O,aL as $,r,o as c,n as l,p as n,J as a,N as C,L as U,q as M,M as z}from"./index.05ea33df.js";import{D as N}from"./siteSetting.31110d56.js";import{b as R}from"./useModal.024b9b70.js";import{A as V}from"./index.03402249.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.bedcc730.js";import"./FullscreenOutlined.6ef047e2.js";import"./useBreakpoint.249417d5.js";import"./responsiveObserve.968aa5d0.js";import"./useSize.c28e111d.js";var x=L({name:"UserDropdown",components:{Dropdown:j,Menu:b,Avatar:V,MenuItem:k(()=>D(()=>import("./DropMenuItem.bd0f42a6.js"),["/assets/DropMenuItem.bd0f42a6.js","/assets/index.05ea33df.js","/assets/index.03307a49.css","/assets/vendor.352e3120.js"])),MenuDivider:b.Divider,LockAction:k(()=>D(()=>import("./LockModal.b6625fdc.js"),["/assets/LockModal.b6625fdc.js","/assets/LockModal.c2a09df5.css","/assets/index.05ea33df.js","/assets/index.03307a49.css","/assets/vendor.352e3120.js","/assets/useModal.024b9b70.js","/assets/useModal.b1a1b797.css","/assets/useWindowSizeFn.bedcc730.js","/assets/FullscreenOutlined.6ef047e2.js","/assets/BasicForm.2f71c419.js","/assets/BasicForm.6e3c2182.css","/assets/useFormItem.902ca43e.js","/assets/index.faeec8a2.js","/assets/index.cf387d6d.js","/assets/get.f4e2a1c0.js","/assets/conductUtil.82525e99.js","/assets/iconUtil.d875d1ff.js","/assets/_baseSet.e2b00d8d.js","/assets/hasIn.3c39ff13.js","/assets/FileOutlined.72b26251.js","/assets/user.16e1967f.js","/assets/transButton.9a1903a9.js","/assets/DeleteOutlined.3986c5e6.js","/assets/commonEnum.da040d67.js","/assets/index.be446867.js","/assets/index.8795eb20.js","/assets/css.b1edd3c8.js","/assets/index.c3f5e4ba.js","/assets/index.cfb51f70.js","/assets/uuid.2b29000c.js","/assets/index.74eb6f9c.js","/assets/uniqBy.6f8da1a0.js","/assets/_baseIteratee.6051ea54.js","/assets/_baseProperty.74f89655.js","/assets/findIndex.0ad6ac98.js","/assets/toInteger.e36ca646.js","/assets/index.1393b71a.js","/assets/download.5d8f05f1.js","/assets/index.fe88e9db.js","/assets/index.9cf06c39.css","/assets/index.021ff727.js","/assets/UpOutlined.b05eb3d5.js","/assets/index.d265e78b.js","/assets/RedoOutlined.d497a357.js","/assets/dayjs.26660a9f.js","/assets/useState.20f1f9ca.js","/assets/index.e5a1f932.js","/assets/Col.8bf95754.js","/assets/responsiveObserve.968aa5d0.js","/assets/canUseDom.0bf35682.js","/assets/useSize.c28e111d.js","/assets/index.48bbff73.js","/assets/useForm.f47588eb.js","/assets/header.d801b988.js","/assets/index.03402249.js","/assets/useBreakpoint.249417d5.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:m}=S(),{getShowDoc:h}=O(),v=y(()=>u.getUserInfoState),[f,{openModal:g}]=R();function s(){g(!0)}function t(){u.confirmLoginOut()}function d(){$(N)}function i(o){switch(o.key){case"logout":t();break;case"doc":d();break;case"lock":s();break}}const p=y(()=>{const o=u.getUserInfoState;if(o.avatar){if(o.avatar.startsWith("http://")||o.avatar.startsWith("https://"))return o.avatar}return o.avatar});return{prefixCls:e,t:m,getUserInfo:v,handleMenuClick:i,getShowDoc:h,getAvatar:p,register:f}}}),Q=`.vben-header-user-dropdown {
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
}`;function E(e,m,h,v,f,g){const s=r("Avatar"),t=r("MenuItem"),d=r("MenuDivider"),i=r("Menu"),p=r("Dropdown"),o=r("LockAction");return c(),l(z,null,[n(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:a(()=>[n(i,{onClick:e.handleMenuClick},{default:a(()=>[e.getShowDoc?(c(),l(t,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):C("",!0),e.getShowDoc?(c(),l(d,{key:1})):C("",!0),n(t,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"]),n(t,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:a(()=>[n("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[n(s,{src:e.getAvatar,size:26,style:{"margin-right":"12px"}},{default:a(()=>[n(s,{size:26},{default:a(()=>{var _,w;return[U(M((w=(_=e.getUserInfo)==null?void 0:_.name)==null?void 0:w.charAt(0)),1)]}),_:1})]),_:1},8,["src"]),n("span",{class:`${e.prefixCls}__info hidden md:block`},[n("span",{class:[`${e.prefixCls}__name  `,"truncate"]},M(e.getUserInfo.name),3)],2)],2)]),_:1},8,["overlayClassName"]),n(o,{onRegister:e.register},null,8,["onRegister"])],64)}x.render=E;export default x;
