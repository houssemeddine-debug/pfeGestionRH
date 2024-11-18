import { Direct } from "./direct";

export class Societe {
    nom_societe : string |undefined; 
    mat_societe : number |undefined; 
    email_societe : string |undefined; 
    adrese_societe : string |undefined; 
    directeur1 : Direct = new Direct();
}
