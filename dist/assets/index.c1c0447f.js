import{d as L,cK as j,cn as k,bj as b,bd as D,aC as A,g as I,j as S,k as y,A as u,dP as O,aL as $,r,o as c,n as l,p as n,J as a,N as C,L as U,q as M,M as z}from"./index.0523a5a3.js";import{D as N}from"./siteSetting.31110d56.js";import{b as R}from"./useModal.131645a5.js";import{A as V}from"./index.814a8df7.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.4268e9dd.js";import"./FullscreenOutlined.d52a1fbe.js";import"./useBreakpoint.a9fc3198.js";import"./responsiveObserve.43c11602.js";import"./useSize.6627aa05.js";var x=L({name:"UserDropdown",components:{Dropdown:j,Menu:k,Avatar:V,MenuItem:b(()=>D(()=>import("./DropMenuItem.2896ae93.js"),["/lamp-web-plus/assets/DropMenuItem.2896ae93.js","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js"])),MenuDivider:k.Divider,LockAction:b(()=>D(()=>import("./LockModal.ab2f4de7.js"),["/lamp-web-plus/assets/LockModal.ab2f4de7.js","/lamp-web-plus/assets/LockModal.c2a09df5.css","/lamp-web-plus/assets/index.0523a5a3.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/useModal.131645a5.js","/lamp-web-plus/assets/useModal.b1a1b797.css","/lamp-web-plus/assets/useWindowSizeFn.4268e9dd.js","/lamp-web-plus/assets/FullscreenOutlined.d52a1fbe.js","/lamp-web-plus/assets/BasicForm.71637030.js","/lamp-web-plus/assets/BasicForm.6e3c2182.css","/lamp-web-plus/assets/useFormItem.ddca9049.js","/lamp-web-plus/assets/index.26c5e60b.js","/lamp-web-plus/assets/index.a9b2b45a.js","/lamp-web-plus/assets/get.108cb567.js","/lamp-web-plus/assets/conductUtil.fde7132a.js","/lamp-web-plus/assets/iconUtil.f3ee4c23.js","/lamp-web-plus/assets/_baseSet.f781a95b.js","/lamp-web-plus/assets/hasIn.a020a292.js","/lamp-web-plus/assets/FileOutlined.53cb4a4e.js","/lamp-web-plus/assets/user.c02d9c13.js","/lamp-web-plus/assets/transButton.555d93e9.js","/lamp-web-plus/assets/DeleteOutlined.30981501.js","/lamp-web-plus/assets/commonEnum.da040d67.js","/lamp-web-plus/assets/index.8e7c33d5.js","/lamp-web-plus/assets/index.09507e37.js","/lamp-web-plus/assets/css.b1edd3c8.js","/lamp-web-plus/assets/index.436d37b6.js","/lamp-web-plus/assets/index.c4d8ae58.js","/lamp-web-plus/assets/uuid.2b29000c.js","/lamp-web-plus/assets/index.8b9bc77d.js","/lamp-web-plus/assets/uniqBy.2c7c6ba7.js","/lamp-web-plus/assets/_baseIteratee.32c93b4a.js","/lamp-web-plus/assets/_baseProperty.74f89655.js","/lamp-web-plus/assets/findIndex.0841f873.js","/lamp-web-plus/assets/toInteger.1430c119.js","/lamp-web-plus/assets/index.b642a15b.js","/lamp-web-plus/assets/download.062b03e8.js","/lamp-web-plus/assets/index.383f27d9.js","/lamp-web-plus/assets/index.9cf06c39.css","/lamp-web-plus/assets/index.b9116045.js","/lamp-web-plus/assets/UpOutlined.a2803449.js","/lamp-web-plus/assets/index.587209e3.js","/lamp-web-plus/assets/RedoOutlined.e111b4c0.js","/lamp-web-plus/assets/dayjs.7ad781c8.js","/lamp-web-plus/assets/useState.43515907.js","/lamp-web-plus/assets/index.315e04ce.js","/lamp-web-plus/assets/Col.102f0df6.js","/lamp-web-plus/assets/responsiveObserve.43c11602.js","/lamp-web-plus/assets/canUseDom.0bf35682.js","/lamp-web-plus/assets/useSize.6627aa05.js","/lamp-web-plus/assets/index.4637d8b2.js","/lamp-web-plus/assets/useForm.eec49fca.js","/lamp-web-plus/assets/header.d801b988.js","/lamp-web-plus/assets/index.814a8df7.js","/lamp-web-plus/assets/useBreakpoint.a9fc3198.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:m}=S(),{getShowDoc:h}=O(),v=y(()=>u.getUserInfoState),[f,{openModal:g}]=R();function s(){g(!0)}function t(){u.confirmLoginOut()}function d(){$(N)}function i(o){switch(o.key){case"logout":t();break;case"doc":d();break;case"lock":s();break}}const p=y(()=>{const o=u.getUserInfoState;if(o.avatar){if(o.avatar.startsWith("http://")||o.avatar.startsWith("https://"))return o.avatar}return o.avatar});return{prefixCls:e,t:m,getUserInfo:v,handleMenuClick:i,getShowDoc:h,getAvatar:p,register:f}}}),Q=`.vben-header-user-dropdown {
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
