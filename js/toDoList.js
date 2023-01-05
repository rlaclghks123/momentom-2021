const toDoForm = document.querySelector('#toDo-form');
const toDoInput = toDoForm.querySelector('input');
const toDo_ul = document.querySelector('#toDo-ul');
const reactCloseBtn = document.querySelector('.reactBox button:first-child');
const reactDownSizeBtn = document.querySelector('.reactBox button:nth-child(2)');
const reactExpandBtn = document.querySelector('.reactBox button:last-child');
const toDoListBox = document.querySelector('.toDoListBox');
const toDoListBoxOpenBtn = document.querySelector('#toDoListBoxBtn');

let toDos = [];

const TODO_KEY = 'toDos';

function saveToDo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id != parseInt(li.id));
  saveToDo();
}

function paintToDo(newToDoObj) {
  const li = document.createElement('li');
  li.id = newToDoObj.id;
  const span = document.createElement('span');
  const button = document.createElement('button');

  span.innerText = newToDoObj.text;
  toDo_ul.appendChild(li);
  li.appendChild(span);
  li.append(button);
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}

function handleCloseBtn(e) {
  toDoListBox.style.display = 'none';
  toDoListBox.classList.remove('expand');
}

function handleOpenBtn(e) {
  console.log(e);
  toDoListBox.style.display = 'flex';
}

function handleDownSizeBtn(e) {
  toDoListBox.classList.remove('expand');
}

function handleExpandBtn(e) {
  toDoListBox.classList.add('expand');
}

toDoForm.addEventListener('submit', handleSubmit);
toDoListBoxOpenBtn.addEventListener('click', handleOpenBtn);
reactCloseBtn.addEventListener('click', handleCloseBtn);

toDoListBoxOpenBtn.addEventListener('click', handleOpenBtn);
reactDownSizeBtn.addEventListener('click', handleDownSizeBtn);
reactExpandBtn.addEventListener('click', handleExpandBtn);

const savedToDo = localStorage.getItem(TODO_KEY);

if (savedToDo) {
  const parseToDo = JSON.parse(savedToDo);
  toDos = parseToDo;
  toDos.forEach(paintToDo);
}
