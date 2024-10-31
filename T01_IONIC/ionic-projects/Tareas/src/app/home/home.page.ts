import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tarea="";
  tareas: string[] = [];
  constructor() {}
  agrega(){
    let enc=false;
    for(var i=0;i<this.tareas.length && !enc;i++){
      if(this.tarea.toLowerCase()==this.tareas[i].toLowerCase()){
        enc=true;
      }
    }

    if(!enc && this.tarea!=""){
      this.tareas.push(this.tarea);
      var lista=document.getElementById("lista");
      var elemento = document.createElement("li");
      elemento.textContent=this.tarea;
      var boton = document.createElement("ion-button");
      boton.textContent="Delete"
      boton.onclick = function() {
        elemento.remove();
      }
      lista?.appendChild(elemento);
      elemento.appendChild(boton);
    }
    this.tarea="";
  }
}
