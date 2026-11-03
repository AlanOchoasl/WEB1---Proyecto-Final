const portadas = [
    {
        ruta: "../../assets/img/covers/BurnoutCover.webp",
        alt: "Portada de Burnout: perfil de una persona de cabeza rapada en blanco y negro, con telas blancas difusas y el título en letras manuscritas sobre fondo negro.",
        titulo: "01 - Burnout",
        descripcion: "Género Jazz - portada de álbum completo"
    },
    {
        ruta: "../../assets/img/covers/DeepFeelingsCover.webp",
        alt: "Portada de Deep Feelings: una mujer con abrigo de piel sumergida bajo el agua turquesa, junto al título en letras grandes blancas y grises.",
        titulo: "02 - Deep Feelings",
        descripcion: "Género Rock - portada de EP"
    },
    {
        ruta: "../../assets/img/covers/LifeIsAMovieCover.webp",
        alt: "Portada de Life is a movie: una persona sentada sola en una sala de cine con butacas rojas vacías, bajo el título en letras amarillas.",
        titulo: "03 - Life is a movie",
        descripcion: "Género Dream Pop - portada de canción"
    },
    {
        ruta: "../../assets/img/covers/PostalCover.webp",
        alt: "Portada de Postal, de Nick Verum: un niño de espaldas y cabello rojizo mira un paisaje de campo seco con globos aerostáticos y un arcoíris en el borde.",
        titulo: "04 - Postal",
        descripcion: "Género Dream Pop - portada de álbum completo"  
    },
    {
        ruta: "../../assets/img/covers/StarsCover.webp",
        alt: "Portada de Stars, de Vera Montoya: una mujer de cabello oscuro, maquillaje rojo y cuello alto negro sobre un fondo azul cielo, con el título en rojo arriba.",
        titulo: "05 - Stars",
        descripcion: "Género Rap - portada de EP"
    },
    {
        ruta: "../../assets/img/covers/SummerCover.webp",
        alt: "Portada de Summer: un niño con remera roja salta hacia una pelota de playa entre las olas del mar, con la frase «It would be better if it was always summer».",
        titulo: "06 - Summer",
        descripcion: "Género Pop - portada de canción"
    },
    {
        ruta: "../../assets/img/covers/YWLYMCover.webp",
        alt: "Portada de You will lose your mind: en blanco y negro, una persona sentada en un banco frente a una reja, con la cabeza oculta por la capucha y el título entre comillas.",
        titulo: "07 - You will lose your mind",
        descripcion: "Género Trap - portada de Mixtape"
    }
];

const image = document.querySelector("#current-img");
const informacion = document.querySelector(".info-cover");
const contador = document.querySelector("#covers-count");
const botonAnterior = document.querySelector("#prev");
const botonSiguiente = document.querySelector("#next");

let indice = 0;

function mostrarPortada (){
    const portada = portadas [indice];

    image.src = portada.ruta;
    image.alt = portada.alt;

    informacion.innerHTML = `${portada.titulo}<br>${portada.descripcion}`;
    contador.textContent = indice + 1 + " / " + portadas.length;
}

function siguiente() {
    indice = indice + 1;

    if (indice === portadas.length){
        indice = 0;
    }

    mostrarPortada();
}

function anterior (){
    indice = indice - 1;

    if (indice < 0){
        indice = portadas.length - 1;
    }

    mostrarPortada();
}

botonSiguiente.addEventListener("click", siguiente);
botonAnterior.addEventListener("click", anterior);

mostrarPortada();