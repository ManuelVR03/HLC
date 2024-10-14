/*
3.1. Muestra por consola el título, tal y como está y todo en mayúsculas.
3.2. Cambia el nombre a los input, indicando tu nombre y tu primer apellido.
3.3. Añade un texto a la etiqueta <p> saludando. Por ejemplo: Hola Maria Millán.
3.4. Añade una etiqueta <p> justo debajo de la etiqueta de id saludo con el texto ¿Qué
tal estás?
3.5. Cambia el texto del label apellido a ‘Apellidos:’ (haciendo uso de
querySelector()).
*/

console.log(document.getElementsByTagName("title")[0].textContent.toLocaleUpperCase());
var inputNombre = document.getElementById("nombre");
var inputApellido = document.getElementById("apellido");
inputNombre.setAttribute("name");
inputNombre.name = "Manuel";