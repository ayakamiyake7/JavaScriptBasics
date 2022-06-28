"use strict";

// console.log("Hello World main.js");

// console.log("hel\nlo w\torld");

// const signal = "blue";
// switch (signal) {
//   case "red":
//     console.log("Danger");
//     break;
//   case "yellow":
//     console.log("Caution");
//     break;
//   case "blue":
//   case "green":
//     console.log("Go");
//     break;
//   default:
//     console.log("Wrong signal");
//     break;
// }

// i>5: hello
// i<5: morning
// let word = "";
// for (let count = 0; count < 10; count++) {
//   if (count > 5) {
//     console.log("hello");
//   } else if (count <= 5) {
//     console.log("morning");
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`hello${i}`);
// }

// let hp = 100;
// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 20;
// }
let hp = -50;
do {
  console.log(`${hp} HP left!`);
  hp -= 20;
} while (hp > 0);

for (let i = 0; i <= 10; i++) {
  //   if (i === 4) {
  //     continue;
  //   }
  //   if (i % 3 === 0) {
  //     continue;
  //   }
  if (i === 4) {
    break;
  }
  console.log(i);
}

function showAd(message = "Ad") {
  console.log("-------------------------");
  console.log(`-----------${message}------------`);
  console.log("-------------------------");
}

console.log("a");
showAd();
console.log("b");
showAd("middle Ad");
console.log("c");
