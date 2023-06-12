const lista = document.querySelector("ul");

const botaoMostrar = document.querySelector("[botao=mostrar]");
const botaoEsconder = document.querySelector("[botao=esconde]");

botaoMostrar.addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

botaoEsconder.addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});