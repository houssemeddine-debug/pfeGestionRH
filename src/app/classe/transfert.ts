import { Gestionnaire } from "./gestionnaire";

export class Transfert {

    id_transfet : number | undefined;
    nom_utilisateur : String |undefined;
    prenom_utilisateur : String |undefined;
    succursal_actuel : String |undefined;
    nouvelle_succursale : String|undefined;
    etat1 : number|undefined ;
    etat2 : number|undefined ;
    utilisateur : Gestionnaire = new Gestionnaire();

}

