
/*
console
- js를 쉽게 다룰 수 있다.
- 뭘 하거나 설치할 필요없이 브라우저에서 바로 사용하면 되는 것이다.
- js와 상호작용하긴 좋은데 긴 코드나 프로그램을 작성해야할 땐 적절치 않다.
 */

// property를 가진 데이터를 저장하도록 해준다.
// 값에 이름을 붙여 사용하고자 할 때 사용한다.
const player = {
    name: "chudong",
    points: 10,
    age: 11,
    fat: true,
};

/*
// 2.7 functions
sayHello("Cudong", 10);
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
*/

/*
// object 안에 function 만들기
const user = {
    name:"diniyo",
    sayHello: function(otherPersonName){
        console.log("Hello! " + otherPersonName + " nice to meet you");
    },
};

*/

// console.log(user.name);
// user.sayHello("lynn"); // -> function이 user object 안에 있을 때만 사용 가능하다.
// user.sayHello("jeon");


// 2.9 Recap

// console엔 수많은 property가 있고 그중 하나가 log이다. 즉 console은 하나의 object이다.
// player라는 variable 안에 name이라는 variable(=property)을 만든 것.

// console.log(console);

/*
// 아주 많은 argument를 보내더라도 문제되지 않는다.
// minusFive는 오직 첫번째 argument만 받는다.
function minusFive(potato) {
    console.log(potato-5);
}
minusFive(5,10,2,34,5,9,6);

*/

const calculator = {
    plus: function (a, b) {
        return(a + b);
    },
    minus: function (a, b) {
        return(a - b);
    },
    divide: function (a, b) {
        return(a / b);
    },
    power: function (a, b) {
        return(a ** b);
    },
    times: function (a, b) {
        return(a * b);
    }
}

const plusResult = calculator.plus(3, 4);
const minusResult = calculator.minus(plusResult, 2);
const timeResult = calculator.times(10, minusResult);


/*
const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner +2;
}
const krAge = calculateKrAge(age);

console.log(krAge);
*/

/*
// prompt

const age = parseInt(prompt("How old are you?"));
console.log(age);
prompt를 쓰지 않는 이유
message 창에 아무런 스타일, 즉 CSS를 적용시킬 수 없다.
그리고 prompt 창이 떠있는 동안 js의 나머지 동작들을 멈추고 대기한다.
어떤 브라우저는 이런 팝업을 제한하기도 하고, 아주아주 오래된 늙다리 방법
요즘에는 CSS나 HTML로 직접 만든 창을 사용.

*/

// type 알아보기
// console.log(typeof age);

// 타입 변경하기
// console.log(typeof age, typeof parseInt(age));
// console.log(age, parseInt(age)); // chrome console 에서 확인시 string과 number의 색이 다르게 표시된다.
//사용자가 숫자가 아닌 문자를 입력했을 때 감지할 수 있다.

// console.log("isNaN of age?" + isNaN(age));
/*
isNaN => Not a Number 인가?
true : number가 아니다.
false : number가 맞다.
 */


// if (isNaN(age)) {
//     console.log("Please write a number");
// } else {
//     console.log("Thank you for writing your age.");
// }



// const canIDrink = parseInt(prompt("Enter the your age."));
// isDrinkOKay(canIDrink);


// Q. 술 마셔도 되나요?
function isDrinkOKay(age) {
    if (isNaN(age) || age < 0) {
        console.log("Please write a number.");
    } else if (age < 18) {
        console.log("You are too young");
    } else if (age >= 18 && age <= 50) {
        console.log("You can drink anymore.");
    } else if (age > 50 && age <= 80) {
        console.log("You should exercise");
    } else if (age === 100){
      console.log("wow you are wise");
    } else if (age > 80) {
        console.log("You can do whatever you want.")
    }

    // true || true === true
    // true || false === true
    // true && false === false
    // true && true === false
}

// JS에서 html의 h1 태그를 가져와보자.
// const title = document.getElementById("hello");
// console.log(title);
// console.dir(title); // 더 자세히 보여준다.

// title.innerText = "Got you!";
// console.log(title.id)
// console.log(title.className);

// 3.2 How to get Searching For Elements

// * class ID (자주 사용 X)
// id로 object를 들고와 innerText를 변경하고, className을 출력한다.
const title = document.getElementById("something");
console.log(title);
title.innerText = "Got you!";
console.log(title.className);


// * className 사용하기
// return array
// 많은 element를 한번에 들고와야 하는 경우 사용한다.
// 하지만 대부분의 경우 class name을 모든 곳에 추가하지는 않을 것이다.
const hi = document.getElementsByClassName("hi");
console.log(hi);
// hi.innerText = "Got you!";


// * tagName으로 element 가져오기.
// div 하위의 <h1> 태그 가져오기.
const h1Array = document.getElementsByTagName("h1");
console.log(h1Array); // object가 아닌 array 형태로 들고옴.

/*
element(tag)를 CSS 방식으로 가져오기.
querySelector or querySelectorAll
hello 라는 class 내부의 h1에 접근할 수 있다.
*/

// 1. querySelector
// 하나의 element를 return 한다.
//  element가 여러개더라도 가장 첫번째것만 가져옴
const useSelector = document.querySelector(".howToUseDiv h1");
// class=howToUseDiv를 찾고 그 안에 있는 h1을 들고 온다.
console.log(useSelector);

// 2. querySelectorAll
// 모든 element를 들고 온다.
// return array
const useSelectorAll = document.querySelectorAll(".nice h1");
console.log(useSelectorAll);

//3. getElementByName
// return array
const name = document.getElementsByName("chudong");

//

console.log(name);

// Selector를 이용해 ID로 element 들고오기.
const tagById = document.querySelector("#something");
const tagByIdObject = document.getElementById("something");
// 둘의 차이점?
// getElementById로는 들고온 태그의 하위 태그에 접근할 수 없다.
// querySelector는 가능 ("#something form");

console.log(tagById);
console.log(tagByIdObject);

// const titleOfSelector = document.querySelector(".hello");
// const titleOfFunction = document.getElementsByClassName("hello");
//
// console.log(titleOfSelector);
// console.log(titleOfFunction);

// 3.3 Events
// HTML이 app.js를 load(import)하기 때문에 document가 존재한다.
// 그 다음에 browser가 우리의 document에 접근할 수 있게 해준다.

// title color를 바꿔보자
const clickMe = document.querySelector("div.colorChange h1");

// click event listen 하기
clickMe.addEventListener("click", handleTitleClick); // 어떤 이벤트를 listen할 건지?

// title을 click하면 listen한다!,
// 그리고 handleTitleClick를 실행한다.
// 굳이 버튼일 필요 없다.

function handleTitleClick() {
    const color = clickMe.style.color;
    clickMe.style.color = color == "blue" ? "black" : "blue";
}

function handleMouseEnter(){
    clickMe.innerText= "Mouse is here";
}

function handleMouseLeave(){
    clickMe.innerText = "Mouse is gone!";
}

clickMe.addEventListener("mouseenter", handleMouseEnter);
clickMe.addEventListener("mouseleave", handleMouseLeave());


// 3.5 More Events ----------------------------------------------------------------------

// EventListener를 실행하는 또 다른 방법

clickMe.onclick = handleMouseEnter;

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
    // document를 이용해 body에 접근한다.
    // 하지만 document로 body 내부의 특정 태그를 get하는건 불가능.
    // cocument의 body, head, title은 중요하기에 function으로 존재.
    const heightOutput = window.innerHeight;
    const widthOutput = window.innerWidth;

    console.log("height:" , heightOutput , "widthOutput", widthOutput);
}

// window event
// window element의 resize event를 listen한다.
// ==> resize(window의 크기가 변경되는) 이벤트가 발생하면 handleWindowResize을 호출해 color를 변경한다.
window.addEventListener("resize", handleWindowResize);
// window.onresize = handleWindowResize;

//copy
function handleWindowCopy() {
    alert("Copy check");
}
// window.addEventListener("copy", handleWindowCopy);

const h2 = document.querySelector("h2");
//copy를 아래처럼 사용하려면 target 지정이 필요한듯, window.oncopy는 반응을 안함.
h2.oncopy = handleWindowCopy;



// wifi check
function handleWindowOffline() {
    alert("SOS no WIFI");
}
function handleWindowOnline() {
    alert("All Goood");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


// 3.6 CSS in JavaScript -------------------------------------------------

const clickText = document.querySelector("div.clickMe h2");

// function handleTitleClick() {
//     const currentColor = clickText.style.color;
//     let newColor;
//     if(currentColor ==="blue") {
//         newColor ="tomato";
//     } else {
//         newColor = "blue";
//     }
//     clickText.style.color = newColor;
//     // clickText.style.color = currentColor === "blue" ? "tomato" : "blue";
// }

clickText.addEventListener("click", handleTitleClick);

// 3.7 CSS in JS part Two ---------------------------------------

// CSS를 통해 style 적용하기
/*
function handleTitleClick() {
    const clickedClass = "clicked";
    // html tag에 class 이름을 지정한다. (css에 작성한 내용이 적용됨)
    if (clickText.className === clickedClass) {
        clickText.className = "";
    } else {
        clickText.className = clickedClass; // -> HTML을 변경한다.
    }
}
*/

// 3.7 CSS in JS part Three ---------------------------------------

// className의 문제점 => class의 이전 name을 상관하지 않고 모든 className을 교체해버린다.
// ClassList
// answer
// equal 비교가 아닌 classList의 contains로 비교해준다.
function handleTitleClick() {
    // const clickedClass = "clicked";
    // if (clickText.classList.contains(clickedClass)) {
    //     clickText.classList.remove(clickedClass);
    // } else {
    //     clickText.classList.add(clickedClass);
    // }
    clickText.classList.toggle("clicked");
}
