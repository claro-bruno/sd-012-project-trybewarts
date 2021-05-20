const login = document.getElementById('login');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');
const loginText = 'tryber@teste.com';
const senhaText = '123456';

botao.addEventListener('click', () => {
  if (login.value !== loginText || senha.value !== senhaText) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const botaoSubmit = document.getElementById('submit-btn');

botaoSubmit.disabled = true;

const inputRadio = document.querySelector('#agreement');

inputRadio.addEventListener('change', () => {
  const conteudo = inputRadio.checked;
  if (conteudo === true) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
});
