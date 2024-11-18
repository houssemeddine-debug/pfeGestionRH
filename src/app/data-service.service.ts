import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  sharedData: any;
  sharedsuccursal : any
  s :any ;
  constructor() { 
    this.sharedData = localStorage.getItem('sharedData') || '';
    this.sharedsuccursal = localStorage.getItem('sharedsuccursal') || '';
    this.s = localStorage.getItem('s') || '';
  }

  setData(data: string): void {
    this.sharedData = data;
    localStorage.setItem('sharedData', data);
  }
  setDat(data: string): void {
    this.sharedsuccursal = data;
    localStorage.setItem('sharedData', data);
  }
  sets(data: string): void{
    this.s = data;
    localStorage.setItem('s', data);
  }

 
  
}
