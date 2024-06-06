// Exercises

// 1. Create a funciton that receives any number and returns its factorial:
const factorial = (number) => {
  if (number < 0) console.log('Invalid entry');
  else if (number === 0) {
    console.log(1);
  } else {
    let arr = [];
    for (let i = 1; i <= number; i += 1) {
      if (i <= number) arr.push(i);
    }
    console.log(arr.reduce((acc, number) => acc * number));
  }
};
factorial(5);

// 2. Create a function that receive a frase and return the largest word
const largestWord = (frase) => {
  console.log(
    frase.split(' ').reduce((acc, word) => {
      if (acc.length < word.length) acc = word;
      return acc;
    }, frase.split(' ')[0])
  );
};
largestWord('Antônio foi no banheiro e não sabemos o que aconteceu'); // aconteceu

// Create a web page that have:
// - a button associated to an event listener;
// - an accumulator for the number of clicks on the button;
// - an HTML element that displays the number od clicks
const btn = document.querySelector('#btn');
const counter = document.querySelector('.counter');
let clickCounter = 0;
btn.addEventListener('click', () => {
  clickCounter += 1;
  counter.textContent = `${clickCounter}`;
});

// 3.
// 3.1 Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
const str = 'Tryber x aqui!';
let stringA;
const addWord = (string) => {
  const a = str.split(' ');
  a[1] = string;
  return a.join(' ');
};
console.log(addWord('Bebeto'));

// 3.2 Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
const skills = ['HTML', 'CSS', 'JavaSript', 'Git', 'Shell'];

// 3.3 Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
const concatenate = (stringA) => {
  console.log(`${stringA} ${skills.sort().join(' ')}`);
};
concatenate(addWord('Bebeto'));
