 let button = document.querySelector(".btn");


 button.addEventListener('click', () => {

   let senha = document.querySelector("#input-senha");
   let login = document.querySelector("#input-login");

   if (login.value === "tryber@teste.com" && senha.value === "123456") {
     alert("Olá, Tryber!");
   } else {
     alert("Login ou senha inválidos.");
   }

 });
