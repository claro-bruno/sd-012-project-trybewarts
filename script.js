window.onload = function() {
    let buttonLogin = document.querySelector('.btn-login');
    buttonLogin.addEventListener('click', logar);

    function logar() {
        let login = document.getElementById('login');
        let senha = document.getElementById('senha');
        if(login.value === 'tryber@teste.com' && senha.value === '123456') {
            alert('Olá, Tryber!');
        }
        else {
            alert('Login ou senha inválidos.');
        }
    }
}