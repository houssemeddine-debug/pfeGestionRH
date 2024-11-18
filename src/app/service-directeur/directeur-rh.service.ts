import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirecteurRHService {

  
  public host:string ="http://localhost:8085"
  constructor(private http:HttpClient) { }
  
  public addDirecteur(directeur:any) {
    return this.http.post(this.host+"/Directeur/ADDDirecteur",directeur);
 }

 DeleteDirecteur( id : any ) {
   return this.http.delete(`${this.host}/Directeur/DELETEDirecteur/${id}`);
 }

 
 getDirecteur(id:any )  {
  return this.http.get(this.host+"/Directeur/GETDirecteurById/"+id);
}

envoyee(g : any){
  return this.http.post(this.host+"/Directeur/Envoyer",g);
}

}
