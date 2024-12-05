import { Injectable } from '@angular/core';
import { Producto } from './modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productos: Producto[] = [
    new Producto('P001', 'Smartphone XYZ', 299.99),
    new Producto('P002', 'Laptop ABC', 799.99),
    new Producto('P003', 'Auriculares Inalámbricos', 59.99),
    new Producto('P004', 'Teclado Mecánico', 120.00),
    new Producto('P005', 'Cámara Digital 4K', 499.99)
  ];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos;
  }

  addProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
