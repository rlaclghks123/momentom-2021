const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoUl = document.querySelector("#toDoUl");

let toDos = [];
const TODOS = "todos";

function saveToDo() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function handleDelete(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id != parseInt(li.id));
    saveToDo();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    todoUl.appendChild(li);
    li.appendChild(span);
    li.prepend(button);

    li.id = newToDoObj.id;
    span.innerText = newToDoObj.text;
    button.innerText = "❌";

    button.addEventListener("click", handleDelete);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text: currentValue,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

todoForm.addEventListener("submit", handleSubmit);

const savedToDo = localStorage.getItem(TODOS);

if (savedToDo) {
    const itemToDo = JSON.parse(savedToDo);
    toDos = itemToDo;
    toDos.forEach(paintToDo);

}