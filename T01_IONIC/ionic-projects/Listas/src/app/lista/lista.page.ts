import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  // Array de elementos para mostrar en la lista
  items: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];
  nuevoElemento: string = '';
  
  constructor() {}

  ngOnInit() {}

  borrarElemento(index: number) {
    this.items.splice(index, 1);
  }

  agregarElemento() {
    if (this.nuevoElemento.trim()) {
      this.items.push(this.nuevoElemento);
      this.nuevoElemento = ''; // Limpia el campo de entrada
    }
  }
}
