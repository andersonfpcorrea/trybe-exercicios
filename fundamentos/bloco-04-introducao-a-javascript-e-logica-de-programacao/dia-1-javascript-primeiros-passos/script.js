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
