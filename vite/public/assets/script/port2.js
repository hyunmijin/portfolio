
const panel4 = document.querySelector("#section4");

//핀 애니메이션 효과
const ani4 = gsap.timeline();
ani4.to(".site-wrap.s2", { xPercent: -400 });

ScrollTrigger.create({
  animation: ani4,
  trigger: panel4,
  start: "top top",
  scrub: true,
  pin: true,
  end: "+=20000",
  anticipatePin: 1,
  pinSpacing: false,
});