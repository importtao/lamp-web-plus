import{d as g,aC as w,g as h,k as j,aH as P,r as n,o,n as i,p as c,J as u,aG as $,M as L,aE as I,s as l,aD as k}from"./index.b6dfbfcf.js";import{I as f}from"./index.ffba0b1a.js";import{_ as x}from"./PageWrapper.69acb2a5.js";import"./vendor.352e3120.js";import"./css.b1edd3c8.js";import"./usePageContext.4aadab4f.js";import"./onMountedOrActivated.9d53918d.js";import"./index.a846e3a0.js";import"./index.4cbf17ba.js";import"./useBreakpoint.4a44e358.js";import"./responsiveObserve.7206f913.js";import"./useSize.fb5b95d6.js";import"./transButton.bd1bd746.js";import"./ArrowLeftOutlined.7dae0225.js";var _=g({name:"ImagePreview",components:{Image:f,PreviewGroup:f.PreviewGroup},props:{functional:w.bool,imageList:{type:Array}},setup(e){const{prefixCls:p}=h("image-preview"),m=j(()=>{const{imageList:a}=e;return a?a.map(r=>P(r)?{src:r,placeholder:!1}:r):[]});return{prefixCls:p,getImageList:m}}}),V=`.vben-image-preview .ant-image {
  margin-right: 10px;
}
.vben-image-preview .ant-image-preview-operations {
  background: rgba(0, 0, 0, 0.4);
}`;function y(e,p,m,a,r,b){const t=n("Image"),d=n("PreviewGroup");return o(),i("div",{class:e.prefixCls},[c(d,null,{default:u(()=>[!e.imageList||e.$slots.default?$(e.$slots,"default",{key:0}):(o(!0),i(L,{key:1},I(e.getImageList,s=>(o(),i(t,l({key:s.src},s),k({_:2},[s.placeholder?{name:"placeholder",fn:u(()=>[c(t,l(s,{src:s.placeholder,preview:!1}),null,16,["src"])])}:void 0]),1040))),128))]),_:1})],2)}_.render=y;const C=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var v=g({components:{PageWrapper:x,ImagePreview:_},setup(){return{imgList:C}}});function G(e,p,m,a,r,b){const t=n("ImagePreview"),d=n("PageWrapper");return o(),i(d,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:u(()=>[c(t,{imageList:e.imgList},null,8,["imageList"])]),_:1})}v.render=G;export default v;
