var g=Object.assign;import{_ as N}from"./PageWrapper.ed878922.js";import{d as h,aC as m,w as M,j as y,ej as B,ae as E,ek as S,dc as Y,cf as b,c4 as P,aH as k,cd as H,o as O,n as C,q as I,aY as R,y as W,c1 as A,r as j,J as f,p as a}from"./index.ff8e7350.js";import"./usePageContext.c47bb441.js";import"./onMountedOrActivated.8814f444.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./useBreakpoint.549ec32d.js";import"./responsiveObserve.936f38cb.js";import"./useSize.e519a3af.js";import"./transButton.8f04232b.js";import"./ArrowLeftOutlined.e256a87d.js";import"./vendor.352e3120.js";const p=1e3,d=p*60,v=d*60,w=v*24;var D=h({name:"Time",props:{value:m.oneOfType([m.number,m.instanceOf(Date),m.string]).isRequired,step:m.number.def(60),mode:m.oneOf(["date","datetime","relative"]).def("relative")},setup(t){const r=M(""),{t:s}=y();B(u,t.step*p),E(()=>t.value,()=>{u()},{immediate:!0});function _(){const{value:e}=t;let o=0;if(P(e)){const i=e.toString().length>10?e:e*1e3;o=new Date(i).getTime()}else k(e)?o=new Date(e).getTime():H(e)&&(o=e.getTime());return o}function u(){const{mode:e,value:o}=t,i=_();e==="relative"?r.value=T(i):e==="datetime"?r.value=S(o):e==="date"&&(r.value=Y(o))}function T(e){const o=new Date().getTime(),i=b(e).isBefore(o);let n=o-e;i||(n=-n);let l="",c=s(i?"component.time.before":"component.time.after");return n<p?l=s("component.time.just"):n<d?l=parseInt(n/p)+s("component.time.seconds")+c:n>=d&&n<v?l=Math.floor(n/d)+s("component.time.minutes")+c:n>=v&&n<w?l=Math.floor(n/v)+s("component.time.hours")+c:n>=w&&n<262386e4?l=Math.floor(n/w)+s("component.time.days")+c:n>=262386e4&&n<=3156786e4&&i?l=b(e).format("MM-DD-HH-mm"):l=b(e).format("YYYY"),l}return{date:r}}});function U(t,r,s,_,u,T){return O(),C("span",null,I(t.date),1)}D.render=U;var $=h({components:{PageWrapper:N,Time:D,CollapseContainer:R},setup(){const t=new Date().getTime(),r=W({time1:t-60*3*1e3,time2:t-86400*3*1e3});return g(g({},A(r)),{now:t})}});const q=a("br",null,null,-1),z=a("br",null,null,-1),F=a("br",null,null,-1),J=a("br",null,null,-1);function L(t,r,s,_,u,T){const e=j("Time"),o=j("CollapseContainer"),i=j("PageWrapper");return O(),C(i,{title:"\u65F6\u95F4\u7EC4\u4EF6\u793A\u4F8B"},{default:f(()=>[a(o,{title:"\u57FA\u7840\u793A\u4F8B"},{default:f(()=>[a(e,{value:t.time1},null,8,["value"]),q,a(e,{value:t.time2},null,8,["value"])]),_:1}),a(o,{title:"\u5B9A\u65F6\u66F4\u65B0",class:"my-4"},{default:f(()=>[a(e,{value:t.now,step:1},null,8,["value"]),z,a(e,{value:t.now,step:5},null,8,["value"])]),_:1}),a(o,{title:"\u5B9A\u65F6\u66F4\u65B0"},{default:f(()=>[a(e,{value:t.now,mode:"date"},null,8,["value"]),F,a(e,{value:t.now,mode:"datetime"},null,8,["value"]),J,a(e,{value:t.now},null,8,["value"])]),_:1})]),_:1})}$.render=L;export default $;
