document.addEventListener("keydown", function (e) {
  if (e.key === "PrintScreen") {
    alert("Capturas de pantalla no permitidas.");
    e.preventDefault();
  }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
