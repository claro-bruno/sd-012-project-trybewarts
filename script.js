const submitButton = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
submitButton.disabled = true;
const comments = document.querySelector('#textarea')

function verifyLogin(login, password) {
  if (login === 'tryber@teste.com') {
    if (password === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  } else {
    alert('Login ou senha inválidos.');
  }
}

function addEvents() {
  const headerForm = document.querySelector('.trybewarts-login');
  const headerChildren = headerForm.children;
  const headerFormButton = headerChildren[2];

  headerFormButton.addEventListener('click', () => {
    verifyLogin(headerChildren[0].value, headerChildren[1].value);
  });
}

function contaLimiteCaracteres() {
  let char = comments.value;
  const contadorDeCaracteres = document.querySelector('#counter');
  let dif = 500;

  if (char.length >= 1) {
    for (let i = 1; i < char.length; i += 1) {
      dif = (500 - i);
      contadorDeCaracteres.innerText = dif;
    }
  } else {
    contadorDeCaracteres.innerText = 500;
  }
};

const checkSubmmit = () => {
  if (checkbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

checkbox.addEventListener('click', checkSubmmit);
comments.addEventListener('keyup', contaLimiteCaracteres);

checkSubmmit();
addEvents();

/* const loginButton = document.getElementById('botao-login');

function checkLogin() {
  const login = document.getElementById('login-field');
  const senha = document.getElementById('senha');

  if ((login.value.toString() === 'tryber@teste.com') && (senha.value.toString() === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
loginButton.addEventListener('click', checkLogin);
*/
