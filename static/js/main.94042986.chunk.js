(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{143:function(e,t,a){e.exports=a(447)},147:function(e,t,a){},148:function(e,t,a){},165:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},447:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(20),c=a.n(o),s=(a(147),a(30)),i=a(3);a(148);var l=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"\ubd90\ubc14\uc57c"'),r.a.createElement("span",null,"-BLACK PINK"))},m=a(77),u=a.n(m),v=a(136),p=a(51),d=a(52),E=a(54),f=a(53),y=a(137),h=a.n(y);a(165);var b=function(e){var t=e.title,a=e.year,n=e.summary,o=e.poster,c=e.genres;return r.a.createElement("div",{className:"Movie"},r.a.createElement(s.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:o,genres:c}}},r.a.createElement("img",{src:o,alt:t,title:t}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"}," ",t),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180),"..."))))},g=(a(170),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLodading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loding...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(171);var _=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/abot"},"About"))},N=(a(172),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0==t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component));var j=function(){return r.a.createElement(s.a,null,r.a.createElement(_,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g}),r.a.createElement(i.a,{path:"/about",component:l}),r.a.createElement(i.a,{path:"/movie-detail",component:N}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.94042986.chunk.js.map