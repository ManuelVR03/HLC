/*
Crea una función para la creación de correos electrónicos corporativos. Los correos deberán
tener las siguientes condiciones:
- Correo electrónico: dos primeras letras del nombre, seguido de su primer apellido
completo y los dos últimos dígitos de su año de nacimiento. Junto con el dominio de la
empresa que es @emp.es.
- Contraseña: las 3 primeras letras del nombre en mayúscula, más la primera letra del
apellido, más la longitud del nombre seguido de un guion bajo y el último carácter de su
apellido.
Muestre además un ejemplo solicitando al usuario la información necesaria.
Por ejemplo: Jesús Doña, 1984.
Correo: jedona84@emp.es
Contraseña: JESd5_a
*/
/*ejelsisio 2
var cadena = prompt("Introduce nombre, apellido y año", "Jesús Doña, 1984").replace(",", "");
let array = cadena.split(" ");
var nombre = array[0].toLowerCase().replaceAll("ñ", "n").replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u");
var apellido = array[1].toLowerCase().replaceAll("ñ", "n").replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u");
var anio = array[2]
if(!isNaN(anio)){
var correo = nombre.substring(0, 2) + apellido + anio.substring(2, anio.length) + "@emp.es"
console.log(correo)
var pass = nombre.toUpperCase().substring(0,3)+apellido.substring(0,1)+nombre.length+"_"+apellido.charAt(apellido.length-1)

document.write("<h2>Su correo es:"+correo+"</h2>");
document.write("<h2>Contraseña:"+pass+"</h2>");
}else{
alert("Debe introducir un valor numérico en año")
}*/

//ejelsisio 3
/*
3.1. Muestra por consola el título, tal y como está y todo en mayúsculas.
3.2. Cambia el nombre a los input, indicando tu nombre y tu primer apellido.
3.3. Añade un texto a la etiqueta <p> saludando. Por ejemplo: Hola Maria Millán.
3.4. Añade una etiqueta <p> justo debajo de la etiqueta de id saludo con el texto ¿Qué
tal estás?
3.5. Cambia el texto del label apellido a ‘Apellidos:’ (haciendo uso de
querySelector()).
*/
/*
var titulo=document.getElementsByTagName("title")[0].textContent.toUpperCase()
console.log(titulo)

var inputs=document.getElementsByTagName("input")
inputs[0].placeholder="Lucia"
inputs[1].placeholder="Villar"

var parrafoSaludo = document.getElementById("saludo")
parrafoSaludo.textContent="Hola Verdejo";

//var body=document.getElementsByTagName("body")[0]
var parrafo = document.createElement("p")
parrafo.textContent = "¿Qué tal estás?"
parrafoSaludo.parentNode.appendChild(parrafo)
//body.appendChild(parrafo)

var labelApe = document.querySelectorAll("label")
labelApe[1].textContent = "Apellidos:"
*/

/*
Crea una lista de 3 elementos, cuando se clique sobre ellos (onclick=) se mostrará la
dirección de la web (href) en un input.
*/
/*
var lista = document.createElement("ul")
var input = document.createElement("input")
input.type = "text"

let enlaces = ["www.google.es", "www.marca.com", "www.iesjulioverne.es"]
var body = document.getElementsByTagName("body")[0]
body.appendChild(lista)
body.appendChild(input)

for(let i = 0; i<3; i++){
    var elemento = document.createElement("li")
    var enlace = document.createElement("a")
    enlace.href ="#"
    enlace.textContent = enlaces[i].substring(enlaces[i].indexOf(".")+1, enlaces[i].lastIndexOf("."))
    enlace.onclick =
    function() {
        input.placeholder = enlaces[i]
    }
    elemento.appendChild(enlace)
    lista.appendChild(elemento)
}*/

/*
Crea un HTML con dos etiquetas que indiquen tu nombre y apellidos junto con dos botones.
- Un botón Correcto que cuando se hace onclick cambia el color de las etiquetas a verde.
- Un botón Incorrecto que cuando se hace onclick cambia el color de las etiquetas a rojo.
*/

