var f=Object.assign;import{er as k,D as F,d as D,es as h,w as _,y as A,c1 as W,r as l,cX as $,G as w,o as P,n as R,J as i,p as n,L as p}from"./index.05ea33df.js";import{_ as T}from"./PageWrapper.d9e1596c.js";import{A as L}from"./index.1393b71a.js";import"./vendor.352e3120.js";import"./usePageContext.918ba169.js";import"./onMountedOrActivated.a12ac1c0.js";import"./index.dbdd549b.js";import"./index.03402249.js";import"./useBreakpoint.249417d5.js";import"./responsiveObserve.968aa5d0.js";import"./useSize.c28e111d.js";import"./transButton.9a1903a9.js";import"./ArrowLeftOutlined.97d250aa.js";function y(e){let t,a=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const o=e;t=o.props||{},a=o.target||document.body}else t=e;const r=k(t);return[()=>{const o=F(a);!o||r.open(o)},()=>{r.close()}]}var C=D({components:{Loading:h,PageWrapper:T,[L.name]:L},setup(){const e=_(null),t=_(!1),a=A({absolute:!1,loading:!1,tip:"\u52A0\u8F7D\u4E2D..."}),[r,c]=y({tip:"\u52A0\u8F7D\u4E2D..."}),[d,o]=y({target:e,props:{tip:"\u52A0\u8F7D\u4E2D...",absolute:!0}});function s(j){a.absolute=j,a.loading=!0,setTimeout(()=>{a.loading=!1},2e3)}function u(){s(!1)}function m(){s(!0)}function g(){r(),setTimeout(()=>{c()},2e3)}function b(){d(),setTimeout(()=>{o()},2e3)}function v(){t.value=!0,setTimeout(()=>{t.value=!1},2e3)}return f({openCompFullLoading:u,openFnFullLoading:g,openFnWrapLoading:b,openCompAbsolute:m,wrapEl:e,loadingRef:t,openDirectiveLoading:v},W(a))}});const B=p(" \u5168\u5C4F Loading "),E=p(" \u5BB9\u5668\u5185 Loading "),O=p(" \u5168\u5C4F Loading "),N=p(" \u5BB9\u5668\u5185 Loading "),S=p(" \u6253\u5F00\u6307\u4EE4Loading ");function V(e,t,a,r,c,d){const o=l("a-alert"),s=l("a-button"),u=l("Loading"),m=l("PageWrapper"),g=$("loading");return w((P(),R(m,{"loading-tip":"\u52A0\u8F7D\u4E2D...",title:"Loading\u7EC4\u4EF6\u793A\u4F8B"},{default:i(()=>[n(o,{message:"\u7EC4\u4EF6\u65B9\u5F0F"}),n(s,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:i(()=>[B]),_:1},8,["onClick"]),n(s,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:i(()=>[E]),_:1},8,["onClick"]),n(u,{loading:e.loading,absolute:e.absolute,tip:e.tip},null,8,["loading","absolute","tip"]),n(o,{message:"\u51FD\u6570\u65B9\u5F0F"}),n(s,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:i(()=>[O]),_:1},8,["onClick"]),n(s,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:i(()=>[N]),_:1},8,["onClick"]),n(o,{message:"\u6307\u4EE4\u65B9\u5F0F"}),n(s,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:i(()=>[S]),_:1},8,["onClick"])]),_:1},512)),[[g,e.loadingRef]])}C.render=V;export default C;
