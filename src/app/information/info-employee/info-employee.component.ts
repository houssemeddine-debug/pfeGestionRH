import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';
import { PretService } from 'src/app/service-gestionnaire-rh/pret.service';

@Component({
  selector: 'app-info-employee',
  templateUrl: './info-employee.component.html',
  styleUrls: ['./info-employee.component.css']
})
export class InfoEmployeeComponent implements OnInit {

  employee : any ;
  pret : any ;
  deb : any ;
  d : any; 
  fin : any ;
  f : any ;
  constructor( private servicegestionnaire : GestionnaireService , private dataservice : DataServiceService  ,
     private pretservice : PretService) { }

  ngOnInit(): void {
    this.servicegestionnaire.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
      this.employee = data ;
    });
 
    this.pretservice.getpret(this.dataservice.sharedData*2).subscribe(data=>{
      this.pret = data ;
      this.deb = this.pret.date_debut_pret;
      this.d = this.deb.substr(0,10);
      this.fin = this.pret.date_fin_pret;
      this.f = this.fin.substr(0,10);
    })

  }

}
