parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"aJmB":[function(require,module,exports) {
function e(){function e(e){var t=RegExp(e+"[^;]+").exec(document.cookie);return decodeURIComponent(t?t.toString().replace(/^[^=]+./,""):"")}console.log("PathDbMods()..."),fetch("/jwt/token",{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(e){console.log(e),e.hasOwnProperty("token")&&e.token&&(document.cookie="token="+e.token+";")}),console.warn("{PathDB mods enabled}"),Store.prototype.default_findMark=Store.prototype.findMark,Store.prototype.findMark=function(e,t,r,o,n,i,a,p,d,s){var l=this,m=this.base+"Mark/find",u={};return e&&(u.slide=e),t&&(u.name=t),r&&(u.specimen=r),o&&(u.study=o),n&&(u.footprint=n),i&&(u.source=i),a&&(u.x0=a),p&&(u.x1=p),d&&(u.y0=d),s&&(u.y1=s),fetch(m+"?"+objToParamStr(u),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler).then(function(e){return l.filterBroken(e,"mark")})},Store.prototype.getMarkByIds=function(e,t,r,o,n,i,a,p,d,s){var l=this;if(!Array.isArray(e)||!t)return{hasError:!0,message:"args are illegal"};var m=this.base+"Mark/multi",u={},c=e.map(function(e){return'"'+e+'"'}).join(",");return u.name="["+c+"]",u.slide=t,r&&(u.study=r),o&&(u.specimen=o),n&&(u.source=n),i&&(u.footprint=i),a&&(u.x0=a),p&&(u.x1=p),d&&(u.y0=d),s&&(u.y1=s),fetch(m+"?"+objToParamStr(u),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler).then(function(e){return l.filterBroken(e,"mark")})},Store.prototype.findMarkTypes=function(e,t){var r=this.base+"Mark/types",o={};return t&&(o.name=t),e&&(o.slide=e),fetch(r+"?"+objToParamStr(o),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler)},Store.prototype.default_findSlide=Store.prototype.findSlide,Store.prototype.findSlide=function(t,r,o,n){return fetch("/node/"+t+"?_format=json",{mode:"cors",headers:new Headers({Authorization:"Bearer "+e("token")})}).then(function(e){return e.ok?e.json().then(function(e){return[e]}):{error:!e.ok,text:e.statusText,url:e.url}})},Store.prototype.default_getSlide=Store.prototype.getSlide,Store.prototype.getSlide=function(t){return fetch("/node/"+t+"?_format=json",{mode:"cors",headers:new Headers({Authorization:"Bearer "+e("token")})}).then(function(e){return e.ok?e.json().then(function(e){return[e]}):{error:!e.ok,text:e.statusText,url:e.url}})},Store.prototype.default_findHeatmap=Store.prototype.findHeatmap,Store.prototype.findHeatmap=function(e,t){var r=this,o=this.base+"Heatmap/find",n={};return t&&(n.name=t),e&&(n.slide=e),fetch(o+"?"+objToParamStr(n),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler).then(function(e){return r.filterBroken(e,"heatmap")})},Store.prototype.default_findHeatmapType=Store.prototype.findHeatmapType,Store.prototype.findHeatmapType=function(e,t){var r=this,o=this.base+"Heatmap/types",n={};return t&&(n.name=t),e&&(n.slide=e),fetch(o+"?"+objToParamStr(n),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler).then(function(e){return r.filterBroken(e,"heatmap")})},CaMic.prototype.default_loadImg=CaMic.prototype.loadImg,CaMic.prototype.loadImg=function(e){var t=this,r=new URLSearchParams(window.location.search).get("slideId");this.slideId=r,this.slideName=r,this.study="",this.specimen="",this.store.getSlide(r).then(function(r){if(r=r[0],console.log(r),r.field_study&&r.field_study.length>=1&&(t.study=r.field_study[0].value),r.field_study&&r.field_study.length>=1&&(t.study=r.field_study[0].value),r.field_study_id&&r.field_study_id.length>=1&&(t.study=r.field_study_id[0].value),r.field_specimen_id&&r.field_specimen_id.length>=1&&(t.specien=r.field_specimen_id[0].value),t.mpp=1e9,r.field_mpp_y&&r.field_mpp_y.length>=1&&(t.mpp_y=r.field_mpp_y[0].value,t.mpp=t.mpp_y),r.field_mpp_x&&r.field_mpp_x.length>=1&&(t.mpp_x=r.field_mpp_x[0].value,t.mpp=t.mpp_x),!(r.field_iip_path&&r.field_iip_path.length>=1))throw"No image location --could be token";t.location=r.field_iip_path[0].value,t.url="../../img/IIP/raw/?DeepZoom="+t.location+".dzi",t.viewer.open(t.url),t.viewer.mpp=t.mpp,t.viewer.mpp_x=t.mpp_x,t.viewer.mpp_y=t.mpp_y,t.mpp&&1e9!=t.mpp&&t.createScalebar(t.mpp),new OpenSeadragonImaging.ImagingHelper({viewer:t.viewer}).setMaxZoom(1);var o={};o._id=t.slideId,o.name=t.slideName,o.study=t.study,o.specimen=t.specimen,o.mpp=t.mpp,o.mpp_x=t.mpp_x,o.mpp_y=t.mpp_y,o.location=t.location,o.url=t.url,e&&"function"==typeof e&&e.call(null,o),Loading.text.textContent="loading slide's tiles..."}).catch(function(e){console.error(e),Loading.text.textContent="ERROR - PathDB Image Error (Try a refresh)"})}}e(),console.warn("This setup is intended for pathdb");
},{}]},{},["aJmB"], null)
//# sourceMappingURL=/pathdb_package.map