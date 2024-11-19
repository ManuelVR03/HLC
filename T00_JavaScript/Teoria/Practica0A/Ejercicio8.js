var dollars = 30;
var apuesta = 0;
var dado = 0;
var dadoUsuario = 0;

while (dollars > 0 && dollars < 120) {
    apuesta = parseInt(prompt("Introduce tu apuesta, tienes " + dollars + "€. "));
    while (apuesta > dollars || dollars - apuesta < 0) {
        apuesta = parseInt(prompt("Introduce tu apuesta, tienes " + dollars + "€. "));
    }
    dadoUsuario = parseInt(prompt("Introduce un número del 1 al 6: "));
    while (dadoUsuario < 1 || dadoUsuario > 6) {
        dadoUsuario = parseInt(prompt("Introduce un número del 1 al 6: "));
    }
    dado = parseInt(Math.random() * 6) + 1;
    alert("Ha salido '" + dado + "'.");
    if (dado === dadoUsuario)
        dollars += apuesta+10;
    else
        dollars -= apuesta;
}
if (dollars == 0){
    document.body.innerHTML = "<h1>Échale gasolina al coche y date una vuelta.</h1>";
}else
    document.body.innerHTML = "<h1>¡Eres un fenómeno!!!</h1>";
