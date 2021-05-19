function getLogin() {
  const login = document.getElementById('input-login').value;
  return login;
}

function getSenha() {
  const senha = document.getElementById('input-senha').value;
  return senha;
}

function validateLogin(login, senha) {
  if ((login === 'tryber@teste.com') && (senha === '123456')) return true;
}

function loginButton() {
  const button = document.getElementById('btt-login');
  button.addEventListener('click', () => {
    if (validateLogin(getLogin(), getSenha())) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

window.onload = () => {
  loginButton();
};

let maxChar = document.getElementById('counter');
const inputText = document.getElementById('textarea');
let valorMax = 500;
console.log(maxChar);

function countChar(event) {
    let textSise = event.target.value.length;
    let total = valorMax - textSise; 
    maxChar.innerHTML = total;
}

inputText.addEventListener('keyup', countChar);

