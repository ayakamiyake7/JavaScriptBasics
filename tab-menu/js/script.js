"use strict";

const tabs = document.querySelectorAll("li a");
const contents = document.querySelectorAll(".content");

// for (let i = 0; i < tabs.length; i++) {
//   for (let i = 0; i < contents.length; i++) {
//     tabs[i].addEventListener("click", () => {
//       tabs[i].classList.add("active");
//       contents[i].classList.add("active");

//       tabs.forEach((t) => {
//         if (tabs[i] !== t) {
//           t.classList.remove("active");
//         }
//       });
//       contents.forEach((c) => {
//         if (contents[i] !== c) {
//           c.classList.remove("active");
//         }
//       });
//     });
//   }
// }

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    tab.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    console.log(tab);
    console.log(tab.dataset.id);
    document.getElementById(tab.dataset.id).classList.add("active");
  });
});
