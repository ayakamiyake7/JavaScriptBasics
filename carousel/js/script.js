"use strict";
{
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const ul = document.querySelector("ul");
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButton() {
    prev.classList.remove("hidden");
    next.classList.remove("hidden");

    if (currentIndex === 0) {
      prev.classList.add("hidden");
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add("hidden");
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => {
        currentIndex = i;
        // dots.forEach((dot) => {
        //   dot.classList.remove("current");
        // });
        // dots[currentIndex].classList.add("current");
        updateDots();
        updateButton();
        moveSlides();
      });
      dots.push(button);
      document.querySelector("nav").appendChild(button);
    }
    dots[0].classList.add("current");
  }

  function updateDots() {
    dots.forEach((dot) => {
      dot.classList.remove("current");
    });
    dots[currentIndex].classList.add("current");
  }

  updateButton();
  setupDots();

  next.addEventListener("click", () => {
    currentIndex++;
    updateButton();
    updateDots();
    moveSlides();
    // const slideWidth = slides[0].getBoundingClientRect().width;
    // ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  });

  prev.addEventListener("click", () => {
    currentIndex--;
    updateButton();
    updateDots();
    moveSlides();
    // const slideWidth = slides[0].getBoundingClientRect().width;
    // ul.style.transform = `translateX(${slideWidth * currentIndex}px)`;
  });

  window.addEventListener("resize", () => {
    moveSlides();
  });
}

//0, 1, 2という画像があるとします。
// 最初の画像をまずは末尾にcloneして追加します。そうすると0, 1, 2, 0になりますね。
// その後、右矢印をクリックして、0の画像から、1, 2と遷移していって、そこで右矢印をクリックすると0が右側からでてくるはずです。
// そしてその0が 右からでてくるアニメーションが終わった瞬間にtranstionの効果を無効化して 、「0, 1, 2, 0」を右側まで瞬間的に動かして、最初の0が表示されるようにします。また同時にtransitionの効果を再度有効化します。
// そうすれば次に右矢印をクリックしたときも1, 2, 0, 1, 2, .... といった具合にループしますね。
// これと同じ考え方を応用すれば左矢印をクリックしたときの動作も作れるはずです。

// このあたりは「carousel infinite loop」あたりで検索すれば実装方法がでてくるはずです。自分で組み上げてみたい場合は以下のYouTubeをもとにやってみてください。

// https://www.youtube.com/watch?v=0YMntQg-WIk
