const activationTime = "2025-07-07T03:32:00";

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const activation = new Date(activationTime);

  const contenedor = document.getElementById("contenedorQR");
  const espera = document.getElementById("espera");

  if (now >= activation) {
    if (espera) espera.style.display = "none";
    const clave = prompt("Ingresa tu código de acceso:");
    if (clave) {
      desencriptarImagen("../qrs/chart.enc", clave);
    }
  } else {
    if (espera) espera.style.display = "block";
  }
});
