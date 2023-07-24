//콘텐츠 마우스오버효과
// $(function () {
//     $(".tab-group").each(function () {
//       let tabGroup = $(this);
//       let tabBtn = tabGroup.find(".tab-cont .div"); // 버튼 설정
//       let tabCont = tabGroup.find(".tab-cont .cont"); // 콘텐츠 설정
//       let originalIndex = 0; // 원래 콘텐츠의 인덱스 저장 변수
//       tabCont.hide().eq(originalIndex).show(); // 첫 번째 콘텐츠만 보이게 설정

//       tabBtn.mouseover(function () {
//         const index = $(this).index(); // 클릭한 번호를 저장

//         tabCont.hide().fadeOut(200).eq(index).siblings().show().fadeIn(200); // 선택한 콘텐츠 숨기고 나머지 콘텐츠 보이기

//         $(this).addClass("active").siblings().removeClass("active"); // 내가 클릭한 버튼에 클래스를 추가하고 나머지 버튼은 삭제
//       });

//       tabCont.mouseout(function () {
//         tabCont.hide().eq(originalIndex).show(); // 원래 콘텐츠 보이기
//       });
//     });
//   });

//pin효과
const panel5 = document.querySelector("#section5");

ScrollTrigger.create({
  trigger: panel5,
  start: "top top",
  scrub: true,
  pin: true,
  end: "+=20000",
  anticipatePin: 1,
  pinSpacing: false,
});
