import { Component } from '@angular/core';

//importamos los modelos y alertcontroller para sacar las ventanas emergentes.

import { AlertController } from '@ionic/angular';

import { LineaDetalle } from '../modelo/LineaDetalle';

import { Producto } from '../modelo/Producto';


@Component({

  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],

})

export class HomePage {


  productoSeleccionado: Producto = new Producto(0, '', 0);

  codigoSeleccionado: number = 0;

  productos: Producto[] = [];

  lineasDetalle: LineaDetalle[] = [];

  total: number = 0.0;


  //cuando quiero utilizar alguna función opcional siempre la incluimos en el constructor para poder posteriormente utilizarla, hemos añadido el contenido dentro del constructor pero podría estar fuera al crear el array*/

  constructor(public alertController: AlertController) {

    this.productos.push(new Producto(1, "Producto 1", 10.3));

    this.productos.push(new Producto(2, "Producto 2", 25.3));

  }


  seleccionadoProducto(event: Event) {

    //console.log(event.target.value);

    if (!this.codigoSeleccionado)

      return;

    this.productos.forEach(producto => {

      if (producto.codigo == this.codigoSeleccionado) {

        this.productoSeleccionado = producto;

      }

    });

    //lanzamos el alert para informar o elegir en la ventana emergente

    this.alertUnidadesProducto();

  }


  /*la nomenclatura async y await son tipicas de javascript (donde await hace esperar a que le toque a la alerta, y async representa que la función es asíncrona */

  /*en este enlace viene bien explicado las alertas https://ia-pplication.com/blog/ionic-alert*/

  async alertUnidadesProducto() {

    const alert = await this.alertController.create({

      header: this.productoSeleccionado.codigo + ' - ' + this.productoSeleccionado.descripcion,

      inputs: [

        {

          type: 'number',

          name: 'unidades',

          placeholder: 'unidades',

          min: 1

        }

      ],

      buttons: [

        {

          text: 'Cancel',

          role: 'cancel',

          handler: () => {

            //borro la selección del ion-select

            this.codigoSeleccionado = 0;

          },

        },

        {

          text: 'OK',

          role: 'confirm',

          handler: (data) => {
            
            let encontrado = false;

            //para recoger los datos casteamos con number delante y utilizamos data

            let unidades = Number(data['unidades']);

            if (unidades < 1){
              this.alertController.create({
                header: 'Error',
                message: 'Las unidades deben ser mayor que 0',
                buttons: ['OK']
              }).then(alert => alert.present());
              return;
            }
            //busco en el array de lineas de detalle una línea

            //que tenga el mismo código de producto

            this.lineasDetalle.forEach((linea) => {

              if (linea.codigo == this.productoSeleccionado?.codigo) {

                //ya está añadido el producto

                encontrado = true;

                //quito del total final el total del producto

                this.total -= linea.total;

                //actualizo las unidades y el total del producto

                linea.unidades += unidades;

                linea.total = linea.pvp * linea.unidades;

                //actualizo el total final

                this.total += linea.total;

              }

            });

            if (!encontrado) {

              //el producto no ha sido aún añadido

              let lineaDetalle = new LineaDetalle(

                this.productoSeleccionado.codigo,

                this.productoSeleccionado.descripcion,

                this.productoSeleccionado.pvp,

                unidades,

                this.productoSeleccionado.pvp * unidades

              );

              this.lineasDetalle.push(lineaDetalle);

              //actualizo el total final

              this.total += lineaDetalle.total;

            }

            //borro la selección del ion-select

            this.codigoSeleccionado = 0;

          },

        }

      ]

    });

    await alert.present();

  }//end_alertUnidadesProducto


  eliminarLineaDetalle(i: number) {

    //actualizo el total final

    this.total -= this.lineasDetalle[i].total;

    //elimino la linea de detalle

    this.lineasDetalle.splice(i, 1);

  }


  async pedirConfirmacionBorrado(i: number) {

    const alert = await this.alertController.create({

      header: '¿Desea borrar?',

      buttons: [

        {

          text: 'Cancel',

          role: 'cancel',

          handler: () => {

          },

        },

        {

          text: 'OK',

          role: 'confirm',

          handler: () => {

            this.eliminarLineaDetalle(i);

          },

        },

      ],

    });

    await alert.present();

  }//end_pedirConfirmacionBorrado


}//end_class

