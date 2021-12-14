import{C as r}from"./index.425631b6.js";import{r as a,d as i}from"./analysis-down.2ca5edf2.js";import{d as s,r as c,o as p,n as d,p as n,q as l}from"./index.b361f078.js";import"./vendor.352e3120.js";var e=s({components:{CountTo:r},props:{info:{type:Object,default:null}},setup(){return{riseSvg:a,downSvg:i}}}),k=`.grow-card {
  display: flex;
  width: calc(100% - 12px);
  height: 158px;
  padding: 16px 16px 12px 16px;
  cursor: pointer;
  background: #fff;
  border-radius: 4px;
  box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.05);
  flex-direction: column;
}
.grow-card:hover {
  box-shadow: 6px 6px 54px 0 rgba(0, 0, 0, 0.1);
}
.grow-card-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.grow-card__title {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  letter-spacing: 0;
  color: rgba(0, 0, 0, 0.85);
  opacity: 0.7;
}
.grow-card__info span {
  font-family: NeoSans;
  font-size: 26px;
  line-height: 38px;
}
.grow-card-footer {
  display: flex;
  width: 100%;
  margin-top: 24px;
  align-items: center;
}
.grow-card-footer .ant-statistic-content-value {
  color: #ED6F6F;
}
.grow-card-footer .ant-statistic-content-prefix svg {
  width: 0.98rem !important;
  height: 0.98rem !important;
}
.grow-card-footer.is-up .ant-statistic-content-value {
  color: #55D187;
}
.grow-card__mom {
  display: inline-block;
  padding-left: 10px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0;
  color: #606060;
}`;const f={class:"grow-card"},g={class:"grow-card-header"},x={class:"grow-card__info"},_={class:"grow-card__title"};function m(o,u,w,h,v,y){const t=c("CountTo");return p(),d("div",f,[n("div",g,[n("div",x,[n("p",_,l(o.info.title),1),n(t,{prefix:"",startVal:1,endVal:o.info.price},null,8,["endVal"])]),n("img",{src:o.info.icon},null,8,["src"])])])}e.render=m;export default e;
