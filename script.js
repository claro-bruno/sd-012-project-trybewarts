function titleOnHeader() {
    let paiBody = document.querySelector("header");
    let title = document.createElement("h1");
    title.innerHTML = "Trybewarts";
    paiBody.appendChild(title);
    title.id = "trybewarts-header-title";
}
titleOnHeader();

function headerVazio(){
    let paiBody = document.querySelector("header");
    let teste = document.createElement("h1");
    teste.innerHTML = "";
    paiBody.appendChild(teste);
}
headerVazio();