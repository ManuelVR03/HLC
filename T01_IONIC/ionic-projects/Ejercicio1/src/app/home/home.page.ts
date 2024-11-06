import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text1: String = '';
  text2: String = '';
  text3: String = '';
  cont: number = 0;

  constructor() {}

  mostrar(){
    var items = document.getElementsByTagName('ion-item');
    switch(this.cont){
      case 0:
        if(this.text1 == '')
          break;
        items[0].disabled = true;
        items[1].style.display = 'block';
        this.cont++;
        break;
      case 1:
        if(this.text2 == '')
          break;
        items[1].disabled = true;
        items[2].style.display = 'block';
        this.cont++;
        break;
      case 2:
        if(this.text3 == '')
          break;
        items[2].disabled = true;
        break;
    }
  }
}
