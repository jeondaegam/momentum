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
// logout
const logoutForm = document.querySelector("#logout-form");

// 4.2 submit 감지하기 (enter key or button click시 발생)
// submit을 감지해서 페이지 새로고침이 일어나지 않도록 하자
function onLoginSubmit(event) {
    event.preventDefault(); // event의 기본 동작이 발생되지 않도록 막는다.
    // 이 function을 추가함으로써 form이 submit되었을 때 기본동작인 새로고침을 막는다.
    console.dir(event);
    console.log(loginInput.value);
}

// loginForm.addEventListener("submit", onLoginSubmit);
// function만 호출 하더라도, JS에서는 첫 번째 argument로,
// 발생된 event에 대한 정보를 준다.


// 4.3 Events part Two
// 링크의 기본동작은? 클릭 시 다른 페이지 이동하는 것.
// 이를 막아보자
const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    // 클릭 이벤트에 대한 정보이므로 object 이름이 PointerEvent로 보이게 된다.
}

link.addEventListener("click", handleLinkClick);


// 4.4 form을 제출하면 로그인 창을 사라지게 만들자.

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

// function handleLoginSubmit(event) {
//     event.preventDefault();
//     const username = loginInput.value;
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//
//     //표시할 텍스트가 있으면 <h1>에 표시되도록 하자자
//     // greeting.innerHTML = "Hello " + username;
//     greeting.innerText = `Hello ${username} ~`; // 더 새로운 방법
//     greeting.classList.remove(HIDDEN_CLASSNAME);
//
//     localStorage.setItem("username", username);
//
// }

// loginForm.addEventListener("submit", handleLoginSubmit);

// 4.5 Saving Username
// localStorage를 사용해보자
// key-value 형식으로 저장한다. 마치 미니 DB 같은 API이다,

// 1. localStorage에 username이 존재하는지 확인
// 2. form을 표시하지 않고 바로 h1요소가 표시되도록
// 3. 유저 정보가 없다면 form이 먼저 표시되도록

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    //표시할 텍스트가 있으면 <h1>에 표시되도록 하자
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function isUserName() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    //username이 없으면 submit handler를 호출
    if (savedUsername === null) {
        //show the login form
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        //show the greetings, hidden login form
        // greeting.classList.remove(HIDDEN_CLASSNAME);
        // greeting.innerText = `Hello ${savedUsername} ~`; // 더 새로운 방법
        paintGreetings(savedUsername);
        logoutForm.classList.remove(HIDDEN_CLASSNAME);
    }
}

// 반복 작업 function으로 묶어주기.
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

isUserName();
loginForm.addEventListener("submit", onLoginSubmit);



logoutForm.addEventListener("click", onLogoutClick);

function onLogoutClick() {
    // remove user name
    localStorage.removeItem(USERNAME_KEY);
    // show login form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}


// 그럼 logout할때도 form submit을 사용해야하나? => 버튼 사용해도 되지 않을까)
