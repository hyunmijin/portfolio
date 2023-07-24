const panel3 = document.querySelector("#section3");
const ani3 = gsap.timeline();
ani3.to(".site-wrap.s1", { xPercent: -300 });

ScrollTrigger.create({
  animation: ani3,
  trigger: panel3,
  start: "top top",
  pin: true,
  pinSpacing: false,
  scrub: true,
  anticipatePin: 1,
  end: "+=20000",
});