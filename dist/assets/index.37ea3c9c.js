import{d as T,w as _,y as k,k as a,D as n,ae as C,x as E,V as M,bh as $,p as u,c5 as I}from"./index.b6dfbfcf.js";import"./vendor.352e3120.js";const L={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}};var q=`.virtual-scroll {
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
}`;const f="virtual-scroll";function l(t,h="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${h}`}var V=T({name:"VirtualScroll",props:L,setup(t,{slots:h}){const o=_(null),r=k({first:0,last:0,scrollTop:0}),m=a(()=>parseInt(t.bench,10)),c=a(()=>parseInt(t.itemHeight,10)),g=a(()=>Math.max(0,r.first-n(m))),S=a(()=>Math.min((t.items||[]).length,r.last+n(m))),H=a(()=>({height:l((t.items||[]).length*n(c))})),N=a(()=>{const e={},i=l(t.height),s=l(t.minHeight),x=l(t.minWidth),v=l(t.maxHeight),w=l(t.maxWidth),y=l(t.width);return i&&(e.height=i),s&&(e.minHeight=s),x&&(e.minWidth=x),v&&(e.maxHeight=v),w&&(e.maxWidth=w),y&&(e.width=y),e});C([()=>t.itemHeight,()=>t.height],()=>{b()});function d(e){const i=n(o);if(!i)return 0;const s=parseInt(t.height||0,10)||i.clientHeight;return e+Math.ceil(s/n(c))}function R(){return Math.floor(r.scrollTop/n(c))}function b(){const e=n(o);!e||(r.scrollTop=e.scrollTop,r.first=R(),r.last=d(r.first))}function W(){const{items:e=[]}=t;return e.slice(n(g),n(S)).map(p)}function p(e,i){i+=n(g);const s=l(i*n(c));return u("div",{class:`${f}__item`,style:{top:s},key:i},[I(h,"default",{index:i,item:e})])}return E(()=>{r.last=d(0),M(()=>{const e=n(o);!e||$({el:e,name:"scroll",listener:b,wait:0})})}),()=>u("div",{class:f,style:n(N),ref:o},[u("div",{class:`${f}__container`,style:n(H)},[W()])])}});export default V;
