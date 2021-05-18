const emailLogin = document.getElementById('email-login');
const senhaLogin = document.getElementById('senha-login');
const submitLogin = document.getElementsByClassName('submit-login')[0];
const formLogin = document.getElementById('form-login');
const emailPadrao = "tryber@teste.com";
const senhaPadrao = "123456"

submitLogin.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('formulário enviado')
});


function validaLogin() {
  if (emailLogin.value === emailPadrao || senhaLogin.value === senhaPadrao) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

submitLogin.addEventListener('click', validaLogin);
