// 4.0 input value

/*
const loginForm = document.querySelector("#login-form");
tip ) 찾은 element의 내부 element를 추가로 검색할 수 있다 !!

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

// 코드를 줄이고 싶다면?
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// loginButton.addEventListener("click", onLoginBtnClick);

// 4.1 Form submission
/*
function onLoginBtnClick() {
    const username = loginInput.value;
    // console.dir(loginInput)에서 value property에 text가 들어있는 걸 확인 가능
    if (username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long");
    } else {
        console.log("hello ", username);
    }
    console.log(username);
}
*/

const loginForm = document.querySelector("#login-form");
// 4.2 submit 감지하기 (enter key or button click시 발생)
// submit을 감지해서 페이지 새로고침이 일어나지 않도록 하자
function onLoginSubmit(event){
    event.preventDefault(); // event의 기본 동작이 발생되지 않도록 막는다.
    // 이 function을 추가함으로써 form이 submit되었을 때 기본동작인 새로고침을 막는다.
    console.log(event);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
// function만 호출 하더라도, JS에서는 첫 번째 argument로,
// 발생된 event에 대한 정보를 준다.