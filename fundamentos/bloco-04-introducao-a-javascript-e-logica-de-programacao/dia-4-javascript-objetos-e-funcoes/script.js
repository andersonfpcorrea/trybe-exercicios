// OBJECT for the exercises from 1 to 5

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

// 1. Printo to the console a welcome message to the above personagem, including his name.
console.log(`Welcome, ${info.personagem}`);
// 2. Insert on the object a new property called `recorrente`, whose value is `Sim`, then print to the console the whole object.
console.log(info);
// 3. Use `for/in` and show all the object's keys.
for (let keys in info) {
  console.log(keys);
}
// 4. Use `for/in` and show all the object's values.
for (let keys in info) {
  console.log(info[keys]);
}
// 5. Define a second object with the same keys of `info` and the following values:
//    'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics # 178', 'O último MacPatinhas', 'Sim'. Then, print to the console the values of the correspondent keys together.
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics # 178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
const printKeysValues = function (object1, object2) {
  if (Object.values(object1).length === Object.values(object2).length) {
    for (let i = 0; i < Object.values(object1).length; i += 1)
      console.log(
        `"${Object.values(object1)[i]}" e "${Object.values(object2)[i]}"`
      );
  } else return `Choose two objects or arrays with the same length.`;
};
printKeysValues(info, info2);

// Using the following object, do the following exercises:

// let leitor = {
//   nome: "Julia",
//   sobrenome: "Pessoa",
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: "Daniela Kopsch",
//       editora: "Tordesilhas",
//     },
//   ],
// };
// 6. Log to the console a string like that: " O livro favorito de Julia Pessoa
// se chama 'O Pior Dia de Todos' "
console.log(
  `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se 
  chama '${leitor.livrosFavoritos[0].titulo}'`
);
// 7. Add the bellow array to the key "livrosFavoritos":
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
    {
      titulo: "Harry Potter e o Prisioneiro de Azkaban",
      autor: "JK Rowling",
      editora: "Rocco",
    },
  ],
};
// 8. Printo to the console the string: "Julia tem 2 livros favoritos".
console.log(
  `${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`
);

// PART II - FUNCTIONS
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo ,
// ou false , se não for.
