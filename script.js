const SRC = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1051532824';
const COLOR_PLAYER = '&color=%2300ffa3';
const AUTO_PLAY = '&auto_play=true';
const iframe = document.querySelector('iframe');
const MSG_LOGIN = 'Olá, Tryber!';
const MSG_ERROR = 'Login ou senha inválidos.';
const MSG_ERROR_SUBJECTS = 'Qual ou quais conteúdos você está com mais vontade de aprender? ;)';
const MSG_ERROR_FAMILY = 'Escolha uma família! =D';
const MSG_ERROR_RATE = 'Nos dê uma nota ;D';
const btnLogin = document.getElementById('btn-login');
const dataLogin = {
  login: 'tryber@teste.com',
  password: '123456',
};
const form = document.querySelector('#evaluation-form');
const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.family');
const subjects = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.rate');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

const validateLogin = () => {
  const inputLogin = document.getElementById('input-login');
  const inputPassword = document.getElementById('input-senha');
  return inputLogin.value === dataLogin.login && inputPassword.value === dataLogin.password;
};

const initApplication = () => {
  const mainStyle = document.querySelector('main').style;
  const header = document.querySelector('header');
  header.innerHTML = '';
  header.style.height = '0';
  mainStyle.opacity = '1';
};

const createMusicPlayer = () => {
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('frameborder', 'no');
  iframe.width = '400px';
  iframe.height = '60px';
  iframe.allow = 'autoplay';
  iframe.src = SRC + COLOR_PLAYER + AUTO_PLAY;
};

const eventLogin = () => {
  const bodyStyle = document.querySelector('body').style;
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();

    if (validateLogin() && bodyStyle.display <= '768px') {
      initApplication();
      return alert(MSG_LOGIN);
    }

    if (validateLogin()) {
      return alert(MSG_LOGIN);
    }
    alert(MSG_ERROR);
  });
};

const agreeUseInformation = () => {
  agreement.addEventListener('click', () => {
    if (agreement.checked) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled', 'disabled');
    }
  });
};

const characterCounter = () => {
  const maxLength = 500;
  counter.innerText = maxLength;
  textArea.addEventListener('input', () => {
    counter.innerText = maxLength - textArea.value.length;
  });
};

function paragraphDataCreator(data) {
  const p = document.createElement('p');
  p.className = 'data';
  p.innerHTML = data;
  form.appendChild(p);
}

function searchOptionChecked(element) {
  const toArray = Array.from(element);
  return toArray.reduce((acc, curr) => {
    if (acc === '' && curr.checked) {
      acc += `${curr.value}`;
    } else if (curr.checked) {
      acc += `, ${curr.value}`;
    }
    return acc;
  }, '');
}

function copyData() {
  const fullName = `Nome: ${firstName.value} ${lastName.value}`;
  paragraphDataCreator(fullName);
  const email = `Email: ${inputEmail.value}`;
  paragraphDataCreator(email);
  const selectedHouse = `Casa: ${house.value}`;
  paragraphDataCreator(selectedHouse);
  const selectedFamily = `Família: ${searchOptionChecked(family)}`;
  paragraphDataCreator(selectedFamily);
  const selectedSubject = `Matérias: ${searchOptionChecked(subjects)}`;
  paragraphDataCreator(selectedSubject);
  const selectedRate = `Avaliação: ${searchOptionChecked(rate)}`;
  paragraphDataCreator(selectedRate);
  const textComment = `Observações: ${textArea.value}`; // textArea declarado na linha 23
  paragraphDataCreator(textComment);
}

function checkboxIsChecked(element) {
  const subjectsArr = Array.from(element);
  const isChecked = subjectsArr.reduce((acc, { checked }) => {
    if (checked) acc = true;
    return acc;
  }, false);

  return isChecked;
}
// Substitui campos do formulário por dados preenchidos ao clicar no botão "Enviar"
const returnDataCopy = () => {
  submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!checkboxIsChecked(family)) return alert(MSG_ERROR_FAMILY);
    if (!checkboxIsChecked(subjects)) return alert(MSG_ERROR_SUBJECTS);
    if (!checkboxIsChecked(rate)) return alert(MSG_ERROR_RATE);
    form.innerHTML = '';
    copyData();
  });
};

window.onload = () => {
  eventLogin();
  createMusicPlayer();
  agreeUseInformation();
  characterCounter();
  returnDataCopy();
};
