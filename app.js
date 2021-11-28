// 4.0 input value

/*
const loginForm = document.querySelector("#login-form");
tip ) 찾은 element의 내부 element를 추가로 검색할 수 있다 !!

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

// 코드를 줄이고 싶다면?
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

loginButton.addEventListener("click", onLoginBtnClick);

// 4.1 Form submission
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

