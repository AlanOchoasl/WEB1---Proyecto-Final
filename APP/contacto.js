
function validarUsuario() {
    const usuario = document.querySelector("#nombre");
    const alertaNombre = document.querySelector("#error-name");
    const valor = usuario.value.trim();

    if (valor === '' || valor.length < 3 || valor.length > 100){
        alertaNombre.style.display = "block";
        return false;
    }else {
        alertaNombre.style.display = "none";
        return true;
    }
}

function validarTelefono (){
    const telefono = document.querySelector("#telefono");
    const alertaTelefono = document.querySelector("#error-phone");
    const valor = telefono.value.trim();
    const patron = /^(\d{10}|0\d{10}|\+549\d{10})$/;

    if (valor === "" || !patron.test(valor)){
        alertaTelefono.style.display = "block";
        return false;
    }else {
        alertaTelefono.style.display = "none"
        return true;
    }
}

function validarMail (){
    const correo = document.querySelector("#email");
    const alertaEmail = document.querySelector("#error-email");
    const valor = correo.value.trim();
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (valor === '' || !patron.test(valor) || (valor.length > 254)){
        alertaEmail.style.display = "block";
        return false;
    }else {
        alertaEmail.style.display = 'none';
        return true;
    }
}

function validarDesc (){
    const descripcion = document.querySelector("#descripcion");
    const alertaDescripcion = document.querySelector("#error-text-area");
    const valor = descripcion.value.trim();

    if (valor === '' || valor.length > 250){
        alertaDescripcion.style.display = "block";
        return false;
    }else {
        alertaDescripcion.style.display = "none";
        return true;
    }
}

const formulario = document.querySelector("#form")

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const usuarioValido = validarUsuario();
    const mailValido = validarMail();
    const descripcionValida = validarDesc();
    const telefonoValido = validarTelefono();

    if (usuarioValido && mailValido && descripcionValida && telefonoValido){
        mostrarResumen();
        formulario.reset();
    }
})

function mostrarResumen (){
    const usuario = document.querySelector ("#nombre");
    const telefono = document.querySelector ("#telefono");
    const correo = document.querySelector ("#email");
    const descripcion = document.querySelector ("#descripcion");

    const resumen = document.querySelector ("#resume");

    resumen.innerHTML = "";

    const elementoNombre = document.createElement("p");
    const elementoTelefono = document.createElement("p");
    const elementoMail = document.createElement("p");
    const elementoDescripcion = document.createElement("p");

    elementoNombre.textContent = "Nombre: " + usuario.value;
    elementoTelefono.textContent = "Telefono: " + telefono.value;
    elementoMail.textContent = "Correo: " + correo.value;
    elementoDescripcion.textContent = "Descripcion: " + descripcion.value;

    resumen.appendChild(elementoNombre);
    resumen.appendChild(elementoTelefono);
    resumen.appendChild(elementoMail);
    resumen.appendChild(elementoDescripcion);
    
}