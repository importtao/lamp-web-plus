import{_ as W}from"./PageWrapper.69acb2a5.js";import{d as X,aW as I,aX as M,r as z,cX as A,o as Y,n as D,G as q,p as F,aF as G}from"./index.b6dfbfcf.js";import"./usePageContext.4aadab4f.js";import"./onMountedOrActivated.9d53918d.js";import"./index.a846e3a0.js";import"./index.4cbf17ba.js";import"./useBreakpoint.4a44e358.js";import"./responsiveObserve.7206f913.js";import"./useSize.fb5b95d6.js";import"./transButton.bd1bd746.js";import"./ArrowLeftOutlined.7dae0225.js";import"./vendor.352e3120.js";var de=`.ripple-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
}
.ripple-effect {
  position: relative;
  z-index: 9999;
  width: 1px;
  height: 1px;
  margin-top: 0;
  margin-left: 0;
  pointer-events: none;
  border-radius: 50%;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}`;const f={event:"mousedown",transition:400},b={beforeMount:(t,e)=>{if(e.value===!1)return;const n=t.getAttribute("ripple-background");V(Object.keys(e.modifiers),f);const i=n||b.background,r=b.zIndex;t.addEventListener(f.event,c=>{H({event:c,el:t,background:i,zIndex:r})})},updated(t,e){var i,r;if(!e.value){(i=t==null?void 0:t.clearRipple)==null||i.call(t);return}const n=t.getAttribute("ripple-background");(r=t==null?void 0:t.setBackground)==null||r.call(t,n)}};function H({event:t,el:e,zIndex:n,background:i}){var L,R;const r=parseInt(getComputedStyle(e).borderWidth.replace("px","")),c=t.clientX||t.touches[0].clientX,m=t.clientY||t.touches[0].clientY,g=e.getBoundingClientRect(),{left:C,top:k}=g,{offsetWidth:_,offsetHeight:y}=e,{transition:B}=f,u=c-C,l=m-k,j=Math.max(u,_-u),w=Math.max(l,y-l),N=window.getComputedStyle(e),h=Math.sqrt(j*j+w*w),$=r>0?r:0,a=document.createElement("div"),s=document.createElement("div");a.className="ripple",Object.assign((L=a.style)!=null?L:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${B}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:n!=null?n:"9999",backgroundColor:i!=null?i:"rgba(0, 0, 0, 0.12)"}),s.className="ripple-container",Object.assign((R=s.style)!=null?R:{},{position:"absolute",left:`${0-$}px`,top:`${0-$}px`,height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const v=e.style.position.length>0?e.style.position:getComputedStyle(e).position;v!=="relative"&&(e.style.position="relative"),s.appendChild(a),e.appendChild(s),Object.assign(a.style,{marginTop:`${l}px`,marginLeft:`${u}px`});const{borderTopLeftRadius:T,borderTopRightRadius:O,borderBottomLeftRadius:P,borderBottomRightRadius:S}=N;Object.assign(s.style,{width:`${_}px`,height:`${y}px`,direction:"ltr",borderTopLeftRadius:T,borderTopRightRadius:O,borderBottomLeftRadius:P,borderBottomRightRadius:S}),setTimeout(()=>{var d;const o=`${h*2}px`;Object.assign((d=a.style)!=null?d:{},{width:o,height:o,marginLeft:`${u-h}px`,marginTop:`${l-h}px`})},0);function p(){setTimeout(()=>{a.style.backgroundColor="rgba(0, 0, 0, 0)"},250),setTimeout(()=>{var o;(o=s==null?void 0:s.parentNode)==null||o.removeChild(s)},850),e.removeEventListener("mouseup",p,!1),e.removeEventListener("mouseleave",p,!1),e.removeEventListener("dragstart",p,!1),setTimeout(()=>{let o=!0;for(let d=0;d<e.childNodes.length;d++)e.childNodes[d].className==="ripple-container"&&(o=!1);o&&(e.style.position=v!=="static"?v:"")},f.transition+260)}t.type==="mousedown"?(e.addEventListener("mouseup",p,!1),e.addEventListener("mouseleave",p,!1),e.addEventListener("dragstart",p,!1)):p(),e.setBackground=o=>{!o||(a.style.backgroundColor=o)}}function V(t,e){t.forEach(n=>{isNaN(Number(n))?e.event=n:e.transition=n})}var x=X({components:{PageWrapper:W},directives:{Ripple:b}}),ce=`.demo-box[data-v-e9493036] {
  display: flex;
  width: 300px;
  height: 300px;
  font-size: 24px;
  color: #fff;
  background: #408ede;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}`;const E=G();I("data-v-e9493036");const J={class:"demo-box"};M();const K=E((t,e,n,i,r,c)=>{const m=z("PageWrapper"),g=A("ripple");return Y(),D(m,{title:"Ripple\u793A\u4F8B"},{default:E(()=>[q(F("div",J," content ",512),[[g]])]),_:1})});x.render=K,x.__scopeId="data-v-e9493036";export default x;
