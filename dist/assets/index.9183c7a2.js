import{d as _,aY as g,w as C,r as s,o as F,n as j,J as o,p as t,L as n,q as h}from"./index.f012a3f4.js";import{u as m}from"./useFullScreen.96289f6a.js";import{_ as k}from"./PageWrapper.06ac3dfa.js";import"./vendor.352e3120.js";import"./usePageContext.2729de0d.js";import"./onMountedOrActivated.a84ead65.js";import"./index.df461530.js";import"./index.069b5dd9.js";import"./useBreakpoint.521f32f2.js";import"./responsiveObserve.40f9db24.js";import"./useSize.5c4412c9.js";import"./transButton.77ed102e.js";import"./ArrowLeftOutlined.61d94bda.js";var p=_({components:{CollapseContainer:g,PageWrapper:k},setup(){const e=C(null),{enterFullscreen:l,toggleFullscreen:a,isFullscreenRef:i,exitFullscreen:c}=m(),{toggleFullscreen:d}=m(e);return{enterFullscreen:l,toggleDom:d,toggleFullscreen:a,isFullscreenRef:i,exitFullscreen:c,domRef:e}}});const w=n(" Enter Window Full Screen "),S=n(" Toggle Window Full Screen "),b=n(" Exit Window Full Screen "),x=n(" Enter Dom Full Screen "),y={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},W=n(" Exit Dom Full Screen ");function v(e,l,a,i,c,d){const r=s("a-button"),u=s("CollapseContainer"),f=s("PageWrapper");return F(),j(f,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:o(()=>[t(u,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.enterFullscreen,class:"mr-2"},{default:o(()=>[w]),_:1},8,["onClick"]),t(r,{color:"success",onClick:e.toggleFullscreen,class:"mr-2"},{default:o(()=>[S]),_:1},8,["onClick"]),t(r,{color:"error",onClick:e.exitFullscreen,class:"mr-2"},{default:o(()=>[b]),_:1},8,["onClick"]),n(" Current State: "+h(e.isFullscreenRef),1)]),_:1}),t(u,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[x]),_:1},8,["onClick"])]),_:1}),t("div",y,[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[W]),_:1},8,["onClick"])],512)]),_:1})}p.render=v;export default p;
