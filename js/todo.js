const toDoForm = document.querySelector("#todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 할 일 지우기
function delTodo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
  // console.log(typeof(deleteLi.id))
  toDos = toDos.filter((todo) => todo.id !== parseInt(deleteLi.id));
  saveToDos()
  // console.log(event.target.parentElement.innerText); 
  // 이벤트가 발생한 요소의 부모 요소를 찾음. 즉, 버튼의 부모 요소인 li를 찾아 명시함
  // console.log(event.composedPath());
  // composedPath : 크롬 업데이트로 인해 추가된 기능으로, 이벤트가 발생한 요소의 경로를 배열 형태로 반환합니다.
}

// 화면에 출력
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  
  // button 이벤트
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", delTodo);
  
  // 추가
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// 제출 핸들링
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id:Date.now()
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const getSavedToDos = localStorage.getItem(TODOS_KEY);

if (getSavedToDos !== null) {
  const parsedToDos = JSON.parse(getSavedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
