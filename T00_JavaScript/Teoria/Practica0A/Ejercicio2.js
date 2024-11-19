var cadena = prompt("Introduce una cadena: ");
var pos = parseInt(prompt("Introduce un número del 0 al " + (cadena.length - 1) + ": "));
while(pos < 0 || pos > cadena.length-1){
    pos = parseInt(prompt("Introduce un número del 0 al " + (cadena.length - 1) + ": "));
}
alert("En la posición " + pos + " de la cadena '" + cadena + "' se encuentra el carácter '" + cadena.charAt(pos) + "'.");