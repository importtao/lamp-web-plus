import r from"./TargetContent.c6525c68.js";import{d as c,ep as p,r as n,o as m,n as d,J as t,p as e}from"./index.b361f078.js";import{_ as l}from"./PageWrapper.3df1718a.js";import"./index.a4d5d3e5.js";import"./index.6ea0a64b.js";import"./UpOutlined.cbb592c6.js";import"./PlusOutlined.e0fec5ea.js";import"./index.6cab1e04.js";import"./Col.4346c2f2.js";import"./responsiveObserve.16e475dd.js";import"./canUseDom.0bf35682.js";import"./vendor.352e3120.js";import"./usePageContext.48026c97.js";import"./onMountedOrActivated.db240d29.js";import"./index.2682bd6c.js";import"./index.ad62d489.js";import"./useBreakpoint.3b9cff8d.js";import"./useSize.5dcbe36a.js";import"./transButton.7b09546d.js";import"./ArrowLeftOutlined.9183eb3a.js";var o=c({components:{LazyContainer:p,TargetContent:r,PageWrapper:l}}),E=`.lazy-base-demo-wrap {
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
}`;const _={class:"lazy-base-demo-wrap"},u=e("h1",null,"\u5411\u4E0B\u6EDA\u52A8",-1),f={class:"lazy-base-demo-box"};function b(x,j,g,h,v,y){const a=n("TargetContent"),s=n("LazyContainer"),i=n("PageWrapper");return m(),d(i,{title:"\u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u52A8\u753B\u793A\u4F8B",content:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u663E\u793A\u52A8\u753B"},{default:t(()=>[e("div",_,[u,e("div",f,[e(s,{transitionName:"custom"},{default:t(()=>[e(a)]),_:1})])])]),_:1})}o.render=b;export default o;
