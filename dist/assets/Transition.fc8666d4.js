import r from"./TargetContent.1492c025.js";import{d as p,ep as c,r as e,o as m,n as d,J as t,p as n}from"./index.0523a5a3.js";import{_ as l}from"./PageWrapper.40d43df1.js";import"./index.a91ea070.js";import"./index.08635ac9.js";import"./UpOutlined.a2803449.js";import"./PlusOutlined.3cbe2bbe.js";import"./index.4637d8b2.js";import"./Col.102f0df6.js";import"./responsiveObserve.43c11602.js";import"./canUseDom.0bf35682.js";import"./vendor.352e3120.js";import"./usePageContext.0fc2e04d.js";import"./onMountedOrActivated.a2faf533.js";import"./index.e2c95991.js";import"./index.814a8df7.js";import"./useBreakpoint.a9fc3198.js";import"./useSize.6627aa05.js";import"./transButton.555d93e9.js";import"./ArrowLeftOutlined.62657f64.js";var o=p({components:{LazyContainer:c,TargetContent:r,PageWrapper:l}}),E=`.lazy-base-demo-wrap {
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
}`;const _={class:"lazy-base-demo-wrap"},f=n("h1",null,"\u5411\u4E0B\u6EDA\u52A8",-1),u={class:"lazy-base-demo-box"};function x(j,g,h,v,y,b){const a=e("TargetContent"),s=e("LazyContainer"),i=e("PageWrapper");return m(),d(i,{title:"\u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u52A8\u753B\u793A\u4F8B",content:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u663E\u793A\u52A8\u753B"},{default:t(()=>[n("div",_,[f,n("div",u,[n(s,{transitionName:"custom"},{default:t(()=>[n(a)]),_:1})])])]),_:1})}o.render=x;export default o;
