
document.addEventListener('DOMContentLoaded', function() {
    handleEvents();
    mostrarSilla(); // Asi se ve la sección de la silla al cargar la pagina
});

// Escribo aqui todas las funciones asi luego llamarlas dentro de handleEvents
function handleEvents() {
    let botonAbrir = document.getElementById("boton");
    let botonCerrar = document.getElementById("botonCerrar");
    let contenedorDiapositivas = document.getElementById("contenedorDiapositivas");
    let diapositivas = document.querySelector(".sliderContainer__diapositiva");
    let collectionButton = document.querySelector('.cabecera__link'); // Botón "Collection"
    let furnitureButton = document.querySelector('.subcategoria1'); // Botón "Furniture"

    botonAbrir.addEventListener("click", handleToggle);
    botonCerrar.addEventListener("click", handleToggle);

    let botonDelante = document.getElementById("flechaDelante");
    let botonAtras = document.getElementById("flechaAtras");

    botonDelante.addEventListener("click", mostrarMesa);
    botonAtras.addEventListener("click", mostrarSilla);

    // evento clicar en el botón collection
    collectionButton.addEventListener('click', function(event) {
        event.preventDefault();
        toggleExpanded(document.getElementById('dropdownCollection'));
    });

    // evento clicar en el botón collection furniture
    furnitureButton.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarImagenSofa();
    });
}

function toggleExpanded(element) {
    element.classList.toggle('expanded');
}

function handleToggle() {
    let contenedor = document.getElementById("contenedorHeader");
    contenedor.classList.toggle('expanded');
}

function mostrarSilla() {
    const silla = document.querySelector('.seccion_detallesSilla');
    const mesa = document.querySelector('.seccion_detallesMesa');

    if (mesa.classList.contains('active')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        silla.classList.add('active');
        mesa.classList.remove('active');
        silla.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(function() {
        silla.classList.add('active');
    }, 500);
}

function mostrarMesa() {
    const silla = document.querySelector('.seccion_detallesSilla');
    const mesa = document.querySelector('.seccion_detallesMesa');

    silla.classList.remove('active');
    mesa.classList.add('active');

    mesa.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function mostrarImagenSofa() {
    const imagenSofa = document.querySelector('.Imagen__sofa');
    imagenSofa.style.display = 'block';
}
