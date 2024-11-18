import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Societe } from '../classe/societe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

 
  public host:string ="http://localhost:8085"
  constructor(private http:HttpClient) { }

  public getS(){
    return this.http.get(this.host+"/Societe/GETALLSociete");
  }

  public addS(societe:Societe) {
     
     return this.http.post(this.host+"/Societe/ADDSociete",societe);
  }

  DeleteS( id : number  ) {
    return this.http.delete(`${this.host}/Societe/DELETESociete/${id}`);
  }

  gets(id:number |undefined): Observable<any>{
    
    return this.http.get(`${this.host}/Societe/GETSocieteById/${id}`);
  }
  
}
