const loginSubmitBtn = document.getElementById('login-submit');
const loginUser = document.getElementById('login-name');
const loginPwd = document.getElementById('login-pwd');
const agreeCheckBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
submitBtn.disabled = true;
submitBtn.style.display = 'none';

function validateLogin(e) {
  e.preventDefault();
  const user = loginUser.value;
  const pwd = loginPwd.value;
  if (user === 'tryber@teste.com' && pwd === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
loginSubmitBtn.addEventListener('click', validateLogin);

function uptdateCount() {
  counter.innerHTML = 500 - textArea.value.length;
}

function enableSubmitBtn() {
  if (agreeCheckBox.checked === true) {
    submitBtn.disabled = false;
    submitBtn.style.display = 'block';
  } else {
    submitBtn.disabled = true;
    submitBtn.style.display = 'none';
  }
}
agreeCheckBox.addEventListener('click', enableSubmitBtn);
textArea.addEventListener('keyup', uptdateCount);
