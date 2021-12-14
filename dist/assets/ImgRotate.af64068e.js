var d=Object.assign;import{d as I,w as k,y as M,j as P,ae as $,k as _,p as a,D as g,L as j,s as C,eU as l,bc as O,aK as V}from"./index.b361f078.js";import{r as E,B as F}from"./DragVerify.a1543572.js";import"./vendor.352e3120.js";import"./useExpose.0ed0f0b1.js";var A=`.ir-dv {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ir-dv-img__wrap {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}
.ir-dv-img__wrap img {
  width: 100%;
  border-radius: 50%;
}
.ir-dv-img__wrap img.to-origin {
  transition: transform 0.3s;
}
.ir-dv-img__tip {
  position: absolute;
  bottom: 10px;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 30px;
  font-size: 12px;
  line-height: 30px;
  color: #fff;
  text-align: center;
}
.ir-dv-img__tip.success {
  background: rgba(85, 209, 135, 0.6);
}
.ir-dv-img__tip.error {
  background: rgba(237, 111, 111, 0.6);
}
.ir-dv-img__tip.normal {
  background: rgba(0, 0, 0, 0.3);
}
.ir-dv-drag__bar {
  margin-top: 20px;
}`,W=I({name:"ImgRotateDargVerify",inheritAttrs:!1,props:E,emits:["success","change","update:value"],setup(i,{emit:m,attrs:w}){const u=k(null),e=M({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:f}=P();$(()=>e.isPassing,t=>{if(t){const{startTime:n,endTime:r}=e,s=(r-n)/1e3;m("success",{isPassing:t,time:s.toFixed(1)}),m("change",t),m("update:value",t)}});const x=_(()=>{const{imgWrapStyle:t,imgWidth:n}=i;return d({width:`${n}px`,height:`${n}px`},t)}),b=_(()=>{const{minDegree:t,maxDegree:n}=i;return t===n?Math.floor(1+Math.random()*1)/10+1:1});function T(){e.startTime=new Date().getTime()}function y(t){e.draged=!0;const{imgWidth:n,height:r,maxDegree:s}=i,{moveX:c}=t,o=Math.ceil(c/(n-parseInt(r))*s*g(b));e.currentRotate=o,e.imgStyle=l("transform",`rotateZ(${e.randomRotate-o}deg)`)}function p(){const{minDegree:t,maxDegree:n}=i,r=Math.floor(t+Math.random()*(n-t));e.randomRotate=r,e.imgStyle=l("transform",`rotateZ(${r}deg)`)}function R(){const{randomRotate:t,currentRotate:n}=e,{diffDegree:r}=i;Math.abs(t-n)>=(r||20)?(e.imgStyle=l("transform",`rotateZ(${t}deg)`),e.toOrigin=!0,O(()=>{e.toOrigin=!1,e.showTip=!0},300)):D(),e.showTip=!0}function D(){e.isPassing=!0,e.endTime=new Date().getTime()}function h(){e.showTip=!1;const t=g(u);!t||(e.isPassing=!1,t.resume(),p())}const v=V();return v&&(v.resume=h),()=>{const{src:t}=i,{toOrigin:n,isPassing:r,startTime:s,endTime:c}=e,o=[];n&&o.push("to-origin");const S=(c-s)/1e3;return a("div",{class:"ir-dv"},[a("div",{class:"ir-dv-img__wrap",style:g(x)},[a("img",{src:t,onLoad:p,width:parseInt(i.width),class:o,style:e.imgStyle,onClick:()=>{h()}},null),e.showTip&&a("span",{class:["ir-dv-img__tip",e.isPassing?"success":"error"]},[e.isPassing?f("component.verify.time",{time:S.toFixed(1)}):f("component.verify.error")]),!e.showTip&&!e.draged&&a("span",{class:["ir-dv-img__tip","normal"]},[j("t('redoTip')")])]),a(F,C({class:"ir-dv-drag__bar",onMove:y,onEnd:R,onStart:T,ref:u},d(d({},w),i),{value:r,isSlot:!0}),null)])}}});export default W;
