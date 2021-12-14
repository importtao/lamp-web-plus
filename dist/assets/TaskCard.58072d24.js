import{d as c,k as l,aW as f,aX as u,r,o as _,n as v,p as n,q as e,aF as x,L as d}from"./index.b361f078.js";import{P as g}from"./index.fa7b5b48.js";import{A as m}from"./index.ad62d489.js";import"./vendor.352e3120.js";import"./useBreakpoint.3b9cff8d.js";import"./responsiveObserve.16e475dd.js";import"./useSize.5dcbe36a.js";var o=c({name:"GrowCard",components:{Progress:g,Avatar:m},props:{info:{type:Object,default:null}},setup(a){return{prefixCls:"task-card",text:l(()=>{const{status:s}=a.info||{};return s==="active"?"\u8FDB\u5EA6\u6B63\u5E38":s==="exception"?"\u8FDB\u5EA6\u6EDE\u540E":"\u9879\u76EE\u5B8C\u6210"})}}}),F=`.task-card[data-v-43ac58a2] {
  display: flex;
  width: calc(100% - 24px);
  height: 199px;
  padding: 24px 20px 12px 16px;
  margin: 0 12px 12px 12px;
  background: #fff;
  border: 1px solid #ececf2;
  border-radius: 12px;
  flex-direction: column;
}
.task-card-header[data-v-43ac58a2] {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.task-card__tag[data-v-43ac58a2] {
  display: inline-block;
  padding: 4px 6px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  border-radius: 6px;
}
.task-card__tag.success[data-v-43ac58a2] {
  color: #55d187;
  background: rgba(85, 209, 135, 0.16);
}
.task-card__tag.warn[data-v-43ac58a2] {
  color: #ffa07d;
  background: #ffd16416;
}
.task-card__tag.done[data-v-43ac58a2] {
  color: #0593ff;
  background: #0593ff16;
}
.task-card__info[data-v-43ac58a2] {
  display: flex;
  flex-direction: column;
}
.task-card__title[data-v-43ac58a2] {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
}
.task-card__desc[data-v-43ac58a2] {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  line-height: 21px;
  color: #8181a5;
}
.task-card__process-nfo[data-v-43ac58a2] {
  display: flex;
  justify-content: space-between;
}
.task-card__process-nfo span[data-v-43ac58a2] {
  font-size: 14px;
  line-height: 21px;
  color: #8181a5;
}
.task-card-footer[data-v-43ac58a2] {
  display: flex;
  width: 100%;
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;
}
.task-card__date[data-v-43ac58a2] {
  font-size: 12px;
  line-height: 21px;
  color: #2c3a61;
}
.task-card__date span[data-v-43ac58a2] {
  color: #7c8087;
}
.task-card__avatar[data-v-43ac58a2] {
  display: flex;
}`;const i=x();f("data-v-43ac58a2");const k=n("span",null,"\u8FDB\u5EA6",-1),b=d(" \u66F4\u65B0\u65E5\u671F: "),h=d("+3");u();const C=i((a,s,y,j,$,w)=>{const p=r("Progress"),t=r("Avatar");return _(),v("div",{class:a.prefixCls},[n("div",{class:`${a.prefixCls}-header`},[n("div",{class:`${a.prefixCls}__info`},[n("span",{class:`${a.prefixCls}__title`},e(a.info.title),3),n("span",{class:`${a.prefixCls}__desc`},e(a.info.desc),3)],2),n("span",{class:`${a.prefixCls}__tag ${a.info.status}`},e(a.info.text),3)],2),n("div",{class:`${a.prefixCls}-body mt-5`},[n("div",{class:`${a.prefixCls}__process-nfo`},[k,n("span",null,e(a.info.percent)+"%",1)],2),n(p,{percent:a.info.percent,showInfo:!1,status:a.info.status},null,8,["percent","status"])],2),n("div",{class:`${a.prefixCls}-footer`},[n("span",{class:`${a.prefixCls}__date`},[b,n("span",null,e(a.info.updateTime),1)],2),n("div",{class:`${a.prefixCls}__avatar`},[n(t,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),n(t,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),n(t,null,{default:i(()=>[h]),_:1})],2)],2)],2)});o.render=C,o.__scopeId="data-v-43ac58a2";export default o;
