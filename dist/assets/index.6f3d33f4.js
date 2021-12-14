import{d as L,cK as j,cn as b,bj as k,bd as D,aC as A,g as I,j as S,k as y,A as u,dP as O,aL as $,r,o as c,n as l,p as n,J as a,N as C,L as U,q as M,M as z}from"./index.f012a3f4.js";import{D as N}from"./siteSetting.31110d56.js";import{b as R}from"./useModal.31640c24.js";import{A as V}from"./index.069b5dd9.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.21617b5b.js";import"./FullscreenOutlined.db659752.js";import"./useBreakpoint.521f32f2.js";import"./responsiveObserve.40f9db24.js";import"./useSize.5c4412c9.js";var x=L({name:"UserDropdown",components:{Dropdown:j,Menu:b,Avatar:V,MenuItem:k(()=>D(()=>import("./DropMenuItem.13af0f2d.js"),["/lamp/assets/DropMenuItem.13af0f2d.js","/lamp/assets/index.f012a3f4.js","/lamp/assets/index.03307a49.css","/lamp/assets/vendor.352e3120.js"])),MenuDivider:b.Divider,LockAction:k(()=>D(()=>import("./LockModal.c3f6f495.js"),["/lamp/assets/LockModal.c3f6f495.js","/lamp/assets/LockModal.c2a09df5.css","/lamp/assets/index.f012a3f4.js","/lamp/assets/index.03307a49.css","/lamp/assets/vendor.352e3120.js","/lamp/assets/useModal.31640c24.js","/lamp/assets/useModal.b1a1b797.css","/lamp/assets/useWindowSizeFn.21617b5b.js","/lamp/assets/FullscreenOutlined.db659752.js","/lamp/assets/BasicForm.2d8a4167.js","/lamp/assets/BasicForm.6e3c2182.css","/lamp/assets/useFormItem.828d968c.js","/lamp/assets/index.656c6dbf.js","/lamp/assets/index.6b5846e1.js","/lamp/assets/get.4bb36d6d.js","/lamp/assets/conductUtil.e383e830.js","/lamp/assets/iconUtil.f2afc0cc.js","/lamp/assets/_baseSet.77ab947c.js","/lamp/assets/hasIn.e5f45297.js","/lamp/assets/FileOutlined.dfec8941.js","/lamp/assets/user.8beb92fb.js","/lamp/assets/transButton.77ed102e.js","/lamp/assets/DeleteOutlined.4af221e4.js","/lamp/assets/commonEnum.da040d67.js","/lamp/assets/index.a99c15a9.js","/lamp/assets/index.8cfd22dd.js","/lamp/assets/css.b1edd3c8.js","/lamp/assets/index.ccba4a8f.js","/lamp/assets/index.5919009b.js","/lamp/assets/uuid.2b29000c.js","/lamp/assets/index.3a3a0b83.js","/lamp/assets/uniqBy.1b31fa16.js","/lamp/assets/_baseIteratee.c907cd0a.js","/lamp/assets/_baseProperty.74f89655.js","/lamp/assets/findIndex.2bc5b0a2.js","/lamp/assets/toInteger.87149fb4.js","/lamp/assets/index.1df1593d.js","/lamp/assets/download.09c2660b.js","/lamp/assets/index.86f670f0.js","/lamp/assets/index.9cf06c39.css","/lamp/assets/index.22fa49e6.js","/lamp/assets/UpOutlined.5f7f87c9.js","/lamp/assets/index.fcff9c6a.js","/lamp/assets/RedoOutlined.bbea3551.js","/lamp/assets/dayjs.881e239d.js","/lamp/assets/useState.b98aa3d0.js","/lamp/assets/index.412350b3.js","/lamp/assets/Col.13d8b9cb.js","/lamp/assets/responsiveObserve.40f9db24.js","/lamp/assets/canUseDom.0bf35682.js","/lamp/assets/useSize.5c4412c9.js","/lamp/assets/index.41a9c009.js","/lamp/assets/useForm.96bd58a3.js","/lamp/assets/header.d801b988.js","/lamp/assets/index.069b5dd9.js","/lamp/assets/useBreakpoint.521f32f2.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:m}=S(),{getShowDoc:h}=O(),f=y(()=>u.getUserInfoState),[v,{openModal:g}]=R();function s(){g(!0)}function t(){u.confirmLoginOut()}function d(){$(N)}function i(o){switch(o.key){case"logout":t();break;case"doc":d();break;case"lock":s();break}}const p=y(()=>{const o=u.getUserInfoState;if(o.avatar){if(o.avatar.startsWith("http://")||o.avatar.startsWith("https://"))return o.avatar}return o.avatar});return{prefixCls:e,t:m,getUserInfo:f,handleMenuClick:i,getShowDoc:h,getAvatar:p,register:v}}}),Q=`.vben-header-user-dropdown {
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
