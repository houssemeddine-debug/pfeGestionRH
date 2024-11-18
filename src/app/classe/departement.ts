import { Succrsale } from "./succrsale";

export class Departement {
   id :Number|undefined  ;
   nom_departement:string | undefined  ;
   email_departement : string | undefined  ;   
   succursale : Succrsale = new Succrsale();

}
