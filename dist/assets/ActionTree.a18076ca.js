import{_ as j}from"./index.vue_vue&type=style&index=0&lang.60e00eb8.js";import{t as B}from"./data.2c592186.js";import{d as g,w as D,F as S,D as K,r as p,o as $,n as N,J as a,p as s,L as l}from"./index.0523a5a3.js";import{_ as b}from"./PageWrapper.40d43df1.js";import"./useContextMenu.13382a8f.js";import"./index.8e7c33d5.js";import"./useExpose.cceba30c.js";import"./iconUtil.f3ee4c23.js";import"./conductUtil.fde7132a.js";import"./_baseSet.f781a95b.js";import"./hasIn.a020a292.js";import"./FileOutlined.53cb4a4e.js";import"./get.108cb567.js";import"./vendor.352e3120.js";import"./usePageContext.0fc2e04d.js";import"./onMountedOrActivated.a2faf533.js";import"./index.e2c95991.js";import"./index.814a8df7.js";import"./useBreakpoint.a9fc3198.js";import"./responsiveObserve.43c11602.js";import"./useSize.6627aa05.js";import"./transButton.555d93e9.js";import"./ArrowLeftOutlined.62657f64.js";var k=g({components:{BasicTree:j,PageWrapper:b},setup(){const t=D(null),{createMessage:e}=S();function i(){const n=K(t);if(!n)throw new Error("tree is null!");return n}function u(n){i().filterByLevel(n)}function f(){i().setCheckedKeys(["0-0"])}function m(){const n=i().getCheckedKeys();e.success(JSON.stringify(n))}function o(){i().setSelectedKeys(["0-0"])}function r(){const n=i().getSelectedKeys();e.success(JSON.stringify(n))}function c(){i().setExpandedKeys(["0-0"])}function d(){const n=i().getExpandedKeys();e.success(JSON.stringify(n))}function _(n){i().checkAll(n)}function y(n){i().expandAll(n)}function C(n=null){i().insertNodeByKey({parentKey:n,node:{title:"\u65B0\u589E\u8282\u70B9",key:"2-2-2"},push:"push"})}function h(n){i().deleteNodeByKey(n)}function v(n){i().updateNodeByKey(n,{title:"parent2-new"})}return{treeData:B,treeRef:t,handleLevel:u,handleSetCheckData:f,handleGetCheckData:m,handleSetSelectData:o,handleGetSelectData:r,handleSetExpandData:c,handleGetExpandData:d,appendNodeByKey:C,deleteNodeByKey:h,updateNodeByKey:v,checkAll:_,expandAll:y}}});const A={class:"mb-4"},E=l(" \u5C55\u5F00\u5168\u90E8 "),O=l(" \u6298\u53E0\u5168\u90E8 "),w=l(" \u5168\u9009 "),x=l(" \u5168\u4E0D\u9009 "),G=l(" \u663E\u793A\u5230\u7B2C2\u7EA7 "),L=l(" \u663E\u793A\u5230\u7B2C1\u7EA7 "),T={class:"mb-4"},P=l(" \u8BBE\u7F6E\u52FE\u9009\u6570\u636E "),J=l(" \u83B7\u53D6\u52FE\u9009\u6570\u636E "),M=l(" \u8BBE\u7F6E\u9009\u4E2D\u6570\u636E "),W=l(" \u83B7\u53D6\u9009\u4E2D\u6570\u636E "),F=l(" \u8BBE\u7F6E\u5C55\u5F00\u6570\u636E "),R=l(" \u83B7\u53D6\u5C55\u5F00\u6570\u636E "),U={class:"mb-4"},V=l(" \u6DFB\u52A0\u6839\u8282\u70B9 "),z=l(" \u6DFB\u52A0\u5728parent3\u5185\u6DFB\u52A0\u8282\u70B9 "),I=l(" \u5220\u9664parent3\u8282\u70B9 "),q=l(" \u66F4\u65B0parent2\u8282\u70B9 ");function H(t,e,i,u,f,m){const o=p("a-button"),r=p("BasicTree"),c=p("PageWrapper");return $(),N(c,{title:"Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B",contentBackground:"",contentClass:"p-4"},{default:a(()=>[s("div",A,[s(o,{onClick:e[1]||(e[1]=d=>t.expandAll(!0)),class:"mr-2"},{default:a(()=>[E]),_:1}),s(o,{onClick:e[2]||(e[2]=d=>t.expandAll(!1)),class:"mr-2"},{default:a(()=>[O]),_:1}),s(o,{onClick:e[3]||(e[3]=d=>t.checkAll(!0)),class:"mr-2"},{default:a(()=>[w]),_:1}),s(o,{onClick:e[4]||(e[4]=d=>t.checkAll(!1)),class:"mr-2"},{default:a(()=>[x]),_:1}),s(o,{onClick:e[5]||(e[5]=d=>t.handleLevel(2)),class:"mr-2"},{default:a(()=>[G]),_:1}),s(o,{onClick:e[6]||(e[6]=d=>t.handleLevel(1)),class:"mr-2"},{default:a(()=>[L]),_:1})]),s("div",T,[s(o,{onClick:t.handleSetCheckData,class:"mr-2"},{default:a(()=>[P]),_:1},8,["onClick"]),s(o,{onClick:t.handleGetCheckData,class:"mr-2"},{default:a(()=>[J]),_:1},8,["onClick"]),s(o,{onClick:t.handleSetSelectData,class:"mr-2"},{default:a(()=>[M]),_:1},8,["onClick"]),s(o,{onClick:t.handleGetSelectData,class:"mr-2"},{default:a(()=>[W]),_:1},8,["onClick"]),s(o,{onClick:t.handleSetExpandData,class:"mr-2"},{default:a(()=>[F]),_:1},8,["onClick"]),s(o,{onClick:t.handleGetExpandData,class:"mr-2"},{default:a(()=>[R]),_:1},8,["onClick"])]),s("div",U,[s(o,{onClick:e[7]||(e[7]=d=>t.appendNodeByKey(null)),class:"mr-2"},{default:a(()=>[V]),_:1}),s(o,{onClick:e[8]||(e[8]=d=>t.appendNodeByKey("2-2")),class:"mr-2"},{default:a(()=>[z]),_:1}),s(o,{onClick:e[9]||(e[9]=d=>t.deleteNodeByKey("2-2")),class:"mr-2"},{default:a(()=>[I]),_:1}),s(o,{onClick:e[10]||(e[10]=d=>t.updateNodeByKey("1-1")),class:"mr-2"},{default:a(()=>[q]),_:1})]),s(r,{treeData:t.treeData,title:"\u51FD\u6570\u64CD\u4F5C",ref:"treeRef",checkable:!0},null,8,["treeData"])]),_:1})}k.render=H;export default k;
