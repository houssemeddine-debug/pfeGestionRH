import { Cle } from "./cle";
import { Gestionnaire } from "./gestionnaire";

export class Pret {

    mat_pret : number |undefined;
    type_pret : String | undefined ;
    versement : number |undefined ;
    somme_pret : number |undefined ;
    date_debut_pret : Date | undefined ;
    date_fin_pret : Date |undefined;
    etatPret : number |undefined;
    utilisateur : Gestionnaire = new Gestionnaire();

}
