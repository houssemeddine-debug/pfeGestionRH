import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/classe/employer';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { SuccrsaleService } from 'src/app/service-directeur/succrsale.service';

@Component({
  selector: 'app-menu-gestionnaire-rh',
  templateUrl: './menu-gestionnaire-rh.component.html',
  styleUrls: ['./menu-gestionnaire-rh.component.css']
})
export class MenuGestionnaireRhComponent implements OnInit {

  gestionnaire : any ;
  gest : any;
  ss : any
  Grh : Employer = new Employer();
  id : any ;
 
  constructor(private dataService : DataServiceService ,  private servicegestionnaire :EmployerService , private servicesuccrsale : SuccrsaleService) { }

  ngOnInit(): void {
    this.id = this.dataService.sharedData ;
  }

  affichergestionnaire(id :number){
    this.servicegestionnaire.getgestionnaire(id).subscribe(data=>{
      this.gest = data ;
      this.Grh.ncin = this.gest.ncin;
      this.Grh.nom = this.gest.nom;
      this.Grh.prenom = this.gest.prenom;
      this.Grh.mdp = this.gest.mdp;
      this.Grh.role = this.gest.role;
      this.Grh.succursale.mat_succursale = this.gest.succursale.mat_succursale;
     console.log(this.Grh);
    });
  }

  saveGestionnaire(x : Employer){
    console.log(x);
    this.servicegestionnaire.addGestionnaire(x).subscribe(data=>{
      console.log(data);
    })  
  }

  deletegestionnaire(id : number){

    this.servicegestionnaire.DeleteGestionnaire(id).subscribe(data=>{
      console.log('ok');
    })
   }
}
