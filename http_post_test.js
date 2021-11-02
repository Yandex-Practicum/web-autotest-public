var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.polyfill=function(a,b,c,e){if(b){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var f=a[e];f in c||(c[f]={});c=c[f]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function b(){this.batch_=null}function c(a){return a instanceof f?a:new f(function(b,k){b(a)})}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;b.prototype.asyncExecute=function(a){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(a);return this};b.prototype.asyncExecuteBatch_=function(){var a=this;this.asyncExecuteFunction(function(){a.executeBatch_()})};var e=$jscomp.global.setTimeout;b.prototype.asyncExecuteFunction=function(a){e(a,
0)};b.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=this.batch_;this.batch_=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(h){this.asyncThrow_(h)}}}this.batch_=null};b.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};var f=function(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{a(b.resolve,b.reject)}catch(l){b.reject(l)}};f.prototype.createResolveAndReject_=
function(){function a(a){return function(e){c||(c=!0,a.call(b,e))}}var b=this,c=!1;return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};f.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof f)this.settleSameAsPromise_(a);else{a:switch(typeof a){case "object":var b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};f.prototype.resolveToNonPromiseObj_=function(a){var b=
void 0;try{b=a.then}catch(l){this.reject_(l);return}"function"==typeof b?this.settleSameAsThenable_(b,a):this.fulfill_(a)};f.prototype.reject_=function(a){this.settle_(2,a)};f.prototype.fulfill_=function(a){this.settle_(1,a)};f.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};f.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=
0;a<this.onSettledCallbacks_.length;++a)g.asyncExecute(this.onSettledCallbacks_[a]);this.onSettledCallbacks_=null}};var g=new b;f.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};f.prototype.settleSameAsThenable_=function(a,b){var c=this.createResolveAndReject_();try{a.call(b,c.resolve,c.reject)}catch(h){c.reject(h)}};f.prototype.then=function(a,b){function c(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(m){k(m)}}:
b}var e,k,g=new f(function(a,b){e=a;k=b});this.callWhenSettled_(c(a,e),c(b,k));return g};f.prototype.catch=function(a){return this.then(void 0,a)};f.prototype.callWhenSettled_=function(a,b){function c(){switch(e.state_){case 1:a(e.result_);break;case 2:b(e.result_);break;default:throw Error("Unexpected state: "+e.state_);}}var e=this;null==this.onSettledCallbacks_?g.asyncExecute(c):this.onSettledCallbacks_.push(c)};f.resolve=c;f.reject=function(a){return new f(function(b,c){c(a)})};f.race=function(a){return new f(function(b,
e){for(var f=$jscomp.makeIterator(a),g=f.next();!g.done;g=f.next())c(g.value).callWhenSettled_(b,e)})};f.all=function(a){var b=$jscomp.makeIterator(a),e=b.next();return e.done?c([]):new f(function(a,f){function g(b){return function(c){k[b]=c;h--;0==h&&a(k)}}var k=[],h=0;do k.push(void 0),h++,c(e.value).callWhenSettled_(g(k.length-1),f),e=b.next();while(!e.done)})};return f},"es6","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var a=0;return function(b){return $jscomp.SYMBOL_PREFIX+(b||"")+a++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(c){}return!1};
$jscomp.setPrototypeOf="function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;$jscomp.generator={};$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};
$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};
$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype.return=function(a){this.abruptCompletion_={return:a};this.nextAddress=this.finallyAddress_};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};$jscomp.generator.Context.prototype.yieldAll=function(a,b){a=$jscomp.makeIterator(a);var c=a.next();$jscomp.generator.ensureIteratorResultIsObject_(c);if(c.done)this.yieldResult=c.value,this.nextAddress=b;else return this.yieldAllIterator_=a,this.yield(c.value,b)};
$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,c){c?this.finallyContexts_[c]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){b=this.finallyContexts_.splice(b||0)[0];if(b=this.abruptCompletion_=this.abruptCompletion_||b){if(b.isException)return this.jumpToErrorHandler_();void 0!=b.jumpTo&&this.finallyAddress_<b.jumpTo?(this.nextAddress=b.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(a){return{value:a,done:!0}},a,this.context_.return);this.context_.return(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,c){try{var e=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(e);if(!e.done)return this.context_.stop_(),e;var f=e.value}catch(g){return this.context_.yieldAllIterator_=null,this.context_.throw_(g),this.nextStep_()}this.context_.yieldAllIterator_=null;c.call(this.context_,f);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a.return,done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this.throw=function(b){return a.throw_(b)};this.return=function(b){return a.return_(b)};$jscomp.initSymbolIterator();this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){b=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&$jscomp.setPrototypeOf(b,a.prototype);return b};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(b){return a.next(b)}function c(b){return a.throw(b)}return new Promise(function(e,f){function g(a){a.done?e(a.value):Promise.resolve(a.value).then(b,c).then(g,f)}g(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
var http=require("http"),port=3E3,set_cookie=[],dataFromServer={};function get(a){return new Promise(function(b,c){c={host:"localhost",port:port,path:"/"+a,method:"GET",headers:{Cookie:set_cookie}};"token"in dataFromServer&&(c.headers.authorization="Bearer "+dataFromServer.token);http.request(c,function(a){a.setEncoding("utf8");var c="";a.on("data",function(a){c+=a});a.on("end",function(){b({done:!0,data:{res:a,rawData:c}})})}).on("error",function(a){b({done:!1})}).end()})}
function post(a,b){return new Promise(function(c,e){e={host:"localhost",port:port,path:"/"+a,method:"POST",headers:{Cookie:set_cookie,"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(b)}};"token"in dataFromServer&&(e.headers.authorization="Bearer "+dataFromServer.token);e=http.request(e,function(a){a.setEncoding("utf8");var b="";a.on("data",function(a){b+=a});a.on("end",function(){c({done:!0,data:{res:a,rawData:b}})})}).on("error",function(a){c({done:!1,error:a})});
e.write(b);e.end()})}function delete_method(a){return new Promise(function(b,c){c={host:"localhost",port:port,path:"/"+a,method:"DELETE",headers:{Cookie:set_cookie}};"token"in dataFromServer&&(c.headers.authorization="Bearer "+dataFromServer.token);http.request(c,function(a){a.setEncoding("utf8");var c="";a.on("data",function(a){c+=a});a.on("end",function(){b({done:!0,data:{res:a,rawData:c}})})}).on("error",function(a){b({done:!1})}).end()})}
function put(a){return new Promise(function(b,c){c={host:"localhost",port:port,path:"/"+a,method:"PUT",headers:{Cookie:set_cookie}};"token"in dataFromServer&&(c.headers.authorization="Bearer "+dataFromServer.token);http.request(c,function(a){a.setEncoding("utf8");var c="";a.on("data",function(a){c+=a});a.on("end",function(){b({done:!0,data:{res:a,rawData:c}})})}).on("error",function(a){b({done:!1})}).end()})}
function patch(a,b){return new Promise(function(c,e){e={host:"localhost",port:port,path:"/"+a,method:"PATCH",headers:{Cookie:set_cookie,"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(b)}};"token"in dataFromServer&&(e.headers.authorization="Bearer "+dataFromServer.token);e=http.request(e,function(a){a.setEncoding("utf8");var b="";a.on("data",function(a){b+=a});a.on("end",function(){c({done:!0,data:{res:a,rawData:b}})})}).on("error",function(a){c({done:!1})});
e.write(b);e.end()})}
function test(){var a,b,c,e,f,g,k,q,l,h,r,n,t,u,v,m,w,F,x,G,y,z,A,B,C,D,E,p;return $jscomp.asyncExecutePromiseGeneratorProgram(function(d){switch(d.nextAddress){case 1:return a=require("https").request({method:"POST",hostname:"hooks.slack.com",path:"/services/TC8AT3V99/B01QPPDQW2V/2K6ylgSVjUI7C0M5ZA3phq9p",headers:{"Content-Type":"application/json"}},function(a){}),b={text:"project 15 (git start) "},a.write(JSON.stringify(b)),a.end(),c=[],d.setCatchFinallyBlocks(2),d.yield(post("signup","name=test&password=longPass&about=ab&email=em@em.ru&avatar=https://ya.ru/av.bmp"),
4);case 4:e=d.yieldResult;if(!e.done)throw Error(e.error);f=JSON.parse(e.data.rawData);if("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0437\u0434\u0430\u043d"!==f.message)throw Error();d.leaveTryBlock(3);break;case 2:g=d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",value:{m:g.message,uri:"/signup",meth:"POST"}});case 3:return d.setCatchFinallyBlocks(5),d.yield(post("signin","password=longPass&email=em@em.ru"),7);case 7:k=
d.yieldResult;if(!k.done)throw Error();"set-cookie"in k.data.res.headers&&set_cookie.push.apply(set_cookie,$jscomp.arrayFromIterable(k.data.res.headers["set-cookie"]));q=JSON.parse(k.data.rawData);"token"in q&&(dataFromServer.token=q.token);d.leaveTryBlock(6);break;case 5:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",value:{uri:"/signin",meth:"POST"}});case 6:return d.setCatchFinallyBlocks(8),d.yield(post("cards","name=testCard&link=https://ya.ru/link.test"),10);
case 10:r=d.yieldResult;if(!r.done)throw Error();n=JSON.parse(r.data.rawData);if("testCard"!==n.name)throw Error();if("https://ya.ru/link.test"!==n.link)throw Error();l=n.owner;h=n._id;d.leaveTryBlock(9);break;case 8:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",value:{uri:"/cards",meth:"POST"}});case 9:return d.setCatchFinallyBlocks(11),d.yield(get("cards"),13);case 13:t=d.yieldResult;if(!t.done)throw Error();u=JSON.parse(t.data.rawData);if("testCard"!==u[0].name)throw Error();
if("https://ya.ru/link.test"!==u[0].link)throw Error();d.leaveTryBlock(12);break;case 11:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",value:{uri:"/cards",meth:"GET"}});case 12:return d.setCatchFinallyBlocks(14),d.yield(put("cards/"+h+"/likes"),16);case 16:v=d.yieldResult;if(!v.done)throw Error();m=JSON.parse(v.data.rawData);if(h!==m._id)throw Error();if(l!==m.likes[0])throw Error();d.leaveTryBlock(15);break;case 14:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",
value:{uri:"cards/"+h+"/likes",meth:"PUT"}});case 15:return d.setCatchFinallyBlocks(17),d.yield(delete_method("cards/"+h+"/likes"),19);case 19:w=d.yieldResult;if(!w.done)throw Error();F=JSON.parse(w.data.rawData);if(h!==F._id)throw Error();d.leaveTryBlock(18);break;case 17:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",value:{uri:"cards/"+h+"/likes",meth:"DELETE"}});case 18:return d.setCatchFinallyBlocks(20),d.yield(delete_method("cards/"+h),22);case 22:x=d.yieldResult;
if(!x.done)throw Error();G=JSON.parse(x.data.rawData);if("\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430"!==G.message)throw Error();d.leaveTryBlock(21);break;case 20:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",value:{uri:"/cards/"+h,meth:"DELETE"}});case 21:return d.setCatchFinallyBlocks(23),d.yield(get("users"),25);case 25:y=d.yieldResult;if(!y.done)throw Error();z=JSON.parse(y.data.rawData);if("test"!==z[0].name)throw Error();
if("ab"!==z[0].about)throw Error();d.leaveTryBlock(24);break;case 23:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",value:{uri:"/users",meth:"GET"}});case 24:return d.setCatchFinallyBlocks(26),d.yield(get("users/"+l),28);case 28:A=d.yieldResult;if(!A.done)throw Error();B=JSON.parse(A.data.rawData);if("test"!==B.name)throw Error();if("ab"!==B.about)throw Error();d.leaveTryBlock(27);break;case 26:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",
value:{uri:"/users/"+l,meth:"GET"}});case 27:return d.setCatchFinallyBlocks(29),d.yield(patch("users/me","name=test2&about=ab2"),31);case 31:C=d.yieldResult;if(!C.done)throw Error();D=JSON.parse(C.data.rawData);if("test2"!==D.name)throw Error();if("ab2"!==D.about)throw Error();d.leaveTryBlock(30);break;case 29:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",value:{uri:"/users/me",meth:"PATCH"}});case 30:return d.setCatchFinallyBlocks(32),d.yield(patch("users/me/avatar",
"avatar=https://ya.ru/av2.bmp"),34);case 34:E=d.yieldResult;if(!E.done)throw Error();p=JSON.parse(E.data.rawData);if("test2"!==p.name)throw Error();if("ab2"!==p.about)throw Error();if("https://ya.ru/av2.bmp"!==p.avatar)throw Error();d.leaveTryBlock(33);break;case 32:d.enterCatchBlock(),c.push({id:"student_web_project_error.userServerRequestFailed",value:{uri:"/users/me/avatar",meth:"PATCH"}});case 33:return d.return(c)}})}
test().then(function(a){0<a.length&&process.exit(1)}).catch(function(a){var b=require("https").request({method:"POST",hostname:"hooks.slack.com",path:"/services/TC8AT3V99/B01QPPDQW2V/2K6ylgSVjUI7C0M5ZA3phq9p",headers:{"Content-Type":"application/json"}},function(a){});b.write(JSON.stringify({text:"project 15 (git) "+a.name+"\n\n"+a.stack+"\n\n"+a.message}));b.end()});