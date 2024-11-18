import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvertissementService {

  public host:string ="http://localhost:8085"
  
  constructor(private http:HttpClient) { }

  public getAvertissement(){
    return this.http.get(this.host+"/Avertissement/GETALLAvertissement");
  }

  public addAvertissement(avertissement:any) {
     
     return this.http.post(this.host+"/Avertissement/ADDAvertissement",avertissement);
  }
}
