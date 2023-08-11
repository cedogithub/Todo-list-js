(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{O:()=>Z});const e=t=>({name:t,todos:[]}),n=(t,e,n,r)=>({title:t,description:e,dueDate:n,priority:r});function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(t){a(1,arguments);var e=o(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function d(t){a(1,arguments);var e=o(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=u(r),d=new Date(0);d.setUTCFullYear(n,0,4),d.setUTCHours(0,0,0,0);var s=u(d);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}var s={};function l(){return s}function c(t,e){var n,r,u,d,s,c,m,h;a(1,arguments);var f=l(),g=i(null!==(n=null!==(r=null!==(u=null!==(d=null==e?void 0:e.weekStartsOn)&&void 0!==d?d:null==e||null===(s=e.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==r?r:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=o(t),w=v.getUTCDay(),y=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-y),v.setUTCHours(0,0,0,0),v}function m(t,e){var n,r,u,d,s,m,h,f;a(1,arguments);var g=o(t),v=g.getUTCFullYear(),w=l(),y=i(null!==(n=null!==(r=null!==(u=null!==(d=null==e?void 0:e.firstWeekContainsDate)&&void 0!==d?d:null==e||null===(s=e.locale)||void 0===s||null===(m=s.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==r?r:null===(h=w.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==n?n:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,y),b.setUTCHours(0,0,0,0);var p=c(b,e),T=new Date(0);T.setUTCFullYear(v,0,y),T.setUTCHours(0,0,0,0);var C=c(T,e);return g.getTime()>=p.getTime()?v+1:g.getTime()>=C.getTime()?v:v-1}function h(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const f=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return h("yy"===e?r%100:r,e.length)},g=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):h(n+1,2)},v=function(t,e){return h(t.getUTCDate(),e.length)},w=function(t,e){return h(t.getUTCHours()%12||12,e.length)},y=function(t,e){return h(t.getUTCHours(),e.length)},b=function(t,e){return h(t.getUTCMinutes(),e.length)},p=function(t,e){return h(t.getUTCSeconds(),e.length)},T=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return h(Math.floor(r*Math.pow(10,n-3)),e.length)};var C={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return f(t,e)},Y:function(t,e,n,r){var a=m(t,r),o=a>0?a:1-a;return"YY"===e?h(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):h(o,e.length)},R:function(t,e){return h(d(t),e.length)},u:function(t,e){return h(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return h(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return h(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return g(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return h(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var u=function(t,e){a(1,arguments);var n=o(t),r=c(n,e).getTime()-function(t,e){var n,r,o,u,d,s,h,f;a(1,arguments);var g=l(),v=i(null!==(n=null!==(r=null!==(o=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(d=e.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==r?r:null===(h=g.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==n?n:1),w=m(t,e),y=new Date(0);return y.setUTCFullYear(w,0,v),y.setUTCHours(0,0,0,0),c(y,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(u,{unit:"week"}):h(u,e.length)},I:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=u(e).getTime()-function(t){a(1,arguments);var e=d(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),u(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):h(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v(t,e)},D:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):h(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return h(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return h(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return h(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):p(t,e)},S:function(t,e){return T(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return M(a);case"XXXX":case"XX":return D(a);default:return D(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return M(a);case"xxxx":case"xx":return D(a);default:return D(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+S(a,":");default:return"GMT"+D(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+S(a,":");default:return"GMT"+D(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return h(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return h((r._originalDate||t).getTime(),e.length)}};function S(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+h(o,2)}function M(t,e){return t%60==0?(t>0?"-":"+")+h(Math.abs(t)/60,2):D(t,e)}function D(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+h(Math.floor(a/60),2)+n+h(a%60,2)}const k=C;var x=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},P=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},U={p:P,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return x(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",x(a,e)).replace("{{time}}",P(o,e))}};const E=U;var W=["D","DD"],q=["YY","YYYY"];function j(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var O={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var L,N={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},F={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function H(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function z(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d);return i=t.valueCallback?t.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const A={code:"en-US",formatDistance:function(t,e,n){var r,a=O[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:N,formatRelative:function(t,e,n,r){return F[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:H({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:H({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:H({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:H({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:H({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(L={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(L.matchPattern);if(!n)return null;var r=n[0],a=t.match(L.parsePattern);if(!a)return null;var o=L.valueCallback?L.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var Q=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,G=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,X=/^'([^]*?)'?$/,B=/''/g,J=/[a-zA-Z]/;function I(t,e,n){var u,d,s,c,m,h,f,g,v,w,y,b,p,T,C,S,M,D;a(2,arguments);var x=String(e),P=l(),U=null!==(u=null!==(d=null==n?void 0:n.locale)&&void 0!==d?d:P.locale)&&void 0!==u?u:A,O=i(null!==(s=null!==(c=null!==(m=null!==(h=null==n?void 0:n.firstWeekContainsDate)&&void 0!==h?h:null==n||null===(f=n.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:P.firstWeekContainsDate)&&void 0!==c?c:null===(v=P.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==s?s:1);if(!(O>=1&&O<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=i(null!==(y=null!==(b=null!==(p=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(C=n.locale)||void 0===C||null===(S=C.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==p?p:P.weekStartsOn)&&void 0!==b?b:null===(M=P.locale)||void 0===M||null===(D=M.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==y?y:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var L=o(t);if(!function(t){if(a(1,arguments),!function(t){return a(1,arguments),t instanceof Date||"object"===r(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=o(t);return!isNaN(Number(e))}(L))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(L),F=function(t,e){return a(2,arguments),function(t,e){a(2,arguments);var n=o(t).getTime(),r=i(e);return new Date(n+r)}(t,-i(e))}(L,N),H={firstWeekContainsDate:O,weekStartsOn:Y,locale:U,_originalDate:L};return x.match(G).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,E[e])(t,U.formatLong):t})).join("").match(Q).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(X))?o[1].replace(B,"'"):a;var u,d=k[i];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===q.indexOf(u))||j(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==W.indexOf(t)}(r)||j(r,e,String(t)),d(F,r,U.localize,H);if(i.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}const R=t=>{const e=document.querySelector(".project-list");e.innerHTML="",t.forEach(((t,n)=>{const r=document.createElement("li"),a=document.createElement("i");a.classList.add("fa-solid","fa-list-ul","fa-1x","list-icon"),r.appendChild(a);const o=document.createElement("span");o.textContent=t.name,r.appendChild(o),r.dataset.projectIndex=n,e.appendChild(r)})),localStorage.setItem("projects",JSON.stringify(t))},$=(t,e)=>{const n=document.querySelector(".todo-list");n.innerHTML="";const r=document.createElement("div");r.classList.add("project-title"),r.textContent=e.name,n.appendChild(r),t.forEach((r=>{const a=document.createElement("li");a.classList.add("todo-item");const o=document.createElement("div");o.classList.add("todo-title"),o.textContent=r.title,a.appendChild(o);const i=document.createElement("div");i.classList.add("todo-info");const u=document.createElement("p");u.textContent=`Description: ${r.description}`,i.appendChild(u);const d=document.createElement("p"),s=I(new Date(r.dueDate),"MMM d, yyyy");d.textContent=`Due Date: ${s}`,i.appendChild(d);const l=document.createElement("p");l.textContent=`Priority: ${r.priority}`,i.appendChild(l),a.appendChild(i);const c=document.createElement("i");c.classList.add("fas","fa-trash-alt","fa-1x"),c.addEventListener("click",(()=>m(r))),a.appendChild(c),n.appendChild(a);const m=n=>{console.log(`Deleting todo: ${n.title}`);const r=t.filter((t=>t!==n));e.todos=r,$(r,e),Z(e)}}))},_=localStorage.getItem("projects"),V=e("Default Project"),K=_?JSON.parse(_):[V],Z=t=>{const e=JSON.parse(localStorage.getItem("projects"))||[],n=e.findIndex((e=>e.name===t.name));-1!==n&&(e[n].todos=t.todos),localStorage.setItem("projects",JSON.stringify(e))};document.querySelector(".project-list").addEventListener("click",(t=>{const e=t.target.closest("li");if(e){const t=e.dataset.projectIndex;gt=K[t],$(gt.todos,gt)}}));const tt=n("Finish Project","Finish the todo list project","2023-07-31","High"),et=n("Study JavaScript","Study for at least 1 hour","2023-07-25","Medium");V.todos.push(tt,et);const nt=document.querySelector("#add-project-btn"),rt=document.querySelector("#project-form"),at=document.querySelector("#project-title"),ot=document.querySelector("#project-cancel"),it=document.querySelector("#add-todo-btn"),ut=document.querySelector(".todo-modal"),dt=document.querySelector(".todo-modal .close"),st=document.querySelector("#todo-form"),lt=document.querySelector("#todo-title"),ct=document.querySelector("#todo-description"),mt=document.querySelector("#todo-dueDate"),ht=document.querySelector("#todo-priority"),ft=document.querySelector(".overlay");let gt=V;const vt=t=>{document.querySelector(t).classList.toggle("hidden")};nt.addEventListener("click",(()=>{console.log("Add Project button clicked"),nt.classList.toggle("hidden"),vt("#project-form")})),rt.addEventListener("submit",(t=>{t.preventDefault(),console.log("Project form submitted");const n=at.value,r=e(n);K.push(r),console.log("Updated projects array:",K),R(K),at.value="",vt("#project-form"),nt.classList.toggle("hidden"),localStorage.setItem("projects",JSON.stringify(K))})),ot.addEventListener("click",(t=>{t.preventDefault(),console.log("Cancel button clicked"),vt("#project-form"),nt.classList.toggle("hidden")})),it.addEventListener("click",(()=>{console.log("Add Todo button clicked"),ut.style.display="block",ft.style.display="block"})),dt.addEventListener("click",(()=>{console.log("Todo modal close button clicked"),ut.style.display="none",ft.style.display="none"})),window.addEventListener("click",(t=>{t.target===ut&&(console.log("Clicked outside todo modal content"),ut.style.display="none",ft.style.display="none")})),st.addEventListener("submit",(t=>{t.preventDefault(),console.log("Todo form submitted");const e=lt.value,r=ct.value,a=mt.value,o=ht.value,i=n(e,r,a,o);gt.todos.push(i),console.log("Updated todos array:",gt.todos),$(gt.todos,gt),lt.value="",ct.value="",mt.value="",ht.value="high",ut.style.display="none",ft.style.display="none",Z(gt)})),document.querySelector("#todo-cancel").addEventListener("click",(t=>{t.preventDefault(),console.log("Todo form canceled"),ut.style.display="none",ft.style.display="none"})),R(K),$(V.todos,V)})();