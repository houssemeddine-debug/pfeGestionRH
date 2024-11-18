import { Component, OnInit } from '@angular/core';
import { Direct } from 'src/app/classe/direct';
import { DataServiceService } from 'src/app/data-service.service';
import { DirecteurRHService } from 'src/app/service-directeur/directeur-rh.service';

@Component({
  selector: 'app-menu-directeur',
  templateUrl: './menu-directeur.component.html',
  styleUrls: ['./menu-directeur.component.css']
})
export class MenuDirecteurComponent implements OnInit {

  user : any ;
  gest : any ;
  d : Direct = new Direct() ;
  k : any ;
  constructor( private servicedirecteur : DirecteurRHService , private dataservice : DataServiceService) { }

  ngOnInit(): void {
    
    this.user = this.dataservice.sharedData;

  }

  afficherd(id :number){
   this.servicedirecteur.getDirecteur(id).subscribe(data=>{
      this.gest = data ;
      this.d.ncin = this.gest.ncin;
      this.d.nom = this.gest.nom;
      this.d.prenom = this.gest.prenom;
      this.d.email = this.gest.email;
      this.d.mdp = this.gest.mdp;
    });
  }
  saveDirecteur(x : Direct){
    console.log(x);
    this.servicedirecteur.addDirecteur(x).subscribe(data=>{
      console.log(data); 
      alert("Votre modification effectué avec succés")
      window.location.reload();
    });
  }

  deleteCompte(id : number){
    this.servicedirecteur.DeleteDirecteur(id).subscribe(data=>{
      console.log(data);
        },   err=> console.log(err)
    )}

    env(id : any){
      this.k = id ;
    }

}


