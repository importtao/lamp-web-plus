import{d as C,aY as h,v as _,d$ as k,r as a,o as j,n as b,J as e,p as o,L as n}from"./index.b7a14d4f.js";import{_ as g}from"./PageWrapper.62f72559.js";import"./vendor.352e3120.js";import"./usePageContext.03f0ffc0.js";import"./onMountedOrActivated.64fcf717.js";import"./index.aba8a851.js";import"./index.d9119902.js";import"./useBreakpoint.508a26d1.js";import"./responsiveObserve.0e84fd18.js";import"./useSize.a97ab731.js";import"./transButton.928b71e3.js";import"./ArrowLeftOutlined.70d092e9.js";var m=C({name:"TabsDemo",components:{CollapseContainer:h,PageWrapper:g,[_.name]:_},setup(){const{closeAll:t,closeLeft:r,closeRight:l,closeOther:c,closeCurrent:i,refreshPage:p}=k();return{closeAll:t,closeLeft:r,closeRight:l,closeOther:c,closeCurrent:i,refreshPage:p}}});const v=n(" \u5173\u95ED\u6240\u6709 "),P=n(" \u5173\u95ED\u5DE6\u4FA7 "),$=n(" \u5173\u95ED\u53F3\u4FA7 "),O=n(" \u5173\u95ED\u5176\u4ED6 "),A=n(" \u5173\u95ED\u5F53\u524D "),B=n(" \u5237\u65B0\u5F53\u524D ");function L(t,r,l,c,i,p){const f=a("a-input"),d=a("CollapseContainer"),s=a("a-button"),u=a("PageWrapper");return j(),b(u,{title:"\u6807\u7B7E\u9875\u64CD\u4F5C\u793A\u4F8B"},{default:e(()=>[o(d,{title:"\u5728\u4E0B\u9762\u8F93\u5165\u6846\u8F93\u5165\u6587\u672C,\u5207\u6362\u540E\u56DE\u6765\u5185\u5BB9\u4F1A\u4FDD\u5B58"},{default:e(()=>[o(f,{placeholder:"\u8BF7\u8F93\u5165"})]),_:1}),o(d,{class:"mt-4",title:"\u6807\u7B7E\u9875\u64CD\u4F5C"},{default:e(()=>[o(s,{class:"mr-2",onClick:t.closeAll},{default:e(()=>[v]),_:1},8,["onClick"]),o(s,{class:"mr-2",onClick:t.closeLeft},{default:e(()=>[P]),_:1},8,["onClick"]),o(s,{class:"mr-2",onClick:t.closeRight},{default:e(()=>[$]),_:1},8,["onClick"]),o(s,{class:"mr-2",onClick:t.closeOther},{default:e(()=>[O]),_:1},8,["onClick"]),o(s,{class:"mr-2",onClick:t.closeCurrent},{default:e(()=>[A]),_:1},8,["onClick"]),o(s,{class:"mr-2",onClick:t.refreshPage},{default:e(()=>[B]),_:1},8,["onClick"])]),_:1})]),_:1})}m.render=L;export default m;
