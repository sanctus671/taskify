"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7485],{7485:function(ot,q,w){w.r(q),w.d(q,{SettingsPageModule:function(){return et}});var E=w(3144),U=w(5671),B=w(9808),W=w(4182),g=w(4881),D=w(1e3),Q=w(655),V=w(6420),r=w(8433),X=w(7020),H=w(4726);function N(){N=function(){return s};var s={},m=Object.prototype,l=m.hasOwnProperty,c=Object.defineProperty||function(n,t,e){n[t]=e.value},d="function"==typeof Symbol?Symbol:{},v=d.iterator||"@@iterator",P=d.asyncIterator||"@@asyncIterator",Z=d.toStringTag||"@@toStringTag";function h(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{h({},"")}catch(n){h=function(e,o,a){return e[o]=a}}function f(n,t,e,o){var i=Object.create((t&&t.prototype instanceof G?t:G).prototype),u=new Y(o||[]);return c(i,"_invoke",{value:nt(n,e,u)}),i}function T(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(o){return{type:"throw",arg:o}}}s.wrap=f;var C={};function G(){}function M(){}function b(){}var j={};h(j,v,function(){return this});var I=Object.getPrototypeOf,A=I&&I(I(J([])));A&&A!==m&&l.call(A,v)&&(j=A);var k=b.prototype=G.prototype=Object.create(j);function F(n){["next","throw","return"].forEach(function(t){h(n,t,function(e){return this._invoke(t,e)})})}function L(n,t){function e(a,i,u,p){var y=T(n[a],n,i);if("throw"!==y.type){var _=y.arg,S=_.value;return S&&"object"==typeof S&&l.call(S,"__await")?t.resolve(S.__await).then(function(O){e("next",O,u,p)},function(O){e("throw",O,u,p)}):t.resolve(S).then(function(O){_.value=O,u(_)},function(O){return e("throw",O,u,p)})}p(y.arg)}var o;c(this,"_invoke",{value:function(i,u){function p(){return new t(function(y,_){e(i,u,y,_)})}return o=o?o.then(p,p):p()}})}function nt(n,t,e){var o="suspendedStart";return function(a,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===a)throw i;return{value:void 0,done:!0}}for(e.method=a,e.arg=i;;){var u=e.delegate;if(u){var p=$(u,e);if(p){if(p===C)continue;return p}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===o)throw o="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o="executing";var y=T(n,t,e);if("normal"===y.type){if(o=e.done?"completed":"suspendedYield",y.arg===C)continue;return{value:y.arg,done:e.done}}"throw"===y.type&&(o="completed",e.method="throw",e.arg=y.arg)}}}function $(n,t){var e=t.method,o=n.iterator[e];if(void 0===o)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,$(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),C;var a=T(o,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,C;var i=a.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,C):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,C)}function rt(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function R(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function Y(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(rt,this),this.reset(!0)}function J(n){if(n){var t=n[v];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,o=function a(){for(;++e<n.length;)if(l.call(n,e))return a.value=n[e],a.done=!1,a;return a.value=void 0,a.done=!0,a};return o.next=o}}return{next:z}}function z(){return{value:void 0,done:!0}}return M.prototype=b,c(k,"constructor",{value:b,configurable:!0}),c(b,"constructor",{value:M,configurable:!0}),M.displayName=h(b,Z,"GeneratorFunction"),s.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===M||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,b):(n.__proto__=b,h(n,Z,"GeneratorFunction")),n.prototype=Object.create(k),n},s.awrap=function(n){return{__await:n}},F(L.prototype),h(L.prototype,P,function(){return this}),s.AsyncIterator=L,s.async=function(n,t,e,o,a){void 0===a&&(a=Promise);var i=new L(f(n,t,e,o),a);return s.isGeneratorFunction(t)?i:i.next().then(function(u){return u.done?u.value:i.next()})},F(k),h(k,Z,"Generator"),h(k,v,function(){return this}),h(k,"toString",function(){return"[object Generator]"}),s.keys=function(n){var t=Object(n),e=[];for(var o in t)e.push(o);return e.reverse(),function a(){for(;e.length;){var i=e.pop();if(i in t)return a.value=i,a.done=!1,a}return a.done=!0,a}},s.values=J,Y.prototype={constructor:Y,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(_,S){return u.type="throw",u.arg=t,e.next=_,S&&(e.method="next",e.arg=void 0),!!S}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var p=l.call(i,"catchLoc"),y=l.call(i,"finallyLoc");if(p&&y){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(p){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!y)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&l.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,C):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),C},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),R(o),C}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var a=o.completion;if("throw"===a.type){var i=a.arg;R(o)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:J(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),C}},s}var x=[{path:"",component:function(){var s=function(){function m(l,c,d,v,P){var Z=this;(0,U.Z)(this,m),this.plt=l,this.authenticationService=c,this.alertCtrl=d,this.iab=v,this.modalCtrl=P,this.user={},this.authenticationService.getUserData().subscribe(function(h){Z.user=h})}return(0,E.Z)(m,[{key:"ngOnInit",value:function(){}},{key:"openModal",value:function(){return(0,Q.mG)(this,void 0,void 0,N().mark(function c(){var d;return N().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,this.modalCtrl.create({component:V.D});case 2:return(d=f.sent).present(),f.next=6,d.onWillDismiss();case 6:f.sent;case 9:case"end":return f.stop()}},c,this)}))}},{key:"openRate",value:function(){this.plt.is("ios")?this.iab.create("https://apps.apple.com/us/app/","_system"):this.iab.create("https://play.google.com/store/apps/details","_system")}},{key:"openFollow",value:function(){this.iab.create("https://www.facebook.com/taskify","_system")}},{key:"openEmail",value:function(){this.iab.create("mailto:info@taskify.co.nz","_system")}},{key:"openChangePassword",value:function(){var c=this;this.alertCtrl.create({header:"Change Password",inputs:[{name:"password",placeholder:"Password",type:"password"},{name:"confirmPassword",placeholder:"Confirm Password",type:"password"}],buttons:[{text:"Cancel",role:"cancel",handler:function(P){}},{text:"Change",handler:function(P){P.password&&P.confirmPassword&&P.password===P.confirmPassword?c.authenticationService.changePassword(c.user.email,P.password,P.confirmPassword).then(function(){c.alertCtrl.create({header:"Success",message:"Your password has been updated",buttons:[{text:"Dismiss",role:"cancel",handler:function(T){}}]}).then(function(f){f.present()})}).catch(function(){c.alertCtrl.create({header:"Error",message:"There was an error while changing your password.",buttons:[{text:"Cancel",role:"cancel",handler:function(T){}},{text:"Try Again",handler:function(T){setTimeout(function(){c.openChangePassword()},200)}}]}).then(function(f){f.present()})}):c.alertCtrl.create({header:"Error",message:"Passwords do not match",buttons:[{text:"Cancel",role:"cancel",handler:function(f){}},{text:"Try Again",handler:function(f){setTimeout(function(){c.openChangePassword()},200)}}]}).then(function(h){h.present()})}}]}).then(function(v){v.present()})}},{key:"logout",value:function(){this.authenticationService.logout()}}]),m}();return s.\u0275fac=function(l){return new(l||s)(r.Y36(g.t4),r.Y36(X.$),r.Y36(g.Br),r.Y36(H.i),r.Y36(g.IN))},s.\u0275cmp=r.Xpm({type:s,selectors:[["app-settings"]],decls:34,vars:0,consts:[["translucent","true","mode","ios"],["mode","md"],["slot","start"],["fullscreen","true",1,"settings"],["mode","ios"],["size","large"],[1,"settings-list"],["detail","",3,"click"],["name","help-circle","slot","start","color","light"],["name","heart","slot","start","color","light"],["name","logo-facebook","slot","start","color","light"],["name","mail","slot","start","color","light"],["name","lock-open","slot","start","color","light"],["name","lock-closed","slot","start","color","light"]],template:function(l,c){1&l&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar",1),r._UZ(2,"ion-title"),r.TgZ(3,"ion-buttons",2),r._UZ(4,"ion-back-button"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(5,"ion-content",3),r.TgZ(6,"ion-header",4),r.TgZ(7,"ion-toolbar"),r.TgZ(8,"ion-title",5),r._uU(9,"Settings"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(10,"ion-list",6),r.TgZ(11,"ion-list-header"),r._uU(12,"Support"),r.qZA(),r.TgZ(13,"ion-item",7),r.NdJ("click",function(){return c.openModal()}),r._UZ(14,"ion-icon",8),r._uU(15," View Tutorial "),r.qZA(),r.TgZ(16,"ion-item",7),r.NdJ("click",function(){return c.openRate()}),r._UZ(17,"ion-icon",9),r._uU(18," Rate The App "),r.qZA(),r.TgZ(19,"ion-item",7),r.NdJ("click",function(){return c.openFollow()}),r._UZ(20,"ion-icon",10),r._uU(21," Follow Us On Facebook "),r.qZA(),r.TgZ(22,"ion-item",7),r.NdJ("click",function(){return c.openEmail()}),r._UZ(23,"ion-icon",11),r._uU(24," Contact Support "),r.qZA(),r.TgZ(25,"ion-list-header"),r._uU(26,"Account Settings"),r.qZA(),r.TgZ(27,"ion-item",7),r.NdJ("click",function(){return c.openChangePassword()}),r._UZ(28,"ion-icon",12),r.TgZ(29,"ion-label"),r._uU(30,"Change Password"),r.qZA(),r.qZA(),r.TgZ(31,"ion-item",7),r.NdJ("click",function(){return c.logout()}),r._UZ(32,"ion-icon",13),r._uU(33," Logout "),r.qZA(),r.qZA(),r.qZA())},directives:[g.Gu,g.sr,g.wd,g.Sm,g.oU,g.cs,g.W2,g.q_,g.yh,g.Ie,g.gu,g.Q$],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--border-color:transparent}.settings[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #000000}.settings[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{position:static}.settings[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{overflow:visible;white-space:normal}.settings-list[_ngcontent-%COMP%]{margin-top:20px}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:20px;padding-top:10px}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]:first-child{margin-top:0;padding-top:0}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:0}"]}),s}()}],tt=function(){var s=(0,E.Z)(function m(){(0,U.Z)(this,m)});return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[[D.Bz.forChild(x)],D.Bz]}),s}(),et=function(){var s=(0,E.Z)(function m(){(0,U.Z)(this,m)});return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[[B.ez,W.u5,g.Pc,tt]]}),s}()}}]);