"use strict";
{
  const open = document.querySelector("#open");
  const close = document.querySelector("#close");
  const overlay = document.querySelector("#overlay");

  open.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    open.style.display = "none";
    overlay.classList.add("show");
  });
  close.addEventListener("click", () => {
    overlay.classList.add("hidden");
    open.style.display = "block";
    overlay.classList.remove("show");
  });
}
