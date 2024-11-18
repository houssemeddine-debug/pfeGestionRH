import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { FormationService } from 'src/app/service-gestionnaire-rh/formation.service';

@Component({
  selector: 'app-demande-formation',
  templateUrl: './demande-formation.component.html',
  styleUrls: ['./demande-formation.component.css']
})
export class DemandeFormationComponent implements OnInit {

  a : any
  f : any ;
  q : any ;
  id :any ;
  maListeA: any[] = [];

  constructor( private serviceformation : FormationService , private gestionnaireservice : EmployerService
    , private dataservice : DataServiceService) { }

  ngOnInit(): void {


    let v = this.dataservice.sharedData;

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






    this.serviceformation.getFormation().subscribe(data=>{
     this.f=data;
     },err=>{
    console.log(err);
   })
  }

  AccepterDemande(id : number){
     this.serviceformation.getformation(id).subscribe(data=>{
      this.a=data;
      this.a.role="f";
      this.serviceformation.addFormation(this.a).subscribe(data=>{
        console.log("jawek behy");
      }, err=>console.log(err));
     });
     
  }

  deleteDemandeFormation(id : any  ){
    
    
    this.serviceformation.getformation(id).subscribe(data=>{
      this.a=data;
      this.a.role="r";
      this.serviceformation.addFormation(this.a).subscribe(data=>{
        console.log("jawek behy");
      }, err=>console.log(err));
     });
  
  }

}
