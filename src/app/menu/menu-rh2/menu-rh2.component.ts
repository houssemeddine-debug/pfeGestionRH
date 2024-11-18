import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classe/employee';
import { Gestionnaire } from 'src/app/classe/gestionnaire';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';
import { DepartementService } from 'src/app/service-gestionnaire-rh/departement.service';
import { EmployeeService } from 'src/app/service-gestionnaire-rh/employee.service';

@Component({
  selector: 'app-menu-rh2',
  templateUrl: './menu-rh2.component.html',
  styleUrls: ['./menu-rh2.component.css']
})
export class MenuRh2Component implements OnInit {

  k : any ;
  fo: Employee = new Employee();
  foo : any ;
    q : any ;
    id :any ;
    e : any ;
    r :any ;
  employee : Employee = new Employee();
  dep : any ;
  maListeA: any[] = [];
  maListe : any[] = [];
  test : any ;test2 :any ;test3 :any ;test4 :any ;test5 :any ;test6 :any ;
  test7 :any ; test8 : any ;
  r1 : any ;
  o = 0;
  constructor(private employeeservice : EmployeeService , private gestionnaireservice : EmployerService
    , private dataservice : DataServiceService , private departementservice : DepartementService) { 
  }
  
  ngOnInit(): void {
let v = this.dataservice.sharedData;
console.log(v);
    this.gestionnaireservice.getgestionnaire(v).subscribe(data=>{
       this.q = data ;
      
       this.id = this.q.succursale.mat_succursale ;
      console.log(this.id);
     this.employeeservice.getE()
      .subscribe(data=>{
         this.r=data;
         console.log(this.r)
         for(let key of this.r){
            if(key.departement.succursale.mat_succursale == this.id){
              this.maListeA.push(key);
            }
         }
      },err=>{
        console.log(err);
      });
    });

  this.departementservice.getDepartement().subscribe(data=>{
    this.dep = data ;
    for(let key of this.dep){
      if(key.succursale.mat_succursale == this.id){
        this.maListe.push(key);
      }
   }
  },err=>{
    console.log(err);
  });


  }

  isNumerique(value:any):boolean {

    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  alpha(value: string | undefined): boolean {
    if (value === undefined) {
      return false;
    }
    
    const regex = /^[a-zA-Z]+$/; // Expression régulière pour vérifier les caractères alphabétiques uniquement
  
    return regex.test(value);
  }
  
  isValidEmailFormat(email: string | undefined): boolean {
    if (email === undefined) {
      return false;
    }
    
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  
  isSecurePassword(value: string | undefined): boolean {
    if (value === undefined || value.length < 5) {
      return false;
    }
  
    // Vérifier si le mot de passe contient au moins une lettre majuscule et une lettre minuscule
    if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
      return false;
    }
  
    // Vérifier si le mot de passe contient au moins un chiffre
    if (!/[0-9]/.test(value)) {
      return false;
    }
  
    // Vérifier si le mot de passe contient au moins un symbole
    if (!/[!@#$%^&*()]/.test(value)) {
      return false;
    }
  
    return true;
  }
  
 
  saveEmployee(x : Employee){

   
    this.r1 = x.mat_Utilisateur
    if(x.mat_Utilisateur == null || x.nom_Utilisateur == null || x.prenom_Utilisateur == null|| x.role_Utilisateur == null || x.email_Utilisateur == null || x.mdp_Utilisateur == null || x.departement.id == null
        || x.salaire_Utilisateur == null || x.grade_Utilisateur == null || x.mdp_Utilisateur == null || x.adresse_Utilisateur == null){
      alert("Touts les champs sont obligatoire!")
    }
    else{
      if (this.isNumerique(x.mat_Utilisateur )==false || this.r1.length!=6 || this.r1[0]=='0'){this.test=1}
      else{
        this.test=0;
      }
      if(this.alpha(x.nom_Utilisateur)==false){this.test2=1}
      else{
        this.test2=0;
      }
       if(this.alpha(x.prenom_Utilisateur)==false){this.test3=1}
       else{
        this.test3=0;
      }
       if(x.adresse_Utilisateur==null){this.test4=1}
       else{
        this.test4=0;
      }
      if(this.isValidEmailFormat(x.email_Utilisateur)==false){this.test5=1}
      else{
        this.test5=0;
      }
      if(this.alpha(x.role_Utilisateur)==false){this.test6=1}
      else{
       this.test6=0;
     }
       if(this.isSecurePassword(x.mdp_Utilisateur)==false){this.test8=1}
       else{
        this.test8=0;
      }
       if(this.isNumerique(x.salaire_Utilisateur)==false){this.test7=1}  
       else{
        this.test7=0;
       }
    }
    this.o = 1; 
    if(this.test==0 && this.test2==0 &&this.test3==0 &&this.test4==0 &&this.test5==0 &&this.test6==0 &&this.test7==0 &&this.test8==0){
      this.employeeservice.gete(x.mat_Utilisateur).subscribe(data=>{
        if(data!=null){
          alert("Matricule existe déja");
        }
        else{
          this.employeeservice.addE(x).subscribe(data=>{
            console.log(data);
            setTimeout(() => {
              // Recharger la page
              location.reload();
            }, 2000);
            alert("Employé a été ajouter avec succés")
            window.location.reload();
          });
        }
      })
     
     
    }
  }


  afficher(id:number){
    this.employeeservice.gete(id).subscribe(data=>{
      this.foo=data;
      this.fo = this.foo;
     
    } , err=> console.log(err));
  }

  deleteE(id : any){
    this.employeeservice.DeleteE(id).subscribe( data =>{
      console.log(data);
        },   err=> console.log(err)
        );

  }

  env(id:number){
    this.k = id; 
  }

}
