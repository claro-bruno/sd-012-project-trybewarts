const btnLogin = document.querySelector('#submit-login');
const checkboxAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');

function verificationInputsLogin() {
  const inputLogin = document.querySelector('#input-login');
  const inputPassword = document.querySelector('#input-password');

  if (
    inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', () => {
  verificationInputsLogin();
});

checkboxAgreement.addEventListener('click', () => {  
  if(checkboxAgreement.checked) {
    btnSubmit.removeAttribute('disabled')
  } else {
    btnSubmit.setAttribute('disabled', 'disabled')
  }
})
