import{_ as c}from"./index.vue_vue&type=script&lang.c6561d56.js";import{u as n}from"./useDescription.4491a868.js";import{_ as l}from"./PageWrapper.3df1718a.js";import{d as m,r as i,o as d,n as f,J as g,p as s}from"./index.b361f078.js";import"./index.b3908db1.js";import"./responsiveObserve.16e475dd.js";import"./get.cbc20f33.js";import"./usePageContext.48026c97.js";import"./onMountedOrActivated.db240d29.js";import"./index.2682bd6c.js";import"./index.ad62d489.js";import"./useBreakpoint.3b9cff8d.js";import"./useSize.5dcbe36a.js";import"./transButton.7b09546d.js";import"./ArrowLeftOutlined.9183eb3a.js";import"./vendor.352e3120.js";const r={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"\u53A6\u95E8\u5E02\u601D\u660E\u533A",sex:"\u7537",certy:"3504256199xxxxxxxxx",tag:"orange"},o=[{field:"username",label:"\u7528\u6237\u540D"},{field:"nickName",label:"\u6635\u79F0",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"\u8054\u7CFB\u7535\u8BDD"},{field:"email",label:"\u90AE\u7BB1"},{field:"addr",label:"\u5730\u5740"}];var p=m({components:{Description:c,PageWrapper:l},setup(){const[e]=n({title:"useDescription",data:r,schema:o}),[t]=n({title:"\u65E0\u8FB9\u6846",bordered:!1,data:r,schema:o});return{mockData:r,schema:o,register:e,register1:t}}});function x(e,t,b,j,h,D){const a=i("Description"),u=i("PageWrapper");return d(),f(u,{title:"\u8BE6\u60C5\u7EC4\u4EF6\u793A\u4F8B"},{default:g(()=>[s(a,{title:"\u57FA\u7840\u793A\u4F8B",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(a,{class:"mt-4",title:"\u5782\u76F4\u793A\u4F8B",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(a,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),s(a,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])]),_:1})}p.render=x;export default p;
