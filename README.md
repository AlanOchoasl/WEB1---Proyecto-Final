ElSE WHERE - Portofolio de portadas musicales y más.

Sitio web desarrollado como proyecto final de la materia WEB 1 para la Universidad Nacional de la Punta.
Que sirve para exponer mis trabajos como diseñador freelancer de portadas musicales y más complementos como posters, diseño de branding, etc. Que se va a agregar a futuro.

El sitio web cuenta con cuatro páginas estáticas que pueden recorrerse mediante el nav en cada una de ellas y puedes encontrar secciones como:

    - Inicio('index.html'): Título del sitio, menú de navegación y presentación.
    - SONG COVERS ('pages/portadas/covers.html'): Carrusel de portadas con título, género y descripción.
    - README ('pages/readme/readme.html`'): Con la información acerca del sitio web.
    - CONTACT ME ('pages/contacto/contact.html'): Con un formulario para que puedas contratar mis servicios en caso de que te hayan llamado la atención.

Carrusel de portadas

- Los datos de cada portada viven en un array de objetos (ruta, alt, título, descripción) en assets/js/covers.js.
- Navegación circular infinita: desde la última portada se vuelve a la primera.
- Contador de posición (1 / 7) y descripción actualizada en cada cambio.
- Accesible: role="group", aria-roledescription="carrusel", aria-label en los botones, aria-live="polite" en la información y alt descriptivo por imagen.

Formulario de contacto

- Validación propia en JavaScript, sin librerías y con novalidate.
- Valida al salir del campo (blur) y en tiempo real mientras se escribe
  (input), solo después de haber visitado el campo.
- Reglas: nombre y teléfono obligatorios, apellido opcional, email con formato
  válido y descripción de 10 a 250 caracteres.
- Los errores se crean con createElement, se muestran junto al campo y se
  vinculan con aria-invalid y aria-describedby; el foco salta al primer
  campo inválido.
- Al enviar correctamente se muestra un resumen de los datos y se limpia el
  formulario.

General

- HTML5 semántico (header, nav, main, section, footer) y un único h1
  por página.
- Diseño responsive con Flexbox, Grid y clamp(); sin scroll horizontal en
  móvil.
- Paleta y tipografías centralizadas en variables CSS (:root).
- Navegación con rutas relativas, por lo que funciona tanto en local como en
  GitHub Pages.
- Favicon SVG propio.

Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, media queries, variables, clamp())
- JavaScript (ES6: const, Set, template literals)
- Google Fonts: Anton y Google Sans
- Git y GitHub Pages

Notas

- El formulario no envía datos a un servidor: la validación y el resumen se
  resuelven en el navegador.
- Las fuentes se cargan desde Google Fonts, así que se necesita conexión a
  internet para ver la tipografía definitiva.

Autor
Alan Ochoa — Diseño de portadas y arte visual
GitHub (https://github.com/AlanOchoasl)
Link de pages : https://alanochoasl.github.io/WEB1---Proyecto-Final/
