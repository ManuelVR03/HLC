var marca = prompt("Introduce la marca del pc: ");
var modelo = prompt("Introduce el modelo: ");
var precio = 1000;
if (marca == "MSI" && modelo == "PRESTIGE") {
    document.write("<h3>Ha recibido un descuento del 5%, su precio es " + (precio*0.95) + "$.</h3>");
}else if (marca == "HP" && modelo == "Pavilion"){
    document.write("<h3>Ha recibido un descuento del 10%, su precio es " + (precio*0.9) + "$.</h3>");
}else
    document.write("<h3>Su precio es " + precio + "$.</h3>");