const inputLogin = document.querySelector('#input-login');
const inputSenha = document.querySelector('#input-senha');
const btnLogin = document.querySelector('#btn-login');
// Validação de login
btnLogin.addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
// Habilita botão Enviar quando usuário marcar checkbox de uso de informações
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'disabled');
  }
});
// Configura contador de caracteres do campo de comentário
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const maxLength = 500;
counter.innerHTML = maxLength;
textArea.addEventListener('input', () => {
  counter.innerHTML = maxLength - textArea.value.length;
});
// Elementos dos dados
const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.family');
const subject = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.rate');
// Cria Parágrafos
const form = document.querySelector('#evaluation-form');
function paragraphCreator(data) {
  const p = document.createElement('p');
  p.className = 'data';
  p.innerHTML = data;
  form.appendChild(p);
}
// Cria função que busca elementos selecionados em checkboxes e radios
function optionsSelected(element) {
  let valueElement = '';
  for (let index = 0; index < element.length; index += 1) {
    if (valueElement === '' && element[index].checked) {
      valueElement += `${element[index].value}`;
    } else if (element[index].checked) {
      valueElement += `, ${element[index].value}`;
    }
  }
  return valueElement;
}
// Cria elemento com copia de dados preenchidos
function copyData() {
  const fullName = `Nome: ${firstName.value} ${lastName.value}`;
  paragraphCreator(fullName);
  const email = `Email: ${inputEmail.value}`;
  paragraphCreator(email);
  const selectedHouse = `Casa: ${house.value}`;
  paragraphCreator(selectedHouse);
  const selectedFamily = `Família: ${optionsSelected(family)}`;
  paragraphCreator(selectedFamily);
  const selectedSubject = `Matérias: ${optionsSelected(subject)}`;
  paragraphCreator(selectedSubject);
  const selectedRate = `Avaliação: ${optionsSelected(rate)}`;
  paragraphCreator(selectedRate);
  const textComment = `Observações: ${textArea.value}`; // textArea declarado na linha 23
  paragraphCreator(textComment);
}
// Validador dos checkboxes com as matérias
function subjectsValidate() {
  let counterMark = 0;
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      counterMark += 1;
    }
  }
  if (counterMark > 0) {
    return true;
  }
  return false;
}
// Substitui campos do formulário por dados preenchidos ao clicar no botão "Enviar"
submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (!subjectsValidate()) {
    alert('Qual conteúdo você está com mais vontade de aprender? ;)');
  } else {
    form.innerHTML = '';
    copyData();
  }
});
// Adiciona musica tema do Harry Potter theme remix (https://www.youtube.com/watch?v=Yjr1mcZjRkM)
const src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1051532824';
const colorPlay = '&color=%2300ffa3';
const autoPlay = '&auto_play=true';
window.onload = () => {
  const iframe = document.querySelector('iframe');
  iframe.setAttribute('width', '400px');
  iframe.setAttribute('height', '60');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('frameborder', 'no');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', src + colorPlay + autoPlay);
};
