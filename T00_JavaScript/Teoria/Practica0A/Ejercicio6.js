var num = parseInt(prompt("Introduce un numero del 1 al 6"));
while(num < 1 || num > 6){
    num = parseInt(prompt("Introduce un numero del 1 al 6"));
}
for(let i = 1; i <= num; i++){
    let encabezado = document.createElement(`h${i}`);
    encabezado.textContent = `Encabezado de nivel ${i}`;
    document.body.appendChild(encabezado);
}