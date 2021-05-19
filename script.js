const loginId = document.getElementById("login");
const passwId = document.getElementById("password");
const sendButton = document.querySelector('#submit-btn');
const currentText = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');

function Startlogin() {
    if (loginId.value === 'tryber@teste.com' && passwId.value === '123456') {
        alert("Olá, Tryber!")
    }
    else {
        alert("Login ou Senha inválidos.");
    }
};

function checkTerms() {
    if (terms.checked) {
        sendButton.disabled = false;
    } else {
        sendButton.disabled = true;
    };
};
checkTerms();

function characterAccount() {
    let current = currentText.innerHTML;
    current = 500;
    currentText.innerHTML = current - textArea.value.length;
};
characterAccount();