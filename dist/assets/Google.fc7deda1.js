import{u as p}from"./useScript.6c83337c.js";import{d as c,w as l,x as d,V as f,D as u,o as g,n as m}from"./index.05ea33df.js";import"./vendor.352e3120.js";const w="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWrGwj4gAzKndcbwD5favT9K0wgty_0&signed_in=true";var r=c({name:"GoogleMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=l(null),{toPromise:a}=p({src:w});async function s(){await a(),await f();const t=u(e);if(!t)return;const n=window.google,o={lat:116.404,lng:39.915},i=new n.maps.Map(t,{zoom:4,center:o});new n.maps.Marker({position:o,map:i,title:"Hello World!"})}return d(()=>{s()}),{wrapRef:e}}});function h(e,a,s,t,n,o){return g(),m("div",{ref:"wrapRef",style:{height:e.height,width:e.width}},null,4)}r.render=h;export default r;
