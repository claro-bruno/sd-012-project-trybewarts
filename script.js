const loginId = document.getElementById('login');
const passwId = document.getElementById('password');
const sendButton = document.querySelector('#submit-btn');


function Startlogin() {
    if (loginId.value === 'tryber@teste.com' && passwId.value === '123456') {
        alert('Olá, Tryber!')
    }
    else {
        alert('Login ou Senha inválidos.');
    }
}

const activeBtn = () => {

    if (document.getElementById('agreement').checked) {
        document.getElementById('submit-btn').removeAttribute('disabled');

    } else {
        document.getElementById('submit-btn').setAttribute('disabled', 'disabled');
    }

}

const disableBtn = () => {

}


function checkTerms() {

    if (terms.checked) {
        sendButton.disabled = false;
    }
    else {
        sendButton.disabled = true;
    }

}

checkTerms();
