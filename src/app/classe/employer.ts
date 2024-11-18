import { Succrsale } from "./succrsale";

export class Employer {
    ncin: number|undefined ;
    nom: string|undefined
    prenom: string|undefined
    mdp: string|undefined
    role: string|undefined
    email : string|undefined;
    etat : string|undefined;
    succursale: Succrsale = new Succrsale();
}
