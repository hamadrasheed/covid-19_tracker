(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),l=a(10),i=a(73),d=a(74),m=a(85),f=a(84),p=a(31),v=a(32),h=a.n(v),b="https://covid19.mathdro.id/api",E=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b,t&&(a="".concat(b,"/countries/").concat(t)),e.prev=2,e.next=5,h.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,i={confirmed:c,recovered:o,deaths:u,lastUpdate:l},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(b,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(b,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=a(44),_=a(76),C=a.n(_),O=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,u=e.country,i=Object(n.useState)([]),d=Object(p.a)(i,2),m=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,f(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=m?r.a.createElement(x.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,h=a?r.a.createElement(x.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:C.a.container},u?h:v)},j=a(226),w=a(230),k=a(227),N=a(228),D=a(33),S=a.n(D),I=a(34),V=a.n(I),B=a(13),M=a.n(B),P=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate,u=new Date(o).toDateString();return a?r.a.createElement("div",{className:M.a.container},r.a.createElement(j.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(j.a,{item:!0,component:w.a,className:V()(M.a.card,M.a.infected),xs:12,md:3},r.a.createElement(k.a,null,r.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(N.a,{variant:"h5"},r.a.createElement(S.a,{start:0,end:a.value,duration:2,separator:","})),r.a.createElement(N.a,{color:"textSecondary"},u),r.a.createElement(N.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(j.a,{item:!0,component:w.a,className:V()(M.a.card,M.a.recovered),xs:12,md:3},r.a.createElement(k.a,null,r.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},"Recoveries"),r.a.createElement(N.a,{variant:"h5"},r.a.createElement(S.a,{start:0,end:n.value,duration:1,separator:","})),r.a.createElement(N.a,{color:"textSecondary"},u),r.a.createElement(N.a,{variant:"body2"},"Number of recovered patients from COVID-19"))),r.a.createElement(j.a,{item:!0,component:w.a,className:V()(M.a.card,M.a.deaths),xs:12,md:3},r.a.createElement(k.a,null,r.a.createElement(N.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(N.a,{variant:"h5"},r.a.createElement(S.a,{start:0,end:c.value,duration:.7,separator:","})),r.a.createElement(N.a,{color:"textSecondary"},u),r.a.createElement(N.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):r.a.createElement("h2",null,'"Loading ... "')},U=a(81),A=a.n(U),R=a(231),z=a(229),G=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(p.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(R.a,{className:A.a.formControl},r.a.createElement(z.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},J=a(82),Q=a.n(J),q=function(){return r.a.createElement("div",{className:Q.a.footer},r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Mini Project by Hamad Rasheed."))},F=a(46),H=a.n(F),L=a(83),Y=a.n(L),Z=(a(208),function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(a);case 2:n=t.sent,e.setState({data:n,country:a}),console.log(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({data:t}),console.log(t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",null,r.a.createElement("div",{className:H.a.container},r.a.createElement("img",{className:H.a.image,src:Y.a,alt:"COVID-19"}),r.a.createElement(P,{data:t}),r.a.createElement(G,{handleCountryChange:this.handleCountryChange}),r.a.createElement(O,{data:t,country:a}),r.a.createElement(q,null)))}}]),a}(n.Component));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},76:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},82:function(e,t,a){e.exports={footer:"Footer_footer__1w0lV"}},83:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},88:function(e,t,a){e.exports=a(209)}},[[88,1,2]]]);
//# sourceMappingURL=main.e6709b89.chunk.js.map