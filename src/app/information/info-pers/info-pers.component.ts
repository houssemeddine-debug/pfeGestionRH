import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classe/employee';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployeeService } from 'src/app/service-gestionnaire-rh/employee.service';

@Component({
  selector: 'app-info-pers',
  templateUrl: './info-pers.component.html',
  styleUrls: ['./info-pers.component.css']
})
export class InfoPersComponent implements OnInit {

  fo: {[key: string]: any} = {foo: 'bar'};
  myKey: string = 'foo';
  myValue: any = this.fo[this.myKey];
  k : number = 0;
  e:any ;
  
  constructor(private employeeservice : EmployeeService , private dataService: DataServiceService) { }
   user : any

  ngOnInit(): void {
   this.user = this.dataService.sharedData;
   this.dataService.setData(this.user);
    this.employeeservice.gete(this.user)
    .subscribe(data=>{
      console.log(data)
       this.e=data;
        console.log(this.e);
    },err=>{
      console.log(err);
    })

   

  }

  saveemployee(x : Employee){  
    this.k = 1 ;
   
    x.adresse_Utilisateur = this.e.adresse_Utilisateur ;
    x.departement.id = this.e.departement.id ;
    x.email_Utilisateur = this.e.email_Utilisateur ;
    x.grade_Utilisateur = this.e.grade_Utilisateur ; ;
    x.mat_Utilisateur = this.e.mat_Utilisateur ;
    x.mdp_Utilisateur = this.e.mdp_Utilisateur ;
    x.nom_Utilisateur = this.e.nom_Utilisateur;
    x.prenom_Utilisateur = this.e.prenom_Utilisateur ;
    x.role_Utilisateur = this.e.role_Utilisateur ;
    x.salaire_Utilisateur = this.e.salaire_Utilisateur ;
    this.deleteemployee(this.dataService.sharedData);
    this.employeeservice.addE(x).subscribe(data=>{
      console.log(data);
      setTimeout(() => {
        // Recharger la page
        location.reload();
      },1000);
     
      alert("Traitement fait avec succés")
      window.location.reload();
    })
  }

  deleteemployee(id : any){

    this.employeeservice.DeleteE(id).subscribe(data=>{
      console.log('ok');
    })
  }
}
