"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{126:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(861),c=e(885),u=e(757),o=e.n(u),a=e(894),i=e(791),s=e(871),p="reviews_author__Sglo3",f=e(184),h=function(){var t,n=(0,i.useState)(""),e=(0,c.Z)(n,2),u=e[0],h=e[1],v=(0,s.UO)();(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=h,t.next=3,(0,a.Hx)(v.movieId);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[v.movieId]);var l=u.results;return(0,f.jsxs)(f.Fragment,{children:[u&&l.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("div",{className:p,children:["Author: ",e]}),r]},n)})),0===(null===u||void 0===u||null===(t=u.results)||void 0===t?void 0:t.length)&&(0,f.jsx)("div",{children:"Sorry but there are no reviews yet"})]})}},894:function(t,n,e){e.d(n,{uV:function(){return p},Y5:function(){return s},Hx:function(){return f},wr:function(){return a},qF:function(){return i}});var r=e(861),c=e(757),u=e.n(c),o="16b99e0971797b79067f0be2bdb79de1",a=function(){var t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(n)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o)).then((function(t){if(!0===t.ok)return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=Reviews.6efb081a.chunk.js.map