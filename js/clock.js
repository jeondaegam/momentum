const clock = document.querySelector("h2#clock");

//5.0 intervals, timeout
/*

intervals ?
    매일 일어나야 하는 무언가를 말한다.
    정한 시간마다 function을 실행시키게 해준다.
    매 2초마다 무슨 일이 일어나게 하고싶을 때 interval을 사용한다.
argument 1: 호출할 function
argument 2: 호출 간격을 몇 ms로 할지 (1초:1000ms)

*/
/*
function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5000); // 5초 후 호출하고 5초 단위로 계속 호출
setTimeout(sayHello, 5000); // 5초 후 호출하고 끝낸다.
*/

// 1초단위로 interval을 설정하고 date를 호출한다.

function getClock() {
    const date = new Date();
    const hours =   String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds=  String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 새로고침 하자마자 시작
setInterval(getClock, 1000);

// 5.2 padStart()
// String의 시작부분에 padding을 추가한다.
// 내가 가진 string을 보다 길게 만들어야할때 사용한다.
// "1".padStart(2,"0");
// String의 길이가 2가 아니면 string의 시작부분에 "0"을 채운다.

//"1".padEnd(2,"0"); // string의 뒷부분에 0을 채운다.
//"1".padEnd(maxLength,fillString);.

