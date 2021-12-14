import r from"./TargetContent.e2e1c602.js";import{d as p,ep as c,r as n,o as m,n as d,J as t,p as e}from"./index.b7a14d4f.js";import{_ as l}from"./PageWrapper.62f72559.js";import"./index.37305df8.js";import"./index.44eb537e.js";import"./UpOutlined.08898d4e.js";import"./PlusOutlined.5bcc416d.js";import"./index.173fb3cc.js";import"./Col.deca4875.js";import"./responsiveObserve.0e84fd18.js";import"./canUseDom.0bf35682.js";import"./vendor.352e3120.js";import"./usePageContext.03f0ffc0.js";import"./onMountedOrActivated.64fcf717.js";import"./index.aba8a851.js";import"./index.d9119902.js";import"./useBreakpoint.508a26d1.js";import"./useSize.a97ab731.js";import"./transButton.928b71e3.js";import"./ArrowLeftOutlined.70d092e9.js";var o=p({components:{LazyContainer:c,TargetContent:r,PageWrapper:l}}),E=`.lazy-base-demo-wrap {
  display: flex;
  width: 50%;
  height: 2000px;
  margin: 20px auto;
  text-align: center;
  background: #fff;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.lazy-base-demo-box {
  width: 300px;
  height: 300px;
}
.lazy-base-demo h1 {
  height: 1300px;
  margin: 20px 0;
}
.custom-enter {
  opacity: 0;
  transform: scale(0.4) translate(100%);
}
.custom-enter-to {
  opacity: 1;
}
.custom-enter-active {
  position: absolute;
  top: 0;
  width: 100%;
  transition: all 0.5s;
}
.custom-leave {
  opacity: 1;
}
.custom-leave-to {
  opacity: 0;
  transform: scale(0.4) translate(-100%);
}
.custom-leave-active {
  transition: all 0.5s;
}`;const _={class:"lazy-base-demo-wrap"},f=e("h1",null,"\u5411\u4E0B\u6EDA\u52A8",-1),u={class:"lazy-base-demo-box"};function x(j,b,g,h,v,y){const a=n("TargetContent"),s=n("LazyContainer"),i=n("PageWrapper");return m(),d(i,{title:"\u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u52A8\u753B\u793A\u4F8B",content:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u663E\u793A\u52A8\u753B"},{default:t(()=>[e("div",_,[f,e("div",u,[e(s,{transitionName:"custom"},{default:t(()=>[e(a)]),_:1})])])]),_:1})}o.render=x;export default o;
