import { Departement } from "./departement";

export class Gestionnaire {

nom_Utilisateur  : string | undefined ;
prenom_Utilisateur : string | undefined ;
adresse_Utilisateur : string | undefined ;
email_Utilisateur : string | undefined ;
mdp_Utilisateur : string | undefined ;
role_Utilisateur : string | undefined ;
grade_Utilisateur : string | undefined ;
salaire_Utilisateur : number | undefined ;
mat_Utilisateur : number | undefined ;
id : number | undefined;
succursale : number | undefined;
departement : Departement = new Departement();
}
