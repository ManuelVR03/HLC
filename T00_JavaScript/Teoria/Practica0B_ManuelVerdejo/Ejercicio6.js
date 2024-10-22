window.onload = function (){
    var fecha = new Date();
    document.getElementById("ciudad").textContent = "Sevilla";
    document.getElementById("gastos").textContent = "3€";
    document.getElementById("fecha").textContent = "" + fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
}