import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.page.html',
  styleUrls: ['./valoraciones.page.scss'],
})
export class ValoracionesPage implements OnInit {

  hotel: string = '';
  valoraciones: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.hotel = id ?? '';
    this.http.get<any[]>('assets/ciudades.json').subscribe((data) => {
      const ciudad = data.find((ciudad) =>
        ciudad.hoteles.some((hotel: any) => hotel.nombre === this.hotel)
      );
      const hotel = ciudad.hoteles.find((hotel: any) => hotel.nombre === this.hotel);
      this.valoraciones = hotel.valoraciones;
    });
  }

}
