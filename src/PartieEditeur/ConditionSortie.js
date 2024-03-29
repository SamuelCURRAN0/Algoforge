class ConditionSortie extends ElementGraphique {
    // ATTRIBUTS -non-

    // CONSTRUCTEUR
    constructor(abscisse = 0, ordonnee = 0) {
        super(abscisse, ordonnee);
    }

    // ENCAPSULATION -non-

    // METHODES
    afficher() {
        // Inutile car géré par le CSS, mais présent pour la cohérence
        return null;
    }

    rechercherAnomalies() {
        let mesAnomalies = [];

        //5
        if(ErreurArretHorsIteratif.detecterAnomalie(this)) {
            mesAnomalies.push(new ErreurArretHorsIteratif(this));
        }

        if(mesAnomalies.length == 0){
            if(ErreurArretIteratifBornee.detecterAnomalie(this)){
                mesAnomalies.push(new ErreurArretIteratifBornee(this));
            }
        }
        let problemeJamaisExecute = AvertissementSProblemeJamaisExecute.detecterAnomalie(this);
        if(problemeJamaisExecute[0]){
            mesAnomalies.push(new AvertissementSProblemeJamaisExecute(this, problemeJamaisExecute[1]));
        }
        return super.rechercherAnomalies(mesAnomalies);
    }

    extraireInformation() {
        return [];
    }

    toJSON() {
        return {
            typeElement: this.constructor.name,
            abscisse: this._abscisse,
            ordonnee: this._ordonnee
        };
    }
} window.customElements.define("condition-sortie-element", ConditionSortie);
