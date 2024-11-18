import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/classe/conge';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { CongeService } from 'src/app/service-gestionnaire-rh/conge.service';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {
  
  a : any
  f : any ;
 q : any ;
 id :any ;
  conge : Conge = new Conge()
  maListeA: any[] = [];
  constructor( private serviceconge : CongeService , private gestionnaireservice : EmployerService
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

  AccepterDemande(id : number){
 
 
     this.serviceconge.getconge(id).subscribe(data=>{
      this.a=data;
      this.a.role="f";
      this.serviceconge.addConge(this.a).subscribe(data=>{
        console.log("jawek behy");
      }, err=>console.log(err));
     });
     
  }

  deleteDemandeConge(id : any  ){
    this.serviceconge.getconge(id).subscribe(data=>{
      this.a=data;
      this.a.role="r";
      this.serviceconge.addConge(this.a).subscribe(data=>{
        console.log("jawek behy");
      }, err=>console.log(err));
     });
  
  }

}
