/*5. Crea un HTML con dos etiquetas que indiquen tu nombre y apellidos junto con dos botones.
- Un botón Correcto que cuando se hace onclick cambia el color de las etiquetas a verde.
- Un botón Incorrecto que cuando se hace onclick cambia el color de las etiquetas a rojo*/


function cambia(elemento){
    var boton = elemento.textContent;
    var nombre = document.getElementsByTagName("h3");
    var color;
    if (boton == "Correcto")
        color = "#FF0000";
    else
        color = "#00FF00";

    for(i = 0; i < nombre.length; i++)
        nombre[i].style.color = color;
}