const toDoForm = document.querySelector("#todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo_list");

function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);
  toDoInput.value = "";
  // const input = toDoForm.querySelector("input");
  // const newToDo = input.value;
  // input.value = "";
  
  // const li = document.createElement("li");
  // li.innerText = newToDo;
  // toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);