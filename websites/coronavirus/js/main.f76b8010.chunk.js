(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=a(2),s=a.n(i),u=a(6),l=a(17),d=a(18),h=a(3),p=a(20),v=a(19),m=a(4),f=a.n(m),y=a(5),g=(a(44),function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={confirmed:0,recovered:0,deaths:0,countries:[]},n.getCountryData=n.getCountryData.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://covid19.mathdro.id/api");case 2:return t=e.sent,e.next=5,f.a.get("https://covid19.mathdro.id/api/countries");case 5:for(a=e.sent,n=[],r=0;r<a.data.countries.length;r++)n.push(a.data.countries[r].name);this.setState({confirmed:t.data.confirmed.value,recovered:t.data.recovered.value,deaths:t.data.deaths.value,countries:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCountryData",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("\u041f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443"!==t.target.value){e.next=2;break}return e.abrupt("return",this.getData());case 2:return e.prev=3,e.next=6,f.a.get("https://covid19.mathdro.id/api/countries/".concat(t.target.value));case 6:a=e.sent,this.setState({confirmed:a.data.confirmed.value,recovered:a.data.recovered.value,deaths:a.data.deaths.value}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),404===e.t0.response.status&&this.setState({confirmed:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",recovered:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",deaths:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"});case 13:case 14:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderCountryOptions",value:function(){return this.state.countries.map((function(e,t){return r.a.createElement("option",{key:t},e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"stats wow flipInX"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),r.a.createElement("select",{className:"dropdown wow flipInX",onChange:this.getCountryData},r.a.createElement("option",null,"\u041f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443"),this.renderCountryOptions()),r.a.createElement("div",{className:"box confirmed wow flipInX"},r.a.createElement("h3",null,"\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0445:"),r.a.createElement("h4",null,r.a.createElement(y.a,{value:this.state.confirmed,displayType:"text",thousandSeparator:!0}))),r.a.createElement("div",{className:"box recovered wow flipInX"},r.a.createElement("h3",null,"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u0432\u0448\u0438\u0445:"),r.a.createElement("h4",null,r.a.createElement(y.a,{value:this.state.recovered,displayType:"text",thousandSeparator:!0}))),r.a.createElement("div",{className:"box deaths wow flipInX"},r.a.createElement("h3",null,"\u0421\u043c\u0435\u0440\u0442\u0435\u0439:"),r.a.createElement("h4",null,r.a.createElement(y.a,{value:this.state.deaths,displayType:"text",thousandSeparator:!0}))))}}]),a}(r.a.Component)),E=document.querySelector("#preloader_js");window.onload=function(){setTimeout((function(){!function(e){e.style.opacity=1;var t=setInterval((function(){e.style.opacity-=.05,e.style.opacity<=.05&&(clearInterval(t),E.style.display="none")}),15)}(E)}),1e3)},document.querySelector(".covid_and_faces").addEventListener("mousemove",(function(e){document.querySelectorAll(".eye").forEach((function(t){var a=t.getBoundingClientRect().left+t.clientWidth/2,n=t.getBoundingClientRect().top+t.clientHeight/2,r=Math.atan2(e.clientX-a,e.clientY-n)*(180/Math.PI)*-1+270;t.style.transform="rotate("+r+"deg)"}))})),o.a.render(r.a.createElement(g,null),document.querySelector("#covid19-info"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f76b8010.chunk.js.map