const botao = document.querySelector("#singUp");

function validandoCabecalho() {
  botao.addEventListener("click", () => {
    const login = document.querySelector("#login");
    const senha = document.querySelector("#senha");
    if (login.value !== "trybe@teste.com" && senha.value !== "123456") {
      window.alert("Login ou senha inválidos");
    } else {
        window.alert("Olá, Tryber!");
      }
    });
}

validandoCabecalho();

const divNotas = document.querySelector('#rate-div');

function criandoRadiosNota() {
  for (let nota = 1; nota <= 10; nota += 1) {
    const notaRadio = document.createElement('input');
    const labelNota = document.createElement('label');
    notaRadio.type = 'radio';
    notaRadio.id = `rate-${nota}`;
    notaRadio.value = nota;
    notaRadio.name = 'rate';
    labelNota.innerText = nota;
    divNotas.appendChild(notaRadio);
    divNotas.appendChild(labelNota);
  }
}

criandoRadiosNota();
