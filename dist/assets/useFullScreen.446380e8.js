import{w as o,D as s}from"./index.05ea33df.js";function E(r=o(document.documentElement),m){const t=o(!1),e=document.documentElement;let l="requestFullscreen",n="exitFullscreen",u="fullscreenElement";if("webkitRequestFullScreen"in e)l="webkitRequestFullScreen",n="webkitExitFullscreen",u="webkitFullscreenElement";else if("msRequestFullscreen"in e)l="msRequestFullscreen",n="msExitFullscreen",u="msFullscreenElement";else if("mozRequestFullScreen"in e)l="mozRequestFullScreen",n="mozCancelFullScreen",u="mozFullScreenElement";else if(!("requestFullscreen"in e))throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Fullscreen API !");function c(){return t.value=!0,s(r)[l](m)}function F(){return t.value=!1,document[n]()}function i(){return s(r)===document[u]}async function f(){if(!!s(r))return i()?F():c()}return{toggleFullscreen:f,exitFullscreen:F,isFullscreen:i,enterFullscreen:c,isFullscreenRef:t}}export{E as u};
