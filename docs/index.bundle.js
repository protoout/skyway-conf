!function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],m=0,f=[];m<i.length;m++)c=i[m],a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={3:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;o.push([28,0]),n()}([,,,,function(e,t,n){"use strict";t.a={getOsName:function(e){switch(!0){case/Android/.test(e):return"Android";case/iPhone|iPad/.test(e):return"iOS";case/Windows/.test(e):return"Windows";case/Mac OS X/.test(e):return"Mac";case/CrOS/.test(e):return"CromeOS";case/Firefox/.test(e):return"FirefoxOS";default:return""}},getBrowserName:function(e){switch(!0){case/CriOS/.test(e):return"iOSChrome";case/Edge/.test(e):return"Edge";case/Chrome/.test(e):return"Chrome";case/Firefox/.test(e):return"Firefox";case/MSIE|Trident/.test(e):return"IE";case/Safari\//.test(e):return"Safari";case/AppleWebKit/.test(e):return"Webkit";default:return""}},getAudioCtx:function(e){return new(e.webkitAudioContext||e.AudioContext)},setLocationHref:function(e){location.href=e}}},,,,function(e,t,n){"use strict";t.a={isValidRoomType:function(e){return"sfu"===e||"mesh"===e},isValidRoomName:function(e){return/^[0-9a-z_-]{4,32}$/.test(e)}}},,function(e,t,n){"use strict";t.a=class{constructor(e){this.store=e}$update(e,t){const[n,r]=e.split(".");if(!(n&&r&&n in this.store&&r in this.store[n]))throw new Error(`${n}.${r} is not defined!`);this.store[n][r]=t}}},,function(e,t,n){"use strict";e.exports=function(e){var t=(e?e.ownerDocument||e:document).defaultView||window;return!(!e||!("function"==typeof t.Node?e instanceof t.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}},function(e,t,n){"use strict";var r=n(12);e.exports=function(e){return r(e)&&3==e.nodeType}},,function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,i=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))a.call(n,u)&&(i[u]=n[u]);if(r){c=r(n);for(var l=0;l<c.length;l++)o.call(n,c[l])&&(i[c[l]]=n[c[l]])}}return i}},,,,function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var s,u=[],l=!1,m=-1;function f(){l&&s&&(l=!1,s.length?u=s.concat(u):m=-1,u.length&&p())}function p(){if(!l){var e=i(f);l=!0;for(var t=u.length;t;){for(s=u,u=[];++m<t;)s&&s[m].run();m=-1,t=u.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(13);e.exports=function e(t,n){return!(!t||!n)&&(t===n||!r(t)&&(r(n)?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}},function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty;function a(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,t){if(a(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var c=0;c<n.length;c++)if(!r.call(t,n[c])||!a(e[n[c]],t[n[c]]))return!1;return!0}},function(e,t,n){"use strict";e.exports=function(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}},function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=a},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),i=n(2),s=n(1),u=n(8);class l{constructor(){this.name="",this.type="mesh"}get isNameValid(){return u.a.isValidRoomName(this.name)}}Object(s.f)(l,{name:s.k,type:s.k,isNameValid:s.c});var m=l;class f{constructor(){this.isFocusInput=!1,this.isAppError=!1}get isError(){return this.isAppError}}Object(s.f)(f,{isFocusInput:s.k,isAppError:s.k,isError:s.c});var p=f;var d=class{constructor(){this.form=new m,this.ui=new p}},h=n(10),y=n(4);var v=class extends h.a{onSubmitForm(){const{name:e,type:t}=this.store.form,n=`./conf.html#!/${t}/${e}`;y.a.setLocationHref(n)}};var b=Object(i.b)("ui","action")(Object(i.c)(class extends a.a.Component{render(){const{ui:e,children:t}=this.props;return e.isError?a.a.createElement("div",null,a.a.createElement("i",{className:"material-icons"},"error")):t}componentDidCatch(e){this.props.action.$update("ui.isAppError",!0),console.error(e)}}));var w=Object(i.c)(({form:e,ui:t,action:n})=>a.a.createElement("form",{className:"FormMain",noValidate:!0,onSubmit:e=>{e.preventDefault(),n.onSubmitForm()}},a.a.createElement("label",{className:"FormMain_NameInput"},a.a.createElement("div",{className:"FormMain_NameInput_Tip","data-visible":t.isFocusInput&&!1===e.isNameValid},"Please type using half-width characters, more than 4 but less than 32."),a.a.createElement("div",{className:"FormMain_NameInput_Placeholder"},a.a.createElement("span",null,"conf.webrtc.ecl.ntt.com/#!/"),a.a.createElement("span",null,e.type),a.a.createElement("span",null,"/")),a.a.createElement("input",{type:"text",className:"FormMain_NameInput_Input",placeholder:"room-name",value:e.name,onChange:e=>n.$update("form.name",e.target.value),onFocus:()=>n.$update("ui.isFocusInput",!0),onBlur:()=>n.$update("ui.isFocusInput",!1)})),a.a.createElement("button",{type:"submit",className:"FormMain_Button",disabled:!1===e.isNameValid},"Create")));var E=Object(i.c)(({form:e,action:t})=>a.a.createElement("div",{className:"FormTypeSelector"},a.a.createElement("label",{className:"FormTypeSelector_Item"},a.a.createElement("input",{type:"radio",name:"type",value:"mesh",onChange:()=>t.$update("form.type","mesh"),checked:"mesh"===e.type}),a.a.createElement("span",{className:"FormTypeSelector_Item_Text"},"Mesh")),a.a.createElement("label",{className:"FormTypeSelector_Item"},a.a.createElement("input",{type:"radio",name:"type",value:"sfu",onChange:()=>t.$update("form.type","sfu"),checked:"sfu"===e.type}),a.a.createElement("span",{className:"FormTypeSelector_Item_Text"},"SFU"))));var g=Object(i.b)("form","ui","action")(Object(i.c)(({form:e,ui:t,action:n})=>a.a.createElement("div",{className:"L-Form"},a.a.createElement(w,{form:e,ui:t,action:n}),a.a.createElement(E,{form:e,action:n}))));var O=()=>a.a.createElement("div",{className:"Title"},a.a.createElement("h1",{className:"Title_Main"},"SkyWay Conference"),a.a.createElement("p",{className:"Title_Sub"},"Video conference on web browser!"));var N=()=>a.a.createElement("div",{className:"Desc"},a.a.createElement("p",{className:"Desc_Text"},"No registration or installs"),a.a.createElement("p",{className:"Desc_Text"},"Create a room and share the link"));var j=()=>a.a.createElement("footer",{className:"Copyright"},a.a.createElement("a",{href:"https://webrtc.ecl.ntt.com/"},a.a.createElement("img",{className:"Copyright_Image",src:"./images/index/icon-skyway.svg",alt:"SkyWay"})));var T=()=>a.a.createElement(b,null,a.a.createElement("main",{className:"L-Main"},a.a.createElement(O,null),a.a.createElement(g,null),a.a.createElement(N,null)),a.a.createElement("div",{className:"L-Copyright"},a.a.createElement(j,null))),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};const F=new d,S=new v(F);c.a.render(a.a.createElement(i.a,x({action:S},F),a.a.createElement(T,null)),document.getElementById("app-root"))}]);