/*
alert("Hey, you are doing well" +
    " \n You can do it");
*/

/* undefined
let something;
console.log(something);
*/

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
//console.log(daysOfWeek);

daysOfWeek.push("sun");
//console.log(daysOfWeek);


/* 값을 리스트로 정리 */
const toBuy = ["potato", "tomato", "pizza"];
// console.log(toBuy[2]);
// console.log(toBuy[2235235]);


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

// console.log(player);
// console.log(player.name);

// const로 object를 선언했을 때
// object 내의 값을 수정/추가하는 것은 가능
player.fat=false; // (O)
player.lastName = "jeon";

// object를 하나의 값으로서 업데이트 하는 것은 불가능
//player = false; // (X)
console.log(player);

// 2.7 functions
sayHello("Cudong", 10);
sayHello("Yeoreum", 23);

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

// 계산기 function 만들어보장
function plus (firstNum,secondNum){
    console.log(firstNum + secondNum);
}
function divide(a, b) {
    console.log(a/b);
}
plus(8,60);
divide(98,20);

// object 안에 function 만들기
const user = {
    name:"diniyo",
    sayHello: function(otherPersonName){
        console.log("Hello! " + otherPersonName + " nice to meet you");
    },
};

// console.log(user.name);
// user.sayHello("lynn"); // -> function이 user object 안에 있을 때만 사용 가능하다.
// user.sayHello("jeon");


// 2.9 Recap
// 데이터를 만들 수 있는 두가지 방법
const a = 5;

const isChudongFat = true;
// isChudongFat = false; // const로 만들었기 때문에 업데이트 불가능

// 대신 let을 사용하자.
let isJeonFat = true; // const와 달리 값을 업데이트 할 수 있다.
isJeonFat= false;

// console엔 수많은 property가 있고 그중 하나가 log이다. 즉 console은 하나의 object이다.
// player라는 variable 안에 name이라는 variable(=property)을 만든 것.
/*
const player = {
    name: "Okay",
}*/

console.log(console);

function minusFive(potato) {
 console.log(potato-5);
}
minusFive(5,10,2,34,5,9,6);
// 아주 많은 argument를 보내더라도 문제되지 않는다.
// minusFive는 오직 첫번째 argument만 받는다.

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