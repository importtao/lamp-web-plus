import{aA as O,w as b,ej as F,eu as G,ev as C,ae as _,D as L,ew as k}from"./index.05ea33df.js";const R=k?window:void 0;function x(t){var s,u;const l=L(t);return(u=(s=l)===null||s===void 0?void 0:s.$el)!==null&&u!==void 0?u:l}function y(...t){let s,u,l,i;if(G(t[0])?([u,l,i]=t,s=R):[s,u,l,i]=t,!s)return C;let a=C;const d=_(()=>L(s),o=>{a(),!!o&&(o.addEventListener(u,l,i),a=()=>{o.removeEventListener(u,l,i),a=C})},{immediate:!0,flush:"post"}),n=()=>{d(),a()};return O(n),n}const U=["mousedown","touchstart","pointerdown"];function j(t,s,u={}){const{window:l=R}=u;if(!l)return;const i=n=>{const o=x(t);!o||o===n.target||n.composedPath().includes(o)||s(n)};let a=U.map(n=>y(l,n,i,{passive:!0}));const d=()=>{a.forEach(n=>n()),a=[]};return O(d),d}var W;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT"})(W||(W={}));function I(t){return t===!0?{}:t}function H(t,s={}){const{onConnected:u,onDisconnected:l,onError:i,onMessage:a}=s,d=b(null),n=b("CONNECTING"),o=b();let c,f,p=!1,E=0,v=[];const h=(e,r)=>{!o.value||(p=!0,c==null||c(),o.value.close(e,r))},P=(e,r=!0)=>!o.value||n.value!=="OPEN"?(r&&v.push(e),!1):(T(),o.value.send(e),!0),T=()=>{if(v.length&&o.value&&n.value==="OPEN"){for(const e of v)o.value.send(e);v=[]}},g=()=>{const e=new WebSocket(t);o.value=e,n.value="CONNECTING",p=!1,e.onopen=()=>{n.value="OPEN",u==null||u(e),f==null||f(),T()},e.onclose=r=>{if(n.value="CLOSED",o.value=void 0,l==null||l(e,r),!p&&s.autoReconnect){const{retries:m=-1,delay:w=1e3,onFailed:N}=I(s.autoReconnect);E+=1,m<0||E<m?setTimeout(g,w):N==null||N()}},e.onerror=r=>{i==null||i(e,r)},e.onmessage=r=>{d.value=r.data,a==null||a(e,r)}};if(s.heartbeat){const{message:e="ping",interval:r=1e3}=I(s.heartbeat),{pause:m,resume:w}=F(()=>P(e,!1),r,!1);c=m,f=w}const D=()=>{h(),E=0,g()};return O(h),{data:d,status:n,close:h,send:P,open:D,ws:o}}export{j as o,H as u};
