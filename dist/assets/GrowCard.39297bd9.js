import{C as s}from"./index.36f951db.js";import{r as p,d as c}from"./analysis-down.2ca5edf2.js";import{d,r as e,o as l,n as f,p as o,q as t,J as g}from"./index.05ea33df.js";import{S as m}from"./index.7b3b43f7.js";import"./vendor.352e3120.js";import"./_baseProperty.74f89655.js";import"./toInteger.e36ca646.js";var r=d({components:{Statistic:m,CountTo:s},props:{info:{type:Object,default:null}},setup(){return{riseSvg:p,downSvg:c}}}),T=`.grow-card {
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
}`;const _={class:"grow-card"},u={class:"grow-card-header"},w={class:"grow-card__info"},x={class:"grow-card__title"},h={class:"grow-card__mom"};function v(n,y,b,S,C,j){const a=e("CountTo"),i=e("Statistic");return l(),f("div",_,[o("div",u,[o("div",w,[o("p",x,t(n.info.title),1),o(a,{prefix:"$",startVal:1,endVal:n.info.price},null,8,["endVal"])]),o("img",{src:n.info.icon},null,8,["src"])]),o("div",{class:["grow-card-footer",{"is-up":n.info.up}]},[o(i,{value:n.info.percent},{prefix:g(()=>[o("img",{src:n.info.up?n.riseSvg:n.downSvg},null,8,["src"])]),_:1},8,["value"]),o("span",h,t(n.info.mom),1)],2)])}r.render=v;export default r;
