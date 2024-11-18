import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/service-gestionnaire-rh/departement.service';

@Component({
  selector: 'app-table-departement',
  templateUrl: './table-departement.component.html',
  styleUrls: ['./table-departement.component.css']
})
export class TableDepartementComponent implements OnInit {
  dep : any;


  constructor(private departementservice:DepartementService  ) { 


  }

  ngOnInit(): void {
   
    this.departementservice.getDepartement()
      .subscribe(data=>{
         this.dep=data;
      },err=>{
        console.log(err);
      })
    

    
  }

 
  }



