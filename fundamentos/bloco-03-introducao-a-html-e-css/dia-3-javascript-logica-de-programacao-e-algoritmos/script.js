// 1. Create an algorithm that return the factorial of 10;
// Answer: the factorial of 10 is 10x9x8x7x6x5x4x3x2x1
//          - I multiply 10 by 10-1, then by 10-2, then by 10-3...
//          - We can say that for any given number "inputNumber", its factorial is
//            calculated by a loop, that must repeat for (inputNumber-1) times, and
//            at first calculate "inputNumber * (inputNumber-1)", then save this value
//            into another variable ("x", for instance), and then for the following
//            iterations makes x = x (inputNumber - i), being i the present iteration
//            (or repetition).
// const inputNumber = Number(
//   prompt(`Wite down any number and we will calculate its factorial
// for you :) - Write only numbers, do not use letters!`)
// );
// let sum = inputNumber;
// for (let i = 1; i < inputNumber; i += 1) {
//   sum = sum * (inputNumber - i);
// }
// console.log(sum);

// 2. Create an algorithm that invert the letter of a word;
// Answer:
//  1. First, given any input word, we create an object (myStringObject) from this
//     string with "new String"
//  2. We iterate through the string object and save its letters, from the last to the first
//     into a new array (invertStringArray)
//  3. We use the join('') method to create a new string by concatenating all of the elements of
//     "invertStringArray", and we save this string to a new variable (myString2)
// const myStringObject = new String("Anderson");
// const invertStringArray = [];
// let myString2;
// for (let i = 1; i <= myStringObject.length; i += 1) {
//   invertStringArray.push(myStringObject[myStringObject.length - i]);
// }
// myString2 = invertStringArray.join("");

// console.log(myStringObject);
// console.log(invertStringArray);
// console.log(myString2);

// 3. `let array = ['java', 'javascript', 'python', 'html', 'css'];`
//    Write two algorithms: one that return the largest word of `array` e another that return
//    the smallest.
// First algorithm:
// 1. we create a variable called "biggestWord", assigning to it the value "" (empty string);
// 2. We loop through "array" checking the lenght of each string inside it;
// 3. At each iteration, we compare the lenght of the current element to the lenght of
//    "biggestWord". If the current string lenght is higher than "biggestWord" lenght, then
//    we mutate "biggestWord" to the current string.
// 4. We do this process for all strings of "array". At the end, the variable's value will
//    be equal to the largest word of the array.

// Second algorithm:
// 1. To do the second algorith we apply the same logic, but mutating the variable "smallestWord"
// if its lenght is SMALLER than the lenght of the current iteration string. As a starter value, we
// can simply set it to the first word of the array.

// let array = ["java", "javascript", "python", "html", "css"];
// let biggestWord = "";
// let smallestWord = array[0];
// for (let i = 0; i < array.length; i += 1) {
//   if (biggestWord.length < array[i].length) biggestWord = array[i];
//   if (smallestWord.length > array[i].length) smallestWord = array[i];
// }
// console.log(biggestWord);
// console.log(smallestWord);

// 4. Write an algorithm that return the biggest prime number between 0 and 50.
// Answer:
// 1. We  create an array (array) with the numbers we need to check (from 0 to 50), in ascending order.
// 2. We check for each element of the created array if it is prime, and then we store it
//    into another array (primesArray)
// 3. We check the greater element of primesArray.
// 4. The result os printed to the console.

const array = [];
const notPrimesArray = [];
const primesArray = [];
let greaterPrime = 0;
const checkGreatestPrime = function (firstNumber, secondNumber) {
  // 1. Create an array from the input data
  const sizeOfArray = Math.abs(firstNumber - secondNumber) + 1;
  for (let i = 0; i < sizeOfArray; i += 1) {
    if (firstNumber > secondNumber) {
      array.push(secondNumber + i);
    } else array.push(firstNumber + i);
  }
  console.log(
    `You requested to find the biggest prime number between ${
      firstNumber > secondNumber ? secondNumber : firstNumber
    } and ${firstNumber > secondNumber ? firstNumber : secondNumber}`
  );
  console.log(`Size of the created array: ${sizeOfArray}`);
  console.log(`The created array is: ${array}`);
  // =======================================//
  // 2. Check the primes of "array", storing them into "primesArray"
  // 2.1 The not primes are stored into the array "notPrimesArray"
  for (let i = 0; i < array.length; i += 1) {
    const number = array[i];
    let isPrime = true;
    // check if number is equal to 1
    if (number <= 1) {
      continue;
    }
    // check if number is greater than 1
    else if (number > 1) {
      // looping through 2 to number-1
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primesArray.push(array[i]);
      } else {
        notPrimesArray.push(array[i]);
      }
    }
  }
  console.log(`From this array, the primes are: ${primesArray}`);
  console.log(`From this array, the not-primes are: ${notPrimesArray}`);
  // =======================================//
  // 3. Check the greater number of "primesArray"
  for (let i = 0; i < primesArray.length; i += 1) {
    if (primesArray[i] > greaterPrime) greaterPrime = primesArray[i];
  }
  console.log(`From the primes, the greatest is ${greaterPrime}`);
  // =======================================//
  // 4. Final result
  return `The greater prime number between ${
    firstNumber > secondNumber ? secondNumber : firstNumber
  } and ${
    firstNumber > secondNumber ? firstNumber : secondNumber
  } is ${greaterPrime}`;
};

console.log(checkGreatestPrime(0, 50));

// ===========================================
// ==============BONUS EXERCISES==============
// ===========================================
// 1.Create a program that, given a variable `n`, and being `n > 1`, print to the console a square
//  made out of asterisks, whose sides are equal to `n`.
// Answer:
// 1. Given the value "n", print to the console "*"*5, and loop this 5 times.
