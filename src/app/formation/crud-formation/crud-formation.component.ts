import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/classe/formation';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { FormationService } from 'src/app/service-gestionnaire-rh/formation.service';

@Component({
  selector: 'app-crud-formation',
  templateUrl: './crud-formation.component.html',
  styleUrls: ['./crud-formation.component.css']
})
export class CrudFormationComponent implements OnInit {
  
  f : any ;
   a :any; 
  formation : Formation = new Formation();
  f1 : Formation = new Formation();
   maListeA: any[] = [];
   q : any ;
   id :any ;

  constructor(private serviceformation : FormationService ,  private gestionnaireservice : EmployerService
    , private dataservice : DataServiceService) { }

  ngOnInit(): void {
 
  let v = this.dataservice.sharedData;
console.log(v);
    this.gestionnaireservice.getgestionnaire(v).subscribe(data=>{
       this.q = data ;
      
       this.id = this.q.succursale.mat_succursale ;
      
       this.serviceformation.getFormation().subscribe(data=>{
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
 
 saveFormation(x : Formation){

  x.role = 'f';
  x.utilisateur.mat_Utilisateur = this.dataservice.sharedData;
  this.serviceformation.addFormation(x).subscribe(data=>{
      console.log(data);
    },
    err=> console.log(err));
}

update(id:number){
 
  this.serviceformation.getformation(id).subscribe(data=>{
    this.a = data ;
    this.f1.date_formation = this.a.date_formation ;
    this.f1.mat_formation = this.a.mat_formation ;
    this.f1.nom_formation = this.a.nom_formation ;
    this.f1.role =this.a.role ;
    this.f1.sujet_formation = this.a.sujet_formation ;
    this.f1.utilisateur.mat_Utilisateur = this.a.utilisateur.mat_Utilisateur ;
  })
} 

deleteFormation(id : any  ){
  this.serviceformation.DeleteFormation(id).subscribe( data =>{
    console.log(data);
      },   err=> console.log(err)
      );

}

}
