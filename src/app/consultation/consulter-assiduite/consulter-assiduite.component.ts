import { Component, OnInit } from '@angular/core';
import { Assiduite } from 'src/app/classe/assiduite';
import { Departement } from 'src/app/classe/departement';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';
import { SuccrsaleService } from 'src/app/service-directeur/succrsale.service';
import { AssiduiteService } from 'src/app/service-gestionnaire-rh/assiduite.service';
import { DepartementService } from 'src/app/service-gestionnaire-rh/departement.service';

@Component({
  selector: 'app-consulter-assiduite',
  templateUrl: './consulter-assiduite.component.html',
  styleUrls: ['./consulter-assiduite.component.css']
})
export class ConsulterAssiduiteComponent implements OnInit {

  q : any ;
   id : any ;
   maListeA: any[] = [];
  p :any;
  a : any
  e:any
  maListeAa: any[] = [];
  departement : any ;
  d : any ;
  s : any ;
  // l : Assiduite = new Assiduite();
  maListe: any[] = [];
  moisActuel : any ;
  constructor(private servicedepartement : DepartementService , private servicegestionnaire : GestionnaireService , 
    private serviceassiduite : AssiduiteService , private servicedata : DataServiceService , 
    private gestionnaireservice : EmployerService) { }

  ngOnInit(): void {

    this.s = this.servicedata.sharedData;

    this.gestionnaireservice.getgestionnaire(this.s).subscribe(data=>{
       this.q = data ;
      
       this.id = this.q.succursale.mat_succursale ;
      
       this.servicedepartement.getDepartement()
       .subscribe(data=>{
         this.departement=data;
         for(let key of this.departement){
            if(key.succursale.mat_succursale == this.id){
              this.maListeAa.push(key);
            }
         }
      },err=>{
        console.log(err);
      });
    });
  }

  vers(){
    this.servicegestionnaire.getGestionnaire().subscribe(data=>{
      this.p=data ;
      for (let key of this.p){
        if(key.departement.id == this.d)
        this.maListe.push(key);
      }
    })
  }

  versEmp(id : number){
    const date = new Date();
    const formattedDate = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
    });
    //const moisActuel = new Date().getMonth() + 1;
    // const dernierMois = new Date().getMonth();
    // || key.clecompose.id==id && sdate==dernierMois.toString()
    this.serviceassiduite.getAssiduite().subscribe(data=>{
      this.e=data ;
      for (let key of this.e){
        let sdate = key.clecompose.date.substr(6,1)
         if(key.utilisateur.mat_Utilisateur==id && sdate==this.moisActuel.toString() ){
          // this.l.clecompose.date=key.clecompose.date;
          // this.l.clecompose.id = key.clecompose.id;
          // this.l.etat = key.etat ;
         this.maListeA.push(key);
       }
      }
    })
  }
  
}
