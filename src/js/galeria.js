document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (i = 1; i<= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //Funcion para mostrar imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI')
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt (e.target.dataset.imagenId)

    //Generar la imagen
    const imagen = document.createElement('IMG')
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P')
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    cerrarImagen.onclick = function() { //al hacer click
        overlay.remove();
    }

    //Cerrar imagen con un click en cualquier lado
    overlay.onclick = function() {
        overlay.remove();
    }

    overlay.appendChild(cerrarImagen)

    //Mostrar en HTML
    const body = document.querySelector('body')
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}