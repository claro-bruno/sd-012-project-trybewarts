const inputLogin = document.querySelector('#inputLogin');

function botaoLogin(event) {
  if (event.target.id === 'botaoLogin') {
    const inputSenha = document.querySelector('#inputSenha');
    if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
      event.preventDefault();
    }
  }
}

const listener = function (event) {
  botaoLogin(event);
  if (event.target.id === 'agreement') {
    const botao = document.querySelector('#submit-btn');
    if (event.target.value === 'on') {
      botao.disabled = false;
      event.target.value = 'off';
    } else {
      botao.disabled = true;
      event.target.value = 'on';
    }
  }
};

document.addEventListener('click', listener);
