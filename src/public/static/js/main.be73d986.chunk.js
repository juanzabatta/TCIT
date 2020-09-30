(this["webpackJsonpreact-redux-posts"]=this["webpackJsonpreact-redux-posts"]||[]).push([[0],{25:function(e,t,a){e.exports=a(58)},30:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(30),a(6)),u=a(1),s=a(9),i=a(3),p=a(4),m=a.n(p),E=a(7),d=a(10),f=a.n(d),b="http://localhost:3000/api/post/",S={array:[],filter:""};a(55);var O=function(){var e=Object(i.b)(),t=Object(n.useState)({name:""}),a=Object(s.a)(t,2),c=a[0],o=a[1];return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"searchPost"},r.a.createElement("form",{id:"formSearchPost",onSubmit:function(t){var a;t.preventDefault(),e((a=c.name,function(){var e=Object(E.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"SET_FILTER_SUCCESS",payload:a})}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))}},r.a.createElement("input",{type:"search",name:"name",onChange:function(e){o(Object(u.a)(Object(u.a)({},c),{},Object(l.a)({},e.target.name,e.target.value)))},placeholder:"Filtro de nombre"}),r.a.createElement("input",{type:"submit",value:"Buscar"}))))},h=(a(56),!0),v=function(){var e=Object(i.b)();h&&(e(function(){var e=Object(E.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(b);case 3:n=e.sent,t({type:"GET_POST_SUCCESS",payload:n.data.posts}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()),h=!1);var t=Object(i.c)((function(e){return e.posts.filter})),a=[],n=Object(i.c)((function(e){return e.posts.array}));return""!==t&&n.length>0?n.forEach((function(e){e.name.toLowerCase()===t.toLowerCase()&&a.push(e)})):a=n,r.a.createElement("section",{className:"listPost"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"Descripci\xf3n"),r.a.createElement("th",null,"Acci\xf3n"))),r.a.createElement("tbody",null,0===a.length?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3",className:"notResults"},"Not Results.")):a.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.description),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e((a=t.id,function(){var e=Object(E.a)(m.a.mark((function e(t,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete(b+"delete/"+a);case 3:r=e.sent,t({type:"DELETE_POST_SUCCESS",payload:r.data.post}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()));var a}},"Eliminar")))})))))},y=(a(57),function(){var e=Object(i.b)(),t=Object(n.useState)({name:"",description:""}),a=Object(s.a)(t,2),c=a[0],o=a[1],p=function(e){o(Object(u.a)(Object(u.a)({},c),{},Object(l.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"FormPost"},r.a.createElement("form",{id:"fromAddPost",onSubmit:function(t){var a;t.preventDefault(),c.name.length>0&&c.description.length>0?(e((a=c,function(){var e=Object(E.a)(m.a.mark((function e(t,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post(b,a);case 3:r=e.sent,console.log(r.data.post),t({type:"SET_POST_SUCCESS",payload:r.data.post}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}())),document.getElementById("fromAddPost").reset()):alert("Por favor completa los campos.")}},r.a.createElement("input",{type:"text",name:"name",onChange:p,placeholder:"Nombre"}),r.a.createElement("input",{type:"text",name:"description",onChange:p,placeholder:"Descripci\xf3n"}),r.a.createElement("input",{type:"submit",value:"Agregar"}))))}),j=a(5),g=a(24),C=Object(j.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POST_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{array:t.payload});case"SET_POST_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{array:e.array.concat(t.payload)});case"DELETE_POST_SUCCESS":var a=e.array.filter((function(e){return e.id!==t.payload.id}));return Object(u.a)(Object(u.a)({},e),{},{array:a});case"SET_FILTER_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{filter:t.payload});default:return e}}}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d;var T=function(){var e=Object(j.e)(C,_(Object(j.a)(g.a)));return r.a.createElement(i.a,{store:e},r.a.createElement(O,null),r.a.createElement(v,null),r.a.createElement(y,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.be73d986.chunk.js.map