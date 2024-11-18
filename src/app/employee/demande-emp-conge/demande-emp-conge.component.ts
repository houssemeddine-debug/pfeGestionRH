import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/classe/conge';
import { Gestionnaire } from 'src/app/classe/gestionnaire';
import { DataServiceService } from 'src/app/data-service.service';
import { CongeService } from 'src/app/service-gestionnaire-rh/conge.service';

@Component({
  selector: 'app-demande-emp-conge',
  templateUrl: './demande-emp-conge.component.html',
  styleUrls: ['./demande-emp-conge.component.css']
})
export class DemandeEmpCongeComponent implements OnInit {

  conge : Conge = new Conge();
  fs : any ;
  x : number |undefined;
  user : any
  fo :  any;
  constructor(private serviceconge : CongeService , private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.user = this.dataService.sharedData;
    console.log(this.user);
  }

  DateV( ch : Date, ch1: Date){
    return  ch>ch1 ;
  }
  saveConge(){

    if(this.conge.type_conge==null || this.conge.date_fin==null || this.conge.date_debut_conge==null){
      alert("tout les champs sont obligatoires")
    }
    else if(this.DateV(this.conge.date_fin , this.conge.date_debut_conge)==false){
        alert("Changer Les dates SVP");
    }
    else{

      this.serviceconge.getConge().subscribe(data=>{
        this.fo=data;
        for(let key of this.fo){
          if(key.utilisateur.mat_Utilisateur == this.user && key.role=='d'){
             this.serviceconge.DeleteConge(key.mat_conge).subscribe(data=>{
              console.log("ok");
             })
          }
        }
   
      } , err=> console.log(err));
  
      this.conge.role = "d";
      this.conge.utilisateur.mat_Utilisateur=this.user;
      console.log(this.conge);
      this.serviceconge.addConge(this.conge).subscribe(data=>{
          console.log(data);
          alert("Demande envoyée avec succsés")
          window.location.reload();
        },
        err=> console.log(err));
      console.log(this.conge.date_debut_conge);
    }

    
  }

  // onSubmit() {
  //   console.log(this.fs);
  //   this.saveConge();
  //   }



}
 