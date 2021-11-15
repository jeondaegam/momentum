alert("Hey, you are doing well" +
    " \n You can do it");

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