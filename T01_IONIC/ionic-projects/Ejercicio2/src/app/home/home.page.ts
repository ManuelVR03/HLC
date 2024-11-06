import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  apellidos: string = '';
  nombre: string = '';
  provincia: string = '';
  estadoCivil: string = 'soltero';
  familiaNumerosa: string = '';

  constructor() {}

  enviar(){
    this.apellidos = '';
    this.nombre = '';
    this.provincia = '';
    this.estadoCivil = 'soltero';
    this.familiaNumerosa = '';
  }

}
