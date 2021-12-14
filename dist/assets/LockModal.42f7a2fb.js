import{d as v,j as k,g as x,k as j,A as b,eE as w,r as a,o as y,n as B,J as r,p as o,L as _,q as p,s as F}from"./index.ff8e7350.js";import{_ as S,a as C}from"./useModal.1ae7183e.js";import{_ as I}from"./BasicForm.7d393d3b.js";import{u as $}from"./useForm.09fdf95d.js";import{h as A}from"./header.d801b988.js";import{A as M}from"./index.e1e8b5a1.js";import"./vendor.352e3120.js";import"./useWindowSizeFn.dd41c952.js";import"./FullscreenOutlined.f5cc85ae.js";import"./useFormItem.4d35203f.js";import"./index.33f6c35a.js";import"./index.7b8b790f.js";import"./get.25e661a1.js";import"./conductUtil.2053f1c8.js";import"./iconUtil.57aac0ee.js";import"./_baseSet.47d9038f.js";import"./hasIn.cdeedf38.js";import"./FileOutlined.c1895460.js";import"./user.301754be.js";import"./transButton.8f04232b.js";import"./DeleteOutlined.11a704c5.js";import"./commonEnum.da040d67.js";import"./index.d0beec9f.js";import"./index.4c731c08.js";import"./css.b1edd3c8.js";import"./index.61e91689.js";import"./index.a9a6f329.js";import"./uuid.2b29000c.js";import"./index.0188a107.js";import"./uniqBy.ad809f18.js";import"./_baseIteratee.219a0b59.js";import"./_baseProperty.74f89655.js";import"./findIndex.fb260bab.js";import"./toInteger.3d2a7161.js";import"./index.2a7bb35e.js";import"./download.ff10bfc9.js";import"./index.84d10328.js";import"./index.71446dfd.js";import"./UpOutlined.b439f448.js";import"./index.d247982f.js";import"./RedoOutlined.581d77bd.js";import"./dayjs.92837c63.js";import"./useState.a76dde6b.js";import"./index.7e22ace8.js";import"./Col.1d424bff.js";import"./responsiveObserve.936f38cb.js";import"./canUseDom.0bf35682.js";import"./useSize.e519a3af.js";import"./index.3aa06684.js";import"./useBreakpoint.549ec32d.js";var h=v({name:"LockModal",components:{BasicModal:S,BasicForm:I,Avatar:M},setup(){const{t:e}=k(),{prefixCls:m}=x("header-lock-modal"),c=j(()=>{var t;return(t=b.getUserInfoState)==null?void 0:t.name}),[l,{closeModal:f}]=C(),[u,{validateFields:s,resetFields:n}]=$({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});async function i(){const g=(await s()).password;f(),w.commitLockInfoState({isLock:!0,pwd:g}),await n()}const d=j(()=>{const t=b.getUserInfoState;if(t.avatar){if(t.avatar.startsWith("http://")||t.avatar.startsWith("https://"))return t.avatar}return t.avatar});return{t:e,getAvatar:d,prefixCls:m,getRealName:c,register:l,registerForm:u,handleLock:i,headerImg:A}}}),$e=`.vben-header-lock-modal__entry {
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
