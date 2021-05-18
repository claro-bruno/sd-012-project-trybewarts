const inputButton = document.getElementById('inputButton');
const inputLogin = document.getElementById('inputLogin').value;
const inputPassword = document.getElementById('inputPassword').value;

function validateLogin () {
    if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
        alert ('Olá, Tryber')
    } else {
        alert ('Login ou Senha inválidos')
    }
};

inputButton.addEventListener('click', validateLogin);