function logar() {
  const login = document.querySelector('#login').value;
  const senha = document.querySelector('#senha').value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const btnLogin = document.querySelector('#logar');
btnLogin.addEventListener('click', logar);
