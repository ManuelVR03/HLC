var productos = [
    { cod: 1, nombre: "Producto 1", precio: 100 },
    { cod: 2, nombre: "Producto 2", precio: 200 },
    { cod: 3, nombre: "Producto 3", precio: 300 },
    { cod: 4, nombre: "Producto 4", precio: 400 },
    { cod: 5, nombre: "Producto 5", precio: 500 }
];
window.onload = function () {
    var padre = document.getElementById("contenido");
    var listaProductos = document.createElement("ul");
    padre.appendChild(listaProductos);

    function removeProd(elemento) {
        var boton = document.createElement("button");
        boton.textContent = "❌";
        boton.addEventListener("click", function () {
            listaProductos.removeChild(elemento);
            if (listaProductos.children.length == 0) {
                addProductosCreados();
            }
        });
        return boton;
    }

    function addProductosCreados() {
        productos.forEach((prod) => {
            var producto = document.createElement("li");
            producto.textContent = "Código: " + prod.cod + " - Nombre: " + prod.nombre + " - Precio: " + prod.precio + "€\t";
            producto.appendChild(removeProd(producto));
            listaProductos.appendChild(producto);
        })
    };

    addProductosCreados();

    function addNewProd() {
        var producto = document.createElement("li");
        var newCod = prompt("Introduce un código: ");
        var newNom = prompt("Introduce un nombre: ");
        var newPrecio = prompt("Introduce un precio: ");
        productos.push({ cod: newCod, nombre: newNom, precio: newPrecio });
        producto.textContent = "Código: " + newCod + " - Nombre: " + newNom + " - Precio: " + newPrecio + "€\t";
        producto.appendChild(removeProd(producto));
        listaProductos.appendChild(producto);
    }

    var addBoton = document.createElement("button");
    addBoton.textContent = "Añadir Producto";
    addBoton.addEventListener("click", function () {
        addNewProd();
    });
    padre.appendChild(addBoton);
};