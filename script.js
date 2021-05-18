let password = document.getElementById('password');
let correctPassword = (123456);
let login = document.getElementById('login');
let correctLogin = "tryber@teste.com"
let logar = document.getElementById('login-button')


logar.addEventListener('click', function (){
    if (password.value == correctPassword && login.value === correctLogin) {
        alert('Olá, Tryber!');    
    } else {
        alert("Login ou senha inválidos.");
    }
})