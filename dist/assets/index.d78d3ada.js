import{D as b,G as _,S as v}from"./siteSetting.31110d56.js";import{d as g,j,bH as y,g as F,k as S,D as d,aL as h,dK as C,aW as L,aX as w,r as l,o as I,n as k,p as t,q as p,N as R,aF as U}from"./index.05ea33df.js";import{L as $}from"./index.30c85b18.js";import{G}from"./GithubFilled.c93abd32.js";import"./vendor.352e3120.js";import"./useFullScreen.446380e8.js";import"./FullscreenOutlined.6ef047e2.js";import"./isNumeric.2bec345d.js";import"./index.34f18b0a.js";import"./useWindowSizeFn.bedcc730.js";import"./uniqBy.6f8da1a0.js";import"./_baseIteratee.6051ea54.js";import"./get.f4e2a1c0.js";import"./hasIn.3c39ff13.js";import"./_baseProperty.74f89655.js";import"./usePageContext.918ba169.js";import"./index.965e0ed2.js";import"./RedoOutlined.d497a357.js";import"./useSortable.d85458f7.js";import"./index.e2b3f20e.js";import"./UpOutlined.b05eb3d5.js";import"./PlusOutlined.cfc7a86d.js";var s=g({name:"LayoutFooter",components:{Footer:$.Footer,GithubFilled:G},setup(){const{t:e}=j(),{getShowFooter:o}=C(),{currentRoute:r}=y(),{prefixCls:a}=F("layout-footer");return{getShowLayoutFooter:S(()=>{var n;return d(o)&&!((n=d(r).meta)==null?void 0:n.hiddenFooter)}),prefixCls:a,t:e,DOC_URL:b,GITHUB_URL:_,SITE_URL:v,openWindow:h}}}),ne=`.vben-layout-footer[data-v-183dcd01] {
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
}
.vben-layout-footer__links[data-v-183dcd01] {
  margin-bottom: 8px;
}
.vben-layout-footer__links a[data-v-183dcd01] {
  color: rgba(0, 0, 0, 0.45);
}
.vben-layout-footer__links a[data-v-183dcd01]:hover {
  color: rgba(0, 0, 0, 0.85);
}
.vben-layout-footer__github[data-v-183dcd01] {
  margin: 0 30px;
}
.vben-layout-footer__github[data-v-183dcd01]:hover {
  color: rgba(0, 0, 0, 0.85);
}`;const u=U();L("data-v-183dcd01");const D=t("div",null,"Copyright \xA92020 Vben Admin",-1);w();const O=u((e,o,r,a,m,n)=>{const c=l("GithubFilled"),f=l("Footer");return e.getShowLayoutFooter?(I(),k(f,{key:0,class:e.prefixCls},{default:u(()=>[t("div",{class:`${e.prefixCls}__links`},[t("a",{onClick:o[1]||(o[1]=i=>e.openWindow(e.SITE_URL))},p(e.t("layout.footer.onlinePreview")),1),t(c,{onClick:o[2]||(o[2]=i=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),t("a",{onClick:o[3]||(o[3]=i=>e.openWindow(e.DOC_URL))},p(e.t("layout.footer.onlineDocument")),1)],2),D]),_:1},8,["class"])):R("",!0)});s.render=O,s.__scopeId="data-v-183dcd01";export default s;
