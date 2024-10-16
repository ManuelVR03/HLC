/*
8. Modificando el ejercicio anterior. Tendremos dos Arrays: ciudades_gratis (Sevilla, Madrid,
Valencia, Barcelona) y ciudades_gastos(Cantabria, Pontevedra, Toledo, Segovia).
Se añade las siguientes condiciones:
- Si la ciudad que indica el usuario está en el array ciudades_gastos se preguntará por los
gastos de envío, y se añade a la etiqueta junto a la fecha.
- Si la ciudad que indica el usuario está en el array ciudades_gratis se añadirá a la etiqueta
un mensaje diciendo que los gastos son gratuitos y se añade la fecha.
- Si la ciudad no se encuentra en ninguno de los arrays, se añadirá un mensaje a la
etiqueta diciendo que no se pueden realizar envíos y se oculta la etiqueta de la fecha de
envío.
*/
var ciudades_gratis = ["Sevilla", "Madrid", "Valencia", "Barcelona"];
var ciudades_gastos = ["Cantabria", "Pontevedra", "Toledo", "Segovia"];

window.onload = function (){
    var ciudad = prompt("Introduce una ciudad: ");


    document.getElementById("ciudad").textContent = prompt("Introduce una ciudad: ");
    document.getElementById("gastos").textContent = prompt("Introduce los gastos de envio: ") + "€";
    document.getElementById("fecha").textContent = prompt("Introduce la fecha de hoy: ");
}