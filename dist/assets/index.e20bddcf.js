import{d as L,cK as j,cn as w,bj as k,bd as D,aC as A,g as I,j as S,k as y,A as u,dP as O,aL as $,r,o as c,n as l,p as n,J as a,N as C,L as U,q as M,M as z}from"./index.b6dfbfcf.js";import{D as N}from"./siteSetting.31110d56.js";import{b as R}from"./useModal.2752a197.js";import{A as V}from"./index.4cbf17ba.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.fee40caf.js";import"./FullscreenOutlined.fdd43b18.js";import"./useBreakpoint.4a44e358.js";import"./responsiveObserve.7206f913.js";import"./useSize.fb5b95d6.js";var x=L({name:"UserDropdown",components:{Dropdown:j,Menu:w,Avatar:V,MenuItem:k(()=>D(()=>import("./DropMenuItem.e3c06e6a.js"),["/lamp-web-plus/assets/DropMenuItem.e3c06e6a.js","/lamp-web-plus/assets/index.b6dfbfcf.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js"])),MenuDivider:w.Divider,LockAction:k(()=>D(()=>import("./LockModal.1fac2916.js"),["/lamp-web-plus/assets/LockModal.1fac2916.js","/lamp-web-plus/assets/LockModal.c2a09df5.css","/lamp-web-plus/assets/index.b6dfbfcf.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/useModal.2752a197.js","/lamp-web-plus/assets/useModal.b1a1b797.css","/lamp-web-plus/assets/useWindowSizeFn.fee40caf.js","/lamp-web-plus/assets/FullscreenOutlined.fdd43b18.js","/lamp-web-plus/assets/BasicForm.ba267815.js","/lamp-web-plus/assets/BasicForm.6e3c2182.css","/lamp-web-plus/assets/useFormItem.23c9ece5.js","/lamp-web-plus/assets/index.658efdb1.js","/lamp-web-plus/assets/index.f208c793.js","/lamp-web-plus/assets/get.4daef9c8.js","/lamp-web-plus/assets/conductUtil.8c9b1169.js","/lamp-web-plus/assets/iconUtil.018c1850.js","/lamp-web-plus/assets/_baseSet.e7326e09.js","/lamp-web-plus/assets/hasIn.babd797c.js","/lamp-web-plus/assets/FileOutlined.44378449.js","/lamp-web-plus/assets/user.45434715.js","/lamp-web-plus/assets/transButton.bd1bd746.js","/lamp-web-plus/assets/DeleteOutlined.e9575d1c.js","/lamp-web-plus/assets/commonEnum.da040d67.js","/lamp-web-plus/assets/index.57ea38db.js","/lamp-web-plus/assets/index.ffba0b1a.js","/lamp-web-plus/assets/css.b1edd3c8.js","/lamp-web-plus/assets/index.1aad4d44.js","/lamp-web-plus/assets/index.e5a6a79c.js","/lamp-web-plus/assets/uuid.2b29000c.js","/lamp-web-plus/assets/index.672abebf.js","/lamp-web-plus/assets/uniqBy.c4f2e7ec.js","/lamp-web-plus/assets/_baseIteratee.2e9463e3.js","/lamp-web-plus/assets/_baseProperty.74f89655.js","/lamp-web-plus/assets/findIndex.c7191173.js","/lamp-web-plus/assets/toInteger.e4331dbc.js","/lamp-web-plus/assets/index.68ce2096.js","/lamp-web-plus/assets/download.d97e990c.js","/lamp-web-plus/assets/index.03ecce9c.js","/lamp-web-plus/assets/index.9cf06c39.css","/lamp-web-plus/assets/index.9816e582.js","/lamp-web-plus/assets/UpOutlined.4269b743.js","/lamp-web-plus/assets/index.238a8995.js","/lamp-web-plus/assets/RedoOutlined.6634afa6.js","/lamp-web-plus/assets/dayjs.c72a52f8.js","/lamp-web-plus/assets/useState.9c0f957d.js","/lamp-web-plus/assets/index.f73b7b74.js","/lamp-web-plus/assets/Col.590da3fb.js","/lamp-web-plus/assets/responsiveObserve.7206f913.js","/lamp-web-plus/assets/canUseDom.0bf35682.js","/lamp-web-plus/assets/useSize.fb5b95d6.js","/lamp-web-plus/assets/index.fc5361f4.js","/lamp-web-plus/assets/useForm.93cfb83b.js","/lamp-web-plus/assets/header.d801b988.js","/lamp-web-plus/assets/index.4cbf17ba.js","/lamp-web-plus/assets/useBreakpoint.4a44e358.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:m}=S(),{getShowDoc:f}=O(),h=y(()=>u.getUserInfoState),[v,{openModal:g}]=R();function s(){g(!0)}function t(){u.confirmLoginOut()}function d(){$(N)}function i(o){switch(o.key){case"logout":t();break;case"doc":d();break;case"lock":s();break}}const p=y(()=>{const o=u.getUserInfoState;if(o.avatar){if(o.avatar.startsWith("http://")||o.avatar.startsWith("https://"))return o.avatar}return o.avatar});return{prefixCls:e,t:m,getUserInfo:h,handleMenuClick:i,getShowDoc:f,getAvatar:p,register:v}}}),Q=`.vben-header-user-dropdown {
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
}`;function E(e,m,f,h,v,g){const s=r("Avatar"),t=r("MenuItem"),d=r("MenuDivider"),i=r("Menu"),p=r("Dropdown"),o=r("LockAction");return c(),l(z,null,[n(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:a(()=>[n(i,{onClick:e.handleMenuClick},{default:a(()=>[e.getShowDoc?(c(),l(t,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):C("",!0),e.getShowDoc?(c(),l(d,{key:1})):C("",!0),n(t,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"]),n(t,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:a(()=>[n("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[n(s,{src:e.getAvatar,size:26,style:{"margin-right":"12px"}},{default:a(()=>[n(s,{size:26},{default:a(()=>{var _,b;return[U(M((b=(_=e.getUserInfo)==null?void 0:_.name)==null?void 0:b.charAt(0)),1)]}),_:1})]),_:1},8,["src"]),n("span",{class:`${e.prefixCls}__info hidden md:block`},[n("span",{class:[`${e.prefixCls}__name  `,"truncate"]},M(e.getUserInfo.name),3)],2)],2)]),_:1},8,["overlayClassName"]),n(o,{onRegister:e.register},null,8,["onRegister"])],64)}x.render=E;export default x;
