import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alumno } from '../modelo/Alumno';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cursoSeleccionado: string = '';
  esoSeleccionado: string = '';
  cicloSeleccionado: string = '';
  repite: boolean = false;
  grados = ['Ciclo DAW', 'Ciclo DAM', 'Ciclo ASIR'];
  alumno: Alumno = new Alumno('', '', false);
  alumnos: Alumno[] = [];

  constructor(public alertController: AlertController) {}

  ngOnInit() {
    this.alertSeleccionCurso();
  }

  async alertSeleccionCurso() {
    const alert = await this.alertController.create({
      header: 'Selecciona un curso',
      inputs: [
        {type: 'radio', label: 'ESO', value: 'ESO'},
        {type: 'radio', label: 'Ciclo', value: 'Ciclo'}
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.cursoSeleccionado = '';
          }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            this.cursoSeleccionado = data;
            if(this.cursoSeleccionado == 'ESO') {
              this.alertController.create({
                header: 'Curso de ESO',
                inputs: [
                  {type: 'radio', label: '1º ESO', value: '1º ESO'},
                  {type: 'radio', label: '2º ESO', value: '2º ESO'},
                  {type: 'radio', label: '3º ESO', value: '3º ESO'},
                  {type: 'radio', label: '4º ESO', value: '4º ESO'}
                ],
                buttons: [
                  {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                      this.esoSeleccionado = '';
                    }
                  },
                  {
                    text: 'OK',
                    role: 'confirm',
                    handler: (data) => {
                      this.esoSeleccionado = data;
                      this.alertController.create({
                        header: '¿Repite?',
                        inputs: [
                          {type: 'radio', label: 'Sí', value: 'si'},
                          {type: 'radio', label: 'No', value: 'no'}
                        ],
                        buttons: [
                          {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                              this.repite = false;
                            }
                          },
                          {
                            text: 'OK',
                            role: 'confirm',
                            handler: (data) => {
                              this.repite = data == 'si';
                              this.alumnos.push(new Alumno(this.cursoSeleccionado, this.esoSeleccionado, this.repite));
                            }
                          }
                        ]
                      }).then(alert => {
                        alert.present();
                      })
                    }
                  }
                ]
              }).then(alert => {
                alert.present();
              })
            }else {
              this.alertController.create({
                header: 'Curso de Ciclo',
                inputs: [
                  {type: 'radio', label: this.grados[0], value: this.grados[0]},
                  {type: 'radio', label: this.grados[1], value: this.grados[1]},
                  {type: 'radio', label: this.grados[2], value: this.grados[2]}
                ],
                buttons: [
                  {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                      this.cicloSeleccionado = '';
                    }
                  },
                  {
                    text: 'OK',
                    role: 'confirm',
                    handler: (data) => {
                      this.cicloSeleccionado = data;
                      this.alumnos.push(new Alumno(this.cursoSeleccionado, this.cicloSeleccionado, this.repite));
                    }
                  }
                ]
              }).then(alert => {
                alert.present();
              })  
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
