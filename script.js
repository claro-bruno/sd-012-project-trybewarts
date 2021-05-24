const logId = document.getElementById('login');
const passwId = document.getElementById('password');
const btn = document.getElementById('buttonId');
const formsBtn = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function starLogin() {
  if (logId.value === 'tryber@teste.com' && passwId.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
btn.addEventListener('click', starLogin);

const activeBtn = () => {
  if (document.getElementById('agreement').checked) {
    document.getElementById('submit-btn').removeAttribute('disabled');
  } else {
    document.getElementById('submit-btn').setAttribute('disabled', 'disabled');
  }
};
formsBtn.addEventListener('click', activeBtn);

const textLimitCounter = () => {
  const maxLength = 500;
  document.getElementById('textarea').setAttribute('maxlength', maxLength);
  counter.innerHTML = 500 - textarea.value.length;
};
textarea.addEventListener('keyup', textLimitCounter);
