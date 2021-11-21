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