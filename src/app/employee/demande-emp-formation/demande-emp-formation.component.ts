import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/classe/formation';
import { DataServiceService } from 'src/app/data-service.service';
import { FormationService } from 'src/app/service-gestionnaire-rh/formation.service';

@Component({
  selector: 'app-demande-emp-formation',
  templateUrl: './demande-emp-formation.component.html',
  styleUrls: ['./demande-emp-formation.component.css']
})
export class DemandeEmpFormationComponent implements OnInit {

  formation : Formation = new Formation();
  fs : any ;
  x : number |undefined;
  f : any ;
  user : any ;
  test = 0 ;
  constructor( private serviceformation : FormationService ,  private dataservice : DataServiceService) { }

  ngOnInit(): void {
    this.user = this.dataservice.sharedData;
    console.log(this.user);
  }

  saveFormation(){

    if(this.formation.nom_formation==null || this.formation.sujet_formation==null || this.formation.date_formation==null ){
      alert("tout les champs sont obligatoires")
    }
   
    else{
      this.serviceformation.getFormation().subscribe(data=>{
        this.f=data;
        for(let key of this.f){
          if(key.utilisateur.mat_Utilisateur == this.dataservice.sharedData && key.role=='d'){
             this.serviceformation.DeleteFormation(key.mat_formation).subscribe(data=>{
              console.log("ok");
             })
          }
          console.log(key);
        }
   
      } , err=> console.log(err));
  
  
      this.formation.role = "d";
      this.formation.utilisateur.mat_Utilisateur=this.dataservice.sharedData;
      console.log(this.dataservice.sharedData);
      this.serviceformation.addFormation(this.formation).subscribe(data=>{
          console.log(data);
          alert("Demande envoyée avec succés")
                window.location.reload();
        },
        err=> console.log(err));
    }
   
  }

 



}
