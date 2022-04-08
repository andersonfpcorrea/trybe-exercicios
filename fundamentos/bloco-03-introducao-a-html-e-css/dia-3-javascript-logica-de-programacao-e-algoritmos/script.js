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
const myStringObject = new String("Anderson");
const invertStringArray = [];
let myString2;
for (let i = 1; i <= myStringObject.length; i += 1) {
  invertStringArray.push(myStringObject[myStringObject.length - i]);
}
myString2 = invertStringArray.join("");

console.log(myStringObject);
console.log(invertStringArray);
console.log(myString2);

// 3. `let array = ['java', 'javascript', 'python', 'html', 'css'];`
//    Write two algorithms: one that return a largest word of `array` e another that return
//    the smaller.

// 4. Write an algorithm that return the biggest odd number between 0 and 50.
