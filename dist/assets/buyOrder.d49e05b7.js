var s=Object.assign;import{be as u,cu as r}from"./index.05ea33df.js";import{S as t}from"./commonEnum.da040d67.js";const a={Page:{url:t.MATERIALS+"/buyOrder/page",method:r.POST},Save:{url:t.MATERIALS+"/buyOrder",method:r.POST},Update:{url:t.MATERIALS+"/buyOrder",method:r.PUT},Delete:{url:t.MATERIALS+"/buyOrder",method:r.DELETE},Query:{url:t.MATERIALS+"/buyOrder/query",method:r.POST}},d=e=>u.request(s(s({},a.Page),{params:e})),o=e=>u.request({url:t.MATERIALS+"/buyOrder/listBySkuId/"+e,method:r.GET}),A=e=>u.request({url:t.MATERIALS+"/buyOrder/detail/"+e,method:r.GET}),c=e=>u.request({url:t.MATERIALS+"/buyOrder/contractAck",method:r.POST,params:e}),S=e=>u.request({url:t.MATERIALS+"/buyOrder/arrivalAck",method:r.POST,params:e}),m=e=>u.request({url:t.MATERIALS+"/buyOrder/transferAck",method:r.POST,params:e}),T=e=>u.request(s(s({},a.Save),{params:e})),O=e=>u.request({url:t.MATERIALS+"/buyOrder/customCreateBuyOrder",method:r.POST,params:e}),l=e=>u.request({url:t.MATERIALS+"/buyOrder/create/"+e,method:r.POST}),n=e=>u.request(s(s({},a.Update),{params:e})),E=e=>u.request(s(s({},a.Delete),{params:e}));export{a as A,O as a,c as b,l as c,A as d,S as e,o as l,d as p,E as r,T as s,m as t,n as u};
