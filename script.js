// O formulário deve aceitar como padrão o login 'tryber@teste.com' e a senha '123456'

// Caso o login ou a senha sejam diferentes do padrão, ao clicar no botão deverá ser emitido um alerta contendo o texto 'Login ou senha inválidos.'
// Caso o login ou a senha sejam as mesmas definidas por padrão, ao clicar no botão deverá ser emitido um alerta contendo o texto 'Olá, Tryber!'

// P1 - Capturar o botão
const btLogin = document.querySelector('#btLogin');
// P2 - Escutaador de eventos no botão
btLogin.addEventListener('click', () => {
  // P3 - Capturar o value do login e o value do password
  const inputEmail = document.querySelector('#email');
  const inputPasswd = document.querySelector('#passwd');
  // P4 - Criar uma condição
  // P4.1 - Se login e senha for 'tryber@teste.com' e '123456'; Então alert 'Olá, Tryber!';
  if (inputEmail.value === 'tryber@teste.com' && inputPasswd.value === '123456') {
    alert('Olá, Tryber!');
    inputEmail.value = '';
    inputPasswd.value = '';
    // P4.2 - Se não; alert 'Login ou senha inválidos.'
  } else {
    alert('Login ou senha inválidos.');
  }
  inputEmail.value = '';
  inputPasswd.value = '';
});
