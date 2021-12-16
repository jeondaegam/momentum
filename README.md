# momentum
my second Js project with Nico
데이터를 최선으로 정리하자.

2.2 variable 의 가치  
const : 바뀌지 않는 값. 상수(constant)

2.3 데이터를 만들 수 있는 두가지 방법  
const & let  
const > 상수이므로 값을 변경할 수 없다.
let > 업데이트될 수 있는 변수.
```javascript
const isChudongFat = true;
isChudongFat = false; // (X) const로 만들었기 때문에 업데이트 불가능

// 대신 let을 사용하자.
let isJeonFat = true; 
isJeonFat= false; // (O) const와 달리 값을 업데이트 할 수 있다.
```
=== : 값이 일치하는지 확인

이런 코드 규칙의 중요성 > 코드를 통해 의도를 알 수 있다.

규칙 > 항상 const를 사용하되, 필요하다면 let을 쓰고, var은 쓰지 말 것.  
Always const, Sometimes let, Never var!

과거에는 var을 사용했는데
var를 사용한다면 언어를 통한 보호를 받지 못해 실수로 값을 변경해도 언어가 말해주지 않기때문이다.
var는 어떠한 규칙도 가지고 있지 않다! 따라서 오래된 코드에는 var가 사용된 것을 볼 수 있다.
모두 var을 사용한다면 코드가 뭘 하려는지 알 수 없다.
let, const처럼 구분을 할 수 없게 된다.
우리가 코드를 읽으면서 어떤 의미를 얻을 수 있다면 그게 더 바람직할 것이다.


2.4 Boolean
null : 값이 없음 (아무것도 없는 상태로 채워짐)
- 빈 값으로 정의함.
- 변수에 할당되는 값. variable 안에 아무 것도 없다는 것을 확실히 할 때 사용한다.  
undefined : 변수는 만들었지만 값을 부여하지 않은 상태.
메모리 안에는 존재해, 공간은 있는데 아무런 값이 없음.


2.5 Arrays
- 데이터를 정리할 수 있는 방법
- 가장 기본적인 데이터 구조
- 리스트화 하고 그룹화 하기 위함.
```javascript
const mySoulFood = ["pizza", "potato", "tomato"];
mySoulFood[2] = "what";
console.log(mySoulFood);
```
####Push
가장 끝에 item을 하나 추가한다.
```javascript
mySoulFood.push("burger");
```

###2.6 Objects
여러개의 값에 이름을 붙여 사용하고자 할 때 사용한다.
property를 가진 데이터를 저장하도록 해준다.
```javascript
const player = {
    name: "chudong",
    points: 10,
    age: 11,
    fat: true,
};
```
#### const로 object를 선언했을 때
object 내의 값을 수정,추가하는 것은 가능  
```javascript
player.fat=false; // (O)
player.lastName = "jeon"; // (O)
```

object를 하나의 값으로서 업데이트 하는 것은 불가능  
```javascript
player = false; // (X)
```
사용방법
```javascript
player.points = player.points + 15;
// 출력
console.log(player);
console.log(player.name);
console.log(player["lastName"]);
```

###2.7 Functions 
계속 반복해서 사용할 수 있는 코드 조각  
어떤 코드를 캡슐화해서, 계속 반복해서 사용할 수 있도록 해준다.
노래나 동영상을 계속 반복재생 하는 것처럼 계속해서 같은 행동을 실행한다.  

argument=> function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법.

2시반까지 ~2.10

error message
NaN   
Not a Number (숫자가 아님)

###2.9 Recap
Js는 위에서 아래로 읽는다.
데이터를 만들 수 있는 두가지 방법
```javascript
// const (=> 값 업데이트 불가능)
const a =5;
const isFat =true;
isFat = false; // (X) 

// 대신 let을 사용하자! (값의 업데이트 가능)
let isFat = true;
isFat = false; 
```


###2.11 Returns


인터렉티브; 쌍방향으로 작동!

###2.13 Conditionals
value의 type을 보기 => typeof
```javascript
console.log(typeof age);
```
// 타입 변경하기
- parseInt
```javascript
console.log(typeof age, typeof parseInt(age));
console.log(age, parseInt(age)); 
// chrome console 에서 확인시 string과 number의 색이 다르게 표시된다.
//사용자가 숫자가 아닌 문자를 입력했을 때 이를 감지할 수 있다.
```

#### 2.15 Conditionals part Three
And, Or
```javascript
if (age >= 18 && age <=50) {
    ...
}
else if (age > 99 || age <18) {
    ...
}
```

### 3.0 The 'Document' Object
#### What is a 'Document'?
- basic object of the browser.
- Already included in the browser for free that you can access.

document가 모든 것을의 시작점이다.
왜냐하면 우리의 web site를 의미하기 때문이다.  
HTM은 접착제로써 CSS와 JS를 연결하는 역할을 한다.

JS가 브라우저를 어떻게 움직이는가?
#### JavaScript를 사용하는 이유?
상호작용을 하도록 만들기 위해.  
HTML의 element들을 JS를 통해 변경하고 읽을 수 있다.

#### 브라우저의 핵심 object 'Document'
document를 이용해 HTML의 요소에 접근할 수 있다.  
document는 html 요소를 JS 형식으로 보여준다!  
=> 이를 통해 html과 JS는 서로 연결되어있다는 것을 알 수 있다.  

document는 브라우저에서 
console에 document를 입력하면 작성한 HTML을 가져올 수 있다.
document는 브라우저에 이미 존재하는 object  <- html을 가리키는 객체

- console.dir(document)
- document를 JavaScript 관점에서 object로 보여준다.
- 즉 Js에서 HTML의 title 등의 요소를 가져와 사용할 수 있다 !

💡 console에 테스트 해보자.
```javascript
document.title; // 우리가 html 페이지에 작성한 title을 볼 수 있다. 
document.title ="just gogo";
```

JS는 HTML에 접근하고 읽을 수 있다,
그리고 document는 모든 것의 시작점이다.
document는 web browser를 의미한다.
우린가 JavaScript에서 HTML에 접근할 수 있는 방법이다.  

JS는 HTML의 element를 가져오지만, HTML 자체를 보여주지는 않아.
object를 보여준다. JS에서 HTML을 표현하는 object를 말이다!


JS로 정보를 가지고 올 수 있는 방법
- document객체와, element를 가져오는 수 많은 함수들을 이용하는 것이다.
```javascript
document.getElementById("title")
```

#### 3.1 HTML in JavaScript
JS를 통해 할 수 있는 것.
1. HTML의 항목(element)들을 가지고(접근) 와서, 
2. JS를 통해 그 항목들을 변경한다.  

document의 함수를 이용해 HTML에서 id, 등을 통해 element를 찾는다.  
element를 찾고 나면, 그 HTML에서 뭐든지 바꿀 수 있다. what ever you want!  
html의 innerText, id, className 등등  

브라우저에서 그냥 사용할 수 있는 document.

#### Q. HTML에서 타이틀을 변경하면 되지 왜 JS를 통해 하는가?
HTML 페이지에서 직접 타이틀을 변경하는 것은 단지 소스를 수정하는 것에 불과하다.  
하지만 JS를 통해 타이틀을 변경 하는 것은, HTML과 JS가 상호작용 할 수 있다는 것을 의미한다.  
예를들어 웹 페이지에 버튼을 클릭하면 타이틀이 변경된다던지 등의
인터렉티브한 액션들을 만들어낼 수 있다.  

### 3.2 How to get Elements from JS in your HTML
HTML에서 무언가 가져오는 방법을 배운다!
div나 h1같은 태그를 이용해 검색하기도 하고 id를 통해 검색하기도 한다.
모두 다른 function을 사용해서..!   

대부분은 id를 사용하지 않는다.  
사용하기 편리하지만 보통 className을 사용하거나 둘 다 사용한다.  

주의할 에러  
    
    Uncaught TypeError: Cannot set properties of null (setting 'innerText')
    가져오려는 element가 없는데(=null) 그 값을 변경하려고 할 때..!
    title doesn't exist show you shouldn't call innerText title

CSS selector  
class : .  
id : #
name : 
```javascript
<h1 class="hello">Grab me!</h1>
```

id를 통해 element를 들고 오는 방법
```javascript
// 두 코드는 같은 동작을 한다.
const title = document.querySelector("#hello"); 
const title = document.getElementById("hello");  // hello element의 하위 요소에는 접근할 수 없다.
```

- getElementById
  - return one element
- getElementsByClassName 
  - return array
- getElementsByTagName
  - return array
- getElementsByName
  - return array
```javascript
const name = document.getElementsByName("chudong"); // tag에 name을 지정한 경우
const hi = document.getElementsByClassName("hi");  // tag에 class명을 지정한 경우
const h1Array = document.getElementsByTagName("h1"); // tag type을 검색

```

####Selector를 이용한 방법
    element(tag)를 CSS 형식으로 검색할 수 있다.
    앞서 나열한 모든 걸 selector로 할 수 있다.
    태그 내 하위 태그에 접근할 수 있다.
    
- QuerySelector
  - return one element
- QuerySelectorAll
  - return array

```javascript
// this gives you one element the first one. that was found.
const title = document.querySelector(".hello h1");
const title = document.querySelector(".hello:first-child h1");
//class hello를 가진 div 내부의 first-child인 h1을 찾아오는 것.

// if you want to find all of them?
const title = document.querySelectorAll(".hello h1"); // return array
```

###3.3 Events
What is an 'Event'?
- 예를 들어 click을 하면 그게 event
- h1 위로 마우스가 올라가도 event
- 입력을 끝내거나, 이름을 적거나, enter를 누르거나, wifi가 끊기거나 모든게 event이다.

JS의 대부분은 event를 listen하는 것이다.


HTML element를 JS로 가져오는 방법.
  1. HTML 페이지에서 app.js를 load한다.
  2. app.js에서 element를 get 한다.


#### Event listen
1. HTML element를 가져온다.
2. addEventListener를 실행시켜준다.
3. 이 때 listen 하고싶은 event 이름을 명시한다.
4. event가 발생하면 호출할 function을 전달한다.

```javascript
const clickMe = document.querySelector("div.colorChange h1");

clickMe.addEventListener("click", handleTitleClick);

function handleTitleClick() {
  const color = clickMe.style.color;
  clickMe.style.color = color == "blue" ? "black" : "blue";
```

tip) element의 내부를 보고싶다면?
```javascript
console.dir(title);
// object로 표시한 element를 보여준다.
// object 내부의 property들의 값을 변경할 수 있다.
```

### 3.4 Events part Two
listen 하고 싶은 event를 찾는 방법
1. 구글에 찾고싶은 element의 이름, 예를들어 'h1 html element mdn'을 검색
2. js의 element를 원하니 링크에 Web APIs라는 문장이 포함된 페이지를 찾자.
3. js 관점의 HTML Heading Element라는 의미
4. 너무 복잡하면 element를 console.dir로 출력해서 'on~' 으로 시작하는 걸 사용하면 ok.

```javascript
function handleMouseEnter(){
    clickMe.innerText= "Mouse is here";
}

function handleMouseLeave(){
    clickMe.innerText = "Mouse is gone!";
}

clickMe.addEventListener("mouseenter", handleMouseEnter);
clickMe.addEventListener("mouseleave", handleMouseLeave);
// 호출할 function 뒤에 바로 ()를 넣으면 JS가 알아서 실행시키기 때문에 ()는 빼야 한다.
// 소괄호를 빼면 클릭할 때 function이 실행된다.
```
소괄호 : 자동실행을 control 한다.
```javascript
handleMouseLeave(); // 이벤트 없이 자동으로 실행 된다.
// EventListener가 필요 없는 경우 사용하면 될 것 같다.
```
JS로 style을 변경할 수도 있지만   
대부분의 경우에 style은 CSS를 통해 변경되어야 한다.



### 3.5 More Events

#### Event Listener를 호출하는 두 가지 방법
tip) addEventListener를 사용하면   
.removeEventListener를 통해 event listener를 제거할 수 있다.   
```javascript
// 두 코드는 같은 동작을 한다.
clickMe.addEventListener("mouseenter", handleMouseEnter);
clickMe.onclick = handleMouseEnter;
```
#### Window
참고 링크 <https://developer.mozilla.org/en-US/docs/Web/API/Window>

#### Events
- resize  
window element의 resize event를 listen한다.  
resize(window의 크기가 변경되는) 이벤트가 발생하면 handleWindowResize을 호출한다.

```javascript
window.addEventListener("resize", handleWindowResize);
// or
window.onresize = handleWindowResize;

function handleWindowResize() {
document.body.style.backgroundColor = "tomato";
// document를 이용해 body에 접근한다.
// 하지만 document로 body 내부의 특정 태그를 get하는건 불가능.
// cocument의 body, head, title은 중요하기에 function으로 존재.
const heightOutput = window.innerHeight;
const widthOutput = window.innerWidth;

    console.log("height:" , heightOutput , "widthOutput", widthOutput);
}
```

- copy  
ctrl+c를 감지한다.  
```javascript
function handleWindowCopy() {
    alert("Copy check");
}

//copy check
window.addEventListener("copy", handleWindowCopy);

//or
// 아래처럼 사용하려면 target 지정이 필요한듯, window.oncopy는 반응을 안함
const h2 = document.querySelector("h2");
h2.oncopy = handleWindowCopy;
```

- wifi  
Connection events 
```javascript
function handleWindowOffline() {
    alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("All Goood");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

### function을 선언하는 방법
```javascript
// 방법 1
const superHandler = {
    handleMouseEnter: function () {
        h1.innerText = "The mouse is here!";
    },
}
// 방법 2
function handleMouseEnter () {
    h1.innerText = "The mouse is here!";
}
```


### 3.6  CSS in Javascript
깔끔한 코드 part 1) 서로 다른 언어가 섞이지 않게 하자.   
animation 등 상호작용을 만들어내는 데에 적합한 도구는 JS.  
style에 적합한 도구는 CSS.

1. element를 찾아라
2. event를 listen 해라
3. 그 event에 반응해라


### 3.7 CSS in Javascript part Two
깔끔한 코드 part 2) "raw string"이 반복되면 상수로 만들자.  
exam
```javascript
const clickText = document.querySelector("div.clickMe h2");

function handleTitleClick() {
  const clickedClass = "clicked";

  if (clickText.className === clickedClass) { // do not use "clicked"
    clickText.className = "";
  } else {
    clickText.className = clickedClass; // do not use "clicked"
  }
}
```

### 3.8 CSS in Javascript part Three
className의 문제점 
- 이전 class를 상관하지 않고 모든 걸 교체해버린다.  

해결방법 
- classList를 사용한다(=class를 목록으로 작업할 수 있게끔 허용한다.)
- equals가 아닌 contains로 비교한다.

```javascript
function handleTitleClick() {
  const clickedClass = "clicked";
  if (clickText.classList.contains(clickedClass)) { // element의 classList를 가져온다.
    clickText.classList.remove(clickedClass);
  } else {
    clickText.classList.add(clickedClass);
  }
}
```
####toggle
contains-add-remove를 한번에 해준다.
```javascript
function handleTitleClick() {
  clickText.classList.toggle("clicked");
}
```
##LOGIN
### 4.0 Input Value

JS가 value를 기억하는 방법  
모든 것은 HTML에서 시작한다.
HTML을 통해 입력받고 그 element를 JS에 끌고 오는 것!  

classname은 다른 곳에서 다시 사용할 수 없다.
#### input button
```html
<div id="login-form"> <!--id, calssname중 아무거나 ok-->
    <input type="text" placeholder="what is your name?"/>
    <button>Log In</button>
</div>
```

tip ) 찾은 element의 내부 element를 추가로 검색할 수 있다 !  
```javascript
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input"); // loginForm 내부에서 input tag 검색
const loginButton = loginForm.querySelector("button");
```

코드를 줄이고 싶다면?
```javascript
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
```

click event
```javascript
function onLoginBtnClick(){
    console.log(loginInput.value);
}
// login button을 클릭하면 input form에 입력된 vlue를 가져온다.
loginButton.addEventListener("click", onLoginBtnClick);
``` 
#### 4.1 Form Submission
Js에서 구현하는 대신 할 수 있다면 HTML의 기본 속성을 최대한 이용하기  

필수 입력 항목으로 만들기
- required
```html
<form id="login-form">
    <input required maxlength="15" type="text" placeholder="what is your name?"/>
    <button>Log In</button>
</form>
```
input을 통해 유효성 검사를 하고싶다면
input이 form 안에 있어야 한다.

웹사이트를 재시작 시킨다 -> why? form이 submit되고 있기 때문
login 버튼을 눌렀을 때, 브라우저가 새로고침 하지 않고 
user 정보를 저장하도록 하고싵다면?

####4.2 Events(submit)

### Prevent Submit
form의 submit
- 엔터키 or 버튼 클릭 시 발생한다.
- form 기본 동작으로 브라우저 새로고침이 일어난다.

event의 기본 동작을 방지 하는 방법
- preventDefault();
- event의 기본 동작이 발생되지 않도록 막는다.
```javascript
function onLoginSubmit(event){
    // 해당 function을 추가함으로써 form이 submit 되었을 때 기본동작인 새로고침을 막는다.
    event.preventDefault(); 
}
loginForm.addEventListener("submit", onLoginSubmit);
```
tip ) function만 호출 하더라도, JS에서는 첫 번째 argument로  
발생된 event에 대한 정보를 넘겨준다.

### 4.3 Events part Two
link의 기본동작은 ? 클릭 시 다른 페이지로 이동한다.  
이를 막아보자.
```javascript
const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event); // 클릭 이벤트에 대한 정보이므로 object 이름이 PointerEvent로 보이게 된다.
}

link.addEventListener("click", handleLinkClick);
```
tip )<https://javascript.info/pointer-events>
MouseEvent보다 PointerEvent가 더 많은 기능을 포함하고 있어서  
이제는 PointerEvent를 사용한다. (전자기기가 다양해져서 나왔다고 함)  


### 4.4 Getting Username
Login 버튼을 화면에서 사라지게 하는 방법
1. HTML 요소 자체를 제거한다.  
2. CSS를 이용해 숨긴다.  

#### Login 유저에게 인사하기!
```javascript
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function handleLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);

    //표시할 텍스트가 있으면 <h1>에 표시되도록 하자자
    // greeting.innerHTML = "Hello " + username;
    greeting.innerText = `Hello ${username} ~`; // 더 새로운 방법
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginSubmit);
```
  
- display:none vs visibility:hidden  
display:none : 잡아둔 공간도 사라진다.  
visibility:hidden : 잡아둔 공간은 유지된다.

- 변수와 String 결합하기
```javascript
    greeting.innerHTML = "Hello " + username;
    greeting.innerText = `Hello ${username} ~`; // `백틱`을 사용한다.
```

### 4.5 Saving Username
localStorage를 사용해보자
- key-value 형식으로 저장한다. 
- 마치 미니 DB 같은 API이다,

여기서 localStorage를 사용하는 이유?
사용이 가장 간단하다.

1. localStorage에 username이 존재하는지 확인
2. form을 지우고 h1 요소가 표시되도록 한다.
3. username이 없다면 form이 먼저 표시되도록 한다.

### 4.7 Super Recap

1. JS가 localStorage를 확인한다.
3. localStorage의 username이 null 이라면 ?
   - login form의 hidden class를 삭제하여 form을 보여준다.
   - login form에 addEventListener를 더해 submit을 기다린다.
4. null이 아니라면?
   - hello message를 보여준다. 
   
* submit event가 발생하면 ?
  - onLoginSubmit 함수를 실행한다.
  - submit의 기본동작인 새로고침 event를 prevent 한다.
  - inputForm.value를 localStorage에 저장한다.
  - login form을 다시 숨겨준다.
  - paintGreetings를 호출한다. (hello message)

tip) local storage에 없는 값을 불러온다면 null을 받는다.

### 5.0 CLOCK - Intervals
intervals ?
- 매일 일어나야 하는 무언가를 말한다.
- 정한 시간마다 function을 실행시키게 해준다.
- 매 2초마다 무슨 일이 일어나게 하고싶을 때 interval을 사용한다.
-  argument 1: 호출할 function
-  argument 2: 호출 간격을 몇 ms로 할지 (1초:1000ms)

timeout ?
- n초 뒤, function을 한 번 호출하고 끝낸다.
```javascript
function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5000); // 5초 후 호출하고 5초 단위로 계속 호출
setTimeout(sayHello, 5000); // 5초 후 호출하고 끝낸다.
```

### 5.2 PadStart()
내가 가진 String을 보다 길게 만들어야할 때 사용한다.

padStart
- String의 시작부분에 padding을 추가한다.

padEnd
- String의 뒷부분에 padding을 추가한다.

```javascript
"1".padStart(2,"0"); // string의 길이가 2가 되도록 시작부분에 0을 채운다.
"1".padEnd(3,"0"); // string의 뒷부분에 0을 채운다.
```

### 6.0 Quotes
랜덤 명언 보여주기  
- Math.random() 
  - 0에서 1사이의 랜덤숫자를 얻을 수 있다.

Math 객체 기능
- 랜덤 숫자를 Integer로 만들기
- Math.round() // 반올림
- Math.ceil() // 올림 (1.1 => 2)
- Math.floor() // 내림 (1.9999 => 1)

```javascript
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
// quotes.length까지의 숫자를 random으로 뽑는데, 모두 반내림 한다.
```

### 6.1 Background
JS에서 html 요소를 생성해보자.

1. img tag 생성
2. body에 element를 추가한다.
```javascript
const bgImage = document.createElement("img"); 
document.body.appendChild(bgImage); // body의 가장 뒤에 append
document.body.prepend(bgImage); // body의 맨 위에 append
```

### 7.0 Todo list Setup

### 7.2 Deleting To Dos
#### 버튼을 클릭하면 Todo 삭제하기
event.target : event(click)가 발생한 element    
event.target.parentElemenet : 클릭이 발생한 target element 의 부모.

### 7.3 Saving To Dos
localStorage에는 text만 저장 가능. array (X)

#### object => string으로
JSON.stringify();
    JS Object, array 또는 어떤 JS 코드건 string으로 만들어준다.

```javascript
const player = {name: "hey"}

JSON.stringify(player);
JSON.stringify([1,2,3,4]); // array -> string (ok)
```
#### string => JS object로
JSON.parse();
```javascript
JSON.parse("[1,2,3,4]");
```


### 7.4 Loading To Dos part One
Q.array의 각 item마다 function을 실행하고 싶다면?
방법 1. forEach

tip ) forEach를 통해 처리되고 있는 item 또한 free로 제공된다.
```javascript
parsedToDos.forEach(sayHello);

function sayHello(item) {
    console.log("this is turn of ", item);
}
```

방법 2. Arrow Function 
- 짧은 function을 따로 만들기 싫을 때
```javascript
parsedToDos.forEach((item) => console.log("this is turn of ", item));
```

### 7.6~7.8 Deleting To Dos part One
1. 클릭한 toDo를 삭제하기 위해 id를 준다.
2. 이를 위해 toDo를 object로 만든다.

todo의 text를 기반으로 삭제할 경우 중복된 텍스트가 있을 수 있으므로
unique id가 필요하다.  

Date.now()를 이용해 random 숫자를 만든다.
- 밀리초(1000분의1초)를 주는 함수
- 랜덤 숫자가 필요할 때 유용하다.

위에서 만든 random key를 li.id 값으로 사용한다.  

#### filter
Array에서 특정한 값들만 걸러서 새로운 array를 만들 수 있다.
```javascript
//exam 1
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
// 클릭한 버튼의 id와 다른 toDo는 남겨둔다.

//exam 2
const array = [1,2,3,4];
const newArr = array.filter((item)=> item>2);
// array에서 2보다 큰 숫자만 남겨둔다. => new Arr = [3,4]
```

### 8.0 Geolocation 
navigator.geolocation
코드 10줄로 user의 위치를 알 수 있다.
```javascript
//argument 1 : 성공적으로 실행되었을 때 호출할 function
//argument 2 : 실행 실패 시 호출할 function
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```

### 8.1
What is a 'API'?
- API는 다른 서버와 이야기할 수 있는 방법이다.

#### open weather map 서버와 이야기 해보자!

#### API 정보
<https://openweathermap.org/current#geo>
- By geographic coordinates 

(백엔드로 JS를 사용하고 싶다면 wetube를 확인)
API는 promise이다.
- 시간이 좀 걸린 뒤에 일어나는 것.
- 서버에 뭔가 물어봤는데 서버 응답하는데 5분 걸린다면 5분을 기다려야 한다.
- 그러기에 then()을 사용한다.

JS를 통해 url을 부르는 방법 (chrome -> network 통해 확인)   
fetch 
```javascript
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(url);
```
서버의 응답을 기다리기 위해 then을 사용한다.
```javascript
    // 서버에게 응답이 오면 => response의 json을 가져온다. 
    // 그리고 json의 data를 가져와 html 페이지에 보여준다.
    fetch(url).then((response) => response.json()).then((data) => {

        // 날씨를 보여주기 위한 html element를 가져온다.
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        // text로 보여준다.
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
```
