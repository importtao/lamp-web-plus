var C=Object.assign;import{p as o,s as U,I as oe,O as le,S as g,d as q,ad as se,w as R,k as j,az as ie,Y as ce,Z as G,cr as de,bE as ue,ar as fe,cs as ge,g as X,ct as ve,n as I,aG as _,aF as pe,o as S,aC as w,ae as he,av as K,V as be,D as F,r as ee,aD as me,aE as $e,J as V,N as te,M as Ce,L as _e,q as we}from"./index.05ea33df.js";import{u as ke}from"./usePageContext.918ba169.js";import{o as xe}from"./onMountedOrActivated.a12ac1c0.js";import{B as ye}from"./index.dbdd549b.js";import{A as He}from"./index.03402249.js";import{T as Pe}from"./transButton.9a1903a9.js";import{A as Be}from"./ArrowLeftOutlined.97d250aa.js";var Fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};function Oe(e){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?Object(arguments[a]):{},d=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(d=d.concat(Object.getOwnPropertySymbols(i).filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),d.forEach(function(n){Te(e,n,i[n])})}return e}function Te(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}var J=function(a,i){var d=Oe({},a,i.attrs);return o(oe,U(d,{icon:Fe}),null)};J.displayName="ArrowRightOutlined",J.inheritAttrs=!1;var je={backIcon:g.VNodeChild,prefixCls:g.string,title:g.VNodeChild,subTitle:g.VNodeChild,breadcrumb:g.object,tags:g.any,footer:g.VNodeChild,extra:g.VNodeChild,avatar:g.object,ghost:g.looseBool,onBack:g.func},Ie=q({name:"APageHeader",props:je,emits:["back"],slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(a,i){var d=i.emit,n=i.slots,h=se("page-header",a),c=h.prefixCls,b=h.direction,$=h.pageHeader,k=R(!1),M=function(t){var r=t.width;k.value=r<768},A=j(function(){var l,t,r;return(l=(t=a.ghost)!==null&&t!==void 0?t:(r=$.value)===null||r===void 0?void 0:r.ghost)!==null&&l!==void 0?l:!0}),L=function(){var t,r,s;return(t=(r=a.backIcon)!==null&&r!==void 0?r:(s=n.backIcon)===null||s===void 0?void 0:s.call(n))!==null&&t!==void 0?t:b.value==="rtl"?o(J,null,null):o(Be,null,null)},z=function(t){return!t||!a.onBack?null:o(ge,{componentName:"PageHeader",children:function(s){var f=s.back;return o("div",{class:"".concat(c.value,"-back")},[o(Pe,{onClick:function(v){d("back",v)},class:"".concat(c.value,"-back-button"),"aria-label":f},{default:function(){return[t]}})])}},null)},N=function(){var t;return a.breadcrumb?o(ye,a.breadcrumb,null):(t=n.breadcrumb)===null||t===void 0?void 0:t.call(n)},x=function(){var t,r,s,f,u,v,H,P,p,D=a.avatar,O=(t=a.title)!==null&&t!==void 0?t:(r=n.title)===null||r===void 0?void 0:r.call(n),T=(s=a.subTitle)!==null&&s!==void 0?s:(f=n.subTitle)===null||f===void 0?void 0:f.call(n),E=(u=a.tags)!==null&&u!==void 0?u:(v=n.tags)===null||v===void 0?void 0:v.call(n),W=(H=a.extra)!==null&&H!==void 0?H:(P=n.extra)===null||P===void 0?void 0:P.call(n),B="".concat(c.value,"-heading"),Z=O||T||E||W;if(!Z)return null;var ne=L(),Q=z(ne),re=Q||D||Z;return o("div",{class:B},[re&&o("div",{class:"".concat(B,"-left")},[Q,D?o(He,D,null):(p=n.avatar)===null||p===void 0?void 0:p.call(n),O&&o("span",{class:"".concat(B,"-title"),title:typeof O=="string"?O:void 0},[O]),T&&o("span",{class:"".concat(B,"-sub-title"),title:typeof T=="string"?T:void 0},[T]),E&&o("span",{class:"".concat(B,"-tags")},[E])]),W&&o("span",{class:"".concat(B,"-extra")},[W])])},y=function(){var t,r,s=(t=a.footer)!==null&&t!==void 0?t:fe((r=n.footer)===null||r===void 0?void 0:r.call(n));return de(s)?null:o("div",{class:"".concat(c.value,"-footer")},[s])},m=function(t){return o("div",{class:"".concat(c.value,"-content")},[t])};return function(){var l,t,r,s=((l=a.breadcrumb)===null||l===void 0?void 0:l.routes)||n.breadcrumb,f=a.footer||n.footer,u=ie((t=n.default)===null||t===void 0?void 0:t.call(n)),v=ce(c.value,(r={"has-breadcrumb":s,"has-footer":f},G(r,"".concat(c.value,"-ghost"),A.value),G(r,"".concat(c.value,"-rtl"),b.value==="rtl"),G(r,"".concat(c.value,"-compact"),k.value),r));return o(ue,{onResize:M},{default:function(){return[o("div",{class:v},[N(),x(),u.length?m(u):null,y()])]}})}}}),Se=le(Ie),Y=q({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=X("page-footer"),{getCalcContentWidth:a}=ve();return{prefixCls:e,getCalcContentWidth:a}}}),Ge=`.vben-page-footer[data-v-3dfdd004] {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 24px;
  line-height: 44px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  box-shadow: 0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03);
  transition: width 0.2s;
}
.vben-page-footer__left[data-v-3dfdd004] {
  flex: 1 1;
}`;const Ae=pe(),Ne=Ae((e,a,i,d,n,h)=>(S(),I("div",{class:e.prefixCls,style:{width:e.getCalcContentWidth}},[o("div",{class:`${e.prefixCls}__left`},[_(e.$slots,"left")],2),_(e.$slots,"default"),o("div",{class:`${e.prefixCls}__right`},[_(e.$slots,"right")],2)],6)));Y.render=Ne,Y.__scopeId="data-v-3dfdd004";var ae=q({name:"PageWrapper",components:{PageFooter:Y,PageHeader:Se},inheritAttrs:!1,props:{title:w.string,dense:w.bool,ghost:w.bool,content:w.string,contentStyle:{type:Object},contentBackground:w.bool,contentFullHeight:w.bool,contentClass:w.string,fixedHeight:w.bool},setup(e,{slots:a}){const i=R(null),d=R(null),n=R(0),{prefixCls:h,prefixVar:c}=X("page-wrapper"),{contentHeight:b,setPageHeight:$,pageHeight:k}=ke(),M=j(()=>[h,{[`${h}--dense`]:e.dense}]),A=j(()=>(a==null?void 0:a.leftFooter)||(a==null?void 0:a.rightFooter)),L=j(()=>Object.keys(K(a,"default","leftFooter","rightFooter","headerContent"))),z=j(()=>{const{contentBackground:x,contentFullHeight:y,contentStyle:m,fixedHeight:l}=e,t=x?{backgroundColor:"#fff"}:{};if(!y)return C(C({},t),m);const r=`${F(k)}px`;return C(C(C(C(C({},t),m),{minHeight:r}),l?{height:r}:{}),{paddingBottom:`${F(n)}px`})});he(()=>[b==null?void 0:b.value,A.value],()=>{N()},{flush:"post",immediate:!0}),xe(()=>{be(()=>{N()})});function N(){var v,H;if(!e.contentFullHeight)return;const x=F(d),y=F(i);n.value=0;const m=x==null?void 0:x.$el;m&&(n.value+=(v=m==null?void 0:m.offsetHeight)!=null?v:0);let l=0;const t=y==null?void 0:y.$el;t&&(l+=(H=t==null?void 0:t.offsetHeight)!=null?H:0);let r=0,s="0px",f="0px";const u=document.querySelectorAll(`.${c}-page-wrapper-content`);if(u&&u.length>0){const P=u[0],p=getComputedStyle(P);s=p==null?void 0:p.marginBottom,f=p==null?void 0:p.marginTop}s&&(r+=Number(s.replace(/[^\d]/g,""))),f&&(r+=Number(f.replace(/[^\d]/g,""))),$==null||$(F(b)-F(n)-l-r)}return{getContentStyle:z,footerRef:d,headerRef:i,getClass:M,getHeaderSlots:L,prefixCls:h,getShowFooter:A,pageHeight:k,omit:K}}}),Je=`.vben-page-wrapper {
  position: relative;
}
.vben-page-wrapper .vben-page-wrapper-content {
  margin: 16px 16px 0 16px;
}
.vben-page-wrapper .ant-page-header:empty {
  padding: 0;
}
.vben-page-wrapper--dense .vben-page-wrapper-content {
  margin: 0;
}`;function Re(e,a,i,d,n,h){const c=ee("PageHeader"),b=ee("PageFooter");return S(),I("div",{class:e.getClass},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(S(),I(c,U({key:0,ghost:e.ghost,title:e.title},e.$attrs,{ref:"headerRef"}),me({default:V(()=>[e.content?(S(),I(Ce,{key:0},[_e(we(e.content),1)],64)):_(e.$slots,"headerContent",{key:1})]),_:2},[$e(e.getHeaderSlots,$=>({name:$,fn:V(k=>[_(e.$slots,$,k)])}))]),1040,["ghost","title"])):te("",!0),o("div",{class:["overflow-hidden",[`${e.prefixCls}-content`,e.contentClass]],style:e.getContentStyle},[_(e.$slots,"default")],6),e.getShowFooter?(S(),I(b,{key:1,ref:"footerRef"},{left:V(()=>[_(e.$slots,"leftFooter")]),right:V(()=>[_(e.$slots,"rightFooter")]),_:1},512)):te("",!0)],2)}ae.render=Re;export{ae as _};
