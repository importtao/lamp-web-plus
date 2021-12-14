import{D as f,G as _,S as v}from"./siteSetting.31110d56.js";import{d as g,j,bH as y,g as F,k as S,D as d,aL as h,dK as C,aW as L,aX as w,r as l,o as I,n as k,p as t,q as p,N as R,aF as U}from"./index.b361f078.js";import{L as $}from"./index.d8965bac.js";import{G}from"./GithubFilled.c3ecd36c.js";import"./vendor.352e3120.js";import"./useFullScreen.541ad79f.js";import"./FullscreenOutlined.86c5b021.js";import"./isNumeric.2bec345d.js";import"./index.5c1ae20c.js";import"./useWindowSizeFn.d25090e5.js";import"./uniqBy.22bab247.js";import"./_baseIteratee.700ae08f.js";import"./get.cbc20f33.js";import"./hasIn.661f69c5.js";import"./_baseProperty.74f89655.js";import"./usePageContext.48026c97.js";import"./index.c407339a.js";import"./RedoOutlined.2709deaa.js";import"./useSortable.622674e9.js";import"./index.6ea0a64b.js";import"./UpOutlined.cbb592c6.js";import"./PlusOutlined.e0fec5ea.js";var s=g({name:"LayoutFooter",components:{Footer:$.Footer,GithubFilled:G},setup(){const{t:o}=j(),{getShowFooter:e}=C(),{currentRoute:a}=y(),{prefixCls:r}=F("layout-footer");return{getShowLayoutFooter:S(()=>{var n;return d(e)&&!((n=d(a).meta)==null?void 0:n.hiddenFooter)}),prefixCls:r,t:o,DOC_URL:f,GITHUB_URL:_,SITE_URL:v,openWindow:h}}}),no=`.vben-layout-footer[data-v-183dcd01] {
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
}`;const u=U();L("data-v-183dcd01");const D=t("div",null,"Copyright \xA92020 Vben Admin",-1);w();const O=u((o,e,a,r,c,n)=>{const m=l("GithubFilled"),b=l("Footer");return o.getShowLayoutFooter?(I(),k(b,{key:0,class:o.prefixCls},{default:u(()=>[t("div",{class:`${o.prefixCls}__links`},[t("a",{onClick:e[1]||(e[1]=i=>o.openWindow(o.SITE_URL))},p(o.t("layout.footer.onlinePreview")),1),t(m,{onClick:e[2]||(e[2]=i=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),t("a",{onClick:e[3]||(e[3]=i=>o.openWindow(o.DOC_URL))},p(o.t("layout.footer.onlineDocument")),1)],2),D]),_:1},8,["class"])):R("",!0)});s.render=O,s.__scopeId="data-v-183dcd01";export default s;
