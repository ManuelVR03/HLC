var cont = 0;
var parrafos = document.getElementsByTagName("p");
function Mostrar(elemento) {
    if (cont == 0) {
        elemento.textContent = '"Mostrar menos ..."';
        parrafos[1].textContent = "Anteriormente, las páginas web eran estáticas, similares a las páginas de un libro. Una página estática mostraba principalmente información en un diseño fijo y no todo aquello que esperamos de un sitio web moderno. JavaScript surgió como una tecnología del lado del navegador para hacer que las aplicaciones web fueran más dinámicas. Por medio de JavaScript, los navegadores eran capaces de responder a la interacción de los usuarios y cambiar la distribución del contenido en la página web.";
        parrafos[2].textContent = "A medida que el lenguaje evolucionó, los desarrolladores de JavaScript establecieron bibliotecas, marcos y prácticas de programación y comenzaron a utilizarlo fuera de los navegadores web. En la actualidad, puede utilizar JavaScript para el desarrollo tanto del lado del cliente como del lado del servidor. En las siguientes subsecciones se presentan algunos casos de uso comunes:";
        cont++;
    } else {
        elemento.textContent = '"Mostrar más ..."';
        parrafos[1].textContent = "";
        parrafos[2].textContent = "";
        cont--;
    }

}