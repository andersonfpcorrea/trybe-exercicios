const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Resposata: Porque foi aplicada a ela a classe 'tech', cuja propriedade é 'translateY(-20px)';

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener("click", function () {
  if (!firstLi.classList.contains("tech")) firstLi.classList.add("tech");
  if (secondLi.classList.contains("tech")) secondLi.classList.remove("tech");
  if (thirdLi.classList.contains("tech")) thirdLi.classList.remove("tech");
});

secondLi.addEventListener("click", function () {
  if (!secondLi.classList.contains("tech")) secondLi.classList.add("tech");
  if (firstLi.classList.contains("tech")) firstLi.classList.remove("tech");
  if (thirdLi.classList.contains("tech")) thirdLi.classList.remove("tech");
});

thirdLi.addEventListener("click", function () {
  if (!thirdLi.classList.contains("tech")) thirdLi.classList.add("tech");
  if (firstLi.classList.contains("tech")) firstLi.classList.remove("tech");
  if (secondLi.classList.contains("tech")) secondLi.classList.remove("tech");
});
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("keyup", function (text) {
  console.log(input.value);
  if (firstLi.classList.contains("tech"))
    firstLi.textContent = `${input.value}`;
  if (secondLi.classList.contains("tech"))
    secondLi.textContent = `${input.value}`;
  if (thirdLi.classList.contains("tech"))
    thirdLi.textContent = `${input.value}`;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener("dblclick", function () {
  location = "https://github.com/andersonfpcorrea/andersonfpcorrea.github.io";
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener("mouseover", function () {
  myWebpage.style.color = "#2fc18c";
  myWebpage.style.transition = "all 0.5s";
});
myWebpage.addEventListener("mouseout", function () {
  myWebpage.style.color = "#fff";
});

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
