function scrollUp(e) {
    /*1. 함수를 적용할 target 변수 지정하기*/
    let topButton = document.getElementById(e);
  
    /*2. 버튼 클릭 시 화면의 최상단으로 이동하기*/
    topButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }
  

function scrollDown(e) {
  /*1. 함수를 적용할 target 변수 지정하기*/
  let bottomHeight = document.querySelector(".about-heyj").offsetTop;
  let botButton = document.getElementById(e);
  /*2. 버튼 클릭 시 화면의 최상단으로 이동하기*/
  botButton.addEventListener('click', function () {
    window.scrollTo({ top:bottomHeight , left: 0, behavior: 'smooth' });
  });
}

scrollUp("totop");
scrollDown("about");