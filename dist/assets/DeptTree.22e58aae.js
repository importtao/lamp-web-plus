import{_ as c}from"./index.vue_vue&type=style&index=0&lang.2319d069.js";import{a as d}from"./system.b19b36a0.js";import{d as l,w as p,x as m,r as f,o as u,n as _,p as j}from"./index.b7a14d4f.js";import"./useContextMenu.c9220dd8.js";import"./index.f8f362f5.js";import"./useExpose.da4b76ce.js";import"./iconUtil.5323a4d2.js";import"./conductUtil.b952d6da.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./get.17b5f080.js";import"./vendor.352e3120.js";var i=l({name:"DeptTree",components:{BasicTree:c},emits:["select"],setup(e,{emit:s}){const t=p([]);async function n(){t.value=await d()}function r(o,a){s("select",o[0]),console.log(o,a)}return m(()=>{n()}),{treeData:t,handleSelect:r}}});const b={class:"bg-white m-4 mr-0 overflow-hidden"};function h(e,s,t,n,r,o){const a=f("BasicTree");return u(),_("div",b,[j(a,{title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])}i.render=h;export default i;
