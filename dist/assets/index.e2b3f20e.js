import{S as r,bk as ue,p as f,a2 as O,Z as v,bl as pe,d as R,Q as w,y as he,ap as be,a4 as ye,X as U,b1 as K,_ as p,bm as F,a0 as G,bn as N,bo as V,au as me,bp as ge,as as E,a6 as M,bq as Te,br as xe,b0 as Be,T as Ce,W as Pe,ar as $e,bb as ke,a3 as Se}from"./index.05ea33df.js";import{U as _e}from"./UpOutlined.b05eb3d5.js";import{P as Re}from"./PlusOutlined.cfc7a86d.js";var I={LEFT:37,UP:38,RIGHT:39,DOWN:40},Ke={width:0,height:0,overflow:"hidden",position:"absolute"},H={name:"Sentinel",props:{setRef:r.func,prevElement:r.any,nextElement:r.any},methods:{onKeyDown:function(e){var t=e.target,a=e.which,i=e.shiftKey,s=this.$props,o=s.nextElement,l=s.prevElement;a!==ue.TAB||document.activeElement!==t||(!i&&o&&o.focus(),i&&l&&l.focus())}},render:function(){var e=this.$props.setRef;return f("div",{tabindex:0,ref:e,style:Ke,onKeydown:this.onKeyDown,role:"presentation"},[O(this)])}};function Ne(n){var e=[];return n.forEach(function(t){pe(t)&&e.push(t)}),e}function q(n,e){for(var t=Ne(n),a=0;a<t.length;a++)if(t[a].key===e)return a;return-1}function D(n,e){n.transform=e,n.webkitTransform=e,n.mozTransform=e}function Z(n){return("transform"in n||"webkitTransform"in n||"MozTransform"in n)&&window.atob}function Ae(n){return{transform:n,WebkitTransform:n,MozTransform:n}}function z(n){return n==="left"||n==="right"}function Oe(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=z(e)?"translateY":"translateX";return!z(e)&&t==="rtl"?"".concat(a,"(").concat(n*100,"%) translateZ(0)"):"".concat(a,"(").concat(-n*100,"%) translateZ(0)")}function we(n,e){var t=z(e)?"marginTop":"marginLeft";return v({},t,"".concat(-n*100,"%"))}function X(n,e){return+window.getComputedStyle(n).getPropertyValue(e).replace("px","")}function Q(n){return Object.keys(n).reduce(function(e,t){return(t.substr(0,5)==="aria-"||t.substr(0,5)==="data-"||t==="role")&&(e[t]=n[t]),e},{})}function W(n,e){return+n.getPropertyValue(e).replace("px","")}function Y(n,e,t,a,i){var s=X(i,"padding-".concat(n));if(!a||!a.parentNode)return s;var o=a.parentNode.childNodes;return Array.prototype.some.call(o,function(l){if(!l.tagName)return!1;var c=window.getComputedStyle(l);return l!==a?(s+=W(c,"margin-".concat(n)),s+=l[e],s+=W(c,"margin-".concat(t)),c.boxSizing==="content-box"&&(s+=W(c,"border-".concat(n,"-width"))+W(c,"border-".concat(t,"-width"))),!1):(s+=W(c,"margin-".concat(n)),!0)}),s}function Ee(n,e){return Y("left","offsetWidth","right",n,e)}function We(n,e){return Y("top","offsetHeight","bottom",n,e)}var Ie=["class","onChange","style"];function J(n){var e,t=n.children;return t.forEach(function(a){a&&!F(e)&&!a.disabled&&(e=a.key)}),e}function He(n,e){var t=n.children,a=t.map(function(i){return i&&i.key});return a.indexOf(e)>=0}var De=R({name:"Tabs",mixins:[w],inheritAttrs:!1,props:{destroyInactiveTabPane:r.looseBool,renderTabBar:r.func.isRequired,renderTabContent:r.func.isRequired,navWrapper:r.func.def(function(n){return n}),children:r.any.def([]),prefixCls:r.string.def("ant-tabs"),tabBarPosition:r.string.def("top"),activeKey:r.oneOfType([r.string,r.number]),defaultActiveKey:r.oneOfType([r.string,r.number]),direction:r.string.def("ltr"),tabBarGutter:r.number},setup:function(e){var t;e.activeKey!==void 0?t=e.activeKey:e.defaultActiveKey!==void 0?t=e.defaultActiveKey:t=J(e);var a=he({_activeKey:t});return be(function(){e.activeKey!==void 0?a._activeKey=e.activeKey:He(e,a._activeKey)||(a._activeKey=J(e))},{flush:"sync"}),{state:a}},created:function(){this.panelSentinelStart=void 0,this.panelSentinelEnd=void 0,this.sentinelStart=void 0,this.sentinelEnd=void 0,ye("sentinelContext",this)},beforeUnmount:function(){this.destroy=!0,cancelAnimationFrame(this.sentinelId)},methods:{onTabClick:function(e,t){this.tabBar.props&&this.tabBar.props.onTabClick&&this.tabBar.props.onTabClick(e,t),this.setActiveKey(e)},onNavKeyDown:function(e){var t=e.keyCode;if(t===I.RIGHT||t===I.DOWN){e.preventDefault();var a=this.getNextActiveKey(!0);this.onTabClick(a)}else if(t===I.LEFT||t===I.UP){e.preventDefault();var i=this.getNextActiveKey(!1);this.onTabClick(i)}},onScroll:function(e){var t=e.target,a=e.currentTarget;t===a&&t.scrollLeft>0&&(t.scrollLeft=0)},setSentinelStart:function(e){this.sentinelStart=e},setSentinelEnd:function(e){this.sentinelEnd=e},setPanelSentinelStart:function(e){e!==this.panelSentinelStart&&this.updateSentinelContext(),this.panelSentinelStart=e},setPanelSentinelEnd:function(e){e!==this.panelSentinelEnd&&this.updateSentinelContext(),this.panelSentinelEnd=e},setActiveKey:function(e){if(this.state._activeKey!==e){var t=this.$props;t.activeKey===void 0&&(this.state._activeKey=e),this.__emit("update:activeKey",e),this.__emit("change",e)}},getNextActiveKey:function(e){var t=this.state._activeKey,a=[];this.$props.children.forEach(function(o){var l,c;o&&!((l=o.props)!==null&&l!==void 0&&l.disabled)&&((c=o.props)===null||c===void 0?void 0:c.disabled)!==""&&(e?a.push(o):a.unshift(o))});var i=a.length,s=i&&a[0].key;return a.forEach(function(o,l){o.key===t&&(l===i-1?s=a[0].key:s=a[l+1].key)}),s},updateSentinelContext:function(){var e=this;this.destroy||(cancelAnimationFrame(this.sentinelId),this.sentinelId=requestAnimationFrame(function(){e.destroy||e.$forceUpdate()}))}},render:function(){var e,t=this.$props,a=t.prefixCls,i=t.navWrapper,s=t.tabBarPosition,o=t.renderTabContent,l=t.renderTabBar,c=t.destroyInactiveTabPane,d=t.direction,h=t.tabBarGutter,m=this.$attrs,u=m.class;m.onChange;var g=m.style,x=U(m,Ie),y=(e={},v(e,u,u),v(e,a,1),v(e,"".concat(a,"-").concat(s),1),v(e,"".concat(a,"-rtl"),d==="rtl"),e);this.tabBar=l();var B=K(this.tabBar,{prefixCls:a,navWrapper:i,tabBarPosition:s,panels:t.children,activeKey:this.state._activeKey,direction:d,tabBarGutter:h,onKeydown:this.onNavKeyDown,onTabClick:this.onTabClick,key:"tabBar"}),C=K(o(),{prefixCls:a,tabBarPosition:s,activeKey:this.state._activeKey,destroyInactiveTabPane:c,direction:d,onChange:this.setActiveKey,children:t.children,key:"tabContent"}),b=f(H,{key:"sentinelStart",setRef:this.setSentinelStart,nextElement:this.panelSentinelStart},null),P=f(H,{key:"sentinelEnd",setRef:this.setSentinelEnd,prevElement:this.panelSentinelEnd},null),T=[];s==="bottom"?T.push(b,C,P,B):T.push(B,b,C,P);var k=p(p({},Q(x)),{},{style:g,onScroll:this.onScroll,class:y});return f("div",k,[T])}}),ee=R({name:"TabPane",props:{active:r.looseBool,destroyInactiveTabPane:r.looseBool,forceRender:r.looseBool,placeholder:r.any,rootPrefixCls:r.string,tab:r.any,closable:r.looseBool,disabled:r.looseBool},setup:function(){return{isActived:void 0,sentinelContext:G("sentinelContext",{})}},render:function(){var e,t=this.$props,a=t.destroyInactiveTabPane,i=t.active,s=t.forceRender,o=t.rootPrefixCls,l=O(this),c=N(this,"placeholder");this.isActived=this.isActived||i;var d="".concat(o,"-tabpane"),h=(e={},v(e,d,1),v(e,"".concat(d,"-inactive"),!i),v(e,"".concat(d,"-active"),i),e),m=a?i:this.isActived,u=m||s,g=this.sentinelContext,x=g.sentinelStart,y=g.sentinelEnd,B=g.setPanelSentinelStart,C=g.setPanelSentinelEnd,b,P;return i&&u&&(b=f(H,{setRef:B,prevElement:x},null),P=f(H,{setRef:C,nextElement:y},null)),f("div",{class:h,role:"tabpanel","aria-hidden":i?"false":"true"},[b,u?l:c,P])}}),te=R({name:"TabContent",inheritAttrs:!1,props:{animated:r.looseBool.def(!0),animatedWithMargin:r.looseBool.def(!0),prefixCls:r.string.def("ant-tabs"),activeKey:r.oneOfType([r.string,r.number]),tabBarPosition:r.string,direction:r.string,destroyInactiveTabPane:r.looseBool,children:r.any},computed:{classes:function(){var e,t=this.animated,a=this.prefixCls,i=this.$attrs.class;return e={},v(e,i,!!i),v(e,"".concat(a,"-content"),!0),v(e,t?"".concat(a,"-content-animated"):"".concat(a,"-content-no-animated"),!0),e}},methods:{getTabPanes:function(e){var t=this.$props,a=t.activeKey,i=[];return e.forEach(function(s){if(!!s){var o=s.key,l=a===o;i.push(K(s,{active:l,destroyInactiveTabPane:t.destroyInactiveTabPane,rootPrefixCls:t.prefixCls}))}}),i}},render:function(){var e=this.activeKey,t=this.tabBarPosition,a=this.animated,i=this.animatedWithMargin,s=this.direction,o=this.classes,l=this.children,c={};if(a&&l){var d=q(l,e);if(d!==-1){var h=i?we(d,t):Ae(Oe(d,t,s));c=p(p({},this.$attrs.style),h)}else c=p(p({},this.$attrs.style),{},{display:"none"})}return f("div",{class:o,style:c},[this.getTabPanes(l||[])])}});function ne(n,e){var t=n.$props,a=t.styles,i=a===void 0?{}:a,s=t.panels,o=t.activeKey,l=t.direction,c=n.getRef("root"),d=n.getRef("nav")||c,h=n.getRef("inkBar"),m=n.getRef("activeTab"),u=h.style,g=n.$props.tabBarPosition,x=q(s,o);if(e&&(u.display="none"),m){var y=m,B=Z(u);if(D(u,""),u.width="",u.height="",u.left="",u.top="",u.bottom="",u.right="",g==="top"||g==="bottom"){var C=Ee(y,d),b=y.offsetWidth;b===c.offsetWidth?b=0:i.inkBar&&i.inkBar.width!==void 0&&(b=parseFloat(i.inkBar.width,10),b&&(C+=(y.offsetWidth-b)/2)),l==="rtl"&&(C=X(y,"margin-left")-C),B?D(u,"translate3d(".concat(C,"px,0,0)")):u.left="".concat(C,"px"),u.width="".concat(b,"px")}else{var P=We(y,d),T=y.offsetHeight;i.inkBar&&i.inkBar.height!==void 0&&(T=parseFloat(i.inkBar.height,10),T&&(P+=(y.offsetHeight-T)/2)),B?(D(u,"translate3d(0,".concat(P,"px,0)")),u.top="0"):u.top="".concat(P,"px"),u.height="".concat(T,"px")}}u.display=x!==-1?"block":"none"}var ze={name:"InkTabBarNode",mixins:[w],inheritAttrs:!1,props:{inkBarAnimated:{type:Boolean,default:!0},direction:r.string,prefixCls:String,styles:Object,tabBarPosition:String,saveRef:r.func.def(function(){}),getRef:r.func.def(function(){}),panels:r.array,activeKey:r.oneOfType([r.string,r.number])},updated:function(){var e=this;this.$nextTick(function(){ne(e)})},mounted:function(){var e=this;this.$nextTick(function(){ne(e,!0)})},render:function(){var e,t=this.prefixCls,a=this.styles,i=a===void 0?{}:a,s=this.inkBarAnimated,o="".concat(t,"-ink-bar"),l=(e={},v(e,o,!0),v(e,s?"".concat(o,"-animated"):"".concat(o,"-no-animated"),!0),e);return f("div",{style:i.inkBar,class:l,key:"inkBar",ref:this.saveRef("inkBar")},null)}};function L(){}var je={name:"TabBarTabsNode",mixins:[w],inheritAttrs:!1,props:{activeKey:r.oneOfType([r.string,r.number]),panels:r.any.def([]),prefixCls:r.string.def(""),tabBarGutter:r.any.def(null),onTabClick:r.func,saveRef:r.func.def(L),getRef:r.func.def(L),renderTabBarNode:r.func,tabBarPosition:r.string,direction:r.string},render:function(){var e=this,t=this.$props,a=t.panels,i=t.activeKey,s=t.prefixCls,o=t.tabBarGutter,l=t.saveRef,c=t.tabBarPosition,d=t.direction,h=[],m=this.renderTabBarNode||this.$slots.renderTabBarNode;return a.forEach(function(u,g){if(!!u){var x=V(u),y=u.key,B=i===y?"".concat(s,"-tab-active"):"";B+=" ".concat(s,"-tab");var C={},b=x.disabled;b?B+=" ".concat(s,"-tab-disabled"):C.onClick=function(){e.__emit("tabClick",y)};var P=N(u,"tab"),T=o&&g===a.length-1?0:o;T=typeof T=="number"?"".concat(T,"px"):T;var k=d==="rtl"?"marginLeft":"marginRight",j=v({},z(c)?"marginBottom":k,T),S=f("div",p(p({role:"tab","aria-disabled":b?"true":"false","aria-selected":i===y?"true":"false"},C),{},{class:B.trim(),key:y,style:j,ref:i===y?l("activeTab"):L}),[P]);m&&(S=m(S)),h.push(S)}}),f("div",{ref:this.saveRef("navTabsContainer")},[h])}},Ue=["class","style","onKeydown"];function ae(){}var Le={name:"TabBarRootNode",mixins:[w],inheritAttrs:!1,props:{saveRef:r.func.def(ae),getRef:r.func.def(ae),prefixCls:r.string.def(""),tabBarPosition:r.string.def("top"),extraContent:r.any},methods:{onKeyDown:function(e){this.__emit("keydown",e)}},render:function(){var e,t=this.prefixCls,a=this.onKeyDown,i=this.tabBarPosition,s=this.extraContent,o=this.$attrs,l=o.class,c=o.style;o.onKeydown;var d=U(o,Ue),h=(e={},v(e,"".concat(t,"-bar"),!0),v(e,l,!!l),e),m=i==="top"||i==="bottom",u=m?{float:"right"}:{},g=O(this),x=g;return s&&(x=[K(s,{key:"extra",style:p({},u)}),K(g,{key:"content"})],x=m?x:x.reverse()),f("div",p({role:"tablist",class:h,tabindex:"0",onKeydown:a,style:c,ref:this.saveRef("root")},Q(d)),[x])}},Fe={name:"ScrollableTabBarNode",mixins:[w],inheritAttrs:!1,props:{activeKey:r.any,getRef:r.func.def(function(){}),saveRef:r.func.def(function(){}),tabBarPosition:r.oneOf(["left","right","top","bottom"]).def("left"),prefixCls:r.string.def(""),scrollAnimated:r.looseBool.def(!0),navWrapper:r.func.def(function(n){return n}),prevIcon:r.any,nextIcon:r.any,direction:r.string},data:function(){return this.offset=0,this.prevProps=p({},this.$props),{next:!1,prev:!1}},watch:{tabBarPosition:function(){var e=this;this.tabBarPositionChange=!0,this.$nextTick(function(){e.setOffset(0)})}},mounted:function(){var e=this;this.$nextTick(function(){e.updatedCal(),e.debouncedResize=me(function(){e.setNextPrev(),e.scrollToActiveTab()},200),e.resizeObserver=new ge(e.debouncedResize),e.resizeObserver.observe(e.$props.getRef("container"))})},updated:function(){var e=this;this.$nextTick(function(){e.updatedCal(e.prevProps),e.prevProps=p({},e.$props)})},beforeUnmount:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.debouncedResize&&this.debouncedResize.cancel&&this.debouncedResize.cancel()},methods:{updatedCal:function(e){var t=this,a=this.$props;if(e&&e.tabBarPosition!==a.tabBarPosition){this.setOffset(0);return}this.isNextPrevShown(this.$data)!==this.isNextPrevShown(this.setNextPrev())?(this.$forceUpdate(),this.$nextTick(function(){t.scrollToActiveTab()})):(!e||a.activeKey!==e.activeKey)&&this.scrollToActiveTab()},setNextPrev:function(){var e=this.$props.getRef("nav"),t=this.$props.getRef("navTabsContainer"),a=this.getScrollWH(t||e),i=this.getOffsetWH(this.$props.getRef("container"))+1,s=this.getOffsetWH(this.$props.getRef("navWrap")),o=this.offset,l=i-a,c=this.next,d=this.prev;if(l>=0)c=!1,this.setOffset(0,!1),o=0;else if(l<o)c=!0;else{c=!1;var h=s-a;this.setOffset(h,!1),o=h}return o<0?d=!0:d=!1,this.setNext(c),this.setPrev(d),{next:c,prev:d}},getOffsetWH:function(e){var t=this.$props.tabBarPosition,a="offsetWidth";return(t==="left"||t==="right")&&(a="offsetHeight"),e[a]},getScrollWH:function(e){var t=this.tabBarPosition,a="scrollWidth";return(t==="left"||t==="right")&&(a="scrollHeight"),e[a]},getOffsetLT:function(e){var t=this.$props.tabBarPosition,a="left";return(t==="left"||t==="right")&&(a="top"),e.getBoundingClientRect()[a]},setOffset:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,a=Math.min(0,e);if(this.offset!==a){this.offset=a;var i={},s=this.$props.tabBarPosition,o=this.$props.getRef("nav").style,l=Z(o);s==="left"||s==="right"?l?i={value:"translate3d(0,".concat(a,"px,0)")}:i={name:"top",value:"".concat(a,"px")}:l?(this.$props.direction==="rtl"&&(a=-a),i={value:"translate3d(".concat(a,"px,0,0)")}):i={name:"left",value:"".concat(a,"px")},l?D(o,i.value):o[i.name]=i.value,t&&this.setNextPrev()}},setPrev:function(e){this.prev!==e&&(this.prev=e)},setNext:function(e){this.next!==e&&(this.next=e)},isNextPrevShown:function(e){return e?e.next||e.prev:this.next||this.prev},prevTransitionEnd:function(e){if(e.propertyName==="opacity"){var t=this.$props.getRef("container");this.scrollToActiveTab({target:t,currentTarget:t})}},scrollToActiveTab:function(e){var t=this.$props.getRef("activeTab"),a=this.$props.getRef("navWrap");if(!(e&&e.target!==e.currentTarget||!t)){var i=this.isNextPrevShown()&&this.lastNextPrevShown;if(this.lastNextPrevShown=this.isNextPrevShown(),!!i){var s=this.getScrollWH(t),o=this.getOffsetWH(a),l=this.offset,c=this.getOffsetLT(a),d=this.getOffsetLT(t);c>d?(l+=c-d,this.setOffset(l)):c+o<d+s&&(l-=d+s-(c+o),this.setOffset(l))}}},prevClick:function(e){this.__emit("prevClick",e);var t=this.$props.getRef("navWrap"),a=this.getOffsetWH(t),i=this.offset;this.setOffset(i+a)},nextClick:function(e){this.__emit("nextClick",e);var t=this.$props.getRef("navWrap"),a=this.getOffsetWH(t),i=this.offset;this.setOffset(i-a)}},render:function(){var e,t,a,i,s=this.next,o=this.prev,l=this.$props,c=l.prefixCls,d=l.scrollAnimated,h=l.navWrapper,m=N(this,"prevIcon"),u=N(this,"nextIcon"),g=o||s,x=f("span",{onClick:o&&this.prevClick,unselectable:"unselectable",class:(e={},v(e,"".concat(c,"-tab-prev"),1),v(e,"".concat(c,"-tab-btn-disabled"),!o),v(e,"".concat(c,"-tab-arrow-show"),g),e),onTransitionend:this.prevTransitionEnd},[m||f("span",{class:"".concat(c,"-tab-prev-icon")},null)]),y=f("span",{onClick:s&&this.nextClick,unselectable:"unselectable",class:(t={},v(t,"".concat(c,"-tab-next"),1),v(t,"".concat(c,"-tab-btn-disabled"),!s),v(t,"".concat(c,"-tab-arrow-show"),g),t)},[u||f("span",{class:"".concat(c,"-tab-next-icon")},null)]),B="".concat(c,"-nav"),C=(a={},v(a,B,!0),v(a,d?"".concat(B,"-animated"):"".concat(B,"-no-animated"),!0),a);return f("div",{class:(i={},v(i,"".concat(c,"-nav-container"),1),v(i,"".concat(c,"-nav-container-scrolling"),g),i),key:"container",ref:this.saveRef("container")},[x,y,f("div",{class:"".concat(c,"-nav-wrap"),ref:this.saveRef("navWrap")},[f("div",{class:"".concat(c,"-nav-scroll")},[f("div",{class:C,ref:this.saveRef("nav")},[h(O(this))])])])])}},Ge={props:{children:r.func.def(function(){return null})},methods:{getRef:function(e){return this[e]},saveRef:function(e){var t=this;return function(a){a&&(t[e]=a)}}},render:function(){var e=this,t=function(s){return e.saveRef(s)},a=function(s){return e.getRef(s)};return this.children(t,a)}},re=R({name:"ScrollableInkTabBar",inheritAttrs:!1,render:function(){var e=this,t=this.$attrs.children;return f(Ge,{children:function(i,s){return f(Le,p({saveRef:i},e.$attrs),{default:function(){return[f(Fe,p({saveRef:i,getRef:s},e.$attrs),{default:function(){return[f(je,p({saveRef:i},p(p({},e.$attrs),{},{renderTabBarNode:t})),null),f(ze,p({saveRef:i,getRef:s},e.$attrs),null)]}})]}})}},null)}}),Ve=R({name:"TabBar",inheritAttrs:!1,props:{prefixCls:r.string,centered:r.looseBool.def(!1),tabBarStyle:r.style,tabBarExtraContent:r.VNodeChild,type:r.oneOf(E("line","card","editable-card")),tabPosition:r.oneOf(E("top","right","bottom","left")).def("top"),tabBarPosition:r.oneOf(E("top","right","bottom","left")),size:r.oneOf(E("default","small","large")),animated:{type:[Boolean,Object],default:void 0},renderTabBar:r.func,panels:r.array.def([]),activeKey:r.oneOfType([r.string,r.number]),tabBarGutter:r.number},render:function(){var e,t=this.$props,a=t.centered,i=t.tabBarStyle,s=t.animated,o=s===void 0?!0:s,l=t.renderTabBar,c=t.tabBarExtraContent,d=t.tabPosition,h=t.prefixCls,m=t.type,u=m===void 0?"line":m,g=t.size,x=M(o)==="object"?o.inkBar:o,y=d==="left"||d==="right",B=f("span",{class:"".concat(h,"-tab-prev-icon")},[y?f(_e,{class:"".concat(h,"-tab-prev-icon-target")},null):f(Te,{class:"".concat(h,"-tab-prev-icon-target")},null)]),C=f("span",{class:"".concat(h,"-tab-next-icon")},[y?f(xe,{class:"".concat(h,"-tab-next-icon-target")},null):f(Be,{class:"".concat(h,"-tab-next-icon-target")},null)]),b=(e={},v(e,this.$attrs.class,this.$attrs.class),v(e,"".concat(h,"-centered-bar"),a),v(e,"".concat(h,"-").concat(d,"-bar"),!0),v(e,"".concat(h,"-").concat(g,"-bar"),!!g),v(e,"".concat(h,"-card-bar"),u&&u.indexOf("card")>=0),e),P=p(p(p({},this.$props),this.$attrs),{},{children:null,inkBarAnimated:x,extraContent:c,prevIcon:B,nextIcon:C,style:i,class:b});return l?l(p(p({},P),{},{DefaultTabBar:re})):f(re,P,null)}}),Me=["class"],$=R({TabPane:ee,name:"ATabs",inheritAttrs:!1,props:{prefixCls:r.string,activeKey:r.oneOfType([r.string,r.number]),defaultActiveKey:r.oneOfType([r.string,r.number]),hideAdd:r.looseBool.def(!1),centered:r.looseBool.def(!1),tabBarStyle:r.object,tabBarExtraContent:r.any,destroyInactiveTabPane:r.looseBool.def(!1),type:r.oneOf(E("line","card","editable-card")),tabPosition:r.oneOf(["top","right","bottom","left"]).def("top"),size:r.oneOf(["default","small","large"]),animated:Ce(r.oneOfType([r.looseBool,r.object])),tabBarGutter:r.number,renderTabBar:r.func,onChange:{type:Function},onTabClick:r.func,onPrevClick:{type:Function},onNextClick:{type:Function},onEdit:{type:Function}},emits:["update:activeKey","edit","change"],setup:function(){return{configProvider:G("configProvider",Se)}},methods:{removeTab:function(e,t){t.stopPropagation(),F(e)&&this.$emit("edit",e,"remove")},handleChange:function(e){this.$emit("update:activeKey",e),this.$emit("change",e)},createNewTab:function(e){this.$emit("edit",e,"add")}},render:function(){var e,t=this,a,i=Pe(this),s=i.prefixCls,o=i.size,l=i.type,c=l===void 0?"line":l,d=i.tabPosition,h=i.animated,m=h===void 0?!0:h,u=i.hideAdd,g=i.renderTabBar,x=this.$attrs,y=x.class,B=U(x,Me),C=this.configProvider.getPrefixCls,b=C("tabs",s),P=$e(O(this)),T=N(this,"tabBarExtraContent"),k=M(m)==="object"?m.tabPane:m;c!=="line"&&(k="animated"in i?k:!1);var j=(e={},v(e,y,y),v(e,"".concat(b,"-vertical"),d==="left"||d==="right"),v(e,"".concat(b,"-").concat(o),!!o),v(e,"".concat(b,"-card"),c.indexOf("card")>=0),v(e,"".concat(b,"-").concat(c),!0),v(e,"".concat(b,"-no-animation"),!k),e),S=[];c==="editable-card"&&(S=[],P.forEach(function(_,le){var fe=V(_),A=fe.closable;A=typeof A=="undefined"?!0:A;var de=A?f(ke,{class:"".concat(b,"-close-x"),onClick:function(ve){return t.removeTab(_.key,ve)}},null):null;S.push(K(_,{tab:f("div",{class:A?void 0:"".concat(b,"-tab-unclosable")},[N(_,"tab"),de]),key:_.key||le}))}),u||(T=f("span",null,[f(Re,{class:"".concat(b,"-new-tab"),onClick:this.createNewTab},null),T]))),T=T?f("div",{class:"".concat(b,"-extra-content")},[T]):null;var ie=g||this.$slots.renderTabBar,se=p(p(p({},i),{},{prefixCls:b,tabBarExtraContent:T,renderTabBar:ie},B),{},{children:P}),oe=(a={},v(a,"".concat(b,"-").concat(d,"-content"),!0),v(a,"".concat(b,"-card-content"),c.indexOf("card")>=0),a),ce=p(p(p({},i),{},{prefixCls:b,tabBarPosition:d,renderTabBar:function(){return f(Ve,p({key:"tabBar"},se),null)},renderTabContent:function(){return f(te,{class:oe,animated:k,animatedWithMargin:!0},null)},children:S.length>0?S:P},B),{},{onChange:this.handleChange,class:j});return f(De,ce,null)}});$.TabPane=p(p({},ee),{},{name:"ATabPane",__ANT_TAB_PANE:!0}),$.TabContent=p(p({},te),{},{name:"ATabContent"}),$.install=function(n){return n.component($.name,$),n.component($.TabPane.name,$.TabPane),n.component($.TabContent.name,$.TabContent),n};export{$ as T};
