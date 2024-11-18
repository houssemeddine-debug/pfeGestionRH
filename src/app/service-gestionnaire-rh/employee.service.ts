import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public host:string ="http://localhost:8085"
  x : any;
  constructor(private http:HttpClient) { }

  public getE(){
    return this.http.get(this.host+"/Utilisateur/GETALLUtilisateur");
  }

  public addE(Utilisateur:any) {
     
     return this.http.post(this.host+"/Utilisateur/ADDUtilisateur",Utilisateur);
  }

  DeleteE( id : number ) {
    return this.http.delete(`${this.host}/Utilisateur/DELETEUtilisateur/${id}`);
  }

  gete(id:number|undefined)  {
    
    return this.http.get(this.host+"/Utilisateur/GETUtilisateurById/"+id);
  }
}
