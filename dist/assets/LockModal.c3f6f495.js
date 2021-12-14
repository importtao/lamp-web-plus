import{d as v,j as k,g as x,k as j,A as b,eE as w,r as a,o as y,n as B,J as r,p as o,L as _,q as p,s as F}from"./index.f012a3f4.js";import{_ as S,a as C}from"./useModal.31640c24.js";import{_ as I}from"./BasicForm.2d8a4167.js";import{u as $}from"./useForm.96bd58a3.js";import{h as A}from"./header.d801b988.js";import{A as M}from"./index.069b5dd9.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.21617b5b.js";import"./FullscreenOutlined.db659752.js";import"./useFormItem.828d968c.js";import"./index.656c6dbf.js";import"./index.6b5846e1.js";import"./get.4bb36d6d.js";import"./conductUtil.e383e830.js";import"./iconUtil.f2afc0cc.js";import"./_baseSet.77ab947c.js";import"./hasIn.e5f45297.js";import"./FileOutlined.dfec8941.js";import"./user.8beb92fb.js";import"./transButton.77ed102e.js";import"./DeleteOutlined.4af221e4.js";import"./commonEnum.da040d67.js";import"./index.a99c15a9.js";import"./index.8cfd22dd.js";import"./css.b1edd3c8.js";import"./index.ccba4a8f.js";import"./index.5919009b.js";import"./uuid.2b29000c.js";import"./index.3a3a0b83.js";import"./uniqBy.1b31fa16.js";import"./_baseIteratee.c907cd0a.js";import"./_baseProperty.74f89655.js";import"./findIndex.2bc5b0a2.js";import"./toInteger.87149fb4.js";import"./index.1df1593d.js";import"./download.09c2660b.js";import"./index.86f670f0.js";import"./index.22fa49e6.js";import"./UpOutlined.5f7f87c9.js";import"./index.fcff9c6a.js";import"./RedoOutlined.bbea3551.js";import"./dayjs.881e239d.js";import"./useState.b98aa3d0.js";import"./index.412350b3.js";import"./Col.13d8b9cb.js";import"./responsiveObserve.40f9db24.js";import"./canUseDom.0bf35682.js";import"./useSize.5c4412c9.js";import"./index.41a9c009.js";import"./useBreakpoint.521f32f2.js";var h=v({name:"LockModal",components:{BasicModal:S,BasicForm:I,Avatar:M},setup(){const{t:e}=k(),{prefixCls:m}=x("header-lock-modal"),c=j(()=>{var t;return(t=b.getUserInfoState)==null?void 0:t.name}),[l,{closeModal:f}]=C(),[u,{validateFields:s,resetFields:n}]=$({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});async function i(){const g=(await s()).password;f(),w.commitLockInfoState({isLock:!0,pwd:g}),await n()}const d=j(()=>{const t=b.getUserInfoState;if(t.avatar){if(t.avatar.startsWith("http://")||t.avatar.startsWith("https://"))return t.avatar}return t.avatar});return{t:e,getAvatar:d,prefixCls:m,getRealName:c,register:l,registerForm:u,handleLock:i,headerImg:A}}}),$e=`.vben-header-lock-modal__entry {
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
}`;function R(e,m,c,l,f,u){const s=a("Avatar"),n=a("BasicForm"),i=a("a-button"),d=a("BasicModal");return y(),B(d,F({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:r(()=>[o("div",{class:`${e.prefixCls}__entry`},[o("div",{class:`${e.prefixCls}__header`},[o(s,{src:e.getAvatar,size:70},{default:r(()=>[o(s,{size:70},{default:r(()=>{var t;return[_(p((t=e.getRealName)==null?void 0:t.charAt(0)),1)]}),_:1})]),_:1},8,["src"]),o("p",{class:`${e.prefixCls}__header-name`},p(e.getRealName),3)],2),o(n,{onRegister:e.registerForm},null,8,["onRegister"]),o("div",{class:`${e.prefixCls}__footer`},[o(i,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:r(()=>[_(p(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}h.render=R;export default h;
