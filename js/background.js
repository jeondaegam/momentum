const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

// images[0],[1],[2] 등을 불러온다.
// Math.random()으로 나온 숫자에 images.length 값을 곱한 숫자를 내림 한다.
const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

// 1. html new element를 만든다 !!
const bgImage = document.createElement("img");

// console.log(bgImage);

bgImage.src =`img/${chosenImage}`;

// 2. body에 element를 추가한다.
// document.body.appendChild(bgImage); // body 제일 아래에 append
document.body.prepend(bgImage); // body 제일 위에 append