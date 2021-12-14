import r from"./TargetContent.571d15eb.js";import{d as p,ep as c,r as t,o as m,n as d,J as e,p as n}from"./index.b6dfbfcf.js";import{_ as l}from"./PageWrapper.69acb2a5.js";import"./index.4d2d1116.js";import"./index.d98a3c80.js";import"./UpOutlined.4269b743.js";import"./PlusOutlined.84d8b58b.js";import"./index.fc5361f4.js";import"./Col.590da3fb.js";import"./responsiveObserve.7206f913.js";import"./canUseDom.0bf35682.js";import"./vendor.352e3120.js";import"./usePageContext.4aadab4f.js";import"./onMountedOrActivated.9d53918d.js";import"./index.a846e3a0.js";import"./index.4cbf17ba.js";import"./useBreakpoint.4a44e358.js";import"./useSize.fb5b95d6.js";import"./transButton.bd1bd746.js";import"./ArrowLeftOutlined.7dae0225.js";var o=p({components:{LazyContainer:c,TargetContent:r,PageWrapper:l}}),E=`.lazy-base-demo-wrap {
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
}`;const _={class:"lazy-base-demo-wrap"},f=n("h1",null,"\u5411\u4E0B\u6EDA\u52A8",-1),u={class:"lazy-base-demo-box"};function b(x,j,g,h,v,y){const a=t("TargetContent"),s=t("LazyContainer"),i=t("PageWrapper");return m(),d(i,{title:"\u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u52A8\u753B\u793A\u4F8B",content:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u663E\u793A\u52A8\u753B"},{default:e(()=>[n("div",_,[f,n("div",u,[n(s,{transitionName:"custom"},{default:e(()=>[n(a)]),_:1})])])]),_:1})}o.render=b;export default o;
