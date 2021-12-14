import{d as v,j as k,g as x,k as j,A as b,eE as w,r as a,o as y,n as B,J as r,p as o,L as _,q as p,s as F}from"./index.05ea33df.js";import{_ as S,a as C}from"./useModal.024b9b70.js";import{_ as I}from"./BasicForm.2f71c419.js";import{u as $}from"./useForm.f47588eb.js";import{h as A}from"./header.d801b988.js";import{A as M}from"./index.03402249.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.bedcc730.js";import"./FullscreenOutlined.6ef047e2.js";import"./useFormItem.902ca43e.js";import"./index.faeec8a2.js";import"./index.cf387d6d.js";import"./get.f4e2a1c0.js";import"./conductUtil.82525e99.js";import"./iconUtil.d875d1ff.js";import"./_baseSet.e2b00d8d.js";import"./hasIn.3c39ff13.js";import"./FileOutlined.72b26251.js";import"./user.16e1967f.js";import"./transButton.9a1903a9.js";import"./DeleteOutlined.3986c5e6.js";import"./commonEnum.da040d67.js";import"./index.be446867.js";import"./index.8795eb20.js";import"./css.b1edd3c8.js";import"./index.c3f5e4ba.js";import"./index.cfb51f70.js";import"./uuid.2b29000c.js";import"./index.74eb6f9c.js";import"./uniqBy.6f8da1a0.js";import"./_baseIteratee.6051ea54.js";import"./_baseProperty.74f89655.js";import"./findIndex.0ad6ac98.js";import"./toInteger.e36ca646.js";import"./index.1393b71a.js";import"./download.5d8f05f1.js";import"./index.fe88e9db.js";import"./index.021ff727.js";import"./UpOutlined.b05eb3d5.js";import"./index.d265e78b.js";import"./RedoOutlined.d497a357.js";import"./dayjs.26660a9f.js";import"./useState.20f1f9ca.js";import"./index.e5a1f932.js";import"./Col.8bf95754.js";import"./responsiveObserve.968aa5d0.js";import"./canUseDom.0bf35682.js";import"./useSize.c28e111d.js";import"./index.48bbff73.js";import"./useBreakpoint.249417d5.js";var h=v({name:"LockModal",components:{BasicModal:S,BasicForm:I,Avatar:M},setup(){const{t:e}=k(),{prefixCls:m}=x("header-lock-modal"),l=j(()=>{var t;return(t=b.getUserInfoState)==null?void 0:t.name}),[c,{closeModal:f}]=C(),[u,{validateFields:s,resetFields:n}]=$({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});async function i(){const g=(await s()).password;f(),w.commitLockInfoState({isLock:!0,pwd:g}),await n()}const d=j(()=>{const t=b.getUserInfoState;if(t.avatar){if(t.avatar.startsWith("http://")||t.avatar.startsWith("https://"))return t.avatar}return t.avatar});return{t:e,getAvatar:d,prefixCls:m,getRealName:l,register:c,registerForm:u,handleLock:i,headerImg:A}}}),$e=`.vben-header-lock-modal__entry {
  position: relative;
  height: 240px;
  padding: 130px 30px 60px 30px;
  background: #fff;
  border-radius: 10px;
}
.vben-header-lock-modal__header {
  position: absolute;
  top: 0;
  left: calc(50% - 45px);
  width: auto;
  text-align: center;
}
.vben-header-lock-modal__header-img {
  width: 70px;
  border-radius: 50%;
}
.vben-header-lock-modal__header-name {
  margin-top: 5px;
}
.vben-header-lock-modal__footer {
  text-align: center;
}`;function R(e,m,l,c,f,u){const s=a("Avatar"),n=a("BasicForm"),i=a("a-button"),d=a("BasicModal");return y(),B(d,F({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:r(()=>[o("div",{class:`${e.prefixCls}__entry`},[o("div",{class:`${e.prefixCls}__header`},[o(s,{src:e.getAvatar,size:70},{default:r(()=>[o(s,{size:70},{default:r(()=>{var t;return[_(p((t=e.getRealName)==null?void 0:t.charAt(0)),1)]}),_:1})]),_:1},8,["src"]),o("p",{class:`${e.prefixCls}__header-name`},p(e.getRealName),3)],2),o(n,{onRegister:e.registerForm},null,8,["onRegister"]),o("div",{class:`${e.prefixCls}__footer`},[o(i,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:r(()=>[_(p(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}h.render=R;export default h;
