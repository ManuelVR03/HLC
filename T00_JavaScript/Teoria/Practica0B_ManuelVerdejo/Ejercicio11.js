/*
11. Simulamos una lista de la compra. Tenemos un HTML con un título (Lista de la compra) y
una lista de productos, que estará vacía. Tendremos un botón de añadir con un onclick que al
clicarlo preguntará al usuario por el producto a añadir (haciendo uso de prompt), tras indicarlo
se añadirá a la lista (añadiendo el nodo correspondiente al elemento lista).
*/

function nuevoProducto(){
    let lista = document.getElementsByTagName("ul")[0];
    let producto = document.createElement("li");
    producto.textContent = prompt("Introduce un producto: ");
    lista.appendChild(producto);
}