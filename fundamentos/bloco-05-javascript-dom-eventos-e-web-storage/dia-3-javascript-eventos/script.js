function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercise 1
// Create a function that generate each calendar day and add them as child element of the
// tag `ul` with the ID=days.
// All days must have the class 'day'.
// The days 24, 25 and 31 must have the aditional class 'holiday'.
// The days 4, 11, 18 and 25 must have the aditional class 'friday'.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  const monthDaysList = document.getElementById("days");

  for (i = 0; i < dezDaysList.length; i += 1) {
    const monthDay = document.createElement("li");
    monthDaysList.appendChild(monthDay).textContent = `${dezDaysList[i]}`;
    // Implementation of the classes to the days:
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31)
      document.querySelectorAll("#days li")[i].className = "day holiday";
    else if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18 ||
      dezDaysList[i] === 25
    )
      document.querySelectorAll("#days li")[i].className = "day friday";
    else document.querySelectorAll("#days li")[i].classList.add("day");
  }
}
createDaysOfTheMonth();

// Exercise 2
// Implement a function that receive as argument the string `Feriados` and generate dinamically a
// button with the name "Feriados".

// - Add to this button the ID 'btn-holiday';
// - Add this button as child element of the `<div>` whose class is 'buttons-container'.
function holidayBtns(Feriados) {
  const btn = document.createElement("button");
  document.querySelector(".buttons-container").appendChild(btn).id =
    "btn-holiday";
  document.querySelector("#btn-holiday").innerText = `${Feriados}`;
}
holidayBtns("Feriados");
