"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5326],{5326:function(de,V,H){H.r(V),H.d(V,{startInputShims:function(){return fe}});var Z=H(5861),W=H(8416),D=H(5730);function G(){G=function(){return v};var v={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",h=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(r,i,c){return r[i]=c}}function m(t,e,r,i){var u=Object.create((e&&e.prototype instanceof b?e:b).prototype),y=new R(i||[]);return o(u,"_invoke",{value:I(t,r,y)}),u}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(i){return{type:"throw",arg:i}}}v.wrap=m;var p={};function b(){}function P(){}function L(){}var M={};f(M,l,function(){return this});var g=Object.getPrototypeOf,A=g&&g(g(F([])));A&&A!==n&&a.call(A,l)&&(M=A);var C=L.prototype=b.prototype=Object.create(M);function O(t){["next","throw","return"].forEach(function(e){f(t,e,function(r){return this._invoke(e,r)})})}function S(t,e){function r(c,u,y,_){var T=w(t[c],t,u);if("throw"!==T.type){var j=T.arg,B=j.value;return B&&"object"==typeof B&&a.call(B,"__await")?e.resolve(B.__await).then(function(K){r("next",K,y,_)},function(K){r("throw",K,y,_)}):e.resolve(B).then(function(K){j.value=K,y(j)},function(K){return r("throw",K,y,_)})}_(T.arg)}var i;o(this,"_invoke",{value:function(u,y){function _(){return new e(function(T,j){r(u,y,T,j)})}return i=i?i.then(_,_):_()}})}function I(t,e,r){var i="suspendedStart";return function(c,u){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===c)throw u;return{value:void 0,done:!0}}for(r.method=c,r.arg=u;;){var y=r.delegate;if(y){var _=N(y,r);if(_){if(_===p)continue;return _}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===i)throw i="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i="executing";var T=w(t,e,r);if("normal"===T.type){if(i=r.done?"completed":"suspendedYield",T.arg===p)continue;return{value:T.arg,done:r.done}}"throw"===T.type&&(i="completed",r.method="throw",r.arg=T.arg)}}}function N(t,e){var r=e.method,i=t.iterator[r];if(void 0===i)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var c=w(i,t.iterator,e.arg);if("throw"===c.type)return e.method="throw",e.arg=c.arg,e.delegate=null,p;var u=c.arg;return u?u.done?(e[t.resultName]=u.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):u:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function F(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function c(){for(;++r<t.length;)if(a.call(t,r))return c.value=t[r],c.done=!1,c;return c.value=void 0,c.done=!0,c};return i.next=i}}return{next:U}}function U(){return{value:void 0,done:!0}}return P.prototype=L,o(C,"constructor",{value:L,configurable:!0}),o(L,"constructor",{value:P,configurable:!0}),P.displayName=f(L,h,"GeneratorFunction"),v.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===P||"GeneratorFunction"===(e.displayName||e.name))},v.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,f(t,h,"GeneratorFunction")),t.prototype=Object.create(C),t},v.awrap=function(t){return{__await:t}},O(S.prototype),f(S.prototype,d,function(){return this}),v.AsyncIterator=S,v.async=function(t,e,r,i,c){void 0===c&&(c=Promise);var u=new S(m(t,e,r,i),c);return v.isGeneratorFunction(e)?u:u.next().then(function(y){return y.done?y.value:u.next()})},O(C),f(C,h,"Generator"),f(C,l,function(){return this}),f(C,"toString",function(){return"[object Generator]"}),v.keys=function(t){var e=Object(t),r=[];for(var i in e)r.push(i);return r.reverse(),function c(){for(;r.length;){var u=r.pop();if(u in e)return c.value=u,c.done=!1,c}return c.done=!0,c}},v.values=F,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(j,B){return y.type="throw",y.arg=e,r.next=j,B&&(r.method="next",r.arg=void 0),!!B}for(var c=this.tryEntries.length-1;c>=0;--c){var u=this.tryEntries[c],y=u.completion;if("root"===u.tryLoc)return i("end");if(u.tryLoc<=this.prev){var _=a.call(u,"catchLoc"),T=a.call(u,"finallyLoc");if(_&&T){if(this.prev<u.catchLoc)return i(u.catchLoc,!0);if(this.prev<u.finallyLoc)return i(u.finallyLoc)}else if(_){if(this.prev<u.catchLoc)return i(u.catchLoc,!0)}else{if(!T)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return i(u.finallyLoc)}}}},abrupt:function(e,r){for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i];if(c.tryLoc<=this.prev&&a.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var u=c;break}}u&&("break"===e||"continue"===e)&&u.tryLoc<=r&&r<=u.finallyLoc&&(u=null);var y=u?u.completion:{};return y.type=e,y.arg=r,u?(this.method="next",this.next=u.finallyLoc,p):this.complete(y)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),p},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),k(i),p}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc===e){var c=i.completion;if("throw"===c.type){var u=c.arg;k(i)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,i){return this.delegate={iterator:F(e),resultName:r,nextLoc:i},"next"===this.method&&(this.arg=void 0),p}},v}var Y=new WeakMap,$=function(n,a,o){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Y.has(n)!==o&&(o?q(n,a,s,l):X(n,a))},z=function(n){return n===n.getRootNode().activeElement},q=function(n,a,o){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=a.parentNode,d=a.cloneNode(!1);d.classList.add("cloned-input"),d.tabIndex=-1,s&&(d.disabled=!0),l.appendChild(d),Y.set(n,d);var h=n.ownerDocument,f="rtl"===h.dir?9999:-9999;n.style.pointerEvents="none",a.style.transform="translate3d(".concat(f,"px,").concat(o,"px,0) scale(0)")},X=function(n,a){var o=Y.get(n);o&&(Y.delete(n),o.remove()),n.style.pointerEvents="",a.style.transform=""},ee=function(n,a,o){if(!o||!a)return function(){};var s=function(m){z(a)&&$(n,a,m)},l=function(){return $(n,a,!1)},d=function(){return s(!0)},h=function(){return s(!1)};return(0,D.a)(o,"ionScrollStart",d),(0,D.a)(o,"ionScrollEnd",h),a.addEventListener("blur",l),function(){(0,D.b)(o,"ionScrollStart",d),(0,D.b)(o,"ionScrollEnd",h),a.removeEventListener("blur",l)}},x="input, textarea, [no-blur], [contenteditable]",ne=function(n,a,o){var s,l=null!==(s=n.closest("ion-item,[ion-item]"))&&void 0!==s?s:n;return ae(l.getBoundingClientRect(),a.getBoundingClientRect(),o,n.ownerDocument.defaultView.innerHeight)},ae=function(n,a,o,s){var l=n.top,d=n.bottom,h=a.top,m=h+15,p=.75*Math.min(a.bottom,s-o)-d,b=m-l,P=Math.round(p<0?-p:b>0?-b:0),L=Math.min(P,l-h),M=Math.abs(L);return{scrollAmount:L,scrollDuration:Math.min(400,Math.max(150,M/.3)),scrollPadding:o,inputSafeY:4-(l-m)}},oe=function(n,a,o,s,l){var h,d=arguments.length>5&&void 0!==arguments[5]&&arguments[5],f=function(p){h=(0,D.p)(p)},m=function(p){if(h){var b=(0,D.p)(p);!ue(6,h,b)&&!z(a)&&ie(n,a,o,s,l,d)}};return n.addEventListener("touchstart",f,{capture:!0,passive:!0}),n.addEventListener("touchend",m,!0),function(){n.removeEventListener("touchstart",f,!0),n.removeEventListener("touchend",m,!0)}},ie=function(){var v=(0,Z.Z)(G().mark(function n(a,o,s,l,d){var h,f,m,w,p,b,L=arguments;return G().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(h=L.length>5&&void 0!==L[5]&&L[5],s||l){g.next=3;break}return g.abrupt("return");case 3:if(f=ne(a,s||l,d),!(s&&Math.abs(f.scrollAmount)<4)){g.next=7;break}return o.focus(),g.abrupt("return");case 7:if($(a,o,!0,f.inputSafeY,h),o.focus(),(0,D.r)(function(){return a.click()}),"undefined"==typeof window){g.next=23;break}if(w=function(){var A=(0,Z.Z)(G().mark(function C(){return G().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(void 0!==m&&clearTimeout(m),window.removeEventListener("ionKeyboardDidShow",p),window.removeEventListener("ionKeyboardDidShow",w),!s){S.next=6;break}return S.next=6,(0,W.c)(s,0,f.scrollAmount,f.scrollDuration);case 6:$(a,o,!1,f.inputSafeY),o.focus();case 8:case"end":return S.stop()}},C)}));return function(){return A.apply(this,arguments)}}(),p=function A(){window.removeEventListener("ionKeyboardDidShow",A),window.addEventListener("ionKeyboardDidShow",w)},!s){g.next=22;break}return g.next=16,(0,W.g)(s);case 16:if(!(f.scrollAmount>(b=g.sent).scrollHeight-b.clientHeight-b.scrollTop)){g.next=22;break}return"password"===o.type?(f.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",p)):window.addEventListener("ionKeyboardDidShow",w),m=setTimeout(w,1e3),g.abrupt("return");case 22:w();case 23:case"end":return g.stop()}},n)}));return function(a,o,s,l,d){return v.apply(this,arguments)}}(),ue=function(n,a,o){if(a&&o){var s=a.x-o.x,l=a.y-o.y;return s*s+l*l>n*n}return!1},J="$ionPaddingTimer",Q=function(n,a){var o,s;if("INPUT"===n.tagName&&(!n.parentElement||"ION-INPUT"!==n.parentElement.tagName)&&"ION-SEARCHBAR"!==(null===(s=null===(o=n.parentElement)||void 0===o?void 0:o.parentElement)||void 0===s?void 0:s.tagName)){var l=(0,W.f)(n);if(null!==l){var d=l[J];d&&clearTimeout(d),a>0?l.style.setProperty("--keyboard-offset","".concat(a,"px")):l[J]=setTimeout(function(){l.style.setProperty("--keyboard-offset","0px")},120)}}},fe=function(n,a){var o=document,s="ios"===a,l="android"===a,d=n.getNumber("keyboardHeight",290),h=n.getBoolean("scrollAssist",!0),f=n.getBoolean("hideCaretOnScroll",s),m=n.getBoolean("inputBlurring",s),w=n.getBoolean("scrollPadding",!0),p=Array.from(o.querySelectorAll("ion-input, ion-textarea")),b=new WeakMap,P=new WeakMap,L=function(){var O=(0,Z.Z)(G().mark(function S(I){var N,E,k,R,F,t;return G().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,new Promise(function(i){return(0,D.c)(I,i)});case 2:if(E=(N=I.shadowRoot||I).querySelector("input")||N.querySelector("textarea"),k=(0,W.f)(I),R=k?null:I.closest("ion-footer"),E){r.next=8;break}return r.abrupt("return");case 8:!!k&&f&&!b.has(I)&&(F=ee(I,E,k),b.set(I,F)),"date"!==E.type&&"datetime-local"!==E.type&&(k||R)&&h&&!P.has(I)&&(t=oe(I,E,k,R,d,l),P.set(I,t));case 11:case"end":return r.stop()}},S)}));return function(I){return O.apply(this,arguments)}}();m&&function(){var n=!0,a=!1,o=document;(0,D.a)(o,"ionScrollStart",function(){a=!0}),o.addEventListener("focusin",function(){n=!0},!0),o.addEventListener("touchend",function(f){if(a)a=!1;else{var m=o.activeElement;if(m&&!m.matches(x)){var w=f.target;w!==m&&(w.matches(x)||w.closest(x)||(n=!1,setTimeout(function(){n||m.blur()},50)))}}},!1)}(),w&&function(n){var a=document;a.addEventListener("focusin",function(d){Q(d.target,n)}),a.addEventListener("focusout",function(d){Q(d.target,0)})}(d);for(var g=0,A=p;g<A.length;g++)L(A[g]);o.addEventListener("ionInputDidLoad",function(O){L(O.detail)}),o.addEventListener("ionInputDidUnload",function(O){!function(S){if(f){var I=b.get(S);I&&I(),b.delete(S)}if(h){var N=P.get(S);N&&N(),P.delete(S)}}(O.detail)})}}}]);