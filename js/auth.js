const clientPasswords = {
  cliente1: "1234",
  cliente2: "2345",
  cliente3: "3456",
  cliente4: "4567",
  cliente5: "5678",
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const cliente = document.getElementById("cliente").value;
    const pass = document.getElementById("pass").value;

    if (clientPasswords[cliente] === pass) {
      window.location.href = `clientes/${cliente}.html`;
    } else {
      mensaje.textContent = "Contraseña incorrecta.";
    }
  });
});
