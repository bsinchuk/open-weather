(this["webpackJsonpco-weather"]=this["webpackJsonpco-weather"]||[]).push([[0],{87:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),i=n.n(c),o=n(47),s=n(29),l=n(59),d=n(134),u=n(132),p=n(120),m=n(135),h=n(124),j=n(17),f=n.n(j),b=n(33),x="ADD_CITY",g="RECIEVE_CITY_WEATHER",O="CATCH_ERROR",y="RECIEVE_ALL_WEATHER",w="DELETE_CITY",v="UPDATE_CITY",C="RECIEVE_CITY_UPDATE",k="FETCH_FORECAST",E="RECIEVE_FORECAST",I="CLOSE_FORECAST",S="6590029506f8a850ddcfcf1d91ff46d3",T=function(e){return{type:v,id:e}},N=function(e){return{type:k,id:e}},D=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="//api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(S,"&units=metric&mode=json"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,c=A(a),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){return{name:e.name,id:e.id,country:e.sys.country,temp:e.main.temp,icon:e.weather[0].icon,updating:!1,fetching:!0,expand:!1,lon:e.coord.lon,lat:e.coord.lat}},_=n(3),R=Object(p.a)((function(e){return{adder:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"50%",minWidth:220,maxWidth:400}}})),F=Object(s.b)((function(e){return{error:e.error,isAdding:e.adding}}),(function(e){return{fetchWeather:function(t){return e(function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n,r){var a,c,i,o,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:x}),t.prev=1,a=0;case 3:if(!(a<localStorage.length)){t.next=9;break}if(!localStorage.getItem(e)){t.next=6;break}throw new Error("exist");case 6:a++,t.next=3;break;case 9:return t.next=11,D(e);case 11:c=t.sent,i=0;case 13:if(!(i<localStorage.length)){t.next=20;break}if(o=+localStorage.getItem(localStorage.key(i)),c.id!==o){t.next=17;break}throw new Error("exist");case 17:i++,t.next=13;break;case 20:localStorage.setItem(e,c.id),n({type:g,payload:c}),t.next=29;break;case 24:t.prev=24,t.t0=t.catch(1),s="",s="exist"===t.t0.message?e+" already exists.":"No such city.",n({type:O,info:s});case 29:case"end":return t.stop()}}),t,null,[[1,24]])})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(r.useRef)(),n=R();return Object(_.jsxs)("form",{className:n.adder,onSubmit:function(n){n.preventDefault(),e.fetchWeather(t.current.value)},children:[Object(_.jsx)(m.a,{id:"city-input",placeholder:"Enter a City",label:"City",margin:"normal",size:"medium",variant:"filled",fullWidth:!0,inputRef:t,error:e.error.length>0,helperText:e.error.length>0?e.error:""}),Object(_.jsx)(h.a,{size:"large",variant:"contained",color:"primary",type:"submit",disabled:e.isAdding,"data-testid":"add-button",children:"Add"})]})})),z=n(19),W=n(136),M=n(133),H=n(90),B=n(125),P=n(126),L=n(48),Y=n(127),U=n(128),V=n(130),J=n(131),q=n(64),G=n.n(q),K=n(63),Q=n.n(K),X=n(129),Z=Object(p.a)((function(e){return{root:{width:220,display:"flex",flexDirection:"column",alignItems:"center","&:hover":{cursor:"pointer"}},header:{alignSelf:"flex-start"},img:{width:100},temp:{marginLeft:10},spinner:{marginTop:99,marginBottom:98}}})),$=function(e){var t=e.id,n=e.city,r=e.country,a=e.icon,c=e.temp,i=e.coords,o=e.updating,s=e.onUpdate,l=e.onDelete,d=e.onExpand,u=Z(),p="/open-weather"+"/img/".concat(a,".png"),m=Math.round(c)+"\xb0",h=Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(B.a,{className:u.img,component:"img",src:p}),Object(_.jsx)(P.a,{children:Object(_.jsx)(L.a,{className:u.temp,align:"center",color:"textPrimary",variant:"h4","data-testid":"card-temp",children:m})}),Object(_.jsxs)(Y.a,{disableSpacing:!0,children:[Object(_.jsx)(U.a,{"aria-label":"update",onClick:s.bind(null,t),children:Object(_.jsx)(Q.a,{color:"primary"})}),Object(_.jsx)(U.a,{"aria-label":"delete",onClick:l.bind(null,t),children:Object(_.jsx)(G.a,{color:"secondary"})})]})]});return o&&(h=Object(_.jsx)(X.a,{className:u.spinner,"data-testid":"card-spinner"})),Object(_.jsxs)(V.a,{variant:"outlined",className:u.root,onClick:d.bind(null,t,i),children:[Object(_.jsx)(J.a,{className:u.header,title:n,subheader:r}),h]})},ee=a.a.memo($,(function(e,t){return e.temp===t.temp&&e.updating===t.updating})),te=n(65),ne=Object(p.a)((function(e){return{container:{width:400,height:130,display:"flex",justifyContent:"space-evenly",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif;',"@media (max-width:450px)":{flexDirection:"column",alignItems:"center",height:"auto",width:"100%"}},box:{width:50,display:"flex",flexDirection:"column",alignItems:"center",margin:3,"@media (max-width:450px)":{flexDirection:"row",alignItems:"center",justifyContent:"center",height:"auto",width:"100%",marginTop:10}},time:{height:30,width:"100%",margin:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",color:"grey","@media (max-width:450px)":{height:"auto"}},temp:{height:40,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem","@media (max-width:450px)":{height:"auto",margin:"0 !important"}}}})),re=function(e){var t=e.forecast,n=e.hours,r=ne(),a=t.reduce((function(e,t){return e+t.temp}),0),c=Math.round(a/t.length);0===c&&(c=1);return Object(_.jsx)("div",{className:r.container,children:t.map((function(e,t){var a=(+n+t)%24;a<10&&(a="0"+a),a+=":00";var i=Math.round(e.temp),o=30-1.5*(i-c),s=Object(te.tempToColor)(i,-20,40),l=s.r,d=s.g,u=s.b;return Object(_.jsxs)("div",{className:r.box,children:[Object(_.jsx)("p",{className:r.time,children:a}),Object(_.jsx)("div",{className:r.temp,style:{marginTop:"".concat(o,"px"),backgroundColor:"rgba(".concat(l,",").concat(d,",").concat(u,", 0.6)")},children:i})]},t)}))})},ae=Object(p.a)((function(e){return{wrapper:{display:"flex",flexDirection:"column",backgroundColor:"white",padding:15,fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif;',"@media (max-width:450px)":{width:250}},header:{display:"flex",justifyContent:"space-between",alignItems:"center"},city:{fontSize:"1.5rem",margin:0},country:{fontSize:"1rem",color:"grey",margin:0},temp:{fontSize:"2rem",textAlign:"center",margin:0},img:{objectFit:"cover"},content:{display:"flex",width:"100%",marginTop:10,paddingTop:10,paddingBottom:10,marginBottom:10,fontSize:"1rem",color:"grey",borderTop:"1px solid grey",borderBottom:"1px solid grey"},column:{display:"flex",flexDirection:"column",alignItems:"center",width:"50%",padding:5,"&:first-child":{alignItems:"flex-end"},"&:last-child":{alignItems:"flex-start"}}}})),ce=function(e){var t=ae(),n="/open-weather"+"/img/".concat(e.icon,".png"),r=Math.round(e.temp)+"\xb0",a=Math.round(e.feels)+"\xb0",c=new Date(1e3*(e.time+e.offset)),i=c.getHours();i<10&&(i="0"+i);var o=c.getMinutes();o<10&&(o="0"+o);var s=Math.round(e.wind)+" m/s";return e.fetching?Object(_.jsx)(X.a,{color:"secondary","data-testid":"modal-spinner"}):e.city?Object(_.jsxs)("div",{className:t.wrapper,children:[Object(_.jsxs)("div",{className:t.header,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:t.city,"data-testid":"modal-city",children:e.city}),Object(_.jsx)("p",{className:t.country,children:e.country}),Object(_.jsx)("p",{className:t.temp,children:r})]}),Object(_.jsx)("img",{src:n,alt:e.description,className:t.img})]}),Object(_.jsxs)("div",{className:t.content,children:[Object(_.jsxs)("div",{className:t.column,children:[Object(_.jsx)("span",{children:"Current time:"}),Object(_.jsx)("span",{children:"Feels like:"}),Object(_.jsx)("span",{children:"Humidity:"}),Object(_.jsx)("span",{children:"Clouds:"}),Object(_.jsx)("span",{children:"Wind: "}),Object(_.jsx)("span",{children:"Weather: "}),Object(_.jsx)("span",{children:"Detailed: "})]}),Object(_.jsxs)("div",{className:t.column,children:[Object(_.jsx)("span",{children:"".concat(i,":").concat(o)}),Object(_.jsx)("span",{children:a}),Object(_.jsx)("span",{children:e.humidity+" %"}),Object(_.jsx)("span",{children:e.clouds+" %"}),Object(_.jsx)("span",{children:s}),Object(_.jsx)("span",{children:e.main.toLowerCase()}),Object(_.jsx)("span",{children:e.desc})]})]}),Object(_.jsx)(re,{forecast:e.hourly,hours:i})]}):Object(_.jsx)("p",{"data-testid":"modal-empty"})},ie=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center","@media (max-width:450px)":{overflow:"scroll",alignItems:"flex-start",marginTop:20}}}})),oe=Object(s.b)((function(e){return{cities:e.weather}}),(function(e){return{initiate:function(){return e(function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r,a,c,i,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],r=0;r<localStorage.length;r++)a=localStorage.key(r),n.push(localStorage.getItem(a));if(!(n.length>0)){e.next=18;break}return c="https://api.openweathermap.org/data/2.5/group?id=".concat(n.join(","),"&units=metric&APPID=").concat(S),e.prev=4,e.next=7,fetch(c);case 7:return i=e.sent,e.next=10,i.json();case 10:o=e.sent,s=o.list.map((function(e){return A(e)})),t({type:y,payload:s}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}())},remove:function(t){return e(function(e){for(var t=0;t<localStorage.length;t++){var n=localStorage.key(t);if(+localStorage.getItem(n)===e){localStorage.removeItem(n);break}}return{type:w,id:e}}(t))},update:function(t){return e(function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var r,a,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(T(e)),r=null,a=0;case 3:if(!(a<localStorage.length)){t.next=11;break}if(c=localStorage.key(a),+localStorage.getItem(c)!==e){t.next=8;break}return r=c,t.abrupt("break",11);case 8:a++,t.next=3;break;case 11:return t.next=13,D(r);case 13:i=t.sent,n({type:C,payload:i});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},getForecast:function(t,n){return e(function(e,t){return function(){var n=Object(b.a)(f.a.mark((function n(r){var a,c,i,o,s,l;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(N(e)),a=t.lat,c=t.lon,i="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(c,"&units=metric&exclude=minutely,daily,alerts&appid=").concat(S),n.prev=3,n.next=6,fetch(i);case 6:return o=n.sent,n.next=9,o.json();case 9:s=n.sent,l={clouds:s.current.clouds,feels:s.current.feels_like,humidity:s.current.humidity,temp:s.current.temp,wind:s.current.wind_speed,time:s.current.dt,offset:10800===s.timezone_offset?0:s.timezone_offset-10800,main:s.current.weather[0].main,description:s.current.weather[0].description,icon:s.current.weather[0].icon,hourly:s.hourly.slice(0,8).map((function(e){return{time:e.dt,temp:e.temp}}))},r({type:E,payload:l,id:e}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(3),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[3,14]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},close:function(t){return e(function(e){return{type:I,id:e}}(t))}}}))((function(e){var t=Object(r.useState)(!1),n=Object(z.a)(t,2),a=n[0],c=n[1],i=ie();Object(r.useEffect)((function(){e.initiate()}),[]);var o=function(t,n){n.preventDefault(),e.update(t)},s=function(t,n){n.preventDefault(),e.remove(t)},l=function(t,n,r){r.defaultPrevented||(e.getForecast(t,n),c(!0))},d=e.cities.find((function(e){return!0===e.expand})),p=d||{};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(u.a,{container:!0,spacing:3,direction:"row",alignItems:"center",justify:"center","data-testid":"dashboard-container",children:e.cities.map((function(e,t){return Object(_.jsx)(u.a,{item:!0,zeroMinWidth:!0,children:Object(_.jsx)(ee,{id:e.id,country:e.country,icon:e.icon,temp:e.temp,city:e.name,coords:{lat:e.lat,lon:e.lon},updating:e.updating,onUpdate:o,onDelete:s,onExpand:l})},t)}))}),Object(_.jsx)(W.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:i.modal,open:a,onClose:function(){c(!1),setTimeout((function(){return e.close(p.id)}),600)},closeAfterTransition:!0,BackdropComponent:M.a,BackdropProps:{timeout:500},children:Object(_.jsx)(H.a,{in:a,children:Object(_.jsx)(ce,{fetching:p.fetching,country:p.country,icon:p.icon,temp:p.temp,city:p.name,feels:p.feels,humidity:p.humidity,wind:p.wind,time:p.time,offset:p.offset,main:p.main,desc:p.description,hourly:p.hourly,clouds:p.clouds})})})]})})),se=Object(p.a)((function(e){return{"spacing-xs-3":{width:"100%",margin:0},"item-wrapper":{width:"100%",display:"flex",justifyContent:"center",alignItem:"center"}}}));var le=function(){var e=se();return Object(_.jsxs)(a.a.Fragment,{children:[Object(_.jsx)(d.a,{}),Object(_.jsxs)(u.a,{container:!0,spacing:3,direction:"column",justify:"flex-start",alignItems:"center",className:e["spacing-xs-3"],children:[Object(_.jsx)(u.a,{item:!0,className:e["item-wrapper"],children:Object(_.jsx)(F,{})}),Object(_.jsx)(u.a,{item:!0,children:Object(_.jsx)(oe,{})})]})]})},de=n(16),ue=n(8),pe={loading:!1,error:"",adding:!1,weather:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(ue.a)(Object(ue.a)({},e),{},{adding:!0});case g:return Object(ue.a)(Object(ue.a)({},e),{},{adding:!1,error:!1,weather:[t.payload].concat(Object(de.a)(e.weather))});case O:return Object(ue.a)(Object(ue.a)({},e),{},{error:t.info,adding:!1});case y:return Object(ue.a)(Object(ue.a)({},e),{},{weather:Object(de.a)(t.payload)});case w:return Object(ue.a)(Object(ue.a)({},e),{},{weather:Object(de.a)(e.weather.filter((function(e){return e.id!==t.id})))});case v:return Object(ue.a)(Object(ue.a)({},e),{},{weather:e.weather.map((function(e){return e.id!==t.id?e:Object(ue.a)(Object(ue.a)({},e),{},{updating:!0})}))});case C:return Object(ue.a)(Object(ue.a)({},e),{},{weather:e.weather.map((function(e){return e.id!==t.payload.id?e:t.payload}))});case k:return Object(ue.a)(Object(ue.a)({},e),{},{weather:e.weather.map((function(e){return e.id!==t.id?e:Object(ue.a)(Object(ue.a)({},e),{},{expand:!0,fetching:!0})}))});case E:return Object(ue.a)(Object(ue.a)({},e),{},{weather:e.weather.map((function(e){return e.id!==t.id?e:Object(ue.a)(Object(ue.a)({},e),{},{expand:!0,fetching:!1},t.payload)}))});case I:return Object(ue.a)(Object(ue.a)({},e),{},{weather:e.weather.map((function(e){return e.id!==t.id?e:Object(ue.a)(Object(ue.a)({},e),{},{expand:!1})}))});default:return e}},he=o.b,je=[l.a],fe=Object(o.c)(me,he(o.a.apply(void 0,je))),be=Object(_.jsx)(s.a,{store:fe,children:Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(le,{})})});i.a.render(be,document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.56b05800.chunk.js.map