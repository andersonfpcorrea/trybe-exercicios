### Descrição do dia 1 do bloco 4

## O que vamos aprender?

Neste dia você vai oficialmente começar a aprender com tudo uma linguagem de programação - um passo importantíssimo na sua ma-ra-vi-lho-sa jornada pelo mundo da programação! 🎉

Até agora, você vem aprendendo como navegar no seu ambiente de desenvolvimento, como organizar seu trabalho e como criar estrutura e estilos para páginas da Web com o HTML e o CSS . A partir de agora, você vai aprender a implementar lógica nas suas páginas, tornando-as verdadeiramente interativas e dinâmicas !

Hoje, vamos aprender:

- O que é o JavaScript (JS)?
- De onde surgiu?
- Qual o seu uso?
- Variáveis.
- Constantes.
- Tipos primitivos.
- Tipagem dinâmica.
- Operadores aritméticos.
- Operadores de atribuição.
- Operadores lógicos.
- Estruturas condicionais como if/else e switch/case.

## Você será capaz de:

- Escrever códigos em JavaScript que usam variáveis, constantes e tipos primitivos;
- Utilizar conceitos da linguagem como a tipagem dinâmica e operadores lógicos/aritméticos/de atribuição no seu código;
- Criar códigos que usam estruturas condicionais, como o if/else .

## Exercises of the day

- FIRST EXERCISE: make five calculator, one for each basic arithmetic operation.
  The program must accept the value of two const variables (a, b), which
  must be created before the calculators.

- SECOND EXERCISE: Create a program that return the biggest of two numbers.
  Assign beforehand two const variables with the values to be compared.

- THIRD EXERCISE: Create a program that return the biggest of three numbers.
  Assign beforehand three const variables with the values to be compared.

- FORTH EXERCISE: Create a program that, given a value assigned to a const, return
  the string "positive" if that value is positive, "negative" if negative or "zero"
  if zero.

- FIFTH EXERCISE: Create a program that define three variables with the values
  of three internal angles of a triangle. Return true if the angles are from a triangle, if not
  return false. If any angle were invalid the program must return an error message.

- SIXTH EXERCISE: Write a program that receive the name of a chess's piece and return
  return the movements it is able to performance.
  -- As a challenge, make the program work be not case sensitive, without creating additional
  conditions.
  -- If the input name is invalid, the program must return an error message.
  -- Example: bishop -> diagonals
  -- Resolution:
  const chessPiece = prompt(
  `Write the name of any chess piece (in singular - e.g.: bishop) and we will let you know how it moves.`
  );

const arrayOfPieces = ["king", "hook", "bishop", "queen", "knight", "pawn"];
const arrayOfMoves = [
"Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.",
"Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.",
"Bishops move diagonally any number of squares. They are unable to jump over pieces.",
"Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.",
"Knights move in an 'L' shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.",
"Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.",
];
let chosenPieceMove;

for (let i = 0; i < 6; i++) {
if (chessPiece.toLowerCase() === arrayOfPieces[i]) {
chosenPieceMove = arrayOfMoves[i];
}
}

if (chosenPieceMove) {
alert(chosenPieceMove);
} else if (!chosenPieceMove) {
alert(
`You wrote an invalid piece. Do not forget to write a singular name, not plural (e.g.: king, queen, bishop etc; dot not write bishops, knights, queens etc)`
);
}
