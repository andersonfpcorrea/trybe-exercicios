// ========================================
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

// Exercícios da PARTE II do conteúdo
// 1.Crie um irmão para elementoOndeVoceEsta .
const section = document.createElement("section");
document.querySelector("#pai").appendChild(section);
// 2.Crie um filho para elementoOndeVoceEsta .
document.querySelector("#elementoOndeVoceEsta").appendChild(section);
// 3.Crie um filho para primeiroFilhoDoFilho .
document.querySelector("#primeiroFilhoDoFilho").appendChild(section);
// 4.A partir desse filho criado, acesse terceiroFilho .
console.log("4. PARTE II");
console.log(
  document.querySelector("#primeiroFilhoDoFilho section").parentElement
    .parentElement.nextElementSibling
);

// PARTE III -exercícios
// Remova todos os elementos filhos de paiDoPai exceto pai ,
// elementoOndeVoceEsta e primeiroFilhoDoFilho .
document
  .querySelector("#pai")
  .removeChild(document.querySelector("#primeiroFilho"));
document
  .querySelector("#pai")
  .removeChild(document.querySelector("#terceiroFilho"));
document
  .querySelector("#pai")
  .removeChild(document.querySelector("#quartoEUltimoFilho"));
document
  .querySelector("#elementoOndeVoceEsta")
  .removeChild(document.querySelector("#segundoEUltimoFilhoDoFilho"));
