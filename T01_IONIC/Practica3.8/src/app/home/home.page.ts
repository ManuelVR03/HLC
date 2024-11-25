import { Component } from '@angular/core';

interface Valoracion {
  usuario: string;
  comentario: string;
}

interface Hotel {
  nombre: string;
  valoraciones: Valoracion[];
}

interface Ciudad {
  ciudad: string;
  hoteles: Hotel[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ciudades: Ciudad[] = [];
  hoteles: Hotel[] = [];
  valoraciones: Valoracion[] = [];

  constructor() {}

}
