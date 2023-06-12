const lista = document.querySelector("ul");

const botaoMostrar = document.querySelector("#mostrar");
const botaoEsconder = document.querySelector("#esconde");

botaoMostrar.addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

botaoEsconder.addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});