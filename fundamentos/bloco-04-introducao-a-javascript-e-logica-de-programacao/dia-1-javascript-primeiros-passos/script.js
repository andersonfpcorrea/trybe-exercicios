// EXERCISES: B4-D1

// FIRST EXERCISE: make five calculators, one for each basic arithmetic operation.
// The program must accept the value of two const variables (a, b), which
// must be created before the calculators.
const firstNumber = 3;
const secondNumber = 2;

const sum = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const module = firstNumber % secondNumber;

console.log(
  `Sum:${sum}, subtraction:${subtraction}, multiplication:${sum}, division:${division}, module:${module}.`
);

// SECOND EXERCISE: Create a program that return the biggest of two numbers.
// Assign beforehand two const variables with the values to be compared.
if (firstNumber > secondNumber)
  console.log(`${firstNumber} is bigger than ${secondNumber}`);
else console.log(`${secondNumber} is bigger than ${firstNumber}`);

// THIRD EXERCISE: Create a program that return the biggest of three numbers.
// Assign beforehand three const variables with the values to be compared.
const thirdNumber = 4;
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log(
    `${firstNumber} is bigger than ${secondNumber} and ${thirdNumber}`
  );
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  console.log(
    `${secondNumber} is bigger than ${firstNumber} and ${thirdNumber}`
  );
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
  console.log(
    `${thirdNumber} is bigger than ${firstNumber} and ${secondNumber}`
  );
}

// FORTH EXERCISE: Create a program that, given a value assigned to a const, return
// the string "positive" if that value is positive, "negative" if negative or "zero"
// if zero.
let value;
value = firstNumber;
if (value >= 0) {
  console.log(`${value} is positive`);
} else if (value < 0) {
  console.log(`${value} is negative`);
} else console.log(`${value} is zero`);

// FIFTH EXERCISE: Create a program that define three variables with the values
// of three internal angles of a triangle. Return true if the angles are from a triangle, if not
// return false. If any angle were invalid the program must return an error message.
const sides = [60, 30, 90];
const [sideA, sideB, sideC] = sides;
let isTriangle;
const biggerSide = function () {
  if (sideA >= 180) return `${sideA} is not a valid angle`;
  else if (sideB >= 180) return `${sideB} is not a valid angle`;
  else if (sideC >= 180) return `${sideC} is not a valid angle`;
  else if (sideA >= 180 && sideB >= 180)
    return `${sideA} and ${sideB} are not a valid angles.`;
  else if (sideA >= 180 && sideC >= 180)
    return `${sideA} and ${sideC} are not a valid angles.`;
  else if (sideB >= 180 && sideC >= 180)
    return `${sideB} and ${sideC} are not a valid angles.`;
  else if (sideA >= 180 && sideB >= 180 && sideC >= 180)
    return `${sideA}, ${sideB} and ${sideC} are not a valid angles.`;
};
biggerSide();

const smallerSide = function () {
  if (sideA <= 0) return `${sideA} is not a valid angle`;
  else if (sideB <= 0) return `${sideB} is not a valid angle`;
  else if (sideC <= 0) return `${sideC} is not a valid angle`;
  else if (sideA <= 0 && sideB <= 0)
    return `${sideA} and ${sideB} are not a valid angles`;
  else if (sideA <= 0 && sideC <= 0)
    return `${sideA} and ${sideC} are not a valid angles`;
  else if (sideB <= 0 && sideC <= 0)
    return `${sideB} and ${sideC} are not a valid angles`;
  else if (sideA <= 0 && sideB <= 0 && sideC <= 0)
    return `${sideA}, ${sideB} and ${sideC} are not a valid angles`;
};
smallerSide();

const checkIfTriangle = function () {
  if (sideA + sideB + sideC === 180) {
    if (!biggerSide() && !smallerSide()) {
      isTriangle = true;
      console.log(
        `${isTriangle}. It is a triangle, since ${sideA} + ${sideB} +${sideC} equals 180, and none of the sides is greater than 180 or lesser than 0.`
      );
    } else if (biggerSide() && !smallerSide()) {
      isTriangle = false;
      console.log(`${isTriangle}. It is not a triangle since ${biggerSide()}`);
    } else if (smallerSide() && !biggerSide()) {
      isTriangle = false;
      console.log(`${isTriangle}. It is not a triangle since ${smallerSide()}`);
    } else if (biggerSide() && smallerSide()) {
      isTriangle = false;
      console.log(
        `${isTriangle}. It is not a triangle since ${biggerSide()} AND ${smallerSide()}`
      );
    }
  } else {
    isTriangle = false;
    console.log(
      `${isTriangle}. It is NOT a triangle, since ${sideA} + ${sideB} +${sideC} DOES NOT equal 180.`
    );
  }
};
checkIfTriangle();

// SIXTH EXERCISE: Write a program that receive the name of a chess's piece and return
// return the movements it is able to performance.
// - As a challenge, make the program work be not case sensitive, without creating additional
// conditions.
// - If the input name is invalid, the program must return an error message.
// - Example: bishop -> diagonals

// const chessPiece = prompt(
//   `Write the name of any chess piece (in singular - e.g.: bishop) and we will let you know how it moves.`
// );
// const arrayOfPieces = ["king", "hook", "bishop", "queen", "knight", "pawn"];
// const arrayOfMoves = [
//   "Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.",
//   "Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.",
//   "Bishops move diagonally any number of squares. They are unable to jump over pieces.",
//   "Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.",
//   "Knights move in an 'L' shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.",
//   "Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.",
// ];
// let chosenPieceMove;

// for (let i = 0; i < 6; i++) {
//   if (chessPiece.toLowerCase() === arrayOfPieces[i]) {
//     chosenPieceMove = arrayOfMoves[i];
//   }
// }

// if (chosenPieceMove) {
//   alert(chosenPieceMove);
// } else if (!chosenPieceMove) {
//   alert(
//     `You wrote an invalid piece. Do not forget to write a singular name, not plural (e.g.: king, queen, bishop etc; dot not write bishops, knights, queens etc)`
//   );
// }

// SEVENTH EXERCISE: Create a program that convert a score (given in percentage from 0 to 100)
// into scores from A to F. Follow these rules:
// Percentage>=90 -> A
// Percentage>=80 -> B
// Percentage>=70 -> C
// Percentage>=60 -> D
// Percentage>=50 -> E
// Percentage <50 -> F
// The program must return an error mensage and close if the input score is less than 0 or
// greater than 100.

// const scorePercentage = Number(
//   prompt(`Write your score: from 0 to 100. Use only numbers.`)
// );
// let scoreLetter;
// const scoreTransform = function () {
//   if (scorePercentage >= 0 && scorePercentage < 50) scoreLetter = "F";
//   else if (scorePercentage >= 50 && scorePercentage < 60) scoreLetter = "E";
//   else if (scorePercentage >= 60 && scorePercentage < 70) scoreLetter = "D";
//   else if (scorePercentage >= 70 && scorePercentage < 80) scoreLetter = "C";
//   else if (scorePercentage >= 80 && scorePercentage < 90) scoreLetter = "B";
//   else if (scorePercentage >= 90 && scorePercentage < 100) scoreLetter = "A";
//   else scoreLetter = `You wrote an invalid score. Please try again.`;
// };
// scoreTransform();
// alert(scoreLetter);

// EIGTH EXERCISE: Create a program that define three numbers into const variables and
// return "true" if at least one out of the three is even, if this condition is
// not fullfilled, then return "false".

// const firstInputNumber = Number(
//   prompt(
//     `Write any number...if you write nothing, we will consider it as a zero :)`
//   )
// );
// const secondInputNumber = Number(prompt(`Write a second number...`));
// const thirdInputNumber = Number(prompt(`Write a last number...`));
// const checkIfEven = function () {
//   if (
//     firstInputNumber % 2 === 0 ||
//     secondInputNumber % 2 === 0 ||
//     thirdInputNumber % 2 === 0
//   )
//     return true;
//   else return false;
// };
// console.log(checkIfEven());
// alert(checkIfEven());

// NINETH EXERCISE: Create a program that define three numbers into const variables
// and return true if at least one of them is odd, otherwise it returns false. Use
// only one if statement.
// const firstInputNumber = Number(
//   prompt(
//     `Write any number...if you write nothing, we will consider it as a zero :)`
//   )
// );
// const secondInputNumber = Number(prompt(`Write a second number...`));
// const thirdInputNumber = Number(prompt(`Write a last number...`));
// const checkIfOdd = function () {
//   if (
//     firstInputNumber % 2 !== 0 ||
//     secondInputNumber % 2 !== 0 ||
//     thirdInputNumber % 2 !== 0
//   )
//     return true;
//   else return false;
// };
// console.log(checkIfOdd());
// alert(checkIfOdd());

// - TENTH EXERCISE: First create two variables assigned to two numbers. The first value is the
//   cost of a product and the second is the selling prince. Then, from these values, calculate
//   the profit a company would have by selling 1000 of that product.
//   - Include a tax of 20% upon the product's cost, so the total cost is "cost + cost*0.2"
//   - Include in the program an error message, in case the input values are less than zero.
// const cost = Number(
//   prompt(
//     `Write down the cost related to the manufacturing of the product. Please type only numbers.`
//   )
// );
// const tax = Number(
//   prompt(
//     `Write down the paid tax related to the manufacturing of the product. Please type only numbers: for example, if you had 10% of tax, type 10.`
//   )
// );
// const sellingPrice = Number(
//   prompt(
//     `Write down the selling price of the product. Please type only numbers.`
//   )
// );
// let profit;
// const profitCalculator = function () {
//   profit = sellingPrice - (cost + cost * (tax / 100));
// };
// profitCalculator();
// console.log(profit);

// - ELEVENTH EXERCISE: A brazilian worker is debted from his gross sallary two tax (Social
//   Security Tax and Income Tax). Create a program that, given any gross sallary, calculates the
//   net sallary.
//   - For the taxes use the following criteria:
//     - Social Security Tax (according to the gross sallary):
//       - Until R$ 1556.94 -> 8%
//       - From R$ 1.556,95 to R$ 2.594,92 -> 9%
//       - From R$ 2.594,93 to R$ 5.189,82 -> 11%
//       - Above R$ 5.189,82 -> fixed value: R$ 570,88
//     - Income Tax (according to the base-sallary (gross sallary minus the Social Security tax)):
//       - Until R$ 1.903,98 -> no tax
//       - From R$ 1.903,99 to 2.826,65 -> 7,5% and R$ 142,80 to be deducted from the tax
//       - From R$ 2.826,66 to R$ 3.751,05 -> 15% and R$ 354,80 to be deducted from the tax
//       - From R$ 3.751,06 to R$ 4.664,68 -> 22,5% and R$ 636,13 to be deducted from the tax
//       - Above R$ 4.664,68 -> 27,5% and R$ 869,36 to be deducted from the tax
// const grossSallary = Number(
//   prompt(
//     `Write down your gross sallary. Write only numbers and use dot(.) for decimals`
//   )
// );
// let socialSecurityTax;
// const socialSecurityTaxCalc = function () {
//   if (grossSallary < 1556.95) socialSecurityTax = grossSallary * 0.08;
//   else if (grossSallary >= 1556.95 && grossSallary < 2594.93)
//     socialSecurityTax = grossSallary * 0.09;
//   else if (grossSallary >= 2594.93 && grossSallary < 5189.82)
//     socialSecurityTax = grossSallary * 0.11;
//   else if (grossSallary >= 5189.82) socialSecurityTax = 570.88;
// };
// socialSecurityTaxCalc();
// const baseSallary = grossSallary - socialSecurityTax;
// let incomeTax;
// const incomeTaxCalc = function () {
//   if (baseSallary < 1903.99) incomeTax = 0;
//   else if (baseSallary >= 1903.99 && baseSallary < 2826.66)
//     incomeTax = baseSallary * 0.075 - 142.8;
//   else if (baseSallary >= 2826.66 && baseSallary < 3751.06)
//     incomeTax = baseSallary * 0.15 - 354.8;
//   else if (baseSallary >= 3751.06 && baseSallary < 4664.68)
//     incomeTax = baseSallary * 0.22 - 636.13;
//   else if (baseSallary >= 4664.68) incomeTax = baseSallary * 0.275 - 869.36;
// };
// incomeTaxCalc();
// const netSallary = `Your net sallary is ${
//   baseSallary - incomeTax
// }. The social security tax is ${socialSecurityTax}, your base-sallary is ${baseSallary} and
// the income tax is ${incomeTax}.`;
// console.log(netSallary);
