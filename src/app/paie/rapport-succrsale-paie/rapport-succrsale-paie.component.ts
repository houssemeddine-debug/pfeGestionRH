import { Component, ElementRef, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { MensualiteService } from 'src/app/service-gestionnaire-paie/mensualite.service';
import { AssiduiteService } from 'src/app/service-gestionnaire-rh/assiduite.service';
import { CongeService } from 'src/app/service-gestionnaire-rh/conge.service';
import { DepartementService } from 'src/app/service-gestionnaire-rh/departement.service';
import { EmployeeService } from 'src/app/service-gestionnaire-rh/employee.service';
import { FormationService } from 'src/app/service-gestionnaire-rh/formation.service';
import { PretService } from 'src/app/service-gestionnaire-rh/pret.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-rapport-succrsale-paie',
  templateUrl: './rapport-succrsale-paie.component.html',
  styleUrls: ['./rapport-succrsale-paie.component.css']
})
export class RapportSuccrsalePaieComponent implements OnInit {

  az : any ;
  gest : any ;
   e : any ;
  abs : any ;
  ndep : any ;
  c : any ;
  p : any ;
  m : any ;
  l : any ;
  deb : any ;
  fin : any ;
  nbremp :number = 0;
  nbrAT : number = 0;
  nbrempEnC : number = 0;
  nbrF : number = 0;
  nbrA : number = 0 ;
  listDep : any[] = [] ;
  listconge : any[] = [] ;
  listformation : any[] = [] ;
  ass : any[] = [] ;
  a : any ;
  sommeP : number = 0 ;
  sommeS : number = 0 ;
  ok : number = 0 ;
  ar : any ;
  da : Date = new Date();
  d : any; 
  y : any ;
  aa : any ;
  ui : any ;
  constructor( private employeeservice : EmployeeService , private assiduiteservice : AssiduiteService 
     , private congeservice : CongeService , private pretservice : PretService , 
     private mensualiteservice : MensualiteService , private gestionnaireservice : EmployerService ,
     private dataservice : DataServiceService , private departementservice : DepartementService , 
     private formationservice : FormationService ) { }

  ngOnInit(): void {

   this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
    this.ar = data ;
   })

   
    this.d = this.da.toDateString();
    console.log(this.d.substr(0,3))
    this.y = this.d.substr(0.20);

    

  }

  NbrTotEmp(){

    this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
      this.gest = data ;
      // console.log(this.gest.succursale.mat_succursale);
      this.employeeservice.getE().subscribe(data=>{
        this.e = data ;
        for(let key of this.e){
          if(key.departement.succursale.mat_succursale == this.gest.succursale.mat_succursale){
            this.nbremp++ ;
            
          }
        }
        console.log(this.nbremp);
      });
  });
  }

  departement(){
    this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
      this.gest = data ;
      // console.log(this.gest.succursale.mat_succursale);
      this.departementservice.getDepartement().subscribe(data=>{
        this.e = data ;
        for(let key of this.e){
          if(key.succursale.mat_succursale == this.gest.succursale.mat_succursale){
            console.log(key.nom_departement);
            this.listDep.push(key.nom_departement);
          }
        }
      });
  });
  }

  empEnConge(){
    this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
      this.gest = data ;
      // console.log(this.gest.succursale.mat_succursale);
      this.congeservice.getConge().subscribe(data=>{
        this.e = data ;
        for(let key of this.e){
          if(key.utilisateur.departement.succursale.mat_succursale == this.gest.succursale.mat_succursale){
             console.log(key.type_conge);
            let ad = parseInt(this.deb.substr(0.2))
           
            let md = parseInt(this.deb.substr(5.2));
            
            let dd = parseInt(this.deb.substr(8.2));
            
            let af = parseInt(this.fin.substr(0.2))
          
            let mf = parseInt(this.fin.substr(5.2));
          
            let df = parseInt(this.fin.substr(8.2));
     
            this.listconge.push(key);
            for(let key of this.listconge){
              let ac = parseInt(key.date_debut_conge[0]+key.date_debut_conge[1]+key.date_debut_conge[2]+key.date_debut_conge[3]);
              console.log(ac);
              let mc = parseInt(key.date_debut_conge[5]+key.date_debut_conge[6]);
              console.log(mc);
              let jc = parseInt(key.date_debut_conge[8]+key.date_debut_conge[9]);
              console.log(jc);
              if(((ad<= ac) && ( ac<= af) && (md<= mc) && ( mc<= mf) && (dd<= jc) && ( jc<= df) )&& (key.role="f"))
               this.nbrempEnC++;
              
            }
          }
        }
        console.log(this.nbrempEnC);
      });
  });
  }


 FormationDemande(){

  let ad = parseInt(this.deb.substr(0.2))
         
          let md = parseInt(this.deb.substr(5.2));
          
          let dd = parseInt(this.deb.substr(8.2));
          
          let af = parseInt(this.fin.substr(0.2))
        
          let mf = parseInt(this.fin.substr(5.2));
        
          let df = parseInt(this.fin.substr(8.2));

  this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
    this.gest = data ;
    // console.log(this.gest.succursale.mat_succursale);
    this.formationservice.getFormation().subscribe(data=>{
      this.e = data ;
      for(let key of this.e){
        if(key.utilisateur.departement.succursale.mat_succursale == this.gest.succursale.mat_succursale){
          console.log(key.sujet_formation);
          this.listformation.push(key);
          }
        }
          
          for(let key of this.listformation){
            let ac = parseInt(key.date_formation[0]+key.date_formation[1]+key.date_formation[2]+key.date_formation[3]);
            // console.log(ac);
            let mc = parseInt(key.date_formation[5]+key.date_formation[6]);
            // console.log(mc);
            let jc = parseInt(key.date_formation[8]+key.date_formation[9]);
            // console.log(jc);
            if((ad<= ac) && ( ac<= af) && (md<= mc) && ( mc<= mf) && (dd<= jc) && ( jc<= df))
             this.nbrF++;
          }
          
         // console.log(this.nbrF);
      
    });
});
 }

 moyAbs(){
  this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
    this.gest = data ;
  
    this.assiduiteservice.getAssiduite().subscribe(data=>{
      this.a = data ;
      for(let key of this.a){
        if(key.utilisateur.departement.succursale.mat_succursale == this.gest.succursale.mat_succursale){
            this.nbrAT++;
          if(key.etat == 'A' ){
            this.nbrA++;
          }
        }
       
      }
      // console.log(this.nbrAT);
      console.log((this.nbrA*100)/this.nbrAT +"%");
      this.ui=(this.nbrA*100)/this.nbrAT +"%";
    })

  });
  

 }

 sommePret(){
  this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
    this.gest = data ;
  
    this.pretservice.getPret().subscribe(data=>{
      this.a = data ;
      for(let key of this.a){
        if(key.utilisateur.departement.succursale.mat_succursale == this.gest.succursale.mat_succursale 
          && ((parseInt(this.deb[6]) == parseInt(key.date_debut_pret[6])) || (parseInt(this.fin[6]) == parseInt(key.date_debut_pret[6])) ) ){
            this.sommeP += key.somme_pret ; 
        }
      }
      console.log(this.sommeP + "Dinars");
     
    })
  });
 }

 sommeSalaire(){
  
  this.gestionnaireservice.getgestionnaire(this.dataservice.sharedData).subscribe(data=>{
    this.gest = data ;
  
    this.employeeservice.getE().subscribe(data=>{
      this.a = data ;
      for(let key of this.a){
       
        if(key.departement.succursale.mat_succursale == this.gest.succursale.mat_succursale){
          
          this.assiduiteservice.getAssiduite().subscribe(data=>{
            this.l = data ;
            let n = 0 ;
            for(let k of this.l){
              if(k.clecompose.id == key.mat_Utilisateur){
                if(k.etat == 'A' ){
                  n++ ;
                }
              }
            }
            this.sommeS += key.salaire_Utilisateur - ((key.salaire_Utilisateur/26)*n)
            console.log(this.sommeS);
          })
        }
      }
    })
  });
  
 }

 SetOk(){
  let af = parseInt(this.fin.substr(0.2))
        
  let mf = parseInt(this.fin.substr(5.2));

  let df = parseInt(this.fin.substr(8.2));
  let r = new Date();
  let r1 = new Date(af,mf-1,df)
  if(this.deb==null || this.fin==null || this.deb>this.fin || r<r1){
    alert("Periode Invalide");
  }
  else{
    this.ok = 1;
    this.FormationDemande();
    this.NbrTotEmp();
    this.moyAbs();
    this.empEnConge();
    this.sommeSalaire();
    this.sommePret();
    this.departement();

  }
 
 }

genererPDF() {
  const element = document.getElementById('id_section');

  if (element) {
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('rapport.pdf');
    });
  } else {
    console.error('La section HTML avec l\'ID "sectionHtml" n\'a pas été trouvée.');
  }
}

}
