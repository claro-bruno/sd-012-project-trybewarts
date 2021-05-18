let botao = document.querySelector('#botao-login');
let senhaTrybewarts = document.querySelector('#password');

function preventD () {
    botao.addEventListener('click', (event) => {
        event.preventDefault();
        botaoLogin ()
        })
}

preventD();

function botaoLogin () {
    let loginTrybewarts = document.querySelector('#login');
    if (loginTrybewarts.value !== 'tryber@teste.com') {
        alert ('Login ou senha inválidos.');
    }
}