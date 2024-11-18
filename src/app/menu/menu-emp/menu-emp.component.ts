import { Component, OnInit } from '@angular/core';
import { Assiduite } from 'src/app/classe/assiduite';
import { DataServiceService } from 'src/app/data-service.service';
import { GestionnaireService } from 'src/app/service-directeur/gestionnaire.service';
import { AssiduiteService } from 'src/app/service-gestionnaire-rh/assiduite.service';
import { EmployeeService } from 'src/app/service-gestionnaire-rh/employee.service';

@Component({
  selector: 'app-menu-emp',
  templateUrl: './menu-emp.component.html',
  styleUrls: ['./menu-emp.component.css']
})
export class MenuEmpComponent implements OnInit {
 
  loading = false;loaded = false;
  s : any ;
  user :any ;
   x1 : any ;
   a : Assiduite = new Assiduite();
   k : any;
   x : any ;
   y : any ;
   maListeA: any[] = [];
   test = true ;
   da : any ;
   d : any; 
  constructor( private serviceemployee : EmployeeService , private dataService : DataServiceService 
    , private assiduiteservice : AssiduiteService ) { }

  ngOnInit(): void {
    this.user = this.dataService.sharedData;
    // console.log(this.user);
    this.s = this.dataService.s;

    this.da = new Date();
    this.d = this.da.toDateString();
    console.log(this.d.substr(0,3))

    let fd = new Date().toLocaleDateString();
    let j = parseInt(fd.substr(0,2)) ;
    let mi = parseInt(fd.substr(4,2)) ;
    let yi = parseInt(fd.substr(6,4)) ;
    let fk = new Date(yi , mi-1 , j);
    // console.log(fd);
    // console.log(fk);
    this.assiduiteservice.getAssiduite().subscribe(data=>{
        this.x1 = data ;
        for(let ke of this.x1){
          
          let ch = ke.clecompose.date;
          let yji =  parseInt(ch.substr(0,4));
          let mij =  parseInt(ch.substr(6,1));
          let ji =  parseInt(ch.substr(8,2));
          let fkk = new Date(yji , mij-1 , ji);
          // console.log(fkk);
          if(fkk.toLocaleDateString() == fk.toLocaleDateString() && this.user==ke.utilisateur.mat_Utilisateur 
          || this.d.substr(0,3) == 'Sun'){
          this.test = false ;
         }
        }
        if(this.test==true){
          this.IsPresent();
          this.dataService.s=0;
      }
    });
 
//  console.log(this.test);
}

  deleteCompte(id : number){
    this.serviceemployee.DeleteE(id).subscribe(data=>{
      // console.log(data);
        },   err=> console.log(err)
    )}

    //  parseDate(dateString: string): Date {
    //   const day = parseInt(dateString.substr(0, 4));
      
    // const month = parseInt(dateString.substr(4,1)) - 1;
    // const year = parseInt(dateString.substr(6, 4));
      
    //   return new Date(year, month, day);
    // }

  //   IsHier(c : Date)  {
      
      
  //     this.assiduiteservice.getAssiduite().subscribe(data=>{
  //       this.y = (data) ;
  //       let test = true ;
  //       for (let key of this.x) {
  //         // if (key.clecompose.id == this.user && key.clecompose.date == c){
  //            console.log(key.clecompose.date);
  //         //   // test = true ;
  //         //   this.x1 = true;
  //         // }
  //       }
  //   });
    
  // }
      
 

  IsPresent(){

    this.loading = true;

    this.assiduiteservice.getAssiduite().subscribe(data=>{
      this.y = (data) ;
      for (let key of this.y) {
        if (key.utilisateur.mat_Utilisateur == this.user && key.etat == 'P'){
          this.maListeA.push(key.clecompose.date);
        }  
        }
         console.log(this.maListeA.length);
        // console.log(this.maListeA[this.maListeA.length-1]);
        if(this.maListeA.length == 0){
          let rr = new Date();
          // console.log(rr +'azerty');
          this.a.clecompose.id = this.user ;
          this.a.clecompose.date = rr;
          this.a.utilisateur.mat_Utilisateur = this.user ;
          this.a.etat = "P";

          this.assiduiteservice.addAssiduite(this.a).subscribe(data=>{
            console.log(rr);
             }, err=>console.log(err));

          
        }
        else{
          let d =  this.maListeA[this.maListeA.length-1].substr(0,4)
          console.log(parseInt(d));
       let m =  this.maListeA[this.maListeA.length-1].substr(5,2)
          console.log(parseInt(m));
      let y =  this.maListeA[this.maListeA.length-1].substr(8,2)
      let e = new Date();
          
         console.log(e)
      //  let ch = dd.toDateString()
      //  console.log(ch);
      //  let jour = ch.substr(0,3); console.log(jour);

       let dn = parseInt(d);
       let mn = parseInt(m);
       let yn = parseInt(y)+2;
       console.log(yn);
       let dd = new Date(dn,mn-1,yn);
       while(dd<e){
        this.a.clecompose.id = this.user ;
        this.a.clecompose.date = dd;
        this.a.utilisateur.mat_Utilisateur = this.user ;
        this.a.etat = "A";
        this.assiduiteservice.addAssiduite(this.a).subscribe(data=>{
          console.log(dd);
           }, err=>console.log(err));
           yn ++ ;
           dd = new Date(dn,mn-1,yn);
       }
       this.a.clecompose.id = this.user ;
       this.a.clecompose.date = dd;
       this.a.utilisateur.mat_Utilisateur = this.user ;
       this.a.etat = "P";

       this.assiduiteservice.addAssiduite(this.a).subscribe(data=>{
        console.log(dd);
         }, err=>console.log(err));
        }
       

       
  });

  setTimeout(() => {
         this.loading = false;
         this.loaded = true;
       }, 2000);

  }


  sendData() {
       this.dataService.s = this.loaded;
     }

}