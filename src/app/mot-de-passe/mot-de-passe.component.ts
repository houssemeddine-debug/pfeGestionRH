import { Component, OnInit } from '@angular/core';
import { GestionnaireService } from '../service-directeur/gestionnaire.service';
import { Gestionnaire } from '../classe/gestionnaire';
import { DirecteurRHService } from '../service-directeur/directeur-rh.service';

@Component({
  selector: 'app-mot-de-passe',
  templateUrl: './mot-de-passe.component.html',
  styleUrls: ['./mot-de-passe.component.css']
})
export class MotDePasseComponent implements OnInit {

  ncin : any ;
  g : any;
  r : any;
  test : number = 0 ;
  constructor(private servicegestionnaire : GestionnaireService , private serviceadmin : DirecteurRHService) { }

  ngOnInit(): void {
  }

  isNumerique(value:any):boolean {

    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  Envoyer(){
    this.r = this.ncin ;
    if  (this.ncin == null) {
      alert("Saisir votre matricul !")
     } 
    else if  (this.isNumerique(this.ncin )==false) {
      alert("Votre matricul doit etre numerique ")
     }
     else if(this.r.length != 6){
      alert("Votre matricul doit etre composé de 6 chiffres ")
     }

     else if(this.r[0]=='0'){
      alert("Votre matricul doit commencere par 0");
     }
     else{
      this.serviceadmin.getDirecteur(this.ncin).subscribe(data=>{
        this.g = data ;
        console.log(this.g);
        if(this.g.ncin == this.ncin){
          this.test = 1 ;
          this.serviceadmin.envoyee(this.g).subscribe(data=>{
            console.log(data);
            alert("Mot de passe envoyé par e-mail");
            window.location.reload();
          },
          err=> console.log(err));
        }
      });
     
      if(this.test ==0){
        this.servicegestionnaire.getgestionnaire(this.ncin).subscribe(data=>{
          this.g = data ;
          console.log(this.g);
          console.log(this.ncin);
          this.servicegestionnaire.envoyee(this.g).subscribe(data=>{
            console.log(data);
            alert("Mot de passe envoyé par e-mail");
            window.location.reload();
          },
          err=> console.log(err));
        })
      }
     
     }
  
    
  }

}
