!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(global,(()=>(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{app:()=>p});const t=require("path");var n=e.n(t);const o=require("express");var s=e.n(o);const a=require("react");var i=e.n(a);const d=require("react-dom/server");var c=e.n(d);const l=()=>i().createElement("h1",null,"bumbadabum"),p=s()();return p.use(s().static(n().resolve("server","../build"))),p.use(((e,r)=>{const t=(e=>{let{markup:r}=e;return`\n    <!doctype html>\n    <html lang="en">\n      <body>\n        <div id="root">${r}</div>\n        <script type="text/javascript" src="js/main.js" defer><\/script>\n        <script type="text/javascript" src="js/vendors~main.js" defer><\/script>\n      </body>\n    </html>\n  `})({markup:c().renderToString(i().createElement(l,null))});r.status(200).send(t)})),r})()));