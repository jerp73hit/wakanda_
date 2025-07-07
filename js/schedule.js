//const activationTime = "2025-07-08T20:00:00";
const activationTime = "2025-07-07T02:39:00";

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const activation = new Date(activationTime);

  const qr = document.getElementById("qr");
  const espera = document.getElementById("espera");

  if (now >= activation) {
    qr.style.display = "block";
    espera.style.display = "none";
  } else {
    qr.style.display = "none";
    espera.style.display = "block";
  }
});
