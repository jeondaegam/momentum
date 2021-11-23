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
object 내의 값을 수정/추가하는 것은 가능  
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

#### 3.0 The Document Object
JavaScript와 HTML, CSS의 관계
JavaScript가 브라우저를 어떻게 움직이는가?
HTML은 접착제 같은 역할
HTML이 CSS와 JavaScript를 가져오기 때문이다.
JavaScript를 사용하는 이유는, HTML과 상호작용을 위해
즉, HTML의 element들을 JavaScript를 통해 변경하고 읽을 수 있다는 것이다.

#### 브라우저의 핵심 object
console에 document를 입력하면 작성한 HTML을 가져올 수 있다.
document는 브라우저에 이미 존재하는 object  <- html을 가리키는 객체

- console.dir(document)
- document를 JavaScript 관점에서 object로 보여준다.
- 즉 Js에서 HTML의 title 등의 요소를 가져와 사용할 수 있다 !

title 변경
- document.title ="web page title 변경 가능"

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
// 두 코드는 같은 일을 한다.
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
JS의 대부분은 event를 listen하는 것이다.


HTML element를 JS로 가져오는 방법.
  1. HTML 페이지에서 app.js를 load한다.
  2. app.js에서 element를 get 한다.


#### Event listen 하기
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

### Events part Two
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

```

대부분의 경우에 style은 CSS를 통해 변경되어야 한다.
