!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var u={id:e,exports:{}};return r[e]=u,t.call(u.exports,u,u.exports),u.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=u),u.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=u("8NIkP"))&&r.__esModule?r:{default:r}})),u.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),u.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),u.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),u.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=u("8NIkP"))&&r.__esModule?r:{default:r}}));var a=document.getElementById("storage-input"),o=document.querySelector(".storage__value"),l=document.getElementById("transfer-input"),c=document.querySelector(".transfer__value"),d=a.value,i=l.value,s=document.getElementById("HDD"),f=document.getElementById("Multi"),y=function(){o.textContent=a.value,d=a.value,c.textContent=l.value,i=l.value;var e,t=.005*d+.01*i,r=s.checked?.01*d+.01*i:.02*d+.01*i;e=d<=75&&i<=75?0:d<=75&&i>75?.02*(i-75):d>75&&i<=75?f.checked?.06*(d-75):.03*(d-75):f.checked?.06*(d-75)+.02*(i-75):.03*(d-75)+.02*(i-75);var n=.01*d+.01*i;return{blackblazeValue:t=t<7?7:t.toFixed(1),bunnyValue:r=r>10?10:r.toFixed(1),scalewayValue:e=e.toFixed(1),vultrValue:n=n<5?5:n.toFixed(1)}},m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e){return p.default(e)||v.default(e)||_.default(e)||b.default()};var p=x(u("kMC0W")),v=x(u("7AJDX")),b=x(u("8CtQK")),_=x(u("auk6i"));function x(e){return e&&e.__esModule?e:{default:e}}var g=document.querySelector(".blackblaze"),w=document.querySelector(".bunny"),S=document.querySelector(".scaleway"),k=document.querySelector(".vultr"),h=function(t){var r,n=(r=Math).min.apply(r,e(m)(t)),u=t.indexOf(n),a=document.querySelector(".min_cost");switch(a&&a.classList.remove("min_cost"),u){case 0:g.classList.add("min_cost");break;case 1:w.classList.add("min_cost");break;case 2:S.classList.add("min_cost");break;case 3:k.classList.add("min_cost")}},q=document.querySelector(".blackblaze"),M=document.querySelector(".bunny"),V=document.querySelector(".scaleway"),E=document.querySelector(".vultr"),C=document.querySelector(".blackblaze__value"),I=document.querySelector(".bunny__value"),O=document.querySelector(".scaleway__value"),L=document.querySelector(".vultr__value"),j=function(){var e=y();C.textContent="".concat(e.blackblazeValue,"$"),I.textContent="".concat(e.bunnyValue,"$"),O.textContent="".concat(e.scalewayValue,"$"),L.textContent="".concat(e.vultrValue,"$"),q.style.width="".concat(2*+e.blackblazeValue+10,"px"),M.style.width="".concat(2*+e.bunnyValue+10,"px"),V.style.width="".concat(2*+e.scalewayValue+10,"px"),E.style.width="".concat(2*+e.vultrValue+10,"px");var t=[+e.blackblazeValue,+e.bunnyValue,+e.scalewayValue,+e.vultrValue];h(t)},A=document.getElementById("storage-input"),P=document.getElementById("transfer-input"),z=document.querySelector(".bunny__storage"),B=document.querySelector(".scaleway__storage");A.addEventListener("input",j),P.addEventListener("input",j),z.addEventListener("change",j),B.addEventListener("change",j)}();
//# sourceMappingURL=index.ace042ec.js.map
