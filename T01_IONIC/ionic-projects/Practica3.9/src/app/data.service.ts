import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sharedData: any;



  constructor() { }
 
 
 
  setData(data: any): void {
 
    this.sharedData = data;
 
  }
 
 
 
  getData(): any {
 
    return this.sharedData;
 
  }
 
 }
