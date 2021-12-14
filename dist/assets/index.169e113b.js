import{D as f,G as _,S as v}from"./siteSetting.31110d56.js";import{d as g,j,bH as y,g as F,k as S,D as d,aL as h,dK as C,aW as L,aX as w,r as l,o as I,n as k,p as t,q as p,N as R,aF as U}from"./index.f012a3f4.js";import{L as $}from"./index.5e003425.js";import{G}from"./GithubFilled.7d0a465a.js";import"./vendor.352e3120.js";import"./useFullScreen.96289f6a.js";import"./FullscreenOutlined.db659752.js";import"./isNumeric.2bec345d.js";import"./index.473ca030.js";import"./useWindowSizeFn.21617b5b.js";import"./uniqBy.1b31fa16.js";import"./_baseIteratee.c907cd0a.js";import"./get.4bb36d6d.js";import"./hasIn.e5f45297.js";import"./_baseProperty.74f89655.js";import"./usePageContext.2729de0d.js";import"./index.a9d5c22c.js";import"./RedoOutlined.bbea3551.js";import"./useSortable.271c5036.js";import"./index.fb19caf5.js";import"./UpOutlined.5f7f87c9.js";import"./PlusOutlined.0c40939d.js";var s=g({name:"LayoutFooter",components:{Footer:$.Footer,GithubFilled:G},setup(){const{t:o}=j(),{getShowFooter:e}=C(),{currentRoute:r}=y(),{prefixCls:a}=F("layout-footer");return{getShowLayoutFooter:S(()=>{var n;return d(e)&&!((n=d(r).meta)==null?void 0:n.hiddenFooter)}),prefixCls:a,t:o,DOC_URL:f,GITHUB_URL:_,SITE_URL:v,openWindow:h}}}),no=`.vben-layout-footer[data-v-183dcd01] {
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
}`;const u=U();L("data-v-183dcd01");const D=t("div",null,"Copyright \xA92020 Vben Admin",-1);w();const O=u((o,e,r,a,m,n)=>{const c=l("GithubFilled"),b=l("Footer");return o.getShowLayoutFooter?(I(),k(b,{key:0,class:o.prefixCls},{default:u(()=>[t("div",{class:`${o.prefixCls}__links`},[t("a",{onClick:e[1]||(e[1]=i=>o.openWindow(o.SITE_URL))},p(o.t("layout.footer.onlinePreview")),1),t(c,{onClick:e[2]||(e[2]=i=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),t("a",{onClick:e[3]||(e[3]=i=>o.openWindow(o.DOC_URL))},p(o.t("layout.footer.onlineDocument")),1)],2),D]),_:1},8,["class"])):R("",!0)});s.render=O,s.__scopeId="data-v-183dcd01";export default s;
