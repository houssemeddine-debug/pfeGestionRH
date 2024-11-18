import { Component, OnInit } from '@angular/core';
import { Avertissement } from 'src/app/classe/avertissement';
import { Gestionnaire } from 'src/app/classe/gestionnaire';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';
import { AvertissementService } from 'src/app/service-gestionnaire-rh/avertissement.service';

@Component({
  selector: 'app-consulter-avertissement',
  templateUrl: './consulter-avertissement.component.html',
  styleUrls: ['./consulter-avertissement.component.css']
})
export class ConsulterAvertissementComponent implements OnInit {

  fo: {[key: string]: any} = {foo: 'bar'};
  myKey: string = 'foo';
  myValue: any = this.fo[this.myKey];

  a : any ;
  s : any ;
  avertissement : Avertissement = new Avertissement() ;

  constructor( private serviceavertissement : AvertissementService , private servicegestionnaire: GestionnaireService ) { }

  ngOnInit(): void {
    this.serviceavertissement.getAvertissement()
     .subscribe(data=>{
        this.a=data;
     },err=>{
       console.log(err);
     })
 }

 saveA(){

    this.servicegestionnaire.getgestionnaire(this.avertissement.utilisateur.mat_Utilisateur).subscribe(data=>{
      this.s = data ;
      this.avertissement.utilisateur = this.s ; 
      console.log(this.avertissement);
      this.serviceavertissement.addAvertissement(this.avertissement).subscribe(data=>{
        console.log(data);
        alert("Avertissement envoyé par e-mail avec succsés")
        window.location.reload();
      },
      err=> console.log(err));
    })
   
 }

  update(id:number){
    this.servicegestionnaire.getgestionnaire(id).subscribe(data=>{
      this.fo=data;
      console.log(id);
    } , err=> console.log(err));
  }


}
