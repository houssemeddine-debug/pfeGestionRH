import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conge } from '../classe/conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  public host:string ="http://localhost:8085"

  constructor(private http:HttpClient) { }

  public getConge(){
    return this.http.get(this.host+"/Conge/GETALLConge");
  }

  public addConge(conge:any) {
     
     return this.http.post(this.host+"/Conge/ADDConge",conge);
  }

  DeleteConge( id : number ) {
    return this.http.delete(`${this.host}/Conge/DELETEConge/${id}`);
  }

  getconge(id:number)  {
    
    return this.http.get(this.host+"/Conge/GETCongeById/"+id);
  }

  updateConge(id : number , conge : Conge){

    return this.http.put(this.host+"/Conge/UPDATEConge/"+id ,conge);

  }
}
