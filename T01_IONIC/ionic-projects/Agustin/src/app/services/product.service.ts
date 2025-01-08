import { Injectable } from '@angular/core';

export interface Producto {
  nombre: string;
  cantidad: number;
  precio: number;
  kilocalorias: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServicioProducto {
  private listaProductos: Producto[] = [
    { nombre: 'manzana', cantidad: 5, precio: 1.2, kilocalorias: 52 },
    { nombre: 'pan', cantidad: 2, precio: 0.8, kilocalorias: 265 },
  ];

  obtenerProductos(): Producto[] {
    return this.listaProductos;
  }

  

  agregarOActualizarProducto(producto: Producto): void {
    for (let i = 0; i < this.listaProductos.length; i++) {
      // Comparar nombres sin importar mayúsculas o minúsculas
      if (
        this.listaProductos[i].nombre.trim().toLowerCase() ===
        producto.nombre.trim().toLowerCase()
      ) {
        this.listaProductos[i].cantidad += producto.cantidad;
        return;
      }
    }
    this.listaProductos.push(producto);
  }
  
}
