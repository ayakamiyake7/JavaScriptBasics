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
// let hp = -50;
// do {
//   console.log(`${hp} HP left!`);
//   hp -= 20;
// } while (hp > 0);

// for (let i = 0; i <= 10; i++) {
//   if (i === 4) {
//     continue;
//   }
//   if (i % 3 === 0) {
//     continue;
//   }
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

// function showAd(message = "Ad") {
//   console.log("-------------------------");
//   console.log(`-----------${message}------------`);
//   console.log("-------------------------");
// }

// console.log("a");
// showAd();
// console.log("b");
// showAd("middle Ad");
// console.log("c");

// function sum(a, b, c) {
//   return a + b + c;
// }
// const sum = function (a, b, c) {
//   return a + b + c;
// };
// const sum = (a, b, c) => {
//   return a + b + c;
// };
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const double = (a) => a * 2;
// console.log(double(12));

{
  //   const scores = [80, 90, 40, 70];
  //   scores.splice(1, 1, 50, 40);
  //   for (let i = 0; i < scores.length; i++) {
  //     console.log(`Score ${i}: ${scores[i]}`);
  //   }
  //   scores.push(60, 50);
  //   scores.shift();
  //   console.log(scores);

  //   const otherScores = [10, 20];
  //   const scores = [80, 40, ...otherScores];
  //   //   console.log(scores);
  //   function sum(a, b) {
  //     console.log(a + b);
  //   }
  //   sum(1, 2);
  //   sum(...otherScores);

  //   const scores = [80, 90, 40, 70];
  //   const [a, b, c, d] = scores;
  //   console.log(a);
  //   console.log(b);
  //   const [a, b, ...others] = scores;
  //   console.log(a);
  //   console.log(others);

  //   let x = 30;
  //   let y = 70;
  //   [x, y] = [y, x];
  //   console.log("x=", x);
  //   console.log("y=", y);

  //   const scores = [80, 90, 40, 70];
  //   scores.forEach((score, i) => console.log(`Score${i + 1} : ${score}`));

  //   const prices = [180, 190, 200];
  //   const updatePrices = prices.map((price) => price + 20);
  //   console.log(updatePrices);

  //   const numbers = [2, 4, 5, 6];
  //   const evenNumbers = numbers.filter((number) => {
  //     return number % 2 === 0;
  //   });
  //   console.log(evenNumbers);

  //   point.z = 200;
  //   delete point["y"];
  //   const otherProps = { r: 4, color: "red" };
  //   const point = { x: 100, y: 180, ...otherProps };
  //   //   console.log(point);
  //   const { x, r, ...others } = point;
  //   console.log(x); //100
  //   console.log(r); //4
  //   console.log(others); //color:"red",y:180

  //   const point = { x: 100, y: 180 };
  //   const keys = Object.keys(point);
  //   keys.forEach((key) => {
  //     console.log(`Key: ${key} Value: ${point[key]}`);
  //   });

  const points = [
    { x: 30, y: 20 },
    { x: 10, y: 50 },
    { x: 40, y: 40 },
  ];
  console.log(points[1]["y"]);
}
