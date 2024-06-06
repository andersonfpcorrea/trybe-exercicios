// SELETORES
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");

form.addEventListener("submit", (submitEvent) => {
  console.log(submitEvent);
  if (submitEvent)
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
});
