import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  
  public host:string ="http://localhost:8085"
  x : any;
  constructor(private http:HttpClient) { }

  public getFormation(){
    return this.http.get(this.host+"/Formation/GETALLFormation");
  }

  public addFormation(formation:any) {
     
     return this.http.post(this.host+"/Formation/ADDFormation",formation);
  }

  DeleteFormation( id : number ) {
    return this.http.delete(`${this.host}/Formation/DELETEFormation/${id}`);
  }

  getformation(id:number)  {
    
    return this.http.get(this.host+"/Formation/GETFormationById/"+id);
  }
}
