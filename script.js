const botao = document.querySelector("#btLogin")
const senha = document.querySelector("#senha")
const login = document.querySelector("#login")

function btLogin() {
botao.addEventListener('click', btLogin)
if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
alert('Login ou senha inválidos.');
} else {
alert('Olá, Tryber!');
}

}
btLogin(); 