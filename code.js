function showAlert() {
    alert("Hola, has hecho clic en el botón!");
}
function mostrarMensaje() {
    let nombre = prompt("Por favor, introduce tu nombre:");
    alert("¡Bienvenido/a, " + nombre + "!");
}
function mostrarMensaje() {
    const nameInput = document.getElementById("name");
    const welcomeMessage = document.getElementById("welcome-message");
    const name = nameInput.value;
  
    if (name.trim() === "") {
      welcomeMessage.textContent = "Por favor, ingresa tu nombre";
    } else {
      welcomeMessage.textContent = `¡Bienvenido, ${name}!`;
    }
}
function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}
function generarTabla() {
    // Obtener el número ingresado por el usuario
    const numberInput = document.getElementById("number");
    const number = parseInt(numberInput.value);
  
    // Obtener el elemento de la tabla
    const table = document.getElementById("multiplication-table");
  
    // Limpiar la tabla existente
    table.innerHTML = "";
  
    // Generar los elementos de la tabla utilizando estructuras de control
    for (let i = 1; i <= 10; i++) {
      const result = number * i;
  
      const row = document.createElement("tr");
      const cell1 = document.createElement("td");
      const cell2 = document.createElement("td");
  
      cell1.textContent = `${number} x ${i}`;
      cell2.textContent = result;
  
      row.appendChild(cell1);
      row.appendChild(cell2);
  
      table.appendChild(row);
    }
}
// Obtener el elemento del contador
const counterElement = document.getElementById("counter");
let clickCount = 0;

// Función para incrementar el contador de clics
function incrementarContador() {
  clickCount++;
  counterElement.textContent = clickCount;
}

// Función para reiniciar el contador de clics
function reiniciarContador() {
  clickCount = 0;
  counterElement.textContent = clickCount;
}
function verificarContraseña() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
  
    const passwordMessage = document.getElementById("password-message");
  
    if (password === "secreto") {
      passwordMessage.textContent = "Contraseña correcta";
      passwordMessage.classList.remove("error");
      passwordMessage.classList.add("success");
    } else {
      passwordMessage.textContent = "Contraseña incorrecta";
      passwordMessage.classList.remove("success");
      passwordMessage.classList.add("error");
    }
}
// Obtener el formulario y los campos de entrada
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Obtener los elementos para mostrar mensajes de error y éxito
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

// Validar el formulario al enviarlo
form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (validarFormulario()) {
    mostrarMensajeExito();
  }
});

// Validar el formulario
function validarFormulario() {
  let isValid = true;
  
  // Validar el campo de nombre
  if (nameInput.value === "") {
    mostrarError(nameError, "Por favor, ingrese su nombre.");
    isValid = false;
  } else {
    mostrarError(nameError, "");
  }

  // Validar el campo de correo electrónico
  if (emailInput.value === "") {
    mostrarError(emailError, "Por favor, ingrese su correo electrónico.");
    isValid = false;
  } else if (!validarCorreoElectronico(emailInput.value)) {
    mostrarError(emailError, "Por favor, ingrese un correo electrónico válido.");
    isValid = false;
  } else {
    mostrarError(emailError, "");
  }

  return isValid;
}

// Validar el formato del correo electrónico utilizando una expresión regular simple
function validarCorreoElectronico(correo) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(correo);
}

// Mostrar un mensaje de error debajo del campo de entrada correspondiente
function mostrarError(elemento, mensaje) {
  elemento.textContent = mensaje;
}

// Mostrar un mensaje de éxito cuando el formulario se envía correctamente
function mostrarMensajeExito() {
  form.reset();
  successMessage.textContent = "El formulario se ha enviado correctamente.";
}