document.addEventListener("DOMContentLoaded", function () {
    // Nome que será exibido
    const nome = "LifeSphere";

    // Criando o elemento do nome
    const nomeElemento = document.createElement("div");
    nomeElemento.classList.add("nome");
    nomeElemento.textContent = nome;

    // Adicionando o nome ao main
    document.querySelector("main").appendChild(nomeElemento);
});
