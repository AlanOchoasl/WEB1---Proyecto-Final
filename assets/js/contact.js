const formulario = document.querySelector("#form");

const campos = [
  document.querySelector("#nombre"),
  document.querySelector("#apellido"),
  document.querySelector("#telefono"),
  document.querySelector("#email"),
  document.querySelector("#descripcion")
];

const camposVisitados = new Set ();

function validarCampo(campo) {
  const valor = campo.value.trim();

  switch (campo.id) {
    case "nombre":
      if (valor === "") return "El nombre es obligatorio.";
      if (valor.length < 2) return "Ingresá al menos 2 caracteres.";
      if (valor.length > 60) return "Máximo 60 caracteres.";
      break;

    case "apellido":
      if (valor === "") return "";

      if (valor.length < 2) return "Ingresá al menos 2 caracteres.";
      if (valor.length > 60) return "Máximo 60 caracteres.";
      break;

    case "telefono": {
      if (valor === "") return "El teléfono es obligatorio.";

      const telefonoNormalizado = valor.replace(/[\s().-]/g, "");
      const patron = /^(\d{10}|0\d{10}|\+549\d{10})$/;

      if (!patron.test(telefonoNormalizado)) {
        return "Ingresá un teléfono válido.";
      }
      break;
    }

    case "email": {
      if (valor === "") return "El email es obligatorio.";

      const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (valor.length > 254 || !patron.test(valor)) {
        return "Ingresá un correo electrónico válido.";
      }
      break;
    }

    case "descripcion":
      if (valor === "") return "La descripción es obligatoria.";
      if (valor.length < 10) return "Ingresá al menos 10 caracteres.";
      if (valor.length > 250) return "Máximo 250 caracteres.";
      break;
  }

  return "";
}

//mensajes de error de los campos

function mostrarError(campo, mensaje) {
  limpiarError(campo);

  const error = document.createElement("p");

  error.id = `${campo.id}-error`;
  error.classList.add("error-message");
  error.textContent = mensaje;

  campo.insertAdjacentElement("afterend", error);

  campo.classList.add("input-error");
  campo.setAttribute("aria-invalid", "true");
  campo.setAttribute("aria-describedby", error.id);
}

// funcion para eliminar el error

function limpiarError(campo) {
  const error = document.querySelector(`#${campo.id}-error`);

  if (error) {
    error.remove();
  }

  campo.classList.remove("input-error");
  campo.removeAttribute("aria-invalid");
  campo.removeAttribute("aria-describedby");
}

//validacion

function controlarCampo(campo) {
  const mensaje = validarCampo(campo);

  if (mensaje !== "") {
    mostrarError(campo, mensaje);
    return false;
  }

  limpiarError(campo);
  return true;
}

campos.forEach(campo => {
  campo.addEventListener("blur", () => {
    camposVisitados.add(campo);
    controlarCampo(campo);
  });

  campo.addEventListener("input", () => {
    if (camposVisitados.has(campo)) {
      controlarCampo(campo);
    }
  });
});

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  let formularioValido = true;
  let primerCampoInvalido = null;

  campos.forEach(campo => {
    camposVisitados.add(campo);

    const valido = controlarCampo(campo);

    if (!valido) {
      formularioValido = false;

      if (primerCampoInvalido === null) {
        primerCampoInvalido = campo;
      }
    }
  });

  if (!formularioValido) {
    primerCampoInvalido.focus();
    return;
  }

  mostrarResumen();
  formulario.reset();

  campos.forEach(campo => {
    limpiarError(campo);
  });

  camposVisitados.clear();
});

// resumen luego de enviar los datos

function mostrarResumen() {
  const usuario = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const telefono = document.querySelector("#telefono");
  const correo = document.querySelector("#email");
  const descripcion = document.querySelector("#descripcion");

  const resumen = document.querySelector("#resume");

  resumen.innerHTML = "";

  const datos = [
    "Nombre: " + usuario.value,
    "Apellido: " + apellido.value,
    "Teléfono: " + telefono.value,
    "Correo: " + correo.value,
    "Descripción: " + descripcion.value
  ];

  datos.forEach(dato => {
    const elemento = document.createElement("p");
    elemento.textContent = dato;
    resumen.appendChild(elemento);
  });
}