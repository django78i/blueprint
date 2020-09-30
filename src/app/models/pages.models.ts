export class Projet {
    constructor(
        _id: String,
        public titre: string,
        public sousTitre: string,
        public imageBanniere: string,
        public imageMiniature: string,
        public categories: [],
        public rows: string[]
        
    ) { }
}

export class Text {
    constructor(
        public contenu: String,
        public position: String,
        public textTitre1: String,
        public textTitre2: String,
        public textTitre3: String,
        public imageUrl: String,
        public editor: String,
        public stats : string[]
    ) { }
}
