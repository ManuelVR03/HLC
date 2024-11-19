var num1 = parseFloat(prompt("Introduce un número: "));
var num2 = parseFloat(prompt("Introduce otro número: "));
var mensaje;
if (num2 === 0)
    mensaje = "No se puede dividir por 0";
else
    mensaje = "La división es: " + (num1/num2).toFixed(2);
alert("La suma es: " + (num1 + num2) + ".\nLa resta es: " + (num1-num2) + ".\nLa multiplicación es: " + (num1*num2) + ".\n" + mensaje + ".");