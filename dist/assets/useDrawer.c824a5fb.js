var g=Object.assign;import{j as M,aC as i,d as L,g as V,k as b,r as k,o as w,n as h,M as ae,aG as v,s as P,J as C,L as j,q as T,N as B,cY as ie,p as y,a$ as le,w as _,bY as de,ci as q,D as a,E as O,c4 as ce,ap as z,ae as ue,aK as I,aB as G,V as Y,cX as pe,aD as x,G as fe,aE as ge,y as J,aA as K,cj as be,aw as we,ch as H}from"./index.05ea33df.js";import{A as he}from"./ArrowLeftOutlined.97d250aa.js";import{D as ve}from"./index.965e0ed2.js";const{t:U}=M(),W={confirmLoading:i.bool,showCancelBtn:i.bool.def(!0),cancelButtonProps:Object,cancelText:i.string.def(U("common.cancelText")),showOkBtn:i.bool.def(!0),okButtonProps:Object,okText:i.string.def(U("common.okText")),okType:i.string.def("primary"),showFooter:i.bool,footerHeight:{type:[String,Number],default:60}},me=g({isDetail:i.bool,title:i.string.def(""),loadingText:i.string,showDetailBack:i.bool.def(!0),visible:i.bool,loading:i.bool,maskClosable:i.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:i.bool,destroyOnClose:i.bool},W);var X=L({name:"BasicDrawerFooter",props:g(g({},W),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:s}){const{prefixCls:t}=V("basic-drawer-footer"),d=b(()=>{const n=`${e.height}`;return{height:n,lineHeight:n}});function l(){s("ok")}function u(){s("close")}return{handleOk:l,prefixCls:t,handleClose:u,getStyle:d}}}),Fe=`.vben-basic-drawer-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 12px 0 20px;
  text-align: right;
  background: #fff;
  border-top: 1px solid #d9d9d9;
}
.vben-basic-drawer-footer > * {
  margin-right: 8px;
}`;function Ce(e,s,t,d,l,u){const n=k("a-button");return e.showFooter||e.$slots.footer?(w(),h("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?v(e.$slots,"footer",{key:1}):(w(),h(ae,{key:0},[v(e.$slots,"insertFooter"),e.showCancelBtn?(w(),h(n,P({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:C(()=>[j(T(e.cancelText),1)]),_:1},16,["onClick"])):B("",!0),v(e.$slots,"centerFooter"),e.showOkBtn?(w(),h(n,P({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:C(()=>[j(T(e.okText),1)]),_:1},16,["type","onClick","loading"])):B("",!0),v(e.$slots,"appendFooter")],64))],6)):B("",!0)}X.render=Ce;var Q=L({name:"BasicDrawerHeader",components:{BasicTitle:ie,ArrowLeftOutlined:he},props:{isDetail:i.bool,showDetailBack:i.bool,title:i.string},emits:["close"],setup(e,{emit:s}){const{prefixCls:t}=V("basic-drawer-header");function d(){s("close")}return{prefixCls:t,handleClose:d}}}),Se=`.vben-basic-drawer-header {
  display: flex;
  height: 100%;
  align-items: center;
}
.vben-basic-drawer-header__back {
  padding: 0 12px;
  cursor: pointer;
}
.vben-basic-drawer-header__back:hover {
  color: #0960bd;
}
.vben-basic-drawer-header__twrap {
  flex: 1;
}
.vben-basic-drawer-header__toolbar {
  padding-right: 50px;
}`;const De={key:1};function ke(e,s,t,d,l,u){const n=k("BasicTitle"),r=k("ArrowLeftOutlined");return e.isDetail?(w(),h("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[y("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(w(),h("span",{key:0,onClick:s[1]||(s[1]=(...c)=>e.handleClose&&e.handleClose(...c))},[y(r,{class:`${e.prefixCls}__back`},null,8,["class"])])):B("",!0),e.title?(w(),h("span",De,T(e.title),1)):B("",!0)],2),y("span",{class:`${e.prefixCls}__toolbar`},[v(e.$slots,"titleToolbar")],2)],2)):(w(),h(n,{key:0,class:e.prefixCls},{default:C(()=>[v(e.$slots,"title"),j(" "+T(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}Q.render=ke;var Z=L({components:{Drawer:ve,ScrollContainer:le,DrawerFooter:X,DrawerHeader:Q},inheritAttrs:!1,props:me,emits:["visible-change","ok","close","register"],setup(e,{emit:s}){const t=_(!1),d=de(),l=_(null),{t:u}=M(),{prefixVar:n,prefixCls:r}=V("basic-drawer"),c={setDrawerProps:te,emitVisible:void 0},f=I();f&&s("register",c,f.uid);const D=b(()=>q(O(e),a(l))),m=b(()=>{const o=g(g(g({placement:"right"},a(d)),a(D)),{visible:a(t)});o.title=void 0;const{isDetail:p,width:S,wrapClassName:N,getContainer:se}=o;if(p){S||(o.width="100%");const E=`${r}__detail`;o.wrapClassName=N?`${N} ${E}`:E,se||(o.getContainer=`.${n}-layout-content`)}return o}),F=b(()=>g(g({},d),a(m))),A=b(()=>{const{footerHeight:o,showFooter:p}=a(m);return p&&o?ce(o)?`${o}px`:`${o.replace("px","")}px`:"0px"}),ee=b(()=>{const o=a(A);return{position:"relative",height:`calc(100% - ${o})`}}),ne=b(()=>{var o;return!!((o=a(m))==null?void 0:o.loading)});z(()=>{t.value=e.visible}),ue(()=>t.value,o=>{Y(()=>{var p;s("visible-change",o),f&&((p=c.emitVisible)==null||p.call(c,o,f.uid))})});async function re(o){const{closeFunc:p}=a(m);if(s("close",o),p&&G(p)){const S=await p();t.value=!S;return}t.value=!1}function te(o){l.value=q(a(l)||{},o),Reflect.has(o,"visible")&&(t.value=!!o.visible)}function oe(){s("ok")}return{onClose:re,t:u,prefixCls:r,getMergeProps:D,getScrollContentStyle:ee,getProps:m,getLoading:ne,getBindValues:F,getFooterHeight:A,handleOk:oe}}}),Le=`.vben-basic-drawer .ant-drawer-wrapper-body {
  overflow: hidden;
}
.vben-basic-drawer .ant-drawer-close:hover {
  color: #ED6F6F;
}
.vben-basic-drawer .ant-drawer-body {
  height: calc(100% - 48px);
  padding: 0;
  background-color: #fff;
}
.vben-basic-drawer .ant-drawer-body .scrollbar__wrap {
  padding: 16px !important;
  margin-bottom: 0 !important;
}
.vben-basic-drawer .ant-drawer-body > .scrollbar > .scrollbar__bar.is-horizontal {
  display: none;
}
.vben-basic-drawer__detail {
  position: absolute;
}
.vben-basic-drawer__detail .ant-drawer-header {
  width: 100%;
  height: 40px;
  padding: 0;
  border-top: 1px solid #d9d9d9;
  box-sizing: border-box;
}
.vben-basic-drawer__detail .ant-drawer-title {
  height: 100%;
}
.vben-basic-drawer__detail .ant-drawer-close {
  height: 40px;
  line-height: 40px;
}
.vben-basic-drawer__detail .scrollbar__wrap {
  padding: 0 !important;
}
.vben-basic-drawer__detail .ant-drawer-body {
  height: calc(100% - 40px);
}`;function _e(e,s,t,d,l,u){const n=k("DrawerHeader"),r=k("ScrollContainer"),c=k("DrawerFooter"),f=k("Drawer"),D=pe("loading");return w(),h(f,P({class:e.prefixCls,onClose:e.onClose},e.getBindValues),x({default:C(()=>[fe(y(r,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:C(()=>[v(e.$slots,"default")]),_:3},8,["style","loading-tip"]),[[D,e.getLoading]]),y(c,P(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),x({_:2},[ge(Object.keys(e.$slots),m=>({name:m,fn:C(F=>[v(e.$slots,m,F)])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?void 0:{name:"title",fn:C(()=>[y(n,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:C(()=>[v(e.$slots,"titleToolbar")]),_:1},8,["title","isDetail","showDetailBack","onClose"])])}]),1040,["class","onClose"])}Z.render=_e;const $=J({}),R=J({});function ye(){const e=_(null),s=_(!1),t=_("");function d(n,r){K(()=>{e.value=null,s.value=null,$[a(t)]=null}),!(a(s)&&be()&&n===a(e))&&(t.value=r,e.value=n,s.value=!0,n.emitVisible=(c,f)=>{R[f]=c})}const l=()=>{const n=a(e);return n||H("useDrawer instance is undefined!"),n},u={setDrawerProps:n=>{var r;(r=l())==null||r.setDrawerProps(n)},getVisible:b(()=>R[~~a(t)]),openDrawer:(n=!0,r,c=!0)=>{var D;if((D=l())==null||D.setDrawerProps({visible:n}),!r)return;if(c){$[a(t)]=null,$[a(t)]=O(r);return}we(O($[a(t)]),O(r))||($[a(t)]=O(r))}};return[d,u]}const $e=e=>{const s=_(null),t=I(),d=_("");t||H("useDrawerInner instance is undefined!");const l=()=>{const n=a(s);if(!n){H("useDrawerInner instance is undefined!");return}return n},u=(n,r)=>{K(()=>{s.value=null}),d.value=r,s.value=n,t==null||t.emit("register",n,r)};return z(()=>{const n=$[a(d)];!n||!e||!G(e)||Y(()=>{e(n)})}),[u,{changeLoading:(n=!0)=>{var r;(r=l())==null||r.setDrawerProps({loading:n})},changeOkLoading:(n=!0)=>{var r;(r=l())==null||r.setDrawerProps({confirmLoading:n})},getVisible:b(()=>R[~~a(d)]),closeDrawer:()=>{var n;(n=l())==null||n.setDrawerProps({visible:!1})},setDrawerProps:n=>{var r;(r=l())==null||r.setDrawerProps(n)}}]};export{Z as _,$e as a,ye as u};
