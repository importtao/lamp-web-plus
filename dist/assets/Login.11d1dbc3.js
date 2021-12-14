import{d as f,e as _,f as b,u as h,g as u,j as v,k as w,m as j,r as e,o as y,n as F,p as n,q as a}from"./index.05ea33df.js";import k from"./LoginForm.b1a83c87.js";import L from"./ForgetPasswordForm.648f3790.js";import $ from"./RegisterForm.0a90a99a.js";import C from"./MobileForm.1fa747ab.js";import I from"./QrCodeForm.062f4b48.js";import"./vendor.352e3120.js";import"./LoginFormTitle.128c04f6.js";import"./index.48bbff73.js";import"./Col.8bf95754.js";import"./responsiveObserve.968aa5d0.js";import"./canUseDom.0bf35682.js";import"./index.cf387d6d.js";import"./index.e5a1f932.js";import"./_baseIteratee.6051ea54.js";import"./get.f4e2a1c0.js";import"./hasIn.3c39ff13.js";import"./_baseProperty.74f89655.js";import"./findIndex.0ad6ac98.js";import"./toInteger.e36ca646.js";import"./useSize.c28e111d.js";import"./index.be446867.js";import"./CountdownInput.3dfb9a42.js";import"./useFormItem.902ca43e.js";import"./index.fe88e9db.js";import"./index.8bf03fba.js";import"./download.5d8f05f1.js";var l=f({name:"Login",components:{AppLogo:_,LoginForm:k,ForgetPasswordForm:L,RegisterForm:$,MobileForm:C,QrCodeForm:I,AppLocalePicker:b},setup(){const o=h(),{prefixCls:i}=u("login"),{t:s}=v();return{t:s,prefixCls:i,title:w(()=>{var t;return(t=o==null?void 0:o.title)!=null?t:""}),showLocale:j.getShowPicker}}}),P="/assets/login-box-bg.9027741f.svg",hn=`.vben-login::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: -48%;
  background-image: url(__VITE_ASSET__81e24375__);
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  content: '';
}
.vben-login .vben-app-logo {
  position: absolute;
  top: 12px;
  height: 30px;
}
.vben-login .vben-app-logo__title {
  font-size: 16px;
  color: #fff;
}
.vben-login .vben-app-logo img {
  width: 32px;
}
.vben-login .container .vben-app-logo {
  display: flex;
  width: 60%;
  height: 80px;
}
.vben-login .container .vben-app-logo__title {
  font-size: 24px;
  color: #fff;
}
.vben-login .container .vben-app-logo img {
  width: 48px;
}
.vben-login .code-input {
  display: inline-block;
  vertical-align: middle;
}
.vben-login .code-image {
  display: inline-block;
  width: 115px;
  height: 42px;
  vertical-align: top;
  cursor: pointer;
}
.vben-login-sign-in-way .anticon {
  font-size: 22px;
  color: #888;
  cursor: pointer;
}
.vben-login-sign-in-way .anticon:hover {
  color: #0960bd;
}
.vben-login input:not([type='checkbox']) {
  min-width: 360px;
}
.vben-login .vben-countdown-input input {
  min-width: unset;
}
.vben-login .ant-divider-inner-text {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
}
@media (max-width: 1200px) {
  .vben-login {
    background: linear-gradient(180deg, #1c3faa, #1c3faa);
  }
  .vben-login::before {
    display: none;
  }
}
@media (max-width: 992px) {
  .vben-login input:not([type='checkbox']) {
    min-width: 300px;
  }
}
@media (max-width: 768px) {
  .vben-login input:not([type='checkbox']) {
    min-width: 280px;
  }
}
@media (max-width: 576px) {
  .vben-login input:not([type='checkbox']) {
    min-width: 180px;
  }
}`;const A={class:"-enter-x xl:hidden"},S={class:"container relative h-full py-2 mx-auto sm:px-10"},z={class:"flex h-full"},T={class:"hidden xl:flex xl:flex-col xl:w-6/12 min-h-full mr-4 pl-4"},D={class:"my-auto"},M={class:"mt-10 font-medium text-white -enter-x"},Q={class:"mt-4 text-3xl inline-block"},R={class:"mt-5 text-md text-white font-normal dark:text-gray-500 -enter-x"},B={class:"h-full xl:h-auto flex py-5 xl:py-0 xl:my-0 w-full xl:w-6/12"},E={class:"my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 py-8 sm:px-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto enter-x relative"};function V(o,i,s,t,q,G){const p=e("AppLocalePicker"),r=e("AppLogo"),m=e("LoginForm"),c=e("ForgetPasswordForm"),d=e("RegisterForm"),g=e("MobileForm"),x=e("QrCodeForm");return y(),F("div",{class:[o.prefixCls,"relative w-full h-full px-4"]},[n(p,{class:"absolute top-4 right-4 enter-x text-white xl:text-gray-600",showText:!1}),n("span",A,[n(r,{alwaysShowTitle:!0})]),n("div",S,[n("div",z,[n("div",T,[n(r,{class:"-enter-x"}),n("div",D,[n("img",{alt:o.title,src:P,class:"w-1/2 -mt-16 -enter-x"},null,8,["alt"]),n("div",M,[n("span",Q,a(o.t("sys.login.signInTitle")),1)]),n("div",R,a(o.t("sys.login.signInDesc")),1)])]),n("div",B,[n("div",E,[n(m),n(c),n(d),n(g),n(x)])])])])],2)}l.render=V;export default l;
