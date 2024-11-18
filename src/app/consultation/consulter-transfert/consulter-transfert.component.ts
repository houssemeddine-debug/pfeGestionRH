import { Component, OnInit } from '@angular/core';
import { Transfert } from 'src/app/classe/transfert';
import { DataServiceService } from 'src/app/data-service.service';
import { EmployerService } from 'src/app/service-directeur/employer.service';
import { SuccrsaleService } from 'src/app/service-directeur/succrsale.service';
import { DepartementService } from 'src/app/service-gestionnaire-rh/departement.service';
import { EmployeeService } from 'src/app/service-gestionnaire-rh/employee.service';
import { TransfertService } from 'src/app/service-gestionnaire-rh/transfert.service';

@Component({
  selector: 'app-consulter-transfert',
  templateUrl: './consulter-transfert.component.html',
  styleUrls: ['./consulter-transfert.component.css']
})
export class ConsulterTransfertComponent implements OnInit {
  dep : any;
  transfert : Transfert = new Transfert() ;
  id : any; 
  suc : any ;
  succursale : any ;
  maListeS: any[] = [];
  test :any; 
  a : any ;
  ts : any ;
  e : any ;
  x:any ;
  amigo : any;
  n = 0 ;
  y : any ;
  constructor(private servicetransfert : TransfertService , private servicegestionnaire : EmployerService , 
    private  dataservice : DataServiceService , private succursaleservice : SuccrsaleService , 
    private employeeservice : EmployeeService , private departementservice : DepartementService){}
  
  ngOnInit(): void {
   this.id = this.dataservice.sharedData ;

    this.servicegestionnaire.getgestionnaire(this.id).subscribe(data=>{
      this.suc = data ;
      this.succursale = this.suc.succursale.nom_succursale ;

      this.servicetransfert.getFTransfert()
      .subscribe(data=>{
         this.dep=data;
         for(let key of this.dep){
          if(key.succursal_actuel == this.succursale && key.etat1 == 0 && key.etat2!=2){
             this.test = 1 ;
             this.maListeS.push(key);
          }
          if(key.nouvelle_succursale ==this.succursale && key.etat2 == 0 && key.etat1!=2){
            this.test = 2 ;
            this.maListeS.push(key);
          }
         }
      },err=>{
        console.log(err);
      })
    })


    
    
  }
  
  deletetransfert(id : any){
  
    this.servicetransfert.getTransfert(id).subscribe(data=>{
      this.a = data ;
      if(this.test == 1)
      this.a.etat1 = 2;
      else 
      this.a.etat2 = 2 ;
      this.servicetransfert.addTransfert(this.a).subscribe(data=>{
        console.log(data);
      }) 

    });
   

  }


  Acceptertransfert(x :number){
      this.servicetransfert.getTransfert(x).subscribe(data=>{
        this.a = data ;
        // if(this.test == 1)
        // this.a.etat1 = 1;
        // else 
        // this.a.etat2 = 1 ;
        this.servicetransfert.addTransfert(this.a).subscribe(data=>{
          console.log(data);
        //  if(this.a.etat1==1 && this.a.etat2==1)
           this.aa(x);
        }) ;
       
      })
    
      
  }


  

  aa(x : number){
    
    this.servicetransfert.getTransfert(x).subscribe(data=>{
      this.a = data ;
       
        this.servicegestionnaire.getgestionnaire(this.id).subscribe(data=>{
          this.suc = data ;
          console.log(this.suc)
        this.employeeservice.getE().subscribe(data=>{
          this.e = data ;
    
          for(let key of this.e){
        //   console.log(key);
            if(key.mat_Utilisateur==this.a.utilisateur.mat_Utilisateur){
               this.y = key ;
               console.log(key);
               this.succursaleservice.getSuccrsale().subscribe(data=>{
                this.x = data ;
                 for(let k of this.x){
                 
                  if(k.nom_succursale== this.a.nouvelle_succursale)
                  {
                    console.log(k);
                    this.y.departement.succursale = k ;
                    this.departementservice.getDepartement().subscribe(data=>{
                      this.amigo = data ;
                      console.log(this.amigo)
                      for(let aa of this.amigo){
                        if(aa.succursale.mat_succursale == k.mat_succursale && aa.nom_departement==this.y.departement.nom_departement){
                          this.y.departement = aa ;
                          this.n = 1 ;
                        }
                      }
             
                  if(this.n==1){
                    console.log("h9999");
                    console.log(this.y);
                 
                     this.employeeservice.DeleteE(key.mat_Utilisateur).subscribe(
                       data=>{console.log(data);}
                     );
                     this.employeeservice.addE(this.y).subscribe(data=>{
                       console.log(data);
                  })
                     }

                })
              }
                }
            })
          }
        }
      });
      });
      
    });
  }

}
