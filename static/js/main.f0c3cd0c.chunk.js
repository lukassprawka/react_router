(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,,,,,,function(e,t,a){e.exports=a(41)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=(a(31),a(12)),u=a(13),m=a(20),o=a(14),s=a(22),p=(a(32),a(45)),d=a(46),E=a(23),h=a(8),f=a.n(h),g=a(15),v=a.n(g),y=a(16),b=a.n(y),j=(a(33),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}}),r.a.createElement(E.a,{path:"/products",render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}}),r.a.createElement(E.a,{path:"/contact",render:function(){return r.a.createElement("img",{src:v.a,alt:"miasto"})}}),r.a.createElement(E.a,{path:"/admin",render:function(){return r.a.createElement("img",{src:b.a,alt:"miasto"})}}),r.a.createElement(E.a,{render:function(){return r.a.createElement("img",{src:f.a,alt:"miasto"})}})))}),k=a(43),x=(a(37),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admin",path:"/admin"}]),w=function(){var e=x.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(k.a,{to:e.path,exact:e.exact},e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},J={marginTop:40},O=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:J},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:16}},n))},z=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi excepturi consectetur autem corporis veritatis laudantium, blanditiis voluptatum asperiores, repudiandae deserunt consequatur eum dicta, rerum maiores assumenda ea quas optio."},{id:2,title:"Czym jest paradoks fermiego",author:"Ania Kwiatkowska",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi excepturi consectetur autem corporis veritatis laudantium, blanditiis voluptatum asperiores, repudiandae deserunt consequatur eum dicta, rerum maiores assumenda ea quas optio."},{id:3,title:"Ciemna materia i ciemna energia?",author:"Jan Kowalski",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi excepturi consectetur autem corporis veritatis laudantium, blanditiis voluptatum asperiores, repudiandae deserunt consequatur eum dicta, rerum maiores assumenda ea quas optio."}],N=function(){var e=z.map((function(e){return r.a.createElement(O,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},C=a(9),S=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},F=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(S,{id:t.params.id}),r.a.createElement(C.a,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},q=(a(38),["car","bike","motorcycle"]),P=function(){var e=q.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(C.a,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},L=a(17),B=a(18),R=a(21),A=a(19),K=a(24),T=(a(39),a(47)),W=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(R.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleChange=function(e){var t=e.target.value,n=!e.target.value;a.setState((function(){return{value:t,isEmpty:n}}))},a.handleSubmit=function(e){e.preventDefault(),a.setState((function(){return{value:"",isEmpty:!0}}))},a}return Object(K.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107"}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(T.a,{when:!this.state.isEmpty,message:"Masz niewype\u0142niony formularz. Czy na pewno chcesz op\xf3\u015bci\u0107 t\u0119 stron\u0119?"}))}}]),t}(r.a.Component),D=a(44),I=function(){return r.a.createElement(E.a,{render:function(){return r.a.createElement(D.a,{to:"/login"})}})},M=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("br",null),r.a.createElement("button",null,"Zaloguj"))},Z=function(){return r.a.createElement("div",null,"Nie ma takiej strony")},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,component:N}),r.a.createElement(E.a,{path:"/products",component:P}),r.a.createElement(E.a,{path:"/product/:id",component:F}),r.a.createElement(E.a,{path:"/contact",component:W}),r.a.createElement(E.a,{path:"/admin",component:I}),r.a.createElement(E.a,{path:"/login",component:M}),r.a.createElement(E.a,{component:Z})))},H=(a(40),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(E.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jesate\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej")))}}),r.a.createElement(E.a,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jesate\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jesate\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jesate\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(E.a,{path:"/:page/:idProduct",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jesate\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"Jesate\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jesate\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),Q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(j,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(w,null)),r.a.createElement("section",{className:"page"},r.a.createElement(G,null))),r.a.createElement("footer",null,r.a.createElement(H,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(Q,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.f0c3cd0c.chunk.js.map