"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2080],{2080:function(ye,z,C){C.r(z),C.d(z,{HomePageModule:function(){return me}});var G=C(3144),Y=C(5671),I=C(9808),R=C(4182),P=C(4881),D=C(1e3),J=C(7762),E=C(655),W=C(6420),e=C(8433),V=C(7020),K=C(622),X=C(98);function T(){T=function(){return r};var r={},g=Object.prototype,d=g.hasOwnProperty,i=Object.defineProperty||function(o,t,n){o[t]=n.value},h="function"==typeof Symbol?Symbol:{},l=h.iterator||"@@iterator",p=h.asyncIterator||"@@asyncIterator",_=h.toStringTag||"@@toStringTag";function m(o,t,n){return Object.defineProperty(o,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),o[t]}try{m({},"")}catch(o){m=function(n,a,s){return n[a]=s}}function f(o,t,n,a){var u=Object.create((t&&t.prototype instanceof O?t:O).prototype),v=new Q(a||[]);return i(u,"_invoke",{value:_e(o,n,v)}),u}function c(o,t,n){try{return{type:"normal",arg:o.call(t,n)}}catch(a){return{type:"throw",arg:a}}}r.wrap=f;var y={};function O(){}function M(){}function S(){}var L={};m(L,l,function(){return this});var x=Object.getPrototypeOf,A=x&&x(x(F([])));A&&A!==g&&d.call(A,l)&&(L=A);var Z=S.prototype=O.prototype=Object.create(L);function q(o){["next","throw","return"].forEach(function(t){m(o,t,function(n){return this._invoke(t,n)})})}function j(o,t){function n(s,u,v,b){var w=c(o[s],o,u);if("throw"!==w.type){var N=w.arg,k=N.value;return k&&"object"==typeof k&&d.call(k,"__await")?t.resolve(k.__await).then(function(H){n("next",H,v,b)},function(H){n("throw",H,v,b)}):t.resolve(k).then(function(H){N.value=H,v(N)},function(H){return n("throw",H,v,b)})}b(w.arg)}var a;i(this,"_invoke",{value:function(u,v){function b(){return new t(function(w,N){n(u,v,w,N)})}return a=a?a.then(b,b):b()}})}function _e(o,t,n){var a="suspendedStart";return function(s,u){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===s)throw u;return{value:void 0,done:!0}}for(n.method=s,n.arg=u;;){var v=n.delegate;if(v){var b=B(v,n);if(b){if(b===y)continue;return b}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var w=c(o,t,n);if("normal"===w.type){if(a=n.done?"completed":"suspendedYield",w.arg===y)continue;return{value:w.arg,done:n.done}}"throw"===w.type&&(a="completed",n.method="throw",n.arg=w.arg)}}}function B(o,t){var n=t.method,a=o.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&o.iterator.return&&(t.method="return",t.arg=void 0,B(o,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var s=c(a,o.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,y;var u=s.arg;return u?u.done?(t[o.resultName]=u.value,t.next=o.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,y):u:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function ve(o){var t={tryLoc:o[0]};1 in o&&(t.catchLoc=o[1]),2 in o&&(t.finallyLoc=o[2],t.afterLoc=o[3]),this.tryEntries.push(t)}function U(o){var t=o.completion||{};t.type="normal",delete t.arg,o.completion=t}function Q(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(ve,this),this.reset(!0)}function F(o){if(o){var t=o[l];if(t)return t.call(o);if("function"==typeof o.next)return o;if(!isNaN(o.length)){var n=-1,a=function s(){for(;++n<o.length;)if(d.call(o,n))return s.value=o[n],s.done=!1,s;return s.value=void 0,s.done=!0,s};return a.next=a}}return{next:$}}function $(){return{value:void 0,done:!0}}return M.prototype=S,i(Z,"constructor",{value:S,configurable:!0}),i(S,"constructor",{value:M,configurable:!0}),M.displayName=m(S,_,"GeneratorFunction"),r.isGeneratorFunction=function(o){var t="function"==typeof o&&o.constructor;return!!t&&(t===M||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,S):(o.__proto__=S,m(o,_,"GeneratorFunction")),o.prototype=Object.create(Z),o},r.awrap=function(o){return{__await:o}},q(j.prototype),m(j.prototype,p,function(){return this}),r.AsyncIterator=j,r.async=function(o,t,n,a,s){void 0===s&&(s=Promise);var u=new j(f(o,t,n,a),s);return r.isGeneratorFunction(t)?u:u.next().then(function(v){return v.done?v.value:u.next()})},q(Z),m(Z,_,"Generator"),m(Z,l,function(){return this}),m(Z,"toString",function(){return"[object Generator]"}),r.keys=function(o){var t=Object(o),n=[];for(var a in t)n.push(a);return n.reverse(),function s(){for(;n.length;){var u=n.pop();if(u in t)return s.value=u,s.done=!1,s}return s.done=!0,s}},r.values=F,Q.prototype={constructor:Q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(U),!t)for(var n in this)"t"===n.charAt(0)&&d.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(N,k){return v.type="throw",v.arg=t,n.next=N,k&&(n.method="next",n.arg=void 0),!!k}for(var s=this.tryEntries.length-1;s>=0;--s){var u=this.tryEntries[s],v=u.completion;if("root"===u.tryLoc)return a("end");if(u.tryLoc<=this.prev){var b=d.call(u,"catchLoc"),w=d.call(u,"finallyLoc");if(b&&w){if(this.prev<u.catchLoc)return a(u.catchLoc,!0);if(this.prev<u.finallyLoc)return a(u.finallyLoc)}else if(b){if(this.prev<u.catchLoc)return a(u.catchLoc,!0)}else{if(!w)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return a(u.finallyLoc)}}}},abrupt:function(t,n){for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a];if(s.tryLoc<=this.prev&&d.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var u=s;break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=n&&n<=u.finallyLoc&&(u=null);var v=u?u.completion:{};return v.type=t,v.arg=n,u?(this.method="next",this.next=u.finallyLoc,y):this.complete(v)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),U(a),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc===t){var s=a.completion;if("throw"===s.type){var u=s.arg;U(a)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:F(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=void 0),y}},r}function ee(r,g){if(1&r&&(e.TgZ(0,"ion-badge",19),e._uU(1),e.qZA()),2&r){var d=e.oxw();e.xp6(1),e.Oqu(d.notificationCount)}}function te(r,g){if(1&r){var d=e.EpF();e.TgZ(0,"ion-button",12),e.NdJ("click",function(){return e.CHM(d),e.oxw().editSquad()}),e._uU(1," Edit "),e.qZA()}}function ne(r,g){1&r&&(e.TgZ(0,"div",20),e._UZ(1,"ion-progress-bar",21),e.qZA())}function oe(r,g){1&r&&e._UZ(0,"ion-icon",25)}var re=function(g,d){return{"home__leaderboard__player--is-player":g,"home__leaderboard__player--is-leader":d}},ie=function(g){return[g]},ae=function(g){return{width:g}};function ce(r,g){if(1&r&&(e.TgZ(0,"div",22),e.YNc(1,oe,1,0,"ion-icon",23),e.TgZ(2,"h4"),e._uU(3),e.qZA(),e._UZ(4,"div",24),e.qZA()),2&r){var d=g.$implicit,i=g.index,h=e.oxw();e.Gre("home__leaderboard__player home__leaderboard__player--player",i,""),e.Q6J("ngClass",e.WLB(8,re,d.profile.user_id===h.user.id,0===i))("routerLink",e.VKq(11,ie,"/player/"+d.id)),e.xp6(1),e.Q6J("ngIf",0===i),e.xp6(2),e.Oqu(d.profile.name),e.xp6(1),e.Q6J("ngStyle",e.VKq(13,ae,d.percentage+"%"))}}var ue=function(){return["/add-player"]};function se(r,g){1&r&&(e.TgZ(0,"ion-button",26),e._UZ(1,"ion-icon",27),e._uU(2," Add New Player "),e.qZA()),2&r&&e.Q6J("routerLink",e.DdM(1,ue))}var de=function(){return["/notifications"]},le=function(){return["/rewards"]},he=function(){return["/quests"]},ge=[{path:"",component:function(){var r=function(){function g(d,i,h,l,p,_,m,f){var c=this;(0,Y.Z)(this,g),this.alertCtrl=d,this.authenticationService=i,this.playerService=h,this.loadingController=l,this.notificationsService=p,this.ngZone=_,this.platform=m,this.modalCtrl=f,this.players=[],this.userType="user",this.user={},this.squad={name:"Loading..."},this.squads=[],this.notificationCount=0,this.loading=!0,this.authenticationService.getUserData().subscribe(function(y){if(y){c.user=y,c.squads=[];var S,O=[],M=(0,J.Z)(c.user.joined_squads);try{for(M.s();!(S=M.n()).done;){var L=S.value;O.indexOf(L.id)<0&&(c.squads.push(L),O.push(L.id))}}catch(q){M.e(q)}finally{M.f()}var A,x=(0,J.Z)(c.user.squads);try{for(x.s();!(A=x.n()).done;){var Z=A.value;O.indexOf(Z.id)<0&&(c.squads.push(Z),O.push(Z.id))}}catch(q){x.e(q)}finally{x.f()}c.authenticationService.getSeenTutorial().then(function(q){q||c.openModal()}),c.authenticationService.getJoinedSquad().then(function(q){q?c.joinSquad(parseInt(q)):c.user.squads.length>0?(c.squad=c.user.squads[0],c.userType="gamemaster",c.authenticationService.setJoinedSquad(c.squad.id),c.getPlayers()):c.user.joined_squads.length>0&&(c.squad=c.user.joined_squads[0],c.userType="user",c.authenticationService.setJoinedSquad(c.squad.id),c.getPlayers())})}}),this.notificationsService.monitorNotifications().subscribe(function(y){c.getNotifications()}),this.platform.ready().then(function(){return(0,E.mG)(c,void 0,void 0,T().mark(function y(){return T().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:case"end":return M.stop()}},y)}))})}return(0,G.Z)(g,[{key:"ngOnInit",value:function(){}},{key:"ionViewDidEnter",value:function(){this.getNotifications()}},{key:"openModal",value:function(){return(0,E.mG)(this,void 0,void 0,T().mark(function i(){var h;return T().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,this.modalCtrl.create({component:W.D});case 2:return(h=f.sent).present(),f.next=6,h.onWillDismiss();case 6:f.sent,this.authenticationService.setSeenTutorial().then(function(){});case 10:case"end":return f.stop()}},i,this)}))}},{key:"showBannerAd",value:function(){return(0,E.mG)(this,void 0,void 0,T().mark(function i(){var l,p,h=this;return T().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return this.platform.is("ios")&&admob.requestTrackingAuthorization().then(function(){}),console.log("here ad"),l=new admob.BannerAd({adUnitId:"ca-app-pub-3940256099942544/6300978111",backgroundColor:"#FFFFFF"}),p=l.on("load",function(f){console.log("banner loaded",f.ad.id)}),setTimeout(function(){console.log("unsubscribe banner event"),p()},6e4),console.log("showing"),l.show(),l.on("impression",function(f){return(0,E.mG)(h,void 0,void 0,T().mark(function c(){return T().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,l.hide();case 2:case"end":return O.stop()}},c)}))}),console.log("showing 2"),m.next=11,l.show();case 11:case"end":return m.stop()}},i,this)}))}},{key:"showCode",value:function(){"gamemaster"===this.userType&&this.alertCtrl.create({header:"Squad Code",message:"Your squad code is: "+this.squad.code,buttons:[{text:"Dismiss",role:"cancel",handler:function(l){}}]}).then(function(h){h.present()})}},{key:"getNotifications",value:function(){var i=this;this.notificationsService.getNotificationCount().then(function(h){i.ngZone.run(function(){i.notificationCount=h})})}},{key:"joinSquad",value:function(i){var l,h=(0,J.Z)(this.user.squads);try{for(h.s();!(l=h.n()).done;){var p=l.value;if(p.id===i)return this.squad=p,this.userType="gamemaster",this.authenticationService.setJoinedSquad(this.squad.id),void this.getPlayers()}}catch(c){h.e(c)}finally{h.f()}var m,_=(0,J.Z)(this.user.joined_squads);try{for(_.s();!(m=_.n()).done;){var f=m.value;if(f.id===i)return this.squad=f,this.userType="user",this.authenticationService.setJoinedSquad(this.squad.id),void this.getPlayers()}}catch(c){_.e(c)}finally{_.f()}}},{key:"getPlayers",value:function(){var i=this;this.loading=!0,this.playerService.getPlayers(this.squad.id).then(function(h){i.players=h,i.players.sort(function(l,p){return p.percentage-l.percentage}),i.loading=!1}).catch(function(){i.loading=!1})}},{key:"editSquad",value:function(){var i=this;this.alertCtrl.create({header:"Edit Squad",inputs:[{name:"name",placeholder:"Squad Name",type:"text",value:this.squad.name}],buttons:[{text:"Cancel",role:"cancel",handler:function(p){}},{text:"Update",handler:function(p){p&&(i.squad.name=p.name,i.authenticationService.updateSquad(i.squad).then(function(){}))}}]}).then(function(l){l.present()})}},{key:"createSquad",value:function(){var i=this;this.alertCtrl.create({header:"Create Squad",inputs:[{name:"name",placeholder:"Squad Name",type:"text",value:""}],buttons:[{text:"Cancel",role:"cancel",handler:function(p){}},{text:"Create",handler:function(p){var _;p&&(i.loadingController.create({cssClass:"loading-container",message:"Creating Squad...",duration:1e4}).then(function(f){f.present(),_=f}),i.authenticationService.createSquad(p.name).then(function(f){i.authenticationService.setJoinedSquad(f.id).then(function(){i.authenticationService.retreiveUserData().then(function(c){_&&_.dismiss()})})}))}}]}).then(function(l){l.present()})}},{key:"changeSquad",value:function(){var p,i=this,h=[],l=(0,J.Z)(this.squads);try{for(l.s();!(p=l.n()).done;){var _=p.value;h.push({name:"squad",type:"radio",label:_.name,value:_.id,checked:this.squad.id===_.id})}}catch(f){l.e(f)}finally{l.f()}h.push({name:"squad",type:"radio",label:"Create New Squad",value:"create"}),this.alertCtrl.create({header:"Change Squad",subHeader:"Switch to another squad you are a participant in",inputs:h,buttons:[{text:"Cancel",role:"cancel",handler:function(c){}},{text:"Change",handler:function(c){c&&(c&&"create"===c?setTimeout(function(){i.createSquad()},200):c&&i.joinSquad(parseInt(c)))}}]}).then(function(f){f.present()})}}]),g}();return r.\u0275fac=function(d){return new(d||r)(e.Y36(P.Br),e.Y36(V.$),e.Y36(K.l),e.Y36(P.HT),e.Y36(X.T),e.Y36(e.R0b),e.Y36(P.t4),e.Y36(P.IN))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-home"]],decls:28,vars:12,consts:[["translucent","true","mode","ios"],["mode","md"],["slot","primary"],["color","light","routerDirection","forward",3,"routerLink"],["slot","icon-only","name","notifications-outline"],["color","danger",4,"ngIf"],["fullscreen","true",1,"home"],["mode","ios"],["size","large",3,"click"],[1,"home__header-buttons"],["slot","primary","mode","md"],["color","light",3,"click",4,"ngIf"],["color","light",3,"click"],["class","home__loading",4,"ngIf"],[1,"home__leaderboard"],["routerDirection","forward",3,"class","ngClass","routerLink",4,"ngFor","ngForOf"],["shape","round","color","secondary","routerDirection","forward",3,"routerLink",4,"ngIf"],[1,"home__actions"],["routerDirection","forward",1,"home__actions__action",3,"routerLink"],["color","danger"],[1,"home__loading"],["type","indeterminate","color","primary"],["routerDirection","forward",3,"ngClass","routerLink"],["name","trophy",4,"ngIf"],[1,"home__leaderboard__player__bar",3,"ngStyle"],["name","trophy"],["shape","round","color","secondary","routerDirection","forward",3,"routerLink"],["name","add"]],template:function(d,i){1&d&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e._UZ(2,"ion-title"),e.TgZ(3,"ion-buttons",2),e.TgZ(4,"ion-button",3),e._UZ(5,"ion-icon",4),e.YNc(6,ee,2,1,"ion-badge",5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"ion-content",6),e.TgZ(8,"ion-header",7),e.TgZ(9,"ion-toolbar"),e.TgZ(10,"ion-title",8),e.NdJ("click",function(){return i.showCode()}),e._uU(11),e.qZA(),e.TgZ(12,"div",9),e.TgZ(13,"ion-buttons",10),e.YNc(14,te,2,0,"ion-button",11),e.TgZ(15,"ion-button",12),e.NdJ("click",function(){return i.changeSquad()}),e._uU(16," Change Squad "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(17,ne,2,0,"div",13),e.TgZ(18,"div",14),e.YNc(19,ce,5,15,"div",15),e.YNc(20,se,3,2,"ion-button",16),e.qZA(),e.TgZ(21,"div",17),e.TgZ(22,"div",18),e.TgZ(23,"h4"),e._uU(24,"Rewards"),e.qZA(),e.qZA(),e.TgZ(25,"div",18),e.TgZ(26,"h4"),e._uU(27,"Quests"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&d&&(e.xp6(4),e.Q6J("routerLink",e.DdM(9,de)),e.xp6(2),e.Q6J("ngIf",i.notificationCount>0),e.xp6(5),e.Oqu(i.squad.name),e.xp6(3),e.Q6J("ngIf","gamemaster"===i.userType),e.xp6(3),e.Q6J("ngIf",i.loading),e.xp6(2),e.Q6J("ngForOf",i.players),e.xp6(1),e.Q6J("ngIf","gamemaster"===i.userType),e.xp6(2),e.Q6J("routerLink",e.DdM(10,le)),e.xp6(3),e.Q6J("routerLink",e.DdM(11,he)))},directives:[P.Gu,P.sr,P.wd,P.Sm,P.YG,P.YI,D.rH,P.gu,I.O5,P.W2,I.sg,P.yp,P.X7,I.mk,I.PC],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--border-color:transparent}ion-header[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{position:absolute;top:-4px;right:-5px;font-size:10px;line-height:10px}.home[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #000000;--color:white}.home[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{position:static}.home[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{overflow:visible;white-space:normal}.home[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   .home__header-buttons[_ngcontent-%COMP%]{padding-left:6px}.home[_ngcontent-%COMP%]   .home__loading[_ngcontent-%COMP%]{padding:20px 20px 0}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]{padding:0 15px;margin-top:30px}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:10px}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]   .home__leaderboard__player[_ngcontent-%COMP%]{margin-bottom:25px;display:flex;align-items:center}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]   .home__leaderboard__player[_ngcontent-%COMP%]   .home__leaderboard__player__bar[_ngcontent-%COMP%]{width:0%;height:15px;min-width:10px;background-color:#d5e8e2;border-radius:25px}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]   .home__leaderboard__player[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px;margin:0;font-weight:400;color:#fff;width:130px;min-width:130px;max-width:130px}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]   .home__leaderboard__player.home__leaderboard__player--is-player[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]   .home__leaderboard__player.home__leaderboard__player--is-leader[_ngcontent-%COMP%]{margin-bottom:15px}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]   .home__leaderboard__player.home__leaderboard__player--is-leader[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:70px;color:#ff6700;margin-right:10px}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]   .home__leaderboard__player.home__leaderboard__player--is-leader[_ngcontent-%COMP%]   .home__leaderboard__player__bar[_ngcontent-%COMP%]{background-color:#ff6700}.home[_ngcontent-%COMP%]   .home__leaderboard[_ngcontent-%COMP%]   .home__leaderboard__player.home__leaderboard__player--is-leader[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#ff6700;font-size:16px;width:110px;min-width:110px;max-width:110px}.home[_ngcontent-%COMP%]   .home__actions[_ngcontent-%COMP%]{display:flex;margin-top:20px;margin-bottom:100px;padding:0 5px}.home[_ngcontent-%COMP%]   .home__actions[_ngcontent-%COMP%]   .home__actions__action[_ngcontent-%COMP%]{flex:1;margin:0 5px;background:#8A2BE2;padding-top:65px;padding-bottom:65px;border-radius:35px;text-align:center}.home[_ngcontent-%COMP%]   .home__actions[_ngcontent-%COMP%]   .home__actions__action[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000;font-size:50px}.home[_ngcontent-%COMP%]   .home__actions[_ngcontent-%COMP%]   .home__actions__action[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#000;margin:0;font-size:20px;letter-spacing:1px}"]}),r}()}],pe=function(){var r=(0,G.Z)(function g(){(0,Y.Z)(this,g)});return r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[D.Bz.forChild(ge)],D.Bz]}),r}(),me=function(){var r=(0,G.Z)(function g(){(0,Y.Z)(this,g)});return r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[I.ez,R.u5,P.Pc,pe]]}),r}()}}]);