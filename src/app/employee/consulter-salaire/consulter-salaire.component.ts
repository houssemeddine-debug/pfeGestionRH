import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';
import { AssiduiteService } from 'src/app/service-gestionnaire-rh/assiduite.service';
import { PretService } from 'src/app/service-gestionnaire-rh/pret.service';

@Component({
  selector: 'app-consulter-salaire',
  templateUrl: './consulter-salaire.component.html',
  styleUrls: ['./consulter-salaire.component.css']
})
export class ConsulterSalaireComponent implements OnInit {

  clickedOnce: boolean = false;
  salaire :any;
  nbr : number = 0;
  listPret : any;
  a : any;
  m : any
  g : any ;
  x : any ;
  f : any ;
  brut : any;
  versement : any = 0;
  constructor( private servicedata : DataServiceService , private servicegestionnaire : GestionnaireService ,
    private assiduiteservice : AssiduiteService ,  private servicepret : PretService) { }

  ngOnInit(): void {
    this.servicegestionnaire.getgestionnaire(this.servicedata.sharedData).subscribe(data =>{
     this.g = data;      
    });
  }


  afficher(){
    if (!this.clickedOnce) {
      this.assiduiteservice.getAssiduite().subscribe(data=>{
        this.a = data ;
        for(let key of this.a){
          let ch="";
           ch = key.clecompose.date.substr(6,1);
           if(ch==this.m && this.servicedata.sharedData == key.clecompose.id && key.etat == 'A'){
            this.nbr++;
           }
        }


        this.servicepret.getPret().subscribe(data=>{
          this.listPret = data ;
          console.log(this.listPret)
          for(let i of this.listPret){
             let a = parseInt(i.date_fin_pret.substr(0,4));
             let b = parseInt(i.date_debut_pret.substr(0,4));
             let x = new Date();
             const date = new Date();
             let z = date.getFullYear();
             let r = new Date(z,this.m-1,1);
             let rd = new Date(b,parseInt(i.date_debut_pret[6])-1,1)
             let rf = new Date(a,parseInt(i.date_fin_pret[6])-1,1);
             if(r>x){
              alert("Mois Invalide")
              window.location.reload();
             }
            if(i.utilisateur.mat_Utilisateur==this.servicedata.sharedData && i.etatPret==0 
            && (rd <= r) && (r <=rf) ) {
               this.versement = i.versement;
            }
          }
       


        this.servicegestionnaire.getgestionnaire(this.servicedata.sharedData).subscribe(data =>{
          this.x = data; 
             this.salaire = (this.x.salaire_Utilisateur)/26;
          
          this.f = this.salaire * this.nbr +  this.versement;
          console.log(this.f);
          this.brut = this.x.salaire_Utilisateur - this.f ;
         });
      });
     
    });
   
      
      this.clickedOnce = true;
    }else{
      location.reload();
    }
  }


  

}
