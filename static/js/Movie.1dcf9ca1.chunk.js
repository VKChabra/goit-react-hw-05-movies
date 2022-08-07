"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[816],{3352:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(5861),a=n(885),c=n(7757),s=n.n(c),i=n(2791),o=n(501),u=n(6871),p=n(1894),l=n(705),v=n(4857),d={backBtn:"movie_backBtn__HlPoP",info:"movie_info__1cqYG",textInfo:"movie_textInfo__ShPUO",wrapper:"movie_wrapper__FNmjx"},f=n(184),h=function(){var e=(0,u.UO)(),t=(0,i.useState)(null),n=(0,a.Z)(t,2),c=n[0],h=n[1],m=(0,u.TH)(),x=(0,u.s0)();(0,i.useEffect)((function(){(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.Y5)(e.movieId);case 2:n=t.sent,h(n);case 4:case"end":return t.stop()}}),t)})))()}),[e.movieId]);return(0,f.jsxs)("div",{className:v.Z.main,children:[!c&&(0,f.jsx)(l.Z,{}),(0,f.jsx)("button",{type:"button",onClick:function(){var e,t;x(null!==(e=null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},className:d.backBtn,children:"Go back"}),c&&(0,f.jsxs)("div",{className:d.info,children:[(0,f.jsx)("img",{src:c.poster_path?"https://image.tmdb.org/t/p/w300/".concat(c.poster_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png",alt:c.title}),(0,f.jsxs)("div",{className:d.textInfo,children:[(0,f.jsxs)("h1",{className:d.title,children:[c.title,"(",new Date(c.release_date).getFullYear(),")"]}),(0,f.jsxs)("div",{className:d.wrapper,children:["User score: ",Math.floor(10*c.vote_average),"%"]}),(0,f.jsxs)("div",{className:d.wrapper,children:[(0,f.jsx)("h2",{children:"Overview:"}),(0,f.jsx)("div",{className:d.wrapper,children:c.overview})]}),(0,f.jsxs)("div",{className:d.wrapper,children:[(0,f.jsx)("h2",{children:"Genres:"}),(0,f.jsx)("div",{className:d.wrapper,children:!c&&c.genres.map((function(e){return e.name})).join(", ")})]})]})]}),(0,f.jsxs)("div",{className:"moreInfo",children:[(0,f.jsx)("div",{className:d.wrapper,children:"Additional information:"}),(0,f.jsx)(o.rU,{to:"cast",state:m.state,children:"Cast"})," ",(0,f.jsx)(o.rU,{to:"reviews",state:m.state,children:"Reviews"})]}),(0,f.jsx)(u.j3,{})]})}},1894:function(e,t,n){n.d(t,{uV:function(){return h},Y5:function(){return d},Hx:function(){return x},wr:function(){return u},qF:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),i=n.n(s),o="16b99e0971797b79067f0be2bdb79de1";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/trending/movie/day?api_key=".concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/movie/".concat(t,"?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/movie/".concat(t,"/credits?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=Movie.1dcf9ca1.chunk.js.map