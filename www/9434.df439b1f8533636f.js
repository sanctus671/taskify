"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9434],{9434:function(st,et,T){T.r(et),T.d(et,{ion_loading:function(){return nt}});var q=T(4942),it=T(5861),tt=T(5671),ot=T(3144),x=T(1308),z=T(5179),rt=T(5820),B=T(3539),at=T(2854),m=T(3045);function v(){v=function(){return _};var _={},f=Object.prototype,h=f.hasOwnProperty,g=Object.defineProperty||function(i,t,r){i[t]=r.value},p="function"==typeof Symbol?Symbol:{},S=p.iterator||"@@iterator",j=p.asyncIterator||"@@asyncIterator",I=p.toStringTag||"@@toStringTag";function k(i,t,r){return Object.defineProperty(i,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),i[t]}try{k({},"")}catch(i){k=function(r,u,d){return r[u]=d}}function Z(i,t,r,u){var c=Object.create((t&&t.prototype instanceof X?t:X).prototype),b=new E(u||[]);return g(c,"_invoke",{value:a(i,r,b)}),c}function R(i,t,r){try{return{type:"normal",arg:i.call(t,r)}}catch(u){return{type:"throw",arg:u}}}_.wrap=Z;var M={};function X(){}function F(){}function C(){}var H={};k(H,S,function(){return this});var Y=Object.getPrototypeOf,$=Y&&Y(Y(D([])));$&&$!==f&&h.call($,S)&&(H=$);var o=C.prototype=X.prototype=Object.create(H);function n(i){["next","throw","return"].forEach(function(t){k(i,t,function(r){return this._invoke(t,r)})})}function e(i,t){function r(d,c,b,A){var P=R(i[d],i,c);if("throw"!==P.type){var J=P.arg,U=J.value;return U&&"object"==typeof U&&h.call(U,"__await")?t.resolve(U.__await).then(function(Q){r("next",Q,b,A)},function(Q){r("throw",Q,b,A)}):t.resolve(U).then(function(Q){J.value=Q,b(J)},function(Q){return r("throw",Q,b,A)})}A(P.arg)}var u;g(this,"_invoke",{value:function(c,b){function A(){return new t(function(P,J){r(c,b,P,J)})}return u=u?u.then(A,A):A()}})}function a(i,t,r){var u="suspendedStart";return function(d,c){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===d)throw c;return{value:void 0,done:!0}}for(r.method=d,r.arg=c;;){var b=r.delegate;if(b){var A=l(b,r);if(A){if(A===M)continue;return A}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===u)throw u="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);u="executing";var P=R(i,t,r);if("normal"===P.type){if(u=r.done?"completed":"suspendedYield",P.arg===M)continue;return{value:P.arg,done:r.done}}"throw"===P.type&&(u="completed",r.method="throw",r.arg=P.arg)}}}function l(i,t){var r=t.method,u=i.iterator[r];if(void 0===u)return t.delegate=null,"throw"===r&&i.iterator.return&&(t.method="return",t.arg=void 0,l(i,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),M;var d=R(u,i.iterator,t.arg);if("throw"===d.type)return t.method="throw",t.arg=d.arg,t.delegate=null,M;var c=d.arg;return c?c.done?(t[i.resultName]=c.value,t.next=i.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,M):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,M)}function s(i){var t={tryLoc:i[0]};1 in i&&(t.catchLoc=i[1]),2 in i&&(t.finallyLoc=i[2],t.afterLoc=i[3]),this.tryEntries.push(t)}function y(i){var t=i.completion||{};t.type="normal",delete t.arg,i.completion=t}function E(i){this.tryEntries=[{tryLoc:"root"}],i.forEach(s,this),this.reset(!0)}function D(i){if(i){var t=i[S];if(t)return t.call(i);if("function"==typeof i.next)return i;if(!isNaN(i.length)){var r=-1,u=function d(){for(;++r<i.length;)if(h.call(i,r))return d.value=i[r],d.done=!1,d;return d.value=void 0,d.done=!0,d};return u.next=u}}return{next:G}}function G(){return{value:void 0,done:!0}}return F.prototype=C,g(o,"constructor",{value:C,configurable:!0}),g(C,"constructor",{value:F,configurable:!0}),F.displayName=k(C,I,"GeneratorFunction"),_.isGeneratorFunction=function(i){var t="function"==typeof i&&i.constructor;return!!t&&(t===F||"GeneratorFunction"===(t.displayName||t.name))},_.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,C):(i.__proto__=C,k(i,I,"GeneratorFunction")),i.prototype=Object.create(o),i},_.awrap=function(i){return{__await:i}},n(e.prototype),k(e.prototype,j,function(){return this}),_.AsyncIterator=e,_.async=function(i,t,r,u,d){void 0===d&&(d=Promise);var c=new e(Z(i,t,r,u),d);return _.isGeneratorFunction(t)?c:c.next().then(function(b){return b.done?b.value:c.next()})},n(o),k(o,I,"Generator"),k(o,S,function(){return this}),k(o,"toString",function(){return"[object Generator]"}),_.keys=function(i){var t=Object(i),r=[];for(var u in t)r.push(u);return r.reverse(),function d(){for(;r.length;){var c=r.pop();if(c in t)return d.value=c,d.done=!1,d}return d.done=!0,d}},_.values=D,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(y),!t)for(var r in this)"t"===r.charAt(0)&&h.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function u(J,U){return b.type="throw",b.arg=t,r.next=J,U&&(r.method="next",r.arg=void 0),!!U}for(var d=this.tryEntries.length-1;d>=0;--d){var c=this.tryEntries[d],b=c.completion;if("root"===c.tryLoc)return u("end");if(c.tryLoc<=this.prev){var A=h.call(c,"catchLoc"),P=h.call(c,"finallyLoc");if(A&&P){if(this.prev<c.catchLoc)return u(c.catchLoc,!0);if(this.prev<c.finallyLoc)return u(c.finallyLoc)}else if(A){if(this.prev<c.catchLoc)return u(c.catchLoc,!0)}else{if(!P)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return u(c.finallyLoc)}}}},abrupt:function(t,r){for(var u=this.tryEntries.length-1;u>=0;--u){var d=this.tryEntries[u];if(d.tryLoc<=this.prev&&h.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var c=d;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=r&&r<=c.finallyLoc&&(c=null);var b=c?c.completion:{};return b.type=t,b.arg=r,c?(this.method="next",this.next=c.finallyLoc,M):this.complete(b)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),M},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var u=this.tryEntries[r];if(u.finallyLoc===t)return this.complete(u.completion,u.afterLoc),y(u),M}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var u=this.tryEntries[r];if(u.tryLoc===t){var d=u.completion;if("throw"===d.type){var c=d.arg;y(u)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,u){return this.delegate={iterator:D(t),resultName:r,nextLoc:u},"next"===this.method&&(this.arg=void 0),M}},_}T(3457);var O=function(f){var h=(0,m.c)(),g=(0,m.c)(),p=(0,m.c)();return g.addElement(f.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),p.addElement(f.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),h.addElement(f).easing("ease-in-out").duration(200).addAnimation([g,p])},N=function(f){var h=(0,m.c)(),g=(0,m.c)(),p=(0,m.c)();return g.addElement(f.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),p.addElement(f.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),h.addElement(f).easing("ease-in-out").duration(200).addAnimation([g,p])},W=function(f){var h=(0,m.c)(),g=(0,m.c)(),p=(0,m.c)();return g.addElement(f.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),p.addElement(f.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),h.addElement(f).easing("ease-in-out").duration(200).addAnimation([g,p])},K=function(f){var h=(0,m.c)(),g=(0,m.c)(),p=(0,m.c)();return g.addElement(f.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),p.addElement(f.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),h.addElement(f).easing("ease-in-out").duration(200).addAnimation([g,p])},nt=function(){function _(f){var h=this;(0,tt.Z)(this,_),(0,x.r)(this,f),this.didPresent=(0,x.e)(this,"ionLoadingDidPresent",7),this.willPresent=(0,x.e)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,x.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,x.e)(this,"ionLoadingDidDismiss",7),this.customHTMLEnabled=z.c.get("innerHTMLTemplatesEnabled",rt.E),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){h.dismiss(void 0,B.B)}}return(0,ot.Z)(_,[{key:"connectedCallback",value:function(){(0,B.e)(this.el)}},{key:"componentWillLoad",value:function(){if(void 0===this.spinner){var h=(0,z.b)(this);this.spinner=z.c.get("loadingSpinner",z.c.get("spinner","ios"===h?"lines":"crescent"))}}},{key:"present",value:(f=(0,it.Z)(v().mark(function g(){var p=this;return v().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,(0,B.d)(this,"loadingEnter",O,W);case 2:this.duration>0&&(this.durationTimeout=setTimeout(function(){return p.dismiss()},this.duration+10));case 3:case"end":return j.stop()}},g,this)})),function h(){return f.apply(this,arguments)})},{key:"dismiss",value:function(h,g){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,B.f)(this,h,g,"loadingLeave",N,K)}},{key:"onDidDismiss",value:function(){return(0,B.g)(this.el,"ionLoadingDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,B.g)(this.el,"ionLoadingWillDismiss")}},{key:"renderLoadingMessage",value:function(h){var p=this.message;return this.customHTMLEnabled?(0,x.h)("div",{class:"loading-content",id:h,innerHTML:(0,rt.a)(p)}):(0,x.h)("div",{class:"loading-content",id:h},p)}},{key:"render",value:function(){var h,g=this.message,p=this.spinner,S=this.htmlAttributes,j=this.overlayIndex,I=(0,z.b)(this),k="loading-".concat(j,"-msg");return(0,x.h)(x.H,Object.assign({role:"dialog","aria-modal":"true","aria-labelledby":void 0!==g?k:null,tabindex:"-1"},S,{style:{zIndex:"".concat(4e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,at.g)(this.cssClass)),(h={},(0,q.Z)(h,I,!0),(0,q.Z)(h,"overlay-hidden",!0),(0,q.Z)(h,"loading-translucent",this.translucent),h))}),(0,x.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,x.h)("div",{tabindex:"0"}),(0,x.h)("div",{class:"loading-wrapper ion-overlay-wrapper"},p&&(0,x.h)("div",{class:"loading-spinner"},(0,x.h)("ion-spinner",{name:p,"aria-hidden":"true"})),void 0!==g&&this.renderLoadingMessage(k)),(0,x.h)("div",{tabindex:"0"}))}},{key:"el",get:function(){return(0,x.i)(this)}}]),_;var f}();nt.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}},2854:function(st,et,T){T.d(et,{c:function(){return x},g:function(){return rt},h:function(){return ot},o:function(){return at}});var q=T(5861),it=T(4942);function tt(){tt=function(){return m};var m={},L=Object.prototype,v=L.hasOwnProperty,O=Object.defineProperty||function(o,n,e){o[n]=e.value},N="function"==typeof Symbol?Symbol:{},W=N.iterator||"@@iterator",K=N.asyncIterator||"@@asyncIterator",V=N.toStringTag||"@@toStringTag";function w(o,n,e){return Object.defineProperty(o,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),o[n]}try{w({},"")}catch(o){w=function(e,a,l){return e[a]=l}}function nt(o,n,e,a){var s=Object.create((n&&n.prototype instanceof h?n:h).prototype),y=new H(a||[]);return O(s,"_invoke",{value:M(o,e,y)}),s}function _(o,n,e){try{return{type:"normal",arg:o.call(n,e)}}catch(a){return{type:"throw",arg:a}}}m.wrap=nt;var f={};function h(){}function g(){}function p(){}var S={};w(S,W,function(){return this});var j=Object.getPrototypeOf,I=j&&j(j(Y([])));I&&I!==L&&v.call(I,W)&&(S=I);var k=p.prototype=h.prototype=Object.create(S);function Z(o){["next","throw","return"].forEach(function(n){w(o,n,function(e){return this._invoke(n,e)})})}function R(o,n){function e(l,s,y,E){var D=_(o[l],o,s);if("throw"!==D.type){var G=D.arg,i=G.value;return i&&"object"==typeof i&&v.call(i,"__await")?n.resolve(i.__await).then(function(t){e("next",t,y,E)},function(t){e("throw",t,y,E)}):n.resolve(i).then(function(t){G.value=t,y(G)},function(t){return e("throw",t,y,E)})}E(D.arg)}var a;O(this,"_invoke",{value:function(s,y){function E(){return new n(function(D,G){e(s,y,D,G)})}return a=a?a.then(E,E):E()}})}function M(o,n,e){var a="suspendedStart";return function(l,s){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===l)throw s;return{value:void 0,done:!0}}for(e.method=l,e.arg=s;;){var y=e.delegate;if(y){var E=X(y,e);if(E){if(E===f)continue;return E}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===a)throw a="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);a="executing";var D=_(o,n,e);if("normal"===D.type){if(a=e.done?"completed":"suspendedYield",D.arg===f)continue;return{value:D.arg,done:e.done}}"throw"===D.type&&(a="completed",e.method="throw",e.arg=D.arg)}}}function X(o,n){var e=n.method,a=o.iterator[e];if(void 0===a)return n.delegate=null,"throw"===e&&o.iterator.return&&(n.method="return",n.arg=void 0,X(o,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var l=_(a,o.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,f;var s=l.arg;return s?s.done?(n[o.resultName]=s.value,n.next=o.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function F(o){var n={tryLoc:o[0]};1 in o&&(n.catchLoc=o[1]),2 in o&&(n.finallyLoc=o[2],n.afterLoc=o[3]),this.tryEntries.push(n)}function C(o){var n=o.completion||{};n.type="normal",delete n.arg,o.completion=n}function H(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(F,this),this.reset(!0)}function Y(o){if(o){var n=o[W];if(n)return n.call(o);if("function"==typeof o.next)return o;if(!isNaN(o.length)){var e=-1,a=function l(){for(;++e<o.length;)if(v.call(o,e))return l.value=o[e],l.done=!1,l;return l.value=void 0,l.done=!0,l};return a.next=a}}return{next:$}}function $(){return{value:void 0,done:!0}}return g.prototype=p,O(k,"constructor",{value:p,configurable:!0}),O(p,"constructor",{value:g,configurable:!0}),g.displayName=w(p,V,"GeneratorFunction"),m.isGeneratorFunction=function(o){var n="function"==typeof o&&o.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},m.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,p):(o.__proto__=p,w(o,V,"GeneratorFunction")),o.prototype=Object.create(k),o},m.awrap=function(o){return{__await:o}},Z(R.prototype),w(R.prototype,K,function(){return this}),m.AsyncIterator=R,m.async=function(o,n,e,a,l){void 0===l&&(l=Promise);var s=new R(nt(o,n,e,a),l);return m.isGeneratorFunction(n)?s:s.next().then(function(y){return y.done?y.value:s.next()})},Z(k),w(k,V,"Generator"),w(k,W,function(){return this}),w(k,"toString",function(){return"[object Generator]"}),m.keys=function(o){var n=Object(o),e=[];for(var a in n)e.push(a);return e.reverse(),function l(){for(;e.length;){var s=e.pop();if(s in n)return l.value=s,l.done=!1,l}return l.done=!0,l}},m.values=Y,H.prototype={constructor:H,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!n)for(var e in this)"t"===e.charAt(0)&&v.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function a(G,i){return y.type="throw",y.arg=n,e.next=G,i&&(e.method="next",e.arg=void 0),!!i}for(var l=this.tryEntries.length-1;l>=0;--l){var s=this.tryEntries[l],y=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var E=v.call(s,"catchLoc"),D=v.call(s,"finallyLoc");if(E&&D){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(E){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!D)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(n,e){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.tryLoc<=this.prev&&v.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var s=l;break}}s&&("break"===n||"continue"===n)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var y=s?s.completion:{};return y.type=n,y.arg=e,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(y)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),f},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===n)return this.complete(a.completion,a.afterLoc),C(a),f}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===n){var l=a.completion;if("throw"===l.type){var s=l.arg;C(a)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,a){return this.delegate={iterator:Y(n),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),f}},m}var ot=function(L,v){return null!==v.closest(L)},x=function(L,v){return"string"==typeof L&&L.length>0?Object.assign((0,it.Z)({"ion-color":!0},"ion-color-".concat(L),!0),v):v},rt=function(L){var v={};return function(L){return void 0!==L?(Array.isArray(L)?L:L.split(" ")).filter(function(O){return null!=O}).map(function(O){return O.trim()}).filter(function(O){return""!==O}):[]}(L).forEach(function(O){return v[O]=!0}),v},B=/^[a-z][a-z0-9+\-.]*:/,at=function(){var m=(0,q.Z)(tt().mark(function L(v,O,N,W){var K;return tt().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(null==v||"#"===v[0]||B.test(v)){w.next=5;break}if(!(K=document.querySelector("ion-router"))){w.next=5;break}return null!=O&&O.preventDefault(),w.abrupt("return",K.push(v,N,W));case 5:return w.abrupt("return",!1);case 6:case"end":return w.stop()}},L)}));return function(v,O,N,W){return m.apply(this,arguments)}}()}}]);