"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1536],{1536:function(x,$,k){k.r($),k.d($,{ion_tab:function(){return K},ion_tabs:function(){return U}});var T=k(5861),z=k(5671),B=k(3144),y=k(1308),J=k(7626);function b(){b=function(){return p};var p={},u=Object.prototype,n=u.hasOwnProperty,s=Object.defineProperty||function(r,e,t){r[e]=t.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",h=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function v(r,e,t){return Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),r[e]}try{v({},"")}catch(r){v=function(t,i,o){return t[i]=o}}function W(r,e,t,i){var a=Object.create((e&&e.prototype instanceof I?e:I).prototype),d=new M(i||[]);return s(a,"_invoke",{value:q(r,t,d)}),a}function D(r,e,t){try{return{type:"normal",arg:r.call(e,t)}}catch(i){return{type:"throw",arg:i}}}p.wrap=W;var w={};function I(){}function C(){}function L(){}var j={};v(j,l,function(){return this});var G=Object.getPrototypeOf,P=G&&G(G(Z([])));P&&P!==u&&n.call(P,l)&&(j=P);var O=L.prototype=I.prototype=Object.create(j);function Y(r){["next","throw","return"].forEach(function(e){v(r,e,function(t){return this._invoke(e,t)})})}function R(r,e){function t(o,a,d,m){var g=D(r[o],r,a);if("throw"!==g.type){var E=g.arg,_=E.value;return _&&"object"==typeof _&&n.call(_,"__await")?e.resolve(_.__await).then(function(S){t("next",S,d,m)},function(S){t("throw",S,d,m)}):e.resolve(_).then(function(S){E.value=S,d(E)},function(S){return t("throw",S,d,m)})}m(g.arg)}var i;s(this,"_invoke",{value:function(a,d){function m(){return new e(function(g,E){t(a,d,g,E)})}return i=i?i.then(m,m):m()}})}function q(r,e,t){var i="suspendedStart";return function(o,a){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw a;return{value:void 0,done:!0}}for(t.method=o,t.arg=a;;){var d=t.delegate;if(d){var m=H(d,t);if(m){if(m===w)continue;return m}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===i)throw i="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i="executing";var g=D(r,e,t);if("normal"===g.type){if(i=t.done?"completed":"suspendedYield",g.arg===w)continue;return{value:g.arg,done:t.done}}"throw"===g.type&&(i="completed",t.method="throw",t.arg=g.arg)}}}function H(r,e){var t=e.method,i=r.iterator[t];if(void 0===i)return e.delegate=null,"throw"===t&&r.iterator.return&&(e.method="return",e.arg=void 0,H(r,e),"throw"===e.method)||"return"!==t&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+t+"' method")),w;var o=D(i,r.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,w;var a=o.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,w):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,w)}function F(r){var e={tryLoc:r[0]};1 in r&&(e.catchLoc=r[1]),2 in r&&(e.finallyLoc=r[2],e.afterLoc=r[3]),this.tryEntries.push(e)}function N(r){var e=r.completion||{};e.type="normal",delete e.arg,r.completion=e}function M(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(F,this),this.reset(!0)}function Z(r){if(r){var e=r[l];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var t=-1,i=function o(){for(;++t<r.length;)if(n.call(r,t))return o.value=r[t],o.done=!1,o;return o.value=void 0,o.done=!0,o};return i.next=i}}return{next:V}}function V(){return{value:void 0,done:!0}}return C.prototype=L,s(O,"constructor",{value:L,configurable:!0}),s(L,"constructor",{value:C,configurable:!0}),C.displayName=v(L,f,"GeneratorFunction"),p.isGeneratorFunction=function(r){var e="function"==typeof r&&r.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},p.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,L):(r.__proto__=L,v(r,f,"GeneratorFunction")),r.prototype=Object.create(O),r},p.awrap=function(r){return{__await:r}},Y(R.prototype),v(R.prototype,h,function(){return this}),p.AsyncIterator=R,p.async=function(r,e,t,i,o){void 0===o&&(o=Promise);var a=new R(W(r,e,t,i),o);return p.isGeneratorFunction(e)?a:a.next().then(function(d){return d.done?d.value:a.next()})},Y(O),v(O,f,"Generator"),v(O,l,function(){return this}),v(O,"toString",function(){return"[object Generator]"}),p.keys=function(r){var e=Object(r),t=[];for(var i in e)t.push(i);return t.reverse(),function o(){for(;t.length;){var a=t.pop();if(a in e)return o.value=a,o.done=!1,o}return o.done=!0,o}},p.values=Z,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(E,_){return d.type="throw",d.arg=e,t.next=E,_&&(t.method="next",t.arg=void 0),!!_}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],d=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var m=n.call(a,"catchLoc"),g=n.call(a,"finallyLoc");if(m&&g){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(m){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!g)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var d=a?a.completion:{};return d.type=e,d.arg=t,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(d)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),N(i),w}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var o=i.completion;if("throw"===o.type){var a=o.arg;N(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:Z(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=void 0),w}},p}var K=function(){function p(u){(0,z.Z)(this,p),(0,y.r)(this,u),this.loaded=!1,this.active=!1}return(0,B.Z)(p,[{key:"componentWillLoad",value:(u=(0,T.Z)(b().mark(function s(){return b().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!this.active){l.next=3;break}return l.next=3,this.setActive();case 3:case"end":return l.stop()}},s,this)})),function n(){return u.apply(this,arguments)})},{key:"setActive",value:function(){var u=(0,T.Z)(b().mark(function s(){return b().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.prepareLazyLoaded();case 2:this.active=!0;case 3:case"end":return l.stop()}},s,this)}));return function n(){return u.apply(this,arguments)}}()},{key:"changeActive",value:function(n){n&&this.prepareLazyLoaded()}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,J.a)(this.delegate,this.el,this.component,["ion-page"])}catch(n){console.error(n)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var s=this.active,c=this.component;return(0,y.h)(y.H,{role:"tabpanel","aria-hidden":s?null:"true","aria-labelledby":"tab-button-".concat(this.tab),class:{"ion-page":void 0===c,"tab-hidden":!s}},(0,y.h)("slot",null))}},{key:"el",get:function(){return(0,y.i)(this)}}],[{key:"watchers",get:function(){return{active:["changeActive"]}}}]),p;var u}();K.style=":host(.tab-hidden){display:none !important}";var U=function(){function p(u){var n=this;(0,z.Z)(this,p),(0,y.r)(this,u),this.ionNavWillLoad=(0,y.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,y.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,y.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(s){var c=s.detail,l=c.href,h=c.tab;if(n.useRouter&&void 0!==l){var f=document.querySelector("ion-router");f&&f.push(l)}else n.select(h)}}return(0,B.Z)(p,[{key:"componentWillLoad",value:(u=(0,T.Z)(b().mark(function s(){var c;return b().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter){h.next=6;break}if(!((c=this.tabs).length>0)){h.next=6;break}return h.next=6,this.select(c[0]);case 6:this.ionNavWillLoad.emit();case 7:case"end":return h.stop()}},s,this)})),function n(){return u.apply(this,arguments)})},{key:"componentWillRender",value:function(){var n=this.el.querySelector("ion-tab-bar");n&&(n.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}},{key:"select",value:function(){var u=(0,T.Z)(b().mark(function s(c){var l;return b().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(l=A(this.tabs,c),this.shouldSwitch(l)){f.next=3;break}return f.abrupt("return",!1);case 3:return f.next=5,this.setActive(l);case 5:return f.next=7,this.notifyRouter();case 7:return this.tabSwitch(),f.abrupt("return",!0);case 9:case"end":return f.stop()}},s,this)}));return function n(s){return u.apply(this,arguments)}}()},{key:"getTab",value:function(){var u=(0,T.Z)(b().mark(function s(c){return b().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",A(this.tabs,c));case 1:case"end":return h.stop()}},s,this)}));return function n(s){return u.apply(this,arguments)}}()},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:function(){var u=(0,T.Z)(b().mark(function s(c){var h,l=this;return b().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(h=A(this.tabs,c),this.shouldSwitch(h)){v.next=3;break}return v.abrupt("return",{changed:!1,element:this.selectedTab});case 3:return v.next=5,this.setActive(h);case 5:return v.abrupt("return",{changed:!0,element:this.selectedTab,markVisible:function(){return l.tabSwitch()}});case 6:case"end":return v.stop()}},s,this)}));return function n(s){return u.apply(this,arguments)}}()},{key:"getRouteId",value:function(){var u=(0,T.Z)(b().mark(function s(){var c,l;return b().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return l=null===(c=this.selectedTab)||void 0===c?void 0:c.tab,f.abrupt("return",void 0!==l?{id:l,element:this.selectedTab}:void 0);case 2:case"end":return f.stop()}},s,this)}));return function n(){return u.apply(this,arguments)}}()},{key:"setActive",value:function(n){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=n,this.ionTabsWillChange.emit({tab:n.tab}),n.active=!0,Promise.resolve())}},{key:"tabSwitch",value:function(){var n=this.selectedTab,s=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,n&&s!==n&&(s&&(s.active=!1),this.ionTabsDidChange.emit({tab:n.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var n=document.querySelector("ion-router");if(n)return n.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(n){return void 0!==n&&n!==this.selectedTab&&!this.transitioning}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"render",value:function(){return(0,y.h)(y.H,{onIonTabButtonClick:this.onTabClicked},(0,y.h)("slot",{name:"top"}),(0,y.h)("div",{class:"tabs-inner"},(0,y.h)("slot",null)),(0,y.h)("slot",{name:"bottom"}))}},{key:"el",get:function(){return(0,y.i)(this)}}]),p;var u}(),A=function(u,n){var s="string"==typeof n?u.find(function(c){return c.tab===n}):n;return s||console.error('tab with id: "'.concat(s,'" does not exist')),s};U.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}]);