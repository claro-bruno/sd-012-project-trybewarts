let email = document.getElementById('email');
let senha = document.getElementById('senha');
let botaoLogar = document.getElementById('logar');

botaoLogar.addEventListener('click', function () {
    console.log(senha.value);
    if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
        alert('Login ou senha inválidos.');
    } else {
        alert('Olá, Tryber!');
    }
});