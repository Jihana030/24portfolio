(function () {
  const png = document.querySelector(".draw_png");
  const gif = document.querySelector(".draw_gif");
  const txtWrap = document.querySelector(".txt_wrap");

  const txtArr = [
    "오늘은 아무것도 하지 마세요!",
    "오늘은 젤리를 <span></span>개 먹어보면 어떨까요?",
    "오늘은 빵을 <span></span>개 사보면 어떨까요?",
    "오늘은 사탕을 <span></span>개 사보면 어떨까요?",
    "오늘은 선물을 <span></span>개 해보면 어떨까요?",
    "오늘은 사람을 <span></span>명 만나보면 어떨까요?",
  ];

  png.addEventListener("click", (e) => {
    png.classList.add("dis-none");
    gif.classList.remove("dis-none");
    setTimeout(() => {
      txtWrap.classList.remove("dis-none");
      const randomNum = document.querySelector(".random_num");
      const random = parseInt(Math.random() * 10);
      randomNum.innerHTML = random;

      const randomTxt = document.querySelector(".random_txt");
      if (random === 0) {
        randomTxt.innerHTML = `${txtArr[0]}`;
      } else {
        const txtRandom = parseInt((Math.random() * (txtArr.length-1))+1);
        randomTxt.innerHTML = `${txtArr[txtRandom]}`;
        randomTxt.childNodes[1].innerHTML = `${random}`;
      }
    }, 8000);
  });
  gif.addEventListener("click", (e) => {
    gif.classList.add("dis-none");
    png.classList.remove("dis-none");
    txtWrap.classList.add("dis-none");
  });
})();
