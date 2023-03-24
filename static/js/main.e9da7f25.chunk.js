(this["webpackJsonpcooking-ninja"]=this["webpackJsonpcooking-ninja"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(31),s=c.n(r),i=(c(38),c(13)),j=c(4),o=(c(39),c(5)),l=(c(40),c(1));function u(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(j.f)();return Object(l.jsx)("div",{className:"searchbar",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("/search?q=".concat(c))},children:[Object(l.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(l.jsx)("input",{id:"search",type:"text",onChange:function(e){return a(e.target.value)},required:!0})]})})}function b(){return Object(l.jsx)("div",{className:"navbar",children:Object(l.jsxs)("nav",{children:[Object(l.jsx)(i.b,{to:"/",className:"brand",children:Object(l.jsx)("h1",{children:"Cooking Recipes"})}),Object(l.jsx)(u,{}),Object(l.jsx)(i.b,{to:"/create",children:"Create Recipe"})]})})}var d=c(18),O=c(28);c(55);O.a.initializeApp({apiKey:"AIzaSyAADzFkcenhn9bnDDEU0a5GfHGQx-VXtFY",authDomain:"new-cooking-recipes-aafb8.firebaseapp.com",projectId:"new-cooking-recipes-aafb8",storageBucket:"new-cooking-recipes-aafb8.appspot.com",messagingSenderId:"557020446856",appId:"1:557020446856:web:05f26c980074132f849f3d"});var h=O.a.firestore(),p=c.p+"static/media/trashcan.1129c53a.svg";c(47);function f(e){var t=e.recipes;if(0===t.length)return Object(l.jsx)("div",{className:"error",children:"No recipes to load..."});return Object(l.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsxs)("p",{children:[e.cookingTime," to make."]}),Object(l.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(l.jsx)(i.b,{to:"/recipes/".concat(e.id),children:"Cook This"}),Object(l.jsx)("img",{className:"delete",onClick:function(){return t=e.id,void h.collection("recipes").doc(t).delete();var t},src:p,alt:"delete icon"})]},e.id)}))})}c(48);function x(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],j=s[1],u=Object(n.useState)(!1),b=Object(o.a)(u,2),O=b[0],p=b[1];return Object(n.useEffect)((function(){j(!0);var e=h.collection("recipes").onSnapshot((function(e){if(e.empty)p("No recipes to load"),j(!1);else{var t=[];e.docs.forEach((function(e){t.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),a(t),j(!1)}}),(function(e){p(e.message),j(!1)}));return function(){return e()}}),[]),Object(l.jsxs)("div",{className:"home",children:[O&&Object(l.jsx)("p",{className:"error",children:O}),i&&Object(l.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(l.jsx)(f,{recipes:c})]})}var m=c(33),v=c(17),g=c.n(v),N=c(22);c(50);function S(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],b=Object(n.useState)(""),d=Object(o.a)(b,2),O=d[0],p=d[1],f=Object(n.useState)(""),x=Object(o.a)(f,2),v=x[0],S=x[1],k=Object(n.useState)([]),w=Object(o.a)(k,2),C=w[0],y=w[1],T=Object(n.useRef)(null),E=Object(j.f)(),R=function(){var e=Object(N.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:c,ingredients:C,method:i,cookingTime:O+" minutes"},e.prev=2,e.next=5,h.collection("recipes").add(n);case 5:E.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"create",children:[Object(l.jsx)("h2",{className:"page-title",children:"Add a New Recipe"}),Object(l.jsxs)("form",{onSubmit:R,children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Recipe title:"}),Object(l.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},value:c,required:!0})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Recipe Ingredients:"}),Object(l.jsxs)("div",{className:"ingredients",children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return S(e.target.value)},value:v,ref:T}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault();var t=v.trim();t&&!C.includes(t)&&y((function(e){return[].concat(Object(m.a)(e),[v])})),S(""),T.current.focus()},className:"btn",children:"add"})]})]}),Object(l.jsxs)("p",{children:["Current ingredients: ",C.map((function(e){return Object(l.jsxs)("em",{children:[e,", "]},e)}))]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Recipe Method:"}),Object(l.jsx)("textarea",{onChange:function(e){return u(e.target.value)},value:i,required:!0})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Cooking time (minutes):"}),Object(l.jsx)("input",{type:"number",onChange:function(e){return p(e.target.value)},value:O,required:!0})]}),Object(l.jsx)("button",{className:"btn",children:"submit"})]})]})}c(51);function k(){var e=Object(j.g)().search,t=new URLSearchParams(e).get("q"),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=Object(n.useState)(null),a=Object(o.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(!1),j=Object(o.a)(i,2),l=j[0],u=j[1],b=Object(n.useState)(null),O=Object(o.a)(b,2),h=O[0],p=O[1],f=Object(n.useState)(null),x=Object(o.a)(f,2),m=x[0],v=x[1],S=function(e){v({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};return Object(n.useEffect)((function(){var c=new AbortController,n=function(){var t=Object(N.a)(g.a.mark((function t(n){var a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,fetch(e,Object(d.a)(Object(d.a)({},n),{},{signal:c.signal}));case 4:if((a=t.sent).ok){t.next=7;break}throw new Error(a.statusText);case 7:return t.next=9,a.json();case 9:r=t.sent,u(!1),s(r),p(null),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),"AbortError"===t.t0.name?console.log("the fetch was aborted"):(u(!1),p("Could not fetch the data"));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return"GET"===t&&n(),"POST"===t&&m&&n(m),function(){c.abort()}}),[e,t,m]),{data:r,isPending:l,error:h,postData:S}}("http://localhost:3000/recipes?q="+t),a=c.error,r=c.isPending,s=c.data;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{className:"page-title",children:['Recipes including "',t,'"']}),a&&Object(l.jsx)("p",{className:"error",children:a}),r&&Object(l.jsx)("p",{className:"loading",children:"Loading..."}),s&&Object(l.jsx)(f,{recipes:s})]})}c(52);function w(){var e=Object(j.h)().id,t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(null),i=Object(o.a)(s,2),u=i[0],b=i[1],d=Object(n.useState)(null),O=Object(o.a)(d,2),p=O[0],f=O[1];return Object(n.useEffect)((function(){r(!0);var t=h.collection("recipes").doc(e).onSnapshot((function(e){e.exists?(r(!1),f(e.data())):(r(!1),b("Could not find that recipe"))}));return function(){return t()}}),[e]),Object(l.jsxs)("div",{className:"recipe",children:[u&&Object(l.jsx)("p",{className:"error",children:u}),a&&Object(l.jsx)("p",{className:"loading",children:"Loading..."}),p&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"page-title",children:p.title}),Object(l.jsxs)("p",{children:["Takes ",p.cookingTime," to cook."]}),Object(l.jsx)("ul",{children:p.ingredients.map((function(e){return Object(l.jsx)("li",{children:"ing"},e)}))}),Object(l.jsx)("p",{className:"method",children:p.method})]})]})}c(53);var C=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(x,{})}),Object(l.jsx)(j.a,{path:"/create",children:Object(l.jsx)(S,{})}),Object(l.jsx)(j.a,{path:"/search",children:Object(l.jsx)(k,{})}),Object(l.jsx)(j.a,{path:"/recipes/:id",children:Object(l.jsx)(w,{})})]})]})})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.e9da7f25.chunk.js.map