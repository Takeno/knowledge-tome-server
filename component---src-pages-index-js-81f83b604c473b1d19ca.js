webpackJsonp([35783957827783],{215:function(e,t,n){function r(e,t){var n=a(e),r=a(t),s=n.getTime()-n.getTimezoneOffset()*o,i=r.getTime()-r.getTimezoneOffset()*o;return Math.round((s-i)/u)}var a=n(224),o=6e4,u=864e5;e.exports=r},216:function(e,t,n){function r(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=n||{},u=o.locale,s=p.format.formatters,i=p.format.formattingTokensRegExp;u&&u.format&&u.format.formatters&&(s=u.format.formatters,u.format.formattingTokensRegExp&&(i=u.format.formattingTokensRegExp));var c=l(e);if(!d(c))return"Invalid Date";var f=a(r,s,i);return f(c)}function a(e,t,n){var r,a,u=e.match(n),s=u.length;for(r=0;r<s;r++)a=t[u[r]]||m[u[r]],a?u[r]=a:u[r]=o(u[r]);return function(e){for(var t="",n=0;n<s;n++)t+=u[n]instanceof Function?u[n](e,m):u[n];return t}}function o(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}function u(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;return n+s(a,2)+t+s(o,2)}function s(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}var i=n(217),c=n(218),f=n(106),l=n(13),d=n(219),p=n(223),m={M:function(e){return e.getMonth()+1},MM:function(e){return s(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return s(e.getDate(),2)},DDD:function(e){return i(e)},DDDD:function(e){return s(i(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return c(e)},WW:function(e){return s(c(e),2)},YY:function(e){return s(e.getFullYear(),4).substr(2)},YYYY:function(e){return s(e.getFullYear(),4)},GG:function(e){return String(f(e)).substr(2)},GGGG:function(e){return f(e)},H:function(e){return e.getHours()},HH:function(e){return s(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return s(m.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return s(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return s(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return s(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return s(e.getMilliseconds(),3)},Z:function(e){return u(e.getTimezoneOffset(),":")},ZZ:function(e){return u(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};e.exports=r},217:function(e,t,n){function r(e){var t=a(e),n=u(t,o(t)),r=n+1;return r}var a=n(13),o=n(227),u=n(215);e.exports=r},218:function(e,t,n){function r(e){var t=a(e),n=o(t).getTime()-u(t).getTime();return Math.round(n/s)+1}var a=n(13),o=n(72),u=n(225),s=6048e5;e.exports=r},106:function(e,t,n){function r(e){var t=a(e),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var u=o(r),s=new Date(0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);var i=o(s);return t.getTime()>=u.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}var a=n(13),o=n(72);e.exports=r},107:function(e,t){function n(e){return e instanceof Date}e.exports=n},219:function(e,t,n){function r(e){if(a(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}var a=n(107);e.exports=r},220:function(e,t){function n(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var a=r.concat(t).sort().reverse(),o=new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g");return o}var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=n},221:function(e,t){function n(){function e(e,n,r){r=r||{};var a;return a="string"==typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+a:a+" ago":a}var t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:e}}e.exports=n},222:function(e,t,n){function r(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["AM","PM"],i=["am","pm"],c=["a.m.","p.m."],f={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?s[1]:s[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}},l=["M","D","DDD","d","Q","W"];return l.forEach(function(e){f[e+"o"]=function(t,n){return a(n[e](t))}}),{formatters:f,formattingTokensRegExp:o(f)}}function a(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}var o=n(220);e.exports=r},223:function(e,t,n){var r=n(221),a=n(222);e.exports={distanceInWords:r(),format:a()}},13:function(e,t,n){function r(e,t){if(f(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=t||{},r=n.additionalDigits;r=null==r?p:Number(r);var c=a(e),l=o(c.date,r),m=l.year,h=l.restDateString,g=u(h,m);if(g){var v,y=g.getTime(),D=0;return c.time&&(D=s(c.time)),c.timezone?v=i(c.timezone):(v=new Date(y+D).getTimezoneOffset(),v=new Date(y+D+v*d).getTimezoneOffset()),new Date(y+D+v*d)}return new Date(e)}function a(e){var t,n={},r=e.split(m);if(h.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var a=O.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function o(e,t){var n,r=v[t],a=D[t];if(n=y.exec(e)||a.exec(e)){var o=n[1];return{year:parseInt(o,10),restDateString:e.slice(o.length)}}if(n=g.exec(e)||r.exec(e)){var u=n[1];return{year:100*parseInt(u,10),restDateString:e.slice(u.length)}}return{year:null}}function u(e,t){if(null===t)return null;var n,r,a,o;if(0===e.length)return r=new Date(0),r.setUTCFullYear(t),r;if(n=b.exec(e))return r=new Date(0),a=parseInt(n[1],10)-1,r.setUTCFullYear(t,a),r;if(n=M.exec(e)){r=new Date(0);var u=parseInt(n[1],10);return r.setUTCFullYear(t,0,u),r}if(n=x.exec(e)){r=new Date(0),a=parseInt(n[1],10)-1;var s=parseInt(n[2],10);return r.setUTCFullYear(t,a,s),r}if(n=T.exec(e))return o=parseInt(n[1],10)-1,c(t,o);if(n=w.exec(e)){o=parseInt(n[1],10)-1;var i=parseInt(n[2],10)-1;return c(t,o,i)}return null}function s(e){var t,n,r;if(t=S.exec(e))return n=parseFloat(t[1].replace(",",".")),n%24*l;if(t=E.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*l+r*d;if(t=Y.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return n%24*l+r*d+1e3*a}return null}function i(e){var t,n;return(t=N.exec(e))?0:(t=F.exec(e))?(n=60*parseInt(t[2],10),"+"===t[1]?-n:n):(t=H.exec(e),t?(n=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-n:n):0)}function c(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,o=7*t+n+1-a;return r.setUTCDate(r.getUTCDate()+o),r}var f=n(107),l=36e5,d=6e4,p=2,m=/[T ]/,h=/:/,g=/^(\d{2})$/,v=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],y=/^(\d{4})/,D=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],b=/^-(\d{2})$/,M=/^-?(\d{3})$/,x=/^-?(\d{2})-?(\d{2})$/,T=/^-?W(\d{2})$/,w=/^-?W(\d{2})-?(\d{1})$/,S=/^(\d{2}([.,]\d*)?)$/,E=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,Y=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,O=/([Z+-].*)$/,N=/^(Z)$/,F=/^([+-])(\d{2})$/,H=/^([+-])(\d{2}):?(\d{2})$/;e.exports=r},224:function(e,t,n){function r(e){var t=a(e);return t.setHours(0,0,0,0),t}var a=n(13);e.exports=r},72:function(e,t,n){function r(e){return a(e,{weekStartsOn:1})}var a=n(226);e.exports=r},225:function(e,t,n){function r(e){var t=a(e),n=new Date(0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);var r=o(n);return r}var a=n(106),o=n(72);e.exports=r},226:function(e,t,n){function r(e,t){var n=t?Number(t.weekStartsOn)||0:0,r=a(e),o=r.getDay(),u=(o<n?7:0)+o-n;return r.setDate(r.getDate()-u),r.setHours(0,0,0,0),r}var a=n(13);e.exports=r},227:function(e,t,n){function r(e){var t=a(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}var a=n(13);e.exports=r},115:function(e,t){"use strict";function n(e,t,l){if("string"!=typeof t){if(f){var d=c(t);d&&d!==f&&n(e,d,l)}var p=u(t);s&&(p=p.concat(s(t)));for(var m=0;m<p.length;++m){var h=p[m];if(!(r[h]||a[h]||l&&l[h])){var g=i(t,h);try{o(e,h,g)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,u=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,f=c&&c(Object);e.exports=n},130:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=r(s),c=n(216),f=r(c),l=n(74),d=(r(l),function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return i.default.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer",style:{display:"block"},className:"card large"},i.default.createElement("div",{className:"card-content"},i.default.createElement("div",{className:"media"},i.default.createElement("div",{className:"media-content"},i.default.createElement("h4",{className:"title is-4 no-padding no-margin"},this.props.title),i.default.createElement("p",{className:"subtitle is-6 no-margin no-padding"},(0,f.default)(this.props.pubDate,"D MMM")," -"," ",this.props.blogTitle))),i.default.createElement("div",{className:"content is-clipped",dangerouslySetInnerHTML:{__html:this.props.description}})))},t}(s.PureComponent));t.default=d,e.exports=t.default},136:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=r(s),c=n(74),f=(r(c),n(130)),l=r(f),d=function(e){function t(){var n,r,u;a(this,t);for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return n=r=o(this,e.call.apply(e,[this].concat(i))),r.state={isLoading:!0,error:null,articles:[]},u=n,o(r,u)}return u(t,e),t.prototype.componentDidMount=function(){var e=this;fetch("https://feed.tolaria.academy/articles?lang=eng,ita&channels=06d199,429ab1,0200fe,b47fa4,2fe71b,edc248,28dfdb,d11cf3,b7facc,93d252").then(function(e){return e.json()}).then(function(t){return e.setState({isLoading:!1,articles:t,error:null})}).catch(function(t){return e.setState({isLoading:!1,error:t.message||"Errore nel caricamento",articles:[]})})},t.prototype.renderArticles=function(){return this.state.isLoading?i.default.createElement("div",{className:"row has-text-centered"},i.default.createElement("span",{className:"icon"},i.default.createElement("i",{className:"fas fa-3x fa-spinner fa-pulse"}))):this.state.error?i.default.createElement("div",{className:"row notification is-danger"},this.state.error):i.default.createElement("div",{className:"row columns is-multiline"},this.state.articles.map(function(e){return i.default.createElement("div",{key:e.link,className:"column is-half"},i.default.createElement(l.default,e))}))},t.prototype.render=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("section",{className:"hero is-dark"},i.default.createElement("div",{className:"hero-body has-margin-top-md has-margin-bottom-md"},i.default.createElement("div",{className:"container"},i.default.createElement("h1",{className:"title is-1 is-spaced"},"Tolaria Academy"),i.default.createElement("p",{className:"subtitle"},"Read the last news from Magic: The Gathering's world & Magic Judge's world.")))),i.default.createElement("article",{className:"container section"},this.renderArticles()))},t}(s.PureComponent);t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-81f83b604c473b1d19ca.js.map