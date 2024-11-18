import { Component, OnInit } from '@angular/core';
import { FormationService } from '../service-gestionnaire-rh/formation.service';
import { DataServiceService } from '../data-service.service';
import { EmployeeService } from '../service-gestionnaire-rh/employee.service';

@Component({
  selector: 'app-nav-emp-formation',
  templateUrl: './nav-emp-formation.component.html',
  styleUrls: ['./nav-emp-formation.component.css']
})
export class NavEmpFormationComponent implements OnInit { 

  fo: any;
  liste : any[] = []
  liste1 : any[] = []
  e :any ;
  a  :any ;
  constructor(private serviceformation : FormationService , private dataservice : DataServiceService , 
    private employeeservice : EmployeeService) { }

  ngOnInit(): void {
    this.employeeservice.gete(this.dataservice.sharedData).subscribe(data=>{
    this.e = data ;
    this.serviceformation.getFormation().subscribe(data=>{
      this.fo=data;
      console.log(this.fo);
      for(let key of this.fo){
        if(key.utilisateur.departement.succursale.mat_succursale== this.e.departement.succursale.mat_succursale){
          this.liste.push(key);
        }
      }
      for(let key of this.fo){
        if(key.utilisateur.departement.succursale.mat_succursale== this.e.departement.succursale.mat_succursale && 
          this.dataservice.sharedData==key.utilisateur.mat_Utilisateur){
          this.liste1.push(key);
        }
      }
    } , err=> console.log(err));
    });
   
  }

  oo(){
    window.location.reload();
  }
  }


