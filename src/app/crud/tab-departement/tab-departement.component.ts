import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Departement } from 'src/app/classe/departement';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { SuccrsaleService } from 'src/app/service-directeur/succrsale.service';
import { DepartementService } from 'src/app/service-gestionnaire-rh/departement.service';


@Component({
  selector: 'app-tab-departement',
  templateUrl: './tab-departement.component.html',
  styleUrls: ['./tab-departement.component.css']
})
export class TabDepartementComponent implements OnInit {
  ml : any ;
  dep : any;
  a : any ;
  b  : any ;
  departement: Departement = new Departement();
  departement1: Departement = new Departement();
   s : any;
   d  : any;
   q : any ;
   id : any ;
   maListeA: any[] = [];
   d1 : any ;
   r : any ;
  constructor(private departementservice:DepartementService , private router : Router  , private succursalservice : SuccrsaleService , 
    private servicedata : DataServiceService , private serviceemployer : EmployerService 
    , private gestionnaireservice : EmployerService) { 


  }

  ngOnInit(): void {
     this.s = this.servicedata.sharedData;

         this.gestionnaireservice.getgestionnaire(this.s).subscribe(data=>{
            this.q = data ;
           
            this.id = this.q.succursale.mat_succursale ;
           
            this.departementservice.getDepartement()
            .subscribe(data=>{
              this.dep=data;
              for(let key of this.dep){
                 if(key.succursale.mat_succursale == this.id){
                   this.maListeA.push(key);
                 }
              }
           },err=>{
             console.log(err);
           });
         });
  }

  afficherdepartement(id : number){
      this.departementservice.getdepartement(id).subscribe(data=>{
        this.a = data ;
        this.departement1.id = this.a.id;
        this.departement1.nom_departement = this.a.nom_departement;
        this.departement1. email_departement = this.a.email_departement ;
        this.departement1.succursale.mat_succursale = this.a.succursale.mat_succursale;
      });
  }

  alpha(value: string): boolean {
    const regex = /^[a-zA-Z]+$/;  // Expression régulière pour vérifier les caractères alphabétiques uniquement
  
    return regex.test(value);
  }

  isValidEmailFormat(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  savedepartement(x : any){
      this.r = x ;
    if(this.r.nom_departement == null || this.r.email_departement == null){
      alert("Champs Obligatoire");
    }
    else if(this.alpha(this.r.nom_departement)==false){
      alert("Nom Département doit etre alphabétique");
    }
    else  if(this.isValidEmailFormat(this.r.email_departement)==false){
      alert(" Format E-mail Invalide");
    }
else{

  this.departementservice.getDepartement().subscribe(data=>{
    this.d1 = data ;
    let n = 0 ;
    for(let k of this.d1){
      n++ ;
    }
    this.serviceemployer.getgestionnaire(this.s).subscribe(data=>{
     this.d = data ;
     console.log(this.d);
     x.id = n+39 ;
      x.succursale= this.d.succursale;
      console.log(x);
      this.departementservice.addDepartement(x).subscribe(data=>{
        console.log(data);
        window.location.reload();
      }) 
  });
 })
}
  }
  deleteDepartement(id : any  ){
    this.departementservice.DeleteDepartement(id).subscribe( data =>{
      console.log(data);
        },   err=> console.log(err)
        );
  }

  env(id:number){
    this.ml = id; 
 }

}
