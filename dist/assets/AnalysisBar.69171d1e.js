import{u as i}from"./useECharts.44c0dc81.js";import{b as r}from"./props.f48aca0b.js";import{d as o,w as u,x as n,o as s,n as d}from"./index.05ea33df.js";import"./vendor.352e3120.js";var a=o({name:"AnalysisLine",props:r,setup(){const e=u(null),{setOptions:t}=i(e);return n(()=>{t({tooltip:{trigger:"axis",backgroundColor:"rgba(0, 0, 0, .6)",axisPointer:{type:"shadow"}},legend:{itemWidth:15,right:10,data:["\u4EA7\u54C1\u4E00","\u4EA7\u54C1\u4E8C","\u4EA7\u54C1\u4E09"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",axisTick:{inside:!0},data:["\u4ED8\u8D39\u7528\u6237","\u514D\u8D39\u7528\u6237","\u81EA\u4E3B"]}],yAxis:[{type:"value",axisTick:{inside:!0}}],series:[{name:"\u4EA7\u54C1\u4E00",type:"bar",itemStyle:{color:"#3ca0f6"},data:[3200,3320,3010],animationDuration:4e3},{name:"\u4EA7\u54C1\u4E8C",type:"bar",itemStyle:{color:"#7dd9b9"},data:[1200,2600,1010],animationDuration:4e3},{name:"\u4EA7\u54C1\u4E09",type:"bar",itemStyle:{color:"#e6a23c"},data:[862,2500,964],animationDuration:4e3}]})}),{chartRef:e}}});function c(e,t,p,l,m,E){return s(),d("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)}a.render=c;export default a;
