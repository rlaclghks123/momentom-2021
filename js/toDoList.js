const toDoForm = document.querySelector("#toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDo_ul = document.querySelector("#toDo-ul");


let toDos = [];

const TODO_KEY = "toDos";

function saveToDo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
const li = event.target.parentElement;
li.remove();
toDos = toDos.filter((item)=>item.id !=parseInt(li.id));
saveToDo();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    toDo_ul.appendChild(li);
    li.appendChild(span);
    span.innerText=newToDoObj.text;
    li.prepend(button);
    button.innerText="❌";
    button.addEventListener("click", deleteToDo);    
}

function handleSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    };
    toDos.push(newToDoObj); 
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleSubmit);

const savedToDo=localStorage.getItem(TODO_KEY);

if(savedToDo){
    const parseToDo = JSON.parse(savedToDo);
    toDos=parseToDo;
    toDos.forEach(paintToDo);
}

