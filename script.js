const inputLogin = document.querySelector('.input-login');
const inputSenha = document.querySelector('.input-senha');
const btnLogin = document.querySelector('.btn-login');
const agreement = document.querySelector('#agreement');
const enviar = document.querySelector('#submit-btn');
const submitButton = document.querySelector('#submit');

const validate = () => {
  btnLogin.addEventListener('click', () => {
    if (inputLogin.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
};

submitButton.addEventListener('click', validate);

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
});
