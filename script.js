const logar = document.querySelector('.logar');
const agree = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');

logar.addEventListener('click', () => {
  const login = document.querySelector('.login');
  const senha = document.querySelector('.senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Requisito 18
agree.addEventListener('click', () => {
  if (agree.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
