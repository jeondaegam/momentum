const toDoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");

// form의 새로고침을 막는다.
// input창에 입력된 text를 들고 온다.
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";

    // const li = document.createElement("li");
    // li.innerText = newTodo;
    // todoList.append(li);

}

toDoForm.addEventListener("submit", handleToDoSubmit);