import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../classe/departement';
import { Observable } from 'rxjs';
import { Societe } from '../classe/societe';





@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  
  public host:string ="http://localhost:8085"
  x : any;
  constructor(private http:HttpClient) { }

  public getDepartement(){
    return this.http.get(this.host+"/Departement/GETALLDepartement");
  }

  public addDepartement(departement:Departement) {
     
     return this.http.post(this.host+"/Departement/ADDDepartement",departement);
  }

  DeleteDepartement( id : number | undefined ) {
    return this.http.delete(`${this.host}/Departement/DELETEDepartement/${id}`);
  }



  getdepartement(id:number )  {
    
    return this.http.get(this.host+"/Departement/GETDepartementById/"+id);
  }

  
  

}
