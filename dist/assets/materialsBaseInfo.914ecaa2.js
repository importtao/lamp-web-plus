var a=Object.assign;import{be as s,cu as t}from"./index.05ea33df.js";import{S as r}from"./commonEnum.da040d67.js";const o={Page:{url:r.MATERIALS+"/materialsBaseInfo/page",method:t.POST},Save:{url:r.MATERIALS+"/materialsBaseInfo",method:t.POST},Update:{url:r.MATERIALS+"/materialsBaseInfo",method:t.PUT},Delete:{url:r.MATERIALS+"/materialsBaseInfo",method:t.DELETE},Query:{url:r.MATERIALS+"/materialsBaseInfo/query",method:t.POST}},m=e=>s.request(a(a({},o.Page),{params:e})),u=e=>s.request(a(a({},o.Query),{params:e})),n=e=>s.request({url:r.MATERIALS+"/materialsBaseInfo/byMaterialsId/"+e,method:t.GET}),d=()=>s.request({url:r.MATERIALS+"/materialsBaseInfo/nameIdList",method:t.GET}),I=e=>s.request(a(a({},o.Save),{params:e})),l=e=>s.request(a(a({},o.Update),{params:e})),i=e=>s.request(a(a({},o.Delete),{params:e}));export{o as A,n as g,d as n,m as p,u as q,i as r,I as s,l as u};
