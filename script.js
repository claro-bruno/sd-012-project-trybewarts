let clickButton = document.querySelector('#click');
let login = document.querySelector('#loginSpace');
let password = document.querySelector('#senhaSpace');

function alertClick (event) {
    if (login.value === 'tryber@teste.com' && password.value === '123456') {
        alert('Olá, Tryber!');
    }
    else {
        alert('Login ou senha inválidos.');
    }
}

clickButton.addEventListener('click', alertClick)