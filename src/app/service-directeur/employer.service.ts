import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employer } from '../classe/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  public host:string ="http://localhost:8085"
  constructor(private http:HttpClient) { }

  public getGestionnaire(){
    return this.http.get(this.host+"/Gestionnaire/GETALLGestionnaire");
  }

  public addGestionnaire(gestionnaire:any) {
     
     return this.http.post(this.host+"/Gestionnaire/ADDGestionnaire",gestionnaire);
  }

  DeleteGestionnaire( id : any ) {
    return this.http.delete(`${this.host}/Gestionnaire/DELETEGestionnaire/${id}`);
  }

  getgestionnaire(id:any )  {
    return this.http.get(this.host+"/Gestionnaire/GETGestionnaireById/"+id);
  }

  envoiMail(rapportPdf : any  , g : any){
    return this.http.post(this.host+"/Gestionnaire/envoyer-rapport",rapportPdf,g);

  }
}
