import{M as l}from"./index.f8318f08.js";import{_}from"./PageWrapper.3df1718a.js";import{d as g,w as s,D as v,r as n,o as j,n as k,J as i,p,L as h}from"./index.b361f078.js";import"./usePageContext.48026c97.js";import"./onMountedOrActivated.db240d29.js";import"./index.2682bd6c.js";import"./index.ad62d489.js";import"./useBreakpoint.3b9cff8d.js";import"./responsiveObserve.16e475dd.js";import"./useSize.5dcbe36a.js";import"./transButton.7b09546d.js";import"./ArrowLeftOutlined.9183eb3a.js";import"./vendor.352e3120.js";var d=g({components:{MarkDown:l,PageWrapper:_},setup(){const e=s(null),t=s(`
# title

# content
`);function r(){const o=v(e);if(!o)return;o.getVditor().setTheme("dark")}function a(o){t.value=o}return{value:t,toggleTheme:r,markDownRef:e,handleChange:a}}});const b=h(" \u9ED1\u6697\u4E3B\u9898 ");function w(e,t,r,a,o,c){const m=n("a-button"),u=n("MarkDown"),f=n("PageWrapper");return j(),k(f,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:i(()=>[p(m,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:i(()=>[b]),_:1},8,["onClick"]),p(u,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])]),_:1})}d.render=w;export default d;
