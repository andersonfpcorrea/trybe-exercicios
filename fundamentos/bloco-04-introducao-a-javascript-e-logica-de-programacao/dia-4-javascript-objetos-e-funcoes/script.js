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
// console.log(
//   `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se
//   chama '${leitor.livrosFavoritos[0].titulo}'`
// );
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
console.log("========PART II========\n=======================");
console.log("========Exercise 1========");
// 1 - Create a function that receive a string as argument and return 'true' is the argument
// is a palidrome, otherwise return false.

const checkIfPalindrome = function () {
  // 1. input the string:
  const input = prompt(`Write any string to check if it is a palidrome:`);
  // console.log(input);
  // 2. lowercase the original string:
  const inputLowerCase = input.toLowerCase();
  // console.log(inputLowerCase);
  // 3. Split the lower case string into an array:
  const array = [...inputLowerCase];
  // console.log(array);
  // 4. Reverse the array:
  const reverseArray = array.reverse("");
  // console.log(reverseArray);
  // 5. Join into a new string the reversed array:
  const reverseLowerCase = reverseArray.join("");
  // console.log(reverseLowerCase);
  // 6. compare original string with the reversed and output the answer:
  if (reverseLowerCase === inputLowerCase) {
    // console.log(`"${input}" is a palidrome`);
    return true;
  } // console.log(`"${input}" is NOT a palidrome`);
  else return false;
};
// console.log(checkIfPalindrome());

console.log("========Exercise 2========");
// 2. Create a function that receive an array of integers and return the index fo the
// biggest value.
const testArray = [2, 3, 6, 7, 10, 1];
const biggestValue = function (array) {
  let biggerNumber = 0;
  for (let key in array) {
    if (biggerNumber < array[key]) biggerNumber = array[key];
  }
  console.log(testArray.indexOf(biggerNumber));
};
biggestValue(testArray);

console.log("========Exercise 3========");
// 3. Create a function that receive an array of integers and return the index fo the
// smallest value.
const testArray2 = [2, 4, 6, 7, 10, 0, -3];
const smallestValue = function (array) {
  let smallestNumber = array[0];
  for (let key in array) {
    if (smallestNumber > array[key]) smallestNumber = array[key];
  }
  console.log(testArray2.indexOf(smallestNumber));
};
smallestValue(testArray2);

console.log("========Exercise 4========");
// 4. Create a function that receive an array of strings and return the biggest string.
const testArray4 = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
const biggestString = function (arrayOfStrings) {
  let biggestString = "";
  for (let key in arrayOfStrings) {
    if (biggestString.length < arrayOfStrings[key].length)
      biggestString = arrayOfStrings[key];
  }
  console.log(biggestString);
};
biggestString(testArray4);

console.log("========Exercise 5========");
console.log("BRONKEN - FIX THIS");
// 5. Create a function that receive an array of integers and return the integer that is
// most repeated.
const testArray5 = [2, 3, 2, 5, 8, 2, 3];
// 1. Create a function that counts how may times the numbers are repeated:
const mostRepeatedNumber = function (array) {
  // 1.1 Object to save the couting
  const counterArray = [];
  // 1.2 In each iteration, one value is compared with all other and then the
  // result is stored into an array, inside "counterArray"
  for (let key = 0; key < array.length; key += 1) {
    let counter = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[key] === array[i]) counter += 1;
      // console.log("Counter:" + counter);
      // console.log("Array[key]:" + array[key]);
      // console.log("Array[i]:" + array[i]);
      // console.log(`==========end of iteration ${key}.${i}.`);
    }
    counterArray.push([array[key], counter]);
    // console.log(counterArray);
    // console.log(`**********End of iteration ${key}**********`);
  }
  // 2. Loop to extract the index[0] of "counterArray":
  const resultsArray = [];
  for (i = 0; i < counterArray.length; i += 1) {
    resultsArray.push(counterArray[i][0]);
  }
  // 3. Sorting in ascending order the "resultsArray"
  resultsArray.sort((a, b) => a - b);
  // 4. Checking the most repeted number inside "resultsArray"
  let totalCounter = 0;
  let mostRepeatedNumber = [];
  for (i = 0; i < resultsArray.length; i += 1) {
    let parcialCounter = 0;
    for (j = 0; j < resultsArray.length; j += 1) {
      if (resultsArray[i] === resultsArray[j]) parcialCounter += 1;
    }
    // 4.1
    if (parcialCounter >= totalCounter) {
      totalCounter = parcialCounter;
      mostRepeatedNumber.push(resultsArray[i]);
    }
  }
  console.log("======FINAL RESULT======");
  console.log("The most repeated number is:...");
  console.log(...new Set(mostRepeatedNumber));
  console.log(`Repeated for: ${totalCounter} times`);
  console.log("========THE END========");
};

mostRepeatedNumber(testArray5);
