import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Direct } from 'src/app/classe/direct';
import { DataServiceService } from 'src/app/data-service.service';
import { DirecteurRHService } from 'src/app/service-directeur/directeur-rh.service';


import { FormBuilder,FormGroup,Validator } from '@angular/forms';

@Component({
  selector: 'app-login-directeur',
  templateUrl: './login-directeur.component.html',
  styleUrls: ['./login-directeur.component.css']
})
export class LoginDirecteurComponent implements OnInit {

  r : any ;
  username : any ;
  l : any ;
  passeword : any ;
  d : Direct = new Direct()
  constructor( private servicedirecteur : DirecteurRHService , private dataservice : DataServiceService ,  private router: Router) { }
 
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
      this.servicedirecteur.getDirecteur(this.username).subscribe(data=>{
        this.l = data ;
       if( this.l==null ){
        alert("Matricule inexistante !")
       }
       else if((this.l.ncin != null) && this.passeword != this.l.mdp){
        alert("Mot de passe incorrect!")
       }
        else if((this.l.ncin != null) && this.passeword == this.l.mdp ){
         this.dataservice.setData(this.username);
          this.router.navigate(['/menu_directeur']);
        }
       },  
       );
     }
   
}

 ADDGRH(){

  this.servicedirecteur.addDirecteur(this.d).subscribe(data=>{
    console.log(data);
  });

 }

 alpha(value: string): boolean {
  const regex = /^[a-zA-Z]+$/;  // Expression régulière pour vérifier les caractères alphabétiques uniquement

  return regex.test(value);
}
 isSecurePassword(value: string): boolean {
  let test = true ;
  // Vérifier si le mot de passe contient au moins 8 caractères
  if (value.length < 5) {
    test = false ;
  }

  // Vérifier si le mot de passe contient au moins une lettre majuscule et une lettre minuscule
  if (!/[A-Z]/.test(value) && !/[a-z]/.test(value)) {
    test = false ;
  }

  // Vérifier si le mot de passe contient au moins un chiffre
  if (!/[0-9]/.test(value)) {
    test = false ;
  }

  // Vérifier si le mot de passe contient au moins un symbole
  if (!/[!@#$%^&*()]/.test(value)) {
    return false;
  }

  return test;
}


 isValidEmailFormat(email: string): boolean {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

 controle(){
  this.r = this.d.ncin ;
  if(this.d.ncin == null || this.d.nom == null ||this.d.prenom == null ||this.d.mdp == null ||this.d.email == null  ){
    alert("tout les champs sont obligatoire");
  } 
   else if  (this.isNumerique(this.d.ncin )==false) {
    alert("Votre matricul doit etre numerique ")
   }
   else if(this.r.length != 6){
    alert("Votre matricul doit etre composé de 6 chiffres ")
   }
   else if(this.r[0]=='0'){
    alert("Votre matricul doit commencere par 0");
   }
  else if(this.alpha(this.d.nom)==false){
    alert(" Votre nom doit etre alphabétique");
  }
  else if(this.alpha(this.d.prenom)== false){
    alert(" Votre prenom doit etre alphabétique");
  }
  else if(this.isSecurePassword(this.d.mdp)==false){
    alert(" Votre mot de passe doit etre composé avec des caractéres ,des chiffres et des sigles");
  }
  else if(this.isValidEmailFormat(this.d.email)== false)
  alert(" E-mail Invalide");
  else {
    this.servicedirecteur.getDirecteur(this.d.ncin).subscribe(data=>{
  
      if(data!=null){
        alert("Matricule Déja existe")
      }
      else{
        this.ADDGRH();
        alert(" Votre Compte a été creer avec succsés");
        this.dataservice.setData(this.r);
        this.router.navigate(['/menu_directeur']);
      }
    })
   
    
  }
 


 }

}