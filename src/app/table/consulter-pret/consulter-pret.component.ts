import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { EmployeeService } from 'src/app/service-gestionnaire-rh/employee.service';
import { PretService } from 'src/app/service-gestionnaire-rh/pret.service';

@Component({
  selector: 'app-consulter-pret',
  templateUrl: './consulter-pret.component.html',
  styleUrls: ['./consulter-pret.component.css']
})
export class ConsulterPretComponent implements OnInit {

  p : any ;
  a : any ;
  list : any [] = [];
  constructor( private pretservice : PretService , private dataservice :  DataServiceService , 
    private gestionnaireservice : EmployerService) { }

  ngOnInit(): void {

  this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{

    this.a = data ;
    this.pretservice.getPret().subscribe(data=>{
      this.p = data ;
      for(let key of this.p){
        if(key.utilisateur.departement.succursale.mat_succursale == this.a.succursale.mat_succursale){
          this.list.push(key);
        }
      }
   });
  })
    
  }

  Setid( id : number){
     this.dataservice.sharedData = id;
  }
}
