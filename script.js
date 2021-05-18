const jonas = document.querySelector('#botao-login');

function botaoLoginPassword() {
  const loginTrybewarts = document.querySelector('#login');
  const senhaTrybewarts = document.querySelector('#password');
  if (loginTrybewarts.value !== 'tryber@teste.com' || senhaTrybewarts.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
  if (loginTrybewarts.value === 'tryber@teste.com' && senhaTrybewarts.value === '123456') {
    alert('Olá, Tryber!');
  }
}

function preventD() {
  jonas.addEventListener('click', (event) => {
    event.preventDefault();
    botaoLoginPassword();
  });
}

preventD();
