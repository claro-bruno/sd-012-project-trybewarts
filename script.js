// criar radio buttons

const rate = document.querySelector('.label-rate-container');

function createRate() {
  for (let index = 1; index < 11; index += 1) {
    const radioBtn = document.createElement('input');
    const label = document.createElement('label');
    label.setAttribute('for', index);
    label.innerHTML = `${index} `;
    label.classList.add('form-check-label');
    radioBtn.setAttribute('type', 'radio');
    radioBtn.id = index;
    radioBtn.classList.add('form-check-input');
    radioBtn.setAttribute('name', 'rate');
    radioBtn.setAttribute('value', index);
    rate.appendChild(label);
    rate.appendChild(radioBtn);
  }
}

createRate();

// habilitar botão enviar

const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

agreement.addEventListener('click', () => {
  if (agreement.hasAttribute('checked')) {
    agreement.removeAttribute('checked');
  } else {
    agreement.setAttribute('checked', '');
  }
});

function activeBtn() {
  if (agreement.hasAttribute('checked')) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.add('able');
  } else {
    submitBtn.setAttribute('disabled', '');
    submitBtn.classList.remove('able');
  }
}

agreement.addEventListener('click', activeBtn);

// verificação login

const loginBtn = document.querySelector('.login-btn');
const login = document.querySelector('#login');
const pass = document.querySelector('#password');

loginBtn.addEventListener('click', () => {
  if (login.value.length < 7 || pass.value.length < 5) {
    alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});

// contador de caracteres textarea

const textarea = document.querySelector('#textarea');
const counterN = 500;
const counterTxt = document.querySelector('.counter');

function counter() {
  const x = counterN - textarea.value.length;
  counterTxt.innerHTML = x;
}

textarea.addEventListener('keyup', counter);
