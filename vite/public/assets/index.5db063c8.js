const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}};M();gsap.set(".text-wrap ul li",{autoAlpha:0});gsap.set("#artboard",{autoAlpha:0,scale:.7});gsap.set("#canvas",{autoAlpha:0});setTimeout(()=>{gsap.to("#canvas",{autoAlpha:1}),gsap.to("#artboard",{autoAlpha:1,scale:1,duration:2,delay:1}),gsap.to(".text-wrap ul li",{autoAlpha:1,scale:1,duration:2,delay:2,stagger:.1})},2e3);const b=document.querySelector("#section1");ScrollTrigger.create({trigger:b,start:"top top",pin:!0,pinSpacing:!1,scrub:!0,anticipatePin:1});class h{constructor(t,o){this.x=t,this.y=o}set(t,o){return this.x=t,this.y=o,this}clone(){return new h(this.x,this.y)}add(t){return this.x+=t.x,this.y+=t.y,this}sub(t){return this.x-=t.x,this.y-=t.y,this}setFromAngle(t){this.x=Math.cos(t),this.y=Math.sin(t)}addFromScalar(t,o){this.x+=t,this.y+=o}}window.onload=function(){var n=document.getElementById("canvas"),t=n.getContext("2d"),o=n.width=window.innerWidth,a=n.height=window.innerHeight,i=[],r=80,c=["#eeb900","#6DD0A5","#f799db"];function u(e,s){return Math.floor(Math.random()*(s-e+1)+e)}function p(e){return e[Math.floor(Math.random()*e.length)]}class g{constructor(s,f,y,m,w,x){this.position=new h(s,f),this.velocity=new h(1,1),this.velocity.setFromAngle(m),this.speed=y,this.radius=w,this.color=x}update(){this.position.addFromScalar(this.velocity.x*this.speed,this.velocity.y*this.speed),(this.position.x+this.radius>n.width||this.position.x-this.radius<0)&&(this.velocity.x*=-1),(this.position.y+this.radius>n.height||this.position.y-this.radius<0)&&(this.velocity.y*=-1)}}for(let e=0;e<r;e++)i.push(new g(n.width/2,n.height/2,Math.random()+1,Math.random()*Math.PI*2,u(2,24),p(c)));l();function l(){t.clearRect(0,0,o,a);for(let s=0;s<r;s++){var e=i[s];e.update(),t.beginPath(),t.arc(e.position.x,e.position.y,e.radius,0,Math.PI*2,!1),t.fillStyle=e.color,t.fill()}requestAnimationFrame(l)}};const P=document.querySelector("#section2");ScrollTrigger.create({trigger:P,start:"top top",pin:!0,pinSpacing:!1,scrub:!0,anticipatePin:1,end:"+=20000"});document.addEventListener("DOMContentLoaded",function(){const n=gsap.timeline({defaults:{duration:1}}),t=document.querySelector("#section2 .sec2-cont > h3"),o=document.querySelector("#section2 .top");window.addEventListener("scroll",function(){const a=window.pageYOffset||document.documentElement.scrollTop,i=window.innerHeight||document.documentElement.clientHeight;a+i>t.offsetTop&&n.to(t,{opacity:1,y:0}),a+i>o.offsetTop&&n.to(o,{opacity:1,y:0})})});class d{constructor(t,o){this.x=t,this.y=o}set(t,o){return this.x=t,this.y=o,this}clone(){return new d(this.x,this.y)}add(t){return this.x+=t.x,this.y+=t.y,this}sub(t){return this.x-=t.x,this.y-=t.y,this}setFromAngle(t){this.x=Math.cos(t),this.y=Math.sin(t)}addFromScalar(t,o){this.x+=t,this.y+=o}}window.onload=function(){var n=document.getElementById("canvas"),t=n.getContext("2d"),o=n.width=window.innerWidth,a=n.height=window.innerHeight,i=[],r=80,c=["#eeb900","#6DD0A5","#f799db"];function u(e,s){return Math.floor(Math.random()*(s-e+1)+e)}function p(e){return e[Math.floor(Math.random()*e.length)]}class g{constructor(s,f,y,m,w,x){this.position=new d(s,f),this.velocity=new d(1,1),this.velocity.setFromAngle(m),this.speed=y,this.radius=w,this.color=x}update(){this.position.addFromScalar(this.velocity.x*this.speed,this.velocity.y*this.speed),(this.position.x+this.radius>n.width||this.position.x-this.radius<0)&&(this.velocity.x*=-1),(this.position.y+this.radius>n.height||this.position.y-this.radius<0)&&(this.velocity.y*=-1)}}for(let e=0;e<r;e++)i.push(new g(n.width/2,n.height/2,Math.random()+1,Math.random()*Math.PI*2,u(2,24),p(c)));l();function l(){t.clearRect(0,0,o,a);for(let s=0;s<r;s++){var e=i[s];e.update(),t.beginPath(),t.arc(e.position.x,e.position.y,e.radius,0,Math.PI*2,!1),t.fillStyle=e.color,t.fill()}requestAnimationFrame(l)}};const A=document.querySelector("#section3"),S=gsap.timeline();S.to(".site-wrap.s1",{xPercent:-300});ScrollTrigger.create({animation:S,trigger:A,start:"top top",pin:!0,pinSpacing:!1,scrub:!0,anticipatePin:1,end:"+=20000"});const F=document.querySelector("#section4"),v=gsap.timeline();v.to(".site-wrap.s2",{xPercent:-400});ScrollTrigger.create({animation:v,trigger:F,start:"top top",scrub:!0,pin:!0,end:"+=20000",anticipatePin:1,pinSpacing:!1});const q=document.querySelector("#section5");ScrollTrigger.create({trigger:q,start:"top top",scrub:!0,pin:!0,end:"+=20000",anticipatePin:1,pinSpacing:!1});const T=document.querySelector("#section6");ScrollTrigger.create({trigger:T,start:"top top",pin:!0,anticipatePin:1});
