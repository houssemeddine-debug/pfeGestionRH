import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/classe/conge';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { CongeService } from 'src/app/service-gestionnaire-rh/conge.service';

@Component({
  selector: 'app-crud-conge',
  templateUrl: './crud-conge.component.html',
  styleUrls: ['./crud-conge.component.css']
})
export class CrudCongeComponent implements OnInit {

  fs : any ;
 
  conge : Conge = new Conge();

   fo: any
   maListeA: any[] = [];
   f : any ;
   q : any ;
   id :any ;
   
  constructor(private serviceconge : CongeService , private gestionnaireservice : EmployerService
    , private dataservice : DataServiceService) { }

  ngOnInit(): void {
    let v = this.dataservice.sharedData;

    this.gestionnaireservice.getgestionnaire(v).subscribe(data=>{
       this.q = data ;
      
       this.id = this.q.succursale.mat_succursale ;
      
       this.serviceconge.getConge().subscribe(data=>{
        this.f=data;
         for(let key of this.f){
            if(key.utilisateur.departement.succursale.mat_succursale == this.id){
              this.maListeA.push(key);
            }
         }
      },err=>{
        console.log(err);
      });
    });
 }
 
 saveConge(x : Conge){

  this.serviceconge.addConge(x).subscribe(data=>{
      console.log(data);
    },
    err=> console.log(err));
}







update(id:number){
  this.serviceconge.getconge(id).subscribe(data=>{
    this.fo=data;
    this.conge.date_debut_conge = this.fo.date_debut_conge;
    this.conge.date_fin = this.fo.date_fin ;
    this.conge.mat_conge = this.fo.mat_conge ;
    this.conge.role = this.fo.role ;
    this.conge.type_conge =this.fo.type_conge ;
    this.conge.utilisateur.mat_Utilisateur= this.fo.utilisateur.mat_Utilisateur;
  } , err=> console.log(err));
} 

deleteConge(id : any  ){
  this.serviceconge.DeleteConge(id).subscribe( data =>{
    console.log(data);
      },   err=> console.log(err)
      );

}

}
