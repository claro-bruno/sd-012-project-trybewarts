const inputButton = document.getElementById('inputButton');

function validateLogin () {
    const inputLogin = document.getElementById('inputLogin').value;
    const inputPassword = document.getElementById('inputPassword').value;
    if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
        alert ('Olá, Tryber')
    } else {
        alert ('Login ou Senha inválidos')
    }
};

inputButton.addEventListener('click', validateLogin);