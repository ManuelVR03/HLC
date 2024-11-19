var nombres = prompt("Introduce una lista de nombres separada por ,");
var lista = nombres.split(",").map(nombres => nombres.trim());
document.body.innerHTML = "";

for(l in lista){
    document.body.innerHTML += "Buenas " + lista[l] + ".</br>";
}

document.body.innerHTML += "En total hay " + lista.length + ".</br>";
document.body.innerHTML += "La primera persona de la lista es: " + lista[0] + ".</br>";
document.body.innerHTML += "La última persona de la lista es: " + lista[lista.length-1] + ".</br>";

console.log("Lista ordenada de la A-Z: " + lista.sort());
console.log("Lista ordenada de la Z-A: " + lista.sort().reverse());
