const botaoInput = document.getElementById('botao');
//  validacao de login
function loginValidate() {
  const inputLogin = document.getElementById('email').value;
  const inputPassword = document.getElementById('senha').value;
  if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

botaoInput.addEventListener('click', loginValidate);
