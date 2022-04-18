window.onload = jsCarregado;

function jsCarregado() {
  alert("Página foi carregada!");
}

function maisInfos() {
  let textoMaisInfo = document.getElementById("trybe-continua");
  textoMaisInfo.innerText =
    "Aqui você vai aprender Hard Skills, Soft Skills e várias outras habilidades";
}

let clickP = document.getElementById("clicar");

clickP.addEventListener("click", function recebeClique(eventoDeOrigem) {
  // Objeto evento
  // As duas principais propriedades:
  // Target: o elemento que originou o evento
  // Type: o tipo de evento
  console.log(eventoDeOrigem.target);
  console.log(eventoDeOrigem.type);
});
