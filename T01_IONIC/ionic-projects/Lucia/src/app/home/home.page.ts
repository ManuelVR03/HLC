import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {DataService } from '../data.service';
import { Producto } from '../modelos/Producto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  productos:Producto[]=[]; //array de productos;
  total: number = 0;
  constructor(private dataService:DataService, private alertController:AlertController) {

  }

  ngOnInit(){
    this.productos = this.dataService.getProductos();
    this.total = this.getTotal();
  }

  alertProducto(){
    this.alertController.create({
      header: 'Nuevo Producto',
      inputs: [
        {
          name: 'codigo',
          type: 'number',
          placeholder: 'Código'
        },
        {
          name: 'descripcion',
          type: 'text',
          placeholder: 'Descripción'
        },
        {
          name: 'cantidad',
          type: 'number',
          placeholder: 'Cantidad'
        },
        {
          name: 'pvp',
          type: 'number',
          placeholder: 'precio'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'},
        {
          text: 'Guardar',
          handler: (data) => {
            let producto = new Producto(data.codigo, data.descripcion,data.cantidad,data.pvp);
            this.compruebaLista(producto);
            this.productos = this.dataService.getProductos();
            this.total = this.getTotal();
          }
        }
          ]
        }).then(alert => alert.present());
      }
      

  compruebaLista(producto:Producto){
    var enc=false;
    for (let i = 0; i < this.productos.length && !enc; i++) {
      if (this.productos[i].codigo == producto.codigo && this.productos[i].descripcion.toLowerCase() == producto.descripcion.toLowerCase()) {
        this.productos[i].cantidad += Number(producto.cantidad);
        this.productos[i].pvp += Number(producto.pvp)*Number(producto.cantidad);
        enc=true;
      }else if(this.productos[i].codigo == producto.codigo && this.productos[i].descripcion.toLowerCase() != producto.descripcion.toLowerCase() 
        || this.productos[i].codigo != producto.codigo && this.productos[i].descripcion.toLowerCase() == producto.descripcion.toLowerCase()
      ){
        alert("El producto no coincide con el código o la descripción");
        enc=true;
      }
    }
    if(!enc){
      this.dataService.addProducto(producto);
    }
  }

  getTotal(): number{
    let totaln=0;
    for (let i = 0; i < this.productos.length; i++) {
      totaln+=this.productos[i].pvp;
    }
    return totaln;
  }
}//end_class