var f=Object.assign;import{j as V,d as X,y as z,w as m,ae as C,ap as A,k as b,bh as F,D as r,bc as H,p as g,c5 as R,bw as q,eS as G}from"./index.ff8e7350.js";import{u as J}from"./useExpose.5f62a6bf.js";const{t:N}=V(),O={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:N("component.verify.dragText")},successText:{type:[String],default:N("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},K=f(f({},O),{src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}});var ee=`.darg-verify {
  position: relative;
  overflow: hidden;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.darg-verify-bar {
  position: absolute;
  width: 0;
  height: 36px;
  background: #55D187;
  border-radius: 4px;
}
.darg-verify-bar.to-left {
  width: 0 !important;
  transition: width 0.3s;
}
.darg-verify-content {
  position: absolute;
  top: 0;
  font-size: 12px;
  -webkit-text-size-adjust: none;
  background: -webkit-gradient(linear, left top, right top, color-stop(0, #333), color-stop(0.4, #333), color-stop(0.5, #fff), color-stop(0.6, #333), color-stop(1, #333));
  -webkit-animation: slidetounlock 3s infinite;
  animation: slidetounlock 3s infinite;
  -webkit-background-clip: text;
  -moz-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-text-fill-color: transparent;
}
.darg-verify-content.success {
  -webkit-text-fill-color: #fff;
}
.darg-verify-content > * {
  -webkit-text-fill-color: #333;
}
.darg-verify-action {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  cursor: move;
  background: #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
}
.darg-verify-action__icon {
  cursor: inherit;
}
.darg-verify-action.to-left {
  left: 0 !important;
  transition: left 0.3s;
}
@-webkit-keyframes slidetounlock {
  0% {
    background-position: -120px 0;
  }
  100% {
    background-position: 120px 0;
  }
}`,P=X({name:"BaseDargVerify",props:O,emits:["success","update:value","change","start","move","end"],setup(c,{emit:u,slots:k}){const n=z({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),_=m(null),v=m(null),x=m(null),p=m(null);C(()=>n.isPassing,e=>{if(e){const{startTime:s,endTime:o}=n,t=(o-s)/1e3;u("success",{isPassing:e,time:t.toFixed(1)}),u("update:value",e),u("change",e)}}),A(()=>{n.isPassing=!!c.value});const B=b(()=>{const{height:e,actionStyle:s}=c,o=`${parseInt(e)}px`;return f({left:0,width:o,height:o},s)}),L=b(()=>{const{height:e,width:s,circle:o,wrapStyle:t}=c,i=parseInt(e),a=`${parseInt(s)}px`;return f({width:a,height:`${i}px`,lineHeight:`${i}px`,borderRadius:o?i/2+"px":0},t)}),W=b(()=>{const{height:e,circle:s,barStyle:o}=c,t=parseInt(e);return f({height:`${t}px`,borderRadius:s?t/2+"px 0 0 "+t/2+"px":0},o)}),D=b(()=>{const{height:e,width:s,contentStyle:o}=c,t=`${parseInt(e)}px`,i=`${parseInt(s)}px`;return f({height:t,width:i},o)});function w(e){return e.pageX||e.touches[0].pageX}F({el:document,name:"mouseup",listener:()=>{n.isMoving&&y()}});function T(e){if(n.isPassing)return;const s=r(p);!s||(u("start",e),n.moveDistance=w(e)-parseInt(s.style.left.replace("px",""),10),n.startTime=new Date().getTime(),n.isMoving=!0)}function E(e){const s=parseInt(e.style.width),{width:o}=c,t=parseInt(o);return{offset:t-s-6,widthNum:t,actionWidth:s}}function $(e){const{isMoving:s,moveDistance:o}=n;if(s){const t=r(p),i=r(v);if(!t||!i)return;const{offset:a,widthNum:d,actionWidth:h}=E(t),l=w(e)-o;u("move",{event:e,moveDistance:o,moveX:l}),l>0&&l<=a?(t.style.left=`${l}px`,i.style.width=`${l+h/2}px`):l>a&&(t.style.left=`${d-h}px`,i.style.width=`${d-h/2}px`,c.isSlot||M())}}function S(e){const{isMoving:s,isPassing:o,moveDistance:t}=n;if(s&&!o){u("end",e);const i=r(p),a=r(v);if(!i||!a)return;const d=w(e)-t,{offset:h,widthNum:l,actionWidth:I}=E(i);d<h?c.isSlot?setTimeout(()=>{if(!c.value)y();else{const j=r(x);j&&(j.style.width=`${parseInt(a.style.width)}px`)}},0):y():(i.style.left=`${l-I}px`,a.style.width=`${l-I/2}px`,M()),n.isMoving=!1}}function M(){if(c.isSlot){y();return}n.endTime=new Date().getTime(),n.isPassing=!0,n.isMoving=!1}function y(){n.isMoving=!1,n.isPassing=!1,n.moveDistance=0,n.toLeft=!1,n.startTime=0,n.endTime=0;const e=r(p),s=r(v),o=r(x);!e||!s||!o||(n.toLeft=!0,H(()=>{n.toLeft=!1,e.style.left="0",s.style.width="0"},300),o.style.width=r(D).width)}return J({resume:y}),()=>{const e=()=>{const t=["darg-verify-bar"];return n.toLeft&&t.push("to-left"),g("div",{class:t,ref:v,style:r(W)},null)},s=()=>{const t=["darg-verify-content"],{isPassing:i}=n,{text:a,successText:d}=c;return i&&t.push("success"),g("div",{class:t,ref:x,style:r(D)},[R(k,"text",i)||(i?d:a)])},o=()=>{const t=["darg-verify-action"],{toLeft:i,isPassing:a}=n;return i&&t.push("to-left"),g("div",{class:t,onMousedown:T,onTouchstart:T,style:r(B),ref:p},[R(k,"actionIcon",a)||(a?g(q,{class:"darg-verify-action__icon"},null):g(G,{class:"darg-verify-action__icon"},null))])};return g("div",{class:"darg-verify",ref:_,style:r(L),onMousemove:$,onTouchmove:$,onMouseleave:S,onMouseup:S,onTouchend:S},[e(),s(),o()])}}}),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});export{P as B,Q as D,K as r};
