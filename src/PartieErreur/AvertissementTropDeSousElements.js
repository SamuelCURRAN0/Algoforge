class AvertissementTropDeSousElements extends AvertissementConceptuel
{
    // ATTRIBUTS
    _listeElementsConcernes ; // array<ElementGraphique>

    // CONSTRUCTEUR
    constructor(elementEmetteur, listeElementsConcernes = new Array())
    {
        super(elementEmetteur);
        this._listeElementsConcernes = listeElementsConcernes;
    }

    // ENCAPSULATION
    set _listeElementsConcernes(value)
    {
        this._listeElementsConcernes = value;
    }

    get _listeElementsConcernes()
    {
        return this._listeElementsConcernes;
    }
    // METHODES
    toString()
    {
        return "L'élément en surbrillance a trop de sous-éléments.";
    }
<<<<<<< HEAD
=======
    
>>>>>>> 97a8bcb485b17c5ec7e689a9688246a99259b373
    static detecterAnomalie(unElementGraphique)
    {
        return unElementGraphique.getEnfants().length > 7;
    }
}