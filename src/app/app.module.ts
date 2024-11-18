import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginDirecteurComponent } from './login/login-directeur/login-directeur.component';
import { MenuGestionnaireRhComponent } from './menu/menu-gestionnaire-rh/menu-gestionnaire-rh.component';
import { LoginRhComponent } from './login/login-rh/login-rh.component';
import { LoginPaieComponent } from './login/login-paie/login-paie.component';
import { LoginEmpComponent } from './login/login-emp/login-emp.component';
import { MenuPaieComponent } from './menu/menu-paie/menu-paie.component';
import { MenuEmpComponent } from './menu/menu-emp/menu-emp.component';
import { MenuDirecteurComponent } from './menu/menu-directeur/menu-directeur.component';

import { TabCompanyComponent } from './crud/tab-company/tab-company.component';
import { InfoEmployeeComponent } from './information/info-employee/info-employee.component';
import { TableEmployeeComponent } from './table/table-employee/table-employee.component';
import { TableGestionnaireComponent } from './table/table-gestionnaire/table-gestionnaire.component';
import { TabSuccrsalComponent } from './crud/tab-succrsal/tab-succrsal.component';
import { TabPaieComponent } from './crud/tab-paie/tab-paie.component';
import { TabDepartementComponent } from './crud/tab-departement/tab-departement.component';
import { MenuRh2Component } from './menu/menu-rh2/menu-rh2.component';
import { NavComponent } from './nav/nav.component';
import { ConsulterTransfertComponent } from './consultation/consulter-transfert/consulter-transfert.component';
import { ConsulterAvertissementComponent } from './consultation/consulter-avertissement/consulter-avertissement.component';
import { AjouterAvertissementComponent } from './crud/ajouter-avertissement/ajouter-avertissement.component';
import { TransferetComponent } from './crud/transferet/transferet.component';
import { TableDepartementComponent } from './table/table-departement/table-departement.component';
import { CrudFormationComponent } from './formation/crud-formation/crud-formation.component';
import { DemandeFormationComponent } from './formation/demande-formation/demande-formation.component';
import { NavFComponent } from './nav-f/nav-f.component';
import { CrudCongeComponent } from './conge/crud-conge/crud-conge.component';
import { DemandeCongeComponent } from './conge/demande-conge/demande-conge.component';
import { NavCongeComponent } from './nav-conge/nav-conge.component';
import { PretPaieComponent } from './paie/pret-paie/pret-paie.component';
import { SalairePaieComponent } from './paie/salaire-paie/salaire-paie.component';
import { RapportIndivPaieComponent } from './paie/rapport-indiv-paie/rapport-indiv-paie.component';
import { RapportSuccrsalePaieComponent } from './paie/rapport-succrsale-paie/rapport-succrsale-paie.component';
import { NavPaieComponent } from './nav-paie/nav-paie.component';
import { DemandePretsComponent } from './paie/demande-prets/demande-prets.component';
import { ListEmployeeComponent } from './paie/list-employee/list-employee.component';
import { ConsulterPretComponent } from './table/consulter-pret/consulter-pret.component';
import { InfoPersComponent } from './information/info-pers/info-pers.component';
import { TestComponent } from './test/test.component';
import { SupprimerCompteComponent } from './employee/supprimer-compte/supprimer-compte.component';
import { NavEmpCongeComponent } from './nav-emp-conge/nav-emp-conge.component';
import { NavEmpFormationComponent } from './nav-emp-formation/nav-emp-formation.component';
import { DemandeEmpCongeComponent } from './employee/demande-emp-conge/demande-emp-conge.component';
import { DemandeEmpFormationComponent } from './employee/demande-emp-formation/demande-emp-formation.component';

import { TransfertDemandeComponent } from './employee/transfert-demande/transfert-demande.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConsulterAssiduiteComponent } from './consultation/consulter-assiduite/consulter-assiduite.component';
import { AssiduiteComponent } from './consultation/assiduite/assiduite.component';
import { ConsulterSalaireComponent } from './employee/consulter-salaire/consulter-salaire.component';
import { MotDePasseComponent } from './mot-de-passe/mot-de-passe.component';
import { DemandePComponent } from './employee/demande-p/demande-p.component';
import { NavPComponent } from './nav-p/nav-p.component';
import { NavTransfertComponent } from './nav-transfert/nav-transfert.component';







@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginDirecteurComponent,
    MenuGestionnaireRhComponent,
    LoginRhComponent,
    LoginPaieComponent,
    LoginEmpComponent,
    MenuPaieComponent,
    MenuEmpComponent,
    MenuDirecteurComponent,
    TabCompanyComponent,
    InfoEmployeeComponent,
    TableEmployeeComponent,
    TableGestionnaireComponent,
    TabSuccrsalComponent,
    TabPaieComponent,
    TabDepartementComponent,
    MenuRh2Component,
    NavComponent,
    ConsulterTransfertComponent,
    ConsulterAvertissementComponent,
    AjouterAvertissementComponent,
    TransferetComponent,
    TableDepartementComponent,
    CrudFormationComponent,
    DemandeFormationComponent,
    NavFComponent,
    CrudCongeComponent,
    DemandeCongeComponent,
    NavCongeComponent,
    PretPaieComponent,
    SalairePaieComponent,
    RapportIndivPaieComponent,
    RapportSuccrsalePaieComponent,
    NavPaieComponent,
    DemandePretsComponent,
    ListEmployeeComponent,
    ConsulterPretComponent,
    InfoPersComponent,
    TestComponent,
    SupprimerCompteComponent,
    NavEmpCongeComponent,
    NavEmpFormationComponent,
    DemandeEmpCongeComponent,
    DemandeEmpFormationComponent,

    TransfertDemandeComponent,
     ConsulterAssiduiteComponent,
     AssiduiteComponent,
     ConsulterSalaireComponent,
     MotDePasseComponent,
     DemandePComponent,
     NavPComponent,
     NavTransfertComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
