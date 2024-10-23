function cambia(elemento){
    var boton = elemento.textContent;
    var nombre = document.getElementsByTagName("h3");
    var color;
    if (boton == "Correcto")
        color = "#00FF00";
    else
        color = "#FF0000";

    for(i = 0; i < nombre.length; i++)
        nombre[i].style.color = color;
}