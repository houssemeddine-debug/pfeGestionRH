import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employer } from 'src/app/classe/employer';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';

@Component({
  selector: 'app-login-rh',
  templateUrl: './login-rh.component.html',
  styleUrls: ['./login-rh.component.css']
})
export class LoginRhComponent implements OnInit {


  username : any;
  passeword : any ;
  l : any ;
  constructor( private servicegestionnaire : EmployerService , private router: Router , private dataservice : DataServiceService) { }

  ngOnInit(): void {
  }

  isNumerique(value:any):boolean {

    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  LoginGRH(){
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
      console.log(this.l);
      if(this.l==null){
        alert("Matricule invalide !")
       }
       else if(this.l.ncin != null && this.passeword != this.l.mdp){
        alert("Mot de passe incorrect!")
       }
        else if(this.l.ncin != null && this.passeword == this.l.mdp && this.l.role == 'r' && this.l.etat=='A'){
        console.log(this.l);
        this.dataservice.setData(this.username);
        this.router.navigate(['/menu_rh']);
      }
      else 
     alert("probléme de connexion")
     },  
     );
    }

  }


}
