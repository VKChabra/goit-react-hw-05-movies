"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[85,852],{830:function(t,e,n){n.r(e);var r=n(871),c=n(501),u=n(857),o=n(184);e.default=function(t){var e=t.movies,n=(0,r.TH)();return(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.title;return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:n.pathname+n.search},children:r})},e)}))}),(0,o.jsx)(r.j3,{}),0===(null===e||void 0===e?void 0:e.length)&&"?query="!==n.search&&"/movies"===n.pathname&&(0,o.jsx)("div",{className:u.Z.main,children:"Sorry, there are no results"})]})}},23:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),c=n(885),u=n(757),o=n.n(u),a=n(894),i=n(791),s=n(830),p="trending_title__jcV7A",f=n(184),h=function(){var t=(0,i.useState)([]),e=(0,c.Z)(t,2),n=e[0],u=e[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,a.wr)();case 3:e=t.sent,n=e.results,u(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:p,children:"Trending"}),(0,f.jsx)(s.default,{movies:n})]})}},894:function(t,e,n){n.d(e,{uV:function(){return p},Y5:function(){return s},Hx:function(){return f},wr:function(){return a},qF:function(){return i}});var r=n(861),c=n(757),u=n.n(c),o="16b99e0971797b79067f0be2bdb79de1",a=function(){var t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(e)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=Trending.31a42d6b.chunk.js.map