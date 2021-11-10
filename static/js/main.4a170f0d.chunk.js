(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{27:function(t,e,n){t.exports={form:"form_form__16XEt"}},28:function(t,e,n){t.exports={filter:"filter_filter__2J1My"}},40:function(t,e,n){},60:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c,r,a=n(0),o=n.n(a),u=n(11),s=n.n(u),i=n(6),b=n(5),j=n(2),f=n(3),l=n(29),d=Object(j.b)("contacts/fetchContactsRequest"),O=Object(j.b)("contacts/fetchContactsSuccess"),h=Object(j.b)("contacts/fetchContactsError"),m=Object(j.b)("contacts/addContactsRequest"),p=Object(j.b)("contacts/addContactsSuccess"),v=Object(j.b)("contacts/addContactsError"),x=Object(j.b)("contacts/deleteContactsRequest"),C=Object(j.b)("contacts/deleteContactsSuccess"),g=Object(j.b)("contacts/deleteContactsError"),y=Object(j.b)("contacts/filter"),k=Object(j.c)([],(c={},Object(f.a)(c,O,(function(t,e){return e.payload})),Object(f.a)(c,p,(function(t,e){return[].concat(Object(l.a)(t),[e.payload])})),Object(f.a)(c,C,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),w=Object(j.c)(!1,(r={},Object(f.a)(r,d,(function(){return!0})),Object(f.a)(r,O,(function(){return!1})),Object(f.a)(r,h,(function(){return!1})),Object(f.a)(r,m,(function(){return!0})),Object(f.a)(r,p,(function(){return!1})),Object(f.a)(r,v,(function(){return!1})),Object(f.a)(r,x,(function(){return!0})),Object(f.a)(r,C,(function(){return!1})),Object(f.a)(r,g,(function(){return!1})),r)),S=Object(j.c)("",Object(f.a)({},y,(function(t,e){return e.payload}))),_=Object(b.b)({items:k,filter:S,loading:w}),N=Object(b.b)({contacts:_}),A={store:Object(j.a)({reducer:N,devTools:!1})},E=(n(40),n(15)),q=n.n(E),F=n(26),z=n(8),D=n.n(z);D.a.defaults.baseURL="http://localhost:4040";var J=function(t,e){return function(n){var c={name:t,number:e};n(m()),D.a.post("/contacts",c).then((function(t){var e=t.data;return n(p(e))})).catch((function(t){return n(v(t))}))}},L=function(t){return function(e){e(x()),D.a.delete("/contacts/".concat(t)).then((function(){return e(C(t))})).catch((function(t){return e(g(t))}))}},R=function(){return function(){var t=Object(F.a)(q.a.mark((function t(e){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(d()),D.a.get("/contacts").then((function(t){var n=t.data;return e(O(n))})).catch((function(t){return e(h(t))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=(n(60),n(1));var Z=Object(i.b)((function(t){var e=t.contacts,n=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,e.filter);return{contacts:n}}),(function(t){return{fetchContacts:function(){return t(R())},onDeleteContacts:function(e){return t(L(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(M.jsx)("ul",{className:"contacts",children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(M.jsxs)("li",{children:[c,":",r,Object(M.jsx)("button",{type:"button",className:"TodoList__btn",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),B=n(16),H=n(27),T=n.n(H);var I=Object(i.b)(null,(function(t){return{onSubmit:function(e,n){return t(J(e,n))}}}))((function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(B.a)(n,2),r=c[0],o=c[1],u=Object(a.useState)(""),s=Object(B.a)(u,2),i=s[0],b=s[1],j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":b(c);break;default:return}},f=function(){o(""),b("")};return Object(M.jsxs)("form",{className:T.a.form,onSubmit:function(t){t.preventDefault(),e(r,i),f()},children:[Object(M.jsx)("h2",{children:"Phonebook"}),Object(M.jsxs)("label",{children:["Name",Object(M.jsx)("input",{type:"text",value:r,name:"name",onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(M.jsxs)("label",{children:["Number",Object(M.jsx)("input",{type:"tel",name:"number",value:i,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(M.jsx)("button",{type:"submit",children:"Add contact"})]})})),P=n(28),U=n.n(P);var X=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onHandleFilter:function(e){return t(y(e.target.value))}}}))((function(t){var e=t.value,n=t.onHandleFilter;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("h2",{children:"Contacts"}),Object(M.jsxs)("label",{className:U.a.filter,children:["Find contacts by name",Object(M.jsx)("input",{type:"text",value:e,onChange:n})]})]})})),$=(n(62),function(t){var e=t.children;return Object(M.jsx)("div",{className:"Container",children:e})}),G=function(t){var e=t.children;return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)($,{children:e})})};function K(){var t=Object(i.c)();return Object(a.useEffect)((function(){return t(R())[t]})),Object(M.jsxs)(G,{children:[Object(M.jsx)(I,{}),Object(M.jsx)(X,{}),Object(M.jsx)(Z,{})]})}s.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)(i.a,{store:A.store,children:Object(M.jsx)(K,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.4a170f0d.chunk.js.map