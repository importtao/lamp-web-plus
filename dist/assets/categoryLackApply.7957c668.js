var t=Object.assign;import{be as o,cu as a}from"./index.b361f078.js";import{S as r}from"./commonEnum.da040d67.js";const s={Page:{url:r.MATERIALS+"/categoryLackApply/page",method:a.POST},Save:{url:r.MATERIALS+"/categoryLackApply",method:a.POST},Update:{url:r.MATERIALS+"/categoryLackApply",method:a.PUT},Delete:{url:r.MATERIALS+"/categoryLackApply",method:a.DELETE},Query:{url:r.MATERIALS+"/categoryLackApply/query",method:a.POST}},p=e=>o.request(t(t({},s.Page),{params:e})),c=e=>o.request({url:r.MATERIALS+"/categoryLackApply/info/"+e,method:a.GET}),A=e=>o.request({url:r.MATERIALS+"/categoryLackApply/handler",method:a.POST,params:e}),u=e=>o.request(t(t({},s.Save),{params:e})),l=e=>o.request(t(t({},s.Update),{params:e})),d=e=>o.request(t(t({},s.Delete),{params:e}));export{s as A,c as d,A as h,p,d as r,u as s,l as u};
