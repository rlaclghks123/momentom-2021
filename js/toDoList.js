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
  if (!confirm('확인(예) 또는 취소(아니오)를 선택해주세요.')) {
    return;
  } else {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id != parseInt(li.id));
    saveToDo();
  }
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

function handleToDoFormSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value.trim();
  if (newToDo === '') {
    alert('값을 입력해주세요');
    return;
  }
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}

function handleToDoListCloseBtn() {
  toDoListBox.style.display = 'none';
  toDoListBox.classList.remove('expand');
}

function handleToDoListOpenBtn(e) {
  console.log(e);
  toDoListBox.style.display = 'flex';
}

function handleToDoDownSizeBtn() {
  toDoListBox.classList.remove('expand');
}

function handleToDoExpandBtn() {
  toDoListBox.classList.add('expand');
}

toDoForm.addEventListener('submit', handleToDoFormSubmit);
toDoListBoxOpenBtn.addEventListener('click', handleToDoListOpenBtn);
reactCloseBtn.addEventListener('click', handleToDoListCloseBtn);

toDoListBoxOpenBtn.addEventListener('click', handleToDoListOpenBtn);
reactDownSizeBtn.addEventListener('click', handleToDoDownSizeBtn);
reactExpandBtn.addEventListener('click', handleToDoExpandBtn);

const savedToDo = localStorage.getItem(TODO_KEY);

if (savedToDo) {
  const parseToDo = JSON.parse(savedToDo);
  toDos = parseToDo;
  toDos.forEach(paintToDo);
}
