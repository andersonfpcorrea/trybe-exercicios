// EXERCISES: B4-D1

// FIRST EXERCISE: make five calculator, one for each basic arithmetic operation.
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
const scorePercentage = Number(
  prompt(`Write your score: from 0 to 100. Use only numbers.`)
);
let scoreLetter;
const scoreTransform = function () {
  if (scorePercentage >= 0 && scorePercentage < 50) scoreLetter = "F";
  else if (scorePercentage >= 50 && scorePercentage < 60) scoreLetter = "E";
  else if (scorePercentage >= 60 && scorePercentage < 70) scoreLetter = "D";
  else if (scorePercentage >= 70 && scorePercentage < 80) scoreLetter = "C";
  else if (scorePercentage >= 80 && scorePercentage < 90) scoreLetter = "B";
  else if (scorePercentage >= 90 && scorePercentage < 100) scoreLetter = "A";
  else scoreLetter = `You wrote an invalid score. Please try again.`;
};
scoreTransform();
alert(scoreLetter);
