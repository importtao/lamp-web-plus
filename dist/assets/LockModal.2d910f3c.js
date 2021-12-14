import{d as v,j as k,g as x,k as j,A as b,eE as w,r as a,o as y,n as B,J as r,p as o,L as _,q as p,s as F}from"./index.b7a14d4f.js";import{_ as S,a as C}from"./useModal.cb74101d.js";import{_ as I}from"./BasicForm.8a90524a.js";import{u as $}from"./useForm.1103fde3.js";import{h as A}from"./header.d801b988.js";import{A as M}from"./index.d9119902.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.1c78bb1f.js";import"./FullscreenOutlined.c2c9b8db.js";import"./useFormItem.3078eec7.js";import"./index.1fe375b7.js";import"./index.18e73f7c.js";import"./get.17b5f080.js";import"./conductUtil.b952d6da.js";import"./iconUtil.5323a4d2.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./user.d5977986.js";import"./transButton.928b71e3.js";import"./DeleteOutlined.123b484f.js";import"./commonEnum.da040d67.js";import"./index.f8f362f5.js";import"./index.2fe134dc.js";import"./css.b1edd3c8.js";import"./index.b7943f07.js";import"./index.82115275.js";import"./uuid.2b29000c.js";import"./index.5cf0b4b1.js";import"./uniqBy.272154d9.js";import"./_baseIteratee.580b2020.js";import"./_baseProperty.74f89655.js";import"./findIndex.ca0f29b6.js";import"./toInteger.085db34b.js";import"./index.9cae10d5.js";import"./download.19f0ec6f.js";import"./index.ba68f563.js";import"./index.bf350d2a.js";import"./UpOutlined.08898d4e.js";import"./index.4c37e48f.js";import"./RedoOutlined.2970476a.js";import"./dayjs.77e2c65c.js";import"./useState.9469ce58.js";import"./index.b5e3a742.js";import"./Col.deca4875.js";import"./responsiveObserve.0e84fd18.js";import"./canUseDom.0bf35682.js";import"./useSize.a97ab731.js";import"./index.173fb3cc.js";import"./useBreakpoint.508a26d1.js";var h=v({name:"LockModal",components:{BasicModal:S,BasicForm:I,Avatar:M},setup(){const{t:e}=k(),{prefixCls:m}=x("header-lock-modal"),c=j(()=>{var t;return(t=b.getUserInfoState)==null?void 0:t.name}),[l,{closeModal:u}]=C(),[f,{validateFields:s,resetFields:n}]=$({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});async function i(){const g=(await s()).password;u(),w.commitLockInfoState({isLock:!0,pwd:g}),await n()}const d=j(()=>{const t=b.getUserInfoState;if(t.avatar){if(t.avatar.startsWith("http://")||t.avatar.startsWith("https://"))return t.avatar}return t.avatar});return{t:e,getAvatar:d,prefixCls:m,getRealName:c,register:l,registerForm:f,handleLock:i,headerImg:A}}}),$e=`.vben-header-lock-modal__entry {
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
}`;function R(e,m,c,l,u,f){const s=a("Avatar"),n=a("BasicForm"),i=a("a-button"),d=a("BasicModal");return y(),B(d,F({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:r(()=>[o("div",{class:`${e.prefixCls}__entry`},[o("div",{class:`${e.prefixCls}__header`},[o(s,{src:e.getAvatar,size:70},{default:r(()=>[o(s,{size:70},{default:r(()=>{var t;return[_(p((t=e.getRealName)==null?void 0:t.charAt(0)),1)]}),_:1})]),_:1},8,["src"]),o("p",{class:`${e.prefixCls}__header-name`},p(e.getRealName),3)],2),o(n,{onRegister:e.registerForm},null,8,["onRegister"]),o("div",{class:`${e.prefixCls}__footer`},[o(i,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:r(()=>[_(p(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}h.render=R;export default h;
