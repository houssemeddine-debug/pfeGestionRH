import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';

@Component({
  selector: 'app-login-emp',
  templateUrl: './login-emp.component.html',
  styleUrls: ['./login-emp.component.css']
})
export class LoginEmpComponent implements OnInit {

  username : any;
  passeword : any ;
  l : any ;
  constructor(private servicegestionnaire : GestionnaireService , private router: Router
     , private dataService: DataServiceService) { }

  ngOnInit(): void {

  }

  isNumerique(value:any):boolean {

    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  LoginEMP(){
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
      window.location.reload();
     }
     else if((this.l.ncin != null )&& this.passeword != this.l.mdp){
      alert("Mot de passe incorrect!")
      window.location.reload();
     }
     else if(this.l.mat_Utilisateur != null && this.passeword == this.l.mdp_Utilisateur ){
      this.sendData();
       this.router.navigate(['/menu_emp']);
     }
    },  
    );
  }
  }

  sendData() {
    this.dataService.sharedData = this.username;
    this.dataService.s = 1;
  }

  

}
