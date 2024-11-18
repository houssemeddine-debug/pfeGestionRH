import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/classe/employer';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';

@Component({
  selector: 'app-menu-paie',
  templateUrl: './menu-paie.component.html',
  styleUrls: ['./menu-paie.component.css']
})
export class MenuPaieComponent implements OnInit {

  gestionnaire : any ;
  gest : any;
  ss : any
  Grh : Employer = new Employer();
  id : any ;
  constructor(private dataService : DataServiceService ,  private servicegestionnaire :EmployerService) { }

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
     // this.deletegestionnaire(this.id);
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
