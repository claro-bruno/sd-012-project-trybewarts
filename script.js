const botao = document.querySelector('#btLogin');
const senha = document.querySelector('#senha');
const login = document.querySelector('#login');
const verificaCaixa = document.querySelector('#agreement');
const validaBt = document.querySelector('#submit-btn');

function btLogin() {
  botao.addEventListener('click', btLogin);
  if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btLogin();

verificaCaixa.addEventListener('click', () => {
  if (!verificaCaixa.checked) {
    validaBt.setAttribute('disabled', true);
  } else {
    validaBt.removeAttribute('disabled');
  }
});
if (!verificaCaixa.checked) {
 validaBt.setAttribute('disabled', true);
}
