import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PretService {

  public host:string ="http://localhost:8085"

  constructor(private http:HttpClient) { }

  public getPret(){
    return this.http.get(this.host+"/Pret/GETALLPret");
  }

  public addPret(Pret:any) {
     
     return this.http.post(this.host+"/Pret/ADDPret",Pret);
  }

  DeletePret( id : number ) {
    return this.http.delete(`${this.host}/Pret/DELETETPret/${id}`);
  }

  getpret(id:number)  {
    
    return this.http.get(this.host+"/Pret/GETPretById/"+id);
  }


}
