const btnEL = document.querySelector('.btn');
const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.senha');

btnEL.addEventListener('click', () => {
  if (inputEmail.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.')
  } else {
    alert('Olá, Tryber!');
  }
})