let botao = document.querySelector('#botao-login');

function preventD () {
    botao.addEventListener('click', (event) => {
        event.preventDefault();
        botaoLoginPassword ()
        })
}

preventD();

function botaoLoginPassword () {
    let loginTrybewarts = document.querySelector('#login');
    let senhaTrybewarts = document.querySelector('#password');

    if (loginTrybewarts.value !== 'tryber@teste.com') {
        alert ('Login ou senha inválidos.');
    }
    if (senhaTrybewarts !== '123456') {
        alert ('Login ou senha inválidos.');
    }
}