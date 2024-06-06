let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1 - iterate through the array and print to the console all the values.
for (let iterate of numbers) {
  console.log(iterate);
}
// 2 - Sum all number of the array and print the result to the console
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
console.log(sum);

// 3 - Calculate the arithmetic mean of all the array's values.
const arithmeticMean = sum / numbers.length;
console.log(arithmeticMean);

// 4 - Based on the result of the third exercise, if the value is greater
// than 20, then print to the console "value greater than 20", otherwise,
// print "value less or equal to 20"
console.log(
  arithmeticMean > 20
    ? `Value greater than 20`
    : `Value less than or equal to 20`
);

// 5 - Using `for`, find out what is the greatest value inside the array and
// log it to the console
let greaterNumber = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (greaterNumber < numbers[i]) greaterNumber = numbers[i];
}
console.log(greaterNumber);

// 6 - Find out how many odd numbers there is in the array and log it to the
// console. If there is none, print to the console "no odd number found."
let howManyOddNumber = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) howManyOddNumber += 1;
}
console.log(howManyOddNumber);

// 7 - Using `for`, find out the smaller value inside array and print it to the console;
let smallerNumber = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (smallerNumber > numbers[i]) smallerNumber = numbers[i];
}
console.log(smallerNumber);

// 8 - Using `for`, create an array whose values are from number 1 to number 25 and log to the console;
const newArray = [];
for (let i = 0; i < numbers.length; i += 1) {
  newArray.push(numbers[i]);
}
console.log(newArray);

// 9 - Using the array created in the last exercise, log to the console the result of the division of each one of its elements by `2`.
for (let divisionByTwo of newArray) {
  console.log(divisionByTwo / 2);
}

// ## Bonus exercise
// `let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];`
// 1. Rearrange the elements of `numbers` in ascending order and print to the console;
// Answer:
//  1. Check the greater number and switch its position with the last index position;
//  2. Check the greater number between the first and the second to last index position, and
//     switch its position with the last index position;
//  3. And so on until the first index position.
for (let i = 0; i < numbers.length; i += 1) {
  let greaterNumber = 0;
  for (let a = 0; a < numbers.length - i; a += 1) {
    if (greaterNumber < numbers[a]) greaterNumber = numbers[a];
  }
  [numbers[numbers.indexOf(greaterNumber)], numbers[numbers.length - (1 + i)]] =
    [
      numbers[numbers.length - (1 + i)],
      numbers[numbers.indexOf(greaterNumber)],
    ];
}
console.log(numbers);

// 2. Rearrange the elements of `numbers` in descending order and print to the console;
// Answer:
//  1. The idea here is the exactly the same as the previous exercise, except that this time
//     at every itaration will will search for the smaller number and we will switch its position
//     with the first index position
// for (let i = 0; i < numbers.length; i += 1) {
//   let smallerNumber = numbers[0];
//   for (let a = 0; a < numbers.length - i; a += 1) {
//     if (smallerNumber > numbers[a]) smallerNumber = numbers[a];
//   }
//   [numbers[numbers.indexOf(smallerNumber)], numbers[numbers.length - (1 + i)]] =
//     [
//       numbers[numbers.length - (1 + i)],
//       numbers[numbers.indexOf(smallerNumber)],
//     ];
// }
// console.log(numbers);

// 3. Make a new array out of `numbers`, without altering it. Each new value of the new array
//    must be equal to the correspondent (same index position) value on the array `numbers`
//    multiplied by the following value of `numbers` (index position + 1). If there is no more
//    following value to compare with, then multiply by 2.
// Answer:
//    1. Create an iteration that push to a new array the values of "numbers" as per the rules
const newNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (i < numbers.length - 1) {
    newNumbers.push(numbers[i] * numbers[i + 1]);
  } else newNumbers.push(numbers[i] * 2);
}
console.log(newNumbers);
