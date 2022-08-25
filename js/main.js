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
  //! splice, push, shift
  // const scores = [80, 90, 40, 70];
  // scores.push(60, 50);
  // scores.shift();
  // console.log(scores);
  // scores.splice(1, 1, 50, 40); //80,50,40,40,70
  //! for
  // for (let i = 0; i < scores.length; i++) {
  //   console.log(`Score ${i}: ${scores[i]}`);
  // }
  //! spread syntax
  // const otherScores = [10, 20];
  // const scores = [80, 40, ...otherScores];
  // console.log(scores);
  // function sum(a, b) {
  //   console.log(a + b);
  // }
  // sum(1, 2);
  // sum(...otherScores);
  //! Destructuring assignment 分割代入
  // const scores = [80, 90, 40, 70];
  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // const [a, b, ...others] = scores;
  // console.log(a);
  // console.log(others);
  // let x = 30;
  // let y = 70;
  // [x, y] = [y, x];
  // console.log("x=", x);
  // console.log("y=", y);
  // const scores = [80, 90, 40, 70];
  //! forEach, map, filter
  // scores.forEach((score, i) => console.log(`Score${i + 1} : ${score}`));
  //   const prices = [180, 190, 200];
  //   const updatePrices = prices.map((price) => price + 20);
  //   console.log(updatePrices);
  // const numbers = [2, 4, 5, 6];
  // const evenNumbers = numbers.filter((number) => {
  //   return number % 2 === 0;
  // });
  // console.log(evenNumbers);
  // const otherProps = { r: 4, color: "red" };
  // const point = { x: 100, y: 180, ...otherProps };
  // point.z = 200;
  // delete point["y"];
  // console.log(point);
  // const { x, r, ...others } = point;
  // console.log(x); //100
  // console.log(r); //4
  // console.log(others); //color:"red",y:180
  // const point = { x: 100, y: 180 };
  //! Object.keys
  // const keys = Object.keys(point); //?
  // keys.forEach((key) => {
  //   console.log(`Key: ${key} Value: ${point[key]}`);
  // });
  // const points = [
  //   { x: 30, y: 20 },
  //   { x: 10, y: 50 },
  //   { x: 40, y: 40 },
  // ];
  // console.log(points[1]["y"]);
  // let x = [1, 2];
  // let y = x;
  // let y = [...x];
  //   x[0] = 5;
  //   console.log(x);
  //   console.log(y);
  //! substring
  // const str = "hello";
  // console.log(str.substring(4, 6));
  //! join
  // const d = [2000, 9, 1];
  // console.log(d.join("/"));
  //! split
  // const t = "17:10:45";
  // console.log(t.split(":"));
  // const [hour, minute, second] = t.split(":"); //?
  // console.log(hour);
  // console.log(minute);
  // console.log(second);
  //! forEach, Math
  // const scores = [10, 3, 9];
  // let sum = 0;
  // scores.forEach((score) => {
  //   sum = sum + score;
  // });
  // const average = sum / scores.length;
  // console.log(Math.floor(average));
  // console.log(Math.random());
  // for (let i = 0; i < scores.length; i++) {
  //   sum = sum + scores[i];
  // }
  // console.log(sum);
  //! Math
  // console.log(Math.floor(Math.random() * 6) + 1);
  // console.log(Math.floor(Math.random() * 7) + 4);
  //! new Date
  // const d = new Date();
  // console.log(d.getMonth() + 1);
  // console.log(`${d.getFullYear()} / ${d.getMonth() + 1} / ${d.getDate()}`);
  // const d = new Date(2019, 10);
  // d.setHours(10, 20, 30);
  // d.setDate(31);
  // d.setDate(d.getDate() + 3);
  // console.log(d);
  //! confirm
  //   const answer = confirm("OK?");
  //   if (answer) {
  //     console.log("yes");
  //   } else {
  //     console.log("No");
  //   }
  //! setInterval, clearInterval
  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   i++; //? setInterval
  //   if (i > 2) {
  //     clearInterval(intervalId);
  //   }
  // }
  // const intervalId = setInterval(showTime, 1000);
  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   const timeOutId = setTimeout(showTime, 1000);
  //   i++;
  //   console.log(timeOutId);
  //   if (i > 2) {
  //     clearTimeout(timeOutId);
  //   }
  // }
  // showTime();
  //! try catch
  // const name = 5;
  // try {
  //   console.log(name.toUpperCase());
  // } catch (e) {
  //   console.log(e);
  // }
  // console.log("Finished!");
  //! class constructor
  // class Post {
  //   //?
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 0;
  //   }
  //   show() {
  //     console.log(`${this.text} - ${this.likeCount} likes`);
  //   }
  //   like() {
  //     this.likeCount++;
  //     this.show();
  //   }
  //   static showInfo() {
  //     console.log("Post Info");
  //   }
  // }
  //! class extends
  // class SponsoredPost extends Post {
  //   constructor(text, sponsor) {
  //     super(text);
  //     this.sponsor = sponsor;
  //   }
  //   show() {
  //     super.show();
  //     console.log(`... sponsored by ${this.sponsor}`);
  //   }
  //   static showInfo() {
  //     console.log("Post Info");
  //   }
  // }
  // const posts = [
  //   new Post("Studying JavaScript..."),
  //   new Post("Enjoy JavaScript"),
  // new SponsoredPost("3 minutes movies", "dot install"),
  // {
  //   text: "Studying JavaScript...",
  //   likeCount: 0,
  //   show() {
  //     console.log(`${this.text} - ${this.likeCount}`);
  //   },
  // },
  //   {
  //     text: "Enjoy JavaScript",
  //     likeCount: 0,
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}`);
  //     },
  //   },
  // ];
  // posts[0].like();
  // posts[1].like();
  // show(posts[0]);
  // posts[0].show();
  // posts[1].show();
  // Post.showInfo();
  // posts[2].show();
  // posts[2].like();
  // ****************************************************************
  //DOM
  // function update() {
  // document.querySelector("#heading").textContent = "Morning!";
  // document.querySelectorAll("p")[1].textContent = "Changed!";
  //   document
  //     .querySelectorAll("p")
  //     .forEach((p, index) => (p.textContent = `${index + 1}: p`));
  // }
  // setTimeout(update, 1000);
  // document.querySelector("button").addEventListener("click", () => {
  //   const targetNode = document.querySelector("#target");
  // targetNode.title = "This is title!";
  // targetNode.style.color = "skyblue";
  // targetNode.classList.add("my-color");
  // if (targetNode.classList.contains("my-color") === true) {
  //   targetNode.classList.remove("my-color");
  // } else {
  //   targetNode.classList.add("my-color");
  // }
  // targetNode.classList.toggle("my-color");
  // targetNode.textContent = "Dotinstall";
  // targetNode.textContent = targetNode.dataset.translation;
  // });
  // document.querySelector("button").addEventListener("click", () => {
  // const item2 = document.createElement("li");
  // const ul = document.querySelector("ul");
  // item2.textContent = "item 2";
  // ul.appendChild(item2);
  // const item0 = document.querySelectorAll("li")[0];
  // const copy = item0.cloneNode(true);
  // console.log(copy);
  // const ul = document.querySelector("ul");
  // const item2 = document.querySelectorAll("li")[2];
  // ul.insertBefore(copy, item2);
  // const item1 = document.querySelectorAll("li")[1];
  // item1.remove();
  // ul.removeChild(item1);
  // const li = document.createElement("li");
  // const text = document.querySelector("input");
  // li.textContent = text.value;
  // console.log(text.value);
  // ul.appendChild(li);
  // text.value = "";
  // text.focus();
  // });
  // const button = document.querySelector("button");
  // button.addEventListener("click", () => {
  //   const ul = document.querySelector("ul");
  //   const li = document.createElement("li");
  //   const select = document.querySelector("select");
  //   li.textContent = select.value;
  //   console.log(select.value);
  //   ul.appendChild(li);
  // });
  // const button = document.querySelector("button");
  // button.addEventListener("click", () => {
  //   const ul = document.querySelector("ul");
  //   const li = document.createElement("li");
  //   const colors = document.querySelectorAll("input");
  //   let selectedColor;
  //   console.log(selectedColor);
  //   colors.forEach((color) => {
  //     if (color.checked === true) {
  //       selectedColor = color.value;
  //       console.log(selectedColor);
  //     }
  //   });
  //   if (typeof selectedColor === "undefined") {
  //     alert("Please select a color!");
  //     return;
  //   }
  //   ul.appendChild(li);
  //   li.textContent = selectedColor;
  // console.log(selectedColor);
  // });
  // document.querySelector("button").addEventListener("click", () => {
  //   const colors = document.querySelectorAll("input");
  //   let selectedColor = [];
  //   colors.forEach((color) => {
  //     if (color.checked === true) {
  //       selectedColor.push(color.value);
  //     }
  //   });
  //   const li = document.createElement("li");
  //   li.textContent = selectedColor;
  //   console.log(li);
  //   document.querySelector("ul").appendChild(li);
  // });
  // document.querySelector("button").addEventListener("dblclick", () => {
  //   console.log("click");
  // });
  // document.addEventListener("mousemove", (e) => {
  //   // console.log("mouseover");
  //   console.log(e.clientX, e.clientY);
  // });
  // document.addEventListener("keydown", (e) => {
  //   console.log(e.key);
  // });
  // const text = document.querySelector("textarea");
  // text.addEventListener("focus", () => {
  //   console.log("focus");
  // });
  // text.addEventListener("blur", () => {
  //   console.log("blur");
  // });
  // const text = document.querySelector("textarea");
  // text.addEventListener("input", () => {
  //   console.log(text.value);
  // });
  // text.addEventListener("change", () => {
  //   console.log("change");
  // });
  // document.querySelector("form").addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   console.log("Posted");
  //   document.querySelector("input").value = "";
  // });
  // document.querySelector("ul").addEventListener("click", (e) => {
  //   console.log(e.target);
  // if (e.target.nodeName === "LI") {
  //   e.target.classList.toggle("done");
  // }
  // });
}
