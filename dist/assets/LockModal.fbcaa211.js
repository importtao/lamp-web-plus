import{d as v,j as k,g as x,k as j,A as b,eE as w,r as a,o as y,n as B,J as r,p as o,L as _,q as p,s as F}from"./index.b361f078.js";import{_ as S,a as C}from"./useModal.7bdad3e3.js";import{_ as I}from"./BasicForm.13ecb12b.js";import{u as $}from"./useForm.ac288eb4.js";import{h as A}from"./header.d801b988.js";import{A as M}from"./index.ad62d489.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.d25090e5.js";import"./FullscreenOutlined.86c5b021.js";import"./useFormItem.17a96bc3.js";import"./index.325fce14.js";import"./index.ee85ced9.js";import"./get.cbc20f33.js";import"./conductUtil.7ef77030.js";import"./iconUtil.e9686cd8.js";import"./_baseSet.60a402c1.js";import"./hasIn.661f69c5.js";import"./FileOutlined.a4627299.js";import"./user.449909fc.js";import"./transButton.7b09546d.js";import"./DeleteOutlined.eab5616f.js";import"./commonEnum.da040d67.js";import"./index.8d41a8b1.js";import"./index.fe2e064e.js";import"./css.b1edd3c8.js";import"./index.fa7b5b48.js";import"./index.781b32b3.js";import"./uuid.2b29000c.js";import"./index.1c4eb95d.js";import"./uniqBy.22bab247.js";import"./_baseIteratee.700ae08f.js";import"./_baseProperty.74f89655.js";import"./findIndex.fe35620d.js";import"./toInteger.f515429e.js";import"./index.c25573d6.js";import"./download.8a0fd70b.js";import"./index.e7aa41c1.js";import"./index.80320b3c.js";import"./UpOutlined.cbb592c6.js";import"./index.08bfe127.js";import"./RedoOutlined.2709deaa.js";import"./dayjs.c73a8766.js";import"./useState.1cc54c32.js";import"./index.57e65500.js";import"./Col.4346c2f2.js";import"./responsiveObserve.16e475dd.js";import"./canUseDom.0bf35682.js";import"./useSize.5dcbe36a.js";import"./index.6cab1e04.js";import"./useBreakpoint.3b9cff8d.js";var h=v({name:"LockModal",components:{BasicModal:S,BasicForm:I,Avatar:M},setup(){const{t:e}=k(),{prefixCls:c}=x("header-lock-modal"),m=j(()=>{var t;return(t=b.getUserInfoState)==null?void 0:t.name}),[l,{closeModal:u}]=C(),[f,{validateFields:s,resetFields:n}]=$({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});async function i(){const g=(await s()).password;u(),w.commitLockInfoState({isLock:!0,pwd:g}),await n()}const d=j(()=>{const t=b.getUserInfoState;if(t.avatar){if(t.avatar.startsWith("http://")||t.avatar.startsWith("https://"))return t.avatar}return t.avatar});return{t:e,getAvatar:d,prefixCls:c,getRealName:m,register:l,registerForm:f,handleLock:i,headerImg:A}}}),$e=`.vben-header-lock-modal__entry {
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
}`;function R(e,c,m,l,u,f){const s=a("Avatar"),n=a("BasicForm"),i=a("a-button"),d=a("BasicModal");return y(),B(d,F({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:r(()=>[o("div",{class:`${e.prefixCls}__entry`},[o("div",{class:`${e.prefixCls}__header`},[o(s,{src:e.getAvatar,size:70},{default:r(()=>[o(s,{size:70},{default:r(()=>{var t;return[_(p((t=e.getRealName)==null?void 0:t.charAt(0)),1)]}),_:1})]),_:1},8,["src"]),o("p",{class:`${e.prefixCls}__header-name`},p(e.getRealName),3)],2),o(n,{onRegister:e.registerForm},null,8,["onRegister"]),o("div",{class:`${e.prefixCls}__footer`},[o(i,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:r(()=>[_(p(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}h.render=R;export default h;
