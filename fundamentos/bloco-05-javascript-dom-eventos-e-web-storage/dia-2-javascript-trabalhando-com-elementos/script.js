// Exercícios da PARTE I do conteúdo
console.log("1.");
console.log(document.querySelector("#elementoOndeVoceEsta"));

console.log("2.");
document.querySelector(
  "#elementoOndeVoceEsta"
).parentNode.style.backgroundColor = "orangered";

console.log("3."); //Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.querySelector("#elementoOndeVoceEsta").firstElementChild.textContent =
  "Item 3";

console.log("4."); //Acesse o primeiroFilho a partir de pai.
console.log(document.querySelector("#pai").firstElementChild);

console.log("5."); //Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(
  document.querySelector("#elementoOndeVoceEsta").previousElementSibling
);

console.log("6."); //Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta ..
console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling);

console.log("7."); //Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector("#elementoOndeVoceEsta").nextElementSibling);

console.log("8."); //Agora acesse o terceiroFilho a partir de pai .
console.log(document.querySelector("#pai").children[2]);
