let loginButton = document.querySelector(".login-validation")

loginButton.addEventListener('click', () => {
    let login = document.querySelector('#login');
    let password = document.querySelector('#password');
    if (login.value === 'tryber@teste.com' && password.value === '123456') {
        alert('Olá, Tryber!')
    } else {
        alert('Login ou senha inválidos.')
    }
})