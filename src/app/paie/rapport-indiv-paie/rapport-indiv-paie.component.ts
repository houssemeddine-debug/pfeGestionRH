import { Component, OnInit } from '@angular/core';
import { MensualiteService } from 'src/app/service-gestionnaire-paie/mensualite.service';
import { AssiduiteService } from 'src/app/service-gestionnaire-rh/assiduite.service';
import { CongeService } from 'src/app/service-gestionnaire-rh/conge.service';
import { EmployeeService } from 'src/app/service-gestionnaire-rh/employee.service';
import { PretService } from 'src/app/service-gestionnaire-rh/pret.service';

@Component({
  selector: 'app-rapport-indiv-paie',
  templateUrl: './rapport-indiv-paie.component.html',
  styleUrls: ['./rapport-indiv-paie.component.css']
})
export class RapportIndivPaieComponent implements OnInit {

  abs : any ;
  ndep : any ;
  c : any ;
  p : any ;
  m : any ;
  deb : any ;
  fin : any ;
  constructor( private employeeservice : EmployeeService , private assiduiteservice : AssiduiteService 
     , private congeservice : CongeService , private pretservice : PretService , 
     private mensualiteservice : MensualiteService) { }

  ngOnInit(): void {
  }

  test(){
    console.log(this.deb);
    console.log(this.fin);
  }

  nbrAbs(id : any ){

     this.assiduiteservice.getAssiduite().subscribe(data=>{
      this.abs = data ;
      for(let key of this.abs){
        console.log(key.clecompose.id);
      }
     })
    
  }

  NomDep(){

  }

  conge(){

  }

  pret(){

  }








}
