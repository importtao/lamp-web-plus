import{V as s,bc as d,D as f,bd as _,aA as x}from"./index.05ea33df.js";function l(p){let e=null;function a(t,n){s(()=>{d(async()=>{const u=f(p);if(!u||!f(u))return;const o=await(await _(()=>import("./apexcharts.common.db63e924.js").then(function(r){return r.a}),["/assets/apexcharts.common.db63e924.js","/assets/vendor.352e3120.js"])).default;e=new o(u,t),e&&e.render(),n&&n(e)},30)})}function m(t,n,u=!1,o=!0,r=!0,i){s(()=>{d(()=>{t&&t.updateOptions(n,u,o,r),i&&i(t)},30)})}return x(()=>{var t;!e||((t=e==null?void 0:e.destroy)==null||t.call(e),e=null)}),{setOptions:a,updateOptions:m}}export{l as u};
