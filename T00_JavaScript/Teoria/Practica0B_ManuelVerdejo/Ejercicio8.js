var ciudades_gratis = ["Sevilla", "Madrid", "Valencia", "Barcelona"];
var ciudades_gastos = ["Cantabria", "Pontevedra", "Toledo", "Segovia"];
var usuario = prompt("Introduce una ciudad: ").toLocaleLowerCase();
var ciudad = usuario.charAt(0).toLocaleUpperCase() + usuario.slice(1);
var spciudad = document.getElementById("ciudad");
var spgastos = document.getElementById("gastos");
var spfecha = document.getElementById("fecha");
var fecha = new Date();

function cambio() {
    spciudad.textContent = ciudad;
    if (ciudades_gastos.includes(ciudad)) {
        spgastos.textContent = prompt("Introduce el precio de los gastos de envíos: ") + "€";
        spfecha.textContent = fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    } else if (ciudades_gratis.includes(ciudad)) {
        spgastos.textContent = "Los gastos son gratuitos"
        spfecha.textContent = fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    } else {
        spgastos.textContent = "No se puede realizar envíos"
        document.getElementsByTagName("h1")[0].style.display = "none";
    }
}

cambio();
