import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Societe } from 'src/app/classe/societe';
import { DataServiceService } from 'src/app/data-service.service';
import { DirecteurRHService } from 'src/app/service-directeur/directeur-rh.service';
import { SocieteService } from 'src/app/service-directeur/societe.service';
import { SuccrsaleService } from 'src/app/service-directeur/succrsale.service';

@Component({
  selector: 'app-tab-company',
  templateUrl: './tab-company.component.html',
  styleUrls: ['./tab-company.component.css']
})
export class TabCompanyComponent implements OnInit {

  msg : any ;
  e : any ;
  dep : any;
  societe : Societe = new Societe() ;
 r : any ;
  fo: {[key: string]: any} = {foo: 'bar'};
   myKey: string = 'foo';
   myValue: any = this.fo[this.myKey];
   s1 : any;
   s : Societe = new Societe() ;
   liste : any[] = [];
   test = 0 ;
  test2= 0 ; ;test3 = 0 ;
  constructor(private societeservice : SocieteService , private router : Router , private route: ActivatedRoute ,
     private servicesuccursale : SuccrsaleService , private dataservice: DataServiceService , private directeurservice : DirecteurRHService) { 
  }
  
  ngOnInit(): void {
     this.societeservice.getS()
      .subscribe(data=>{ 
         this.dep=data;
         for(let key of this.dep){
          if(key.directeur1.ncin==this.dataservice.sharedData){
              this.liste.push(key);
          }
         }
      },err=>{
        console.log(err);
      })


  }
 
  // saveS(x ){

  //   this.societeservice.addS(this.societe).subscribe(data=>{
  //       console.log(data);
  //     },
  //     err=> console.log(err));
  // }

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
 
 
  saveS1(x : Societe){
    // this.directeurservice
    console.log(x.mat_societe);
    x.directeur1.ncin = this.dataservice.sharedData ;
    console.log(x);
    this.r = x.mat_societe ;
    if(x.mat_societe == null || x.adrese_societe == null || x.email_societe == null|| x.nom_societe == null){
      alert("Touts les champs sont obligatoire!")
    }
    else{

      if  (this.isNumerique(x.mat_societe )==false) {this.test=1
        this.msg="Matricule doit etre numérique"}
      else if(this.r.length != 6)
      {this.test=1
        this.msg="Matricule doit etre 6 chiffre"
      }
      else if(this.r[0]=='0')
      {this.test=1
      this.msg="Matricule Ne commence pas par 0"}
      else{
        this.test=0;
      }
      if(this.alpha(this.r.nom_societe)==false){this.test2=1}
      else{
        this.test2=0;
      }
      if(this.isValidEmailFormat(x.email_societe)== false)
      {this.test3=1}
      else{
        this.test3=0;
      }
     
    }
    console.log(this.test +"" + this.test2+""+this.test3);
     if(this.test==0 && this.test2==0 &&this.test3==0 ){
      console.log("hi");
    this.societeservice.gets(x.mat_societe).subscribe(data=>{
      console.log(data)
      if(data == null){
        this.societeservice.addS(x).subscribe(data=>{
          console.log(data);
          alert("Traitement fait avec succés")
          window.location.reload();
        },
       );
    }
        else{
          alert("Matricule déja existe");
        }
    });
    
  }
  }


  update(id :number){
  this.societeservice.gets(id).subscribe(data=>{
    this.s1 = data ;
    this.s.mat_societe = this.s1.mat_societe;
    this.s.adrese_societe = this.s1.adrese_societe ;
    this.s.email_societe = this.s1.email_societe ;
    this.s.nom_societe = this.s1.nom_societe ;
  })

  }
  
  env(id:number){
     this.e = id; 
  }
  

  deleteS(id : any){
     this.societeservice.DeleteS(id).subscribe( data =>{
       console.log(data);
         },   err=> console.log(err)
         );
    console.log(id);

  }


  
  saveS(x : Societe){
    // this.directeurservice
    console.log(x.mat_societe);
    x.directeur1.ncin = this.dataservice.sharedData ;
    console.log(x);
    this.r = x.mat_societe ;
    if(x.mat_societe == null || x.adrese_societe == null || x.email_societe == null|| x.nom_societe == null){
      alert("Touts les champs sont obligatoire!")
    }
    else{

      if(this.alpha(this.r.nom_societe)==false){this.test2=1}
      else{
        this.test2=0;
      }
      if(this.isValidEmailFormat(x.email_societe)== false)
      {this.test3=1}
      else{
        this.test3=0;
      }
     
    }
    console.log(this.test +"" + this.test2+""+this.test3);
     if(this.test==0 && this.test2==0 &&this.test3==0 ){
    
        this.societeservice.addS(x).subscribe(data=>{
          console.log(data);
          alert("Traitement fait avec succés")
          window.location.reload();
        }
       );
    
      
  
    
  }
  }




}
  

    
 
  

