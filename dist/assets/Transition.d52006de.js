import r from"./TargetContent.c2cc460c.js";import{d as p,ep as c,r as e,o as m,n as d,J as t,p as n}from"./index.05ea33df.js";import{_ as l}from"./PageWrapper.d9e1596c.js";import"./index.ff98d06f.js";import"./index.e2b3f20e.js";import"./UpOutlined.b05eb3d5.js";import"./PlusOutlined.cfc7a86d.js";import"./index.48bbff73.js";import"./Col.8bf95754.js";import"./responsiveObserve.968aa5d0.js";import"./canUseDom.0bf35682.js";import"./vendor.352e3120.js";import"./usePageContext.918ba169.js";import"./onMountedOrActivated.a12ac1c0.js";import"./index.dbdd549b.js";import"./index.03402249.js";import"./useBreakpoint.249417d5.js";import"./useSize.c28e111d.js";import"./transButton.9a1903a9.js";import"./ArrowLeftOutlined.97d250aa.js";var o=p({components:{LazyContainer:c,TargetContent:r,PageWrapper:l}}),E=`.lazy-base-demo-wrap {
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
}`;const _={class:"lazy-base-demo-wrap"},f=n("h1",null,"\u5411\u4E0B\u6EDA\u52A8",-1),u={class:"lazy-base-demo-box"};function x(j,b,g,h,v,y){const a=e("TargetContent"),s=e("LazyContainer"),i=e("PageWrapper");return m(),d(i,{title:"\u61D2\u52A0\u8F7D\u81EA\u5B9A\u4E49\u52A8\u753B\u793A\u4F8B",content:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6\u663E\u793A\u52A8\u753B"},{default:t(()=>[n("div",_,[f,n("div",u,[n(s,{transitionName:"custom"},{default:t(()=>[n(a)]),_:1})])])]),_:1})}o.render=x;export default o;
