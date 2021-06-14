!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=1)}([,function(t,r,e){"use strict";e.r(r);new Uint8Array(16);for(var n=[],o=0;o<256;++o)n.push((o+256).toString(16).substr(1));var a,u;new Map;(u=a||(a={})).FLAT_JSON="FlatJSON",u.DSV_STR="DSVStr",u.DSV_ARR="DSVArr",u.AUTO="Auto";var i={},f={};function c(t){return new Function("d","return {"+t.map((function(t,r){return JSON.stringify(t)+": d["+r+'] || ""'})).join(",")+"}")}function s(t){var r=Object.create(null),e=[];return t.forEach((function(t){for(var n in t)n in r||e.push(r[n]=n)})),e}function l(t,r){var e=t+"",n=e.length;return n<r?new Array(r-n+1).join(0)+e:e}function p(t){var r,e=t.getUTCHours(),n=t.getUTCMinutes(),o=t.getUTCSeconds(),a=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((r=t.getUTCFullYear())<0?"-"+l(-r,6):r>9999?"+"+l(r,6):l(r,4))+"-"+l(t.getUTCMonth()+1,2)+"-"+l(t.getUTCDate(),2)+(a?"T"+l(e,2)+":"+l(n,2)+":"+l(o,2)+"."+l(a,3)+"Z":o?"T"+l(e,2)+":"+l(n,2)+":"+l(o,2)+"Z":n||e?"T"+l(e,2)+":"+l(n,2)+"Z":"")}var d=function(t){var r=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function n(t,r){var n,o=[],a=t.length,u=0,c=0,s=a<=0,l=!1;function p(){if(s)return f;if(l)return l=!1,i;var r,n,o=u;if(34===t.charCodeAt(o)){for(;u++<a&&34!==t.charCodeAt(u)||34===t.charCodeAt(++u););return(r=u)>=a?s=!0:10===(n=t.charCodeAt(u++))?l=!0:13===n&&(l=!0,10===t.charCodeAt(u)&&++u),t.slice(o+1,r-1).replace(/""/g,'"')}for(;u<a;){if(10===(n=t.charCodeAt(r=u++)))l=!0;else if(13===n)l=!0,10===t.charCodeAt(u)&&++u;else if(n!==e)continue;return t.slice(o,r)}return s=!0,t.slice(o,a)}for(10===t.charCodeAt(a-1)&&--a,13===t.charCodeAt(a-1)&&--a;(n=p())!==f;){for(var d=[];n!==i&&n!==f;)d.push(n),n=p();r&&null==(d=r(d,c++))||o.push(d)}return o}function o(r,e){return r.map((function(r){return e.map((function(t){return u(r[t])})).join(t)}))}function a(r){return r.map(u).join(t)}function u(t){return null==t?"":t instanceof Date?p(t):r.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,r){var e,o,a=n(t,(function(t,n){if(e)return e(t,n-1);o=t,e=r?function(t,r){var e=c(t);return function(n,o){return r(e(n),o,t)}}(t,r):c(t)}));return a.columns=o||[],a},parseRows:n,format:function(r,e){return null==e&&(e=s(r)),[e.map(u).join(t)].concat(o(r,e)).join("\n")},formatBody:function(t,r){return null==r&&(r=s(t)),o(t,r).join("\n")},formatRows:function(t){return t.map(a).join("\n")},formatRow:a,formatValue:u}},g=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,a=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=a.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return u},h=function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(g(arguments[r]));return t};function y(t){return t instanceof Date?t:new Date(t)}function m(t){return t<10?"0"+t:t}function v(t){this.format=t,this.dtParams=void 0,this.nativeDate=void 0}RegExp.escape=function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},v.TOKEN_PREFIX="%",v.DATETIME_PARAM_SEQUENCE={YEAR:0,MONTH:1,DAY:2,HOUR:3,MINUTE:4,SECOND:5,MILLISECOND:6},v.defaultNumberParser=function(t){return function(r){var e;return isFinite(e=parseInt(r,10))?e:t}},v.defaultRangeParser=function(t,r){return function(e){var n,o;if(!e)return r;var a=e.toLowerCase();for(n=0,o=t.length;n<o;n++)if(t[n].toLowerCase()===a)return n;return void 0===n?r:null}},v.getTokenDefinitions=function(){var t={short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},r={short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]};return{H:{name:"H",index:3,extract:function(){return"(\\d+)"},parser:v.defaultNumberParser(),formatter:function(t){return y(t).getHours().toString()}},l:{name:"l",index:3,extract:function(){return"(\\d+)"},parser:v.defaultNumberParser(),formatter:function(t){var r=y(t).getHours()%12;return(0===r?12:r).toString()}},p:{name:"p",index:3,extract:function(){return"(AM|PM)"},parser:function(t){return t?t.toLowerCase():null},formatter:function(t){return y(t).getHours()<12?"AM":"PM"}},P:{name:"P",index:3,extract:function(){return"(am|pm)"},parser:function(t){return t?t.toLowerCase():null},formatter:function(t){return y(t).getHours()<12?"am":"pm"}},M:{name:"M",index:4,extract:function(){return"(\\d+)"},parser:v.defaultNumberParser(),formatter:function(t){return m(y(t).getMinutes())}},S:{name:"S",index:5,extract:function(){return"(\\d+)"},parser:v.defaultNumberParser(),formatter:function(t){return m(y(t).getSeconds())}},K:{name:"K",index:6,extract:function(){return"(\\d+)"},parser:v.defaultNumberParser(),formatter:function(t){return y(t).getMilliseconds().toString()}},a:{name:"a",index:2,extract:function(){return"("+t.short.join("|")+")"},parser:v.defaultRangeParser(t.short),formatter:function(r){var e=y(r).getDay();return t.short[e].toString()}},A:{name:"A",index:2,extract:function(){return"("+t.long.join("|")+")"},parser:v.defaultRangeParser(t.long),formatter:function(r){var e=y(r).getDay();return t.long[e].toString()}},e:{name:"e",index:2,extract:function(){return"(\\d+) of ("+r.long.join("|")+")"},parser:v.defaultNumberParser(),formatter:function(t){return y(t).getDate().toString()}},d:{name:"d",index:2,extract:function(){return"(\\d+)"},parser:v.defaultNumberParser(),formatter:function(t){return m(y(t).getDate())}},b:{name:"b",index:1,extract:function(){return"("+r.short.join("|")+")"},parser:v.defaultRangeParser(r.short),formatter:function(t){var e=y(t).getMonth();return r.short[e].toString()}},B:{name:"B",index:1,extract:function(){return"("+r.long.join("|")+")"},parser:v.defaultRangeParser(r.long),formatter:function(t){var e=y(t).getMonth();return r.long[e].toString()}},m:{name:"m",index:1,extract:function(){return"(\\d+)"},parser:function(t){return v.defaultNumberParser()(t)-1},formatter:function(t){return m(y(t).getMonth()+1)}},y:{name:"y",index:0,extract:function(){return"(\\d{2})"},parser:function(t){var r;if(t){var e=t.length;t=t.substring(e-2,e)}var n=v.defaultNumberParser()(t),o=new Date,a=Math.trunc(o.getFullYear()/100);return y(r=""+a+n).getFullYear()>o.getFullYear()&&(r=""+(a-1)+n),y(r).getFullYear()},formatter:function(t){var r,e=y(t).getFullYear().toString();return e&&(r=e.length,e=e.substring(r-2,r)),e}},Y:{name:"Y",index:0,extract:function(){return"(\\d{4})"},parser:v.defaultNumberParser(),formatter:function(t){return y(t).getFullYear().toString()}}}},v.getTokenFormalNames=function(){var t=v.getTokenDefinitions();return{HOUR:t.H,HOUR_12:t.l,AMPM_UPPERCASE:t.p,AMPM_LOWERCASE:t.P,MINUTE:t.M,SECOND:t.S,SHORT_DAY:t.a,LONG_DAY:t.A,DAY_OF_MONTH:t.e,DAY_OF_MONTH_CONSTANT_WIDTH:t.d,SHORT_MONTH:t.b,LONG_MONTH:t.B,MONTH_OF_YEAR:t.m,SHORT_YEAR:t.y,LONG_YEAR:t.Y}},v.tokenResolver=function(){var t=v.getTokenDefinitions(),r=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e,n,o=0,a=t.length;o<a;o++)e=t[o],t[o]&&(n=e);return n?n[0].parser(n[1]):null};return{YEAR:[t.y,t.Y,r],MONTH:[t.b,t.B,t.m,r],DAY:[t.a,t.A,t.d,r],HOUR:[t.H,t.l,t.p,t.P,function(t,r,e,n){var o,a,u,i;return r&&(a=e||n)?("pm"===a[0].parser(a[1])&&(u=!0),o=r):o=r||t,o?(i=o[0].parser(o[1]),u&&(i+=12),i):null}],MINUTE:[t.M,r],SECOND:[t.S,r],MILLISECOND:[t.K,r]}},v.findTokens=function(t){for(var r,e,n=v.TOKEN_PREFIX,o=v.getTokenDefinitions(),a=Object.keys(o),u=[];(r=t.indexOf(n,r+1))>=0;)e=t[r+1],-1!==a.indexOf(e)&&u.push({index:r,token:e});return u},v.formatAs=function(t,r){var e,n,o,a,u=y(t),i=v.findTokens(r),f=v.getTokenDefinitions(),c=String(r),s=v.TOKEN_PREFIX;for(o=0,a=i.length;o<a;o++)n=f[e=i[o].token].formatter(u),c=c.replace(new RegExp(s+e,"g"),n);return c},v.prototype.parse=function(t,r){var e,n,o,a,u,i,f,c,s=v.tokenResolver(),l=this.extractTokenValue(t),p=v.DATETIME_PARAM_SEQUENCE,d=r&&r.noBreak,g=[],y=[],m=[];for(e in s)if({}.hasOwnProperty.call(s,e)){for(y.length=0,o=(n=s[e]).splice(n.length-1,1)[0],u=0,c=n.length;u<c;u++)void 0===(a=l[(i=n[u]).name])?y.push(null):y.push([i,a]);if(null==(f=o.apply(this,y))&&!d)break;g[p[e]]=f}return g.length&&this.checkIfOnlyYear(g.length)?m.unshift(g[0],0,1):m.unshift.apply(m,h(g)),m},v.prototype.extractTokenValue=function(t){var r,e,n,o,a,u,i,f=this.format,c=v.getTokenDefinitions(),s=v.TOKEN_PREFIX,l=v.findTokens(f),p={};a=String(f);var d=l.map((function(t){return t.token})),g=l.length;for(i=g-1;i>=0;i--)(n=l[i].index)+1!==a.length-1?(void 0===r&&(r=a.length),o=a.substring(n+2,r),a=a.substring(0,n+2)+RegExp.escape(o)+a.substring(r,a.length),r=n):r=n;for(i=0;i<g;i++)e=l[i],a=a.replace(s+e.token,c[e.token].extract());var h=(null==t?void 0:t.match(new RegExp(a)))||[];for(h.shift(),i=0,u=d.length;i<u;i++)p[d[i]]=h[i];return p},v.prototype.getNativeDate=function(t){var r=null,e=!this.format||"string"!=typeof this.format;if(Number.isFinite(t)&&e)r=new Date(t);else if(e)r=new Date(t);else{var n=this.dtParams=this.parse(t);n.length&&(this.nativeDate=new(Date.bind.apply(Date,h([void 0],n))),r=this.nativeDate)}return r},v.prototype.checkIfOnlyYear=function(t){return 1===t&&this.format.match(/y|Y/g).length};var S=function(t){var r=0;return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];e.forEach((function(e,n){t[n]instanceof Array||(t[n]=Array.from({length:r})),t[n].push(e)})),r++}};function O(t){return Array.isArray(t)}var b,A,T,_=function(t){return function(t){return"string"==typeof t}(t)?a.DSV_STR:O(t)&&O(t[0])?a.DSV_ARR:O(t)&&(0===t.length||function(t){return t===Object(t)}(t[0]))?a.FLAT_JSON:null};(A=b||(b={})).MEASURE="measure",A.DIMENSION="dimension",function(t){t.CATEGORICAL="categorical",t.TEMPORAL="temporal",t.BINNED="binned",t.CONTINUOUS="continuous",t.ROWID="__id"}(T||(T={}));var E,N,R=function(){function t(){this._type=T.CATEGORICAL}return Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),t.prototype.parse=function(t){return"number"==typeof t?String(t):t},t}(),D=function(){function t(){this._type=T.CONTINUOUS}return Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),t.prototype.parse=function(t){return t||0===t?("string"==typeof t&&t.includes(",")&&(t=t.replace(/,/g,"")),Number(t)):NaN},t}();(N=E||(E={})).SELECT="select",N.GROUPBY="groupBy",N.PROJECT="project",N.SPLIT="split",N.SORT="sort",N.CALCULATE="calculate_variable";var M=function(){function t(){this._type=T.TEMPORAL}return Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),t.prototype.parse=function(t,r){var e="default";if(this._dtf={},t){var n=t;r&&"string"==typeof r?(n=String(t),e=r,this._dtf&&this._dtf[e]||(this._dtf[e]=new v(e))):(n=Number(t),this._dtf&&this._dtf.default||(this._dtf.default=new v));var o=this._dtf[e].getNativeDate(n);return o?o.getTime():NaN}return NaN},t}(),P=function(){function t(){this.store=new Map,this.parsers(this._getDefaultParsers())}return t.prototype._getDefaultParsers=function(){return[new R,new D,new M]},t.prototype.parsers=function(t){var r=this;return t.forEach((function(t){return r.register(t)})),this.store},t.prototype.register=function(t){return this.store.set(t._type,t),this},t.prototype.unregister=function(t){return this.store.delete(t._type),this},t.prototype.get=function(t){return t&&this.store.has(t)?this.store.get(t):null},t}(),x=null||new P,C=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,a=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=a.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return u},w=function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(C(arguments[r]));return t};var j=function(t,r,e){if(!Array.isArray(r))throw new Error("Schema missing or is in an unsupported format");var n=r.map((function(t){return t.name}));e=Object.assign({},{firstRowHeader:!0},e);var o=[[]],a=S(o),u=n;e.firstRowHeader&&(u=t.splice(0,1)[0]);var i=u.reduce((function(t,r,e){var n;return Object.assign(t,((n={})[r]=e,n)),t}),{});return t.forEach((function(t){var e=[];return r.forEach((function(r){var n=r.name,o=r.type,a=r.format,u=void 0===a?function(t){return t}:a,f=r.subtype,c=void 0===f?T.CATEGORICAL:f;o===b.MEASURE&&(c=T.CONTINUOUS);var s=x.get(c),l=i[n],p=s?s.parse(t[l],u):t[l];e.push(p)})),a.apply(void 0,w(e))})),{data:o,schema:r}};var I=function(t,r,e){if((e=Object.assign({},{firstRowHeader:!0,fieldSeparator:","},e)).fieldSeparator){var n=d(e.fieldSeparator);return j(n.parseRows(t),r,e)}return{schema:[],data:[]}},U=function(){function t(){this._type=a.DSV_STR}return Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),t.prototype.convert=function(t,r,e){return I(t,r,e)},t}(),F=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,a=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=a.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return u},H=function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(F(arguments[r]));return t};var L=function(t,r){if(!Array.isArray(r))throw new Error("Schema missing or is in an unsupported format");var e,n={},o=0,a=[[]],u=S(a);return t.forEach((function(t){var a=[];r.forEach((function(r){var u=r.name,i=r.type,f=r.format,c=void 0===f?function(t){return t}:f,s=r.subtype,l=void 0===s?T.CATEGORICAL:s;i===b.MEASURE&&(l=T.CONTINUOUS);var p=x.get(l);u in n?e=n[u]:(n[u]=o++,e=o-1);var d=p?p.parse(t[u],c):t[u];a[e]=d})),u.apply(void 0,H(a))})),{data:a,schema:r}},Y=function(){function t(){this._type=a.FLAT_JSON}return Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),t.prototype.convert=function(t,r){return L(t,r)},t}(),k=function(){function t(){this._type=a.DSV_ARR}return Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),t.prototype.convert=function(t,r,e){return j(t,r,e)},t}();var J=function(t,r,e){var n={FlatJSON:L,DSVStr:I,DSVArr:j},o=_(t);if(!o)throw new Error("Could not detect the data format");return n[o](t,r,e)},V=function(){function t(){this._type=a.AUTO}return Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),t.prototype.convert=function(t,r,e){return J(t,r,e)},t}(),B=function(){function t(){this.store=new Map,this.converters(this._getDefaultConverters())}return t.prototype._getDefaultConverters=function(){return[new U,new k,new Y,new V]},t.prototype.converters=function(t){var r=this;return t.forEach((function(t){return r.store.set(t._type,t)})),this.store},t.prototype.register=function(t){return this.store.set(t._type,t),this},t.prototype.unregister=function(t){return this.store.delete(t._type),this},t.prototype.get=function(t){return t&&this.store.has(t)?this.store.get(t):null},t}(),G=function(){var t=null;return t||new B}(),K=function(t){var r=t.data,e=t.schema,n=t.options,o=G.get(n.dataFormat);return o?o.convert(r,e,n):{data:[],schema:e}},W=self,X=function(t,r){var e;e=r instanceof Error?{error:r.message||String(r),data:null}:{error:null,data:r},W.postMessage({reqId:t,data:e})};W.addEventListener("message",(function(t){var r=t.data,e=r.reqId,n=r.type,o=r.data;switch(n){case"transform-data":!function(t,r){try{X(t,K(r))}catch(r){X(t,r)}}(e,o)}}))}]);