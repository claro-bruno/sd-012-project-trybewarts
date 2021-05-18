const butto = document.querySelector('.btn');

butto.addEventListener('click',()=>{

  const senha = document.querySelector('#input-senha');
  const login = document.querySelector('#input-login');

  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
