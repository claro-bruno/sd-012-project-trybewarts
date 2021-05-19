const login = document.getElementById('login');
const senha = document.getElementById('senha');
const agreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

document.addEventListener('click', (event) => {
  if (event.target.id === 'button-logar') {
    if (login.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  }
});

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});
