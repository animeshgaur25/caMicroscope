parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"aJmB":[function(require,module,exports) {
function e(){function e(e){var t={};t._raw=e,t.mpp=1e9,t.source="pathdb";var i=e.nid[0].value;if(t.name=i,t._id={$oid:i},e.field_mpp_y&&e.field_mpp_y.length>=1&&(this.mpp_y=e.field_mpp_y[0].value,this.mpp=this.mpp_y),e.field_mpp_x&&e.field_mpp_x.length>=1&&(t.mpp_x=e.field_mpp_x[0].value,t.mpp=this.mpp_x),e.referencepixelphysicalvaluey&&e.referencepixelphysicalvaluey.length>=1&&(t.mpp_y=e.referencepixelphysicalvaluey[0].value,t.mpp=t.mpp_y),e.referencepixelphysicalvaluex&&e.referencepixelphysicalvaluex.length>=1&&(t.mpp_x=e.referencepixelphysicalvaluex[0].value,t.mpp=t.mpp_x),!(e.field_iip_path&&e.field_iip_path.length>=1))throw"no iip path in pathdb data";t.location=e.field_iip_path[0].value,t.url="../../img/IIP/raw/?DeepZoom="+t.location+".dzi";var n="",o="",r="";return e.field_subject_id&&e.field_subject_id.length>=1&&(n=e.field_subject_id[0].value),e.clinicaltrialsubjectid&&e.clinicaltrialsubjectid.length>=1&&(n=e.clinicaltrialsubjectid[0].value),e.field_image_id&&e.field_image_id.length>=1&&(o=e.field_image_id[0].value),e.imageid&&e.imageid.length>=1&&(o=e.imageid[0].value),e.field_study_id&&e.field_study_id.length>=1&&(r=e.field_study_id[0].value),e.studyid&&e.studyid.length>=1&&(r=e.studyid[0].value),n&&o&&r&&(t.name=r+" | "+n+" | "+o),t}function t(e){var t=RegExp(e+"[^;]+").exec(document.cookie);return decodeURIComponent(t?t.toString().replace(/^[^=]+./,""):"")}console.log("PathDbMods()..."),fetch("/jwt/token",{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(e){console.log(e),e.hasOwnProperty("token")&&e.token&&(document.cookie="token="+e.token+";")}),console.warn("{PathDB mods enabled}"),Store.prototype.default_findSlide=Store.prototype.findSlide,Store.prototype.findSlide=function(i,n,o,r){return fetch("/node/"+i+"?_format=json",{mode:"cors",headers:new Headers({Authorization:"Bearer "+t("token")})}).then(function(t){return t.ok?t.json().then(e).then(function(e){return[e]}):{error:!t.ok,text:t.statusText,url:t.url}})},Store.prototype.default_getSlide=Store.prototype.getSlide,Store.prototype.getSlide=function(i){return fetch("/node/"+i+"?_format=json",{mode:"cors",headers:new Headers({Authorization:"Bearer "+t("token")})}).then(function(t){return t.ok?t.json().then(e).then(function(e){return[e]}):{error:!t.ok,text:t.statusText,url:t.url}})},StatesHelper.prototype.default_getCurrentStatesURL=StatesHelper.prototype.getCurrentStatesURL,getCurrentStatesURL=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=StatesHelper.getCurrentStates(e);if(t)return console.log(t),t=StatesHelper.encodeStates(t),""+location.origin+location.pathname+"?slideId="+$D.params.slideId+"&states="+$D.params.states+"&mode="+$D.params.mode}}e(),console.warn("This Setup Is Intended For Pathdb");
},{}]},{},["aJmB"], null)
//# sourceMappingURL=./pathdb_package.map
