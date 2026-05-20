//Task 1
// function changeColor(color) {
//   this.style.backgroundColor = color;
// }

// const colors = ["yellow", "blue", "orange", "black", "green", "gray", "red"];

// const box = document.querySelector("div");

// box.style.width = "300px";
// box.style.height = "300px";
// box.style.backgroundColor = "gray";

// box.onclick = function () {
//   const index = Math.floor(Math.random() * colors.length);
//   const randomColor = colors[index];
//   changeColor.call(box, randomColor);
// };

//Task2
// function changeColor(color) {
//   this.style.backgroundColor = color;
// }

// const colors = ["yellow", "blue", "orange", "black", "green", "gray", "red"];

// const box = document.querySelector("div");

// box.style.width = "300px";
// box.style.height = "300px";
// box.style.backgroundColor = "gray";

// let intervalId = null;

// box.onclick = function () {
//   if (intervalId !== null) return;

//   intervalId = setInterval(() => {
//     const index = Math.floor(Math.random() * colors.length);
//     const randomColor = colors[index];
//     changeColor.call(box, randomColor);
//   }, 1000);
// };