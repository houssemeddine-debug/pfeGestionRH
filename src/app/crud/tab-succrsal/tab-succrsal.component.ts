import { Component, Input, OnInit } from '@angular/core';
import { Departement } from 'src/app/classe/departement';
import { Succrsale } from 'src/app/classe/succrsale';
import { DataServiceService } from 'src/app/data-service.service';
import { SocieteService } from 'src/app/service-directeur/societe.service';
import { SuccrsaleService } from 'src/app/service-directeur/succrsale.service';
import { DepartementService } from 'src/app/service-gestionnaire-rh/departement.service';

@Component({
  selector: 'app-tab-succrsal',
  templateUrl: './tab-succrsal.component.html',
  styleUrls: ['./tab-succrsal.component.css']
})
export class TabSuccrsalComponent implements OnInit {

  k : any;
  d : Departement = new Departement();
  succrsale : any ;
  u : any;
  a : any ;
  s : Succrsale = new Succrsale();
  f : any ;
  su : Succrsale = new Succrsale();
 nbr : any = 0 ;
 liste : any [] = [];
 listeS : any[] = [] ; 
 r : any ;
 ze : any ;
 ma : any ;
  constructor( private servicesuccrsale : SuccrsaleService , private servicedeparetement : DepartementService ,
    private societeservice : SocieteService , private dataservice : DataServiceService) { }

  ngOnInit(): void {

    this.servicesuccrsale.getSuccrsale()
      .subscribe(data=>{
         this.succrsale=data;
         for(let key of this.succrsale){
          if(key.societe1.directeur1.ncin==this.dataservice.sharedData){
            this.liste.push(key);
        }
         }
      },err=>{
        console.log(err);
      });

      this.societeservice.getS()
      .subscribe(data=>{
         this.a=data;
         for(let key of this.a){
          if(key.directeur1.ncin==this.dataservice.sharedData){
              this.listeS.push(key);
          }
         }
      },err=>{
        console.log(err);
      })
    

  }

  isNumerique(value:any):boolean {

    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  alpha(value: string): boolean {
    const regex = /^[a-zA-Z]+$/;  // Expression régulière pour vérifier les caractères alphabétiques uniquement
  
    return regex.test(value);
  }

  isValidEmailFormat(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
 

  saveSuccrsale(x : Succrsale){

    this.r = x.mat_succursale ;
    if(x.mat_succursale == null || x.adrese_succursale  == null || x.email_succursale == null|| x.nom_succursale == null
      || x.societe1.mat_societe == null){
      alert("Touts les champs sont obligatoire!")
    }
    else if  (x.mat_succursale == null) {
      alert("Matricule SVP!")
     } 
     else if  (this.isNumerique(x.mat_succursale )==false) {
      alert("Matricule doit etre numerique ")
     }
     else if(this.r.length != 6){
      console.log(this.r)
      alert("Matricule doit etre composé de 6 chiffres ")
     }
     else if(this.r[0]=='0'){
      alert("Matricule ne doit pas commancer par 0");
     }
     else if(this.alpha(x.nom_succursale)==false){
      alert("Le Nom doit etre alphabétique");
    }
    else if(this.isValidEmailFormat(x.email_succursale)== false)
    alert(" E-mail Invalide");
    else{
      this.servicesuccrsale.getsuccrsale(x.mat_succursale).subscribe(data=>{
         if(data == null){

          this.servicesuccrsale.addSuccrsale(x).subscribe(data=>{
            console.log(data);
          },
          err=> console.log(err));
      
          this.servicedeparetement.getDepartement().subscribe(data=>{
            this.f = data ;
            
            for(let key of this.f)
              this.nbr++ ;
      
              console.log(this.nbr);
              this.d.id = this.nbr+5 ;
               this.ma = this.d.id ;
              this.d.email_departement = "departementRH"+ this.ma.toString()+"@gmail.com" ;
              this.d.nom_departement = "DepartementRh"
              this.d.succursale.mat_succursale = x.mat_succursale ;
              console.log(this.d.succursale.mat_succursale);
              this.servicedeparetement.addDepartement(this.d).subscribe(data=>{
                console.log(data);
                alert("Traitement fait avec succés")
                window.location.reload();
              },
              err=> console.log(err)
              );
         })
  
         
         }
         else{
          alert("Matricule déja existe");
        }
      })
      
    }
   
  }
 
    deleteSuccrsale(id : any  ){
      this.servicesuccrsale.DeleteSuccrsale(id).subscribe( data =>{
        console.log(data);
          },   err=> console.log(err)
          );
    }

    affichersuccursale(id : number){
      this.servicesuccrsale.getsuccrsale(id).subscribe(data=>{
        this.u = data ;
        this.su.adrese_succursale = this.u.adrese_succursale;
        this.su.email_succursale = this.u.email_succursale;
        this.su.mat_succursale = this.u.mat_succursale;
        this.su.nom_succursale = this.u.nom_succursale;
        this.su.societe1.mat_societe = this.u.societe1.mat_societe;
        
      })
    }

    env(id:number){
      this.k = id; 
   }

setsucr(id :any){

  this.ze = id;
}

   saveSuccrsale1(x : Succrsale){

   // x.mat_succursale=this.ze ;
    this.r = x.mat_succursale ;
    console.log(this.r);
    if(x.mat_succursale == null || x.adrese_succursale  == null || x.email_succursale == null|| x.nom_succursale == null
      || x.societe1.mat_societe == null){
      alert("Touts les champs sont obligatoire!")
    }
     else if(this.alpha(x.nom_succursale)==false){
      alert("Le Nom doit etre alphabétique");
    }
    else if(this.isValidEmailFormat(x.email_succursale)== false)
    alert(" E-mail Invalide");
    else{
      this.servicesuccrsale.getsuccrsale(x.mat_succursale).subscribe(data=>{
         if(data == null){

          this.servicesuccrsale.addSuccrsale(x).subscribe(data=>{
            console.log(data);
            alert("Traitement fait avec succés")
            window.location.reload();
          },
          err=> console.log(err));         
         }

         this.servicedeparetement.getDepartement().subscribe(data=>{
          this.f = data ;
          
          for(let key of this.f)
            this.nbr++ ;
    
            console.log(this.nbr);
            this.d.id = this.nbr+5 ;
             this.ma = this.d.id ;
            this.d.email_departement = "departementRH"+ this.ma.toString()+"@gmail.com" ;
            this.d.nom_departement = "DepartementRh"
            this.d.succursale.mat_succursale = x.mat_succursale ;
            console.log(this.d.succursale.mat_succursale);
            this.servicedeparetement.addDepartement(this.d).subscribe(data=>{
              console.log(data);
              alert("Traitement fait avec succés")
              window.location.reload();
            },
            err=> console.log(err)
            );
       })
        
      })
      
    }
   
  }

  }
