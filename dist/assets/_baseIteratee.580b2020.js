import{aN as _,aO as R,i as m,aa as y,aP as h,t as O,aQ as M,aR as C,aS as I}from"./index.b7a14d4f.js";import{g as b}from"./get.17b5f080.js";import{h as L}from"./hasIn.55ea5e75.js";import{b as d}from"./_baseProperty.74f89655.js";var l=1,D=2;function G(n,r,e,t){var i=e.length,a=i,o=!t;if(n==null)return!a;for(n=Object(n);i--;){var f=e[i];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<a;){f=e[i];var s=f[0],u=n[s],A=f[1];if(o&&f[2]){if(u===void 0&&!(s in n))return!1}else{var p=new _;if(t)var P=t(u,A,s,n,r,p);if(!(P===void 0?R(A,u,l|D,t,p):P))return!1}}return!0}function g(n){return n===n&&!m(n)}function w(n){for(var r=y(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,g(i)]}return r}function E(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function F(n){var r=w(n);return r.length==1&&r[0][2]?E(r[0][0],r[0][1]):function(e){return e===n||G(e,n,r)}}var S=1,x=2;function N(n,r){return h(n)&&g(r)?E(O(n),r):function(e){var t=b(e,n);return t===void 0&&t===r?L(e,n):R(r,t,S|x)}}function c(n){return function(r){return M(r,n)}}function K(n){return h(n)?d(O(n)):c(n)}function T(n){return typeof n=="function"?n:n==null?C:typeof n=="object"?I(n)?N(n[0],n[1]):F(n):K(n)}export{T as b};
