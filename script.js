const login = document.getElementById('login');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');
const loginText = 'tryber@teste.com';
const senhaText = '123456';

botao.addEventListener('click', () => {
  if (login.value !== loginText || senha.value !== senhaText) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

document.getElementById("submit-btn").disabled = true;

document.querySelector("#agreement").addEventListener("change", function(event){
    let conteudo = document.getElementById("agreement").checked;
    if (conteudo === true) {
      document.getElementById("submit-btn").disabled = false;
    } else {
      document.getElementById("submit-btn").disabled = true;
    }
}
);
