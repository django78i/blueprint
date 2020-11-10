export class Projet {
    constructor(
        public id: string,
        public titre: string,
        public sousTitre: string,
        public couleurProjet: string,
        public couleurText: string,
        public domaine: string,
        public taille: string,
        public role: string,
        public imageBanniere: string,
        public imageMiniature: string,
        public categories: [],
        public rows: Rows[]
        ) { }
    }
    
    export class Rows {
        constructor(
            public contenu: string,
            public couleurRow: string,
            public couleurRowText: string,
            public position: string,
            public textTitre1: string,
            public textTitre2: string,
            public textTitre3: string,
            public editor: string,
            public imageUrl: string,
            public stats: Stats[]
            ) { }

}
export class Stats {
    constructor(
        public stat: string,
        public description: string
    ){}
}
