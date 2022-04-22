"use strict";

document.addEventListener("click", (clickEvent) => {
  // Background Color
  if (clickEvent.target.classList.contains("user__button--bgDark")) {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";
    localStorage.setItem("backgroundColor", "#222");
    localStorage.setItem("color", "white");
  }
  if (clickEvent.target.classList.contains("user__button--bgBlue")) {
    document.body.style.backgroundColor = "rgb(7, 30, 51)";
    document.body.style.color = "white";
    localStorage.setItem("backgroundColor", "rgb(7, 30, 51)");
    localStorage.setItem("color", "white");
  }
  if (clickEvent.target.classList.contains("user__button--bgWhite")) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem("backgroundColor", "white");
    localStorage.setItem("color", "black");
  }
  // Font color:
  if (clickEvent.target.classList.contains("user__button--fontDark")) {
    document.body.style.color = "#111";
    localStorage.setItem("color", "#111");
  }
  if (clickEvent.target.classList.contains("user__button--fontBlue")) {
    document.body.style.color = "rgb(7, 30, 51)";
    localStorage.setItem("color", "rgb(7, 30, 51)");
  }
  if (clickEvent.target.classList.contains("user__button--fontWhite")) {
    document.body.style.color = "white";
    localStorage.setItem("color", "white");
  }
  // Font size
  if (clickEvent.target.classList.contains("user__button--16px")) {
    document.body.style.fontSize = "16px";
    localStorage.setItem("fontSize", "16px");
  }

  if (clickEvent.target.classList.contains("user__button--24px")) {
    document.body.style.fontSize = "24px";
    localStorage.setItem("fontSize", "24px");
  }

  if (clickEvent.target.classList.contains("user__button--30px")) {
    document.body.style.fontSize = "30px";
    localStorage.setItem("fontSize", "30px");
  }

  //Line height
  if (clickEvent.target.classList.contains("user__button--11")) {
    document.body.style.lineHeight = "1.1";
    localStorage.setItem("lineHeight", "1.1");
  }

  if (clickEvent.target.classList.contains("user__button--13")) {
    document.body.style.lineHeight = "1.3";
    localStorage.setItem("lineHeight", "1.3");
  }

  if (clickEvent.target.classList.contains("user__button--15")) {
    document.body.style.lineHeight = "1.5";
    localStorage.setItem("lineHeight", "1.5");
  }

  //Font family
  if (clickEvent.target.classList.contains("user__button--sansSerif")) {
    document.body.style.fontFamily = "sans-serif";
    localStorage.setItem("fontFamily", "sans-serif");
  }

  if (clickEvent.target.classList.contains("user__button--mono")) {
    document.body.style.fontFamily = "monospace";
    localStorage.setItem("fontFamily", "monospace");
  }

  if (clickEvent.target.classList.contains("user__button--serif")) {
    document.body.style.fontFamily = "serif";
    localStorage.setItem("fontFamily", "serif");
  }
});

document.body.style.backgroundColor = `${localStorage.getItem(
  "backgroundColor"
)}`;
document.body.style.color = `${localStorage.getItem("color")}`;
document.body.style.fontSize = `${localStorage.getItem("fontSize")}`;
document.body.style.lineHeight = `${localStorage.getItem("lineHeight")}`;
document.body.style.fontFamily = `${localStorage.getItem("fontFamily")}`;
