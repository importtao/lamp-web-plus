import{d as v,aY as j,v as u,w as b,ex as g,D as l,F as y,r as a,o as x,n as F,J as s,p as t,L as h}from"./index.ff8e7350.js";import{_ as w}from"./PageWrapper.ed878922.js";import"./vendor.352e3120.js";import"./usePageContext.c47bb441.js";import"./onMountedOrActivated.8814f444.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./useBreakpoint.549ec32d.js";import"./responsiveObserve.936f38cb.js";import"./useSize.e519a3af.js";import"./transButton.8f04232b.js";import"./ArrowLeftOutlined.e256a87d.js";var c=v({name:"Copy",components:{CollapseContainer:j,PageWrapper:w,[u.name]:u},setup(){const e=b(""),{createMessage:o}=y(),{clipboardRef:r,copiedRef:p}=g();function i(){const n=l(e);if(!n){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}r.value=n,l(p)&&o.warning("copy success\uFF01")}return{handleCopy:i,value:e}}});const B={class:"flex justify-center"},$=h(" Copy ");function k(e,o,r,p,i,n){const d=a("a-input"),f=a("a-button"),m=a("CollapseContainer"),_=a("PageWrapper");return x(),F(_,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:s(()=>[t(m,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:s(()=>[t("div",B,[t(d,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[1]||(o[1]=C=>e.value=C)},null,8,["value"]),t(f,{type:"primary",onClick:e.handleCopy},{default:s(()=>[$]),_:1},8,["onClick"])])]),_:1})]),_:1})}c.render=k;export default c;
