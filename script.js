function login() {
  const email = document.getElementById('user').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.')
  }
}

window.onload = function main() {
const logar = document.querySelector('.acess')
logar.addEventListener('click', login);
}
