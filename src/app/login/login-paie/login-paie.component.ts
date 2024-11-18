import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';

@Component({
  selector: 'app-login-paie',
  templateUrl: './login-paie.component.html',
  styleUrls: ['./login-paie.component.css']
})
export class LoginPaieComponent implements OnInit {

  username : any;
  passeword : any ;
  l : any ;
  constructor( private servicegestionnaire : EmployerService , private router: Router ,  private dataservice : DataServiceService) { }

  ngOnInit(): void {
  }

  isNumerique(value:any):boolean {

    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  LoginGPAIE(){
    if  (this.username == null) {
      alert("Saisir votre matricul !")
     } 
     else if  (this.isNumerique(this.username )==false) {
      alert("Votre matricul doit etre numerique ")
     }
     else if(this.username.length != 6){
      alert("Votre matricul doit etre composé de 6 chiffres ")
     }
     else if(this.username[0]=='0'){
      alert("Votre matricul doit commencere par 0");
     }
     else if  (this.passeword == null) {
      alert("Saisir votre mot de passe !")
     } 
     else{
    this.servicegestionnaire.getgestionnaire(this.username).subscribe(data=>{
     this.l = data ;
     if( this.l==null ){
      alert("Matricule inexistante !")
     }
     else if((this.l.ncin != null) && this.passeword != this.l.mdp){
      alert("Mot de passe incorrect!")
     }
      else if(this.l.ncin != null && this.passeword == this.l.mdp &&  this.l.role == 'p' && this.l.etat=='A'){
      this.dataservice.setData(this.username);
       this.router.navigate(['/menu_paie']);
     }
     else 
     alert("probléme de connexion")
    }, 
    );
  }

 }

 

}
