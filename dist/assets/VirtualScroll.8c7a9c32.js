import{bj as _,bd as m,d as u,aW as v,aX as h,r,o as f,n as b,p as e,q as l,aF as g,L as c}from"./index.05ea33df.js";import{_ as j}from"./PageWrapper.d9e1596c.js";import{D as x}from"./index.be446867.js";import"./vendor.352e3120.js";import"./usePageContext.918ba169.js";import"./onMountedOrActivated.a12ac1c0.js";import"./index.dbdd549b.js";import"./index.03402249.js";import"./useBreakpoint.249417d5.js";import"./responsiveObserve.968aa5d0.js";import"./useSize.c28e111d.js";import"./transButton.9a1903a9.js";import"./ArrowLeftOutlined.97d250aa.js";const S=_(()=>m(()=>import("./index.cb7d42bf.js"),["/assets/index.cb7d42bf.js","/assets/index.5ddcb78c.css","/assets/index.05ea33df.js","/assets/index.03307a49.css","/assets/vendor.352e3120.js"])),w=(()=>{const o=[];for(let s=1;s<2e4;s++)o.push({title:"\u5217\u8868\u9879"+s});return o})();var i=u({components:{VScroll:S,Divider:x,PageWrapper:j},setup(){return{data:w}}}),J=`.virtual-scroll-demo-wrap[data-v-b4120884] {
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
}`;const t=g();v("data-v-b4120884");const P=c("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),V={class:"virtual-scroll-demo-wrap"},y={class:"virtual-scroll-demo__item"},D=c("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),I={class:"virtual-scroll-demo-wrap"},W={class:"virtual-scroll-demo__item"};h();const $=t((o,s,k,A,B,C)=>{const d=r("Divider"),n=r("VScroll"),p=r("PageWrapper");return f(),b(p,{class:"virtual-scroll-demo"},{default:t(()=>[e(d,null,{default:t(()=>[P]),_:1}),e("div",V,[e(n,{itemHeight:41,items:o.data,height:300,width:300},{default:t(({item:a})=>[e("div",y,l(a.title),1)]),_:1},8,["items"])]),e(d,null,{default:t(()=>[D]),_:1}),e("div",I,[e(n,{itemHeight:41,items:o.data,height:300,width:300,bench:50},{default:t(({item:a})=>[e("div",W,l(a.title),1)]),_:1},8,["items"])])]),_:1})});i.render=$,i.__scopeId="data-v-b4120884";export default i;
