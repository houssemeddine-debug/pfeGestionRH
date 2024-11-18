import { Component, OnInit } from '@angular/core';
import { TransfertService } from '../service-gestionnaire-rh/transfert.service';
import { DataServiceService } from '../data-service.service';
import { SuccrsaleService } from '../service-directeur/succrsale.service';
import { Gestionnaire } from '../classe/gestionnaire';
import { GestionnaireService } from '../service-directeur/gestionnaire.service';
import { EmployerService } from '../service-directeur/employer.service';
import { DepartementService } from '../service-gestionnaire-rh/departement.service';

@Component({
  selector: 'app-nav-transfert',
  templateUrl: './nav-transfert.component.html',
  styleUrls: ['./nav-transfert.component.css']
})
export class NavTransfertComponent implements OnInit {

  maliste : any[] = []
  t : any ;
  etat1 : any ;
  etat2 : any ;
  ts : any ;
  emp : any ;
  constructor( private servicetransfert : TransfertService , private dataservice : DataServiceService , private succursaleservice
    : DepartementService , private gestionnaireservice : GestionnaireService) { }

  ngOnInit(): void {

    this.servicetransfert.getFTransfert().subscribe(data=>{
      this.t = data;
      console.log(this.t);
      for(let key of this.t){
         if(key.utilisateur.mat_Utilisateur== this.dataservice.sharedData){
          this.maliste.push(key);
          console.log(key);
         }
      }
      for(let a of this.maliste){
        if(a.etat1==1 && a.etat2==1){

          this.succursaleservice.getDepartement().subscribe(data=>{
              this.ts = data ;
              for(let r of this.ts){
                if(r.succursale.nom_succursale==a.nouvelle_succursale){
                  console.log(r);
                  //a.utilisateur.departement.succursale.mat_succursale = r.mat_succursale;
                  console.log(this.dataservice.sharedData);
                  this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
                    this.emp = data ;
                    console.log(this.emp);
                    this.gestionnaireservice.DeleteGestionnaire(this.dataservice.sharedData).subscribe();
                    this.emp.departement.id = r.id;
                    this.gestionnaireservice.addGestionnaire(this.emp).subscribe(data=>{
                      console.log(data);
                    })
                  })
                  
                }
              }
          })
        }
      }
      
    })
  }


  oo(){
    window.location.reload();
  }

}
