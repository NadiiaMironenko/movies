(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[4],{31:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return l}));var a=n(38),r=n.n(a),c="https://api.themoviedb.org/3",o="3860fcb92da4251802f0dff28fa48025";function i(){return r.a.get("".concat(c,"/trending/movie/day?api_key=").concat(o))}function s(t){return r.a.get("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(t))}function u(t){return r.a.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(o))}function m(t){return r.a.get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(o)).then((function(t){return t.data}))}function l(t){return r.a.get("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(o)).then((function(t){return t.data}))}},36:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(7),r=n(37),c=n.n(r),o=n(1);function i(t){var e=t.films,n=t.location;return console.log(n),Object(o.jsx)("ul",{className:c.a.items,children:e.map((function(t){var e=t.id,r=t.popularity,i=t.poster_path,s=t.title;return Object(o.jsx)("li",{children:Object(o.jsxs)(a.b,{to:{pathname:"/movies/".concat(e),state:{from:n}},children:[Object(o.jsx)("img",{className:c.a.item,src:"https://image.tmdb.org/t/p/original".concat(i),alt:""}),Object(o.jsx)("h2",{children:s}),Object(o.jsxs)("p",{children:["Rating: ",r]})]})},e)}))})}},37:function(t,e,n){t.exports={items:"MoviesItems_items__1crDP",item:"MoviesItems_item__2XKoL"}},68:function(t,e,n){t.exports={search_form:"SearchForm_search_form__2penN",search_form_input:"SearchForm_search_form_input__cIPyR",search_form_button:"SearchForm_search_form_button__2NuOk"}},75:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var a=n(32),r=n(33),c=n(35),o=n(34),i=n(0),s=n(66),u=n.n(s),m=n(68),l=n.n(m),f=n(1),h=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:""},t.onSubmit=function(e){e.preventDefault(),""!==t.state.name.trim?t.props.onSubmit(t.state.name):u()({title:"error",text:"Write your query",icon:"error"})},t.handleInput=function(e){t.setState({name:e.target.value.toLowerCase()})},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:l.a.search_form,onSubmit:this.onSubmit,children:[Object(f.jsx)("label",{children:"Enter the films name"}),Object(f.jsx)("input",{className:l.a.search_form_input,type:"text",onChange:this.handleInput}),Object(f.jsx)("button",{className:l.a.search_form_button,type:"submit",children:"Search"})]})})}}]),n}(i.Component),p=n(31),b=n(36),d=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={films:[],name:"",status:"idle"},t.onHandleSubmit=function(e){t.setState({name:e})},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.location.search.split("=")[1];e&&Object(p.b)(e).then((function(e){t.setState({films:e.data.results,status:"resolve"})}))}},{key:"componentDidUpdate",value:function(t,e){var n=this;e.name!==this.state.name&&Object(p.b)(this.state.name).then((function(t){n.setState({films:t.data.results,status:"resolve"}),n.props.history.push("".concat(n.props.match.url,"?query=").concat(n.state.name))}))}},{key:"render",value:function(){var t=this.state.films;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h,{onSubmit:this.onHandleSubmit}),Object(f.jsx)(b.a,{location:this.props.location,films:t})]})}}]),n}(i.Component)}}]);
//# sourceMappingURL=movies-page.2672c578.chunk.js.map