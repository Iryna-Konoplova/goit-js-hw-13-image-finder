parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WgT8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor(){this.searchQuery="",this.page=1}fetchArticles(){const e=`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=21824668-10aeb8c8af54ec25684dd6884`;fetch(e).then(e=>e.json()).then(e=>{this.page+=1})}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}exports.default=e;
},{}],"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"Focm":[function(require,module,exports) {
"use strict";var e=r(require("./apiService"));function r(e){return e&&e.__esModule?e:{default:e}}require("./sass/main.scss");const t={searchForm:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn-load-more")},n=new e.default;function c(e){e.preventDefault(),n.query=e.currentTarget.elements.query.value,n.resetPage(),n.fetchArticles()}function u(){n.fetchArticles()}t.searchForm.addEventListener("submit",c),t.loadMoreBtn.addEventListener("click",u);
},{"./apiService":"WgT8","./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.b25fad3e.js.map