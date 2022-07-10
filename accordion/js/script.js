"use strict";

const questions = document.querySelectorAll("dt");
const answers = document.querySelectorAll("dd");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.parentNode.classList.toggle("show");

    questions.forEach((q) => {
      if (question !== q) {
        q.parentNode.classList.remove("show");
      }
    });
  });
});
