!function(e){function t(t){for(var i,s,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)s=o[d],r[s]&&m.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},r={1:0},n=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([29,0]),a()}([,,,function(e,t,a){"use strict";t.a={setMuteVideoTracks:function(e,t){e.getVideoTracks().forEach(e=>e.enabled=!t)},setMuteAudioTracks:function(e,t){e.getAudioTracks().forEach(e=>e.enabled=!t)},setMuteTrack:function(e,t){e.enabled=!t},stopStream:function(e){e.getTracks().forEach(e=>e.stop())},getUserDevices:async function(){const e={video:[],audio:[]},t=await navigator.mediaDevices.enumerateDevices();for(const a of t)"videoinput"===a.kind&&e.video.push(a),"audioinput"===a.kind&&e.audio.push(a);return e},getUserMedia:function({videoDeviceId:e,audioDeviceId:t},a){const i={video:{deviceId:e},audio:{deviceId:t}};return""===e&&(i.video=!1),""===t&&(i.audio=!1),["user","environment"].includes(a)&&(i.video.facingMode=a),navigator.mediaDevices.getUserMedia(i)},snapVideoStream:function(e,t="image/jpeg",a=1){return new Promise(i=>{let r=document.createElement("video");r.addEventListener("loadeddata",()=>{let e=document.createElement("canvas");e.width=r.videoWidth,e.height=r.videoHeight,e.getContext("2d").drawImage(r,0,0),e.toBlob(t=>{r.pause(),r.srcObject=null,r=e=null,i(t)},t,a)},{once:!0}),r.autoplay=r.muted=r.playsInline=!0,r.srcObject=e})},getFakeStream:function(e){const{stream:t}=e.createMediaStreamDestination();return t}}},function(e,t,a){"use strict";t.a={getOsName:function(e){switch(!0){case/Android/.test(e):return"Android";case/iPhone|iPad/.test(e):return"iOS";case/Windows/.test(e):return"Windows";case/Mac OS X/.test(e):return"Mac";case/CrOS/.test(e):return"CromeOS";case/Firefox/.test(e):return"FirefoxOS";default:return""}},getBrowserName:function(e){switch(!0){case/CriOS/.test(e):return"iOSChrome";case/Edge/.test(e):return"Edge";case/Chrome/.test(e):return"Chrome";case/Firefox/.test(e):return"Firefox";case/MSIE|Trident/.test(e):return"IE";case/Safari\//.test(e):return"Safari";case/AppleWebKit/.test(e):return"Webkit";default:return""}},getAudioCtx:function(e){return new(e.webkitAudioContext||e.AudioContext)},setLocationHref:function(e){location.href=e}}},function(e,t,a){"use strict";var i=a(0),r=a.n(i);t.a=(({isMuted:e=!1})=>e?r.a.createElement("i",{className:"material-icons"},"mic_off"):r.a.createElement("i",{className:"material-icons"},"mic"))},function(e,t,a){"use strict";var i=a(0),r=a.n(i);t.a=(({isMuted:e=!1})=>e?r.a.createElement("i",{className:"material-icons"},"videocam_off"):r.a.createElement("i",{className:"material-icons"},"videocam"))},,function(e,t,a){"use strict";t.a={isValidRoomType:function(e){return"sfu"===e||"mesh"===e},isValidRoomName:function(e){return/^[0-9a-z_-]{4,32}$/.test(e)}}},function(e,t,a){"use strict";var i=a(0),r=a.n(i);t.a=(({isSpeaking:e=!1})=>r.a.createElement("i",{className:`material-icons ${e?"-speaking":"-not_speaking"}`},"equalizer"))},function(e,t,a){"use strict";t.a=class{constructor(e){this.store=e}$update(e,t){const[a,i]=e.split(".");if(!(a&&i&&a in this.store&&i in this.store[a]))throw new Error(`${a}.${i} is not defined!`);this.store[a][i]=t}}},function(e,t,a){"use strict";const i=window.Peer,r=window.ScreenShare;t.a={initPeer:function(){return new Promise((e,t)=>{const a=new i({key:"03ff6219-b58f-4310-9484-e9108e859cdd",debug:2});a.once("open",()=>{e(a),a.removeListener("error",t)}),a.once("error",t)})},isScreenShareAvailable:function(){return r.create().isScreenShareAvailable()},getScreenStreamTrack:function(){return new Promise((e,t)=>{r.create().start().then(t=>e(t.getTracks()[0])).catch(t)})}}},function(e,t,a){"use strict";e.exports=function(e){var t=(e?e.ownerDocument||e:document).defaultView||window;return!(!e||!("function"==typeof t.Node?e instanceof t.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}},function(e,t,a){"use strict";var i=a(12);e.exports=function(e){return i(e)&&3==e.nodeType}},function(e,t,a){"use strict";var i=a(20);e.exports=function(e,t,a){a=a||{};var r={fftSize:1024,bufferLen:1024,smoothingTimeConstant:.2,minCaptureFreq:85,maxCaptureFreq:255,noiseCaptureDuration:1e3,minNoiseLevel:.3,maxNoiseLevel:.7,avgNoiseMultiplier:1.2,onVoiceStart:function(){},onVoiceStop:function(){},onUpdate:function(e){}},n={};for(var s in r)n[s]=a.hasOwnProperty(s)?a[s]:r[s];var o=0,c=1,l=0,u=0,d=60,m=5,h=[],p=!0,f=void 0,v=!1,E=null,g=e.createMediaStreamSource(t),b=e.createAnalyser();b.smoothingTimeConstant=n.smoothingTimeConstant,b.fftSize=n.fftSize;var y=e.createScriptProcessor(n.bufferLen,1,1);function S(){g.connect(b),b.connect(y),y.connect(e.destination)}function N(){y.disconnect(),b.disconnect(),g.disconnect()}return S(),y.onaudioprocess=function(){var e=new Uint8Array(b.frequencyBinCount);b.getByteFrequencyData(e);var t=i(b,e,n.minCaptureFreq,n.maxCaptureFreq);if(p)return void h.push(t);t>=o&&l<d?l++:t<o&&l>u&&l--;f!==(v=l>m)&&(v?n.onVoiceStart():n.onVoiceStop(),f=v);n.onUpdate(Math.max(0,t-o)/c)},p&&(E=setTimeout(function(){p=!1;var e=(h=h.filter(function(e){return e}).sort()).length?h.reduce(function(e,t){return Math.min(e,t)},1):n.minNoiseLevel||.1;o=e*n.avgNoiseMultiplier,n.minNoiseLevel&&o<n.minNoiseLevel&&(o=n.minNoiseLevel);n.maxNoiseLevel&&o>n.maxNoiseLevel&&(o=n.maxNoiseLevel);c=1-o},n.noiseCaptureDuration)),{connect:S,disconnect:N,destroy:function(){E&&clearTimeout(E),N(),y.onaudioprocess=null}}}},function(e,t,a){"use strict";function i(e){return function(){return e}}var r=function(){};r.thatReturns=i,r.thatReturnsFalse=i(!1),r.thatReturnsTrue=i(!0),r.thatReturnsNull=i(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,a){"use strict";e.exports={}},function(e,t,a){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var a,s,o=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))r.call(a,l)&&(o[l]=a[l]);if(i){s=i(a);for(var u=0;u<s.length;u++)n.call(a,s[u])&&(o[s[u]]=a[s[u]])}}return o}},function(e,t){e.exports=function(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}},function(e,t,a){var i=a(18);e.exports=function(e,t,a){var r=t/2,n=Math.round(e/r*a);return i(n,0,a)}},function(e,t,a){var i=a(19);function r(e,t,a,r,n){for(var s=t.context.sampleRate,o=t.frequencyBinCount,c=i(r,s,o),l=i(n,s,o),u=l-c,d=0;c<l;c++)d+=a[c]/e;return 0===u?0:d/u}e.exports=r.bind(null,255),e.exports.floatData=r.bind(null,1)},function(e,t){var a;a=function(){return this}();try{a=a||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(a=window)}e.exports=a},function(e,t){var a,i,r=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(a===setTimeout)return setTimeout(e,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:n}catch(e){a=n}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var c,l=[],u=!1,d=-1;function m(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=o(m);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new p(e,t)),1!==l.length||u||o(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,a){"use strict";var i=a(13);e.exports=function e(t,a){return!(!t||!a)&&(t===a||!i(t)&&(i(a)?e(t,a.parentNode):"contains"in t?t.contains(a):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(a))))}},function(e,t,a){"use strict";var i=Object.prototype.hasOwnProperty;function r(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,t){if(r(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(var s=0;s<a.length;s++)if(!i.call(t,a[s])||!r(e[a[s]],t[a[s]]))return!1;return!0}},function(e,t,a){"use strict";e.exports=function(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}},function(e,t,a){"use strict";var i=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:i,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen,isInWorker:!i};e.exports=r},,,function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(7),s=a.n(n),o=a(2),c=a(1),l=a(8);class u{constructor(){this.roomType="",this.roomName="",this.isAppReady=!1,this.isWelcomeOpen=!0,this.isSettingOpen=!0,this.isChatOpen=!1,this.isRoomJoin=!1,this.isUserError=!1,this.isAppError=!1}get confUrl(){const e=`#!/${this.roomType}/${this.roomName}`;return`${location.origin}${location.pathname}${e}`}get isError(){return this.isUserError||this.isAppError}setRoom({roomType:e,roomName:t}){l.a.isValidRoomName(t)&&l.a.isValidRoomType(e)?(this.roomType=e,this.roomName=t):this.isUserError=!0}handleGetUserMediaError(e){switch(e.name){case"OverconstrainedError":case"NotFoundError":this.isAppError=!0;break;default:this.isUserError=!0}console.error(e)}handleAppError(e){this.isAppError=!0,console.error(e)}handleUserError(e){this.isUserError=!0,console.error(e)}}Object(c.f)(u,{roomType:c.k,roomName:c.k,isAppReady:c.k,isWelcomeOpen:c.k,isSettingOpen:c.k,isChatOpen:c.k,isRoomJoin:c.k,isUserError:c.k,isAppError:c.k,confUrl:c.c,isError:c.c});var d=u;class m{constructor(){this.peerId="YOUR_PEER_ID",this.dispName="YOUR_NAME",this.isVideoMuted=!1,this.isAudioMuted=!1,this.isSpeaking=!1,this.videoDeviceId="",this.audioDeviceId="",this.videoDevices=[],this.audioDevices=[]}get facingMode(){return 2!==this.videoDevices.length?"environment":this.videoDeviceId===this.videoDevices[1].deviceId?"user":"environment"}get syncState(){return{peerId:this.peerId,dispName:this.dispName,isVideoMuted:this.isVideoMuted,isAudioMuted:this.isAudioMuted,isSpeaking:this.isSpeaking}}get isNoVideoDevices(){return 0===this.videoDevices.length}get isNoAudioDevices(){return 0===this.audioDevices.length}updateDevices({video:e,audio:t}){Object(c.m)(()=>{this.videoDevices=e,this.audioDevices=t,this._setDefaultDeviceIfNeeded()})}_setDefaultDeviceIfNeeded(){const e=this.videoDevices.find(e=>e.deviceId===this.videoDeviceId),t=this.audioDevices.find(e=>e.deviceId===this.audioDeviceId);Object(c.m)(()=>{!1===this.isNoVideoDevices&&(e||(this.videoDeviceId=this.videoDevices[0].deviceId)),!1===this.isNoAudioDevices&&(t||(this.audioDeviceId=this.audioDevices[0].deviceId))})}}Object(c.f)(m,{peerId:c.k,dispName:c.k,isVideoMuted:c.k,isAudioMuted:c.k,isSpeaking:c.k,videoDeviceId:c.k,audioDeviceId:c.k,videoDevices:c.k.ref,audioDevices:c.k.ref,syncState:c.c,facingMode:c.c,isNoVideoDevices:c.c,isNoAudioDevices:c.c});var h=m;class p{constructor(){this.syncState=new Map,this.pinnedPeerId="",this.localStream={},this.remoteStreams=[]}get pinnedPeerIdDisp(){return 0!==this.pinnedPeerId.length?this.pinnedPeerId:0!==this.remoteStreams.length?this.remoteStreams[0].peerId:""}get pinnedStream(){const e=this.remoteStreams.find(e=>e.peerId===this.pinnedPeerIdDisp);return e||(0!==this.remoteStreams.length?this.remoteStreams[0]:null)}setLocalStream(e){this.localStream=e}addRemoteStream(e){Object(c.m)(()=>{const t=this.remoteStreams.find(t=>t.peerId===e.peerId);this.removeRemoteStream(t),this.remoteStreams.push(e)})}removeRemoteStreamByPeerId(e){Object(c.m)(()=>{const t=this.remoteStreams.find(t=>t.peerId===e);this.removeRemoteStream(t),this.syncState.delete(e),this.pinnedPeerId===e&&(this.pinnedPeerId="")})}removeRemoteStream(e){e&&this.remoteStreams.remove(e)}}Object(c.f)(p,{syncState:c.k,pinnedPeerId:c.k,localStream:c.k.ref,remoteStreams:c.k.shallow,pinnedPeerIdDisp:c.c,pinnedStream:c.c});var f=p;class v{constructor(){this.bufferText="",this.lastMessage={},this.messages=[]}addMessage({text:e,timestamp:t,peerId:a},i,r){this.messages.push({id:`${a}-${t}`,text:e,dispDate:new Date(t).toLocaleTimeString().slice(0,5),thumb:i,dispName:r})}updateBuffer(e){Object(c.m)(()=>{this.lastMessage=e,this.bufferText=""})}}Object(c.f)(v,{bufferText:c.k,lastMessage:c.k.ref,messages:c.k.shallow});var E=v;class g{constructor(){this.items=[]}showChat(e){this._show(`${e.dispName} sent a chat`)}showJoin(e){this._show(`${e.dispName} joined`)}showLeave(e){this._show(`${e.dispName} left`)}_show(e){const t={id:Date.now(),text:e};this.items.push(t),setTimeout(()=>this.items.remove(t),1e3)}}Object(c.f)(g,{items:c.k.shallow});var b=g;var y=class{constructor(){this.ui=new d,this.user=new h,this.room=new f,this.chat=new E,this.notification=new b}},S=a(14),N=a.n(S),w=a(10),O=a(3),_=a(11),M=a(4);var k=class extends w.a{constructor(e){super(e),this._destroyVad=null;const{user:t,room:a,ui:i}=this.store;Object(c.l)(()=>[t.videoDeviceId,t.audioDeviceId],async([e,r])=>{const n=await O.a.getUserMedia({videoDeviceId:e,audioDeviceId:r},t.facingMode).catch(e=>i.handleGetUserMediaError(e));i.isError||(a.localStream instanceof MediaStream&&O.a.stopStream(a.localStream),i.isAppReady=!0,t.isVideoMuted&&O.a.setMuteVideoTracks(n,!0),t.isAudioMuted&&O.a.setMuteAudioTracks(n,!0),a.setLocalStream(n))}),Object(c.l)(()=>t.isVideoMuted,e=>O.a.setMuteVideoTracks(a.localStream,e)),Object(c.l)(()=>t.isAudioMuted,e=>O.a.setMuteAudioTracks(a.localStream,e)),Object(c.l)(()=>t.dispName,e=>localStorage.setItem("SkyWayConf.dispName",e)),Object(c.p)(()=>i.isAppReady,async()=>{const e=await O.a.getUserDevices().catch(e=>i.handleUserError(e));i.isError||t.updateDevices(e)})}onClickWelcomeClose(){const{ui:e,user:t,room:a}=this.store;e.isWelcomeOpen=!1,Object(c.l)(()=>a.localStream,e=>{this._destroyVad&&this._destroyVad();const{destroy:a}=N()(M.a.getAudioCtx(window),e,{onUpdate(e){t.isSpeaking=0!==e}});this._destroyVad=a},{fireImmediately:!0})}async onLoad({roomType:e,roomName:t}){const{user:a,ui:i,room:r}=this.store;i.setRoom({roomType:e,roomName:t});const n=localStorage.getItem("SkyWayConf.dispName");n&&(a.dispName=n);const s=await O.a.getUserDevices().catch(e=>i.handleUserError(e));if(!i.isError){if(a.updateDevices(s),a.isNoVideoDevices&&a.isNoAudioDevices){i.isAppReady=!0;const e=O.a.getFakeStream(M.a.getAudioCtx(window));r.setLocalStream(e)}navigator.mediaDevices.ondevicechange=async function(){const e=await O.a.getUserDevices().catch(e=>i.handleUserError(e));i.isError||a.updateDevices(e)}}}async onClickJoinRoom(){const{ui:e,room:t,user:a}=this.store,i=await _.a.initPeer().catch(t=>e.handleAppError(t));if(e.isError)return;i.on("error",t=>e.handleSkyWayPeerError(t)),a.peerId=i.id;const r=i.joinRoom(`${e.roomType}/${e.roomName}`,{mode:e.roomType,stream:t.localStream});this._onRoomJoin(r),e.isSettingOpen=!1}async onClickSendChat(){const{chat:e,user:t,room:a,ui:i}=this.store,r=await O.a.snapVideoStream(a.localStream,"image/jpeg",.5).catch(e=>i.handleAppError(e));if(i.isError)return;const n={peerId:t.peerId,text:e.bufferText,blob:r,timestamp:Date.now()},s=URL.createObjectURL(r);e.addMessage(n,s,t.dispName),e.updateBuffer(n)}_onRoomJoin(e){const{ui:t,user:a,room:i,chat:r}=this.store;t.isRoomJoin=!0,e.on("stream",t=>this._onRoomAddStream(t,e)),e.on("removeStream",e=>this._onRoomRemoveStream(e)),e.on("peerLeave",e=>this._onRoomPeerLeave(e)),e.on("data",e=>this._onRoomData(e)),Object(c.l)(()=>i.localStream,()=>e.replaceStream(i.localStream)),Object(c.l)(()=>a.syncState,t=>e.send({type:"sync",payload:t})),Object(c.l)(()=>r.lastMessage,t=>e.send({type:"chat",payload:t}))}_onRoomAddStream(e,t){const{room:a,user:i,notification:r}=this.store;a.addRemoteStream(e),t.send({type:"sync",payload:i.syncState}),Object(c.p)(()=>void 0!==a.syncState.get(e.peerId),()=>r.showJoin(a.syncState.get(e.peerId)))}_onRoomRemoveStream(e){const{room:t}=this.store;t.removeRemoteStream(e)}_onRoomPeerLeave(e){const{room:t,notification:a}=this.store,i=t.syncState.get(e);a.showLeave(i),t.removeRemoteStreamByPeerId(e)}_onRoomData({_src:e,data:t}){const{room:a,chat:i,ui:r,notification:n}=this.store,{type:s,payload:o}=t;switch(s){case"sync":a.syncState.set(o.peerId,o);break;case"chat":{const e=a.syncState.get(o.peerId),t=new Blob([new Uint8Array(o.blob)]),s=URL.createObjectURL(t);i.addMessage(o,s,e.dispName),r.isChatOpen||n.showChat(e);break}default:throw new Error(`${s} is not defined as message type`)}}};var D=()=>r.a.createElement("div",{className:"Loader"},r.a.createElement("img",{className:"Loader_Image",src:"./images/conf/icon-loading.svg",alt:"Loading"}));var I=Object(o.c)(({ui:e})=>r.a.createElement("div",{className:"Error"},r.a.createElement("div",{className:"Error_Title"},r.a.createElement("i",{className:"material-icons"},"error"),r.a.createElement("span",null,"Error")),e.isUserError&&r.a.createElement("div",{className:"Error_Desc"},r.a.createElement("p",null,"Please check your.."),r.a.createElement("ul",null,r.a.createElement("li",null,"current url(and hash)"),r.a.createElement("li",null,"camera or microphone settings"),r.a.createElement("li",null,"network conditions"),r.a.createElement("li",null,"browser updates"))),e.isAppError&&r.a.createElement("div",{className:"Error_Desc"},r.a.createElement("p",null,"Sorry, currently our service is not available. Please try it later."))));var C=Object(o.b)("ui","action")(Object(o.c)(class extends r.a.Component{render(){const{ui:e,children:t}=this.props;return e.isError?r.a.createElement(I,{ui:e}):e.isAppReady?t:r.a.createElement(D,null)}componentDidCatch(e){this.props.action.$update("ui.isAppError",!0),console.error(e)}}));var j=Object(o.c)(class extends r.a.Component{constructor(){super(),this._vRef=null,this._aRef=null}render(){const{muted:e,isMirror:t,stream:a}=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement("video",{className:`Video ${t?"-reverse":""}`,ref:e=>{this._vRef=e},muted:!0,autoPlay:!0,playsInline:!0}),r.a.createElement("audio",{ref:e=>{this._aRef=e},muted:e,autoPlay:!0}))}componentDidMount(){this._vRef&&this._aRef&&this.props.stream instanceof MediaStream&&(this._vRef.srcObject=this._aRef.srcObject=this.props.stream)}componentWillReact(){this._vRef&&this._aRef&&this.props.stream instanceof MediaStream&&(this._vRef.srcObject=this._aRef.srcObject=this.props.stream)}});var L=Object(o.c)(({room:e})=>r.a.createElement("div",{className:"ScreenVideo"},e.pinnedStream?r.a.createElement(j,{stream:e.pinnedStream,muted:!0}):null));var A=Object(o.b)("room")(Object(o.c)(({room:e})=>r.a.createElement(L,{room:e})));var R=class extends r.a.Component{constructor(){super(),this._ref=null,this._disposer=null,this._checkListWidth=this._checkListWidth.bind(this)}render(){return r.a.createElement("div",{className:"MemberList"},r.a.createElement("div",{className:"MemberList_Arrow -left"},r.a.createElement("i",{className:"material-icons"},"chevron_left")),r.a.createElement("div",{ref:e=>this._ref=e,className:"MemberList_Scroller"},this.props.children),r.a.createElement("div",{className:"MemberList_Arrow -right"},r.a.createElement("i",{className:"material-icons"},"chevron_right")))}componentDidMount(){const{room:e}=this.props;this._disposer=Object(c.l)(()=>e.remoteStreams.length,()=>this._checkListWidth(),{fireImmediately:!0,delay:500}),window.addEventListener("resize",this._checkListWidth)}componentWillUnmount(){this._disposer(),window.removeEventListener("resize",this._checkListWidth)}_checkListWidth(){parseInt(getComputedStyle(this._ref).width)<Array.from(this._ref.children).reduce((e,t)=>e+parseInt(getComputedStyle(t).width),0)?this._ref.parentElement.classList.add("-scrollable"):this._ref.parentElement.classList.remove("-scrollable")}},T=a(6),x=a(5);var V=Object(o.c)(({user:e,action:t})=>r.a.createElement("div",{className:"MemberVideo"},r.a.createElement("div",{className:"MemberVideo_Local"},r.a.createElement("button",{onClick:()=>t.$update("user.isVideoMuted",!e.isVideoMuted),title:e.isVideoMuted?"Unmute":"Mute"},r.a.createElement(T.a,{isMuted:e.isVideoMuted})),r.a.createElement("button",{onClick:()=>t.$update("user.isAudioMuted",!e.isAudioMuted),title:e.isAudioMuted?"Unmute":"Mute"},r.a.createElement(x.a,{isMuted:e.isAudioMuted})),r.a.createElement("button",{onClick:()=>t.$update("ui.isSettingOpen",!0),title:"Open settings"},r.a.createElement("i",{className:"material-icons"},"settings")),r.a.createElement("button",{onClick:()=>t.$update("ui.isChatOpen",!0),title:"Open chat"},r.a.createElement("i",{className:"material-icons"},"chat"))))),P=a(9);var U=Object(o.c)(({room:e,action:t})=>r.a.createElement(r.a.Fragment,null,e.remoteStreams.map(a=>{const i=e.syncState.get(a.peerId);return r.a.createElement("div",{key:a.id,className:"MemberVideo",onClick:()=>t.$update("room.pinnedPeerId",a.peerId)},e.pinnedPeerIdDisp===a.peerId&&r.a.createElement("div",{className:"MemberVideo_Pinned"}),i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"MemberVideo_Name"},i.dispName),r.a.createElement("div",{className:"MemberVideo_Media"},i.isVideoMuted&&r.a.createElement(T.a,{isMuted:!0}),i.isAudioMuted&&r.a.createElement(x.a,{isMuted:!0}),i.isSpeaking&&r.a.createElement(P.a,{isSpeaking:!0}))):null,r.a.createElement(j,{stream:a}))})));var $=Object(o.b)("room","user","action")(Object(o.c)(({room:e,user:t,action:a})=>r.a.createElement(R,{room:e},r.a.createElement(V,{user:t,action:a}),r.a.createElement(U,{room:e,action:a}))));const W=({isVisible:e,children:t})=>r.a.createElement("div",{className:"Popup",style:{transform:e?"translate3d(0, 0, 0)":"translate3d(0, -100%, 0)",visibility:e?"visible":"hidden"}},t),F=({isVisible:e,children:t})=>e?r.a.createElement("div",{className:"Popup"},t):null;var B=Object(o.c)(({isVisible:e,noAnim:t=!1,children:a})=>t?r.a.createElement(F,{isVisible:e},a):r.a.createElement(W,{isVisible:e},a));var J=Object(o.c)(({ui:e,room:t})=>r.a.createElement(j,{stream:t.localStream,muted:!0,isMirror:!1===e.isScreenSharing}));var q=Object(o.c)(({user:e,action:t})=>r.a.createElement("div",{className:"DeviceSelector"},r.a.createElement("div",{className:"DeviceSelector_Label"},"Cam / Mic"),r.a.createElement("div",{className:"DeviceSelector_Row"},r.a.createElement("select",{className:"DeviceSelector_Select",value:e.videoDeviceId,onChange:e=>t.$update("user.videoDeviceId",e.target.value),disabled:e.isNoVideoDevices},e.isNoVideoDevices&&r.a.createElement("option",{value:""},"Cam not found"),e.videoDevices.map((e,t)=>r.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label||`Cam ${t+1}`))),r.a.createElement("button",{onClick:()=>t.$update("user.isVideoMuted",!e.isVideoMuted),title:e.isVideoMuted?"Unmute":"Mute"},r.a.createElement(T.a,{isMuted:e.isVideoMuted}))),r.a.createElement("div",{className:"DeviceSelector_Row"},r.a.createElement("select",{className:"DeviceSelector_Select",value:e.audioDeviceId,onChange:e=>t.$update("user.audioDeviceId",e.target.value),disabled:e.isNoAudioDevices},e.isNoAudioDevices&&r.a.createElement("option",{value:""},"Mic not found"),e.audioDevices.map((e,t)=>r.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label||`Mic ${t+1}`))),r.a.createElement("button",{onClick:()=>t.$update("user.isAudioMuted",!e.isAudioMuted),title:e.isAudioMuted?"Unmute":"Mute"},r.a.createElement(x.a,{isMuted:e.isAudioMuted})),r.a.createElement("span",{className:"DeviceSelector_Va"},r.a.createElement(P.a,{isSpeaking:e.isSpeaking})))));var z=Object(o.c)(({user:e,action:t})=>r.a.createElement("div",{className:"NameEdit"},r.a.createElement("div",{className:"NameEdit_Label"},"Name"),r.a.createElement("input",{className:"NameEdit_Input",type:"text",maxLength:10,value:e.dispName,onChange:e=>t.$update("user.dispName",e.target.value)})));var H=Object(o.b)("room","ui","user","action")(Object(o.c)(({room:e,ui:t,user:a,action:i})=>r.a.createElement(B,{isVisible:t.isSettingOpen},r.a.createElement("div",{className:"L-Setting"},r.a.createElement("div",{className:"L-Setting_Video"},r.a.createElement(J,{ui:t,room:e})),r.a.createElement(q,{user:a,action:i}),r.a.createElement(z,{user:a,action:i}),r.a.createElement("div",{className:"L-Setting_Finish"},r.a.createElement("button",{onClick:()=>{t.isRoomJoin?i.$update("ui.isSettingOpen",!1):i.onClickJoinRoom()}},"OK"))))));var K=Object(o.c)(class extends r.a.Component{constructor(){super(),this._ref=null}render(){const{chat:e}=this.props;return r.a.createElement("ul",{className:"ChatMessageList",ref:e=>this._ref=e},e.messages.map(e=>r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:"ChatMessageList_Item"},r.a.createElement("div",{className:"ChatMessageList_Item_Thumb"},r.a.createElement("img",{className:"ChatMessageList_Item_Thumb_Image",src:e.thumb})),r.a.createElement("div",{className:"ChatMessageList_Item_Content"},r.a.createElement("div",{className:"ChatMessageList_Item_Content_Head"},r.a.createElement("span",{className:"ChatMessageList_Item_Content_HeadName"},e.dispName),r.a.createElement("span",{className:"ChatMessageList_Item_Content_HeadDate"},"at ",e.dispDate)),r.a.createElement("p",{className:"ChatMessageList_Item_Content_Body"},e.text))))))}componentWillReact(){this._ref&&requestAnimationFrame(()=>this._ref.scrollTop=this._ref.scrollHeight)}});var G=Object(o.c)(({chat:e,action:t})=>r.a.createElement("div",{className:"ChatBox"},r.a.createElement("button",{className:"ChatBox_Closer",onClick:()=>t.$update("ui.isChatOpen",!1)},r.a.createElement("i",{className:"material-icons -x05"},"close")),r.a.createElement(K,{chat:e}),r.a.createElement("div",{className:"ChatBox_Action"},r.a.createElement("input",{className:"ChatBox_Action_Input",type:"text",placeholder:"Type messages here...",value:e.bufferText,onChange:e=>t.$update("chat.bufferText",e.target.value)}),r.a.createElement("button",{disabled:0===e.bufferText.length,onClick:()=>t.onClickSendChat()},"Send"))));var Y=Object(o.b)("ui","chat","action")(Object(o.c)(({ui:e,chat:t,action:a})=>r.a.createElement(B,{isVisible:e.isChatOpen},r.a.createElement(G,{ui:e,chat:t,action:a}))));var X=Object(o.b)("ui","action")(Object(o.c)(({ui:e,action:t})=>r.a.createElement(B,{isVisible:e.isWelcomeOpen,noAnim:!0},r.a.createElement("div",{className:"L-Welcome"},r.a.createElement("h3",{className:"L-Welcome_Header"},"SkyWayConferenceMobile"),r.a.createElement("p",{className:"L-Welcome_Messages"},"This site plays sound.",r.a.createElement("br",null),"And this site uses your camera and microphone until closing tab."),r.a.createElement("div",{className:"L-Welcome_Finish"},r.a.createElement("button",{onClick:()=>t.onClickWelcomeClose()},"OK"))))));var Q=Object(o.c)(({notification:e})=>r.a.createElement(r.a.Fragment,null,e.items.map(e=>r.a.createElement("div",{className:"Toast",key:e.id},e.text))));var Z=Object(o.b)("notification")(Object(o.c)(({notification:e})=>r.a.createElement("div",{className:"L-Notification"},r.a.createElement(Q,{notification:e}))));var ee=()=>r.a.createElement(C,null,r.a.createElement("main",{className:"L-Main"},r.a.createElement(A,null),r.a.createElement($,null)),r.a.createElement(H,null),r.a.createElement(Y,null),r.a.createElement(X,null),r.a.createElement(Z,null)),te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e};!function(){const[,e,t]=location.hash.split("/"),a=M.a.getOsName(navigator.userAgent),i=M.a.getBrowserName(navigator.userAgent);if(!1===(["Windows","Mac","iOS","Android"].includes(a)&&["Chrome","Firefox","Safari"].includes(i))||"Safari"===i&&"mesh"!==e)return void(location.href="./not_supported.html");if(!1===["iOS","Android"].includes(a))return void(location.href=`./conf.html${location.hash}`);const n=new y,c=new k(n);c.onLoad({roomType:e,roomName:t}),s.a.render(r.a.createElement(o.a,te({action:c},n),r.a.createElement(ee,null)),document.getElementById("app-root")),window.addEventListener("hashchange",()=>location.reload(!0))}()}]);