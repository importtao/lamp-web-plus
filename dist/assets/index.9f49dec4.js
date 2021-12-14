import{d as T,w as _,y as k,k as s,D as n,ae as C,x as E,V as M,bh as $,p as u,c5 as I}from"./index.0523a5a3.js";import"./vendor.352e3120.js";const L={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}};var q=`.virtual-scroll {
  position: relative;
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: auto;
  flex: 1 1 auto;
}
.virtual-scroll__container {
  display: block;
}
.virtual-scroll__item {
  position: absolute;
  right: 0;
  left: 0;
}`;const m="virtual-scroll";function a(t,h="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${h}`}var V=T({name:"VirtualScroll",props:L,setup(t,{slots:h}){const o=_(null),r=k({first:0,last:0,scrollTop:0}),f=s(()=>parseInt(t.bench,10)),c=s(()=>parseInt(t.itemHeight,10)),g=s(()=>Math.max(0,r.first-n(f))),S=s(()=>Math.min((t.items||[]).length,r.last+n(f))),H=s(()=>({height:a((t.items||[]).length*n(c))})),N=s(()=>{const e={},i=a(t.height),l=a(t.minHeight),b=a(t.minWidth),v=a(t.maxHeight),w=a(t.maxWidth),y=a(t.width);return i&&(e.height=i),l&&(e.minHeight=l),b&&(e.minWidth=b),v&&(e.maxHeight=v),w&&(e.maxWidth=w),y&&(e.width=y),e});C([()=>t.itemHeight,()=>t.height],()=>{x()});function d(e){const i=n(o);if(!i)return 0;const l=parseInt(t.height||0,10)||i.clientHeight;return e+Math.ceil(l/n(c))}function R(){return Math.floor(r.scrollTop/n(c))}function x(){const e=n(o);!e||(r.scrollTop=e.scrollTop,r.first=R(),r.last=d(r.first))}function W(){const{items:e=[]}=t;return e.slice(n(g),n(S)).map(p)}function p(e,i){i+=n(g);const l=a(i*n(c));return u("div",{class:`${m}__item`,style:{top:l},key:i},[I(h,"default",{index:i,item:e})])}return E(()=>{r.last=d(0),M(()=>{const e=n(o);!e||$({el:e,name:"scroll",listener:x,wait:0})})}),()=>u("div",{class:m,style:n(N),ref:o},[u("div",{class:`${m}__container`,style:n(H)},[W()])])}});export default V;
