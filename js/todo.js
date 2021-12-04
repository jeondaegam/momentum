const toDoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const TODOS_KEY = "todos";
let toDos = [];

// form의 새로고침을 막는다.
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input창에 입력된 text를 들고 온다.
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

// append는 맨 마지막에 놓여져야 한다.
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // span을 li 내부에 append한다.
    li.appendChild(button);
    todoList.appendChild(li);
}

function deleteToDo(event) {
    const li = event.target.parentElement; // button의 부모(상위)태그 => li
    li.remove();
    // localStorage.removeItem(e)

    // 이해하기
    // console.dir(event.target); // 1. 클릭된 target element => button
    console.dir(event.target.parentElement); // 클릭된 target element 의 부모 => li
    console.dir(event.target.parentElement.innerText);

    // localstorage의 toDos 삭제하기
    //text를 key로 지우면 중복된 text가 있을 때 어떤건지 알 수 없다. 따라서 id를 이용하자!
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(typeof li.id);
    // storage에 저장된 id(number)와 li.id(string)의 데이터 타입이 서로 다르다.
    // 클릭한 li.id와 다른 toDo는 남겨둔다.
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function isToDoList() {

    // tip ) forEach를 통해 처리되고 있는 item 또한 free로 제공해준다.
    // function sayHello(item) {
    //     console.log("Hello", item);
    // }

    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos) { // !== null
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        // 페이지를 새로고침하면 toDos가 비어있는 상태여서 기존값이 지워지고 push되므로
        // 이전에 저장된 toDos를 다시 빈 array에 담아준다.

        console.log("there is it already ", parsedToDos);
        // parsedToDos.forEach(sayHello);
        // parsedToDos.forEach((item) => console.log("this is turn of ", item));
        parsedToDos.forEach((item) => paintToDo(item));
    }
}

isToDoList();
toDoForm.addEventListener("submit", handleToDoSubmit);
