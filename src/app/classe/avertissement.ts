import { Gestionnaire } from "./gestionnaire";

export class Avertissement {

    id :number | undefined ;
    contenu_avertissement : string | undefined;
    utilisateur : Gestionnaire = new Gestionnaire() ;
    
}
