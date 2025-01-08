import { Injectable } from '@angular/core';
import { Producto } from './modelos/Producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productos: Producto[] = [];

  constructor() { 
    this.productos.push(new Producto(1, "Manzana",3, 3.35*3));
    this.productos.push(new Producto(2, "Pera",2, 2.34*2));
    this.productos.push(new Producto(3, "Limón",8, 2.35*8));
    this.productos.push(new Producto(4, "Naranja",5, 1.36*5));
  }

  addProducto(producto:Producto){ 
    this.productos.push(producto);
  }

  removeProducto(producto:Producto){  
    let index = this.productos.indexOf(producto);
    this.productos.splice(index, 1); //elimina 1 producto del array a partir de la posición index
  }

  getProductos(){
    return this.productos;
  }

  setProducto(producto:Producto){
    this.productos.push(producto);
  }
}
