"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6242],{1320:function(X,T,w){w.d(T,{c:function(){return M}});var m=w(1308),_=w(7864),S=w(1898),M=function(D,G){var c,a,u=function(p,y,b){if("undefined"!=typeof document){var C=document.elementFromPoint(p,y);if(!C||!G(C))return void s();C!==c&&(s(),f(C,b))}},f=function(p,y){c=p,a||(a=c);var b=c;(0,m.c)(function(){return b.classList.add("ion-activated")}),y()},s=function(){var p=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(c){var y=c;(0,m.c)(function(){return y.classList.remove("ion-activated")}),p&&a!==c&&c.click(),c=void 0}};return(0,S.createGesture)({el:D,gestureName:"buttonActiveDrag",threshold:0,onStart:function(p){return u(p.currentX,p.currentY,_.a)},onMove:function(p){return u(p.currentX,p.currentY,_.b)},onEnd:function(){s(!0),(0,_.h)(),a=void 0}})}},7864:function(X,T,w){w.d(T,{a:function(){return M},b:function(){return j},c:function(){return S},d:function(){return G},h:function(){return D}});var m={getEngine:function(){var a,u=window;return u.TapticEngine||(null===(a=u.Capacitor)||void 0===a?void 0:a.isPluginAvailable("Haptics"))&&u.Capacitor.Plugins.Haptics},available:function(){var a,u=window;return!!this.getEngine()&&("web"!==(null===(a=u.Capacitor)||void 0===a?void 0:a.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate)},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(a){var u=this.getEngine();if(u){var f=this.isCapacitor()?a.style.toUpperCase():a.style;u.impact({style:f})}},notification:function(a){var u=this.getEngine();if(u){var f=this.isCapacitor()?a.style.toUpperCase():a.style;u.notification({style:f})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var a=this.getEngine();!a||(this.isCapacitor()?a.selectionStart():a.gestureSelectionStart())},selectionChanged:function(){var a=this.getEngine();!a||(this.isCapacitor()?a.selectionChanged():a.gestureSelectionChanged())},selectionEnd:function(){var a=this.getEngine();!a||(this.isCapacitor()?a.selectionEnd():a.gestureSelectionEnd())}},_=function(){return m.available()},S=function(){_()&&m.selection()},M=function(){_()&&m.selectionStart()},j=function(){_()&&m.selectionChanged()},D=function(){_()&&m.selectionEnd()},G=function(a){_()&&m.impact(a)}},2854:function(X,T,w){w.d(T,{c:function(){return j},g:function(){return G},h:function(){return M},o:function(){return a}});var m=w(5861),_=w(4942);function S(){S=function(){return u};var u={},f=Object.prototype,s=f.hasOwnProperty,l=Object.defineProperty||function(n,t,e){n[t]=e.value},p="function"==typeof Symbol?Symbol:{},y=p.iterator||"@@iterator",b=p.asyncIterator||"@@asyncIterator",C=p.toStringTag||"@@toStringTag";function d(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{d({},"")}catch(n){d=function(e,r,o){return e[r]=o}}function Z(n,t,e,r){var i=Object.create((t&&t.prototype instanceof U?t:U).prototype),h=new H(r||[]);return l(i,"_invoke",{value:V(n,e,h)}),i}function R(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(r){return{type:"throw",arg:r}}}u.wrap=Z;var E={};function U(){}function B(){}function O(){}var W={};d(W,y,function(){return this});var K=Object.getPrototypeOf,I=K&&K(K(z([])));I&&I!==f&&s.call(I,y)&&(W=I);var k=O.prototype=U.prototype=Object.create(W);function $(n){["next","throw","return"].forEach(function(t){d(n,t,function(e){return this._invoke(t,e)})})}function N(n,t){function e(o,i,h,v){var g=R(n[o],n,i);if("throw"!==g.type){var P=g.arg,L=P.value;return L&&"object"==typeof L&&s.call(L,"__await")?t.resolve(L.__await).then(function(A){e("next",A,h,v)},function(A){e("throw",A,h,v)}):t.resolve(L).then(function(A){P.value=A,h(P)},function(A){return e("throw",A,h,v)})}v(g.arg)}var r;l(this,"_invoke",{value:function(i,h){function v(){return new t(function(g,P){e(i,h,g,P)})}return r=r?r.then(v,v):v()}})}function V(n,t,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var h=e.delegate;if(h){var v=J(h,e);if(v){if(v===E)continue;return v}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var g=R(n,t,e);if("normal"===g.type){if(r=e.done?"completed":"suspendedYield",g.arg===E)continue;return{value:g.arg,done:e.done}}"throw"===g.type&&(r="completed",e.method="throw",e.arg=g.arg)}}}function J(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,J(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),E;var o=R(r,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,E;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,E):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,E)}function F(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function Y(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function H(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(F,this),this.reset(!0)}function z(n){if(n){var t=n[y];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,r=function o(){for(;++e<n.length;)if(s.call(n,e))return o.value=n[e],o.done=!1,o;return o.value=void 0,o.done=!0,o};return r.next=r}}return{next:Q}}function Q(){return{value:void 0,done:!0}}return B.prototype=O,l(k,"constructor",{value:O,configurable:!0}),l(O,"constructor",{value:B,configurable:!0}),B.displayName=d(O,C,"GeneratorFunction"),u.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===B||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,O):(n.__proto__=O,d(n,C,"GeneratorFunction")),n.prototype=Object.create(k),n},u.awrap=function(n){return{__await:n}},$(N.prototype),d(N.prototype,b,function(){return this}),u.AsyncIterator=N,u.async=function(n,t,e,r,o){void 0===o&&(o=Promise);var i=new N(Z(n,t,e,r),o);return u.isGeneratorFunction(t)?i:i.next().then(function(h){return h.done?h.value:i.next()})},$(k),d(k,C,"Generator"),d(k,y,function(){return this}),d(k,"toString",function(){return"[object Generator]"}),u.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function o(){for(;e.length;){var i=e.pop();if(i in t)return o.value=i,o.done=!1,o}return o.done=!0,o}},u.values=z,H.prototype={constructor:H,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Y),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(P,L){return h.type="throw",h.arg=t,e.next=P,L&&(e.method="next",e.arg=void 0),!!L}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],h=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var v=s.call(i,"catchLoc"),g=s.call(i,"finallyLoc");if(v&&g){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(v){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!g)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&s.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var h=i?i.completion:{};return h.type=t,h.arg=e,i?(this.method="next",this.next=i.finallyLoc,E):this.complete(h)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),E},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Y(r),E}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var i=o.arg;Y(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),E}},u}var M=function(f,s){return null!==s.closest(f)},j=function(f,s){return"string"==typeof f&&f.length>0?Object.assign((0,_.Z)({"ion-color":!0},"ion-color-".concat(f),!0),s):s},G=function(f){var s={};return function(f){return void 0!==f?(Array.isArray(f)?f:f.split(" ")).filter(function(l){return null!=l}).map(function(l){return l.trim()}).filter(function(l){return""!==l}):[]}(f).forEach(function(l){return s[l]=!0}),s},c=/^[a-z][a-z0-9+\-.]*:/,a=function(){var u=(0,m.Z)(S().mark(function f(s,l,p,y){var b;return S().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(null==s||"#"===s[0]||c.test(s)){d.next=5;break}if(!(b=document.querySelector("ion-router"))){d.next=5;break}return null!=l&&l.preventDefault(),d.abrupt("return",b.push(s,p,y));case 5:return d.abrupt("return",!1);case 6:case"end":return d.stop()}},f)}));return function(s,l,p,y){return u.apply(this,arguments)}}()}}]);