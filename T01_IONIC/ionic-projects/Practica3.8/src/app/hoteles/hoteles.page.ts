import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.page.html',
  styleUrls: ['./hoteles.page.scss'],
})
export class HotelesPage implements OnInit {

  ciudad: string = '';
  hoteles: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private navCtrl: NavController) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.ciudad = id ?? '';
    this.http.get('assets/ciudades.json').subscribe({
      next: (data: any) => {
        this.hoteles = data.find((ciudad: any) => ciudad.ciudad == this.ciudad).hoteles;
      },
      error: (err) => {
        console.error('Error al cargar JSON local:', err);
      },
    });
  }

  goToValoraciones(hotelEnvio: string) {
    this.navCtrl.navigateForward('/valoraciones/' + hotelEnvio);
  }

}
