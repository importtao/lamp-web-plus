import{bx as M,by as W,bz as X,bA as Y,bB as j,p as m,d as I,R as E,ad as K,_ as b,bC as Q,Z as ee,S as l,ac as ae,w as P,x as te,bu as re,af as ne}from"./index.05ea33df.js";import{b as oe}from"./_baseProperty.74f89655.js";import{t as H}from"./toInteger.e36ca646.js";var ie=9007199254740991,ue=Math.floor;function V(a,e){var r="";if(!a||e<1||e>ie)return r;do e%2&&(r+=a),e=ue(e/2),e&&(a+=a);while(e);return r}var fe=oe("length"),k="\\ud800-\\udfff",se="\\u0300-\\u036f",le="\\ufe20-\\ufe2f",ve="\\u20d0-\\u20ff",ce=se+le+ve,de="\\ufe0e\\ufe0f",me="["+k+"]",y="["+ce+"]",R="\\ud83c[\\udffb-\\udfff]",pe="(?:"+y+"|"+R+")",U="[^"+k+"]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",z="[\\ud800-\\udbff][\\udc00-\\udfff]",Se="\\u200d",F=pe+"?",L="["+de+"]?",xe="(?:"+Se+"(?:"+[U,h,z].join("|")+")"+L+F+")*",be=L+F+xe,ge="(?:"+[U+y+"?",y,h,z,me].join("|")+")",O=RegExp(R+"(?="+R+")|"+ge+be,"g");function Ce(a){for(var e=O.lastIndex=0;O.test(a);)++e;return e}function _(a){return M(a)?Ce(a):fe(a)}var we=Math.ceil;function B(a,e){e=e===void 0?" ":W(e);var r=e.length;if(r<2)return r?V(e,a):e;var t=V(e,we(a/_(e)));return M(e)?X(Y(t),0,a).join(""):t.slice(0,a)}function ye(a,e,r){a=j(a),e=H(e);var t=e?_(a):0;return e&&t<e?B(e-t,r)+a:a}function Re(a,e,r){a=j(a),e=H(e);var t=e?_(a):0;return e&&t<e?a+B(e-t,r):a}var J=function(e){var r=e.value,t=e.formatter,i=e.precision,p=e.decimalSeparator,v=e.groupSeparator,S=v===void 0?"":v,o=e.prefixCls,c;if(typeof t=="function")c=t({value:r});else{var d=String(r),u=d.match(/^(-?)(\d*)(\.(\d+))?$/);if(!u)c=d;else{var n=u[1],f=u[2]||"0",s=u[4]||"";f=f.replace(/\B(?=(\d{3})+(?!\d))/g,S),typeof i=="number"&&(s=Re(s,i,"0").slice(0,i)),s&&(s="".concat(p).concat(s)),c=[m("span",{key:"int",class:"".concat(o,"-content-value-int")},[n,f]),s&&m("span",{key:"decimal",class:"".concat(o,"-content-value-decimal")},[s])]}}return m("span",{class:"".concat(o,"-content-value")},[c])};J.displayName="StatisticNumber";var Z={prefixCls:l.string,decimalSeparator:l.string,groupSeparator:l.string,format:l.string,value:{type:[String,Number,Object]},valueStyle:l.style,valueRender:l.any,formatter:l.any,precision:l.number,prefix:l.VNodeChild,suffix:l.VNodeChild,title:l.VNodeChild,onFinish:l.func,loading:l.looseBool},x=I({name:"AStatistic",props:E(Z,{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(e,r){var t=r.slots,i=K("statistic",e),p=i.prefixCls,v=i.direction;return function(){var S,o,c,d,u,n,f,s=e.value,C=s===void 0?0:s,q=e.valueStyle,N=e.valueRender,g=p.value,$=(S=e.title)!==null&&S!==void 0?S:(o=t.title)===null||o===void 0?void 0:o.call(t),A=(c=e.prefix)!==null&&c!==void 0?c:(d=t.prefix)===null||d===void 0?void 0:d.call(t),D=(u=e.suffix)!==null&&u!==void 0?u:(n=t.suffix)===null||n===void 0?void 0:n.call(t),G=(f=e.formatter)!==null&&f!==void 0?f:t.formatter,w=m(J,b({"data-for-update":Date.now()},b(b({},e),{},{prefixCls:g,value:C,formatter:G})),null);return N&&(w=N(w)),m("div",{class:[g,ee({},"".concat(g,"-rtl"),v.value==="rtl")]},[$&&m("div",{class:"".concat(g,"-title")},[$]),m(Q,{paragraph:!1,loading:e.loading},{default:function(){return[m("div",{style:q,class:"".concat(g,"-content")},[A&&m("span",{class:"".concat(g,"-content-prefix")},[A]),w,D&&m("span",{class:"".concat(g,"-content-suffix")},[D])])]}})])}}}),_e=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Te(a,e){var r=a,t=/\[[^\]]*]/g,i=(e.match(t)||[]).map(function(o){return o.slice(1,-1)}),p=e.replace(t,"[]"),v=_e.reduce(function(o,c){var d=ae(c,2),u=d[0],n=d[1];if(o.indexOf(u)!==-1){var f=Math.floor(r/n);return r-=f*n,o.replace(new RegExp("".concat(u,"+"),"g"),function(s){var C=s.length;return ye(f.toString(),C,"0")})}return o},p),S=0;return v.replace(t,function(){var o=i[S];return S+=1,o})}function Ne(a,e){var r=e.format,t=r===void 0?"":r,i=new Date(a).getTime(),p=Date.now(),v=Math.max(i-p,0);return Te(v,t)}var $e=1e3/30;function T(a){return new Date(a).getTime()}var Ae=I({name:"AStatisticCountdown",props:E(Z,{format:"HH:mm:ss"}),emits:["finish","change"],setup:function(e,r){var t=r.emit,i=P(),p=P(),v=function(){var n=e.value,f=T(n);f>=Date.now()?S():o()},S=function(){if(!i.value){var n=T(e.value);i.value=window.setInterval(function(){p.value.$forceUpdate(),n>Date.now()&&t("change",n-Date.now()),v()},$e)}},o=function(){var n=e.value;if(i.value){clearInterval(i.value),i.value=void 0;var f=T(n);f<Date.now()&&t("finish")}},c=function(n){var f=n.value,s=n.config,C=e.format;return Ne(f,b(b({},s),{},{format:C}))},d=function(n){return n};return te(function(){v()}),re(function(){v()}),ne(function(){o()}),function(){return m(x,b({ref:p},b(b({},e),{},{valueRender:d,formatter:c})),null)}}});x.Countdown=Ae,x.install=function(a){return a.component(x.name,x),a.component(x.Countdown.name,x.Countdown),a},x.Countdown;export{x as S};
