let botao = document.querySelector("#singUp")

botao.addEventListener("click", function() {
    let login = document.querySelector("#login")
    let senha = document.querySelector("#senha")

    if (login.value !== "trybe@teste.com" && senha.value !== "123456") {
        window.alert("Login ou senha inválidos")

    } else {
        window.alert("Olá, Tryber!")
    }

})