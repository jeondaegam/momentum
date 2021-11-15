# momentum
my second Js project with Nico
데이터를 최선으로 정리하자.

2.2 variable 의 가치  
const : 바뀌지 않는 값. 상수(constant)

2.3 const & let  
const > 상수이므로 값을 변경할 수 없다.
let > 업데이트될 수 있는 변수.
이런 코드 규칙의 중요성 > 코드를 통해 의도를 알 수 있다.

규칙 > 기본적으로 const를 쓰고 필요할 때만 let을 쓰되, var은 쓰지 말 것.
always const
sometimes let
never var

과거에는 var을 사용했는데
var를 사용한다면 언어를 통한 보호를 받지 못해 실수로 값을 변경해도 언어가 말해주지 않기때문이다.
var는 어떠한 규칙도 가지고 있지 않다! 따라서 오래된 코드에는 var가 사용된 것을 볼 수 있다.
모두 var을 사용한다면 코드가 뭘 하려는지 알 수 없다.


2.4 Boolean
null : 값이 없음 (아무것도 없는 상태로 채워짐)
- 절대 자연적이지 않을 값. 여기에 값이 없다는 것을 알려줄 때 사용한다.!
- 일부러 비워둠. 빈 값으로 정의함
undefined : 변수는 만들었지만 값이 정의되지 않음.
메모리 안에는 존재해, 공간은 있는데 아무런 값이 없음음.


2.5 Arrays
- 데이터를 정리할 수 있는 방법
- 가장 기본적인 데이터 구조
- 리스트화 하고 그룹화 하기 위함.

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


2시반까지 ~2.10