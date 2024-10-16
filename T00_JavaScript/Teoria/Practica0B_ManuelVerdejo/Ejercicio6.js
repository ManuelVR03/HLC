/*
Crea una función que cuando la página esté cargada (puede hacer uso de window.onload):
- Cambie el valor de la ciudad a Sevilla.
- Los gastos de envío cambien su valor a 3€.
- La fecha de envío sea el día actual (haz uso de las funciones de fecha).
*/

window.onload = function (){
    var fecha = new Date();
    document.getElementById("ciudad").textContent = "Sevilla";
    document.getElementById("gastos").textContent = "3€";
    document.getElementById("fecha").textContent = "" + fecha.getDate();

}