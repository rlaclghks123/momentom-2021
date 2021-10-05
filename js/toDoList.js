const toDoForm = document.querySelector("#toDo-form");
const toDoinput = toDoForm.querySelector("input");
const toDoUl = document.querySelector("#toDo-ul");

let toDos=[];

const TODOS_KEY="toDos"

function saveToDo(){
localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter((item) => item.id!=parseInt(li.id));
    saveToDo();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    toDoUl.appendChild(li);
    li.appendChild(span);
    span.innerText=newToDo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteToDo);
    button.innerText="❌";
    li.appendChild(button);
    
}

function handleSubmit(event){
 event.preventDefault();
 const newToDo = toDoinput.value;
 toDoinput.value="";
const newToDoObj = {
    text : newToDo,
    id : Date.now()
};
 toDos.push(newToDoObj);
 paintToDo(newToDoObj);
 saveToDo();
}

toDoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); 

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}