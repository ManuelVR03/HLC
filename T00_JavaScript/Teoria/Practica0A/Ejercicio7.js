var adivina = prompt("¿Quién pintó las Meninas? ");
var cont = 0;
while(adivina != "Velázquez" && cont < 2){
    adivina = prompt("¿Quién pintó las Meninas? ");
    cont++;
}
if(cont < 2){
    alert("Correcto! Ha acertado.");
}else
    alert("Lo siento! La respuesta correcta es Velázquez");