import{x as i}from"./index.9e2ace2f.js";import{d as R,w as h,D as g,o as C,n as N,G as $,H as j,p as v,aG as I}from"./index.f012a3f4.js";import"./vendor.352e3120.js";var w=R({name:"ImportExcel",emits:["success","error"],setup(l,{emit:s}){const u=h(null),d=h(!1);function p(e){if(!e||!e["!ref"])return[];const t=[],n=i.utils.decode_range(e["!ref"]),o=n.s.r;for(let r=n.s.c;r<=n.e.c;++r){const a=e[i.utils.encode_cell({c:r,r:o})];let f="UNKNOWN "+r;a&&a.t&&(f=i.utils.format_cell(a)),t.push(f)}return t}function m(e){const t=[];for(const n of e.SheetNames){const o=e.Sheets[n],r=p(o),a=i.utils.sheet_to_json(o);t.push({header:r,results:a,meta:{sheetName:n}})}return t}function c(e){return d.value=!0,new Promise((t,n)=>{const o=new FileReader;o.onload=async r=>{try{const a=r.target&&r.target.result,f=i.read(a,{type:"array"}),D=m(f);s("success",D),t("")}catch(a){n(a),s("error")}finally{d.value=!1}},o.readAsArrayBuffer(e)})}async function x(e){const t=g(u);t&&(t.value=""),await c(e)}function k(e){const t=e&&e.target.files,n=t&&t[0];!n||x(n)}function y(){const e=g(u);e&&e.click()}return{handleUpload:y,handleInputClick:k,inputRef:u}}});function S(l,s,u,d,p,m){return C(),N("div",null,[$(v("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:s[1]||(s[1]=(...c)=>l.handleInputClick&&l.handleInputClick(...c))},null,544),[[j,!1]]),v("div",{onClick:s[2]||(s[2]=(...c)=>l.handleUpload&&l.handleUpload(...c))},[I(l.$slots,"default")])])}w.render=S;export default w;
