function nuevoProducto(){
    let lista = document.getElementsByTagName("ul")[0];
    let producto = document.createElement("li");
    producto.textContent = prompt("Introduce un producto: ");
    lista.appendChild(producto);
}