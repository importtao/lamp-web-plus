import{i as e,c as o,t as u,a as v,b as l}from"./index.ff8e7350.js";function I(r,i,_,a){if(!e(r))return r;i=o(i,r);for(var t=-1,x=i.length,g=x-1,s=r;s!=null&&++t<x;){var n=u(i[t]),f=_;if(n==="__proto__"||n==="constructor"||n==="prototype")return r;if(t!=g){var d=s[n];f=a?a(d,n,s):void 0,f===void 0&&(f=e(d)?d:v(i[t+1])?[]:{})}l(s,n,f),s=s[n]}return r}export{I as b};
