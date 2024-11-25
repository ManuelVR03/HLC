import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ciudades = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/ciudades.json').subscribe((data: any) => {
      this.ciudades = data;
    });
  }

}
