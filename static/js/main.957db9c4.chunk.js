(window.webpackJsonphooked=window.webpackJsonphooked||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=(n(10),n(1)),s=n(4),l=(n(11),function(e){return a.a.createElement("header",{className:"App-header"},a.a.createElement("h2",null,e.text))}),u=function(e){var t=e.movie,n="N/A"===t.Poster?"https://cdn.browshot.com/static/images/not-found.png":t.Poster;return a.a.createElement("div",{className:"movie"},a.a.createElement("h2",null,t.Title),a.a.createElement("div",null,a.a.createElement("img",{width:"200",alt:"The movie titled: ".concat(t.Title),src:n})),a.a.createElement("p",null,"(",t.Year,")"))},m=function(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1];return a.a.createElement("form",{className:"search"},a.a.createElement("input",{value:o,onChange:function(e){c(e.target.value)},type:"text"}),a.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(o),c("")},type:"submit",value:"SEARCH"}))};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={loading:!0,movies:[],errorMessage:null},h=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return E({},e,{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return E({},e,{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return E({},e,{loading:!1,errorMessage:t.error});default:return e}},d=function(){var e=Object(r.useReducer)(h,f),t=Object(i.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){fetch("https://www.omdbapi.com/?s=wars&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){o({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search})}))}),[]);var c=n.movies,s=n.errorMessage,p=n.loading;return a.a.createElement("div",{className:"App"},a.a.createElement(l,{text:"MOVIE SEARCH"}),a.a.createElement(m,{search:function(e){o({type:"SEARCH_MOVIES_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?o({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search}):o({type:"SEARCH_MOVIES_FAILURE",error:e.Error})}))}}),a.a.createElement("p",{className:"App-intro"},"Search for your favourite movies"),a.a.createElement("div",{className:"movies"},p&&!s?a.a.createElement("span",null,"LOADING... "):s?a.a.createElement("div",{className:"errorMessage"},s):c.map((function(e,t){return a.a.createElement(u,{key:"".concat(t,"-").concat(e.Title),movie:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.957db9c4.chunk.js.map