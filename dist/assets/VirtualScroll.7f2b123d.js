import{bj as _,bd as m,d as u,aW as v,aX as f,r,o as h,n as b,p as e,q as l,aF as g,L as c}from"./index.b361f078.js";import{_ as j}from"./PageWrapper.3df1718a.js";import{D as x}from"./index.8d41a8b1.js";import"./vendor.352e3120.js";import"./usePageContext.48026c97.js";import"./onMountedOrActivated.db240d29.js";import"./index.2682bd6c.js";import"./index.ad62d489.js";import"./useBreakpoint.3b9cff8d.js";import"./responsiveObserve.16e475dd.js";import"./useSize.5dcbe36a.js";import"./transButton.7b09546d.js";import"./ArrowLeftOutlined.9183eb3a.js";const S=_(()=>m(()=>import("./index.27a33951.js"),["/lamp-web-plus/assets/index.27a33951.js","/lamp-web-plus/assets/index.5ddcb78c.css","/lamp-web-plus/assets/index.b361f078.js","/lamp-web-plus/assets/index.03307a49.css","/lamp-web-plus/assets/vendor.352e3120.js"])),w=(()=>{const o=[];for(let s=1;s<2e4;s++)o.push({title:"\u5217\u8868\u9879"+s});return o})();var i=u({components:{VScroll:S,Divider:x,PageWrapper:j},setup(){return{data:w}}}),J=`.virtual-scroll-demo-wrap[data-v-b4120884] {
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
}`;const t=g();v("data-v-b4120884");const P=c("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),V={class:"virtual-scroll-demo-wrap"},y={class:"virtual-scroll-demo__item"},D=c("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),I={class:"virtual-scroll-demo-wrap"},W={class:"virtual-scroll-demo__item"};f();const $=t((o,s,k,A,B,C)=>{const d=r("Divider"),n=r("VScroll"),p=r("PageWrapper");return h(),b(p,{class:"virtual-scroll-demo"},{default:t(()=>[e(d,null,{default:t(()=>[P]),_:1}),e("div",V,[e(n,{itemHeight:41,items:o.data,height:300,width:300},{default:t(({item:a})=>[e("div",y,l(a.title),1)]),_:1},8,["items"])]),e(d,null,{default:t(()=>[D]),_:1}),e("div",I,[e(n,{itemHeight:41,items:o.data,height:300,width:300,bench:50},{default:t(({item:a})=>[e("div",W,l(a.title),1)]),_:1},8,["items"])])]),_:1})});i.render=$,i.__scopeId="data-v-b4120884";export default i;
