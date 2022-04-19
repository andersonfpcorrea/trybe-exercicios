## You will be able of:

- changing the content, style and other atributes of HTML elements by JS events;
- using events, like `click` and `change`, in your JS code.

# Exercises

### Exercise 1

Create a function that generate each calendar day and add them as child element of the tag `ul` with the ID=days.

- All days must have the class 'day'.
- The days 24, 25 and 31 must have the aditional class 'holiday'.
- The days 4, 11, 18 and 25 must have the aditional class 'friday'.

### Exercise 2

Implement a function that receive as argument the string `Feriados` and generate dinamically a
button with the name "Feriados".

- Add to this button the ID 'btn-holiday';
- Add this button as child element of the `<div>` with the class 'buttons-container'.

### Exercise 3

Implement a function that add to the 'Feriados' button a click event that alter the
background color of the days containing the 'holiday' class.

- This button should have the reverse logic: upon being clicked again, the initial
  condition is restored.

### Exercise 4

Implement a function that receive as argument the string `Sexta-feira` and generate dinamically a button with the name 'Sexta-feira'.

- Add to this button the ID 'btn-friday';
- Add this button as child element of the `<div>` whose class is 'buttons-container'.

### Exercise 5

Implement a function that add to the button 'Sexta-feira' a click event that mutate
the text content of the fridays.

- The button should have the reverse logic implemented.

### Exercise 6

Implement two functions the create a 'zoom' effect. Upon hovering on any day, the text must be
scaled up and when passing away the mouse pointer from the text it must return to its original size.

### Exercise 7

Implement a function that add a personalized task to the calendar. The function must receive as
argument a string with the task name (e.g.: cook) and create a `<span>` containing the task.

- The created element must be a child element of the `<div` whose class is 'my-tasks'.

### Exercise 8

Implement a function that add caption with color to the task created on the last exercise.
This function must receive as parameter a string ('color') and create dinamically a `<div>`
with the class `task`.

- The parameter 'color' must be used as background color of the created `<div>`;
- The created element must be append as child element of the `<div>` whose class is 'my-tasks'.

### Exercise 9

Implement a function that add a click event to the legend created on the last exercise. Upon cliking on the legend div, the function must add to it the class `task selected`.

- By clicking again on the div, the task must be deselected (the class must be removed);

### Exercise 10

Implement a function that add a click event to the calendar's days, which function assign to the
clicked day the color of the selected task legend.

- By clicking again on the same day, the original condition must be restored.
