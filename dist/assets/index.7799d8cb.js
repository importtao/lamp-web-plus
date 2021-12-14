import{D as _,G as f,S as v}from"./siteSetting.31110d56.js";import{d as g,j,bH as y,g as F,k as S,D as d,aL as h,dK as C,aW as L,aX as w,r as l,o as I,n as k,p as t,q as p,N as R,aF as U}from"./index.0523a5a3.js";import{L as $}from"./index.937666c7.js";import{G}from"./GithubFilled.15d30a40.js";import"./vendor.352e3120.js";import"./useFullScreen.4feb3b86.js";import"./FullscreenOutlined.d52a1fbe.js";import"./isNumeric.2bec345d.js";import"./index.8e1ef517.js";import"./useWindowSizeFn.4268e9dd.js";import"./uniqBy.2c7c6ba7.js";import"./_baseIteratee.32c93b4a.js";import"./get.108cb567.js";import"./hasIn.a020a292.js";import"./_baseProperty.74f89655.js";import"./usePageContext.0fc2e04d.js";import"./index.05d758e3.js";import"./RedoOutlined.e111b4c0.js";import"./useSortable.d1ae52c9.js";import"./index.08635ac9.js";import"./UpOutlined.a2803449.js";import"./PlusOutlined.3cbe2bbe.js";var s=g({name:"LayoutFooter",components:{Footer:$.Footer,GithubFilled:G},setup(){const{t:o}=j(),{getShowFooter:e}=C(),{currentRoute:a}=y(),{prefixCls:r}=F("layout-footer");return{getShowLayoutFooter:S(()=>{var n;return d(e)&&!((n=d(a).meta)==null?void 0:n.hiddenFooter)}),prefixCls:r,t:o,DOC_URL:_,GITHUB_URL:f,SITE_URL:v,openWindow:h}}}),no=`.vben-layout-footer[data-v-183dcd01] {
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
}`;const u=U();L("data-v-183dcd01");const D=t("div",null,"Copyright \xA92020 Vben Admin",-1);w();const O=u((o,e,a,r,m,n)=>{const c=l("GithubFilled"),b=l("Footer");return o.getShowLayoutFooter?(I(),k(b,{key:0,class:o.prefixCls},{default:u(()=>[t("div",{class:`${o.prefixCls}__links`},[t("a",{onClick:e[1]||(e[1]=i=>o.openWindow(o.SITE_URL))},p(o.t("layout.footer.onlinePreview")),1),t(c,{onClick:e[2]||(e[2]=i=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),t("a",{onClick:e[3]||(e[3]=i=>o.openWindow(o.DOC_URL))},p(o.t("layout.footer.onlineDocument")),1)],2),D]),_:1},8,["class"])):R("",!0)});s.render=O,s.__scopeId="data-v-183dcd01";export default s;
