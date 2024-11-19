var nombres = prompt("Introduce una lista de nombres separada por ,");
var lista = nombres.split(",").map(nombres => nombres.trim());
document.body.innerHTML = "";

for(l in lista){
    document.body.innerHTML += "Buenas " + lista[l] + ".</br>";
}