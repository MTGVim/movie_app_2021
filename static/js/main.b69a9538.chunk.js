(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(20),a=s.n(c),i=(s(27),s(6)),r=s(2),j=(s(28),s(1)),o=function(){return Object(j.jsxs)("div",{className:"about__container",children:[Object(j.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(j.jsx)("span",{children:"- George Orwell, 1984"})]})},l=s(11),m=s.n(l),u=s(21),b=s(5),d=s(22),O=s.n(d),x=(s(49),function(e){e.id;var t=e.year,s=e.title,n=e.summary,c=e.poster,a=e.genres;return Object(j.jsx)("div",{className:"movie",children:Object(j.jsxs)(i.b,{to:"/movie-detail",state:{year:t,title:s,summary:n,poster:c,genres:a},children:[Object(j.jsx)("img",{src:c,alt:s,title:s}),Object(j.jsxs)("div",{className:"movie__data",children:[Object(j.jsx)("h3",{className:"movie__title",children:s}),Object(j.jsx)("h5",{className:"movie__year",children:t}),Object(j.jsx)("ul",{className:"movie__genres",children:a.map((function(e,t){return Object(j.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})})}),h=(s(50),function(){var e=Object(n.useState)({movies:[],isLoading:!0}),t=Object(b.a)(e,2),s=t[0],c=s.isLoading,a=s.movies,i=t[1],r=function(){var e=Object(u.a)(m.a.mark((function e(){var t,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,s=t.data.data.movies,i({movies:s,isLoading:!1});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(j.jsx)("section",{className:"container",children:c?Object(j.jsx)("div",{children:"Loading..."}):Object(j.jsx)("div",{className:"movies",children:a.map((function(e){return Object(j.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}),v=(s(51),function(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(i.b,{to:"/",children:"Home"}),Object(j.jsx)(i.b,{to:"/about",children:"About"})]})}),f=function(){var e=Object(r.e)(),t=Object(r.f)();return Object(n.useEffect)((function(){e.state||t("/")}),[e.state,t]),e.state?Object(j.jsx)("span",{children:e.state.title}):null},p=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/",exact:!0,element:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(h,{})]})}),Object(j.jsx)(r.a,{path:"/about",exact:!0,element:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(o,{})]})}),Object(j.jsx)(r.a,{path:"/movie-detail",element:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{})," ",Object(j.jsx)(f,{})]})})]})})};a.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.b69a9538.chunk.js.map