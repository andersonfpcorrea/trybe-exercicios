'use strict';

// Exercise 1
const newMember = (nomeCompleto) => ({
  nomeCompleto,
  email: `${nomeCompleto.split(' ').join('_').toLowerCase()}@trybe.com`,
});

const newEmployees = (newMember) => {
  const employees = {
    id1: newMember('Pedro Guerra').nomeCompleto, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newMember('Luiza Drumond').nomeCompleto, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newMember('Carla Paiva').nomeCompleto, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

// console.log(newEmployees(newMember));

// Exercise 2
const checkFunction = (betNumber) => {
  const number = Math.floor(Math.random() * 6 + 1);
  if (betNumber === number) return 'Parabéns! Você ganhou!';
  return 'Tente novamente';
};

const result = (betNumber, checkFunction) => {
  return checkFunction(betNumber);
};

// console.log(result(5, checkFunction));

// Exercise 3
const checkIfRight = (rightArr, toBeCheckedArr) => {
  return toBeCheckedArr
    .map((curr, index, arr) => {
      if (curr === rightArr[index]) return 1;
      if (curr !== rightArr[index] && curr !== 'N.A') return -0.5;
      if (curr === 'N.A') return 0;
    })
    .reduce((acc, curr) => acc + curr, 0);
};

const answerFunction = (rightArr, toBeCheckedArr, checkIfRight) => {
  return checkIfRight(rightArr, toBeCheckedArr);
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// console.log(answerFunction(RIGHT_ANSWERS, STUDENT_ANSWERS, checkIfRight));

// Bonus exercises
// Part 1
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1. Dragon damage function:
const dragonDamage = () => {
  return Math.round(Math.random() * (dragon.strength - 15) + 15);
};
console.log('dragonDamage = ' + dragonDamage());

// 2. Warrior damage function:
const warriorDamge = () => {
  return Math.round(
    Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) +
      warrior.strength
  );
};
console.log('warriorDamage = ' + warriorDamge());

// 3. Mage damage function:
// Continue coding from here:
const mageDamage = (mage) => ({
  damage: Math.round(
    Math.random() * (mage.intelligence * 2 - mage.intelligence) +
      mage.intelligence
  ),
  mana(mage) {
    if (mage.mana < 15) return (this.damage = 'Não possui mana suficiente');
    else mage.mana -= 15;
  },
});

// Part 2
const gameActions = {
  // 1.
  warriorShift(warriorDamage) {},
};
