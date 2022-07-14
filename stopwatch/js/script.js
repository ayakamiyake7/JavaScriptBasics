"use strict";
{
  const timer = document.getElementById("timer");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    // console.log(Date.now() - startTime);
    const d = new Date(Date.now() - startTime + elapsedTime);
    // まずはDate.now()は1970年から現在までのミリ秒を返します。ストップウォッチをスタートした時にそれがstartTimeに保存されます。
    // そしてたとえば10秒後にDate.now()とすると先ほどのstartTimeから10000ミリ秒足された値になっているはずですよね。なのでDate.now() - startTimeとすると10000が取り出されます。
    // new Date(..)の..の部分は何も指定していないと現在時刻になるのですが実はミリ秒も指定することができて、その場合は1970年からのミリ秒として扱われます。
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function setButtonStateInitial() {
    start.classList.remove("inactive");
    stop.classList.add("inactive");
    reset.classList.add("inactive");
  }
  function setButtonStateRunning() {
    start.classList.add("inactive");
    stop.classList.remove("inactive");
    reset.classList.add("inactive");
  }
  function setButtonStateStopped() {
    start.classList.remove("inactive");
    stop.classList.add("inactive");
    reset.classList.remove("inactive");
  }

  setButtonStateInitial();

  start.addEventListener("click", () => {
    if (start.classList.contains("inactive") === true) {
      return;
    }
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener("click", () => {
    if (stop.classList.contains("inactive") === true) {
      return;
    }
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener("click", () => {
    if (reset.classList.contains("inactive") === true) {
      return;
    }
    setButtonStateInitial();
    timer.textContent = "00:00.000";
    elapsedTime = 0;
  });
}
