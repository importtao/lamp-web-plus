import{b as u}from"./_baseSet.47d9038f.js";function o(s,l,e){return s==null?s:u(s,l,e)}function d(s,l="lang"){const e={};return Object.keys(s).forEach(a=>{const i=s[a].default;let n=a.replace(`./${l}/`,"").replace(/^\.\//,"");const c=n.lastIndexOf(".");n=n.substring(0,c);const f=n.split("/"),t=f.shift(),r=f.join(".");t&&(r?(o(e,t,e[t]||{}),o(e[t],r,i)):o(e,t,i||{}))}),e}export{d as g};
