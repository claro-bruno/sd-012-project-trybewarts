function validarLogin() {
  const botaoLogin = document.getElementById('entrar');

  botaoLogin.addEventListener('click', (event) => {
    event.preventDefault();

    const loginValue = document.getElementById('login').value;
    const senhaValue = document.getElementById('senha').value;

    if (loginValue !== 'tryber@teste.com' || senhaValue !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}

validarLogin();

function validarSubmit() {
  const checkin = document.getElementById('agreement');
  checkin.addEventListener('change', (event) => {
    const buttonSubmit = document.getElementById('submit-btn');
    if (event.target.checked) {
      buttonSubmit.removeAttribute('disabled');
    } else {
      buttonSubmit.setAttribute('disabled', true);
      console.log(buttonSubmit);
    }
  });
}

validarSubmit();
