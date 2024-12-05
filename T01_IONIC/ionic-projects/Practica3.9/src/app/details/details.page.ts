import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';



@Component({

  selector: 'app-details',

  templateUrl: './details.page.html',

  styleUrls: ['./details.page.scss'],

})

export class DetailsPage implements OnInit {

  receivedData: any;



  constructor(private dataService: DataService) { }



  ngOnInit() {

    this.receivedData = this.dataService.getData();

    console.log(this.receivedData);

  }

}