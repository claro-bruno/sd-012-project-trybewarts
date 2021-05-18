const captureEmail = document.getElementById('login');
const capturePassword = document.getElementById('senha');
const captureBtnLogin = document.getElementById('logar');

function acessLogin (event) {
    console.log(captureEmail, capturePassword);
    if (captureEmail.value === 'tryber@teste.com' && capturePassword.value === '123456') {
        alert('Olá, Tryber!');
    }
    else {
        event.preventDefault();
        alert('Login ou senha inválidos.');
    }
}

captureBtnLogin.addEventListener('click', acessLogin);