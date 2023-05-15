(function(){"use strict";var t={4063:function(t,e,i){var o=i(9242),n=i(3396),s=i(4870),r=i(8552),a=i(5073);function c(t,e){const i=document.querySelector(t),o=document.querySelector(e).getBoundingClientRect(),n=o.left+o.width/2,s=o.top+o.height/2;document.body.addEventListener("mousemove",(function(t){const e=t.clientX,o=t.clientY,r=1e-7*(e-n),a=2e-7*(o-s);i.style.setProperty("--x-translate",`${r}`),i.style.setProperty("--y-translate",`${a}`)}))}r.p8.registerPlugin(a.i);let l=window.Typed;function p(){c(".skew-container",".skew");let t=r.p8.timeline({defaults:{duration:1},onComplete:function(){new l("#typewriter",{strings:[" <strong>frontend</strong>"," <strong>web development</strong>"," <strong>vue</strong>"," <strong>javascript</strong>"," <strong>typescript</strong>"],typeSpeed:100,backSpeed:100,smartBackspace:!0,loop:!0})}});t.from(".hero-title-1",{delay:.3,opacity:0,ease:"power3.inOut",scale:.95,y:10,duration:1.7,transform:"matrix3d(0.95,0,0.00,0,0.00,0.5,-0.87,-0.00009,0,0.87,0.5,0,0,0,0,1)"}),t.from(".hero-title-2",{delay:1,opacity:0,ease:"power3.inOut",scale:.95,y:10,duration:1.7,transform:"matrix3d(0.95,0,0.00,0,0.00,0.5,-0.87,-0.00009,0,0.87,0.5,0,0,0,0,1)"},"<-0.8"),t.from(".hero-title-3",{delay:1,opacity:0,ease:"power3.inOut",scale:.95,y:10,duration:1.7,transform:"matrix3d(0.95,0,0.00,0,0.00,0.5,-0.87,-0.00009,0,0.87,0.5,0,0,0,0,1)"},"<-0.8").from(".locales-container",{opacity:0,scale:.95,x:-120,duration:.5},">-0.5").to(".right-arrow",{opacity:1,duration:.5,marginRight:0,ease:"power3.out"},"<")}const u={width:"83",height:"65",viewBox:"0 0 83 65",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d=(0,n._)("path",{d:"M50.5251 0.0501709L40.8179 9.79265L56.7024 25.6418H0.859619V39.4084H56.7024L40.8179 55.2575L50.5251 65L83 32.5251L50.5251 0.0501709Z",fill:"white"},null,-1),h=[d];function f(t,e){return(0,n.wg)(),(0,n.iD)("svg",u,h)}var v=i(89);const m={},g=(0,v.Z)(m,[["render",f]]);var y=g;function w(){let t=".option-1",e=".option-2",i=".option-3",o=".option-4",n={".option-1":"#45646C",".option-2":"#B95E34",".option-3":"#99B0BE",".option-4":"#2F4C72"},s=[".option-1",".option-2",".option-3",".option-4"],r=t=>{let e=document.querySelector(t);e.addEventListener("mouseover",(()=>{document.body.style.backgroundColor=n[t],s.forEach((e=>{document.querySelector(e).style["filter"]=e!==t?"blur(3px)":"blur(0px)"}))}))};r(t),r(e),r(i),r(o)}function b(){let t=r.p8.timeline({defaults:{duration:.75}});document.querySelector(".main-section").style.display="block",t.to(".titles-container",{opacity:0,pointerEvents:"none",scale:.85,ease:"power3.inOut",onComplete:function(){c(".skew-container-2",".skew-2")}}).to(".right-arrow",{right:"-400",scale:.85},"<").to(".option-1",{opacity:1,transform:"matrix3d(1,0,0.00,0,0.00,1,0,0,0,0,1,0,0,0,0,1)",scale:1}).to(".option-2",{opacity:1,transform:"matrix3d(1,0,0.00,0,0.00,1,0,0,0,0,1,0,0,0,0,1)",scale:1},">-0.6").to(".option-3",{opacity:1,transform:"matrix3d(1,0,0.00,0,0.00,1,0,0,0,0,1,0,0,0,0,1)",scale:1},">-0.6").to(".option-4",{opacity:1,transform:"matrix3d(1,0,0.00,0,0.00,1,0,0,0,0,1,0,0,0,0,1)",scale:1},">-0.6"),w()}const x={id:"section-1",class:"skew-container"},_=(0,n.uE)('<div class="w-100 h-100 skew"><div class="h-100 d-flex flex-column justify-content-center titles-container"><div class="title hero-title-1"> Matías Berríos <div class="title-shadow">Matías Berríos</div></div><div class="title hero-title-2">Desarrollador y estudiante chileno</div><div class="title hero-title-3"> &gt; especialista en:   <div id="typewriter"></div></div></div></div>',1);var S={__name:"HeroSection",setup(t){return(0,n.bv)((()=>{p()})),(t,e)=>((0,n.wg)(),(0,n.iD)("section",x,[_,(0,n.Wm)(y,{class:"right-arrow",onClick:e[0]||(e[0]=t=>(0,s.SU)(b)())})]))}};const k=S;var A=k,O=i.p+"img/pfp2.1c25ac3a.jpeg";function C(){r.p8.to(".aboutme-text",{delay:.5,opacity:1})}function Y(t){3===t&&C();let e=[".option-1",".option-2",".option-3",".option-4"],i=`.option-${t}`,o=r.p8.timeline({defaults:{duration:.5,ease:"power2.inOut"},onComplete:()=>{r.p8.to(i,{top:"20vh"})}});e.forEach((t=>{document.querySelector(t).style.pointerEvents="none",t!==i&&o.to(t,{opacity:0,marginLeft:20,scale:.8},"<")})),o.to(".left-arrow",{opacity:1,scale:1,marginLeft:150},"<").to(".option-fill",{width:"100%"},"<").to}const X={class:"main-section"},P={class:"container h-100 d-flex flex-row skew-container-2 justify-content-between options-container"},D={class:"col-4 px-4"},M=(0,n._)("div",{class:"option-fill"},[(0,n._)("p",{class:"inverted-content"},"inicio")],-1),L=(0,n._)("div",{class:"option-fill"},[(0,n._)("p",{class:"inverted-content"},"experiencia")],-1),j=(0,n._)("div",{class:"option-fill"},[(0,n._)("p",{class:"inverted-content"},"sobre mí")],-1),z=(0,n._)("div",{class:"option-fill"},[(0,n._)("p",{class:"inverted-content"},"contacto")],-1),U=(0,n._)("img",{class:"aboutme aboutme-img",src:O},null,-1),B=(0,n._)("div",{class:"col-8 px-4 d-flex"},[(0,n._)("p",{class:"aboutme p-2 aboutme-text"},[(0,n.Uk)(" Como estudiante y desarrollador, me encuentro en una constante búsqueda de nuevos desafíos y oportunidades para progresar mis habilidades y conocimientos. Siempre busco empujar mis limites. "),(0,n._)("br"),(0,n._)("br"),(0,n.Uk)(" Me veo a mí mismo como una persona con iniciativa que disfruta de colaborar con personas apasionadas por lo que hagan. Actualmente estoy estudiando Ingeniería de Software en la Pontificia Universidad Católica de Chile. Si tienes alguna pregunta o quieres contactarme, ¡No dudes en contactarme! ")])],-1);var q={__name:"MainSection",setup(t){return(t,e)=>((0,n.wg)(),(0,n.iD)("section",X,[(0,n._)("div",P,[(0,n._)("div",D,[(0,n._)("div",{class:"option option-1 skew-2",onClick:e[0]||(e[0]=t=>(0,s.SU)(Y)(1))},[(0,n.Uk)(" inicio "),M]),(0,n._)("div",{class:"option option-2",onClick:e[1]||(e[1]=t=>(0,s.SU)(Y)(2))},[(0,n.Uk)(" experiencia "),L]),(0,n._)("div",{class:"option option-3",onClick:e[2]||(e[2]=t=>(0,s.SU)(Y)(3))},[(0,n.Uk)(" sobre mí "),j]),(0,n._)("div",{class:"option option-4",onClick:e[3]||(e[3]=t=>(0,s.SU)(Y)(4))},[(0,n.Uk)(" contacto "),z]),U]),B]),(0,n.Wm)(y,{class:"left-arrow"})]))}};const E=q;var $=E;const T={class:"nav-header px-5"},W=(0,n._)("div",{class:"header-content w-100 d-flex"},[(0,n.Uk)(" matias berrios"),(0,n._)("div",{class:"locales-container"},[(0,n._)("a",{id:"es"},"es"),(0,n.Uk)("/"),(0,n._)("a",{id:"en"},"en")])],-1),Z=[W];function F(t,e){return(0,n.wg)(),(0,n.iD)("header",T,Z)}const H={},R=(0,v.Z)(H,[["render",F]]);var I=R;function N(){class t{constructor(){this.root=document.body,this.cursor=document.querySelector(".curzr"),this.position={distanceX:0,distanceY:0,distance:0,pointerX:0,pointerY:0},this.previousPointerX=0,this.previousPointerY=0,this.angle=0,this.previousAngle=0,this.angleDisplace=0,this.degrees=57.296,this.cursorSize=20,this.cursorStyle={boxSizing:"border-box",position:"fixed",top:"0px",left:-this.cursorSize/2+"px",zIndex:"2147483647",width:`${this.cursorSize}px`,height:`${this.cursorSize}px`,transition:"250ms, transform 100ms",userSelect:"none",pointerEvents:"none"},this.init(this.cursor,this.cursorStyle)}init(t,e){Object.assign(t.style,e),this.cursor.removeAttribute("hidden")}move(t){this.previousPointerX=this.position.pointerX,this.previousPointerY=this.position.pointerY,this.position.pointerX=t.pageX+this.root.getBoundingClientRect().x,this.position.pointerY=t.pageY+this.root.getBoundingClientRect().y,this.position.distanceX=this.previousPointerX-this.position.pointerX,this.position.distanceY=this.previousPointerY-this.position.pointerY,this.distance=Math.sqrt(this.position.distanceY**2+this.position.distanceX**2),this.cursor.style.transform=`translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`,this.distance>1?this.rotate(this.position):this.cursor.style.transform+=` rotate(${this.angleDisplace}deg)`}rotate(t){let e,i=Math.atan(Math.abs(t.distanceY)/Math.abs(t.distanceX))*this.degrees;const o=this.cursor.style;this.previousAngle=this.angle,t.distanceX<=0&&t.distanceY>=0?this.angle=90-i+0:t.distanceX<0&&t.distanceY<0?this.angle=i+90:t.distanceX>=0&&t.distanceY<=0?this.angle=90-i+180:t.distanceX>0&&t.distanceY>0&&(this.angle=i+270),isNaN(this.angle)?this.angle=this.previousAngle:this.angle-this.previousAngle<=-270?this.angleDisplace+=360+this.angle-this.previousAngle:this.angle-this.previousAngle>=270?this.angleDisplace+=this.angle-this.previousAngle-360:this.angleDisplace+=this.angle-this.previousAngle,o.transform+=` rotate(${this.angleDisplace}deg)`,setTimeout((()=>{e=this.angleDisplace>=0?this.angleDisplace%360:360+this.angleDisplace%360,e>=45&&e<135?(o.left=-this.cursorSize+"px",o.top=-this.cursorSize/2+"px"):e>=135&&e<225?(o.left=-this.cursorSize/2+"px",o.top=-this.cursorSize+"px"):e>=225&&e<315?(o.left="0px",o.top=-this.cursorSize/2+"px"):(o.left=-this.cursorSize/2+"px",o.top="0px")}),0)}remove(){this.cursor.remove()}}(()=>{const e=new t;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.remove():document.onmousemove=function(t){e.move(t)}})()}const V={class:"curzr",hidden:""},G=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},[(0,n._)("path",{class:"inner",d:"M25,30a5.82,5.82,0,0,1-1.09-.17l-.2-.07-7.36-3.48a.72.72,0,0,0-.35-.08.78.78,0,0,0-.33.07L8.24,29.54a.66.66,0,0,1-.2.06,5.17,5.17,0,0,1-1,.15,3.6,3.6,0,0,1-3.29-5L12.68,4.2a3.59,3.59,0,0,1,6.58,0l9,20.74A3.6,3.6,0,0,1,25,30Z",fill:"#F2F5F8"}),(0,n._)("path",{class:"outer",d:"M16,3A2.59,2.59,0,0,1,18.34,4.6l9,20.74A2.59,2.59,0,0,1,25,29a5.42,5.42,0,0,1-.86-.15l-7.37-3.48a1.84,1.84,0,0,0-.77-.17,1.69,1.69,0,0,0-.73.16l-7.4,3.31a5.89,5.89,0,0,1-.79.12,2.59,2.59,0,0,1-2.37-3.62L13.6,4.6A2.58,2.58,0,0,1,16,3m0-2h0A4.58,4.58,0,0,0,11.76,3.8L2.84,24.33A4.58,4.58,0,0,0,7,30.75a6.08,6.08,0,0,0,1.21-.17,1.87,1.87,0,0,0,.4-.13L16,27.18l7.29,3.44a1.64,1.64,0,0,0,.39.14A6.37,6.37,0,0,0,25,31a4.59,4.59,0,0,0,4.21-6.41l-9-20.75A4.62,4.62,0,0,0,16,1Z",fill:"#111920"})],-1),J=[G];function K(t,e){return(0,n.wg)(),(0,n.iD)("div",V,J)}const Q={},tt=(0,v.Z)(Q,[["render",K]]);var et=tt;const it=(0,n._)("div",{class:"bg"},null,-1);var ot={__name:"App",setup(t){return(0,n.bv)((()=>{N()})),(t,e)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[it,(0,n.Wm)(et),(0,n.Wm)(I),(0,n.Wm)(A),(0,n.Wm)($)],64))}};const nt=ot;var st=nt,rt=i(2166);const at=(0,o.ri)(st);at.use(rt["default"]),at.use(r.p8),at.mount("#app")}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,o,n,s){if(!o){var r=1/0;for(p=0;p<t.length;p++){o=t[p][0],n=t[p][1],s=t[p][2];for(var a=!0,c=0;c<o.length;c++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](o[c])}))?o.splice(c--,1):(a=!1,s<r&&(r=s));if(a){t.splice(p--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[o,n,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/portafolio-rebuild/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,s,r=o[0],a=o[1],c=o[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var p=c(i)}for(e&&e(o);l<r.length;l++)s=r[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(p)},o=self["webpackChunkportafolio_v2_vue"]=self["webpackChunkportafolio_v2_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(4063)}));o=i.O(o)})();
//# sourceMappingURL=app.5ffed194.js.map