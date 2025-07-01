// File: momentum/app.js
const loginInput = document.querySelector('#login_form input');
const loginButton = document.querySelector('#login_form button');

function LoginBtnClick(){
  console.log(loginInput.value);
}

loginButton.addEventListener("click",LoginBtnClick);