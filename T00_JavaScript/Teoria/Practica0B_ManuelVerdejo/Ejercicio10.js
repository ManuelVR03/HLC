/*10. Reutiliza el primer párrafo del HTML del ejercicio anterior de la práctica anterior. Tendremos
por tanto un HTML con un párrafo, junto con dos etiquetas que tendrán un onclick:
1ª etiqueta: Aumentar letra.
2ª etiqueta: Disminuir letra.
Se creará una función para cada una de las etiquetas donde se aumentará en uno o disminuirá
en uno el tamaño de la letra según dónde pulse el usuario.*/

var parrafo = document.getElementsByTagName("p")[0];

function Aumentar(){
    let fontSize = parseInt(window.getComputedStyle(parrafo).fontSize);
    parrafo.style.fontSize = (fontSize + 1) + "px";
}

function Disminuir(){
    let fontSize = parseInt(window.getComputedStyle(parrafo).fontSize);
    parrafo.style.fontSize = (fontSize - 1) + "px";
}