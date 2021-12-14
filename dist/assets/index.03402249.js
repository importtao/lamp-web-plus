import{S as s,as as B,d as F,w as A,ad as G,k as K,a6 as Q,ae as H,V as R,x as U,bD as V,Z as i,p as u,_ as l,bE as Y,az as ee,b1 as ae,bF as te}from"./index.05ea33df.js";import{u as re}from"./useBreakpoint.249417d5.js";import{a as ne}from"./responsiveObserve.968aa5d0.js";import{u as se,a as le}from"./useSize.c28e111d.js";var L={prefixCls:s.string,shape:s.oneOf(B("circle","square")).def("circle"),size:{type:[Number,String,Object],default:function(){return"default"}},src:s.string,srcset:s.string,icon:s.VNodeChild,alt:s.string,gap:s.number,draggable:s.bool,loadError:{type:Function}},S=F({name:"AAvatar",inheritAttrs:!1,props:L,slots:["icon"],setup:function(e,C){var P=C.slots,n=C.attrs,d=A(!0),x=A(!1),y=A(1),o=A(null),b=A(null),O=G("avatar",e),m=O.prefixCls,W=se(),E=re(),p=K(function(){if(Q(e.size)==="object"){var t=ne.find(function(r){return E.value[r]}),a=e.size[t];return a}}),z=function(a){return p.value?{width:"".concat(p.value,"px"),height:"".concat(p.value,"px"),lineHeight:"".concat(p.value,"px"),fontSize:"".concat(a?p.value/2:18,"px")}:{}},g=function(){if(!(!o.value||!b.value)){var a=o.value.offsetWidth,r=b.value.offsetWidth;if(a!==0&&r!==0){var j=e.gap,h=j===void 0?4:j;h*2<r&&(y.value=r-h*2<a?(r-h*2)/a:1)}}},I=function(){var a=e.loadError,r=a==null?void 0:a();r!==!1&&(d.value=!1)};return H(function(){return e.src},function(){R(function(){d.value=!0,y.value=1})}),H(function(){return e.gap},function(){R(function(){g()})}),U(function(){R(function(){g(),x.value=!0})}),function(){var t,a,r=e.shape,j=e.size,h=e.src,M=e.alt,q=e.srcset,D=e.draggable,_=V(P,e,"icon"),v=m.value,c=j==="default"?W.value:j,X=(t={},i(t,"".concat(n.class),!!n.class),i(t,v,!0),i(t,"".concat(v,"-lg"),c==="large"),i(t,"".concat(v,"-sm"),c==="small"),i(t,"".concat(v,"-").concat(r),r),i(t,"".concat(v,"-image"),h&&d.value),i(t,"".concat(v,"-icon"),_),t),Z=typeof c=="number"?{width:"".concat(c,"px"),height:"".concat(c,"px"),lineHeight:"".concat(c,"px"),fontSize:_?"".concat(c/2,"px"):"18px"}:{},w=(a=P.default)===null||a===void 0?void 0:a.call(P),k;if(h&&d.value)k=u("img",{draggable:D,src:h,srcset:q,onError:I,alt:M},null);else if(_)k=_;else if(x.value||y.value!==1){var N="scale(".concat(y.value,") translateX(-50%)"),$={msTransform:N,WebkitTransform:N,transform:N},J=typeof c=="number"?{lineHeight:"".concat(c,"px")}:{};k=u(Y,{onResize:g},{default:function(){return[u("span",{class:"".concat(v,"-string"),ref:o,style:l(l({},J),$)},[w])]}})}else k=u("span",{class:"".concat(v,"-string"),ref:o,style:{opacity:0}},[w]);return u("span",l(l({},n),{},{ref:b,class:X,style:l(l(l({},Z),z(!!_)),n.style)}),[k])}}}),oe={prefixCls:s.string,maxCount:s.number,maxStyle:{type:Object,default:function(){return{}}},maxPopoverPlacement:s.oneOf(B("top","bottom")).def("top"),size:L.size},T=F({name:"AAvatarGroup",inheritAttrs:!1,props:oe,setup:function(e,C){var P=C.slots,n=C.attrs,d=G("avatar-group",e),x=d.prefixCls,y=d.direction;return le(e),function(){var o,b=e.maxPopoverPlacement,O=b===void 0?"top":b,m=e.maxCount,W=e.maxStyle,E=(o={},i(o,x.value,!0),i(o,"".concat(x.value,"-rtl"),y.value==="rtl"),i(o,"".concat(n.class),!!n.class),o),p=V(P,e),z=ee(p).map(function(a,r){return ae(a,{key:"avatar-key-".concat(r)})}),g=z.length;if(m&&m<g){var I=z.slice(0,m),t=z.slice(m,g);return I.push(u(te,{key:"avatar-popover-key",content:t,trigger:"hover",placement:O,overlayClassName:"".concat(x.value,"-popover")},{default:function(){return[u(S,{style:W},{default:function(){return["+".concat(g-m)]}})]}})),u("div",l(l({},n),{},{class:E,style:n.style}),[I])}return u("div",l(l({},n),{},{class:E,style:n.style}),[z])}}});S.Group=T,S.install=function(f){return f.component(S.name,S),f.component(T.name,T),f};export{S as A};
