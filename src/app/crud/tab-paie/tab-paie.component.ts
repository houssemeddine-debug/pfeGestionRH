import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classe/employee';
import { Employer } from 'src/app/classe/employer';
import { Gestionnaire } from 'src/app/classe/gestionnaire';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';
import { SuccrsaleService } from 'src/app/service-directeur/succrsale.service';
import { DepartementService } from 'src/app/service-gestionnaire-rh/departement.service';
import { EmployeeService } from 'src/app/service-gestionnaire-rh/employee.service';

@Component({
  selector: 'app-tab-paie',
  templateUrl: './tab-paie.component.html',
  styleUrls: ['./tab-paie.component.css']
})
export class TabPaieComponent implements OnInit {

  k : any ;
  a : any ;
  e : Employee = new Employee();
  gestionnaire : any ;
  gest : any;
  ss : any
  Grh : Employer = new Employer();
  Grh1 : Employer = new Employer();
  n : any ;
  liste : any[] = []
  listeS : any[] = []
  l : number = 0;
  o : number = 0;
  test = 0 ;
  test2 :any ;test3 :any ;test4 :any ;test5 :any ;test6 :any ;
  test7 :any ; 
  r : any ;
  az : any ;
  constructor( private servicegestionnaire :EmployerService , private servicesuccrsale : SuccrsaleService , 
    private serviceemployee : EmployeeService , private depservice : DepartementService , private dataservice : DataServiceService) { }

  ngOnInit(): void {
    this.servicegestionnaire.getGestionnaire()
    .subscribe(data=>{
       this.gestionnaire=data;
       for(let key of this.gestionnaire){
        if(key.succursale.societe1.directeur1.ncin==this.dataservice.sharedData){
          this.liste.push(key);
      }
       }
    },err=>{
      console.log(err);
    });


    this.servicesuccrsale.getSuccrsale()
    .subscribe(data=>{
       this.ss=data;
       for(let key of this.ss){
        if(key.societe1.directeur1.ncin==this.dataservice.sharedData){
            this.listeS.push(key);
        }
       }
    },err=>{
      console.log(err);
    })
  }

  affichergestionnaire(id :number){
    this.servicegestionnaire.getgestionnaire(id).subscribe(data=>{
      this.gest = data ;
      this.Grh1.ncin = this.gest.ncin;
      this.Grh1.nom = this.gest.nom;
      this.Grh1.prenom = this.gest.prenom;
      this.Grh1.mdp = this.gest.mdp;
      this.Grh1.role = this.gest.role;
      this.Grh1.email = this.gest.email ;
      this.Grh1.etat = this.gest.etat ;
     
    });
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

  isSecurePassword(value: string): boolean {
    let test = true ;
    // Vérifier si le mot de passe contient au moins 8 caractères
    if (value.length < 5) {
      test = false ;
    }
  
    // Vérifier si le mot de passe contient au moins une lettre majuscule et une lettre minuscule
    if (!/[A-Z]/.test(value) && !/[a-z]/.test(value)) {
      test = false ;
    }
  
    // Vérifier si le mot de passe contient au moins un chiffre
    if (!/[0-9]/.test(value)) {
      test = false ;
    }
  
    // Vérifier si le mot de passe contient au moins un symbole
    if (!/[!@#$%^&*()]/.test(value)) {
      return false;
    }
  
    return test;
  }
 

  saveGestionnaire(x : Employer){
    this.r = x.ncin
    if(x.ncin == null || x.nom == null || x.prenom == null|| x.role == null || x.email == null || x.mdp == null || x.succursale.mat_succursale == null){
      alert("Touts les champs sont obligatoire!")
    }
    else{
      if (this.isNumerique(x.ncin )==false || this.r.length!=6 || this.r[0]=='0'){this.test=1}
      else{
        this.test=0;
      }
      if(this.alpha(x.nom)==false){this.test2=1}
      else{
        this.test2=0;
      }
       if(this.alpha(x.prenom)==false){this.test3=1}
       else{
        this.test3=0;
      }
       if(x.role==null){this.test4=1}
       else{
        this.test4=0;
      }
      if(this.isValidEmailFormat(x.email)==false){this.test5=1}
      else{
        this.test5=0;
      }
       if(this.isSecurePassword(x.mdp)==false){this.test6=1}
       else{
        this.test6=0;
      }
       if(x.succursale.mat_succursale==null){this.test7=1}  
       else{
        this.test7=0;
       }
    }
    if(this.test==0 && this.test2==0 &&this.test3==0 &&this.test4==0 &&this.test5==0 &&this.test6==0 &&this.test7==0){

      this.o = 1 ;
      x.etat = 'A'
      console.log(x);
      this.servicegestionnaire.getgestionnaire(x.ncin).subscribe(data=>{
        this.az = data ;
        if(this.az==null){
          this.servicegestionnaire.addGestionnaire(x).subscribe(data=>{
            console.log(data);
            
            setTimeout(() => {
              // Recharger la page
              location.reload();
            }, 2000);
          })  
          this.uti(x);
        }
        else{
          alert("Matricule déja existe");
         
        }
      })
     
     
    }
    
   
  }

 deletegestionnaire(id : number| undefined){
  this.servicegestionnaire.DeleteGestionnaire(id).subscribe(data=>{
    console.log('ok');
  })
 }

uti(x :Employer ){
  this.e.mat_Utilisateur = x.ncin; 
    this.e.adresse_Utilisateur = "Tunis";
    this.e.email_Utilisateur  = x.email;
     this.e.grade_Utilisateur = 'A' ;
    this.e.mdp_Utilisateur = x.mdp;
    this.e.nom_Utilisateur = x.nom;
     this.e.prenom_Utilisateur = x.prenom ;
     if(x.role=='r')
     this.e.role_Utilisateur = "gestionnaire rh";
     else
     this.e.role_Utilisateur = "gestionnaire paie";
     this.e.salaire_Utilisateur = 2200;

     this.depservice.getDepartement().subscribe(data=>{
      this.a = data ;
     for(let key of this.a){
        if(key.succursale.mat_succursale==x.succursale.mat_succursale && key.nom_departement=="DepartementRh"){
         this.e.departement.id = key.id;
        }
     }
     this.serviceemployee.addE(this.e).subscribe(data=>{
      console.log(data);
      alert("Gestionniaire a été ajouter avec succés")
    window.location.reload();
    });
   });
    
}

desactive(id : any){

  this.l = 1;
  this.servicegestionnaire.getgestionnaire(id).subscribe(data=>{
     this.n = data ;
     if(this.n.etat=='A')
     this.n.etat = 'D';
     else 
     this.n.etat = 'A'
     this.servicegestionnaire.addGestionnaire(this.n).subscribe(data=>{
      setTimeout(() => {
        // Recharger la page
        location.reload();
      }, 2000);
      window.location.reload();
     });
  });

}

env(id:number){
  this.k = id; 
}
  
}
