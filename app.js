/*alert("Hey, you are doing well" +
    " \n You can do it");*/

console.log(99);
console.log('okay');
console.log("hey");

//let something;
//console.log(something); // undefined

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);

daysOfWeek.push("sun");
console.log(daysOfWeek);


/* 값을 리스트로 정리 */
const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy[2]);
console.log(toBuy[2235235]);


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

console.log(player);
console.log(player.name);

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
sayHello("Sangyoon", 21);
sayHello("Changsoon", 25);

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

console.log(user.name);
user.sayHello("lynn"); // -> function이 user object 안에 있을 때만 사용 가능하다.
user.sayHello("jeon");


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
    add: function (a, b) {
        console.log(a +"+"+b+"="+ Number(a+b));
    },
    minus: function (a,b) {
        console.log(a+"-"+b+"="+ Number(a-b));
    },
    divide: function (a,b) {
        console.log(a+"/"+b+"="+a/b);
    },
    power: function (a,b) {
        console.log(a+"^"+b+"="+a**b);
    },
    multiple: function (a,b) {
        console.log(a+"*"+b+"="+a*b);
    }
}

calculator.add(3,4);
calculator.minus(5,1);
calculator.divide(10,3);
calculator.multiple(4,2);
calculator.power(2,3);
