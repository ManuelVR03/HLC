import { Component } from '@angular/core';
import { Producto } from '../modelo/Producto';
import { DataService } from '../data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productos: Producto[] = [];

  constructor(public dataService: DataService, public alertController: AlertController) {
    this.productos = this.dataService.getProductos();
  }

  alertProducto(){
    this.alertController.create({
      header: 'Nuevo Producto',
      inputs: [
        {
          name: 'codigo',
          type: 'text',
          placeholder: 'Código'
        },
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'precio',
          type: 'number',
          placeholder: 'Precio'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {
            let producto = new Producto(data.codigo, data.nombre, data.precio);
            this.dataService.addProducto(producto);
            this.productos = this.dataService.getProductos();
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }



}
