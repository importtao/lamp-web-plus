var b=Object.assign;import{aC as a,j as ce,ap as L,D as l,bc as de,d as R,c1 as ue,p as w,cW as fe,bl as pe,cp as me,bY as ge,ca as he,c9 as be,a$ as ve,w as h,k as H,ae as X,x as Ce,ai as G,V as T,r as v,cX as ye,n as M,J as C,o as F,G as Me,aG as P,bb as Fe,g as He,M as $e,N as A,s as x,L as I,q,cY as ke,b5 as Se,av as U,aB as J,aK as K,ci as Oe,aD as Q,aE as Z,y as ee,cj as we,E as V,aw as Te,ch as ne,aA as Pe}from"./index.f012a3f4.js";import{u as De}from"./useWindowSizeFn.21617b5b.js";import{F as Re,a as We}from"./FullscreenOutlined.db659752.js";var Qe=`.fullscreen-modal {
  overflow: hidden;
}
.fullscreen-modal .ant-modal {
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100%;
}
.fullscreen-modal .ant-modal-content {
  height: 100%;
}
.ant-modal {
  width: 520px;
  padding-bottom: 0;
}
.ant-modal .scrollbar {
  padding: 14px;
}
.ant-modal-title {
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
}
.ant-modal-title .base-title {
  cursor: move !important;
}
.ant-modal .ant-modal-body {
  padding: 0;
}
.ant-modal .ant-modal-body > .scrollbar > .scrollbar__bar.is-horizontal {
  display: none;
}
.ant-modal-large {
  top: 60px;
}
.ant-modal-large--mini {
  top: 16px;
}
.ant-modal-header {
  padding: 16px;
}
.ant-modal-content {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.ant-modal-footer button + button {
  margin-left: 10px;
}
.ant-modal-close {
  font-weight: normal;
  outline: none;
}
.ant-modal-close-x {
  display: inline-block;
  width: 96px;
  height: 56px;
  line-height: 56px;
}
.ant-modal-confirm-body .ant-modal-confirm-content > * {
  color: #909399;
}
.ant-modal-confirm-confirm.error .ant-modal-confirm-body > .anticon {
  color: #ED6F6F;
}
.ant-modal-confirm-btns .ant-btn:last-child {
  margin-right: 0;
}
.ant-modal-confirm-info .ant-modal-confirm-body > .anticon {
  color: #EFBD47;
}
.ant-modal-confirm-confirm.success .ant-modal-confirm-body > .anticon {
  color: #55D187;
}
.ant-modal-confirm .ant-modal-body {
  padding: 24px !important;
}
@media screen and (max-height: 600px) {
  .ant-modal {
    top: 60px;
  }
}
@media screen and (max-height: 540px) {
  .ant-modal {
    top: 30px;
  }
}
@media screen and (max-height: 480px) {
  .ant-modal {
    top: 10px;
  }
}`;const{t:oe}=ce(),Ee={visible:a.bool,scrollTop:a.bool.def(!0),height:a.number,minHeight:a.number,draggable:a.bool.def(!0),centered:a.bool,cancelText:a.string.def(oe("common.cancelText")),okText:a.string.def(oe("common.okText")),closeFunc:Function},z=Object.assign({},Ee,{defaultFullscreen:a.bool,canFullscreen:a.bool.def(!0),wrapperFooterOffset:a.number.def(0),helpMessage:[String,Array],useWrapper:a.bool.def(!0),loading:a.bool,loadingTip:a.string,showCancelBtn:a.bool.def(!0),showOkBtn:a.bool.def(!0),wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:a.bool.def(!0),closeIcon:Object,confirmLoading:a.bool,destroyOnClose:a.bool,footer:Object,getContainer:Function,mask:a.bool.def(!0),maskClosable:a.bool.def(!0),keyboard:a.bool.def(!0),maskStyle:Object,okType:a.string.def("primary"),okButtonProps:Object,cancelButtonProps:Object,title:a.string,visible:a.bool,width:[String,Number],wrapClassName:a.string,zIndex:a.number});function Be(e){const s=(t,i)=>getComputedStyle(t)[i],r=t=>{if(!t)return;t.setAttribute("data-drag",l(e.draggable));const i=t.querySelector(".ant-modal-header"),n=t.querySelector(".ant-modal");!i||!n||!l(e.draggable)||(i.style.cursor="move",i.onmousedown=o=>{if(!o)return;const p=o.clientX,m=o.clientY,u=document.body.clientWidth,f=document.documentElement.clientHeight,g=n.offsetWidth,k=n.offsetHeight,S=n.offsetLeft,$=u-n.offsetLeft-g,O=n.offsetTop,N=f-n.offsetTop-k,D=s(n,"left"),E=s(n,"top");let B=+D,_=+E;D.includes("%")?(B=+document.body.clientWidth*(+D.replace(/%/g,"")/100),_=+document.body.clientHeight*(+E.replace(/%/g,"")/100)):(B=+D.replace(/px/g,""),_=+E.replace(/px/g,"")),document.onmousemove=function(d){let y=d.clientX-p,j=d.clientY-m;-y>S?y=-S:y>$&&(y=$),-j>O?j=-O:j>N&&(j=N),n.style.cssText+=`;left:${y+B}px;top:${j+_}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},c=()=>{const t=document.querySelectorAll(".ant-modal-wrap");for(const i of Array.from(t)){if(!i)continue;const n=s(i,"display"),o=i.getAttribute("data-drag");n!=="none"&&(o===null||l(e.destroyOnClose))&&r(i)}};L(()=>{!l(e.visible)||!l(e.draggable)||de(()=>{c()},30)})}function _e(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!pe(e)}var je=R({name:"Modal",inheritAttrs:!1,props:z,setup(e,{slots:s}){const{visible:r,draggable:c,destroyOnClose:t}=ue(e),i=ge();return Be({visible:r,destroyOnClose:t,draggable:c}),()=>{let n;const o=b(b({},l(i)),e);return w(me,o,_e(n=fe(s))?n:{default:()=>[n]})}}});const te=Symbol();function xe(e){return he(e,te)}function Ne(){return be(te)}var le=R({name:"ModalWrapper",components:{ScrollContainer:ve},inheritAttrs:!1,props:{loading:a.bool,useWrapper:a.bool.def(!0),modalHeaderHeight:a.number.def(57),modalFooterHeight:a.number.def(74),minHeight:a.number.def(200),height:a.number,footerOffset:a.number.def(0),visible:a.bool,fullScreen:a.bool,loadingTip:a.string},emits:["height-change","ext-height"],setup(e,{emit:s}){const r=h(null),c=h(null),t=h(0),i=h(0);let n=0;De(m.bind(null,!1)),xe({redoModalHeight:m});const o=H(()=>({minHeight:`${e.minHeight}px`,height:`${l(t)}px`}));L(()=>{e.useWrapper&&m()}),X(()=>e.fullScreen,u=>{m(),u?i.value=t.value:t.value=i.value}),Ce(()=>{const{modalHeaderHeight:u,modalFooterHeight:f}=e;s("ext-height",u+f)}),G(()=>{});async function p(){T(()=>{var f;const u=l(r);!u||(f=u==null?void 0:u.scrollTo)==null||f.call(u,0)})}async function m(){if(!e.visible)return;const u=l(r);if(!u)return;const f=u.$el.parentElement;if(!!f){f.style.padding="0",await T();try{const g=f.parentElement&&f.parentElement.parentElement;if(!g)return;const k=getComputedStyle(g).top,S=Number.parseInt(k);let $=window.innerHeight-S*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;S<40&&($-=26),await T();const O=l(c);if(!O)return;await T(),n=O.scrollHeight,e.fullScreen?t.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:t.value=e.height?e.height:n>$?$:n,s("height-change",l(t))}catch(g){console.log(g)}}}return{wrapperRef:r,spinRef:c,spinStyle:o,scrollTop:p,setModalHeight:m}}});function Le(e,s,r,c,t,i){const n=v("ScrollContainer"),o=ye("loading");return F(),M(n,{ref:"wrapperRef"},{default:C(()=>[Me(w("div",{ref:"spinRef",style:e.spinStyle,"loading-tip":e.loadingTip},[P(e.$slots,"default")],12,["loading-tip"]),[[o,e.loading]])]),_:3},512)}le.render=Le;var ae=R({name:"ModalClose",components:{FullscreenExitOutlined:Re,FullscreenOutlined:We,CloseOutlined:Fe},props:{canFullscreen:a.bool.def(!0),fullScreen:a.bool},emits:["cancel","fullscreen"],setup(e,{emit:s}){const{prefixCls:r}=He("basic-modal-close"),c=H(()=>[r,`${r}--custom`,{[`${r}--can-full`]:e.canFullscreen}]);function t(){s("cancel")}function i(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),s("fullscreen")}return{getClass:c,prefixCls:r,handleCancel:t,handleFullScreen:i}}}),Ze=`.vben-basic-modal-close {
  display: flex;
  height: 95%;
  align-items: center;
}
.vben-basic-modal-close > span {
  margin-left: 48px;
  font-size: 16px;
}
.vben-basic-modal-close--can-full > span {
  margin-left: 12px;
}
.vben-basic-modal-close:not(.vben-basic-modal-close--can-full) > span:nth-child(1):hover {
  font-weight: 700;
}
.vben-basic-modal-close span:nth-child(1) {
  display: inline-block;
  padding: 10px;
}
.vben-basic-modal-close span:nth-child(1):hover {
  color: #0960bd;
}
.vben-basic-modal-close span:nth-child(2):hover {
  color: #ED6F6F;
}`;function Ve(e,s,r,c,t,i){const n=v("FullscreenExitOutlined"),o=v("FullscreenOutlined"),p=v("CloseOutlined");return F(),M("div",{class:e.getClass},[e.canFullscreen?(F(),M($e,{key:0},[e.fullScreen?(F(),M(n,{key:0,role:"full",onClick:e.handleFullScreen},null,8,["onClick"])):(F(),M(o,{key:1,role:"close",onClick:e.handleFullScreen},null,8,["onClick"]))],64)):A("",!0),w(p,{onClick:e.handleCancel},null,8,["onClick"])],2)}ae.render=Ve;var se=R({name:"BasicModalFooter",props:z,emits:["ok","cancel"],setup(e,{emit:s}){function r(){s("ok")}function c(){s("cancel")}return{handleOk:r,handleCancel:c}}});function Ae(e,s,r,c,t,i){const n=v("a-button");return F(),M("div",null,[P(e.$slots,"insertFooter"),e.showCancelBtn?(F(),M(n,x({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:C(()=>[I(q(e.cancelText),1)]),_:1},16,["onClick"])):A("",!0),P(e.$slots,"centerFooter"),e.showOkBtn?(F(),M(n,x({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:C(()=>[I(q(e.okText),1)]),_:1},16,["type","onClick","loading"])):A("",!0),P(e.$slots,"appendFooter")])}se.render=Ae;var re=R({name:"BasicModalHeader",components:{BasicTitle:ke},props:{helpMessage:{type:[String,Array]},title:a.string}});function Ie(e,s,r,c,t,i){const n=v("BasicTitle");return F(),M(n,{helpMessage:e.helpMessage},{default:C(()=>[I(q(e.title),1)]),_:1},8,["helpMessage"])}re.render=Ie;function qe(e){const s=h(!1),r=H(()=>{const t=l(e.wrapClassName)||"";return l(s)?`fullscreen-modal ${t} `:l(t)});function c(t){t&&t.stopPropagation(),s.value=!l(s)}return{getWrapClassName:r,handleFullScreen:c,fullScreenRef:s}}var ie=R({name:"BasicModal",components:{Modal:je,ModalWrapper:le,ModalClose:ae,ModalFooter:se,ModalHeader:re},inheritAttrs:!1,props:z,emits:["visible-change","height-change","cancel","ok","register"],setup(e,{emit:s,attrs:r}){const c=h(!1),t=h(null),i=h(null),n=h(0),o={setModalProps:N,emitVisible:void 0,redoModalHeight:()=>{T(()=>{l(i)&&l(i).setModalHeight()})}},p=K();p&&s("register",o,p.uid);const m=H(()=>b(b({},e),l(t))),{handleFullScreen:u,getWrapClassName:f,fullScreenRef:g}=qe({modalWrapperRef:i,extHeightRef:n,wrapClassName:Se(m.value,"wrapClassName")}),k=H(()=>{const d=b(b({},l(m)),{visible:l(c),title:void 0});return b(b({},d),{wrapClassName:l(f)})}),S=H(()=>{const d=b(b({},r),l(k));return l(g)?U(d,"height"):d}),$=H(()=>{if(!l(g))return l(k).height});L(()=>{c.value=!!e.visible,g.value=!!e.defaultFullscreen}),X(()=>l(c),d=>{var y;s("visible-change",d),p&&((y=o.emitVisible)==null||y.call(o,d,p.uid)),T(()=>{e.scrollTop&&d&&l(i)&&l(i).scrollTop()})},{immediate:!1});async function O(d){if(d==null||d.stopPropagation(),e.closeFunc&&J(e.closeFunc)){const y=await e.closeFunc();c.value=!y;return}c.value=!1,s("cancel")}function N(d){t.value=Oe(l(t)||{},d),!!Reflect.has(d,"visible")&&(c.value=!!d.visible)}function D(){s("ok")}function E(d){s("height-change",d)}function B(d){n.value=d}function _(d){!e.canFullscreen||(d.stopPropagation(),u(d))}return{handleCancel:O,getBindValue:S,getProps:k,handleFullScreen:u,fullScreenRef:g,getMergeProps:m,handleOk:D,visibleRef:c,omit:U,modalWrapperRef:i,handleExtHeight:B,handleHeightChange:E,handleTitleDbClick:_,getWrapperHeight:$}}});function ze(e,s,r,c,t,i){const n=v("ModalClose"),o=v("ModalHeader"),p=v("ModalFooter"),m=v("ModalWrapper"),u=v("Modal");return F(),M(u,x({onCancel:e.handleCancel},e.getBindValue),Q({default:C(()=>[w(m,x({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"visible","height"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:C(()=>[P(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:C(()=>[w(n,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])])},e.$slots.title?void 0:{name:"title",fn:C(()=>[w(o,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])])},e.$slots.footer?void 0:{name:"footer",fn:C(()=>[w(p,x(e.getProps,{onOk:e.handleOk,onCancel:e.handleCancel}),Q({_:2},[Z(Object.keys(e.$slots),f=>({name:f,fn:C(g=>[P(e.$slots,f,g)])}))]),1040,["onOk","onCancel"])])},Z(Object.keys(e.omit(e.$slots,"default")),f=>({name:f,fn:C(g=>[P(e.$slots,f,g)])}))]),1040,["onCancel"])}ie.render=ze;const W=ee({}),Y=ee({});function Ye(){const e=h(null),s=h(!1),r=h("");function c(n,o){r.value=o,G(()=>{e.value=null,s.value=!1,W[l(r)]=null}),!(l(s)&&we()&&n===l(e))&&(e.value=n,n.emitVisible=(p,m)=>{Y[m]=p})}const t=()=>{const n=l(e);return n||ne("useModal instance is undefined!"),n},i={setModalProps:n=>{var o;(o=t())==null||o.setModalProps(n)},getVisible:H(()=>Y[~~l(r)]),redoModalHeight:()=>{var n,o;(o=(n=t())==null?void 0:n.redoModalHeight)==null||o.call(n)},openModal:(n=!0,o,p=!0)=>{var u;if((u=t())==null||u.setModalProps({visible:n}),!o)return;if(p){W[l(r)]=null,W[l(r)]=V(o);return}Te(V(W[l(r)]),V(o))||(W[l(r)]=V(o))}};return[c,i]}const Xe=e=>{const s=h(null),r=K(),c=h(""),t=()=>{const n=l(s);return n||ne("useModalInner instance is undefined!"),n},i=(n,o)=>{Pe(()=>{s.value=null}),c.value=o,s.value=n,r==null||r.emit("register",n,o)};return L(()=>{const n=W[l(c)];!n||!e||!J(e)||T(()=>{e(n)})}),[i,{changeLoading:(n=!0)=>{var o;(o=t())==null||o.setModalProps({loading:n})},getVisible:H(()=>Y[~~l(c)]),changeOkLoading:(n=!0)=>{var o;(o=t())==null||o.setModalProps({confirmLoading:n})},closeModal:()=>{var n;(n=t())==null||n.setModalProps({visible:!1})},setModalProps:n=>{var o;(o=t())==null||o.setModalProps(n)}}]};export{ie as _,Xe as a,Ye as b,Ne as u};
