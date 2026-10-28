const carrousel = document.querySelector(".carrousel");
const botonAnterior = document.querySelector("#prev");
const botonSiguiente = document.querySelector("#next");
const presionado = document.querySelector(".carrousel");

const portadasOriginales = Array.from(carrousel.querySelectorAll(".cover"));
const total = portadasOriginales.length;

function obtenerDesplazamiento() {
    const portada = carrousel.querySelector(".cover");
    const espacio = parseFloat(getComputedStyle(carrousel).gap) || 0;
    return portada.offsetWidth + espacio;
}

const visibles = Math.ceil(carrousel.clientWidth / obtenerDesplazamiento()) + 1;

for (let i = 1; i <= visibles; i++) {
    const indice = (((total - i) % total) + total) % total;
    carrousel.insertBefore(
        portadasOriginales[indice].cloneNode(true),
        carrousel.firstElementChild
    );
}

for (let i = 0; i < visibles; i++) {
    carrousel.appendChild(portadasOriginales[i % total].cloneNode(true));
}

function reajustar() {
    const paso = obtenerDesplazamiento();
    const inicio = visibles * paso;
    const fin = (visibles + total) * paso;

    if (carrousel.scrollLeft < inicio - 1) {
        carrousel.scrollLeft += total * paso;
    } else if (carrousel.scrollLeft >= fin - 1) {
        carrousel.scrollLeft -= total * paso;
    }
}

window.addEventListener("load", function () {
    carrousel.scrollLeft = visibles * obtenerDesplazamiento();
});

botonSiguiente.addEventListener("click", function () {
    carrousel.scrollBy({ left: obtenerDesplazamiento(), behavior: "smooth" });
});

botonAnterior.addEventListener("click", function () {
    carrousel.scrollBy({ left: -obtenerDesplazamiento(), behavior: "smooth" });
});

let temporizador;
carrousel.addEventListener("scroll", function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(reajustar, 100);
});

presionado?.addEventListener ('click', function(event){
    const element = event.target
    
    if (element.classList.contains('unpressed-button')){
        document.querySelectorAll('.pressed').forEach(function(imagen){
            imagen.classList.remove('pressed')
        })
        element.classList.add('pressed')
    }
})