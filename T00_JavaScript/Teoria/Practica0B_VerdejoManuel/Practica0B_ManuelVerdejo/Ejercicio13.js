const productos = [
{ id: 1, nombre: 'Patata', precio: 1, imagen: 'patata.jpg'},
{ id: 2, nombre: 'Cebolla', precio: 1.2, imagen: 'cebolla.jpg' },
{ id: 3, nombre: 'Calabacin', precio: 2.1, imagen: 'calabacin.jpg' },
{ id: 4, nombre: 'Fresas', precio: 0.6, imagen: 'fresas.jpg' }];

var lista = document.createElement("ul");
document.body.appendChild(lista);

for (let producto of productos){
    let newProducto = document.createElement("li");
    let imagen = document.createElement("img");
    imagen.src = "../imagenes/" + producto.imagen;
    newProducto.textContent = "Nombre: " + producto.nombre + " Precio: " + producto.precio + "€ " + "Imagen: ";
    newProducto.appendChild(imagen);
    lista.appendChild(newProducto);
}