(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t){},75:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(53),r=s.n(c),o=s(5),i=s(15),l=s(0);var u=function(e){var t=e.page,s=Object(n.useState)(""),a=Object(o.a)(s,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){"Sign up"===t?r("Sign in"):"Home"===t&&r("@andreihodo")})),Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(i.b,{to:"/",className:"a-tag",children:Object(l.jsx)("h1",{className:"title",children:"Lorem ipsum"})}),Object(l.jsx)("div",{className:"mini-navbar",children:Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(i.b,{to:"/",className:"a-tag",children:Object(l.jsx)("p",{className:"link",children:"Home"})}),Object(l.jsx)("a",{href:"https://twitter.com/andreihodo",target:"_blank",children:Object(l.jsx)("p",{className:"link",children:"Help"})}),Object(l.jsx)(i.b,{to:"/signup",className:"a-tag",children:Object(l.jsx)("p",{className:"link",children:t})})]})}),Object(l.jsx)("div",{className:"navbar-action",children:Object(l.jsx)(i.b,{to:"/signin",children:Object(l.jsx)("button",{className:"navbar-btn",children:c})})})]})};var j=function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("p",{children:"Made with love by Looney Toons."})})},b=s(7),d=s.n(b),p=s(12),h=s(9),O=s(6);var m=function(e){e.setToken,e.setPass;var t=Object(n.useState)({}),s=Object(o.a)(t,2),a=s[0],c=s[1],r=function(e){var t=e.target,s=(t.type,t.value),n=t.name;c(Object(O.a)(Object(O.a)({},a),{},Object(h.a)({},n,s)))},i=function(){var e=Object(p.a)(d.a.mark((function e(t){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()}));case 3:"ok"===(s=e.sent).status?(console.log(s),sessionStorage.setItem("token",s.data),sessionStorage.setItem("crpt",a.password),window.location.href="/dashboard"):alert(s.error),c({});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"signin-container",children:[Object(l.jsx)("h1",{children:"Sign in"}),Object(l.jsx)("p",{children:"Sign in and start generating passwords"}),Object(l.jsxs)("form",{className:"signin-form",onSubmit:i,children:[Object(l.jsx)("input",{type:"text",name:"username",placeholder:"Username",className:"input-username",onChange:r}),Object(l.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:"input-password",onChange:r}),Object(l.jsx)("button",{type:"submit",onSubmit:i,className:"signin-btn",children:"Sign in"})]})]})};var x=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),s=t[0],a=t[1],c=function(e){var t=e.target,n=(t.type,t.value),c=t.name;a(Object(O.a)(Object(O.a)({},s),{},Object(h.a)({},c,n)))},r=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()}));case 3:"ok"===(n=e.sent).status?window.location.href="/signin":11e3===n.error.code?alert("Username is already in use!"):(alert("Eroare!"),console.log(n.error)),a({});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"signup-container",children:[Object(l.jsx)("h1",{children:"Sign up"}),Object(l.jsx)("p",{children:"Create new account"}),Object(l.jsxs)("form",{className:"signup-form",onSubmit:r,children:[Object(l.jsx)("input",{type:"text",name:"username",placeholder:"Username",className:"input-username",onChange:c}),Object(l.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:"input-password",onChange:c}),Object(l.jsx)("button",{type:"submit",onSubmit:r,className:"signup-btn",children:"Sign up"})]})]})},f=s(23),g=function(e){var t=e.handleClose,s=e.content;return Object(l.jsx)("div",{className:"popup-box",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("span",{className:"close-icon",onClick:t,children:"x"}),s]})})},v=function(e){var t=e.handleClose,s=e.content;return Object(l.jsx)("div",{className:"popup-box",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("span",{className:"close-icon",onClick:t,children:"x"}),s]})})};var w=function(e){var t=e.website,s=e.password,a=e.id,c=e.passwordEntries,r=e.setPasswordEntries,i=e.index,u=e.type,j=e.changed,b=e.setChanged,h=Object(n.useState)(!1),O=Object(o.a)(h,2),m=O[0],x=O[1];return Object(l.jsxs)("div",{className:"stored-password",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("input",{type:m?"text":"password",className:"stored-password-input",value:s,readOnly:!0}),Object(l.jsx)("button",{className:"showhide-btn",onClick:function(){return x(!m)},children:m?"Hide":"Show"}),Object(l.jsx)("button",{className:"delete-btn",onClick:Object(p.a)(d.a.mark((function e(){var t,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=Object(f.a)(c)).slice(i,1),r(t),e.next=5,fetch("/entries/".concat(u,"/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:sessionStorage.getItem("token")}}).then((function(e){return e.json()}));case 5:if("error"!==(s=e.sent).status){e.next=8;break}return e.abrupt("return",alert(s.error));case 8:b(!j);case 9:case"end":return e.stop()}}),e)}))),children:"Delete"})]})},y=s(37),N=s(13),S=s.n(N),k='k\xe5\xb7\u203c\u203c\xce"\xba\xe8?]\xbb\xc3\xeb-^\xa2Ts+\xfb4\xf7bS6@\xd0t\xbd\xc7\xef\xc0\u25bc&I\xa6W _\xbd\u21a8\u2640\xc0B\xb8 \xe4jh[H_\xfd^\xcc\xb6\u2192',C=function(e,t,s){var n=S.a.pkcs5.pbkdf2(t,s,1e3,16),a=S.a.cipher.createCipher("AES-CBC",n);return a.start({iv:k}),a.update(S.a.util.createBuffer(e)),a.finish(),a.output.getBytes()},E=function(e,t,s){var n=S.a.pkcs5.pbkdf2(t,s,1e3,16),a=S.a.cipher.createDecipher("AES-CBC",n);a.start({iv:k}),a.update(S.a.util.createBuffer(e));a.finish();return a.output.getBytes()};function P(e){var t="abcdefghijklmnopqrstuvwxyz";return e.includeSymbols&&(t+="!@#$%^&*()-_=+[]{}\\|,.<>/?'\""),e.includeUppercase&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),e.includeDigits&&(t+="0123456789"),Array.apply(null,{length:e.length}).map((function(){for(;;){var e=new Uint8Array(1);window.crypto.getRandomValues(e);var s=String.fromCharCode(e[0]);if(t.includes(s))return console.log("char"+s),s}}),this).join("")}var T={length:8,symbol:!1,uppercase:!1,numbers:!1};var A=function(e){e.pass,e.token;var t=Object(n.useState)(!1),s=Object(o.a)(t,2),a=s[0],c=s[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),u=i[0],j=i[1],b=Object(n.useState)(T),m=Object(o.a)(b,2),x=m[0],N=m[1],k=Object(n.useState)({}),A=Object(o.a)(k,2),I=A[0],D=A[1],K=Object(n.useState)({}),U=Object(o.a)(K,2),B=U[0],_=U[1],J=Object(n.useState)([]),L=Object(o.a)(J,2),H=L[0],q=L[1],z=Object(n.useState)([]),R=Object(o.a)(z,2),F=R[0],G=R[1],M=Object(n.useState)(!1),V=Object(o.a)(M,2),W=V[0],Q=V[1],X=Object(n.useState)(""),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1];Object(n.useEffect)((function(){var e=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(sessionStorage.getItem("token")){e.next=2;break}return e.abrupt("return",window.location.href="/");case 2:return e.next=4,fetch("/user/me",{method:"POST",headers:{Authorization:sessionStorage.getItem("token")}}).then((function(e){return e.json()}));case 4:"error"===(t=e.sent).status?window.location.href="/":($(t.data.cryptoSalt),q(t.data.passwordEntries.map((function(e){return e.password=E(e.password,sessionStorage.getItem("crpt"),t.data.cryptoSalt),e}))),G(t.data.keyEntries.map((function(e){return e.password=E(e.password,sessionStorage.getItem("crpt"),t.data.cryptoSalt),e}))));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[W]);var ee=function(){c(!a),D(T)},te=function(){j(!u),_({})},se=function(){var e=Object(p.a)(d.a.mark((function e(t){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/entries/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:sessionStorage.getItem("token")},body:JSON.stringify({type:"password",username:I.username,password:C(I.password,sessionStorage.getItem("crpt"),Z)})}).then((function(e){return e.json()}));case 3:"error"===(s=e.sent).status?alert(s.error):(console.log(s.data),q([].concat(Object(f.a)(H),[Object(O.a)(Object(O.a)({},I),{},{_id:s.data})]))),ee();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(p.a)(d.a.mark((function e(t){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/entries/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:sessionStorage.getItem("token")},body:JSON.stringify({type:"key",username:B.username,password:B.password})}).then((function(e){return e.json()}));case 3:"error"===(s=e.sent).status?alert(s.error):(console.log(s.data),G([].concat(Object(f.a)(F),[Object(O.a)(Object(O.a)({},B),{},{_id:s.data})]))),te();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){var t=e.target,s=t.type,n=t.name;D("text"===s||"number"===s||"password"===s?Object(O.a)(Object(O.a)({},I),{},Object(h.a)({},n,t.value)):Object(O.a)(Object(O.a)({},I),{},Object(h.a)({},n,[t.checked])))},ce=function(e){N(Object(O.a)(Object(O.a)({},x),{},Object(h.a)({},e.target.name,e.target.value)))},re=function(e){var t=e.target,s=(t.type,t.name);_(Object(O.a)(Object(O.a)({},B),{},Object(h.a)({},s,t.value)))},oe=Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"popup-title",children:"Add a new password"}),Object(l.jsxs)("form",{className:"popup-form",children:[Object(l.jsxs)("label",{className:"text-inputs",children:["Username:",Object(l.jsx)("input",{type:"text",name:"username",value:I.username,onChange:ae,required:!0})]}),Object(l.jsxs)("label",{className:"text-inputs",children:["Password:",Object(l.jsx)("input",{type:"password",name:"password",value:I.password,onChange:ae,required:!0})]}),Object(l.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),console.log(I);var t=P({length:x.length,includeSymbols:x.symbol,includeDigits:x.numbers,includeUppercase:x.uppercase});console.log(t),D(Object(O.a)(Object(O.a)({},I),{},{password:t}))},className:"generate-password",children:"Generate Password"}),Object(l.jsxs)("label",{className:"text-inputs",children:["Length:",Object(l.jsx)("input",{type:"number",name:"length",value:x.length,onChange:ce})]}),Object(l.jsxs)("label",{className:"checkbox",children:["Include Symbols:",Object(l.jsx)("input",{name:"symbol",type:"checkbox",checked:x.symbol,onChange:ce})]}),Object(l.jsxs)("label",{className:"checkbox",children:["Include Numbers:",Object(l.jsx)("input",{name:"numbers",type:"checkbox",checked:x.numbers,onChange:ce})]}),Object(l.jsxs)("label",{className:"checkbox",children:["Include Uppercase Letters:",Object(l.jsx)("input",{name:"uppercase",type:"checkbox",checked:x.uppercase,onChange:ce})]}),Object(l.jsx)("button",{className:"popup-btn",type:"button",onClick:se,children:"Add password"})]})]}),ie=Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{className:"popup-form",children:[Object(l.jsx)("button",{className:"generate-key",onClick:function(){var e=function(){var e=S.a.pki.rsa.generateKeyPair({bits:2048,e:65537});return{public:S.a.pki.publicKeyToPem(e.publicKey),private:S.a.pki.privateKeyToPem(e.privateKey)}}();_(Object(O.a)(Object(O.a)({},B),{},{password:"Public:".concat(e.public,"\nPrivate ").concat(e.private)}))},children:"Generate Key"}),Object(l.jsxs)("select",{name:"select",value:B.select,onChange:re,children:[Object(l.jsx)("option",{value:"AES",children:"AES"}),Object(l.jsx)("option",{value:"Triple-DES",children:"Triple DES"}),Object(l.jsx)("option",{value:"RSA",children:"RSA"}),Object(l.jsx)("option",{value:"ECC",children:"ECC"})]}),Object(l.jsxs)("label",{className:"text-inputs",children:["Key name:",Object(l.jsx)("input",{type:"text",name:"username",value:B.username,onChange:re,required:!0})]}),Object(l.jsxs)("label",{className:"key-input",children:["Key:",Object(l.jsx)("textarea",{name:"password",value:B.password,onChange:re,required:!0})]}),Object(l.jsx)("button",{className:"popup-btn popup-keys-btn",type:"button",onClick:function(e){ne(e)},children:"Add key"})]})});return Object(l.jsxs)("div",{className:"dashboard",children:[Object(l.jsxs)("div",{className:"dashboard-buttons",children:[Object(l.jsxs)("button",{className:"new-password-btn",onClick:ee,children:[Object(l.jsx)(y.a,{className:"plus-icon"}),"New password"]}),Object(l.jsxs)("button",{className:"new-key-btn",onClick:te,children:[Object(l.jsx)(y.a,{className:"plus-icon"}),"New key"]})]}),Object(l.jsxs)("div",{className:"passwords-container",children:[Object(l.jsxs)("div",{className:"passwords",children:[Object(l.jsx)("h2",{children:"Passwords"}),H.map((function(e,t){return Object(l.jsx)(w,{setChanged:Q,changed:W,type:"password",website:e.username,password:e.password,id:e._id,index:t,passwordEntries:H,setPasswordEntries:q})}))]}),Object(l.jsxs)("div",{className:"keys",children:[Object(l.jsx)("h2",{children:"Keys"}),F.map((function(e,t){return Object(l.jsx)(w,{setChanged:Q,changed:W,type:"key",website:e.username,password:e.password,index:t,id:e._id,passwordEntries:F,setPasswordEntries:G})}))]})]}),a&&Object(l.jsx)(g,{content:oe,handleClose:ee}),u&&Object(l.jsx)(v,{content:ie,handleClose:te})]})};var I=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2);return t[0],t[1],Object(l.jsxs)("div",{className:"home",children:[Object(l.jsxs)("div",{className:"home-left",children:[Object(l.jsxs)("h1",{children:["Save your ",Object(l.jsx)("br",{})," passwords here."]}),Object(l.jsx)("p",{children:"Lorem ipsum is a password storage area that has been tested for security, so you can store your data here safely without being afraid of it being stolen by others."}),Object(l.jsx)(i.b,{to:"/signup",children:Object(l.jsx)("button",{className:"home-signup-btn",children:"Sign up"})})]}),Object(l.jsx)("div",{className:"home-right",children:Object(l.jsx)("div",{className:"demo-container"})})]})},D=(s(75),s(3));var K=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),r=Object(o.a)(c,2),b=r[0],d=r[1],p=P({length:10,includeSymbols:!0,includeDigits:!1,includeUppercase:!0});return console.log(p),Object(l.jsxs)(i.a,{children:[Object(l.jsx)(u,{page:"Sign up"}),Object(l.jsxs)(D.c,{children:[Object(l.jsx)(D.a,{path:"/",element:Object(l.jsx)(I,{})}),Object(l.jsx)(D.a,{path:"/signup",element:Object(l.jsx)(x,{})}),Object(l.jsx)(D.a,{path:"/signin",element:Object(l.jsx)(m,{setToken:a,setPass:d})}),Object(l.jsx)(D.a,{path:"/dashboard",element:Object(l.jsx)(A,{token:s,pass:b})})]}),Object(l.jsx)(j,{})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(K,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.1b751f76.chunk.js.map