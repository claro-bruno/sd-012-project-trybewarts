const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const button = document.querySelector('#buttonEntrar');
const form = document.querySelector('.trybewarts-login');

function verificaLogin () {
    if(login.value !== 'tryber@teste.com' && senha.value !== '123456') {
        alert('Login ou senha inválidos.');
    }
    else {
        alert('Olá, Tryber!');
    }
}

form.addEventListener('submit', verificaLogin);
