"use strict";
{
  //min...max
  // min + Math.floor(Math.random() * (max + 1 - min))

  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    // const results = ["Great", "Middle", "Bad", "Small"];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)]; // important

    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = "Great";
    } else if (n < 0.2) {
      btn.textContent = "Middle";
    } else {
      btn.textContent = "Bad";
    }

    // btn.textContent = n;

    // switch (n) {
    //   case 0:
    //     btn.textContent = "Great";
    //     break;
    //   case 1:
    //     btn.textContent = "Middle";
    //     break;
    //   case 2:
    //     btn.textContent = "Bad";
    //     break;
    // }
  });
}
