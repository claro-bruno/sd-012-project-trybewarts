const loginId = document.getElementById('#login');
const passwId = document.getElementById('#password');
const sendButton = document.querySelector('#submit-btn');

function startLogin() {
    if (loginId.value !== 'tryber@teste.com' || passwId.value !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    };
};
/*function startLogin() {
    if (loginId.value === 'tryber@teste.com' && passwId.value === '123456') {
        alert('Login ou senha inválidos.')
    }
    else {
        alert('Olá, Tryber!');
    }   
};*/

const activeBtn = () => {

    if (document.getElementById('agreement').checked) {
        document.getElementById('submit-btn').removeAttribute('disabled');

    }
    else {
        document.getElementById('submit-btn').setAttribute('disabled', 'disabled');
    }

};

function checkTerms() {

    if (terms.checked) {
        sendButton.disabled = false;
    }
    else {
        sendButton.disabled = true;
    }

};
