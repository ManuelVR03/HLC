import { Component } from '@angular/core';

import { DataService } from '../data.service';

import { NavController } from '@ionic/angular';



@Component({

 selector: 'app-home',

 templateUrl: './home.page.html',

 styleUrls: ['./home.page.scss'],

})

export class HomePage {

 name?: String ;

 age?: number ;

 data = {name: '', age: 0}

 constructor(private dataService: DataService, private navCtrl: NavController) {}



 sendData() {

   this.dataService.setData(this.data);

   console.log(this.name + ' ' + this.age);

   // Navegar a la siguiente página

   this.navCtrl.navigateForward('/details');

 }

}
