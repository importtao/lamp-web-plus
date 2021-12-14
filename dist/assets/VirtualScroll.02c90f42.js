import{bj as _,bd as m,d as u,aW as f,aX as v,r,o as h,n as b,p as e,q as l,aF as g,L as p}from"./index.b7a14d4f.js";import{_ as j}from"./PageWrapper.62f72559.js";import{D as x}from"./index.f8f362f5.js";import"./vendor.352e3120.js";import"./usePageContext.03f0ffc0.js";import"./onMountedOrActivated.64fcf717.js";import"./index.aba8a851.js";import"./index.d9119902.js";import"./useBreakpoint.508a26d1.js";import"./responsiveObserve.0e84fd18.js";import"./useSize.a97ab731.js";import"./transButton.928b71e3.js";import"./ArrowLeftOutlined.70d092e9.js";const S=_(()=>m(()=>import("./index.a6d8dbca.js"),["/lamp-web-plus/assets/index.a6d8dbca.js","/lamp-web-plus/assets/index.5ddcb78c.css","/lamp-web-plus/assets/index.b7a14d4f.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js"])),w=(()=>{const o=[];for(let s=1;s<2e4;s++)o.push({title:"\u5217\u8868\u9879"+s});return o})();var i=u({components:{VScroll:S,Divider:x,PageWrapper:j},setup(){return{data:w}}}),J=`.virtual-scroll-demo-wrap[data-v-b4120884] {
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
}`;const t=g();f("data-v-b4120884");const P=p("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),V={class:"virtual-scroll-demo-wrap"},y={class:"virtual-scroll-demo__item"},D=p("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),I={class:"virtual-scroll-demo-wrap"},W={class:"virtual-scroll-demo__item"};v();const $=t((o,s,k,A,B,C)=>{const n=r("Divider"),d=r("VScroll"),c=r("PageWrapper");return h(),b(c,{class:"virtual-scroll-demo"},{default:t(()=>[e(n,null,{default:t(()=>[P]),_:1}),e("div",V,[e(d,{itemHeight:41,items:o.data,height:300,width:300},{default:t(({item:a})=>[e("div",y,l(a.title),1)]),_:1},8,["items"])]),e(n,null,{default:t(()=>[D]),_:1}),e("div",I,[e(d,{itemHeight:41,items:o.data,height:300,width:300,bench:50},{default:t(({item:a})=>[e("div",W,l(a.title),1)]),_:1},8,["items"])])]),_:1})});i.render=$,i.__scopeId="data-v-b4120884";export default i;
