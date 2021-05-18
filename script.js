// acessa elemento botão de login
// const botaoLogin = document.querySelector('#botaoLogin');

let listener = function (event) {
    if (event.target.id === 'botaoLogin') {
        const inputLogin = document.querySelector('#inputLogin');
        const inputSenha = document.querySelector('#inputSenha');

        if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
            alert('Olá, Tryber!');
        } else {
            alert('Login ou senha inválidos.');
            event.preventDefault();
        }
    }
};

document.addEventListener('click', listener);