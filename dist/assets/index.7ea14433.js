import{D as b,G as _,S as v}from"./siteSetting.31110d56.js";import{d as g,j,bH as y,g as F,k as S,D as d,aL as h,dK as C,aW as L,aX as w,r as l,o as I,n as k,p as t,q as p,N as R,aF as U}from"./index.b6dfbfcf.js";import{L as $}from"./index.6af4a72f.js";import{G}from"./GithubFilled.2eb55be9.js";import"./vendor.352e3120.js";import"./useFullScreen.67aa57a8.js";import"./FullscreenOutlined.fdd43b18.js";import"./isNumeric.2bec345d.js";import"./index.8ba7a42d.js";import"./useWindowSizeFn.fee40caf.js";import"./uniqBy.c4f2e7ec.js";import"./_baseIteratee.2e9463e3.js";import"./get.4daef9c8.js";import"./hasIn.babd797c.js";import"./_baseProperty.74f89655.js";import"./usePageContext.4aadab4f.js";import"./index.8c7a9c9a.js";import"./RedoOutlined.6634afa6.js";import"./useSortable.f59e44e0.js";import"./index.d98a3c80.js";import"./UpOutlined.4269b743.js";import"./PlusOutlined.84d8b58b.js";var a=g({name:"LayoutFooter",components:{Footer:$.Footer,GithubFilled:G},setup(){const{t:o}=j(),{getShowFooter:e}=C(),{currentRoute:s}=y(),{prefixCls:r}=F("layout-footer");return{getShowLayoutFooter:S(()=>{var n;return d(e)&&!((n=d(s).meta)==null?void 0:n.hiddenFooter)}),prefixCls:r,t:o,DOC_URL:b,GITHUB_URL:_,SITE_URL:v,openWindow:h}}}),no=`.vben-layout-footer[data-v-183dcd01] {
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
}`;const u=U();L("data-v-183dcd01");const D=t("div",null,"Copyright \xA92020 Vben Admin",-1);w();const O=u((o,e,s,r,m,n)=>{const c=l("GithubFilled"),f=l("Footer");return o.getShowLayoutFooter?(I(),k(f,{key:0,class:o.prefixCls},{default:u(()=>[t("div",{class:`${o.prefixCls}__links`},[t("a",{onClick:e[1]||(e[1]=i=>o.openWindow(o.SITE_URL))},p(o.t("layout.footer.onlinePreview")),1),t(c,{onClick:e[2]||(e[2]=i=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),t("a",{onClick:e[3]||(e[3]=i=>o.openWindow(o.DOC_URL))},p(o.t("layout.footer.onlineDocument")),1)],2),D]),_:1},8,["class"])):R("",!0)});a.render=O,a.__scopeId="data-v-183dcd01";export default a;
