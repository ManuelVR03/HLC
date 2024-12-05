import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: any;

  constructor(private dataService: DataService) { 
    this.user = this.dataService.getData();
  }

  ngOnInit() {
    
  }

}
