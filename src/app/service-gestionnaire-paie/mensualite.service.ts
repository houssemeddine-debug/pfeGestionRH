import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensualtitePret } from '../classe/mensualtite-pret';

@Injectable({
  providedIn: 'root'
})
export class MensualiteService {

  public host:string ="http://localhost:8085"
  constructor(private http:HttpClient) { }

  public getm(){
    return this.http.get(this.host+"/MensualitePret/GETALLMensualitePret");
  }

  public addm(m:MensualtitePret) {
     
     return this.http.post(this.host+"/MensualitePret/ADDMensualitePret",m);
  }

 
}
