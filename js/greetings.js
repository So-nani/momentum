// File: momentum/app.js
const loginInput = document.querySelector('#login_form input');
const loginForm = document.querySelector('#login_form');
const greeting = document.querySelector('#greeting');

 const HIDDEN_CLASSNAME = "hidden";
 const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault(); // 폼 진행 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); // form 숨기기
  const username = loginInput.value; // input의 value를 가져옴
  localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 username 저장
  paintGreetings(username);
}

function paintGreetings(abc) {
  greeting.innerText = `Hello ${abc}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 로컬 스토리지에서 username을 가져옴

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);  
} else {
  // show the greeting
  paintGreetings(savedUsername);
}
