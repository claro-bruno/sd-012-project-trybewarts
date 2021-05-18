const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const botaoLogar = document.getElementById('logar');

function login() {
  console.log('entrou no login')
    let loginCerto = 'tryber@teste.com';
  let senhaCerta = '123456';
    if (inputLogin.value === loginCerto && inputSenha.value === senhaCerta) {
      alert('Olá, Tryber!');
  } else {
      alert('Login ou senha inválidos.');
  };
};

botaoLogar.addEventListener('click', login);