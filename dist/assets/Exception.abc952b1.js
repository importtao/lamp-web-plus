import{d as N,dj as t,w as O,dk as R,dl as v,j as S,g as A,k as b,D as s,dm as T,p as r,B as k,di as h}from"./index.05ea33df.js";import{R as G}from"./index.f7bb3622.js";import"./vendor.352e3120.js";var D="/assets/no-data.f7e550cc.svg",P="/assets/net-error.61b7e6df.svg",C=N({name:"ErrorPage",props:{status:{type:Number,default:t.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:m}=R(),o=h(),c=v(),{t:e}=S(),{prefixCls:f}=A("app-exception-page"),_=b(()=>{const{status:l}=m,{status:u}=n;return Number(l)||u}),g=b(()=>s(a).get(s(_))),d=e("sys.exception.backLogin"),i=e("sys.exception.backHome");return s(a).set(t.PAGE_NOT_ACCESS,{title:"403",status:`${t.PAGE_NOT_ACCESS}`,subTitle:e("sys.exception.subTitle403"),btnText:n.full?d:i,handler:()=>n.full?o(T.BASE_LOGIN):o()}),s(a).set(t.PAGE_NOT_FOUND,{title:"404",status:`${t.PAGE_NOT_FOUND}`,subTitle:e("sys.exception.subTitle404"),btnText:n.full?d:i,handler:()=>n.full?o(T.BASE_LOGIN):o()}),s(a).set(t.ERROR,{title:"500",status:`${t.ERROR}`,subTitle:e("sys.exception.subTitle500"),btnText:i,handler:()=>o()}),s(a).set(t.PAGE_NOT_DATA,{title:e("sys.exception.noDataTitle"),subTitle:"",btnText:e("common.redo"),handler:()=>c(),icon:D}),s(a).set(t.NET_WORK_ERROR,{title:e("sys.exception.networkErrorTitle"),subTitle:e("sys.exception.networkErrorSubTitle"),btnText:e("common.redo"),handler:()=>c(),icon:P}),()=>{const{title:l,subTitle:u,btnText:p,icon:x,handler:E,status:y}=s(g)||{};return r(G,{class:f,status:y,title:n.title||l,"sub-title":n.subTitle||u},{extra:()=>p&&r(k,{type:"primary",onClick:E},{default:()=>p}),icon:()=>x?r("img",{src:x},null):null})}}}),I=`.vben-app-exception-page {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.vben-app-exception-page .ant-result-icon img {
  max-width: 400px;
  max-height: 300px;
}`;export default C;
