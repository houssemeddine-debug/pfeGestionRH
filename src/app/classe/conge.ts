import { Gestionnaire } from "./gestionnaire";

export class Conge {

    mat_conge : number | undefined ;
    type_conge : string | undefined ;
    date_debut_conge : Date | undefined ;
    date_fin : Date | undefined ;
    role : String | undefined;
    utilisateur : Gestionnaire = new Gestionnaire()  ;
  
}

