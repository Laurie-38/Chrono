parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
var t,e=document.getElementsByTagName("h1")[0],n=document.getElementById("start"),o=document.getElementById("stop"),c=document.getElementById("reset"),m=0,u=0,i=0;function l(){++m>=60&&(m=0,++u>=60&&(u=0,i++))}function d(){l(),e.textContent=(i>9?i:"0"+i)+":"+(u>9?u:"0"+u)+":"+(m>9?m:"0"+m),a()}function a(){t=setTimeout(d,1e3)}a(),n.onclick=a,o.onclick=function(){clearTimeout(t)},c.onclick=function(){e.textContent="00:00:00",m=0,u=0,i=0};
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.d7cd5c4d.js.map