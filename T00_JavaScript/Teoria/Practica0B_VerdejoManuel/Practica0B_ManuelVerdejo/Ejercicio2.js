var nombre = prompt("Introduce tu nombre: ").replaceAll("ñ", "n").replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u");
var apellido = prompt("Introduce el primer apellido: ").replaceAll("ñ", "n").replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u");
var anio = prompt("Introduce el año de nacimiento: ");

function crearCorreo () {
     let correo = nombre.toLocaleLowerCase().charAt(0) + nombre.toLocaleLowerCase().charAt(1) + apellido.toLocaleLowerCase() + anio.charAt(2) + anio.charAt(3) + "@emp.es";
     let pass = nombre.toLocaleUpperCase().charAt(0) + nombre.toLocaleUpperCase().charAt(1) + nombre.toLocaleUpperCase().charAt(2) + apellido.toLocaleLowerCase().charAt(0) + nombre.length + "_" + apellido.toLocaleLowerCase().charAt(apellido.length-1);
     let pCorreo = document.getElementById("correo");
     pCorreo.textContent = "Correo: " + correo;
     let pPass = document.getElementById("pass");
     pPass.textContent = "Contraseña: " + pass; 
}

crearCorreo();