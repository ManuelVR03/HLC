import { Component } from '@angular/core';

import { AlumnoAsignatura } from '../modelo/AlumnoAsignatura';


@Component({

  selector: 'app-home',

  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],

})

export class HomePage {


  asignaturas:string[]=['HLC','MÓVILES','ACCESO A DATOS'];

  alumnos:string[]=['Perez López, Marta', 'García Aranda, José', 'Nieto Blanco, Ana'];

  alumnosSeleccionados:string[] = [];

//creamos un array de objetos 

  alumnosAsignaturas?: AlumnoAsignatura[];

  asignaturaSeleccionada:string = '';


  constructor() {}

/*ahora trabajamos con event lo cual nos podrá pasar toda la información correspondiente a la etiqueta que lo lanza, como por ejemplo la etiqueta, el evento que lo lanza (click, change, etc) con event.type, después también podemos ver con event.target todo lo que queremos de la etiqueta desde la cual se lanza el evento. Por ejemplo con event.target.value cogemos el valor de la etiqueta*/

  cambiaAsignatura(event: any){

    console.log(event.target.value);

    console.log(this.asignaturaSeleccionada);

  }


  seleccionadosAlumnos(event: any){

    console.log(this.alumnosSeleccionados);

    this.alumnosAsignaturas=[];

    this.alumnosSeleccionados.forEach((alumno:string)=>{

      this.alumnosAsignaturas?.push(new AlumnoAsignatura(alumno,this.asignaturaSeleccionada));

    })

  }


}