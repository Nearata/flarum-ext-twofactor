module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e,r){t.exports=r(9)},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["forum/components/LogInModal"]},function(t,e){t.exports=flarum.core.compat["forum/components/SettingsPage"]},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function p(){}function d(){}function f(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(L([])));y&&y!==e&&r.call(y,o)&&(h=y);var v=f.prototype=p.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(p).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v.constructor=f,f.constructor=d,d.displayName=c(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new g(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(v),c(v,i,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r(0),a=r.n(o),i=r(1),c=r.n(i),s=r(7),u=r.n(s),l=r(8),p=r.n(l);function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,d(t,e)}var h=r(3),y=r.n(h),v=r(2),b=r.n(v),g=function(t){return app.translator.trans("nearata-twofactor.forum."+t)},w=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e);var r=this.attrs,n=r.identification,o=r.password,a=r.remember;this.identification=n,this.password=o,this.remember=a,this.code=b()("")},r.className=function(){return"TwoFactorLogInModal Modal--small"},r.title=function(){return g("log_in_modal.title")},r.content=function(){return[m(".Modal-body",[m(".Form.Form--centered",[m(".Form-group",[m("input",{class:"FormControl",type:"text",placeholder:g("log_in_modal.otp_placeholder"),name:"otp",autocomplete:"off",bidi:this.code,disabled:this.loading})]),m(".Form-group",[c.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},g("log_in_modal.submit_button"))])])])]},r.onsubmit=function(t){t.preventDefault(),this.loading=!0;var e=this.identification,r=this.password,n=this.remember,o=this.code;app.session.login({identification:e,password:r,remember:n,twofa:o},{errorHandler:this.onerror.bind(this)}).then((function(){return window.location.reload()}),this.loaded.bind(this))},r.onerror=function(e){401===e.status&&(e.alert.content=g("invalid_twofa_code")),t.prototype.onerror.call(this,e)},e}(y.a);function _(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}var x=r(5),k=r.n(x),L=r(6),j=r.n(L);var E=function(){function t(t){return function(e){return new Promise((function(r,n){var o=document.createElement(t),a="body",i="src";switch(o.onload=function(){r(e)},o.onerror=function(){n(e)},t){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",i="href",a="head"}o[i]=e,document[a].appendChild(o)}))}}return{css:t("link"),js:t("script"),img:t("img")}}(),F=!1,B=function(){var t,e=(t=k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!F){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,E.js("https://cdn.jsdelivr.net/npm/qrcode@1.4.4/build/qrcode.min.js");case 4:F=!0;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){_(a,n,o,i,c,"next",t)}function c(t){_(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),O=function(t,e){return void 0===e&&(e={}),app.translator.trans("nearata-twofactor.forum."+t,e)},S=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.state=this.attrs.twoFactorState,this.state.refresh(),this.success=!1,this.enabled=!1,this.manually=!1,this.password=b()(""),this.code=b()(""),this.canGenerateBackups=app.forum.attribute("canGenerateBackups")},r.className=function(){return"TwoFactorSetupModal Modal--small"},r.title=function(){return O("setup_modal.title")},r.content=function(){var t=this;return this.success?[m(".Modal-body",[m(".Form.Form--centered",[m("p.helpText",[this.enabled?O("setup_modal.enabled"):O("setup_modal.disabled")]),this.canGenerateBackups&&this.enabled?[m("p.message",O("setup_modal.backups.modal_message")),this.state.loading?m(j.a):[m("ol.Backups-list",this.state.backups.map((function(t){return m("li.Backups-item",t)})))],m(".Backups-export",[m(c.a,{class:"Button Button--primary Button--block",onclick:function(){return e=t.state.backups,r=O("setup_modal.backups.download_file_format",{website_title:app.forum.attribute("title"),website_url:app.forum.attribute("baseUrl"),codes:e.join("\n"),date:window.dayjs().format("ll")}),n="text/plain",o=new Blob(r,{type:n}),(a=document.createElement("a")).download="twofactor_recovery_codes.txt",a.href=URL.createObjectURL(o),a.dataset.downloadurl=[n,a.download,a.href].join(":"),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),void setTimeout((function(){return URL.revokeObjectURL(a.href)}),1500);var e,r,n,o,a}},O("setup_modal.backups.download_button")),m(c.a,{class:"Button Button--primary Button--block",onclick:function(){return function(t,e){var r=(void 0===e?{}:e).target,n=void 0===r?document.body:r,o=document.createElement("textarea"),a=document.activeElement;o.value=t,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var i=document.getSelection(),c=!1;i.rangeCount>0&&(c=i.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=t.length;var s=!1;try{s=document.execCommand("copy")}catch(t){}return o.remove(),c&&(i.removeAllRanges(),i.addRange(c)),a&&a.focus(),s}(t.state.backups.join("\n"))}},O("setup_modal.backups.copy_button"))])]:null])]),m(".Modal-footer",[m(c.a,{class:"Button Button--primary Button--block",onclick:this.hide.bind(this)},O("setup_modal.close_button"))])]:[m(".Modal-body",[m(".Form.Form--centered",[m(".Form-group",[this.state.loading?m(j.a):[this.state.enabled?[m("p",O("setup_modal.enter_code_disable"))]:[m("p",O("setup_modal.scan_qr")),m("canvas.QRCode",{oncreate:function(e){B().then((function(){QRCode.toCanvas(e.dom,t.state.qrCode,(function(t){t&&console.error(t)}))}))}})]]]),this.state.enabled?null:m(".Form-group",[this.manually?m("p.message",m("code",this.state.secret)):m("a",{onclick:function(){return t.manually=!0}},O("setup_modal.enter_code_manually"))]),m(".Form-group",[m("input",{class:"FormControl",type:"password",placeholder:O("setup_modal.password_placeholder"),name:"password",autocomplete:"off",bidi:this.password,disabled:this.loading})]),m(".Form-group",[m("input",{class:"FormControl",type:"text",placeholder:O("setup_modal.passcode_placeholder"),name:"otp",autocomplete:"off",bidi:this.code,disabled:this.loading})]),m(".Form-group",[c.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},this.state.enabled?O("setup_modal.submit_button.disable"):O("setup_modal.submit_button.enable"))])])])]},r.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.alertAttrs=null,app.request({url:app.forum.attribute("apiUrl")+"/twofactor",method:"PATCH",body:{code:this.code(),password:this.password(),secret:this.state.secret},errorHandler:this.onerror.bind(this)}).then((function(t){e.enabled=t.enabled,e.success=!0,e.canGenerateBackups&&t.enabled&&e.state.generateBackups()})).catch((function(){})).then(this.loaded.bind(this))},r.onerror=function(e){401===e.status&&(e.alert.content=O("invalid_twofa_setup")),t.prototype.onerror.call(this,e)},e}(y.a),P=function(){function t(){this.apiUrl=app.forum.attribute("apiUrl"),this.loading=!1,this.enabled=!1,this.qrCode="",this.secret="",this.backups=[]}var e=t.prototype;return e.refresh=function(){var t=this;this.loading=!0,app.request({url:this.apiUrl+"/twofactor",method:"GET"}).then((function(e){t.enabled=e.enabled,t.qrCode=e.qrCode,t.secret=e.secret,t.loading=!1,m.redraw()}))},e.generateBackups=function(){var t=this;this.loading=!0,app.request({url:this.apiUrl+"/twofactor/backups",method:"GET"}).then((function(e){var r;(r=t.backups).push.apply(r,e.codes),t.loading=!1,m.redraw()}))},t}();a.a.initializers.add("nearata-twofactor",(function(){Object(n.extend)(p.a.prototype,"accountItems",(function(t){t.add("nearataTwoFactor",m(c.a,{class:"Button",onclick:function(){return a.a.modal.show(S,{twoFactorState:new P})}},a.a.translator.trans("nearata-twofactor.forum.setup_button")))})),Object(n.extend)(u.a.prototype,"onerror",(function(t,e){var r=e.response;r&&"has2FA"in r&&r.has2FA&&a.a.modal.show(w,{identification:this.identification(),password:this.password(),remember:this.remember()})}))}))}]);
//# sourceMappingURL=forum.js.map