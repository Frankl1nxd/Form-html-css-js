document.getElementById("registroForm").addEventListener("submit", function(event) {  

  // Obtener valores
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const mensaje = document.getElementById("mensaje");

  // Validaciones
  if (!nombre || !correo || !edad) {
    event.preventDefault();
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    event.preventDefault();
    mensaje.textContent = "Por favor, ingresa un correo válido.";
    mensaje.style.color = "red";
    return;
  }

  const edadNum = parseInt(edad);
  if (isNaN(edadNum) || edadNum < 18 || edadNum > 99) {
    event.preventDefault();
    mensaje.textContent = "La edad debe estar entre 18 y 99 años.";
    mensaje.style.color = "red";
    return;
  }

  // Si todo está bien
  mensaje.className = "mensaje"; // Limpiar clases anteriores

if (!nombre || !correo || !edad) {
  event.preventDefault();
  mensaje.textContent = "Por favor, completa todos los campos.";
  mensaje.classList.add("error");
  return;
}

if (!emailRegex.test(correo)) {
  event.preventDefault();
  mensaje.textContent = "Por favor, ingresa un correo válido.";
  mensaje.classList.add("error");
  return;
}

if (isNaN(edadNum) || edadNum < 18 || edadNum > 99) {
  event.preventDefault();
  mensaje.textContent = "La edad debe estar entre 18 y 99 años.";
  mensaje.classList.add("error");
  return;
}

// Si todo está bien
mensaje.textContent = `Gracias por registrarte, ${nombre}!`;
mensaje.classList.add("exito");


  // Puedes limpiar el formulario si quieres:
  document.getElementById("registroForm").reset();
});