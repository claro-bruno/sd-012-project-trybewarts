let loginButton = document.getElementById('login-button');
let emailInput = document.getElementById('trybewarts-email');
let passwordInput = document.getElementById('trybewarts-senha');

loginButton.addEventListener('click', verifyLogin);

function verifyLogin(event) {
    console.log(emailInput.value);
    if (emailInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
        event.preventDefault();
    } else {
        console.log('Login feito');
    }
}