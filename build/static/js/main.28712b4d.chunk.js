(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t){},133:function(e,t){},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(9),r=a.n(c),i=a(19),l=a(83),o=a(54),s=a.n(o),d=a(4),j=Object(n.createContext)(),u=Object(l.io)("https://domingo-web-app.herokuapp.com"),b=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],l=c[1],o=Object(n.useState)(!1),b=Object(i.a)(o,2),m=b[0],x=b[1],p=Object(n.useState)(),O=Object(i.a)(p,2),f=O[0],h=O[1],g=Object(n.useState)(""),v=Object(i.a)(g,2),C=v[0],w=v[1],y=Object(n.useState)({}),N=Object(i.a)(y,2),k=N[0],S=N[1],I=Object(n.useState)(""),D=Object(i.a)(I,2),A=D[0],B=D[1],R=Object(n.useRef)(),U=Object(n.useRef)(),V=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){h(e),R.current.srcObject=e})),u.on("me",(function(e){return B(e)})),u.on("callUser",(function(e){var t=e.from,a=e.name,n=e.signal;S({isReceivingCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(d.jsx)(j.Provider,{value:{call:k,callAccepted:r,myVideo:R,userVideo:U,stream:f,name:C,setName:w,callEnded:m,me:A,callUser:function(e){var t=new s.a({initiator:!0,trickle:!1,stream:f});t.on("signal",(function(t){u.emit("callUser",{userToCall:e,signalData:t,from:A,name:C})})),t.on("stream",(function(e){U.current.srcObject=e})),u.on("callAccepted",(function(e){l(!0),t.signal(e)})),V.current=t},leaveCall:function(){x(!0),V.current.destroy(),window.location.reload()},answerCall:function(){l(!0);var e=new s.a({initiator:!1,trickle:!1,stream:f});e.on("signal",(function(e){u.emit("answerCall",{signal:e,to:k.from})})),e.on("stream",(function(e){U.current.srcObject=e})),e.signal(k.signal),V.current=e}},children:t})},m=a(22),x=a(189),p=a(184),O=a(179),f=a(182),h=a(150),g=Object(O.a)((function(e){return{video:Object(m.a)({width:"550px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(m.a)({justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",border:"2px solid black",margin:"10px"}}})),v=function(){var e=Object(n.useContext)(j),t=e.name,a=e.callAccepted,c=e.myVideo,r=e.userVideo,i=e.callEnded,l=e.stream,o=e.call,s=g();return Object(d.jsxs)(f.a,{container:!0,className:s.gridContainer,children:[l&&Object(d.jsx)(h.a,{className:s.paper,children:Object(d.jsxs)(f.a,{item:!0,xs:12,md:6,children:[Object(d.jsx)(p.a,{variant:"h5",gutterBottom:!0,children:t||"Name"}),Object(d.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:s.video})]})}),a&&!i&&Object(d.jsx)(h.a,{className:s.paper,children:Object(d.jsxs)(f.a,{item:!0,xs:12,md:6,children:[Object(d.jsx)(p.a,{variant:"h5",gutterBottom:!0,children:o.name||"Name"}),Object(d.jsx)("video",{playsInline:!0,ref:r,autoPlay:!0,className:s.video})]})})]})},C=a(191),w=function(){var e=Object(n.useContext)(j),t=e.answerCall,a=e.call,c=e.callAccepted;return Object(d.jsx)(d.Fragment,{children:a.isReceivingCall&&!c&&Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(d.jsxs)("h1",{children:[a.name," is calling..."]}),Object(d.jsx)(C.a,{variant:"contained",color:"primary",onClick:t,children:"Answer"})]})})},y=a(185),N=a(190),k=a(89),S=a(186),I=a(187),D=a(188),A=Object(O.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(m.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(m.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),B=function(e){var t=e.children,a=Object(n.useContext)(j),c=a.me,r=a.callAccepted,l=a.name,o=a.setName,s=a.callEnded,u=a.leaveCall,b=a.callUser,m=Object(n.useState)(""),x=Object(i.a)(m,2),O=x[0],g=x[1],v=A();return Object(d.jsx)(y.a,{className:v.container,children:Object(d.jsxs)(h.a,{elevation:10,className:v.paper,children:[Object(d.jsx)("form",{className:v.root,noValidate:!0,autoComplete:"off",children:Object(d.jsxs)(f.a,{container:!0,className:v.gridContainer,children:[Object(d.jsxs)(f.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(d.jsx)(p.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(d.jsx)(N.a,{label:"Name",value:l,onChange:function(e){return o(e.target.value)},fullWidth:!0}),Object(d.jsx)(k.CopyToClipboard,{text:c,className:v.margin,children:Object(d.jsx)(C.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(d.jsx)(S.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(d.jsxs)(f.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(d.jsx)(p.a,{gutterBottom:!0,variant:"h6",children:"Make a call"}),Object(d.jsx)(N.a,{label:"ID to call",value:O,onChange:function(e){return g(e.target.value)},fullWidth:!0}),r&&!s?Object(d.jsx)(C.a,{variant:"contained",color:"secondary",startIcon:Object(d.jsx)(I.a,{fontSize:"large"}),fullWidth:!0,onClick:u,className:v.margin,children:"Hang Up"}):Object(d.jsx)(C.a,{variant:"contained",color:"primary",startIcon:Object(d.jsx)(D.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return b(O)},className:v.margin,children:"Call"})]})]})}),t]})})},R=Object(O.a)((function(e){return{appBar:Object(m.a)({borderRadius:20,margin:"35px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"none",boxShadow:"6px 12px 10px rgba(0, 0, 0, 0.2), 6px 15px 10px rgba(0, 0, 0, 0.4)"},e.breakpoints.down("xs"),{width:"90%"}),wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}})),U=function(){var e=R();return Object(d.jsxs)("div",{className:e.wrapper,children:[Object(d.jsx)(x.a,{className:e.appBar,position:"static",color:"inherit",children:Object(d.jsx)(p.a,{variant:"h2",align:"center",color:"textSecondary",children:"Domingo Video Chat"})}),Object(d.jsx)(v,{}),Object(d.jsx)(B,{children:Object(d.jsx)(w,{})}),Object(d.jsx)("footer",{children:"\xa9 Copyright 2021 by Kaustav Paul"})]})};a(148);r.a.render(Object(d.jsx)(b,{children:Object(d.jsx)(U,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.28712b4d.chunk.js.map