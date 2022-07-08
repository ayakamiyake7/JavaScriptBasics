"use strict";
{
  const open = document.querySelector("#open");
  const close = document.querySelector("#close");
  const mask = document.querySelector("#mask");
  const modal = document.querySelector("#modal");

  open.addEventListener("click", () => {
    mask.classList.add("active");
    modal.classList.add("active");
  });

  mask.addEventListener("click", () => {
    mask.classList.remove("active");
    modal.classList.remove("active");
  });
  close.addEventListener("click", () => {
    // mask.classList.remove("active");
    // modal.classList.remove("active");
    mask.click();
  });
}
d;
