import r from"./TargetContent.36c1463d.js";import{d as p,ep as c,r as t,o as m,n as d,J as e,p as n}from"./index.f012a3f4.js";import{_ as l}from"./PageWrapper.06ac3dfa.js";import"./index.126f0ac9.js";import"./index.fb19caf5.js";import"./UpOutlined.5f7f87c9.js";import"./PlusOutlined.0c40939d.js";import"./index.41a9c009.js";import"./Col.13d8b9cb.js";import"./responsiveObserve.40f9db24.js";import"./canUseDom.0bf35682.js";import"./vendor.352e3120.js";import"./usePageContext.2729de0d.js";import"./onMountedOrActivated.a84ead65.js";import"./index.df461530.js";import"./index.069b5dd9.js";import"./useBreakpoint.521f32f2.js";import"./useSize.5c4412c9.js";import"./transButton.77ed102e.js";import"./ArrowLeftOutlined.61d94bda.js";var o=p({components:{LazyContainer:c,TargetContent:r,PageWrapper:l}}),E=`.lazy-base-demo-wrap {
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
}`;const f={class:"lazy-base-demo-wrap"},_=n("h1",null,"\u5411\u4E0B\u6EDA\u52A8",-1),u={class:"lazy-base-demo-box"};function x(j,g,b,h,v,y){const a=t("TargetContent"),s=t("LazyContainer"),i=t("PageWrapper");return m(),d(i,{title:"\u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u52A8\u753B\u793A\u4F8B",content:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u663E\u793A\u52A8\u753B"},{default:e(()=>[n("div",f,[_,n("div",u,[n(s,{transitionName:"custom"},{default:e(()=>[n(a)]),_:1})])])]),_:1})}o.render=x;export default o;
