import{bj as _,bd as m,d as u,aW as v,aX as f,r,o as h,n as g,p as e,q as l,aF as j,L as c}from"./index.f012a3f4.js";import{_ as b}from"./PageWrapper.06ac3dfa.js";import{D as x}from"./index.a99c15a9.js";import"./vendor.352e3120.js";import"./usePageContext.2729de0d.js";import"./onMountedOrActivated.a84ead65.js";import"./index.df461530.js";import"./index.069b5dd9.js";import"./useBreakpoint.521f32f2.js";import"./responsiveObserve.40f9db24.js";import"./useSize.5c4412c9.js";import"./transButton.77ed102e.js";import"./ArrowLeftOutlined.61d94bda.js";const S=_(()=>m(()=>import("./index.857c9895.js"),["/lamp/assets/index.857c9895.js","/lamp/assets/index.5ddcb78c.css","/lamp/assets/index.f012a3f4.js","/lamp/assets/index.03307a49.css","/lamp/assets/vendor.352e3120.js"])),w=(()=>{const o=[];for(let s=1;s<2e4;s++)o.push({title:"\u5217\u8868\u9879"+s});return o})();var i=u({components:{VScroll:S,Divider:x,PageWrapper:b},setup(){return{data:w}}}),J=`.virtual-scroll-demo-wrap[data-v-b4120884] {
  display: flex;
  margin: 0 30%;
  background: #fff;
  justify-content: center;
}
.virtual-scroll-demo__item[data-v-b4120884] {
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}`;const t=j();v("data-v-b4120884");const P=c("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),V={class:"virtual-scroll-demo-wrap"},y={class:"virtual-scroll-demo__item"},D=c("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),I={class:"virtual-scroll-demo-wrap"},W={class:"virtual-scroll-demo__item"};f();const $=t((o,s,k,A,B,C)=>{const d=r("Divider"),n=r("VScroll"),p=r("PageWrapper");return h(),g(p,{class:"virtual-scroll-demo"},{default:t(()=>[e(d,null,{default:t(()=>[P]),_:1}),e("div",V,[e(n,{itemHeight:41,items:o.data,height:300,width:300},{default:t(({item:a})=>[e("div",y,l(a.title),1)]),_:1},8,["items"])]),e(d,null,{default:t(()=>[D]),_:1}),e("div",I,[e(n,{itemHeight:41,items:o.data,height:300,width:300,bench:50},{default:t(({item:a})=>[e("div",W,l(a.title),1)]),_:1},8,["items"])])]),_:1})});i.render=$,i.__scopeId="data-v-b4120884";export default i;
