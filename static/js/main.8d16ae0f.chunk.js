(this.webpackJsonpmi=this.webpackJsonpmi||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),s=n.n(r),a=(n(13),n(0)),i=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"\u041c\u043e\u0438 \u0434\u043e\u0445\u043e\u0434\u044b \u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b"})})},o=(n(15),n(3)),j=n(8),u=n(4),l=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(u.a)(Object(u.a)({},t),{},{transactions:t.transactions.filter((function(t){return t.id!==e.payload}))});case"ADD_TRANSACTION":return Object(u.a)(Object(u.a)({},t),{},{transactions:[e.payload].concat(Object(j.a)(t.transactions))});default:return t}},d={transactions:[]},b=Object(c.createContext)(d),O=function(t){var e=t.children,n=Object(c.useReducer)(l,d),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(a.jsx)(b.Provider,{value:{transactions:s.transactions,deleteTransaction:function(t){i({type:"DELETE_TRANSACTION",payload:t})},addTransaction:function(t){i({type:"ADD_TRANSACTION",payload:t})}},children:e})},x=function(){var t=Object(c.useContext)(b).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"My balance"}),Object(a.jsxs)("h2",{children:["$",t]})]})},h=function(){var t=Object(c.useContext)(b).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0),n=-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0);return Object(a.jsxs)("div",{className:"inc-exp-container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"\u0414\u043e\u0445\u043e\u0434\u044b"}),Object(a.jsxs)("p",{id:"money-plus",className:"money plus",children:["+$",e]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"}),Object(a.jsxs)("p",{id:"money-minus",className:"money minus",children:["-$",n]})]})]})},m=function(t){var e=t.transaction,n=Object(c.useContext)(b).deleteTransaction,r=e.amount<0?"-":"+";return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text," ",Object(a.jsxs)("span",{children:[r,"$",Math.abs(e.amount)]}),Object(a.jsx)("button",{onClick:function(){return n(e.id)},className:"delete-btn",children:"x"})]})})},f=function(){var t=Object(c.useContext)(b).transactions;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"History"}),Object(a.jsx)("ul",{id:"list",className:"list",children:t.map((function(t){return Object(a.jsx)(m,{transaction:t},t.id)}))})]})},p=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)(0),i=Object(o.a)(s,2),j=i[0],u=i[1],l=Object(c.useContext)(b).addTransaction;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Add new transaction"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Math.floor(5e4*Math.random()),text:n,amount:+j};l(e),u(0),r("")},children:[Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsx)("label",{htmlFor:"text",children:"Text"}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(a.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(a.jsx)("input",{type:"number",value:j,onChange:function(t){return u(t.target.value)},placeholder:"Enter amount..."})]}),Object(a.jsx)("button",{className:"btn",children:"Add transaction"})]})]})},v=function(){return Object(a.jsxs)(O,{children:[Object(a.jsx)(i,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(x,{}),Object(a.jsx)(h,{}),Object(a.jsx)(f,{}),Object(a.jsx)(p,{})]})]})};s.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8d16ae0f.chunk.js.map