class Condition extends HTMLElement {
    // ATTRIBUTS
    _libelle; // String
    _elemParent; // ElementParent (liste des enfants)
    _structure; // StructureAlternative qui contient cette condition

    // CONSTRUCTEUR
    constructor(libelle = "", elemParent = new ElementParent(), structure = null) {
        super();
        this._libelle = libelle;
        this._elemParent = elemParent;
        this._structure = structure;
        if (this._elemParent != null) {
            elemParent._proprietaire = this;
        }
        this.afficher();
    }

    // ENCAPSULATION
    get _libelle() {
        return this._libelle;
    }

    set _libelle(value) {
        this._libelle = value;
    }

    get _elemParent() {
        return this._elemParent;
    }

    set _elemParent(value) {
        this._elemParent = value;
    }

    get _structure() {
        return this._structure;
    }

    set _structure(value) {
        this._structure = value;
    }

    // METHODES
    afficher() {
        let buttonSupprimer = document.createElement("button");
        buttonSupprimer.className = "supprimer";
        buttonSupprimer.innerHTML = "-"
        buttonSupprimer.style.display = "none";
        this.appendChild(buttonSupprimer);

        let divLibelle = document.createElement("div");
        divLibelle.className = "libelle";
        divLibelle.innerHTML = this._libelle;
        divLibelle.contentEditable = "true";
        this.appendChild(divLibelle);

        let divDragHandle = document.createElement("div");
        divDragHandle.className = "dragHandle";
        divDragHandle.innerHTML = "• • •<br>• • •"
        this.appendChild(divDragHandle);
    }

    afficherBoutonSupp() {
        this.querySelector("button.supprimer").style.display = "block";
    }

    cacherBoutonSupp() {
        this.querySelector("button.supprimer").style.display = "none";
    }

    supprimer() {
        this._structure.supprimerCondition(this);
        delete this;
    }

    toJSON() {
        return {
            typeElement: this.constructor.name,
            libelle: this._libelle,
            enfants: this._elemParent.toJSON()
        };
    }  
} window.customElements.define("condition-element", Condition);