import { Component, OnInit } from '@angular/core';
import { MensualtitePret } from 'src/app/classe/mensualtite-pret';
import { Pret } from 'src/app/classe/pret';
import { DataServiceService } from 'src/app/data-service.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';
import { MensualiteService } from 'src/app/service-gestionnaire-paie/mensualite.service';
import { AssiduiteService } from 'src/app/service-gestionnaire-rh/assiduite.service';

import { PretService } from 'src/app/service-gestionnaire-rh/pret.service';

@Component({
  selector: 'app-demande-p',
  templateUrl: './demande-p.component.html',
  styleUrls: ['./demande-p.component.css']
})
export class DemandePComponent implements OnInit {
   formattedDatee :any
   formattedDat : any
   da : any;
  t : any ;
  g : any;
  somme : any = 0;
  d : Pret = new Pret();
  m :  number = 0;
   datedeb : any;
   datefin : any;
   listPret : any;
   test : boolean = true;
   mens : MensualtitePret = new MensualtitePret()
   z : any ;
  constructor( private servicedata : DataServiceService , private servicegestionnaire : GestionnaireService ,
    private assiduiteservice : AssiduiteService , private servicepret : PretService , private mesnsualiteservice : MensualiteService) { }

    ngOnInit(): void {
      this.servicegestionnaire.getgestionnaire(this.servicedata.sharedData).subscribe(data =>{
       this.g = data;      
       this.update();
      });
     
      const date = new Date();
      const formattedDate = date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
      });
      let year = formattedDate.substring(formattedDate.length , 6);
      let y = parseInt(year);
    //  console.log(y);
    
      let thisdate = new Date(y ,0 , 1);
      console.log(thisdate);
      this.servicepret.getPret().subscribe(data=>{
        this.listPret = data ;
        for(let i of this.listPret){
          if(i.utilisateur.mat_Utilisateur==this.servicedata.sharedData ){
            let yearn = i.date_debut_pret;
            console.log(yearn)
            let x = parseInt(yearn.substring(yearn.length , -1));//année
            let z = parseInt(yearn.substring(8.2 )) ; //jour
            let r = parseInt(yearn.substring(5.2))//mois
            let ndate = new Date(x ,r-1 , z);
           
            if( thisdate < ndate || i.etatPret==0)
            this.test = false;
           // console.log(this.test);
          }
        }
      });

     // this.update();
  
    }

  p(){
    const date = new Date();
    const formattedDate = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
    });

    const dateParts = formattedDate.split('-'); // séparer la chaîne de caractères en parties
    let day = parseInt(formattedDate[1]); // extraire l'année en tant que nombre
    let month = parseInt(formattedDate[4])-1; // extraire le mois en tant que nombre et soustraire 1 (les mois commencent à 0)
    console.log(month);
    let d = formattedDate.substring(0,2)
    day = parseInt(d);
     this.datedeb = new Date(2023 , month+1 , 1);

    let finmonth = parseInt(this.t) + month +1
    console.log(finmonth)
     this.datefin = new Date(2023 , finmonth , 1)

     this.formattedDatee = this.datedeb.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
      });


       this.formattedDat = this.datefin.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
        });
       
  }

  AjouterPret(){
    const date = new Date();
    const formattedDate = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
    });

    const dateParts = formattedDate.split('-'); // séparer la chaîne de caractères en parties
    let day = parseInt(formattedDate[1]); // extraire l'année en tant que nombre
    let month = parseInt(formattedDate[4])-1; // extraire le mois en tant que nombre et soustraire 1 (les mois commencent à 0)
    console.log(month);
    let d = formattedDate.substring(0,2)
    day = parseInt(d);
     this.datedeb = new Date(2023 , month+2 , 1);
      console.log(this.datedeb);
    let finmonth = parseInt(this.t) + month +2
    console.log(finmonth)
     this.datefin = new Date(2023 , finmonth , 1)

     this.formattedDatee = this.datedeb.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
      });


       this.formattedDat = this.datefin.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
        });

    this.d.versement = this.somme/this.t;
    this.d.mat_pret=this.servicedata.sharedData * 2;
    this.d.utilisateur.mat_Utilisateur=this.servicedata.sharedData;
    this.d.somme_pret = this.somme;
    this.d.date_debut_pret = this.datedeb;
    console.log( this.d.date_debut_pret)
    this.d.date_fin_pret = this.datefin;
    this.d.etatPret = 0;
    if(this.t==6){
      this.d.type_pret = "Pret à court terme"
    }
    else if(this.t==12){
      this.d.type_pret = "Pret à long terme"
    }
    console.log(this.d);
    if(this.somme==0 || this.somme==null){
        alert("Somme Invalide")
    }
    else{
      this.servicepret.addPret(this.d).subscribe(data=>{
        console.log(data);
     
       },err=>console.log(err)
      
       );
    
   
let x = 0 ;
  while(x<this.t){
    this.mens.utilisateur.mat_Utilisateur = this.servicedata.sharedData;
    this.da = new Date(2023 , month+2+x , 1);
    this.mens.clecompose.date = this.da;
    this.mens.etat = "0";
    this.mens.clecompose.id = this.servicedata.sharedData;
      this.mesnsualiteservice.addm(this.mens).subscribe(data=>{
         console.log(data);
      });
      x++;
  }
       


   location.reload(); 
  }
}

  update(){

    this.mesnsualiteservice.getm().subscribe(data=>{
      this.listPret = data ;
     let nbr=0 ;
      for(let l of this.listPret){
        let x = parseInt(l.clecompose.date.substring(l.clecompose.date.length , -1));//année
        let z = parseInt(l.clecompose.date.substring(8.2 )) ; //jour
        let y = parseInt(l.clecompose.date.substring(5.2))//mois
        let ndate = new Date(x ,y-1 , z);
        console.log(ndate);
        let r = new Date();
       // console.log(r);

       if(ndate<r && this.servicedata.sharedData == l.utilisateur.mat_Utilisateur){
           l.etat = 1;
           this.mesnsualiteservice.addm(l).subscribe();
       }

         if(this.servicedata.sharedData == l.utilisateur.mat_Utilisateur  && l.etat==1){
           nbr++;
         }
      }
      
        this.servicepret.getpret(this.servicedata.sharedData*2).subscribe(data=>{
          this.z = data ;
          if(nbr==12 || nbr==6){
          this.z.etatPret=1;
          this.mesnsualiteservice
          }
          else
          this.z.etatPret=0;

          this.servicepret.addPret(this.z).subscribe(data=>{
            console.log(data);
          });
        })
     
    });

  }

}
