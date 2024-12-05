import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ciudades: any[] = [];
  
  constructor(private http: HttpClient, private navCtrl: NavController) {}
  
  ngOnInit() {
    this.http.get('assets/ciudades.json').subscribe({
      next: (data: any) => {
        this.ciudades = data;
      },
      error: (err) => {
        console.error('Error al cargar JSON local:', err);
      },
    });
  }

  goToHoteles(ciudadEnvio: string) {
    this.navCtrl.navigateForward('/hoteles/' + ciudadEnvio);
  }
}
