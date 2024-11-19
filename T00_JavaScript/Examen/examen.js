// Consola
console.log("Este mensaje sale por consola")
console.log("Mensaje", 2+4)
// Borrar consola
console.clear()
// Prompt
let nombre = prompt("Introduce tu nombre: ")
// Alert
alert("Hola " + nombre)
// Confirm
let mayorEdad = confirm("¿Eres mayor de edad?")
if(mayorEdad){
    alert("Bienvenido a la web")
}else{
    alert("No puedes acceder a la web")
}
// document.write
document.write("Hola " + nombre)
document.write("<h2>" + nombre + "</h2>")

