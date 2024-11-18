import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  public host:string ="http://localhost:8085"

  constructor(private http:HttpClient) { }

  public getFTransfert(){
    return this.http.get(this.host+"/Transfert/GETALLTransfert");
  }

  public addTransfert(transfert:any) {
     
     return this.http.post(this.host+"/Transfert/ADDTransfert",transfert);
  }

  DeleteTransfert( id : number ) {
    return this.http.delete(`${this.host}/Transfert/DELETETransfert/${id}`);
  }

  getTransfert(id:number)  {
    
    return this.http.get(this.host+"/Transfert/GETTransfertById/"+id);
  }


}
