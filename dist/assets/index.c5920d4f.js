import{d as L,cK as j,cn as k,bj as b,bd as D,aC as A,g as I,j as S,k as y,A as u,dP as O,aL as $,r,o as c,n as l,p as n,J as a,N as C,L as U,q as M,M as z}from"./index.ff8e7350.js";import{D as N}from"./siteSetting.31110d56.js";import{b as R}from"./useModal.1ae7183e.js";import{A as V}from"./index.e1e8b5a1.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.dd41c952.js";import"./FullscreenOutlined.f5cc85ae.js";import"./useBreakpoint.549ec32d.js";import"./responsiveObserve.936f38cb.js";import"./useSize.e519a3af.js";var x=L({name:"UserDropdown",components:{Dropdown:j,Menu:k,Avatar:V,MenuItem:b(()=>D(()=>import("./DropMenuItem.9cfeba05.js"),["/lamp-web-plus/assets/DropMenuItem.9cfeba05.js","/lamp-web-plus/assets/index.ff8e7350.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js"])),MenuDivider:k.Divider,LockAction:b(()=>D(()=>import("./LockModal.42f7a2fb.js"),["/lamp-web-plus/assets/LockModal.42f7a2fb.js","/lamp-web-plus/assets/LockModal.c2a09df5.css","/lamp-web-plus/assets/index.ff8e7350.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js","/lamp-web-plus/assets/useModal.1ae7183e.js","/lamp-web-plus/assets/useModal.b1a1b797.css","/lamp-web-plus/assets/useWindowSizeFn.dd41c952.js","/lamp-web-plus/assets/FullscreenOutlined.f5cc85ae.js","/lamp-web-plus/assets/BasicForm.7d393d3b.js","/lamp-web-plus/assets/BasicForm.6e3c2182.css","/lamp-web-plus/assets/useFormItem.4d35203f.js","/lamp-web-plus/assets/index.33f6c35a.js","/lamp-web-plus/assets/index.7b8b790f.js","/lamp-web-plus/assets/get.25e661a1.js","/lamp-web-plus/assets/conductUtil.2053f1c8.js","/lamp-web-plus/assets/iconUtil.57aac0ee.js","/lamp-web-plus/assets/_baseSet.47d9038f.js","/lamp-web-plus/assets/hasIn.cdeedf38.js","/lamp-web-plus/assets/FileOutlined.c1895460.js","/lamp-web-plus/assets/user.301754be.js","/lamp-web-plus/assets/transButton.8f04232b.js","/lamp-web-plus/assets/DeleteOutlined.11a704c5.js","/lamp-web-plus/assets/commonEnum.da040d67.js","/lamp-web-plus/assets/index.d0beec9f.js","/lamp-web-plus/assets/index.4c731c08.js","/lamp-web-plus/assets/css.b1edd3c8.js","/lamp-web-plus/assets/index.61e91689.js","/lamp-web-plus/assets/index.a9a6f329.js","/lamp-web-plus/assets/uuid.2b29000c.js","/lamp-web-plus/assets/index.0188a107.js","/lamp-web-plus/assets/uniqBy.ad809f18.js","/lamp-web-plus/assets/_baseIteratee.219a0b59.js","/lamp-web-plus/assets/_baseProperty.74f89655.js","/lamp-web-plus/assets/findIndex.fb260bab.js","/lamp-web-plus/assets/toInteger.3d2a7161.js","/lamp-web-plus/assets/index.2a7bb35e.js","/lamp-web-plus/assets/download.ff10bfc9.js","/lamp-web-plus/assets/index.84d10328.js","/lamp-web-plus/assets/index.9cf06c39.css","/lamp-web-plus/assets/index.71446dfd.js","/lamp-web-plus/assets/UpOutlined.b439f448.js","/lamp-web-plus/assets/index.d247982f.js","/lamp-web-plus/assets/RedoOutlined.581d77bd.js","/lamp-web-plus/assets/dayjs.92837c63.js","/lamp-web-plus/assets/useState.a76dde6b.js","/lamp-web-plus/assets/index.7e22ace8.js","/lamp-web-plus/assets/Col.1d424bff.js","/lamp-web-plus/assets/responsiveObserve.936f38cb.js","/lamp-web-plus/assets/canUseDom.0bf35682.js","/lamp-web-plus/assets/useSize.e519a3af.js","/lamp-web-plus/assets/index.3aa06684.js","/lamp-web-plus/assets/useForm.09fdf95d.js","/lamp-web-plus/assets/header.d801b988.js","/lamp-web-plus/assets/index.e1e8b5a1.js","/lamp-web-plus/assets/useBreakpoint.549ec32d.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:m}=S(),{getShowDoc:h}=O(),f=y(()=>u.getUserInfoState),[v,{openModal:g}]=R();function s(){g(!0)}function t(){u.confirmLoginOut()}function d(){$(N)}function i(o){switch(o.key){case"logout":t();break;case"doc":d();break;case"lock":s();break}}const p=y(()=>{const o=u.getUserInfoState;if(o.avatar){if(o.avatar.startsWith("http://")||o.avatar.startsWith("https://"))return o.avatar}return o.avatar});return{prefixCls:e,t:m,getUserInfo:f,handleMenuClick:i,getShowDoc:h,getAvatar:p,register:v}}}),Q=`.vben-header-user-dropdown {
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
}`;function E(e,m,h,f,v,g){const s=r("Avatar"),t=r("MenuItem"),d=r("MenuDivider"),i=r("Menu"),p=r("Dropdown"),o=r("LockAction");return c(),l(z,null,[n(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:a(()=>[n(i,{onClick:e.handleMenuClick},{default:a(()=>[e.getShowDoc?(c(),l(t,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):C("",!0),e.getShowDoc?(c(),l(d,{key:1})):C("",!0),n(t,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"]),n(t,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:a(()=>[n("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[n(s,{src:e.getAvatar,size:26,style:{"margin-right":"12px"}},{default:a(()=>[n(s,{size:26},{default:a(()=>{var _,w;return[U(M((w=(_=e.getUserInfo)==null?void 0:_.name)==null?void 0:w.charAt(0)),1)]}),_:1})]),_:1},8,["src"]),n("span",{class:`${e.prefixCls}__info hidden md:block`},[n("span",{class:[`${e.prefixCls}__name  `,"truncate"]},M(e.getUserInfo.name),3)],2)],2)]),_:1},8,["overlayClassName"]),n(o,{onRegister:e.register},null,8,["onRegister"])],64)}x.render=E;export default x;
