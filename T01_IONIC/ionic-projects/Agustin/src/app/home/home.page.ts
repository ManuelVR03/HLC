import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServicioProducto, Producto } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  productos: Producto[] = [];
  precioTotal: number = 0;

  constructor(
    private servicioProducto: ServicioProducto,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.actualizarProductosYPrecio();
  }

  async mostrarAlertaAgregarProducto() {
    const alertaNombre = await this.alertController.create({
      header: 'Añadir Producto',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Nombre del producto' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Siguiente',
          handler: async (datos) => {
            const productoExistente = this.productos.find(
              (p) => p.nombre === datos.nombre
            );

            if (productoExistente) {
              await this.mostrarAlertaCantidad(productoExistente.nombre, true);
            } else {
              await this.mostrarAlertaCompleta(datos.nombre);
            }
          },
        },
      ],
    });

    await alertaNombre.present();
  }

  async mostrarAlertaCantidad(nombre: string, soloCantidad: boolean) {
    const alertaCantidad = await this.alertController.create({
      header: 'Añadir Cantidad',
      inputs: [
        {
          name: 'cantidad',
          type: 'number',
          placeholder: 'Cantidad',
        },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Añadir',
          handler: (datos) => {
            const nuevaCantidad = parseInt(datos.cantidad) || 0;
            const producto: Producto = {
              nombre: nombre,
              cantidad: nuevaCantidad,
              precio: 0,
              kilocalorias: 0,
            };
            this.servicioProducto.agregarOActualizarProducto(producto);
            this.actualizarProductosYPrecio();
          },
        },
      ],
    });

    await alertaCantidad.present();
  }

  async mostrarAlertaCompleta(nombre: string) {
    const alertaCompleta = await this.alertController.create({
      header: 'Añadir Producto Completo',
      inputs: [
        { name: 'cantidad', type: 'number', placeholder: 'Cantidad' },
        { name: 'precio', type: 'number', placeholder: 'Precio' },
        { name: 'kilocalorias', type: 'number', placeholder: 'Kilocalorías' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Añadir',
          handler: (datos) => {
            const producto: Producto = {
              nombre: nombre,
              cantidad: parseInt(datos.cantidad) || 0,
              precio: parseFloat(datos.precio) || 0,
              kilocalorias: parseFloat(datos.kilocalorias) || 0,
            };
            this.servicioProducto.agregarOActualizarProducto(producto);
            this.actualizarProductosYPrecio();
          },
        },
      ],
    });

    await alertaCompleta.present();
  }

  actualizarProductosYPrecio() {
    this.productos = this.servicioProducto.obtenerProductos();
    this.precioTotal = 0;

    for (let i = 0; i < this.productos.length; i++) {
      this.precioTotal += this.productos[i].cantidad * this.productos[i].precio;
    }
  }
}
