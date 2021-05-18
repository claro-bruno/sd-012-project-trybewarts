window.onload = function () {
  const getLoginButton = document.querySelector('#login-btn');
  const getLoginInput = document.querySelector('#login-input');
  const getSenhaInput = document.querySelector('#senha-input');

  function validaLogin() {
    if (
      (getLoginInput.value === 'tryber@teste.com') &
      (getSenhaInput.value === '123456')
    ) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  }
  getLoginButton.addEventListener('click', validaLogin);
};
