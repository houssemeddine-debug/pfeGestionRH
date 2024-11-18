import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assiduite } from '../classe/assiduite';

@Injectable({
  providedIn: 'root'
})
export class AssiduiteService {

  public host:string ="http://localhost:8085"
  constructor(private http:HttpClient) { }

  public getAssiduite(){
    return this.http.get(this.host+"/Presance/GETALLPresance");
  }

  public addAssiduite(Assiduite:Assiduite) {
     
     return this.http.post(this.host+"/Presance/ADDPresance",Assiduite);
  }
}
