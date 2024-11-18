import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuccrsaleService {

  public host:string ="http://localhost:8085"
  constructor(private http:HttpClient) { }

  public getSuccrsale(){
    return this.http.get(this.host+"/Succursale/GETALLSuccursale");
  }

  public addSuccrsale(succrsale:any) {
     
     return this.http.post(this.host+"/Succursale/ADDSuccursale",succrsale);
  }

  DeleteSuccrsale( id : any ) {
    return this.http.delete(`${this.host}/Succursale/DELETESuccursale/${id}`);
  }

  getsuccrsale(id:Number )  {
    
    return this.http.get(this.host+"/Succursale/GETSuccursaleById/"+id);
  }
  

}
