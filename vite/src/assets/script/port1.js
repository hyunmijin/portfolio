    //스크롤효과
    document.addEventListener("DOMContentLoaded", function () {
        const tl = gsap.timeline({ defaults: { duration: 1 } });
  
        const box1 = document.querySelector("#section2 .sec2-cont > h3");
        const box2 = document.querySelector("#section2 .top");
  
        window.addEventListener("scroll", function () {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
  
          if (scrollTop + windowHeight > box1.offsetTop) {
            tl.to(box1, { opacity: 1, y: 0 });
          }
  
          if (scrollTop + windowHeight > box2.offsetTop) {
            tl.to(box2, { opacity: 1, y: 0 });
          }
        });
      });