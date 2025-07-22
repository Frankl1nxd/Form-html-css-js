// Aqui estamos trayendo el id del formulario, luego pidiendo que cuando alguien envie el formulario, ejecute la funcion.
document.getElementById("registroForm").addEventListener("submit", function(event) {
  // Obtener valores y elementos
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const mensaje = document.getElementById("mensaje");

  
  // Limpiar mensajes y clases anteriores
  mensaje.textContent = "";
  mensaje.className = "";

  // Expresión regular para validar correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  //parseInt() convierte ese texto (string) a un número entero.
  const edadNum = parseInt(edad);

  // Validaciones. Está validando que todos los campos estén llenos antes de permitir que el formulario se envíe.
  //El símbolo ! significa "no" o "está vacío/falso". El operador || significa "o".

  // Validaciones
  if (!nombre || !correo || !edad) {
    event.preventDefault(); //Esto detiene el envío del formulario, para que no se vaya a FormSubmit ni recargue la página.
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.classList.add("error");
    return; //Esto termina la función en ese punto, así que no se sigue ejecutando el resto del código.
  }

  if (!emailRegex.test(correo)) {
    event.preventDefault();
    mensaje.textContent = "Por favor, ingresa un correo válido.";
    mensaje.classList.add("error");
    return;
  }

  // isNaN recibe un valor y te dice si ese valor NO es un número válido.
  if (isNaN(edadNum) || edadNum < 18 || edadNum > 99) {
    event.preventDefault();
    mensaje.textContent = "La edad debe estar entre 18 y 99 años.";
    mensaje.classList.add("error");
    return;
  }

  // Si todo está bien, mostrar mensaje de éxito
  mensaje.textContent = `Gracias por registrarte, ${nombre}!`;
  mensaje.classList.add("exito");

  // Limpiar formulario
  document.getElementById("registroForm").reset();
});
