(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[0],{109:function(t,e,a){},119:function(t,e,a){},121:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),r=a(15),s=a.n(r),i=(a(109),a(40)),o=a(45),l=a.n(o),d=a(153),u=a(162),b=a(151),j=a(152),h=a(9),x=a(21),p=function(t){return t.theme.currentLightTheme},O=function(t){return t.chat.chats},g="ADD CHAT",m="REMOVE CHAT",f=a(70),v=a.n(f),k=a(84),y=a.n(k),_=a(146),C=a(163),w=a(149),N=a(150),S=a(94),L=a(4),E=function(t){var e=t.name,a=t.pathId,n=t.lightThemeKey,r=Object(S.a)(),s=Object(h.c)(),i=Object(c.useCallback)((function(){s({type:m,id:a})}),[s,a]),o="/images/ava_".concat(e,".jpg");return Object(L.jsxs)("div",{className:y.a.box,children:[Object(L.jsx)(x.b,{componentclass:"span",exact:!0,to:"/profile/".concat(a),children:Object(L.jsx)(_.a,{children:Object(L.jsx)(C.a,{alt:e,src:o,style:{width:"56px",height:"56px",marginLeft:"20px"}})})}),Object(L.jsx)(x.b,{exact:"true",to:"/chats/".concat(a),style:{textDecoration:"none",color:n?r.palette.light.text:r.palette.dark.text},children:Object(L.jsx)(w.a,{style:{cursor:"pointer"},children:Object(L.jsx)(N.a,{primary:e,style:{marginLeft:"30px"}})})}),Object(L.jsx)(b.a,{variant:"contained",style:{backgroundColor:n?r.palette.light.second:r.palette.dark.second,color:n?r.palette.light.text:r.palette.dark.text,marginRight:"20px"},onClick:i,children:"Delete Chat"})]})},I=function(t){var e=Object(S.a)(),a=Object(h.d)(O,h.b),n=Object(h.c)(),r=Object(c.useCallback)((function(){var t=prompt("\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0447\u0430\u0442\u0430");n(function(t){return{type:g,name:t}}(t))}),[n]),s=Object(h.d)(p,h.b),i=a.map((function(t){return Object(L.jsx)(E,{pathId:t.id,name:t.chatName,lightThemeKey:s},t.id)}));return Object(L.jsxs)("div",{className:v.a.box,children:[Object(L.jsxs)("div",{className:v.a.tools,children:[Object(L.jsx)(b.a,{variant:"contained",size:"small",style:{backgroundColor:s?e.palette.light.second:e.palette.dark.second,color:s?e.palette.light.text:e.palette.dark.text},onClick:r,children:"Add Chat"}),Object(L.jsx)(x.b,{to:"/photos",className:v.a.regBtn,style:{backgroundColor:s?e.palette.light.second:e.palette.dark.second,color:s?e.palette.light.text:e.palette.dark.text},children:"cats photo"})]}),Object(L.jsx)(j.a,{children:i})]})},A="SWITCH THEME",T=a(14),M=a(71);M.a.initializeApp({apiKey:"AIzaSyC3zqw-3e6tawqxT9CdVF1S2Zea0-hv0qA",authDomain:"messanger-2076d.firebaseapp.com",databaseURL:"https://messanger-2076d-default-rtdb.firebaseio.com",projectId:"messanger-2076d",storageBucket:"messanger-2076d.appspot.com",messagingSenderId:"27123285768",appId:"1:27123285768:web:f11375ac472237e512f6bd"});var D=M.a.auth(),z=M.a.database().ref("messages"),B=function(t){var e=Object(S.a)(),a=Object(c.useState)(!0),n=Object(i.a)(a,2),r=n[0],s=n[1],o=Object(c.useCallback)((function(){D.signOut()}),[]);Object(c.useEffect)((function(){D.onAuthStateChanged((function(t){s(!t)}))}),[]);var j=Object(h.d)(p,h.b),O=Object(h.c)(),g=Object(c.useCallback)((function(){O({type:A})}),[O]);return Object(L.jsxs)("div",{className:l.a.box,style:{backgroundColor:j?e.palette.light.main:e.palette.dark.main,color:j?e.palette.light.text:e.palette.dark.text},children:[Object(L.jsxs)("div",{className:l.a.tools,children:[Object(L.jsx)(x.b,{to:"/",className:l.a.regBtn,style:{backgroundColor:j?e.palette.light.second:e.palette.dark.second,color:j?e.palette.light.text:e.palette.dark.text},children:Object(L.jsx)("svg",{fill:j?e.palette.light.text:e.palette.dark.text,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px",children:Object(L.jsx)("path",{d:"M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"})})}),Object(L.jsx)(d.a,{control:Object(L.jsx)(u.a,{onClick:g}),label:j?"Light":"Dark",style:{paddingLeft:"20px",marginLeft:"0px"}}),Object(L.jsx)(x.b,{to:"/chats",className:l.a.regBtn,style:{backgroundColor:j?e.palette.light.second:e.palette.dark.second,color:j?e.palette.light.text:e.palette.dark.text},children:"Chats"}),!r&&Object(L.jsx)(b.a,{variant:"contained",size:"small",style:{backgroundColor:j?e.palette.light.second:e.palette.dark.second,color:j?e.palette.light.text:e.palette.dark.text},onClick:o,children:"Sign Out"}),r&&Object(L.jsx)(x.b,{to:"/login",className:l.a.regBtn,style:{backgroundColor:j?e.palette.light.second:e.palette.dark.second,color:j?e.palette.light.text:e.palette.dark.text},children:"Login"}),Object(L.jsx)(x.b,{to:"/signup",className:l.a.regBtn,style:{backgroundColor:j?e.palette.light.second:e.palette.dark.second,color:j?e.palette.light.text:e.palette.dark.text},children:"Sign Up"})]}),Object(L.jsx)(T.d,{component:T.d,children:Object(L.jsx)(T.b,{path:"/chats",component:I})})]})},R=(a(119),a(58)),W=a(11),H="SUBSCRIBE",P={subscribe:!1},V={currentLightTheme:!0},U=a(52),K=a(25),F=a.n(K),q=a(30),J="MESSAGE VALUE",Y="ADD NEW CHAT",G="UPDATE MESSAGE LIST",X=function(t){return{type:J,value:t}},Z=function(t){return function(e,a){z.child(t).on("value",(function(a){var c=function(t){var e=[];return t.forEach((function(t){e.push(t.val())})),e}(a);e(function(t,e){return{type:G,payload:t,chatId:e}}(c,t))}))}},Q={messageList:[{id:"1",messages:[{id:1,author:"Andrew",text:"Hello, how are you?"}]},{id:"2",messages:[{id:1,author:"Denis",text:"Hi! Is today all by plan?"}]},{id:"3",messages:[{id:1,author:"Maxim",text:"Hello! When did you see Andrew last time? I can't find him..."}]}],messageText:""},$=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e="",a=0;a<t;a++){var c=parseInt(10*Math.random());e+=c}return e},tt={chats:[{id:"1",chatName:"Andrew"},{id:"2",chatName:"Denis"},{id:"3",chatName:"Maxim"}]},et="LOADING",at="ERROR",ct="DATA",nt=function(t){return{type:et,status:t}},rt=function(t){return{type:at,status:t}},st=function(t){return{type:ct,data:t}},it=function(){var t=Object(q.a)(F.a.mark((function t(e){var a,c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(nt(!0)),e(st([])),e(rt(!1)),t.prev=3,t.next=6,fetch("https://api.thecatapi.com/v1/images/search");case 6:return a=t.sent,t.next=9,a.json();case 9:c=t.sent,e(st(c)),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(3),console.log(t.t0),e(rt(!0));case 17:e(nt(!1));case 18:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}(),ot={isLoading:!1,isError:!1,data:[]},lt="AUTH",dt="ERROR",ut="USER EMAIL",bt="USER PASSWORD",jt=function(t){return{type:lt,status:t}},ht=function(t,e){return{type:dt,status:t,message:e}},xt=function(t){return function(){var e=Object(q.a)(F.a.mark((function e(a,c){var n,r,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(jt(!1)),a(ht(!1,null)),n=c().authentication,r=n.email,s=n.password,"login"!==t){e.next=15;break}return e.prev=4,e.next=7,D.signInWithEmailAndPassword(r,s);case 7:a(jt(!0)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),a(ht(!0,e.t0));case 13:e.next=25;break;case 15:if("signUp"!==t){e.next=25;break}return e.prev=16,e.next=19,D.createUserWithEmailAndPassword(r,s);case 19:a(jt(!0)),e.next=25;break;case 22:e.prev=22,e.t1=e.catch(16),a(ht(!0,e.t1.message));case 25:case"end":return e.stop()}}),e,null,[[4,10],[16,22]])})));return function(t,a){return e.apply(this,arguments)}}()},pt={auth:!1,email:null,password:null,error:{status:!1,message:null}},Ot=a(89),gt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.c,mt=Object(R.b)({profile:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(null===e||void 0===e?void 0:e.type){case H:return Object(W.a)(Object(W.a)({},t),{},{subscribe:!t.subscribe});default:return t}},chat:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,e=arguments.length>1?arguments[1]:void 0;switch(null===e||void 0===e?void 0:e.type){case g:if(""===e.name||void 0===e.name)e.name="Noname";else if(null===e.name)return t;for(var a={id:"".concat($()),chatName:e.name},c=0;c<t.chats.length;c++)t.chats[c].id===a.id&&(a.id="".concat($()));return Object(W.a)(Object(W.a)({},t),{},{chats:[].concat(Object(U.a)(t.chats),[a])});case m:var n=t.chats.filter((function(t){return t.id!==e.id}));return Object(W.a)(Object(W.a)({},t),{},{chats:n});default:return t}},messanger:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(null===e||void 0===e?void 0:e.type){case Y:var a={id:e.id,messages:[]};return Object(W.a)(Object(W.a)({},t),{},{messageList:[].concat(Object(U.a)(t.messageList),[a])});case G:for(var c=t.messageList.find((function(t){return t.id===e.chatId})),n=0;n<e.payload.length;n++)for(var r=0;r<c.messages.length;r++)e.payload[n].id===c.messages[r].id&&e.payload.splice(e.payload[n],1);c=Object(W.a)(Object(W.a)({},c),{},{messages:[].concat(Object(U.a)(c.messages),Object(U.a)(e.payload))});var s=t.messageList.map((function(t){return t.id===c.id?c:t}));return Object(W.a)(Object(W.a)({},t),{},{messageList:s});case J:return Object(W.a)(Object(W.a)({},t),{},{messageText:e.value});default:return t}},theme:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(null===e||void 0===e?void 0:e.type){case A:return Object(W.a)(Object(W.a)({},t),{},{currentLightTheme:!t.currentLightTheme});default:return t}},photos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,e=arguments.length>1?arguments[1]:void 0;switch(null===e||void 0===e?void 0:e.type){case at:return Object(W.a)(Object(W.a)({},t),{},{isError:e.status});case et:return Object(W.a)(Object(W.a)({},t),{},{isLoading:e.status});case ct:return Object(W.a)(Object(W.a)({},t),{},{data:e.data});default:return t}},authentication:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,e=arguments.length>1?arguments[1]:void 0;switch(null===e||void 0===e?void 0:e.type){case lt:return Object(W.a)(Object(W.a)({},t),{},{auth:e.status});case dt:return Object(W.a)(Object(W.a)({},t),{},{error:{status:e.status,message:e.message}});case ut:return Object(W.a)(Object(W.a)({},t),{},{email:e.email});case bt:return Object(W.a)(Object(W.a)({},t),{},{password:e.password});default:return t}}}),ft=Object(R.d)(mt,gt(Object(R.a)(Ot.a))),vt=a(75),kt=a.n(vt),yt=a(48),_t=function(t){var e=t.text,a=Object(yt.a)(),c=Object(h.d)(p,h.b);return Object(L.jsx)("div",{className:kt.a.box,style:{backgroundColor:c?a.palette.light.second:a.palette.dark.second},children:Object(L.jsx)("div",{className:kt.a.message,style:{backgroundColor:c?a.palette.light.massageBg:a.palette.dark.massageBg,color:a.palette.dark.text},children:e})})},Ct=a(90),wt=a.n(Ct),Nt=a(57),St=a.n(Nt),Lt=function(t){var e=t.chatFinder,a=t.lightThemeKey,c=Object(S.a)(),n=e.messages.map((function(t){return Object(L.jsx)(Et,{text:t.text,author:t.author,lightThemeKey:a},t.id)}));return Object(L.jsx)("div",{className:St.a.box,style:{backgroundColor:a?c.palette.light.second:c.palette.dark.second,color:a?c.palette.light.text:c.palette.dark.text},children:n})},Et=function(t){var e=t.text,a=t.author,c=t.lightThemeKey,n=Object(S.a)();return Object(L.jsx)("div",{className:St.a.item,style:{backgroundColor:c?n.palette.light.main:n.palette.dark.main,color:c?n.palette.light.text:n.palette.dark.text},children:Object(L.jsxs)("p",{className:St.a.text,children:[Object(L.jsxs)("span",{className:St.a.author,children:[a,":\xa0"]}),e]})})},It=a(76),At=a.n(It),Tt=function(t){return t.messanger.messageList},Mt=function(t){return t.messanger.messageText},Dt=function(t){var e=t.onClickBtn,a=(t.handleKeyDown,t.lightThemeKey),n=Object(c.useRef)(null),r=Object(h.c)(),s=Object(yt.a)(),i=Object(h.d)(Mt,h.b),o=Object(c.useCallback)((function(){e(n.current.value)}),[e]),l=Object(c.useCallback)((function(){r(X(n.current.value))}),[r]);return Object(c.useEffect)((function(){var t;null===(t=n.current)||void 0===t||t.focus()})),Object(L.jsxs)("div",{className:At.a.box,children:[Object(L.jsx)("input",{id:"fullWidth",className:At.a.customInput,style:{backgroundColor:a?s.palette.light.main:s.palette.dark.main,color:a?s.palette.light.text:s.palette.dark.text},value:i,ref:n,onChange:l}),Object(L.jsx)(b.a,{variant:"outlined",size:"small",onClick:o,style:{backgroundColor:s.palette.light.main,color:s.palette.light.text},children:"SEND"})]})},zt=function(t){var e=Object(yt.a)(),a=Object(h.d)(p,h.b),n=Object(h.d)(Tt,h.b),r=Object(h.d)(O,h.b),s=Object(T.h)().chatsId,i=Object(h.c)();Object(c.useEffect)((function(){i(Z(s))}),[s,i]);var o=Object(c.useCallback)((function(){var t;i((t=r[r.length-1].id,{type:Y,id:t}))}),[i,r]),l=n.find((function(t){return t.id===s}))||o(),d=Object(c.useCallback)((function(t){var e={id:"".concat(l.messages.length+1),author:"Me",text:t};i(function(t,e){return Object(q.a)(F.a.mark((function a(){return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:z.child(t).child(e.id).set(e);case 1:case"end":return a.stop()}}),a)})))}(s,e)),i(X(""))}),[s,i,l]);return l?Object(L.jsxs)("div",{className:wt.a.box,style:{backgroundColor:a?e.palette.light.second:e.palette.dark.second},children:[Object(L.jsx)(Lt,{chatFinder:l,lightThemeKey:a}),Object(L.jsx)(Dt,{onClickBtn:d,lightThemeKey:a})]}):Object(L.jsx)("div",{children:Object(L.jsx)(_t,{text:"\u0427\u0430\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})})},Bt=a(53),Rt=a.n(Bt),Wt=function(t){return t.profile.subscribe},Ht=function(t){var e=Object(yt.a)(),a=Object(h.d)(p,h.b),n=Object(h.d)(O,h.b),r=Object(h.d)(Wt,h.b),s=Object(h.c)(),i=Object(c.useCallback)((function(){s({type:H})}),[s]),o=Object(T.h)().profId,l=n.find((function(t){return t.id===o}));if(!l)return Object(L.jsx)("div",{children:Object(L.jsx)(_t,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})});var d="/images/ava_".concat(l.chatName,".jpg");return Object(L.jsx)("div",{className:Rt.a.box,style:{backgroundColor:a?e.palette.light.second:e.palette.dark.second},children:Object(L.jsxs)("div",{className:Rt.a.aboutMe,children:[Object(L.jsx)(C.a,{alt:l.chatName,src:d,style:{width:"80px",height:"80px"}}),Object(L.jsxs)("div",{className:Rt.a.info,style:{color:a?e.palette.light.text:e.palette.dark.text},children:[Object(L.jsx)("p",{className:Rt.a.myName,children:l.chatName}),Object(L.jsx)("p",{children:"Something about me"})]}),Object(L.jsxs)("div",{className:Rt.a.subscribe,children:[Object(L.jsx)(u.a,{checked:r,onClick:i,color:"secondary"}),Object(L.jsx)("p",{style:{color:a?e.palette.light.text:e.palette.dark.text},children:r?"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]})]})})},Pt=function(t){return t.photos.data[0]},Vt=function(t){return t.photos.isLoading},Ut=function(t){return t.photos.isError},Kt=a(91),Ft=a.n(Kt),qt=a(92),Jt=a.n(qt),Yt=function(t){var e=t.url,a=t.reload,c=Object(yt.a)();return Object(L.jsxs)("div",{className:Jt.a.box,children:[Object(L.jsx)("img",{src:e,alt:"kitty_photos"}),Object(L.jsx)(b.a,{variant:"outlined",size:"small",style:{backgroundColor:c.palette.light.main,color:c.palette.light.text},onClick:a,children:"NEED MORE CATS"})]})},Gt=function(t){var e=t.reload,a=Object(S.a)();return Object(L.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(L.jsx)("img",{src:"/images/warning.png",alt:"error"}),Object(L.jsx)(b.a,{variant:"outlined",size:"small",style:{backgroundColor:a.palette.light.main,color:a.palette.light.text},onClick:e,children:"RELOAD PAGE"})]})},Xt=a(154),Zt=function(){return Object(L.jsx)(Xt.a,{})},Qt=function(t){var e=Object(h.d)(Pt,h.b),a=Object(h.d)(Vt,h.b),n=Object(h.d)(Ut,h.b),r=Object(yt.a)(),s=Object(h.c)(),i=Object(h.d)(p,h.b),o=Object(c.useCallback)((function(){s(it)}),[s]);return Object(c.useEffect)((function(){s(it)}),[s]),Object(L.jsxs)("div",{className:Ft.a.box,style:{backgroundColor:i?r.palette.light.second:r.palette.dark.second},children:[a&&Object(L.jsx)(Zt,{}),n&&Object(L.jsx)(Gt,{reload:o}),e&&Object(L.jsx)(Yt,{url:null===e||void 0===e?void 0:e.url,reload:o})]})},$t=a(77),te=a.n($t),ee=a(155),ae=a(156),ce=a(161),ne=a(59),re=a(159),se=a(157),ie=function(){var t=Object(yt.a)(),e=Object(h.d)(p,h.b),a=Object(T.g)().push,n=Object(c.useState)(""),r=Object(i.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)(""),d=Object(i.a)(l,2),u=d[0],j=d[1],O=Object(c.useState)(""),g=Object(i.a)(O,2),m=g[0],f=g[1],v=function(){var t=Object(q.a)(F.a.mark((function t(e){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),f(""),t.prev=2,t.next=5,D.createUserWithEmailAndPassword(s,u);case 5:a("/chats"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),f(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(L.jsx)("div",{className:te.a.box,style:{backgroundColor:e?t.palette.light.second:t.palette.dark.second},children:Object(L.jsxs)(ee.a,{component:"main",maxWidth:"xs",children:[Object(L.jsx)(ae.a,{}),Object(L.jsxs)(ce.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(L.jsx)("div",{className:te.a.avatar,children:Object(L.jsx)("svg",{class:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false",fill:e?t.palette.light.text:t.palette.dark.text,viewBox:"0 0 24 24","aria-hidden":"true","data-testid":"LockOutlinedIcon",children:Object(L.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})})}),Object(L.jsx)(ne.a,{component:"h1",variant:"h5",style:{color:e?t.palette.light.text:t.palette.dark.text},children:"Sign in"}),Object(L.jsxs)(ce.a,{component:"form",onSubmit:v,noValidate:!0,sx:{mt:1},children:[Object(L.jsx)(re.a,{variant:"filled",margin:"normal",style:{backgroundColor:"#fff"},required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(t){o(t.target.value)}}),Object(L.jsx)(re.a,{style:{backgroundColor:"#fff"},variant:"filled",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(t){j(t.target.value)}}),m&&Object(L.jsx)("p",{style:{color:e?t.palette.light.text:t.palette.dark.text},children:m}),Object(L.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},style:{marginTop:"10px",marginBottom:"10px"},children:"Sign In"}),Object(L.jsx)(se.a,{container:!0,children:Object(L.jsx)(se.a,{item:!0,xs:!0,children:Object(L.jsx)(x.b,{to:"/login",variant:"body2",style:{textDecoration:"none"},children:Object(L.jsx)("p",{style:{color:e?t.palette.light.text:t.palette.dark.text,textAlign:"center"},children:"Already have account?"})})})})]})]})]})})},oe=a(78),le=a.n(oe),de=function(t){return t.authentication.auth},ue=function(t){return t.authentication.error},be=function(){var t=Object(yt.a)(),e=Object(h.d)(p,h.b),a=Object(T.g)().push,c=Object(h.c)(),n=Object(h.d)(de,h.b),r=function(){var t=Object(q.a)(F.a.mark((function t(e){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),c(xt("login")),a(n?"/chats":"/login");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=Object(h.d)(ue,h.b);return Object(L.jsx)("div",{className:le.a.box,style:{backgroundColor:e?t.palette.light.second:t.palette.dark.second},children:Object(L.jsxs)(ee.a,{component:"main",maxWidth:"xs",children:[Object(L.jsx)(ae.a,{}),Object(L.jsxs)(ce.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(L.jsx)("div",{className:le.a.avatar,children:Object(L.jsx)("svg",{class:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false",fill:e?t.palette.light.text:t.palette.dark.text,viewBox:"0 0 24 24","aria-hidden":"true","data-testid":"LockOutlinedIcon",children:Object(L.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})})}),Object(L.jsx)(ne.a,{component:"h1",variant:"h5",style:{color:e?t.palette.light.text:t.palette.dark.text},children:"Login"}),Object(L.jsxs)(ce.a,{component:"form",onSubmit:r,noValidate:!0,sx:{mt:1},children:[Object(L.jsx)(re.a,{variant:"filled",margin:"normal",style:{backgroundColor:"#fff"},required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(t){var e;c((e=t.target.value,{type:ut,email:e}))}}),Object(L.jsx)(re.a,{style:{backgroundColor:"#fff"},variant:"filled",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(t){var e;c((e=t.target.value,{type:bt,password:e}))}}),Object(L.jsx)("p",{style:{color:e?t.palette.light.text:t.palette.dark.text},children:s.status?s.message:null}),Object(L.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},style:{marginTop:"10px",marginBottom:"10px"},children:"Login"}),Object(L.jsx)(se.a,{container:!0,children:Object(L.jsx)(se.a,{item:!0,xs:!0,children:Object(L.jsx)(x.b,{to:"/signup",variant:"body2",style:{textDecoration:"none"},children:Object(L.jsx)("p",{style:{color:e?t.palette.light.text:t.palette.dark.text,textAlign:"center"},children:"Don't have an account?"})})})})]})]})]})})},je=a(69),he=["authenticated"],xe=function(t){var e=t.authenticated,a=Object(je.a)(t,he);return e?Object(L.jsx)(T.a,{to:"/chats"}):Object(L.jsx)(T.b,Object(W.a)({},a))},pe=["authenticated"],Oe=function(t){var e=t.authenticated,a=Object(je.a)(t,pe);return e?Object(L.jsx)(T.b,Object(W.a)({},a)):Object(L.jsx)(T.a,{to:{pathname:"/login"}})},ge=function(){var t=Object(c.useState)(!1),e=Object(i.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){D.onAuthStateChanged((function(t){n(!!t)}))}),[]),Object(L.jsxs)(T.d,{children:[Object(L.jsx)(xe,{authenticated:a,exact:!0,path:"/",children:Object(L.jsx)(_t,{text:"\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0447\u0430\u0442\u0430\u043c \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"})}),Object(L.jsx)(Oe,{authenticated:a,exact:!0,path:"/chats",children:Object(L.jsx)(_t,{text:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442"})}),Object(L.jsx)(Oe,{authenticated:a,exact:!0,path:"/chats/:chatsId",children:Object(L.jsx)(zt,{})}),Object(L.jsx)(Oe,{authenticated:a,exact:!0,path:"/profile/:profId",children:Object(L.jsx)(Ht,{})}),Object(L.jsx)(Oe,{authenticated:a,exact:!0,path:"/photos",children:Object(L.jsx)(Qt,{})}),Object(L.jsx)(xe,{authenticated:a,exact:!0,path:"/signup",children:Object(L.jsx)(ie,{})}),Object(L.jsx)(xe,{authenticated:a,exact:!0,path:"/login",children:Object(L.jsx)(be,{})}),Object(L.jsx)(xe,{authenticated:a,path:"*",children:Object(L.jsx)(_t,{text:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})})]})},me=function(t){return Object(L.jsx)(h.a,{store:ft,children:Object(L.jsxs)("div",{className:"wrapper",children:[Object(L.jsx)("div",{className:"left_column",children:Object(L.jsx)(B,{})}),Object(L.jsx)("div",{className:"content",children:Object(L.jsx)(ge,{})})]})})},fe=a(93),ve=a(158),ke=Object(fe.a)({palette:{light:{main:"#fff",second:"#74b4e0",text:"#000000",massageBg:"#4c91bf"},dark:{main:"#384047",second:"#2c2c2f",text:"#ffffff",massageBg:"#2f343b"}}});s.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(ve.a,{theme:ke,children:Object(L.jsx)(x.a,{children:Object(L.jsx)(me,{})})})}),document.getElementById("root"))},45:function(t,e,a){t.exports={box:"Navigator_box__1yAcB",tools:"Navigator_tools__3Saz2",regBtn:"Navigator_regBtn__2lEdM"}},53:function(t,e,a){t.exports={box:"Profile_box__O7Dj3",aboutMe:"Profile_aboutMe__3JhFk",info:"Profile_info__Yz8R3",myName:"Profile_myName__3fHMr",subscribe:"Profile_subscribe__J2ElY"}},57:function(t,e,a){t.exports={box:"MessageList_box__1V9jY",item:"MessageList_item__b-oit",author:"MessageList_author__1K8D9"}},70:function(t,e,a){t.exports={box:"Chats_box__3_xf3",tools:"Chats_tools__mxPSY",regBtn:"Chats_regBtn__2G1Ts"}},75:function(t,e,a){t.exports={box:"NotFound_box__1JgzY",message:"NotFound_message__3JChD"}},76:function(t,e,a){t.exports={box:"MessageForm_box__32z_S",customInput:"MessageForm_customInput__1zf6i"}},77:function(t,e,a){t.exports={box:"Signup_box__MJDTq",avatar:"Signup_avatar__3sSUY"}},78:function(t,e,a){t.exports={box:"Login_box__WZ4hb",avatar:"Login_avatar__vgd3o"}},84:function(t,e,a){t.exports={box:"ChatItem_box__1L8hq"}},90:function(t,e,a){t.exports={box:"Messanger_box__1ck3w"}},91:function(t,e,a){t.exports={box:"TheCatAPI_box__3CUiW"}},92:function(t,e,a){t.exports={box:"Kitty_box__2uzT9"}}},[[121,1,2]]]);
//# sourceMappingURL=main.6609e333.chunk.js.map