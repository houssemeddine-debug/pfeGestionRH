import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDirecteurComponent } from './login/login-directeur/login-directeur.component';
import { MenuGestionnaireRhComponent } from './menu/menu-gestionnaire-rh/menu-gestionnaire-rh.component';
import { PrincipalComponent } from './principal/principal.component';
import { InfoEmployeeComponent } from './information/info-employee/info-employee.component';
import { TableEmployeeComponent } from './table/table-employee/table-employee.component';
import { LoginEmpComponent } from './login/login-emp/login-emp.component';
import { LoginRhComponent } from './login/login-rh/login-rh.component';
import { LoginPaieComponent } from './login/login-paie/login-paie.component';
import { MenuPaieComponent } from './menu/menu-paie/menu-paie.component';
import { MenuDirecteurComponent } from './menu/menu-directeur/menu-directeur.component';
import { MenuEmpComponent } from './menu/menu-emp/menu-emp.component';

import { TabCompanyComponent } from './crud/tab-company/tab-company.component';
import { TabSuccrsalComponent } from './crud/tab-succrsal/tab-succrsal.component';
import { TabPaieComponent } from './crud/tab-paie/tab-paie.component';
import { TabDepartementComponent } from './crud/tab-departement/tab-departement.component';
import { MenuRh2Component } from './menu/menu-rh2/menu-rh2.component';
import { ConsulterTransfertComponent } from './consultation/consulter-transfert/consulter-transfert.component';
import { ConsulterAvertissementComponent } from './consultation/consulter-avertissement/consulter-avertissement.component';
import { TransferetComponent } from './crud/transferet/transferet.component';
import { AjouterAvertissementComponent } from './crud/ajouter-avertissement/ajouter-avertissement.component';
import { TableDepartementComponent } from './table/table-departement/table-departement.component';
import { CrudFormationComponent } from './formation/crud-formation/crud-formation.component';
import { DemandeFormationComponent } from './formation/demande-formation/demande-formation.component';
import { CrudCongeComponent } from './conge/crud-conge/crud-conge.component';
import { DemandeCongeComponent } from './conge/demande-conge/demande-conge.component';
import { PretPaieComponent } from './paie/pret-paie/pret-paie.component';
import { RapportIndivPaieComponent } from './paie/rapport-indiv-paie/rapport-indiv-paie.component';
import { RapportSuccrsalePaieComponent } from './paie/rapport-succrsale-paie/rapport-succrsale-paie.component';
import { SalairePaieComponent } from './paie/salaire-paie/salaire-paie.component';
import { DemandePretsComponent } from './paie/demande-prets/demande-prets.component';
import { ListEmployeeComponent } from './paie/list-employee/list-employee.component';
import { ConsulterPretComponent } from './table/consulter-pret/consulter-pret.component';
import { InfoPersComponent } from './information/info-pers/info-pers.component';
import { DemandeEmpCongeComponent } from './employee/demande-emp-conge/demande-emp-conge.component';
import { DemandeEmpFormationComponent } from './employee/demande-emp-formation/demande-emp-formation.component';
import { TransfertDemandeComponent } from './employee/transfert-demande/transfert-demande.component';
import { ConsulterAssiduiteComponent } from './consultation/consulter-assiduite/consulter-assiduite.component';
import { AssiduiteComponent } from './consultation/assiduite/assiduite.component';
import { ConsulterSalaireComponent } from './employee/consulter-salaire/consulter-salaire.component';
import { MotDePasseComponent } from './mot-de-passe/mot-de-passe.component';
import { DemandePComponent } from './employee/demande-p/demande-p.component';




const routes: Routes = [
  {path : ""  , component : PrincipalComponent},


  {path : "login-directeur" , component :LoginDirecteurComponent},
  {path : "login-emp" , component :LoginEmpComponent},
  {path : "login-paie" , component :LoginPaieComponent},
  {path : "login-rh" , component :LoginRhComponent},

  {path : "table_emp" , component : TableEmployeeComponent },
  {path : "table_dep" , component : TableDepartementComponent},

  {path : "menu_rh" , component : MenuGestionnaireRhComponent},
  {path : "menu_rh2" , component : MenuRh2Component},
  {path : "menu_paie" , component : MenuPaieComponent},
  {path : "menu_directeur" , component : MenuDirecteurComponent},
  {path : "menu_emp" , component : MenuEmpComponent},

  {path : "tab_s" , component : TabSuccrsalComponent},
  {path : "tab_d" , component : TabDepartementComponent},
  {path : "tab_paie" , component : TabPaieComponent}, 
  {path : "tab_company" , component : TabCompanyComponent},

  {path : "info_emp" , component : InfoEmployeeComponent},
  {path : "info_pers" , component : InfoPersComponent},
  

  {path : "consulter-assiduite" , component : ConsulterAssiduiteComponent},
  {path : "assiduite" , component : AssiduiteComponent},
  {path : "consulter_transfert" , component : ConsulterTransfertComponent},
  {path : "consulter_avert" , component : ConsulterAvertissementComponent},
  {path : "transfert" , component : TransferetComponent},
  {path : "ajouter_avert" , component : AjouterAvertissementComponent},

  {path : "crud_formation" , component : CrudFormationComponent},
  {path : "demande_formation" , component : DemandeFormationComponent},
  {path : "crud_conge" , component : CrudCongeComponent},
  {path : "demande_conge" , component : DemandeCongeComponent},

  {path : "pret_paie" , component : ConsulterPretComponent},
  {path : "rapport_indiv" , component : RapportIndivPaieComponent},
  {path : "rapport_succrsale" , component : RapportSuccrsalePaieComponent},
  {path : "salaire_paie" , component : SalairePaieComponent},
  {path : "demande_prets" , component : DemandePretsComponent},
  {path : "list_employee" , component : ListEmployeeComponent},

  {path : "rapport_succrsale" , component : RapportSuccrsalePaieComponent},
  {path : "rapport_indiv" , component : RapportIndivPaieComponent},

 
  {path : "demande_emp_conge" , component : DemandeEmpCongeComponent},
  {path : "demande_emp_formation" , component : DemandeEmpFormationComponent},
  {path : "transfert_demande" , component : TransfertDemandeComponent},
  {path : "consulter-salaire" , component : ConsulterSalaireComponent},

  {path : "mot-passe" , component : MotDePasseComponent},
  {path : "demandeP" , component : DemandePComponent},
  {path : "consulter-prets" , component : ConsulterPretComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

