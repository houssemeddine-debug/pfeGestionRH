import { Component, OnInit } from '@angular/core';
import { Gestionnaire } from 'src/app/classe/gestionnaire';
import { Succrsale } from 'src/app/classe/succrsale';
import { Transfert } from 'src/app/classe/transfert';
import { DataServiceService } from 'src/app/data-service.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';
import { SuccrsaleService } from 'src/app/service-directeur/succrsale.service';
import { TransfertService } from 'src/app/service-gestionnaire-rh/transfert.service';

@Component({
  selector: 'app-transfert-demande',
  templateUrl: './transfert-demande.component.html',
  styleUrls: ['./transfert-demande.component.css']
})
export class TransfertDemandeComponent implements OnInit {

  transfert : Transfert = new Transfert();
  succrsale : any ;
  s : any ;
  liste : any[] = []
  a : any;
  testp = 1 ;
  constructor(private servicesuccrsale : SuccrsaleService , private servicetransfert : TransfertService , private servicegestionnaire : GestionnaireService
    , private dataservice : DataServiceService) { }

  ngOnInit(): void {

    this.servicegestionnaire.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
       this.a = data ;
       this.servicesuccrsale.getSuccrsale()
       .subscribe(data=>{
          this.succrsale=data;
          for(let key of this.succrsale){
           if(key.societe1.mat_societe == this.a.departement.succursale.societe1.mat_societe){
              this.liste.push(key);
           }
          }
       },err=>{
         console.log(err);
       })
    })
   

  } 

  saveTransfert(){
    if(this.transfert.nouvelle_succursale==null || this.transfert.nom_utilisateur==null || this.transfert.prenom_utilisateur==null
      ){
      alert("Touts les champs sont obligatoires ");
      this.testp = 0 ;
    }
    else{

      this.servicegestionnaire.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
        this.s=data;
        console.log(this.s);
      this.transfert.succursal_actuel = this.s.departement.succursale.nom_succursale;
      if (this.transfert.nouvelle_succursale== this.transfert.succursal_actuel){
        alert("Vous n'avez pas sélectionner une nouvelle succursale ");
        this.testp = 0 ;
        window.location.reload();
      }

      if(this.testp==1){
        this.servicegestionnaire.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
          this.s=data;
          console.log(this.s);
        this.transfert.succursal_actuel = this.s.departement.succursale.nom_succursale; 
        this.transfert.utilisateur.mat_Utilisateur = this.dataservice.sharedData ;
         this.transfert.id_transfet = this.dataservice.sharedData ;
        this.servicetransfert.addTransfert(this.transfert).subscribe(data=>{
             console.log(data);
             alert("Demande envoyé ");
             window.location.reload();
           },
           err=> console.log(err));
       
    })
      }

     });

    }
    
   
 
}
}