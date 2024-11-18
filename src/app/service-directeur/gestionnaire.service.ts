import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gestionnaire } from '../classe/gestionnaire';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireService {

  
  public host:string ="http://localhost:8085"
  constructor(private http:HttpClient) { }

  public getGestionnaire(){
    return this.http.get(this.host+"/Utilisateur/GETALLUtilisateur");
  }

  public addGestionnaire(gestionnaire:any) {
     
     return this.http.post(this.host+"/Utilisateur/ADDUtilisateur",gestionnaire);
  }

  DeleteGestionnaire( id : any ) {
    return this.http.delete(`${this.host}/Utilisateur/DELETEUtilisateur/${id}`);
  }

  getgestionnaire(id:any )  {
    return this.http.get(this.host+"/Utilisateur/GETUtilisateurById/"+id);
  }
  
  envoyee(g : any){
    return this.http.post(this.host+"/Utilisateur/Envoyer",g);
  }

  // register( id : number , passe : String){
  //   return this.http.post(this.host+"/Utilisateur/register",id);
  // }
}
