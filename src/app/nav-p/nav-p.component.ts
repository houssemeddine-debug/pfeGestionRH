import { Component, OnInit } from '@angular/core';
import { PretService } from '../service-gestionnaire-rh/pret.service';
import { DataServiceService } from '../data-service.service';
import { MensualiteService } from '../service-gestionnaire-paie/mensualite.service';
import { MensualtitePret } from '../classe/mensualtite-pret';

@Component({
  selector: 'app-nav-p',
  templateUrl: './nav-p.component.html',
  styleUrls: ['./nav-p.component.css']
})
export class NavPComponent implements OnInit {

  listPret : any;
  maListe: any[] = [];

  constructor(private servicepret : MensualiteService ,  private servicedata : DataServiceService) { }

  ngOnInit(): void {

    this.servicepret.getm().subscribe(data=>{
      this.listPret = data ;
      for(let l of this.listPret){
        if(this.servicedata.sharedData == l.clecompose.id){
          this.maListe.push(l);
        }

      }
    });



  }

  oo(){
    window.location.reload();
  }

}
