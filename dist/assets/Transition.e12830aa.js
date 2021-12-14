import r from"./TargetContent.0aa38534.js";import{d as p,ep as c,r as n,o as m,n as d,J as t,p as e}from"./index.ff8e7350.js";import{_ as l}from"./PageWrapper.ed878922.js";import"./index.154cc65b.js";import"./index.4e9a0ef4.js";import"./UpOutlined.b439f448.js";import"./PlusOutlined.5ec69f0c.js";import"./index.3aa06684.js";import"./Col.1d424bff.js";import"./responsiveObserve.936f38cb.js";import"./canUseDom.0bf35682.js";import"./vendor.352e3120.js";import"./usePageContext.c47bb441.js";import"./onMountedOrActivated.8814f444.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./useBreakpoint.549ec32d.js";import"./useSize.e519a3af.js";import"./transButton.8f04232b.js";import"./ArrowLeftOutlined.e256a87d.js";var o=p({components:{LazyContainer:c,TargetContent:r,PageWrapper:l}}),E=`.lazy-base-demo-wrap {
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
}`;const f={class:"lazy-base-demo-wrap"},_=e("h1",null,"\u5411\u4E0B\u6EDA\u52A8",-1),u={class:"lazy-base-demo-box"};function x(j,b,g,h,v,y){const a=n("TargetContent"),s=n("LazyContainer"),i=n("PageWrapper");return m(),d(i,{title:"\u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u52A8\u753B\u793A\u4F8B",content:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u663E\u793A\u52A8\u753B"},{default:t(()=>[e("div",f,[_,e("div",u,[e(s,{transitionName:"custom"},{default:t(()=>[e(a)]),_:1})])])]),_:1})}o.render=x;export default o;
