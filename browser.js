// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,i,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(i=(-s).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=s.toString(e),s||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var c=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function y(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":c(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=p.call(i,v,"$1e"),i=p.call(i,b,"e"),i=p.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=p.call(i,l,"e+0$1"),i=p.call(i,d,"e-0$1"),r.alternate&&(i=p.call(i,g,"$1."),i=p.call(i,h,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===f.call(r.specifier)?f.call(i):u.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,x=Array.isArray;function k(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,i,a,o,c,u,f,p,l,d,g,h;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",u=1,f=0;f<r.length;f++)if("string"==typeof(i=r[f]))c+=i;else{if(e=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,k(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=y(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(l=i.arg,d=i.width,g=i.padRight,h=void 0,(h=d-l.length)<0?l:l=g?l+m(h):m(h)+l)),c+=i.arg||"",u+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,i,n;for(t=[],n=0,i=j.exec(r);i;)(e=r.slice(n,j.lastIndex-i[0].length)).length&&t.push(e),t.push(V(i)),n=j.lastIndex,i=j.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function $(r){var e,t;if("string"!=typeof r)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var F=Object.prototype,I=F.toString,A=F.__defineGetter__,C=F.__defineSetter__,R=F.__lookupGetter__,O=F.__lookupSetter__,P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(R.call(r,e)||O.call(r,e)?(i=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(r,e,t.get),o&&C&&C.call(r,e,t.set),r};function Z(r,e,t){P(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function G(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return Math.abs(r)}function L(r,e,t,i){var n,a,o,s,c,u;if(r<=0)return 0;if(1===r||0===i)return e+t[0];for(a=i<0?(1-r)*i:0,n=0,c=0,u=0;u<r;u++)s=n+(o=e+t[a]),W(n)>=W(o)?c+=n-s+o:c+=o-s+n,n=s,a+=i;return n+c}function M(r,e,t,i,n){var a,o,s,c,u,f;if(r<=0)return 0;if(1===r||0===i)return e+t[n];for(o=n,a=0,u=0,f=0;f<r;f++)c=a+(s=e+t[o]),W(a)>=W(s)?u+=a-c+s:u+=s-c+a,a=c,o+=i;return a+u}function U(r,e,t,i){return L(r,e,t,i)}function X(r,e,t,i){var n,a,o;if(r<=0)return 0;if(1===r||0===i)return e+t[0];for(a=i<0?(1-r)*i:0,n=0,o=0;o<r;o++)n+=e+t[a],a+=i;return n}G(L,"ndarray",M),G(U,"ndarray",(function(r,e,t,i,n){return M(r,e,t,i,n)})),G(X,"ndarray",(function(r,e,t,i,n){var a,o,s;if(r<=0)return 0;if(1===r||0===i)return e+t[0];for(o=n,a=0,s=0;s<r;s++)a+=e+t[o],o+=i;return a}));var z=Math.floor,q=128;function B(r,e,t,i,n){var a,o,s,c,u,f,p,l,d,g,h,w,b;if(r<=0)return 0;if(1===r||0===i)return e+t[n];if(a=n,r<8){for(h=0,b=0;b<r;b++)h+=e+t[a],a+=i;return h}if(r<=q){for(o=e+t[a],s=e+t[a+i],c=e+t[a+2*i],u=e+t[a+3*i],f=e+t[a+4*i],p=e+t[a+5*i],l=e+t[a+6*i],d=e+t[a+7*i],a+=8*i,g=r%8,b=8;b<r-g;b+=8)o+=e+t[a],s+=e+t[a+i],c+=e+t[a+2*i],u+=e+t[a+3*i],f+=e+t[a+4*i],p+=e+t[a+5*i],l+=e+t[a+6*i],d+=e+t[a+7*i],a+=8*i;for(h=o+s+(c+u)+(f+p+(l+d));b<r;b++)h+=e+t[a],a+=i;return h}return w=z(r/2),B(w-=w%8,e,t,i,a)+B(r-w,e,t,i,a+w*i)}function D(r,e,t,i){var n,a,o;if(r<=0)return 0;if(1===r||0===i)return e+t[0];if(n=i<0?(1-r)*i:0,r<8){for(a=0,o=0;o<r;o++)a+=e+t[n],n+=i;return a}return B(r,e,t,i,n)}function H(r){return r!=r}G(D,"ndarray",B);var J=128;function K(r,e,t,i){var n,a,o,s,c,u,f,p,l,d,g,h,w;if(r<=0)return 0;if(1===r||0===t)return H(e[i])?0:e[i];if(n=i,r<8){for(g=0,w=0;w<r;w++)!1===H(e[n])&&(g+=e[n]),n+=t;return g}if(r<=J){for(a=H(e[n])?0:e[n],o=H(e[n+=t])?0:e[n],s=H(e[n+=t])?0:e[n],c=H(e[n+=t])?0:e[n],u=H(e[n+=t])?0:e[n],f=H(e[n+=t])?0:e[n],p=H(e[n+=t])?0:e[n],l=H(e[n+=t])?0:e[n],n+=t,d=r%8,w=8;w<r-d;w+=8)a+=H(e[n])?0:e[n],o+=H(e[n+=t])?0:e[n],s+=H(e[n+=t])?0:e[n],c+=H(e[n+=t])?0:e[n],u+=H(e[n+=t])?0:e[n],f+=H(e[n+=t])?0:e[n],p+=H(e[n+=t])?0:e[n],l+=H(e[n+=t])?0:e[n],n+=t;for(g=a+o+(s+c)+(u+f+(p+l));w<r;w++)!1===H(e[n])&&(g+=e[n]),n+=t;return g}return h=z(r/2),K(h-=h%8,e,t,n)+K(r-h,e,t,n+h*t)}function N(r,e,t){var i,n,a;if(r<=0)return 0;if(1===r||0===t)return H(e[0])?0:e[0];if(i=t<0?(1-r)*t:0,r<8){for(n=0,a=0;a<r;a++)!1===H(e[i])&&(n+=e[i]),i+=t;return n}return K(r,e,t,i)}G(N,"ndarray",K);var Q={};return Z(Q,"dapxsum",U),Z(Q,"dapxsumkbn",L),Z(Q,"dapxsumors",X),Z(Q,"dapxsumpw",D),Z(Q,"dnansumpw",N),Q},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e();
//# sourceMappingURL=browser.js.map
