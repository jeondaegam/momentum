const toDoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");

// form의 새로고침을 막는다.
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input창에 입력된 text를 들고 온다.
    toDoInput.value = "";
    paintToDo(newTodo);
}

// append는 맨 마지막에 놓여져야 한다.
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
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

    // 이해하기
    // console.dir(event.target); // 1. 클릭된 target element => button
    // console.dir(event.target.parentElement); // 클릭된 target element 의 부모 => li
    // console.dir(event.target.parentElement.innerText);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
