let loginButton = document.querySelector('#login-button');
let loginInput = document.querySelector('#login-input');
let passInput = document.querySelector('#pass-input');

loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (loginInput.value != 'tryber@teste.com' || passInput.value != '123456') {
        alert('Login ou senha inválidos.')
    } else {
        alert('Olá, Tryber!');
        loginInput.value='';
        passInput.value='';
    }
})