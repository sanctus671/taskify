"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4376],{4376:function(V,C,_){_.r(C),_.d(C,{ion_text:function(){return T}});var I=_(4942),S=_(5671),O=_(3144),w=_(1308),G=_(5179),W=_(2854),T=function(){function D(s){(0,S.Z)(this,D),(0,w.r)(this,s)}return(0,O.Z)(D,[{key:"render",value:function(){var f=(0,G.b)(this);return(0,w.h)(w.H,{class:(0,W.c)(this.color,(0,I.Z)({},f,!0))},(0,w.h)("slot",null))}}]),D}();T.style=":host(.ion-color){color:var(--ion-color-base)}"},2854:function(V,C,_){_.d(C,{c:function(){return G},g:function(){return R},h:function(){return w},o:function(){return D}});var I=_(5861),S=_(4942);function O(){O=function(){return s};var s={},f=Object.prototype,a=f.hasOwnProperty,h=Object.defineProperty||function(e,t,r){e[t]=r.value},b="function"==typeof Symbol?Symbol:{},y=b.iterator||"@@iterator",P=b.asyncIterator||"@@asyncIterator",k=b.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(r,n,i){return r[n]=i}}function H(e,t,r,n){var o=Object.create((t&&t.prototype instanceof U?t:U).prototype),u=new Y(n||[]);return h(o,"_invoke",{value:X(e,r,u)}),o}function N(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}s.wrap=H;var d={};function U(){}function M(){}function m(){}var B={};c(B,y,function(){return this});var K=Object.getPrototypeOf,j=K&&K(K(z([])));j&&j!==f&&a.call(j,y)&&(B=j);var L=m.prototype=U.prototype=Object.create(B);function $(e){["next","throw","return"].forEach(function(t){c(e,t,function(r){return this._invoke(t,r)})})}function A(e,t){function r(i,o,u,l){var p=N(e[i],e,o);if("throw"!==p.type){var g=p.arg,v=g.value;return v&&"object"==typeof v&&a.call(v,"__await")?t.resolve(v.__await).then(function(E){r("next",E,u,l)},function(E){r("throw",E,u,l)}):t.resolve(v).then(function(E){g.value=E,u(g)},function(E){return r("throw",E,u,l)})}l(p.arg)}var n;h(this,"_invoke",{value:function(o,u){function l(){return new t(function(p,g){r(o,u,p,g)})}return n=n?n.then(l,l):l()}})}function X(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return{value:void 0,done:!0}}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var l=J(u,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var p=N(e,t,r);if("normal"===p.type){if(n=r.done?"completed":"suspendedYield",p.arg===d)continue;return{value:p.arg,done:r.done}}"throw"===p.type&&(n="completed",r.method="throw",r.arg=p.arg)}}}function J(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,J(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var i=N(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function Z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Y(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function z(e){if(e){var t=e[y];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function i(){for(;++r<e.length;)if(a.call(e,r))return i.value=e[r],i.done=!1,i;return i.value=void 0,i.done=!0,i};return n.next=n}}return{next:Q}}function Q(){return{value:void 0,done:!0}}return M.prototype=m,h(L,"constructor",{value:m,configurable:!0}),h(m,"constructor",{value:M,configurable:!0}),M.displayName=c(m,k,"GeneratorFunction"),s.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===M||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,k,"GeneratorFunction")),e.prototype=Object.create(L),e},s.awrap=function(e){return{__await:e}},$(A.prototype),c(A.prototype,P,function(){return this}),s.AsyncIterator=A,s.async=function(e,t,r,n,i){void 0===i&&(i=Promise);var o=new A(H(e,t,r,n),i);return s.isGeneratorFunction(t)?o:o.next().then(function(u){return u.done?u.value:o.next()})},$(L),c(L,k,"Generator"),c(L,y,function(){return this}),c(L,"toString",function(){return"[object Generator]"}),s.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function i(){for(;r.length;){var o=r.pop();if(o in t)return i.value=o,i.done=!1,i}return i.done=!0,i}},s.values=z,Y.prototype={constructor:Y,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(g,v){return u.type="throw",u.arg=t,r.next=g,v&&(r.method="next",r.arg=void 0),!!v}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),p=a.call(o,"finallyLoc");if(l&&p){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=r,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),Z(n),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;Z(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:z(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},s}var w=function(f,a){return null!==a.closest(f)},G=function(f,a){return"string"==typeof f&&f.length>0?Object.assign((0,S.Z)({"ion-color":!0},"ion-color-".concat(f),!0),a):a},R=function(f){var a={};return function(f){return void 0!==f?(Array.isArray(f)?f:f.split(" ")).filter(function(h){return null!=h}).map(function(h){return h.trim()}).filter(function(h){return""!==h}):[]}(f).forEach(function(h){return a[h]=!0}),a},T=/^[a-z][a-z0-9+\-.]*:/,D=function(){var s=(0,I.Z)(O().mark(function f(a,h,b,y){var P;return O().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(null==a||"#"===a[0]||T.test(a)){c.next=5;break}if(!(P=document.querySelector("ion-router"))){c.next=5;break}return null!=h&&h.preventDefault(),c.abrupt("return",P.push(a,b,y));case 5:return c.abrupt("return",!1);case 6:case"end":return c.stop()}},f)}));return function(a,h,b,y){return s.apply(this,arguments)}}()}}]);