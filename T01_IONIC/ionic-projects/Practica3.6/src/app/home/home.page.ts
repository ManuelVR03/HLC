import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { Alumno } from '../modelo/Alumno';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alumnoSeleccionado: Alumno = new Alumno('', '', false);
  curso: string = '';
  especifico: string = '';
  repite: boolean = false;
  alumnos: Alumno[] = [];
  cursos: string[] = ['ESO', 'Ciclo']

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.presentInitialAlert();
  }

  async presentInitialAlert() {
    const alert = await this.alertController.create({
      header: 'Seleccione una opción',
      inputs: [
        {
          type: 'radio',
          label: 'ESO',
          value: 'ESO'
        },
        {
          type: 'radio',
          label: 'Ciclo',
          value: 'Ciclo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: (data) => {
            if (data === 'ESO') {
              this.presentESOAlert();
            } else if (data === 'Ciclo') {
              this.presentCicloOptions();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async presentESOAlert() {
    const alert = await this.alertController.create({
      header: 'Seleccione un curso de ESO',
      inputs: [
        {
          type: 'radio',
          label: '1º ESO',
          value: '1º ESO'
        },
        {
          type: 'radio',
          label: '2º ESO',
          value: '2º ESO'
        },
        {
          type: 'radio',
          label: '3º ESO',
          value: '3º ESO'
        },
        {
          type: 'radio',
          label: '4º ESO',
          value: '4º ESO'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: (data) => {
            this.curso = data;
            this.presentRepiteAlert();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentRepiteAlert() {
    const alert = await this.alertController.create({
      header: '¿El alumno es repetidor?',
      inputs: [
        {
          type: 'radio',
          label: 'Sí',
          value: 'Sí'
        },
        {
          type: 'radio',
          label: 'No',
          value: 'No'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: (data) => {
            this.repite = data === 'Sí';
            console.log(`ESO - ${this.curso} - repite: ${this.repite}`);
          }
        }
      ]
    });

    await alert.present();
  }

  cursoSeleccionado(curso: string) {
    this.curso = curso;
    console.log(`Curso seleccionado: ${curso}`);
  }

  presentCicloOptions() {
    this.cursos = ['DAM', 'DAW', 'ASIR'];
    console.log(`Ciclo - Ciclo ${this.cursos.join(', ')}`);
  }

}