// SELETORES
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");

// form.addEventListener("submit", (submitEvent) => {
//   console.log(submitEvent);
//   if (submitEvent)
//     alert(
//       "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
//     );
// });

// Bonus
// Date picker
document.getElementById("date").DatePickerX.init();

// Form validator
import JustValidate from "just-validate";

const validate = new JustValidate("#form");

const validation = new JustValidate("#form");

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
