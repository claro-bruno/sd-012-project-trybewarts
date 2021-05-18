const buttonLogin = document.getElementById('btn-login');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

function logar() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', logar);

const buttonEnviar = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function enviar() {
  if (buttonEnviar.disabled === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}

agreement.addEventListener('click', enviar);

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
textarea.addEventListener('input', () => {
  counter.innerText = 500 - textarea.value.length;
});

const form = document.querySelector('#evaluation-form')
const p = document.createElement('div')
buttonEnviar.addEventListener('click', () => {
    const nomeCompleto = `<p>Nome: ${document.querySelector('#input-name').value} ${document.querySelector('#input-lastname').value}</p>`
    const email = `<p>Email: ${document.querySelector('#input-email').value}@mail.com</p>`
    const casa = `<p>Casa: ${document.querySelector('#house').value}</p>`
    const familia = `<p>Família: ${document.querySelector('input[name="family"]:checked').value}</p>`
    let materias = 'Matérias: '
    const materia = document.querySelectorAll('input[class="subject"]:checked')
    materia.forEach(element => {
      materias += `${element.value}, `
    });
    const avaliacao = `<p>Avaliação: ${document.querySelector('input[name="rate"]:checked').value}</p>`
    const observacoes = `<p>Observações: ${document.getElementById('textarea').value}`
    form.innerHTML = '';
    p.innerHTML = nomeCompleto
    p.innerHTML += email
    p.innerHTML += casa
    p.innerHTML += familia
    p.innerHTML += materias
    p.innerHTML += avaliacao
    p.innerHTML += observacoes
    form.appendChild(p)
})


// Todos os campos do formulário devem ser substituídos.
// Deve haver um campo com o formato "Nome: Alguem Aqui"
// Deve haver um campo com o formato "Email: email@mail.com"
// Deve haver um campo com o formato "Casa: Casa Escolhida"
// Deve haver um campo com o formato "Família: Família Escolhida"
// Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
// Deve haver um campo com o formato "Avaliação: NotaAqui"
// Deve haver um campo com o formato "Observações: Observações aqui"
