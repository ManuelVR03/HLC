/*12. Basándonos en el ejercicio anterior, añadiremos cada vez que se crea un nuevo producto, dos
botones junto a este.
- Botón SÍ (significa comprado): cuando se clique sobre él, el nombre del producto será
marcado verde y en cursiva.
- Botón NO (significa no comprado): cuando se clique sobre él, el nombre del producto
será marcado como rojo y en negrita.*/

function comprado(boton){
    boton.parentNode.style.color = "green";
    boton.parentNode.style.fontStyle = "italic";
    boton.parentNode.style.fontWeight = "normal";
}

function noComprado(boton){
    boton.parentNode.style.color = "red";
    boton.parentNode.style.fontWeight = "bold";
    boton.parentNode.style.fontStyle = "normal";
}

function nuevoProducto(){
    let lista = document.getElementsByTagName("ul")[0];
    let producto = document.createElement("li");
    producto.textContent = prompt("Introduce un producto: ");
    lista.appendChild(producto);
    let boton1 = document.createElement("button");
    boton1.type = "button";
    boton1.onclick = function () {comprado(this)};
    boton1.style.marginLeft = "10px"
    boton1.textContent = "SÍ";
    let boton2 = document.createElement("button");
    boton2.type = "button";
    boton2.onclick = function () {noComprado(this)};
    boton2.style.marginLeft = "10px"
    boton2.textContent = "NO";
    producto.appendChild(boton1);
    producto.appendChild(boton2);
}