import { Component, OnInit } from '@angular/core';
import { CongeService } from '../service-gestionnaire-rh/conge.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-nav-emp-conge',
  templateUrl: './nav-emp-conge.component.html',
  styleUrls: ['./nav-emp-conge.component.css']
})
export class NavEmpCongeComponent implements OnInit {

  user : any;
  fo: any ;
  a : any ;
  deb :any ;
  d : any ;
  f :any
  fin : any; 
  constructor( private serviceconge : CongeService , private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.user = this.dataService.sharedData;
   
    this.serviceconge.getConge().subscribe(data=>{
      this.fo=data;
      for(let key of this.fo){
        if(key.utilisateur.mat_Utilisateur == this.user){
           this.a = key ;
           this.deb = this.a.date_debut_conge;
           this.d = this.deb.substr(0,10);
           this.fin = this.a.date_fin;
           this.f = this.fin.substr(0,10);

        }
        
      }
 
    } , err=> console.log(err));
 
  }

 

  oo(){
    window.location.reload();
  }

}
