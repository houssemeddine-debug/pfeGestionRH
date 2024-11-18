import { Gestionnaire } from "./gestionnaire";

export class Formation {

    mat_formation: number = 0 ;
    nom_formation : string | undefined  ;
    sujet_formation : string | undefined  ;
    date_formation : Date | undefined  ;
    role : String | undefined;
    utilisateur : Gestionnaire = new Gestionnaire() ;
}
