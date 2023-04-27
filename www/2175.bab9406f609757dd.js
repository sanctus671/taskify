"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2175],{7864:function(Q,G,b){b.d(G,{a:function(){return R},b:function(){return u},c:function(){return K},d:function(){return M},h:function(){return w}});var C={getEngine:function(){var h,O=window;return O.TapticEngine||(null===(h=O.Capacitor)||void 0===h?void 0:h.isPluginAvailable("Haptics"))&&O.Capacitor.Plugins.Haptics},available:function(){var h,O=window;return!!this.getEngine()&&("web"!==(null===(h=O.Capacitor)||void 0===h?void 0:h.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate)},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(h){var O=this.getEngine();if(O){var P=this.isCapacitor()?h.style.toUpperCase():h.style;O.impact({style:P})}},notification:function(h){var O=this.getEngine();if(O){var P=this.isCapacitor()?h.style.toUpperCase():h.style;O.notification({style:P})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var h=this.getEngine();!h||(this.isCapacitor()?h.selectionStart():h.gestureSelectionStart())},selectionChanged:function(){var h=this.getEngine();!h||(this.isCapacitor()?h.selectionChanged():h.gestureSelectionChanged())},selectionEnd:function(){var h=this.getEngine();!h||(this.isCapacitor()?h.selectionEnd():h.gestureSelectionEnd())}},I=function(){return C.available()},K=function(){I()&&C.selection()},R=function(){I()&&C.selectionStart()},u=function(){I()&&C.selectionChanged()},w=function(){I()&&C.selectionEnd()},M=function(h){I()&&C.impact(h)}},4147:function(Q,G,b){b.d(G,{a:function(){return K},b:function(){return I},p:function(){return C}});var C=function(u){for(var w,M=arguments.length,v=new Array(M>1?M-1:0),h=1;h<M;h++)v[h-1]=arguments[h];return(w=console).warn.apply(w,["[Ionic Warning]: ".concat(u)].concat(v))},I=function(u){for(var w,M=arguments.length,v=new Array(M>1?M-1:0),h=1;h<M;h++)v[h-1]=arguments[h];return(w=console).error.apply(w,["[Ionic Error]: ".concat(u)].concat(v))},K=function(u){for(var w=arguments.length,M=new Array(w>1?w-1:0),v=1;v<w;v++)M[v-1]=arguments[v];return console.error("<".concat(u.tagName.toLowerCase(),"> must be used inside ").concat(M.join(" or "),"."))}},3326:function(Q,G,b){b.r(G),b.d(G,{ion_refresher:function(){return te},ion_refresher_content:function(){return me}});var C=b(4942),I=b(5671),K=b(3144),R=b(5861),u=b(1308),w=b(5179),M=b(2225),v=b(8416),h=b(5730),O=b(7864),P=b(3045),q=b(109),$=b(5820),se=b(7741);function S(){S=function(){return y};var y={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(l,e,t){l[e]=t.value},s="function"==typeof Symbol?Symbol:{},f=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",o=s.toStringTag||"@@toStringTag";function d(l,e,t){return Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),l[e]}try{d({},"")}catch(l){d=function(t,c,g){return t[c]=g}}function x(l,e,t,c){var p=Object.create((e&&e.prototype instanceof E?e:E).prototype),_=new V(c||[]);return i(p,"_invoke",{value:ve(l,t,_)}),p}function A(l,e,t){try{return{type:"normal",arg:l.call(e,t)}}catch(c){return{type:"throw",arg:c}}}y.wrap=x;var m={};function E(){}function T(){}function k(){}var j={};d(j,f,function(){return this});var N=Object.getPrototypeOf,W=N&&N(N(J([])));W&&W!==n&&r.call(W,f)&&(j=W);var U=k.prototype=E.prototype=Object.create(j);function H(l){["next","throw","return"].forEach(function(e){d(l,e,function(t){return this._invoke(e,t)})})}function X(l,e){function t(g,p,_,D){var L=A(l[g],l,p);if("throw"!==L.type){var Y=L.arg,Z=Y.value;return Z&&"object"==typeof Z&&r.call(Z,"__await")?e.resolve(Z.__await).then(function(B){t("next",B,_,D)},function(B){t("throw",B,_,D)}):e.resolve(Z).then(function(B){Y.value=B,_(Y)},function(B){return t("throw",B,_,D)})}D(L.arg)}var c;i(this,"_invoke",{value:function(p,_){function D(){return new e(function(L,Y){t(p,_,L,Y)})}return c=c?c.then(D,D):D()}})}function ve(l,e,t){var c="suspendedStart";return function(g,p){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===g)throw p;return{value:void 0,done:!0}}for(t.method=g,t.arg=p;;){var _=t.delegate;if(_){var D=ne(_,t);if(D){if(D===m)continue;return D}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===c)throw c="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);c="executing";var L=A(l,e,t);if("normal"===L.type){if(c=t.done?"completed":"suspendedYield",L.arg===m)continue;return{value:L.arg,done:t.done}}"throw"===L.type&&(c="completed",t.method="throw",t.arg=L.arg)}}}function ne(l,e){var t=e.method,c=l.iterator[t];if(void 0===c)return e.delegate=null,"throw"===t&&l.iterator.return&&(e.method="return",e.arg=void 0,ne(l,e),"throw"===e.method)||"return"!==t&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+t+"' method")),m;var g=A(c,l.iterator,e.arg);if("throw"===g.type)return e.method="throw",e.arg=g.arg,e.delegate=null,m;var p=g.arg;return p?p.done?(e[l.resultName]=p.value,e.next=l.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):p:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function ye(l){var e={tryLoc:l[0]};1 in l&&(e.catchLoc=l[1]),2 in l&&(e.finallyLoc=l[2],e.afterLoc=l[3]),this.tryEntries.push(e)}function F(l){var e=l.completion||{};e.type="normal",delete e.arg,l.completion=e}function V(l){this.tryEntries=[{tryLoc:"root"}],l.forEach(ye,this),this.reset(!0)}function J(l){if(l){var e=l[f];if(e)return e.call(l);if("function"==typeof l.next)return l;if(!isNaN(l.length)){var t=-1,c=function g(){for(;++t<l.length;)if(r.call(l,t))return g.value=l[t],g.done=!1,g;return g.value=void 0,g.done=!0,g};return c.next=c}}return{next:ie}}function ie(){return{value:void 0,done:!0}}return T.prototype=k,i(U,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:T,configurable:!0}),T.displayName=d(k,o,"GeneratorFunction"),y.isGeneratorFunction=function(l){var e="function"==typeof l&&l.constructor;return!!e&&(e===T||"GeneratorFunction"===(e.displayName||e.name))},y.mark=function(l){return Object.setPrototypeOf?Object.setPrototypeOf(l,k):(l.__proto__=k,d(l,o,"GeneratorFunction")),l.prototype=Object.create(U),l},y.awrap=function(l){return{__await:l}},H(X.prototype),d(X.prototype,a,function(){return this}),y.AsyncIterator=X,y.async=function(l,e,t,c,g){void 0===g&&(g=Promise);var p=new X(x(l,e,t,c),g);return y.isGeneratorFunction(e)?p:p.next().then(function(_){return _.done?_.value:p.next()})},H(U),d(U,o,"Generator"),d(U,f,function(){return this}),d(U,"toString",function(){return"[object Generator]"}),y.keys=function(l){var e=Object(l),t=[];for(var c in e)t.push(c);return t.reverse(),function g(){for(;t.length;){var p=t.pop();if(p in e)return g.value=p,g.done=!1,g}return g.done=!0,g}},y.values=J,V.prototype={constructor:V,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function c(Y,Z){return _.type="throw",_.arg=e,t.next=Y,Z&&(t.method="next",t.arg=void 0),!!Z}for(var g=this.tryEntries.length-1;g>=0;--g){var p=this.tryEntries[g],_=p.completion;if("root"===p.tryLoc)return c("end");if(p.tryLoc<=this.prev){var D=r.call(p,"catchLoc"),L=r.call(p,"finallyLoc");if(D&&L){if(this.prev<p.catchLoc)return c(p.catchLoc,!0);if(this.prev<p.finallyLoc)return c(p.finallyLoc)}else if(D){if(this.prev<p.catchLoc)return c(p.catchLoc,!0)}else{if(!L)throw new Error("try statement without catch or finally");if(this.prev<p.finallyLoc)return c(p.finallyLoc)}}}},abrupt:function(e,t){for(var c=this.tryEntries.length-1;c>=0;--c){var g=this.tryEntries[c];if(g.tryLoc<=this.prev&&r.call(g,"finallyLoc")&&this.prev<g.finallyLoc){var p=g;break}}p&&("break"===e||"continue"===e)&&p.tryLoc<=t&&t<=p.finallyLoc&&(p=null);var _=p?p.completion:{};return _.type=e,_.arg=t,p?(this.method="next",this.next=p.finallyLoc,m):this.complete(_)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var c=this.tryEntries[t];if(c.finallyLoc===e)return this.complete(c.completion,c.afterLoc),F(c),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var c=this.tryEntries[t];if(c.tryLoc===e){var g=c.completion;if("throw"===g.type){var p=g.arg;F(c)}return p}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,c){return this.delegate={iterator:J(e),resultName:t,nextLoc:c},"next"===this.method&&(this.arg=void 0),m}},y}b(3457);var ae=function(n){var r=n.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"},oe=function(n,r,i){return"scale"===n?le(r,i):fe(r,i)},ee=function(n){var r=n.querySelector("ion-spinner"),i=r.shadowRoot.querySelector("circle"),s=n.querySelector(".spinner-arrow-container"),f=n.querySelector(".arrow-container"),a=f?f.querySelector("ion-icon"):null,o=(0,P.c)().duration(1e3).easing("ease-out"),d=(0,P.c)().addElement(s).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),x=(0,P.c)().addElement(i).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),A=(0,P.c)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(f&&a){var m=(0,P.c)().addElement(f).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),E=(0,P.c)().addElement(a).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([m,E])}return o.addAnimation([d,x,A])},le=function(n,r){var i=r.clientHeight,s=(0,P.c)().addElement(n).keyframes([{offset:0,transform:"scale(0) translateY(-".concat(i,"px)")},{offset:1,transform:"scale(1) translateY(100px)"}]);return ee(n).addAnimation([s])},fe=function(n,r){var i=r.clientHeight,s=(0,P.c)().addElement(n).keyframes([{offset:0,transform:"translateY(-".concat(i,"px)")},{offset:1,transform:"translateY(100px)"}]);return ee(n).addAnimation([s])},he=function(n){return(0,P.c)().duration(125).addElement(n).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")},ce=function(n,r){n.style.setProperty("opacity",r.toString())},ue=function(n,r,i){(0,u.c)(function(){n.forEach(function(f,a){var o=a*(1/r),A=(0,h.l)(0,(i-o)/(1-o),1);f.style.setProperty("opacity",A.toString())})})},pe=function(n,r){(0,u.c)(function(){n.style.setProperty("--refreshing-rotation-duration",r>=1?"0.5s":"2s"),n.style.setProperty("opacity","1")})},z=function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;if(!n)return Promise.resolve();var s=(0,h.t)(n,i);return(0,u.c)(function(){n.style.setProperty("transition","".concat(i,"ms all ease-out")),void 0===r?n.style.removeProperty("transform"):n.style.setProperty("transform","translate3d(0px, ".concat(r,", 0px)"))}),s},re=function(){var y=(0,R.Z)(S().mark(function n(r,i){var s,f,a;return S().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(s=r.querySelector("ion-refresher-content")){d.next=3;break}return d.abrupt("return",Promise.resolve(!1));case 3:return d.next=5,new Promise(function(x){return(0,h.c)(s,x)});case 5:return f=r.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),a=r.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),d.abrupt("return",null!==f&&null!==a&&("ios"===i&&(0,w.a)("mobile")&&void 0!==r.style.webkitOverflowScrolling||"md"===i));case 8:case"end":return d.stop()}},n)}));return function(r,i){return y.apply(this,arguments)}}(),te=function(){function y(n){(0,I.Z)(this,y),(0,u.r)(this,n),this.ionRefresh=(0,u.e)(this,"ionRefresh",7),this.ionPull=(0,u.e)(this,"ionPull",7),this.ionStart=(0,u.e)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}return(0,K.Z)(y,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"checkNativeRefresher",value:(n=(0,R.Z)(S().mark(function i(){var s,f;return S().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,re(this.el,(0,w.b)(this));case 2:(s=o.sent)&&!this.nativeRefresher?(f=this.el.closest("ion-content"),this.setupNativeRefresher(f)):s||this.destroyNativeRefresher();case 4:case"end":return o.stop()}},i,this)})),function r(){return n.apply(this,arguments)})},{key:"destroyNativeRefresher",value:function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}},{key:"resetNativeRefresher",value:function(){var n=(0,R.Z)(S().mark(function i(s,f){return S().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(this.state=f,"ios"!==(0,w.b)(this)){o.next=6;break}return o.next=4,z(s,void 0,300);case 4:o.next=8;break;case 6:return o.next=8,(0,h.t)(this.el.querySelector(".refresher-refreshing-icon"),200);case 8:this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach(function(d){return d.destroy()}),this.animations=[],this.progress=0,this.state=1;case 15:case"end":return o.stop()}},i,this)}));return function r(i,s){return n.apply(this,arguments)}}()},{key:"setupiOSNativeRefresher",value:function(){var n=(0,R.Z)(S().mark(function i(s,f){var o,d,x,a=this;return S().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return this.elementToTransform=this.scrollEl,o=s.shadowRoot.querySelectorAll("svg"),d=.16*this.scrollEl.clientHeight,x=o.length,(0,u.c)(function(){return o.forEach(function(E){return E.style.setProperty("animation","none")})}),this.scrollListenerCallback=function(){!a.pointerDown&&1===a.state||(0,u.f)(function(){var E=a.scrollEl.scrollTop,T=a.el.clientHeight;if(E>0){if(8===a.state){var k=(0,h.l)(0,E/(.5*T),1);return void(0,u.c)(function(){return ce(f,1-k)})}}else{a.pointerDown&&(a.didStart||(a.didStart=!0,a.ionStart.emit()),a.pointerDown&&a.ionPull.emit());var j=a.didStart?30:0,N=a.progress=(0,h.l)(0,(Math.abs(E)-j)/d,1);8===a.state||1===N?(a.pointerDown&&pe(f,a.lastVelocityY),a.didRefresh||(a.beginRefresh(),a.didRefresh=!0,(0,O.d)({style:"light"}),a.pointerDown||z(a.elementToTransform,"".concat(T,"px")))):(a.state=2,ue(o,x,N))}})},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),m.next=9,Promise.resolve().then(b.bind(b,1898));case 9:this.gesture=m.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){a.pointerDown=!0,a.didRefresh||z(a.elementToTransform,"0px"),0===d&&(d=.16*a.scrollEl.clientHeight)},onMove:function(T){a.lastVelocityY=T.velocityY},onEnd:function(){a.pointerDown=!1,a.didStart=!1,a.needsCompletion?(a.resetNativeRefresher(a.elementToTransform,32),a.needsCompletion=!1):a.didRefresh&&(0,u.f)(function(){return z(a.elementToTransform,"".concat(a.el.clientHeight,"px"))})}}),this.disabledChanged();case 11:case"end":return m.stop()}},i,this)}));return function r(i,s){return n.apply(this,arguments)}}()},{key:"setupMDNativeRefresher",value:function(){var n=(0,R.Z)(S().mark(function i(s,f,a){var d,x,A,o=this;return S().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return d=(0,h.g)(f).querySelector("circle"),x=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),A=(0,h.g)(a).querySelector("circle"),null!==d&&null!==A&&(0,u.c)(function(){d.style.setProperty("animation","none"),a.style.setProperty("animation-delay","-655ms"),A.style.setProperty("animation-delay","-655ms")}),E.next=6,Promise.resolve().then(b.bind(b,1898));case 6:this.gesture=E.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return 8!==o.state&&32!==o.state&&0===o.scrollEl.scrollTop},onStart:function(k){o.progress=0,k.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(k){if(k.velocityY<0&&0===o.progress&&!k.data.didStart||k.data.cancelled)k.data.cancelled=!0;else{if(!k.data.didStart){k.data.didStart=!0,o.state=2,(0,u.c)(function(){return o.scrollEl.style.setProperty("--overflow","hidden")});var j=ae(s),N=oe(j,x,o.el);return k.data.animation=N,N.progressStart(!1,0),o.ionStart.emit(),void o.animations.push(N)}o.progress=(0,h.l)(0,k.deltaY/180*.5,1),k.data.animation.progressStep(o.progress),o.ionPull.emit()}},onEnd:function(k){if(k.data.didStart){if(o.gesture.enable(!1),(0,u.c)(function(){return o.scrollEl.style.removeProperty("--overflow")}),o.progress<=.4)return void k.data.animation.progressEnd(0,o.progress,500).onFinish(function(){o.animations.forEach(function(W){return W.destroy()}),o.animations=[],o.gesture.enable(!0),o.state=1});var j=(0,M.g)([0,0],[0,0],[1,1],[1,1],o.progress)[0],N=he(x);o.animations.push(N),(0,u.c)((0,R.Z)(S().mark(function W(){return S().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return x.style.setProperty("--ion-pulling-refresher-translate","".concat(100*j,"px")),k.data.animation.progressEnd(),H.next=4,N.play();case 4:o.beginRefresh(),k.data.animation.destroy(),o.gesture.enable(!0);case 7:case"end":return H.stop()}},W)})))}}}),this.disabledChanged();case 8:case"end":return E.stop()}},i,this)}));return function r(i,s,f){return n.apply(this,arguments)}}()},{key:"setupNativeRefresher",value:function(){var n=(0,R.Z)(S().mark(function i(s){var f,a;return S().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!this.scrollListenerCallback&&s&&!this.nativeRefresher&&this.scrollEl){d.next=2;break}return d.abrupt("return");case 2:this.setCss(0,"",!1,""),this.nativeRefresher=!0,f=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),a=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===(0,w.b)(this)?this.setupiOSNativeRefresher(f,a):this.setupMDNativeRefresher(s,f,a);case 7:case"end":return d.stop()}},i,this)}));return function r(i){return n.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.checkNativeRefresher()}},{key:"connectedCallback",value:function(){var n=(0,R.Z)(S().mark(function i(){var f,s=this;return S().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if("fixed"===this.el.getAttribute("slot")){o.next=3;break}return console.error('Make sure you use: <ion-refresher slot="fixed">'),o.abrupt("return");case 3:if(f=this.el.closest(v.I)){o.next=7;break}return(0,v.p)(this.el),o.abrupt("return");case 7:(0,h.c)(f,(0,R.Z)(S().mark(function d(){var x;return S().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return x=f.querySelector(v.b),m.next=3,(0,v.g)(null!=x?x:f);case 3:return s.scrollEl=m.sent,m.next=6,f.getBackgroundElement();case 6:return s.backgroundContentEl=m.sent,m.next=9,re(s.el,(0,w.b)(s));case 9:if(!m.sent){m.next=13;break}s.setupNativeRefresher(f),m.next=17;break;case 13:return m.next=15,Promise.resolve().then(b.bind(b,1898));case 15:s.gesture=m.sent.createGesture({el:f,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:function(){return s.canStart()},onStart:function(){return s.onStart()},onMove:function(T){return s.onMove(T)},onEnd:function(){return s.onEnd()}}),s.disabledChanged();case 17:case"end":return m.stop()}},d)})));case 8:case"end":return o.stop()}},i,this)}));return function r(){return n.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(){var n=(0,R.Z)(S().mark(function i(){var s=this;return S().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||(0,h.r)(function(){return(0,h.r)(function(){return s.resetNativeRefresher(s.elementToTransform,32)})})):this.close(32,"120ms");case 1:case"end":return a.stop()}},i,this)}));return function r(){return n.apply(this,arguments)}}()},{key:"cancel",value:function(){var n=(0,R.Z)(S().mark(function i(){var s=this;return S().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:this.nativeRefresher?this.pointerDown||(0,h.r)(function(){return(0,h.r)(function(){return s.resetNativeRefresher(s.elementToTransform,16)})}):this.close(16,"");case 1:case"end":return a.stop()}},i,this)}));return function r(){return n.apply(this,arguments)}}()},{key:"getProgress",value:function(){return Promise.resolve(this.progress)}},{key:"canStart",value:function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}},{key:"onStart",value:function(){this.progress=0,this.state=1,this.memoizeOverflowStyle()}},{key:"onMove",value:function(r){if(this.scrollEl){var i=r.event;if(!(void 0!==i.touches&&i.touches.length>1)&&0==(56&this.state)){var s=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,f=r.deltaY*s;if(f<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(i.cancelable&&i.preventDefault(),this.setCss(f,"0ms",!0,""),0===f)return void(this.progress=0);var o=this.pullMin;if(this.progress=f/o,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),f<o)return void(this.state=2);if(f>this.pullMax)return void this.beginRefresh();this.state=4}}}},{key:"onEnd",value:function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}},{key:"beginRefresh",value:function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}},{key:"close",value:function(r,i){var s=this;setTimeout(function(){s.state=1,s.progress=0,s.didStart=!1,s.setCss(0,"0ms",!1,"")},600),this.state=r,this.setCss(0,this.closeDuration,!0,i)}},{key:"setCss",value:function(r,i,s,f){var a=this;this.nativeRefresher||(this.appliedStyles=r>0,(0,u.c)(function(){if(a.scrollEl&&a.backgroundContentEl){var o=a.scrollEl.style,d=a.backgroundContentEl.style;o.transform=d.transform=r>0?"translateY(".concat(r,"px) translateZ(0px)"):"",o.transitionDuration=d.transitionDuration=i,o.transitionDelay=d.transitionDelay=f,s?o.overflow="hidden":a.restoreOverflowStyle()}}))}},{key:"memoizeOverflowStyle",value:function(){if(this.scrollEl){var r=this.scrollEl.style,i=r.overflow,s=r.overflowX,f=r.overflowY;this.overflowStyles={overflow:null!=i?i:"",overflowX:null!=s?s:"",overflowY:null!=f?f:""}}}},{key:"restoreOverflowStyle",value:function(){if(void 0!==this.overflowStyles&&void 0!==this.scrollEl){var r=this.overflowStyles,s=r.overflowX,f=r.overflowY;this.scrollEl.style.overflow=r.overflow,this.scrollEl.style.overflowX=s,this.scrollEl.style.overflowY=f,this.overflowStyles=void 0}}},{key:"render",value:function(){var r,i=(0,w.b)(this);return(0,u.h)(u.H,{slot:"fixed",class:(r={},(0,C.Z)(r,i,!0),(0,C.Z)(r,"refresher-".concat(i),!0),(0,C.Z)(r,"refresher-native",this.nativeRefresher),(0,C.Z)(r,"refresher-active",1!==this.state),(0,C.Z)(r,"refresher-pulling",2===this.state),(0,C.Z)(r,"refresher-ready",4===this.state),(0,C.Z)(r,"refresher-refreshing",8===this.state),(0,C.Z)(r,"refresher-cancelling",16===this.state),(0,C.Z)(r,"refresher-completing",32===this.state),r)})}},{key:"el",get:function(){return(0,u.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),y;var n}();te.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};var me=function(){function y(n){(0,I.Z)(this,y),(0,u.r)(this,n),this.customHTMLEnabled=w.c.get("innerHTMLTemplatesEnabled",$.E)}return(0,K.Z)(y,[{key:"componentWillLoad",value:function(){if(void 0===this.pullingIcon){var r=(0,w.b)(this),i=void 0!==this.el.style.webkitOverflowScrolling?"lines":q.i;this.pullingIcon=w.c.get("refreshingIcon","ios"===r&&(0,w.a)("mobile")?w.c.get("spinner",i):"circular")}if(void 0===this.refreshingSpinner){var s=(0,w.b)(this);this.refreshingSpinner=w.c.get("refreshingSpinner",w.c.get("spinner","ios"===s?"lines":"circular"))}}},{key:"renderPullingText",value:function(){var i=this.pullingText;return this.customHTMLEnabled?(0,u.h)("div",{class:"refresher-pulling-text",innerHTML:(0,$.a)(i)}):(0,u.h)("div",{class:"refresher-pulling-text"},i)}},{key:"renderRefreshingText",value:function(){var i=this.refreshingText;return this.customHTMLEnabled?(0,u.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,$.a)(i)}):(0,u.h)("div",{class:"refresher-refreshing-text"},i)}},{key:"render",value:function(){var r=this.pullingIcon,i=null!=r&&void 0!==se.S[r],s=(0,w.b)(this);return(0,u.h)(u.H,{class:s},(0,u.h)("div",{class:"refresher-pulling"},this.pullingIcon&&i&&(0,u.h)("div",{class:"refresher-pulling-icon"},(0,u.h)("div",{class:"spinner-arrow-container"},(0,u.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===s&&"circular"===this.pullingIcon&&(0,u.h)("div",{class:"arrow-container"},(0,u.h)("ion-icon",{icon:q.h})))),this.pullingIcon&&!i&&(0,u.h)("div",{class:"refresher-pulling-icon"},(0,u.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),void 0!==this.pullingText&&this.renderPullingText()),(0,u.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,u.h)("div",{class:"refresher-refreshing-icon"},(0,u.h)("ion-spinner",{name:this.refreshingSpinner})),void 0!==this.refreshingText&&this.renderRefreshingText()))}},{key:"el",get:function(){return(0,u.i)(this)}}]),y}()}}]);