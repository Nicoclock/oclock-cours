export const day1 = {
    useCases: [
        {
            language: 'MARKDOWN',
            code: 
`|En tant que ...|J'ai besoin de ...|Afin de ...|Sprint|
|---------------|------------------|-----------|------|`
        },
        {
            language: 'MARKDOWN',
            code: 
`
|En tant que ...|J'ai besoin de ...|Afin de ...|Sprint|
|---------------|------------------|-----------|------|
|visiteur|consulter la page d'accueil|prévisualiser le contenu du site||
|visiteur|visualiser les titres des quiz|choisir le quiz auquel je veux répondre||
|visiteur|visualiser la description et l'auteur d'un quiz sur l'accueil|obtenir des infos avant de choisir||
|visiteur|visualiser les questions d'un quiz|visualiser la diffictulté de chaque question||
|visiteur|visualiser le contexte d'un quiz sur sa page|||
|visiteur|visualiser tous les thèmes|pouvoir accéder aux quiz d'un thème||
|visiteur|visualiser tous les quiz d'un thème|||
|visiteur|accéder à un formulaire d'inscription|m'inscrire||
|visiteur|accéder à un formulaire de login|me connecter||
|visiteur|m'inscrire|avoir un compte et répondre aux quiz||
|visiteur|me connecter|répondre aux quiz||
|membre|afficher mon profil|consulter les infos de mon compte||
|membre|pouvoir me déconnecter|||
|membre|répondre aux quiz|vérifier mes connaissances||
|membre|visualiser mon score|||
|membre|visualiser mes bonnes et mauvaises réponses|savoir quelles erreurs j'ai faites||
|admin|avoir un espace admin réservé|pouvoir gérer le contenu du site||
|admin|pouvoir ajouter/modifier/supprimer un auteur de quiz|||
|admin|pouvoir ajouter/modifier/supprimer un sujet/tag de quiz|||
|admin|pouvoir modifier les données de chaque quiz|||
|admin|pouvoir modifier les données de chaque question|||`
        },
        {
            language: 'MARKDOWN',
            code:
`|En tant que ...|J'ai besoin de ...|Afin de ...|Sprint|
|---------------|------------------|-----------|------|
|visiteur|consulter la page d'accueil|prévisualiser le contenu du site|1|
|visiteur|visualiser les titres des quiz|choisir le quiz auquel je veux répondre|1|
|visiteur|visualiser la description et l'auteur d'un quiz sur l'accueil|obtenir des infos avant de choisir|1|
|visiteur|visualiser les questions d'un quiz|visualiser la diffictulté de chaque question|1|
|visiteur|visualiser le contexte d'un quiz sur sa page||1|
|visiteur|visualiser tous les thèmes|pouvoir accéder aux quiz d'un thème|1|
|visiteur|visualiser tous les quiz d'un thème||1|
|visiteur|accéder à un formulaire d'inscription|m'inscrire|1|
|visiteur|accéder à un formulaire de login|me connecter|1|
|visiteur|m'inscrire|avoir un compte et répondre aux quiz|2|
|visiteur|me connecter|répondre aux quiz|2|
|membre|afficher mon profil|consulter les infos de mon compte|2|
|membre|pouvoir me déconnecter||2|
|membre|répondre aux quiz|vérifier mes connaissances|3|
|membre|visualiser mon score||3|
|membre|visualiser mes bonnes et mauvaises réponses|savoir quelles erreurs j'ai faites|3|
|admin|avoir un espace admin réservé|pouvoir gérer le contenu du site|4|
|admin|pouvoir ajouter/modifier/supprimer un auteur de quiz||4|
|admin|pouvoir ajouter/modifier/supprimer un sujet/tag de quiz||4|
|admin|pouvoir modifier les données de chaque quiz||4|
|admin|pouvoir modifier les données de chaque question||4|`
        }
    ],
    mcd: [
        {
            language: 'TEXT',
            code: 
`UTILISATEUR: _nom, prénom, email, password
QUIZ: _titre, description
THEME: _nom


NIVEAU: _nom
QUESTION: _description, anecdote, wiki
REPONSE: _description`
        },
        {
            language: 'TEXT',
            code: 
`UTILISATEUR: _nom, prénom, email, password
créé, 0N UTILISATEUR, 11 QUIZ
QUIZ: _titre, description
`
        },
        {
            language: 'TEXT',
            code: 
`QUIZ: _titre, description
appartient, 0N QUIZ, 0N THEME
THEME: _nom
`
        },
        {
            language: 'TEXT',
            code: 
`THEME: _nom


possède, 0N QUIZ, 11 QUESTION


NIVEAU: _nom`
        },
        {
            language: 'TEXT',
            code: 
`NIVEAU: _nom
concerne, 0N NIVEAU, 11 QUESTION
QUESTION: _description, anecdote, wiki
`
        },
        {
            language: 'TEXT',
            code: 
`QUESTION: _description, anecdote, wiki
contient, 0N QUESTION, 11 REPONSE
REPONSE: _description`
        },
        {
            language: 'TEXT',
            code: 
`QUESTION: _description, anecdote, wiki
contient, 0N QUESTION, 11 REPONSE


:
:

valide, 11 QUESTION, 01 REPONSE
:
REPONSE: _description`
        },
        {
            language: 'TEXT',
            code: 
``
        }
    ]
};

export const day2 = {
    mld: [
        {
            language: 'TEXT',
            code:
`niveau (id, nom)
utilisateur (id, nom, prénom, email, password)
quiz (id, titre, description)
theme (id, nom)
question (id, description, anecdote, wiki)
reponse (id, description)`
        },
        {
            language: 'TEXT',
            code:
`quiz (id, titre, description, #utilisateur(id))`
        },
        {
            language: 'TEXT',
            code:
`question (id, description, anecdote, wiki, #quiz(id))`
        },
        {
            language: 'TEXT',
            code:
`question (id, description, anecdote, wiki, #quiz(id), #niveau(id))`
        },
        {
            language: 'TEXT',
            code:
`reponse (id, description, #question(id))`
        },
        {
            language: 'TEXT',
            code:
`question (id, description, anecdote, wiki, #quiz(id), #niveau(id), #reponse(id))`
        },
        {
            language: 'TEXT',
            code:
`quiz_appartient_theme (#quiz(id), #theme(id))`
        }
    ],
    sql: [
        {
            language: 'SQL',
            code: 
`-- --------------------------------------------
-- Création des tables pour l'application oQuiz
-- --------------------------------------------

-- par convention, on nomme nos tables au singulier, en anglais, en minuscule et en snake_case
-- on va toutes les entourer de double quotes (') pour éviter toute confusion à postgreSQL

-- --------------------------------------------`
        },
        {
            language: 'SQL',
            code: 
`-- On va sécuriser notre script en effectuant une transaction : 

-- BEGIN;
-- nos requêtes de création
-- COMMIT;

-- Les requêtes vont être 'prédigérées' par PostgreSQL avant d'être envoyées à la base
-- ainsi, en cas d'erreur, même à la dernière requête, la transaction entière va être annulée
-- pas de risque que le fichier soit partiellement exécuté, c'est tout ou rien

-- début de la transaction
BEGIN;

-- aucune erreur, envoi de la transaction sur le serveur PostgreSQL
COMMIT;`
        },
        {
            language: 'SQL',
            code: 
`-- avant de créer des tables, par sécurité, on les supprime
DROP TABLE 'level', 'user', 'quiz', 'tag', 'question', 'answer', 'quiz_has_tag';

-- on est sûr que la base est propre, on peut commencer la création`
        },
        {
            language: 'SQL',
            code: 
`-- pour tous nos champs id, nos clé primaires, on va utiliser le type serial
-- ce type est un pseudo-type, c'est en fait un INTEGER NOT NULL relié à une table interne qui permet de l'incrémenter à chaque nouvel enregistrement
-- la 'vraie' syntaxe serait id integer NOT NULL DEFAULT nextval(''<table>_id_seq''::regclass)`
        },
        {
            language: 'SQL',
            code: 
`-- --------------------------------------------
-- table level
-- --------------------------------------------

CREATE TABLE IF NOT EXISTS 'level' (
    'id' serial PRIMARY KEY,
    'name' text NOT NULL
);`
        },
        {
            language: 'SQL',
            code: 
`-- --------------------------------------------
-- table user
-- --------------------------------------------

CREATE TABLE IF NOT EXISTS 'user' (
  'id' serial PRIMARY KEY,
  'email' text NOT NULL,
  'password' text NOT NULL,
  'firstname' text NULL,
  'lastname' text NULL
);`
        },
        {
            language: 'SQL',
            code: 
`-- --------------------------------------------
-- table quiz
-- --------------------------------------------

CREATE TABLE IF NOT EXISTS 'quiz' (
  'id' serial PRIMARY KEY,
  'title' text NOT NULL,
  'description' text NULL,
  -- on définit la clé étrangère directement à la création de la table avec REFERENCES <table>(<champ>)
  -- par convention, ce champ est nommé <table>_<champ>
  'user_id' integer NOT NULL REFERENCES 'user'('id')
);`
        },
        {
            language: 'SQL',
            code: 
`-- --------------------------------------------
-- table tag
-- --------------------------------------------

CREATE TABLE IF NOT EXISTS 'tag' (
  'id' serial PRIMARY KEY,
  'name' text NOT NULL
);`
        },
        {
            language: 'SQL',
            code: 
`-- --------------------------------------------
-- table question
-- --------------------------------------------

-- on ne peut pas créer ici la référence vers la bonne réponse : la table answer n'a pas encore été créée
-- on pourra rajouter cette info dans un 2ème temps, après la création de toutes les tables

CREATE TABLE IF NOT EXISTS 'question' (
  'id' serial PRIMARY KEY,
  'question' text NOT NULL,
  'anecdote' text NULL,
  'wiki' text NULL,
  'level_id' integer NOT NULL REFERENCES 'level' ('id'),
  'answer_id' integer NOT NULL,
  'quiz_id' integer NOT NULL REFERENCES 'quiz' ('id')
);`
        },
        {
            language: 'SQL',
            code: 
`-- --------------------------------------------
-- table answer
-- --------------------------------------------

CREATE TABLE IF NOT EXISTS 'answer' (
  'id' serial PRIMARY KEY,
  'description' text NOT NULL,
  'question_id' integer NOT NULL REFERENCES 'question'('id')
);`
        },
        {
            language: 'SQL',
            code: 
`-- --------------------------------------------
-- table quiz_has_tag
-- --------------------------------------------

CREATE TABLE IF NOT EXISTS 'quiz_has_tag' (
  'quiz_id' integer REFERENCES 'quiz'('id'),
  'tag_id' integer REFERENCES 'tag' ('id'),
  -- on ne peut pas utiliser le mot-clé PRIMARY KEY sur plusieurs champs
  -- pour indiquer une clé primaire sur plusieurs champs, on la définit à part, après les champs
  PRIMARY KEY ('quiz_id', 'tag_id')
);`
        },
        {
            language: 'SQL',
            code: 
`-- toutes les tables sont créées, on peut maintenant ajouter la clé étrangère manquante sur la table question
ALTER TABLE 'question'
  ADD FOREIGN KEY ('answer_id') REFERENCES 'answer'('id');`
        }
    ],
    poo: [
        {
            code:
`//glace.js
// l'object est très pratique pour stocker des informations et de la logique sous la même référence
const glace = {
    taille: 'grande',
    parfums: ['vanille'],
    ajouterParfum: (parfum) => {
        glace.parfums.push(parfum);
    },
    toString: () => {
        return \`Taille de la glace : \${glace.taille}, parfums : \${glace.parfums.join(', ')}\`;
    }
}
//on peut utiliser ses méthodes après la déclaration, dans le corps du programme
glace.ajouterParfum('chocolat');
console.log(glace.toString());


// si on veut créer une autre glace, on fait un nouvel object
const glace2 = {
    taille: 'petite',
    parfums: ['citron vert']
}

//on voudrait utiliser la même méthode que dans le 1er object pour ajouter un parfum
glace2.ajouterParfum('goyave');
//erreur, la fonction n'existe pas dans ce 2ème object

//les méthodes définies dans le 1er object ne sont pas reportées dans le 2ème, on serait obligé de les redéclarer
//c'est pas DRY (Don't Repeat Yourself), c'est yeark`
        },
        {
            code:
`/on déclare notre usine
const glaceFactory = {
    //notre méthode de fabrication : on passe en paramètre les propriétés de la glace
    //on peut obtenir des objects glace différents avec la même méthode
    createGlace: (taille, parfums) => {
        const glace = {
            //dans un object en ES6, quand la propriété a le même nom que la variable, on peut utiliser une notation raccourcie
            // Au lieu de mettre
            //  taille: taille, 
            //on peut noter directement 
            //  taille,
            taille,
            parfums,
            ajouterParfum: (parfum) => {
                glace.parfums.push(parfum);
            },
            toString: () => {
                return \`Taille de la glace : \${glace.taille}, parfums : \${glace.parfums.join(', ')}\`;
            }
        };
        return glace;
    }
}

//on utilise notre usine pour fabriquer des glaces

const glace1 = glaceFactory.createGlace('grande', ['vanille']);
//on ajoute un parfum
glace1.ajouterParfum('chocolat');
console.log(glace1.toString());

//une 2ème glace
const glace2 = glaceFactory.createGlace('petite', ['citron vert', 'goyave']);
console.log(glace2.toString());

//les 2 objects ont des propriétés différentes qu'on passe en argument à la factory
//Malgré leurs différences, ils partagent les mêmes fonctionnalités, on n'a pas eu à ré-écrire ajouterParfum et toString
//L'usine donne ces méthodes à tous les objects qu'elle crée, comme un moule commun à tous les objects`
        },
        {
            code:
`//par convention, un nom de class commence toujours par une majuscule
//on la déclare avec le mot-clé class suivi de son nom et d'une paire d'accolades
class Glace {
    //pour ajouter des propriétés, pas de const ou let ou var, juste le nom de la propriété
    taille;
    //on peut assigner une valeur directement à la déclaration
    //ATTENTION, c'est bien un '=' et pas ':'
    parfums = [];
}

//on crée une instance, un object concret, avec le mot-clé new suivi du nom de la class et d'une paire de parenthèses
const glace = new Glace();
console.log(glace);`
        },
        {
            code:
`//on crée une instance, un object concret, avec le mot-clé new suivi du nom de la class et d'une paire de parenthèses
const glace = new Glace();
//on peut donner une valeur à une propriété après la création, comme pour un object 'classique'
glace.taille = 'grande';
console.log(glace);`
        },
        {
            code:
`//par convention, un nom de class commence toujours par une majuscule
//on la déclare avec le mot-clé class suivi de son nom et d'une paire d'accolades
class Glace {
    //pour ajouter des propriétés, pas de const ou let ou var, juste le nom de la propriété
    taille;
    //on peut assigner une valeur directement à la déclaration
    //ATTENTION, c'est bien un '=' et pas ':'
    parfums = [];

    //on souhaite passer des arguments à la création de l'object
    //on utilise la méthode 'cachée' constructor en indiquant les paramètres qu'on souhaite recevoir
    constructor(taille, parfums) {
        //pour stocker les valeurs dans l'object final, on utilise le mot-clé this
        //ce mot-clé sert à désigner l'instance courante, l'object en cours de fabrication
        this.taille = taille;
        this.parfums = parfums;
    }
}

//on crée une instance, un object concret, avec le mot-clé new suivi du nom de la class et d'une paire de parenthèses
//on a défini un constructeur, on peut passer des arguments entre les parenthèses
const glace = new Glace('grande', ['vanille', 'chocolat']);
console.log(glace);`
        },
        {
            code:
`//par convention, un nom de class commence toujours par une majuscule
//on la déclare avec le mot-clé class suivi de son nom et d'une paire d'accolades
class Glace {
    //pour ajouter des propriétés, pas de const ou let ou var, juste le nom de la propriété
    taille;
    //on peut assigner une valeur directement à la déclaration
    //ATTENTION, c'est bien un '=' et pas ':'
    parfums = [];

    //on souhaite passer des arguments à la création de l'object
    //on utilise la méthode 'cachée' constructor en indiquant les paramètres qu'on souhaite recevoir
    constructor(taille, parfums) {
        //pour stocker les valeurs dans l'object final, on utilise le mot-clé this
        //ce mot-clé sert à désigner l'instance courante, l'object en cours de fabrication
        this.taille = taille;
        this.parfums = parfums;
    }

    //pour ajouter une méthode d'instance, une fonction dispo pour tous les objects de class Glace
    //on peut la déclarer en indiquant:
    //<nom_méthode>(<paramètres>) {}
    ajouterParfum(parfum) {
        this.parfums.push(parfum);
    };

    toString() {
        return \`Taille de la glace : \${this.taille}, parfums : \${this.parfums.join(', ')}\`;
    }

    //dans ces méthodes, toutes les prorpiétés de l'object sont accessibles avec le mot-clé this qui désigne l'instance courante
}

//on crée une instance, un object concret, avec le mot-clé new suivi du nom de la class et d'une paire de parenthèses
//on a défini un constructeur, on peut passer des arguments entre les parenthèses
const glace = new Glace('grande', ['vanille', 'chocolat']);
console.log(glace.toString());

const glace2 = new Glace('petite', ['citron vert']);
glace2.ajouterParfum('goyave');
console.log(glace2.toString());`
        },
        {
            code:
`1 class Pizza {
2 	taille;
3 	ingredients: []
4 	
5 	toString() {
6 		return \`Pizza de taille \${this.taille}, ingredients: \${ingredients.join(', )}\`;
7 	}
8 }`
        },
        {
            code:
`//glaceClass2.js
//par convention, un nom de class commence toujours par une majuscule
//on la déclare avec le mot-clé class suivi de son nom et d'une paire d'accolades
class Glace {
    //pour ajouter des propriétés, pas de const ou let ou var, juste le nom de la propriété
    //pour protéger notre propriété, on la préfixe avec un '_'
    //On va utiliser un getter pour accéder à sa valeur
    // et un setter pour la mettre à jour
    _taille;
    //on peut assigner une valeur directement à la déclaration
    //ATTENTION, c'est bien un '=' et pas ':'
    _parfums = [];

    //on souhaite passer des arguments à la création de l'object
    //on utilise la méthode 'cachée' constructor en indiquant les paramètres qu'on souhaite recevoir
    constructor(taille, parfums) {
        //pour stocker les valeurs dans l'object final, on utilise le mot-clé this
        //ce mot-clé sert à désigner l'instance courante, l'object en cours de fabrication

        //avec notre modif de nom de variable, c'est le getter qui est appelé ici
        this.taille = taille;
        this.parfums = parfums;
    }

    //on est obligé de faire une fonction nommée pour les getters et setters
    //la notation <nom> = () => {} ne fonctionne pas ici

    //getter : permet de récupérer la valeur de la propriété
    get taille() {
        return this._taille;
    }

    set taille(value) {
        //dans le getrter, on peut vérifier le type de données avant de mettre à jour la propriété
        if (typeof value !== 'string')
            //si le type est incorrect, on envoie une erreur pour avertir le développeur
            throw new Error('La valeur de taille doit être une string');
        //pas d'erreur envoyée, le type est correct, on peut sereinement mettre à jou la 'vraie' propriété
        this._taille = value;
    }

    get parfums() {
        return this._parfums;
    }

    set parfums(value) {
        //instanceof est opérateur qui permet de vérifier la class d'un object
        // de la forme <valeur> instanceof <className>
        //renvoie un boolean
        if (value instanceof Array === false)
            throw new Error('La valeur de parfums doit être un tableau');
        this._parfums = value;
    }


    //pour ajouter une méthode d'instance, une fonction dispo pour tous les objects de class Glace
    //on peut la déclarer en indiquant:
    //<nom_méthode>(<paramètres>) {}
    ajouterParfum(parfum) {
        this.parfums.push(parfum);
    };

    toString() {
        return \`Taille de la glace : \${this.taille}, parfums : \${this.parfums.join(', ')}\`;
    }

    //dans ces méthodes, toutes le sprorpiétés de l'object sont accessible avec le mot-clé this qui désigne l'instance courante
}

//on crée une instance, un object concret, avec le mot-clé new suivi du nom de la class et d'une paire de parenthèses
//on a défini un constructeur, on peut passer des arguments entre les parenthèses
const glace = new Glace('grande', ['vanille', 'chocolat']);
console.log(glace.toString());

const glace2 = new Glace('petite', ['citron vert']);
glace2.ajouterParfum('goyave');
console.log(glace2.toString());`
        },
        {
            code:
`1 class Pizza {
2 	_taille;
3 	ingredients = []
4 	
5	set taille(value) {
6		this.taille = value;
7	}
8 }`
        },
        {
            code:
`class Vehicule {
    _nbWheels;
    _enginePower;
    _isStarted = false;

    constructor(nbWheels, enginePower) {
        this.nbWheels = nbWheels;
        this.enginePower = enginePower;
    }

    get nbWheels() {
        return this._nbWheels;
    }

    set nbWheels(value) {
        if (typeof value !== 'number')
            throw new Error('La valeur de nbWheels doit être un number');
        this._nbWheels = value
    }

    get enginePower() {
        return this._enginePower;
    }

    set enginePower(value) {
        if (typeof value !== 'number')
            throw new Error('La valeur de enginePower doit être un number');
        this._enginePower = value
    }

    get isStarted() {
        return this._isStarted;
    }

    set isStarted(value) {
        if (typeof value !== 'boolean')
            throw new Error('La valeur de isStarted doit être un boolean');
        this._isStarted = value
    }

    start() {
        this.isStarted = true;
    }

    stop() {
        this.isStarted = false;
    }

    toString() {
        let str = \`Véhicule à \${this.nbWheels} roues, de puissance \${this.enginePower}, \`;
        if (this.isStarted)
            str += 'est démarré.';
        else
            str += 'n\\'est pas démarré.';
        return str;

        //version courte
        //return \`Véhicule à \${this.nbWheels} roues, de puissance \${this.enginePower}, \${this.isStarted ? 'est démarré' : 'n\\'est pas démarré'}.\`;
    }

}

const vehicule = new Vehicule(4, 80);
console.log(vehicule.toString());
vehicule.start();
console.log(vehicule.toString());`
        },
        {
            code:
`//pour faire hériter une classe d'une autre, on utilise le mot-clé extends
// on dira d'ailleurs qu la classe fille étend la classe mère
class Voiture extends Vehicule {
    //on crée un constructeur spécifique pour cette classe
    //il va utiliser le code de la classe mère pour initialiser les propriété de Voiture
    constructor(enginePower) {
        //le nombre de roues est connu, on le passe 'en dur'
        //la puissance moteur reste configurable, on la passe en paramètre du constructeur
        //dans une classe, 'this' désigne l'instance en cours, 'super' désigne l'instance de la classe mère
        //on utilise le constructeur de Vehicule pour créer notre Voiture 
        super(4, enginePower);
    }

    //toutes les méthodes de Vehicule sont disponibles dans Voiture
    //On peut choisir de les utiliser telles quelles ou de les modifier
    //on appelle ça surcharger une méthode
    toString() {
        return 'Voiture : ' + super.toString();
    }
}

const voiture = new Voiture(80);
voiture.start();
console.log(voiture.toString());`
        },
        {
            code:
`class Moto extends Vehicule {
    constructor(enginePower) {
        super(2, enginePower);
    }

    toString() {
        return 'Moto : ' + super.toString();
    }
}

const moto = new Moto(160);
moto.start();
console.log(moto.toString());

console.log('moto est de class Moto : ', moto instanceof Moto);
console.log('moto est aussi de class Vehicule : ', moto instanceof Vehicule);`
        },
        {
            code:
`class Person {
    firstName;
    lastName;
    age;
    state = 'vivant';

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayHello() {
        return \`Salut, je suis \${this.firstName} \${this.lastName}, j'ai \${this.age} ans et je suis \${this.state}\`;
    }
}

const person = new Person('Nico', 'Charpin', 42);
console.log(person.sayHello());`
        },
        {
            code:
`class Vampire extends Person {
    
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this.state = 'mort-vivant';
    }
}

const lestat = new Vampire('Lestat', 'de Lioncourt', 127);
console.log(lestat.sayHello());`
        },
        {
            code:
`class Vampire extends Person {
    
    //super-pouvoir des vampires : ils savent combien ils sont dans le monde
    //on attache une propriété à la class Vampire
    //Elle sera disponible dans chaque instance et chaque instance pourra la modifier

    //On attache cette propriété à la class avec le mot-clé static
    static nbVampires = 0;

    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this.state = 'mort-vivant';
        //à chaque création de vampire, on incrément la propriété statique
        //pour y accéder, on utilisera <nom_de_class>.<nom_prop_static>
        Vampire.nbVampires++;
    }

    //on modifie sayHello de Vampire pour afficher le nombre de vampires dans le monde JS
    sayHello() {
        return super.sayHello() + \`. Nous sommes actuellement \${Vampire.nbVampires} dans le monde\`;
    } 
}

const lestat = new Vampire('Lestat', 'de Lioncourt', 227);
const louis = new Vampire('Louis', 'de Pointe du Lac', 103);

console.log(louis.sayHello());
console.log(lestat.sayHello());`
        },
        {
            code:
`class Level {
    
    //déclaration des propriétés
    _id;
    _name;

    constructor(obj) {
        //pour sécuriser l'intégrité, on tiutilise le setter plutôt que la 'vraie' propriété
        this.id = obj.id;
        this.name = obj.name;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
};

module.exports = Level;`
        }
    ]
};

export const day3 = {
    ar: [
        {
            language: 'SQL',
            code: 
`CREATE ROLE oquiz WITH LOGIN PASSWORD 'oquiz';
CREATE DATABASE oquiz OWNER oquiz;`
        },
        {
            code: 
`class Answer {

    //propriétés
    _id;
    _description;
    //pour rester cohérent avec le nom des champs en base, on garde la snake_case
    _question_id;

    constructor(obj) {
        this.id = obj.id;
        this.description = obj.description;
        this.question_id = obj.question_id
    }

};

module.exports = Answer;`
        },
        {
            code:
`class Level  {

    //propriétés
    _id;
    _name;

    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
    }
};

module.exports = Level;`
        },
        {
            code: 
`class Question {

    //propriétés
    _id;
    _question;
    _anecdote;
    _wiki;
    _level_id;
    _answer_id;
    _quiz_id;

    constructor(obj) {
        this.id = obj.id;
        this.question = obj.question;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.answer_id = obj.answer_id;
        this.quiz_id = obj.quiz_id;
    }

};

module.exports = Question;`
        },
        {
            code: 
`class Quiz {

    //propriétés
    _id;
    _title;
    _description;
    //pour rester cohérent avec le nom des champs en base, on garde la snake_case
    _user_id;

    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.description = obj.description;
        this.user_id = obj.user_id;
    }

};

module.exports = Quiz;`
        },
        {
            code: 
`class Tag {

    //propriétés
    _id;
    _name;

    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
    }

};

module.exports = Tag;`
        },
        {
            code: 
`class User {

    //propriétés
    _id;
    _email;
    _password;
    _firstname;
    _lastname

    //l'object reçu en paramètre sera de la forme
    // {
    //     id: 1,
    //     name: 'débutant'
    // }
    constructor(obj) {
        this.id = obj.id;
        this.email = obj.email;
        this.password = obj.password;
        this.firstName = obj.firstname;
        this.lastname = obj.lastname;
    }

};

module.exports = User;`
        },
        {
            code: 
`class CoreModel {
    _id;

    constructor(obj) {
        this.id = obj.id;
    }
};

module.exports = CoreModel;`
        },
        {
            code: 
`//on importe la classe CoreModel
const CoreModel = require('./CoreModel');

//on définit Answer comme classe fille de CoreModel
class Answer extends CoreModel {

    //propriétés
    //la propriété _id est déclarée dans CoreModel, plus besoin de la remettre ici
    _description;
    //pour rester cohérent avec le nom des champs en base, on garde la snake_case
    _question_id;

    constructor(obj) {
        //afin que _id soit initialisée à la création, on utilise le constructeur de la classe mère
        super(obj);
        this.description = obj.description;
        this.question_id = obj.question_id
    }

};

module.exports = Answer;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class Level extends CoreModel {
    
    _name;

    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }

};

module.exports = Level;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class Question extends CoreModel {

    //propriétés
    _question;
    _anecdote;
    _wiki;
    _level_id;
    _answer_id;
    _quiz_id;

    constructor(obj) {
        super(obj);
        this.question = obj.question;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.answer_id = obj.answer_id;
        this.quiz_id = obj.quiz_id;
    }

};

module.exports = Question;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class Quiz extends CoreModel {

    //propriétés
    _title;
    _description;
    _user_id;

    constructor(obj) {
        super(obj)
        this.title = obj.title;
        this.description = obj.description;
        this.user_id = obj.user_id;
    }

};

module.exports = Quiz;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class Tag extends CoreModel {

    //propriétés
    _name;

    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }

};

module.exports = Tag;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class User extends CoreModel {

    //propriétés
    _email;
    _password;
    _firstname;
    _lastname

    constructor(obj) {
        super(obj);
        this.email = obj.email;
        this.password = obj.password;
        this.firstName = obj.firstname;
        this.lastname = obj.lastname;
    }

};

module.exports = User;`
        },
        {
            code: 
`class CoreModel {
    _id;

    constructor(obj) {
        this.id = obj.id;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        if (typeof value !== 'number')
            throw new Error('La valeur du champ id doit être de type number');
        this._id = value;
    }
};

module.exports = CoreModel;`
        },
        {
            code: 
`//on importe la classe CoreModel
const CoreModel = require('./CoreModel');

//on définit Answer comme classe fille de CoreModel
class Answer extends CoreModel {

    //propriétés
    //la propriété _id est déclarée dans CoreModel, plus besoin de la remettre ici
    _description;
    //pour rester cohérent avec le nom des champs en base, on garde la snake_case
    _question_id;

    constructor(obj) {
        //afin que _id soit initialisée à la création, on utilise le constructeur de la classe mère
        super(obj);
        this.description = obj.description;
        this.question_id = obj.question_id
    }

    //Getters

    get description() {
        return this._description;
    }

    get question_id() {
        return this._question_id;
    }

    //Setters

    set description(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ description doit être de type string');
        this._description = value;
    }

    set question_id(value) {
        if (typeof value !== 'number')
            throw new Error('La valeur du champ question_id doit être de type number');
        this._question_id = value;
    }
};

module.exports = Answer;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class Level extends CoreModel {

    //propriétés
    _name;

    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }

    //Getters

    get name() {
        return this._name;
    }

    //Setters

    set name(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ name doit être de type string');
        this._name = value;
    }
};

module.exports = Level;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class Question extends CoreModel {

    //propriétés
    _question;
    _anecdote;
    _wiki;
    _level_id;
    _answer_id;
    _quiz_id;

    constructor(obj) {
        super(obj);
        this.question = obj.question;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.answer_id = obj.answer_id;
        this.quiz_id = obj.quiz_id;
    }

    //Getters

    get question() {
        return this._question;
    }

    get anecdote() {
        return this._anecdote;
    }

    get wiki() {
        return this._wiki;
    }

    get level_id() {
        return this._level_id;
    }

    get answer_id() {
        return this._answer_id;
    }

    get quiz_id() {
        return this._quiz_id;
    }

    //Setters

    set question(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ question doit être de type string');
        this._question = value;
    }

    set anecdote(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ anecdote doit être de type string');
        this._anecdote = value;
    }

    set wiki(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ wiki doit être de type string');
        this._wiki = value;
    }

    set level_id(value) {
        if (typeof value !== 'number')
            throw new Error('La valeur du champ level_id doit être de type number');
        this._level_id = value;
    }

    set answer_id(value) {
        if (typeof value !== 'number')
            throw new Error('La valeur du champ answer_id doit être de type number');
        this._answer_id = value;
    }

    set quiz_id(value) {
        if (typeof value !== 'number')
            throw new Error('La valeur du champ quiz_id doit être de type number');
        this._quiz_id = value;
    }
};

module.exports = Question;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class Quiz extends CoreModel {

    //propriétés
    _title;
    _description;
    _user_id;

    constructor(obj) {
        super(obj)
        this.title = obj.title;
        this.description = obj.description;
        this.user_id = obj.user_id;
    }

    //Getters

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get user_id() {
        return this._user_id;
    }

    //Setters

    set title(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ title doit être de type string');
        this._title = value;
    }

    set description(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ description doit être de type string');
        this._description = value;
    }

    set user_id(value) {
        if (typeof value !== 'number')
            throw new Error('La valeur du champ user_id doit être de type number');
        this._user_id = value;
    }
};

module.exports = Quiz;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class Tag extends CoreModel {

    //propriétés
    _name;

    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }

    //Getters

    get name() {
        return this._name;
    }

    //Setters

    set name(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ name doit être de type string');
        this._name = value;
    }
};

module.exports = Tag;`
        },
        {
            code: 
`const CoreModel = require('./CoreModel');

class User extends CoreModel {

    //propriétés
    _email;
    _password;
    _firstName;
    _lastname

    constructor(obj) {
        super(obj);
        this.email = obj.email;
        this.password = obj.password;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
    }

    //Getters

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ lastname doit être de type string');
        return this._lastname;
    }

    set email(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ email doit être de type string');
        this._email = value;
    }

    set password(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ password doit être de type string');
        this._password = value;
    }

    set firstname(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ firstname doit être de type string');
        this._firstname = value;
    }

    set lastname(value) {
        if (typeof value !== 'string')
            throw new Error('La valeur du champ lastname doit être de type string');
        this._lastname = value;
    }
};

module.exports = User;`
        },
        {
            code:
`//on sépare les préoccupations : Separation of Concerns
//ce module va uniquement gérer la connexion à la base oquiz

//on commence par importer dotenv pour ajouter le contenu de .env dans les variables d'environnement
require('dotenv').config();

//on importe la classe Client depuis le module pg
const {Client} = require('pg');

//on crée une instance en utilisant la variable d'environnement PG_URL
//cette instance est notre lien JS vers la BDD
const client = new Client(process.env.PG_URL);

//on connecte le client pour le rendre prêt à l'emploi
client.connect();
console.log(\`Connection to DB \${process.env.PG_URL} successfull\`);

//on le place dans l'export pour le rendre disponible dans d'autres fichiers de l'appli
module.exports = client;`
        },
        {
            code: 
`//on importe notre client pg prêt à l'emploi
const client = require('./database');

//on importe un 1er modèle pour générer des instances à partir des données reçues de la BDD
const Level = require('./models/level');

const dataMapper = {
    //on va définir les méthodes qui vont récupérer les infos en BDD
    //ces méthodes auront toutes (au moins) un paramètre callback qui sera exécuté quand la BDD aura répondu
};

module.exports = dataMapper;`
        },
        {
            code: 
`//récuperer tous les niveaux
getAllLevels : (callback) => {
    client.query('SELECT * FROM level', (error, result) => {
        //la BDD a donné sa réponse, on continue le traitement
        if (error) {
            //si elle a renvoyé une erreur, on utilise le callback pour le signaler au module qui a appelé la méthode
            callback(error, null);
        } else {
            //on a obtenu des résultats, on va les stocker dans un tableau d'instances de Level
            const levels = [];
            for (const row of result.rows) {
                //le constructeur de Level va savoir mapper les infos de row dans ses propriétés
                levels.push(new Level(row));
            }
            //on a le tableau de Level, on utilise le callback pour le renvoyer au module qui a appelé la méthode
            callback(null, levels);
        }
    });
}`
        },
        {
            code: 
`//on importe le DataMapper
const dataMapper = require('./app/dataMapper');

dataMapper.getAllLevels((error, levels) => {
    //le DataMapper a répondu quelquechose, on continue le traitement
    console.log('Getting all levels');
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        for (const level of levels) {
            console.log(level);
        }
    }
});`
        },
        {
            code: 
`getOneLevel: (id, callback) => {
           
}`
        },
        {
            code: 
`getOneLevel: (id, callback) => {
    client.query('SELECT * FROM level WHERE id=$1', [id], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            //on récupère le niveau
            //result.rows est un tableau, on récupère le 1er (et unique) élément et on le transfome en instance de Level
            const level = new Level(result.rows[0])
            callback(null, level);
        }
    });
}`
        },
        {
            code: 
`dataMapper.getOneLevel(2, (error, level) => {
    console.log('-------------------');
    console.log('Getting 1 level');
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        console.log(level);
    }
});`
        },
        {
            code: 
`toString() {
    return \`Niveau \${this.name} (id: \${this.id})\`;
}`
        },
        {
            code: 
`dataMapper.getAllLevels((error, levels) => {
    //le DataMapper a répondu quelquechose, on continue le traitement
    console.log('Getting all levels');
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        for (const level of levels) {
            console.log(level.toString());
        }
    }
});

dataMapper.getOneLevel(2, (error, level) => {
    console.log('-------------------');
    console.log('Getting 1 level');
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        console.log(level.toString());
    }
});`
        },
        {
            code: 
`const client = require('../database');
...
//Active Record

//récuperer tous les niveaux
findAll(callback) {
    client.query('SELECT * FROM 'level'', (error, result) => {
        //la BDD a donné sa réponse, on continue le traitement
        if (error) {
            //si elle a renvoyé une erreur, on utilise le callback pour le signaler au module qui a appelé la méthode
            callback(error, null);
        } else {
            //on a obtenu des résultats, on va les stocker dans un tableau d'instances de Level
            const levels = [];
            for (const row of result.rows) {
                //le constructeur de Level va savoir mapper les infos de row dans ses propriétés
                levels.push(new Level(row));
            }
            //on a le tableau de Level, on utilise le callback pour le renvoyer au module qui a appelé la méthode
            callback(null, levels);
        }
    });
}`
        },
        {
            code: 
`//La méthode est chargée de créer des instances, on ne peut pas demander à une instance de créer des instances
//on rend la méthode statique pour y accéder à partir du nom de la classe
//on pourra l'appeler comme une propiété statique : Level.findAll(...);
static findAll(callback) {
    client.query('SELECT * FROM 'level'', (error, result) => {
        //la BDD a donné sa réponse, on continue le traitement
        if (error) {
            //si elle a renvoyé une erreur, on utilise le callback pour le signaler au module qui a appelé la méthode
            callback(error, null);
        } else {
            //on a obtenu des résultats, on va les stocker dans un tableau d'instances de Level
            const levels = [];
            for (const row of result.rows) {
                //le constructeur de Level va savoir mapper les infos de row dans ses propriétés
                levels.push(new Level(row));
            }
            //on a le tableau de Level, on utilise le callback pour le renvoyer au module qui a appelé la méthode
            callback(null, levels);
        }
    });
}`
        },
        {
            code: 
`const client = require('../database');
const CoreModel = require('./CoreModel');
...
//on remplace l'appel via le DataMapper par un appel via la méthode statique de Level
Level.findAll((error, levels) => {
    //le DataMapper a répondu quelquechose, on continue le traitement
    console.log('Getting all levels');
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        for (const level of levels) {
            console.log(level.toString());
        }
    }
});`
        },
        {
            code: 
`static findOne(id, callback) {
    client.query('SELECT * FROM level WHERE id=$1', [id], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            //on récupère le niveau
            //result.rows est un tableau, on récupère le 1er (et unique) élément et on le transfome en instance de Level
            const level = new Level(result.rows[0])
            callback(null, level);
        }
    });
}`
        },
        {
            code: 
`Level.findOne(2, (error, level) => {
    console.log('-------------------');
    console.log('Getting 1 level');
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        console.log(level.toString());
    }
});`
        },
        {
            code: 
`//Pour insérer un nouvel enregistrement en base, on part d'une instance qu'on aura créé
//La méthode est donc une méthode d'instance, elle n'est pas rattachée à la class mais bien à un object de cette class
insert(callback) {
    //pour rappel, on peut utiliser un object pour préparer la requête avant de la passer au client pg
    const preparedQuery = {
        //dans la requête on utilise RETURNING pour récupérer le nouvel id généré à l'insertion
        //on l'utilisera pour mettre à jour l'instance de Level
        text: 'INSERT INTO 'level' ('name') VALUES ($1) RETURNING 'id'',
        values: [this.name]
    };

    client.query(preparedQuery, (error, result) => {
        if (error) {
            //on fait un return du callback pour ne pas exécuter la suite du code en cas d'erreur
            return callback(error, null);
        }

        //on utilise rowCount pour checker qu'on a obtenu une valeur de retour grâce à RETURNING
        //si rowCount vaut 0, c'est qu'on a eu un problème ...
        if (result.rowCount) {
            //l'insert a fonctionné, on met à jour notre object avant d'exécuter le callback
            this.id = result.rows[0].id;
            //dans le callback, on passe l'instance courante fraichement mise à jour
            callback(null, this);
        } else {
            callback('Une erreur s\\'est produite, aucun id reçu en retour', this);
        }
    });
}`
        },
        {
            code: 
`const level = new Level({name: 'Super dur'});
level.insert((error, instance) => {
    console.log('-------------------');
    console.log('Inserting 1 level');
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        console.log(instance.toString());
    }
});`
        },
        {
            code: 
`constructor(obj) {
    this._id = obj.id;
}`
        },
        {
            code:
`//pour la mise à jour, on part également d'une instance existante
//la méthode n'a pas besoin  d'être statique
update(callback) {
    //l'instance JS a déjà les propriétés à jour, pas besoin de REURNING ici
    //on se content de faire persister nos données, de reporter les modifs du code en base de données
    client.query('UPDATE 'level' SET 'name'=$1 WHERE id=$2', [this.name, this.id], (error, result) => {
        if (error) {
            return callback(error, null);
        }
        //lors d'un update, result.rowCount contient le nombre de lignes modifiées
        //on checke rowCount pour vérifier qu'au moins une ligne a été modifiée
        if (result.rowCount) {
            callback(null, this);
        } else {
            callback('Une erreur s\\'est produite, aucun enregistrement modifié', this);
        }
    });
}`
        },
        {
            code:
`const level = new Level({id: 4, name: 'Super super dur'});
level.update((error, instance) => {
    console.log('-------------------');
    console.log('Updating 1 level');
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        console.log(instance.toString());
    }
});`
        },
        {
            code:
`//pour la suppression aussi, on part d'une instance existante
delete(callback) {
    client.query('DELETE FROM 'level' WHERE id=$1', [this.id], (error, result) => {
        if (error) {
            return callback(error, null);
        }
        //lors d'un delete, result.rowCount contient le nombre de lignes supprimées
        //on checke rowCount pour vérifier qu'au moins une ligne a été supprimée
        if (result.rowCount) {
            //ici, c'est une suppression, on ne renvoie pas l'instance qui est sensée ne plus exister
            //on renvoi à la place un boolean qui va indiquer que tout s'est bien passé
            callback(null, true);
        } else {
            //en cas d'erreur, on renvoie l'instance puisqu'elle n'a pas été supprimée
            callback('Une erreur s\\'est produite, aucun enregistrement modifié', this);
        }
    });
}`
        },
        {
            code:
`const level = new Level({id: 4, name: 'Super super dur'});
level.delete((error, result) => {
    console.log('-------------------');
    console.log('Deleting 1 level');
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        console.log('Suppression effectuée : ', result);
    }
});`
        }
    ]
};

export const day4 = {
    ar: [
        {
            code:
`//Active Record

//récupérer tous les users
static findAll(callback) {
    client.query('SELECT * FROM 'user'', (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            const users = [];
            for (const row of result.rows) {
                levels.push(new User(row));
            }
            callback(null, users);
        }
    });
}`
        },
        {
            code:
`static findOne(id, callback) {
    client.query('SELECT * FROM user WHERE id=$1', [id], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            const user = new User(result.rows[0])
            callback(null, user);
        }
    });
}`
        },
        {
            code:
`insert(callback) {
    const preparedQuery = {
        text: 'INSERT INTO 'user' ('email', 'password', 'firstname', 'lastname') VALUES ($1, $2, $3, $4) RETURNING 'id'',
        values: [this.email, this.password, this.firstname, this.lastname]
    };

    client.query(preparedQuery, (error, result) => {
        if (error) {
            return callback(error, null);
        }
        if (result.rowCount) {
            this.id = result.rows[0].id;
            callback(null, this);
        } else {
            callback('Une erreur s\\'est produite, aucun id reçu en retour', this);
        }
    });
}`
        },
        {
            code:
`update(callback) {
    client.query('UPDATE 'user' SET 'email'=$1, 'password'=$2, 'firstname'=$3, 'lastname'=$4 WHERE id=$5', 
        [this.email, this.password, this.firstname, this.lastname, this.id], (error, result) => {
        if (error) {
            return callback(error, null);
        }
        if (result.rowCount) {
            callback(null, this);
        } else {
            callback('Une erreur s\\'est produite, aucun enregistrement modifié', this);
        }
    });
}`
        },
        {
            code:
`delete(callback) {
    client.query('DELETE FROM 'user' WHERE id=$1', [this.id], (error, result) => {
        if (error) {
            return callback(error, null);
        }
        if (result.rowCount) {
            callback(null, true);
        } else {
            callback('Une erreur s\\'est produite, aucun enregistrement modifié', this);
        }
    });
}`
        },
        {
            code:
`//level.js
//on surchage la propriété statique héritée de CoreModel
static tableName = 'level';

//user.js
//on surchage la propriété statique héritée de CoreModel
static tableName = 'user';

//coreModel.js
const client = require('../database');
...
static tableName = null;`
        },
        {
            code:
`//Active Record

//récupérer tous les enregistrements d'une table
static findAll(callback) {
    //on utilise la propriété statique tableName
    //comme on est dans un contexte statique, this représente la classe elle-même
    client.query(\`SELECT * FROM '\${this.tableName}'\`, (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            const instances = [];
            for (const row of result.rows) {
                //this contient la référence vers la classe, on peut l'utiliser pour créer une nouvelle instance
                instances.push(new this(row));
            }
            callback(null, instances);
        }
    });
}`
        },
        {
            code:
`static findOne(id, callback) {
    client.query(\`SELECT * FROM \${this.tableName} WHERE id=$1\`, [id], (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            const instance = new this(result.rows[0])
            callback(null, instance);
        }
    });
}`
        },
        {
            code:
`insert(callback) {

    //this.constructor contient une référence vers la classe de l'object courant
    //on peut l'utiliser pour accéder aux propriétés statiques de cette classe
    const tableName = this.constructor.tableName;
    ...
}`
        },
        {
            code:
`insert(callback) {

    //this.constructor contient une référence vers la classe de l'object courant
    //on peut l'utiliser pour accéder aux propriétés statiques de cette classe même si on ne connait pas son nom+≠=
    const tableName = this.constructor.tableName;

    //on déclare 3 tableaux pour stocker le nom des champs, leur valeur pour l'instance courante et leur position dans la liste
    const fieldNames = [];
    const fieldIndex = [];
    const fieldValues = [];

    let index = 1;
    //on parcoure l'object courant avec une boucle
    //Attention, il ne faut pas prendre en compte l'id, il sera automatiquement créé à l'insertion en BDD
    for (let fieldName in this) {

        //on ajoute un test pour ne pas inclure _id dans le traitement
        if (fieldName === '_id') {
            //on utilise continue pour passer à l'itération suivante
            //la suite du code ne sera pas exécutée
            continue; 
        }

        //on récupère déjà la valeur du champ
        fieldValues.push(this[fieldName]);

        //on stocke la position du champ
        fieldIndex.push(\`$\${index}\`);
        //on incrémente le compteur
        index++

        //on enlève le _ en début de nom avec substring : on garde toute la chaine SAUF le 1er caractère
        fieldName = fieldName.substring(1);
        //le nom du champ est nettoyé, on peut l'ajouter au tableau
        //on en profite pour ajouter les double quotes autour du nom
        fieldNames.push(\`'\${fieldName}'\`);
    }

    const preparedQuery = {
        //on utilise join pour transformer les tableaux fieldNames et fieldIndex en string avec ', ' comme séparateur
         text: \`INSERT INTO '\${tableName}' (\${fieldNames.join(', ')}) VALUES (\${fieldIndex.join(', ')}) RETURNING 'id'\`,
        values: fieldValues
    };

    //le reste du code ne change pas, il est valide pour tous les modèles
    client.query(preparedQuery, (error, result) => {
        if (error) {
            return callback(error, null);
        }
        if (result.rowCount) {
            this.id = result.rows[0].id;
            callback(null, this);
        } else {
            callback('Une erreur s\\'est produite, aucun id reçu en retour', this);
        }
    });
}`
        },
        {
            code:
`update(callback) {
    const tableName = this.constructor.tableName;

    const fieldUpdates = [];
    const fieldValues = [];

    let index = 1;
    //on parcoure l'object courant avec une boucle
    for (let fieldName in this) {

        //on ajoute un test pour ne pas inclure _id dans le traitement
        if (fieldName === '_id') {
            //on utilise continue pour passer à l'itération suivante
            //la suite du code ne sera pas exécutée
            continue; 
        }
        //on récupère déjà la valeur du champ
        fieldValues.push(this[fieldName]);

        //on enlève le _ en début de nom avec substring : on garde toute la chaine SAUF le 1er caractère
        fieldName = fieldName.substring(1);

        //on va créer l'update qui correspond à ce champ
        fieldUpdates.push(\`'\${fieldName}'=$\${index}\`);
        //on incrémente le compteur
        index++
    }

    //après la boucle, on ajoute la valeur de l'id au tableau fieldValues
    fieldValues.push(this.id);

    //après la boucle, on peut utiliser index pour indiquer la position de l'id dans le tableau des valeurs
    client.query(\`UPDATE '\${tableName}' SET \${fieldUpdates.join(', ')} WHERE id=$\${index}\`, 
        fieldValues, (error, result) => {
        if (error) {
            return callback(error, null);
        }
        if (result.rowCount) {
            callback(null, this);
        } else {
            callback('Une erreur s\\'est produite, aucun enregistrement modifié', this);
        }
    });
}`
        },
        {
            code:
`delete(callback) {
    const tableName = this.constructor.tableName;
    client.query(\`DELETE FROM '\${tableName}' WHERE id=$1\`, [this.id], (error, result) => {
        if (error) {
            return callback(error, null);
        }
        if (result.rowCount) {
            callback(null, true);
        } else {
            callback('Une erreur s\\'est produite, aucun enregistrement modifié', this);
        }
    });
}`
        }
    ]
};

export const day5 = {
    ar: [
        {
            code:
`//fichier catalogue permettant d'effectuer un require global sur les modèles

//on commence par importer tous les modèles
//on laisse juste de côté CoreModel, on n'en a jamais besoin explicitement
const Answer = require('./answer');
const Level = require('./level');
const Question = require('./question');
const Quiz = require('./quiz');
const Tag = require('./tag');
const User = require('./user');

//on exporte le tout dans un object global
//on utilise la notation ES6 simplifiée
module.exports = {
    Answer,
    Level,
    Question,
    Quiz,
    Tag,
    User
};`
        },
        {
            code:
`//on utilise le fichier catalogue index.js pour récupérer les modèles dont on a besoin
//on fait le require sur le répertoire models, node va chercher dans ce répertoire un fichier appelé ... index.js
//si on choisit un autre nom, il faudra faire le require sur le fichier et pas sur le répertoire
const {Level, Question, User} = require('./app/models/');

//On a maintenant accès aux constantes Level, Question et User dans notre code`
        },
        {
            code:
`//Récupérer tous les utilisateurs

User.findAll((error, users) => {
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        for (const user of users) {
            console.log(user);
        }
    }
});`
        },
        {
            code:
`//Question dont l'id est 3

Question.findOne(3, (error, question) => {
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        console.log(question);
    }
});`
        },
        {
            code:
`static findBy(params, callback) {
    //on a besoin d'un tableau pour stocker les criètres de recherche
    const wheres = [];
    //également d'un tableau pour stocker les valeurs des paramètres
    const values = [];
    //et d'un index pour la position des valeurs
    let index = 1;

    //on boucle sur les noms des paramètres
    for (const paramName in params) {
        //on stocke le critère à ajouter dans le WHERE en ajoutant les double quotes autour du nom du champ
        wheres.push(\`'\${paramName}'=$\${index}\`);
        //on stocke la valeur du paramètre à chercher
        values.push(params[paramName]);
        //on incrément l'index pour le champ suivant
        index++;            
    }
    //les données dont on a besoin sont stockées, on peut générer la requête
    //on est dans une méthode statique, on peut utiliser this pour accéder à la propriété tableName
    //le WHERE doit être de la forme param1='xxx' AND param2='yyy' AND ...
    //dans le join, on n'utilisera pas ', ' comme séparateur, on va prendre ' AND '
    client.query(\`SELECT * FROM '\${this.tableName}' WHERE \${wheres.join(' AND ')}\`, values, (error, result) => {
        if (error) {
            callback(error, null);
        } else {
            const instances = [];
            for (const row of result.rows) {
                instances.push(new this(row));
            }
            callback(null, instances);
        }
    });
}`
        },
        {
            code:
`//Level avec le nom 'difficile'
Level.findBy({name: 'difficile'}, (error, instances) => {
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        if (instances.length === 0) {
            console.log('Aucune instance trouvée ...');
        } else {
            for (const instance of instances) {
                console.log(instance);
            }
        }
    }
});`
        },
        {
            code:
`//Question avec l'id 1 du quiz d'id 1
Question.findBy({id: 1, quiz_id: 1}, (error, instances) => {
    if (error) {
        console.log('On a eu un problème : ', error.message);
    } else {
        if (instances.length === 0) {
            console.log('Aucune instance trouvée ...');
        } else {
            for (const instance of instances) {
                console.log(instance);
            }
        }
    }
});`
        },
        {
            code:
`save(callback) {
    //pour vérifier si un enregistrement existe, on regarde si l'instance courant a un id
    //s'il y a un id, un enregistrement a déjà été effectué => update
    //sinon, pas d'enregistrement encore => insert
    if (this.id) {
        this.update(callback);
    } else {
        this.insert(callback);
    }
}`
        }
    ],
    sequelize: [
        {
            code:
`//on sépare les préoccupations : Separation of Concerns
//ce module va uniquement gérer la connexion à la base oquiz

//on commence par importer dotenv pour ajouter le contenu de .env dans les variables d'environnement
require('dotenv').config();

//on import la classe dont on a besoin
const {Sequelize} = require("sequelize");

//on import la classe dont on a besoin
const sequelize = new Sequelize(process.env.PG_URL,{
    define: {
        //on ajoute cette propriété de config pour désactiver l'ajout automatique de 2 champs qu'on n'utilise pas dans les modèles :
        //- createdAt
        //- updatedAt
        timestamps: false
        //permet les noms de champs en snake_case
        underscored: true
    }
});

//notre client est prêt, on l'exporte pour l'utiliser dans nos modèles
module.exports = sequelize;`
        },
        {
            code:
`//on importe notre client sequelize
const sequelize = require('../database');

//on ajoute les classes du package dont on a besoin
const {DataTypes, Model} = require('sequelize');

class Level extends Model {};

//on utilise la méthode statique init héritée de Model pour configurer le modèle
Level.init(
    //1er argument : un object qui décrit les champs de la table
    //Pas besoin d'indiquer le champ id, Sequelize l'ajoute automatiquement
    {
        //on définit un champ en iindiquant son nom et son type
        name: DataTypes.STRING
    },
    //2nd argument : un object avec les infos de connexion
    {
        //instance du client sequelize, on utilise la notation ES6
        sequelize,
        //on indique le nom de la table dans la BDD
        tableName: 'level'
    }
);

module.exports = Level;`
        },
        {
            code:
`//on va retrouver des équivalents à toutes les méthodes qu'on avait définit dans le CoreModel
//Dans Sequelize.Model, toutes les méthodes sont statiques

//on utilise toujours un callback, la notation est juste un peu différente
//il est passé en paramètre de .then()
//les erreurs éventuelles sont gérées différemment

//findAll
Level.findAll()
.then(levels => {
    console.log('Level.findAll');
    for (const level of levels) {
        //on a accès directement aux propriétés de notre instance sans avoir mis en place de getters/setters
        console.log(level.id, level.name);
    }
    console.log('-------------');
});

//findById => findByPk, pk = Primary Key, id quoi !
Level.findByPk(1)
.then(level => {
    console.log('Level.findByPk');
    console.log(level.id, level.name);
    console.log('-------------');
});

//insert => create
Level.create({name: 'super pas facile'})
.then((level) => {
    console.log('Level.create');
    console.log(level.id, level.name);
    console.log('-------------');
});

//update
//2 arguments : 
//- les mises à jour souhaitée (SET champ=value)
//- les options : critères de séléction (where), returning à true permet de recevoir la ou les instance(s) modifiées
//en retour dans le callback, on reçoit un tableau contenant le nombre d'enregistrements modifiés en 0 et les instances modifiées en 1
Level.update({name: 'Pas si dur en fait'}, {
    where: {
        id: 6
    },
    returning: true
})
.then(result => {
    console.log('Level.update');
    console.log('Enregistrement(s) modifié(s)', result[0]);
    console.log('Instance(s) reçue(s)', result[1].length);
    console.log('-------------');
});

//delete => destroy
//on reçoit en retour le nombre d'enregistrements supprimés
Level.destroy({where: {
    name: 'super pas facile'
}})
.then(result => {
    console.log('Level.destroy');
    console.log('Enregistrement(s) supprimé(s)', result);
    console.log('-------------');
});`
        },
        {
            code:
`//answer.js
const sequelize = require('../database');
const {DataTypes, Model} = require('sequelize');

class Answer extends Model {};

Answer.init({
    description: DataTypes.STRING
    //la clé étrangère sera gérée quand on mettre en place les relations
    //on s'en occupe pas pour l'instant
}, {
    sequelize,
    tableName: 'answer'
})

module.exports = Answer;

//question.js
const sequelize = require('../database');
const {DataTypes, Model} = require('sequelize');

class Question extends Model {};

Question.init({
    question: DataTypes.STRING,
    anecdote: DataTypes.STRING,
    wiki: DataTypes.STRING,
    //on ignore les clés étrangères pour l'instant
}, {
    sequelize,
    tableName: 'question'
})

module.exports = Question;

//quiz.js
const sequelize = require('../database');
const {DataTypes, Model} = require('sequelize');

class Quiz extends Model {};

Quiz.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
}, {
    sequelize,
    tableName: 'quiz'
})

module.exports = Quiz;

//tag.js
const sequelize = require('../database');
const {DataTypes, Model} = require('sequelize');

class Tag extends Model {};

Tag.init({
    name: DataTypes.STRING
}, {
    sequelize,
    tableName: 'tag'
})

module.exports = Tag;

//user.js
const sequelize = require('../database');
const {DataTypes, Model} = require('sequelize');

class User extends Model {};

User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
}, {
    sequelize,
    tableName: 'user'
});

module.exports = User;`
        },
        {
            code:
`//mise en place des relations

//on va avoir plusieurs cas
//relation 1,1

//relation 1,n
//Pour la table qui détient n, on utilise la méthode hasMany
//Pour la table qui détient 1, on utilise la méthode belongsTo

//relation n,n


//un utilisateur a plusieurs quiz (n) => méthode hasMany
//1er argument : le modèle à lier
//2ème argument : object de configuration
User.hasMany(Quiz, {
    //la clé étrangère qu'on doit retrouver dans quiz
    foreingKey: 'user_id',
    //le nom qu'on souhaite donner aux quiz dans user si on fait un join
    as: 'quizzes'
})

//un quiz n'a qu'un seul utilisateur (1) => méthode belongsTo
Quiz.belongsTo(User, {
    //la clé étrangère qu'on doit retrouver dans quiz
    foreignKey: 'user_id',
    //le nom qu'on souhaite donner au user dans quiz si on fait un join
    as: 'author'
});`
        },
        {
            code:
`//sur une requête vers User, on peut inclure les quiz dont il est l'auteur
User.findByPk(3, {
    //en ajoutant include, on indique à sequelize de faire un join avec la relation appelée quizzes (as: 'quizzes' dans la définition)
    //sequelize ajoute une propriété quizzes à notre instance
    //cette propriété va contenir toutes les quiz écrits par le User recherché
    //include accepte une string ou un tableau de string en paramètre, on peut faire plusieurs joins dans une même requête
    include: 'quizzes'
})
.then(user => {
    console.log(user.firstname, user.lastname, ' est l\\'auteur de ', user.quizzes.length+' quiz');
});

//et ça marche dans l'autre sens
Quiz.findByPk(5, {
    include: 'author'
})
.then(quiz => {
    console.log(quiz.title, ' écrit par ', quiz.author.firstname, quiz.author.lastname);
});`
        },
        {
            code:
`//un quiz n'a qu'un seul utilisateur (1)
Quiz.belongsTo(User, {
    foreign_key: 'user_id',
    as: 'quiz'
});

//un utilisateur peut créer plusieurs quiz (n)
User.hasMany(Quiz, {
    foreign_key: 'user_id',
    as: 'quizzes'
});`
        },
        {
            code:
`Quiz.findByPk(3, {
    //pour avoir plusieurs associations dans la requête, on passe un tableau de string à include
    include: ['author', 'questions']
})
.then(quiz => {
    console.log(quiz.title, ' écrit par ', quiz.author.firstname, quiz.author.lastname, ', contient ', quiz.questions.length, ' questions');
});

Question.findByPk(3, {
    //on passe un object à include pour obtenir les infos de l'auteur du quiz de la question
    //question et user ne sont pas directement reliés, on ne peut pas utiliser un tableau comme dans l'exemple au dessus
    include: {
        association: 'quiz',
        include: 'author'
    }
})
.then(question => {
    console.log(question.question, ' du quiz ', question.quiz.title, ' écrit par ', question.quiz.author.firstname, question.quiz.author.lastname)
});`
        },
        {
            code:
`//un niveau contient plusieurs questions
Level.hasMany(Question, {
    foreignKey: 'level_id',
    as: 'questions'
});

//une question appartient à un seul niveau
Question.belongsTo(Level, {
    foreignKey: 'level_id',
    as: 'level'
});`
        },
        {
            code:
`Question.findByPk(10, {
    include: 'level'
})
.then(question => {
    console.log(question.question, ' de niveau ', question.level.name);
});

Level.findByPk(1, {
    include: 'questions'
})
.then(level => {
    console.log(level.name, ' contient ', level.questions.length, ' questions');
});`
        },
        {
            code:
`//une question a plusieurs réponses (n)
Question.hasMany(Answer, {
    foreignKey: 'question_id',
    as: 'answers'
});

//une réponse appartient à une seule question (1)
Answer.belongsTo(Question, {
    foreignKey: 'question_id',
    as: 'question'
});`
        },
        {
            code:
`Question.findByPk(30, {
    include: 'answers'
})
.then(question => {
    console.log(question.question, ', ', question.answers.length, ' réponses possibles');
});

Answer.findByPk(10, {
    include: 'question'
})
.then(answer => {
    console.log(answer.description, ' - ', answer.question.question);
});`
        },
        {
            code:
`//cas particulier de question et réponse, on a une deuxième relation à indiquer : la bonne réponse
//la clé étrangère se trouve dans Question, on ajoute une relation belongsTo pour obetenir la bonne réponse dans l'instance de Question
Question.belongsTo(Answer, {
    foreignKey: 'answer_id',
    as: 'good_answer'
});`
        },
        {
            code:
`//un quiz peut avoir plusieurs thèmes
Quiz.belongsToMany(Tag, {
    //le nom du champ de Quiz dans la table intermédiaire
    foreignKey: 'quiz_id',
    //le nom du champ de Tag dans la table intermédiaire
    otherKey: 'tag_id',
    //le nom de la propriété dans Quiz si on fait un join
    as: 'tags',
    //le nom de la table intermédiaire
    through: 'quiz_has_tag'
});

//un thème peut avoir plusieurs quiz
Tag.belongsToMany(Quiz, {
    foreignKey: 'tag_id',
    otherKey: 'quiz_id',
    as: 'quizzes',
    through: 'quiz_has_tag'
});`
        },
        {
            code:
`Question.findByPk(30, {
    include: 'good_answer'
})
.then(question => {
    console.log(question.question, ', Bonne réponse : ', question.good_answer.description);
});

Quiz.findByPk(10, {
    include: 'tags'
})
.then(quiz => {
    console.log('Thèmes de la question 10 : ', quiz.tags.map(el => el.name));
});

Tag.findByPk(3, {
    include: 'quizzes'
})
.then(tag => {
    console.log('Questions du tag ', tag.name, ' : ', tag.quizzes.map(el => el.title));
});`
        },
        {
            code:
`//mise en place des relations

//on va avoir plusieurs cas
//relation 1,1
//On utilise la méthode belongsTo sur la table qui détient la clé étrangère
//pas de contrepartie sur l'autre table dans ce cas

//relation 1,n
//Pour la table qui détient n, on utilise la méthode hasMany
//Pour la table qui détient 1, on utilise la méthode belongsTo

//relation n,n
//On passe par une table intermédiaire pour stocker les relations entre 2 tables
//on va utiliser la méthode belongsToMany sur les 2 modèles en indiquant la table intermédiaires et les clés dans cette table`
        }
    ]
};

export const day7 = {
    atelier: [
        {
            code: 
`PG_URL=postgresql://oquiz:oquiz@localhost/oquiz
PORT=3500`
        },
        {
            code: 
`//on charge les variables d'environnement
require("dotenv").config();

const express = require('express');

const app = express();
//on utilise la variable d'environnement PORT pour attribuer un port à notre appli
//en cas de pépin, on se rabat sur une valeur par défaut
const port = process.env.PORT || 3000;

//configuration pour utiliser EJS comme moteur de templates
app.set('view engine', 'ejs');
app.set('views', './app/views');

//on ajoute les ressources statiques
//on ne va pas utiliser les fichiers html mais des vues EJS
//le middleware static servira uniquement pour les fichiers css
app.use(express.static('./integration/css'));


//TODO : routeur à ajouter

//on lance le serveur
app.listen(port, () => {
    console.log(\`Server started on port \${port}\`);
});`
        },
        {
            code: 
`const express = require('express');

//TODO : controllers à importer

const router = new express.Router();

//TODO : routes à définir

//on exporte le routeur pour l'utiliser dans index.js
module.exports = router;`
        },
        {
            code: 
`const express = require('express');
const router = require('./app/router');

...

//TODO : routeur à ajouter
app.use(router);

...`
        },
        {
            code: 
`module.exports = {
    home: (request, response) => {
        response.render('index');
    }
}`
        },
        {
            code: 
`//TODO : controllers à importer
const mainController = require('./controllers/mainController');

...

//TODO : routes à définir
router.get('/', mainController.home);
`
        },
        {
            code: 
`home: (request, response) => {
    //on récupère tous les quiz en base
    Quiz.findAll({
        //on ajoute les infos de l'auteur grâce aux relations qu'on a définies
        include: "author"
    })
    .then(quizzes => {
        //on passe le résultat en 2ème argument de render
        //ainsi on rend le tableau de quiz disponible dans la vue
        response.render('index', {quizzes});
    });
}`
        },
        {
            language: 'HTML',
            code: 
`<!-- Really beautiful CSS -->
<link href="/style.css" rel="stylesheet">
<link href="/floating-labels.css" rel="stylesheet">

...


<div class="card-deck row mb-3 text-center">
    <%# on boucle sur le tableau reçu en paramètre %> 
    <% for (const quiz of quizzes) { %>
        <div class="col-4 d-flex flex-column">
            <div class="card mb-4 shadow-sm d-flex flex-column">
                <div class="card-header">
                    <h3 class="h4 my-0 font-weight-normal"><%= quiz.title %></h3>
                </div>
                <div class="card-body d-flex flex-column justify-content-between">
                    <h4 class="h1 card-title pricing-card-title"><%= quiz.description %></h4>
                    <ul class="list-unstyled mt-3 mb-4">
                        <%# grâce à sequelize, on a une propriété author qui contient les infos sur l'utilisateur qui a crée le quiz %> 
                        <li>par <%= quiz.author.firstname %> <%= quiz.author.lastname %></li>
                    </ul>
                    <a href="#" class="btn btn-lg btn-block btn-primary text-white">Jouer</a>
                </div>
            </div>
        </div>
    <% } %>

</div>`
        },
        {
            language: 'HTML',
            code: 
`<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Reset CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- Really beautiful CSS -->
    <link href="/style.css" rel="stylesheet">
    <link href="/floating-labels.css" rel="stylesheet">

    <title>O'quiz</title>
</head>

<body>
    <header
        class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-primary text-white border-bottom shadow-sm">
        <h1 class="h5 my-0 mr-md-auto font-weight-normal">O'quiz</h1>
        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-white" href="#">Accueil</a>
            <a class="p-2 text-white" href="#">Sujets</a>
            <a class="p-2 text-white" href="#">S'inscrire</a>
            <a class="p-2 text-white" href="#">Se connecter</a>
        </nav>
    </header>
    <main class="container">`
        },
        {
            language: 'HTML',
            code: 
`</main>
<footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
        <div class="col-12 col-md text-center">
            <small class="d-block mb-3 text-muted">O'clock © 2017-2020</small>
        </div>
    </div>
</footer>
</body>

</html>`
        },
        {
            language: 'HTML',
            code: 
`<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <%# infos quiz, propriétés de quiz %>
    <h2 class="h1 display-4"><%= quiz.title %></h2>
    <p class="lead"><%= quiz.description %></p>
    <%# infos auteur, propriétés de quiz.author %>
    <p class="font-weight-bold">par <%= quiz.author.firstname %> <%= quiz.author.lastname %></p>
    <%# nombre de questions, taille de quiz.questions %>
    <p class="lead"><%= quiz.questions.length %> questions</p>
</div>`
        },        
        {
            code: 
`<div class="row">
<%# on boucle sur quiz.tags pour afficher tous les thèmes %>
<% for (const tag of quiz.tags) { %>
    <div class="col-3 p-4 text-center">
        <a class="btn btn-block btn-lg tag tag--<%= tag.name.toLowerCase() %>" href="#">
            <%= tag.name %>
        </a>
    </div>
<% } %>
</div>`
        },
        {
            code: 
`<div class="row">
<%# on boucle sur quiz.questions pour afficher les infos de chaque question %>
<% for (const question of quiz.questions) { %>
    <div class="col-12">
        <%# le level devra être inclus comme propriété de question %>
        <label class="badge level level--<%= question.level.name.toLowerCase() %>"><%= question.level.name %></label>
        <h4>
            <%= question.question %>
        </h4>
        <ul>
            <%# on boucle sur la prop question.answers pour afficher toutes les réponses possibles %>
            <%# on a besoin d'afficher le numéro de la réponse, on fait un for classique pour avoir l'index %>
            <% for (let i=0; i<question.answers.length; i++) { %>
                <li><%= i+1 %>. <%= question.answers[i].description %></li>
            <% } %>
        </ul>
    </div>
<% } %>
</div>`
        },
        {
            code: 
`module.exports = {
    getQuiz: (request, response) => {
        //la route /quizz/:id est paramétrée
        //on récupère la valeur de l'id dans request params sous forme de string
        //on la convertie en number pour matcher avec le type de l'id en base
        const id = parseInt(request.params.id);
        //on utilise sequelize pour récupérer le quiz d'id <id>
        Quiz.findByPk(id, {
            //on y ajoute l'auteur et les thèmes de façon classique
            include: ["author", "tags", {
                //pour ajouter des include à questions, il faut passer par un object
                //association : le nom de la relation à inclure
                //include : les infos à ajouter pour chaque enregistrement de cette relation
                association: "questions",
                include: ["level", "answers"]
            }]
        })
        .then(quiz => {
            //quiz devrait contenir :
            //- les props de quiz (encore heureux !)
            //- quiz.author
            //- quiz.tags
            //- quiz.questions
            //- pour chaque question :
            //  - question.level
            //  - question.answers
            response.render('quizz', {quiz});
        });
    }
}`
        },
        {
            code:
`//infos d'un quiz
router.get('/quizz/:id', quizzController.getQuizz);`
        }
    ],
    auth: [
        {
            language: 'SQL',
            code: 
`psql -U oquiz -d oquiz

ALTER TABLE "user" ADD COLUMN "role" TEXT DEFAULT 'user';`
        },
        {
            language: 'CSS',
            code: 
`.error {
    text-align: center;
    color: red;
}`
        },
        {
            code: 
`<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h2 class="h1 display-4">Se connecter sur O'Quiz</h2>
    <p class="lead">Une application sympa pour répondre à des questions cool.</p>
</div>
<%# en cas d'erreur, on passera une variable error à la vue %>
<% if (locals.error) { %>
    <div class="error"><%= error %> </div>
<% } %>
<div class="row">
    <div class="col-6 offset-3">
        <form action="/login" method="POST" class="form-signup">

            <div class="form-label-group">
                <%# on passera également les champs saisis par l'utilisateur pour les réafficher en cas d'erreur
                on fait une condition ternaire ici, c'est plus court
                SI le champ est disponible, on le met dans l'attribut value
                SINON, on met une chaine vide dans value (valeur par défaut) %>
                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
                    placeholder="Votre courriel" value=<%= locals.fields ? locals.fields.email : '' %>>
                <label for="email">Votre courriel</label>
            </div>

            <div class="form-label-group">
                <%# même chose ici : si on a le mot de passe, on rempli le champ sinon, chaine vide %>
                <input type="password" class="form-control" id="password" name="password"
                    placeholder="Votre mot de passe" value=<%= locals.fields ? locals.fields.password : '' %>>
                <label for="password">Votre mot de passe</label>
            </div>
            <div class="checkbox mb-3">
                <label>
                    <%# on n'oublie pas de renseigner l'attribut name pour que la valeur puisse être passée %>
                    <input type="checkbox" name="remember" value="remember-me"> Se souvenir de moi
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
        </form>
    </div>
</div>`
        },
        {
            code: 
`//userMW.js
//on utilise un middleware maison pour initialiser la propriété user de la session à false
//si user existe dans la session, on le rendre disponible sur toutes les vues en l'ajoutant dans response.locals
const userMW = (request, response, next) => {
    if (!request.session.user) {
        request.session.user = false;
    }
    response.locals.user = request.session.user;
    next();
};

module.exports = userMW;

//index.js
//mise en place de la session pour stocker les infos utilisateurs
//on met en place un cookie vide pour ajouter une durée de vie si l'utilisateur clique sur 'se souvenir de moi'
app.use( session({
    secret: 'lkznslkjsùs$^dojjgug',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

//on importe le middleware maison chargé de rendre disponible la variable user dans toutes les vues
const userMW = require('./app/middlewares/userMW');
app.use(userMW);

//tant qu'on y est, on va devoir des données en POST
//on ajoute le middleware urlencoded pour récupérer les infos dans request.body
app.use(express.urlencoded({extended: true}));`
        },
        {
            code: 
`const {User} = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    login: (request, response) => {
        response.render('login');
    },
    doLogin: (request, response) => {
        //on cheche à identifier l'utilisateur à partir de son email
        User.findOne({where: {email: request.body.email}})
        .then(user => {
            //aucun utilisateur trouvé avec cet email, on renvoie la vue login avec un message d'erreur et les champs saisis
            if (!user) {
                return response.render('login', {error: 'Utilisateur inconnu', fields: request.body});
            }

            //l'utilisateur avec cet email existe, on vérifie son mot de passe en comparant :
            // - la version en clair qu'il a saisie sur le formulaire
            // - la version hash stockée dans la BDD
            // bcrypt est capable de déterminer si les 2 versions correspondent
            const validPwd = bcrypt.compareSync(request.body.password, user.password);

            if (!validPwd) {
                //la vérification a échoué, on renvoie la vue login avec un message d'erreur et les champs saisis
                return response.render('login', {error: 'Mot de passe incorrect', fields: request.body});
            }

            //l'utilisateur existe et s'est correctement identifié, on stocke les infos nécessaire en session
            request.session.user = {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role
            }

            if (request.body.remember) {
                //l'utilisateur a coché la case 'se souvenir de moi'
                //on ajoute une heure de validité à son cookie
                //il peut ainsi quitter son navigateur et revenir sur la page, il sera toujours connecté
                //on indique en date d'expiration la date du moment + une heure en millisecondes
                request.session.cookie.expires = new Date(Date.now() + 3600000);
            }
            //on a tout fait, on le redirige sur la page d'accueil
            response.redirect('/');
        });
    }
}`
        },
        {
            code: 
`//login
router.get('/login', userController.login);
router.post('/login', userController.doLogin);`
        },
        {
            code: 
`<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h2 class="h1 display-4">S'inscrire sur O'Quiz</h2>
    <p class="lead">Inscrivez vous pour profiter des quizz !</p>
</div>

<%# en cas d'erreur, on passera une variable error à la vue %>
<% if (locals.error) { %>
    <div class="error"><%= error %> </div>
<% } %>

<%# je vais appeler ma route /register, je la précise ici dans l'attribut action%>
<form action="/register" method="POST" class="form-signin">

    <div class="form-label-group">
        <%# on refait la condition ternaire pour ajouter éventuellement une valeur au champ 
        pour que l'utilisateur n'ait pas à tout resaisir en cas d'erreur %>
        <input type="lastname" class="form-control" id="lastname" name="lastname"
            aria-describedby="lastnameHelp" placeholder="Votre nom" value=<%= locals.fields ? locals.fields.lastname : '' %>>
        <label for="lastname">Votre nom</label>
    </div>

    <div class="form-label-group">
        <input type="firstname" class="form-control" id="firstname" name="firstname"
            aria-describedby="firstnameHelp" placeholder="Votre prénom" value=<%= locals.fields ? locals.fields.firstname : '' %>>
        <label for="firstname">Votre prénom</label>
    </div>

    <div class="form-label-group">
        <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
            placeholder="Votre courriel" value=<%= locals.fields ? locals.fields.email : '' %>>
        <label for="email">Votre courriel</label>
        <small id="emailHelp" class="form-text text-muted">Nous ne partagerons jamais votre courriel.</small>
    </div>

    <div class="form-label-group">
        <input type="password" class="form-control" id="password" name="password"
            placeholder="Votre mot de mot de passe" value=<%= locals.fields ? locals.fields.password : '' %>>
        <label for="password">Votre mot de mot de passe</label>
    </div>


    <div class="form-label-group">
        <input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm"
            placeholder="Confirmez votre mot de passe">
        <label for="passwordConfirm">Confirmez votre mot de passe</label>
    </div>

    <div class="form-group text-center">
        <button type="submit" class="btn btn-primary">Envoyer</button>
    </div>
</form>`
        },
        {
            code: 
`register: (request, response) => {
    response.render('signup');

},
doRegister: (request, response) => {

    //on checke si un utilisateur avec cet email n'existe pas déjà
    User.findOne({where: {email: request.body.email}})
    .then(user => {
        if (user) {
            //il y a déjà un user avec cet email, on envoie un erreur
            return response.render('signup', {error: 'Un utilisateur avec cet email existe déjà', fields: request.body});
        }

        //on checke si le mot de passe et la vérification correspondent
        if (request.body.password !== request.body.passwordConfirm) {
            //le password et la vérif ne correspondent pas, on envoie une erreur
            return response.render('signup', {error: 'La confirmation du mot de passe est incorrecte', fields: request.body});
        }

        //on est bon sur les champs, on fait la vérsion hashée du mot de passe
        const hashedPwd = bcrypt.hashSync(request.body.password, 10);

        //on enregistre le nouveau user en base
        User.create({
            email: request.body.email,
            password: hashedPwd,
            lastname: request.body.lastname,
            firstname: request.body.firstname
        })
        .then(user => {
            //l'utilisateur est créé, on redirige vers la vue /login
            response.redirect('/login')
        });
    });
}`
        },
        {
            code: 
`//register
router.get('/register', userController.register);
router.post('/register', userController.doRegister);`
        },
        {
            code: 
`logout: (request, response) => {
    //on reset les infos du user dans la session
    request.session.user = false;
    //on redirige sur l'accueil
    response.redirect('/');
}`
        },
        {
            code: 
`//logout
router.get('/logout', userController.logout);`
        },
        {
            code: 
`profile: (request, response) => {
    response.render('profile');
}`
        },
        {
            code: 
`//profile
router.get('/profile', userController.profile);`
        },
        {
            language: 'HTML',
            code: 
`<nav class="my-2 my-md-0 mr-md-3">
    <a class="p-2 text-white" href="/">Accueil</a>
    <a class="p-2 text-white" href="/tags">Sujets</a>
    <%# pour vérifier le statut de l'utilisateur, on utilise la variable user qu'on a ajouté dans app.locals côté express %>
    <%# elle est forcément définie, on peut y accéder directement %>
    <% if (user) { %>
        <%# on a des infos dans la propriété user, l'utilisateur est connecté %>
        <a class="p-2 text-white" href="/account">Bonjour <%= user.firstname %></a>
        <a class="p-2 text-white" href="/logout">Se déconnecter</a>
    <% } else { %>
        <%# l'utilisateur n'et pas connecté %>
        <a class="p-2 text-white" href="/register">S'inscrire</a>
        <a class="p-2 text-white" href="/login">Se connecter</a>
    <% } %>
</nav>`
        }
    ],
    roles: [
        {
            code: 
`<% if (user) { %>
    <%# on a des infos dans la propriété user, l'utilisateur est connecté %>
    <a class="p-2 text-white" href="/profile">Bonjour <%= user.firstname %></a>
    <a class="p-2 text-white" href="/logout">Se déconnecter</a>
    <% if (user.role === 'admin') { %>
        <a class="p-2 text-white" href="/admin">Admin</a>
    <% } %>
<% } else { %>
    <%# l'utilisateur n'et pas connecté %>
    <a class="p-2 text-white" href="/register">S'inscrire</a>
    <a class="p-2 text-white" href="/login">Se connecter</a>
<% } %>`
        },
        {
            code: 
`module.exports = {
    adminPage: (request, response) => {
        response.render('admin');
    }
};`
        },
        {
            code: 
`//adminMW.js
const adminMW = (request, response, next) => {
    if (!request.session.user) {
        //l'utilisateur n'est pas connecté
        return response.redirect('/login');
    }
    if (request.session.user.role === 'admin') {
        //l'utilisateur est bien un admin
        next();
    } else {
        response.render('401');
    }
};

//router.js
//on importe le middleware chargé de protéger la page /admin
const adminMW = require('./middlewares/adminMW');`
        },
        {
            code: 
`/admin
//cette route sera protégée par le middleware adminMW
//Seuls les utilisateurs admin pourront accéder à la page
router.get('/admin', adminMW, (request, response) => {
    response.render('admin');
});`
        },
        {
            language: 'SQL',
            code: 
`update "user" set "role"='admin' where "email"='q@s.fr';`
        },
        {
            code: 
`User.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    role: Sequelize.STRING
}, {
    sequelize,
    tableName: "user"
});`
        }
    ]
};

export const day8 = {
    callback: [
        {
            code: 
`/*on veut modéliser le cheminement allant de la demande d'un client jusqu'à une structure de base de données
on a identifié les étapes suivantes :
  - demandeClient
  - analyseBesoin
  - useCases
  - kanban
  - wireframes
  - mcd
  - mld
  - structureBDD


chaque étape nécessite que la précédente ait été effectuée
pour ne pas y passer 3 plombes, on part du principe que chaque étape dure 1 seconde

Pour gérer les tâches, on utilise un module Gestion De Projet
Ce module met à dispo une méthode doTaskCallback qui prend 2 arguments :
- le nom de la tâche à effectuer
- une fonction callback à exécuter quand la tâche a été effectuée

si le nom de la tâche n'est pas dans la liste ci-dessus, le module va renvoyer une erreur
*/

const gdp = require('./gdp');`
        },
        {
            code: 
`gdp.doTaskCallback('demandeClient', error => {
    if (error) {
        console.log(error);
    } else {
        console.log('Traitement effectué, on pass à la tâche suivante');
    }
});`
        },
        {
            code: 
`gdp.doTaskCallback('demandeClient', error => {
    if (error) {
        console.log(error);
    } else {
        gdp.doTaskCallback('analyseBesoin', error => {
            if (error) {
                console.log(error);
            } else {
                gdp.doTaskCallback('useCases', error => {
                    if (error) {
                        console.log(error);
                    } else {
                        gdp.doTaskCallback('kanbans', error => {
                            if (error) {
                                console.log(error);
                            } else {
                                gdp.doTaskCallback('wireframes', error => {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        gdp.doTaskCallback('mcd', error => {
                                            if (error) {
                                                console.log(error);
                                            } else {
                                                gdp.doTaskCallback('mld', error => {
                                                    if (error) {
                                                        console.log(error);
                                                    } else {
                                                        gdp.doTaskCallback('structureBDD', error => {
                                                            if (error) {
                                                                console.log(error);
                                                            } else {
                                                                console.log('On peut enfin coder !!');
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});`
        }

    ],
    promise: [
        {
            code:
`/*

Promise est une classe JS
Pour créer une nouvelle promesse, on utilise son constructeur : new Promise();
Toutes les promesses prennent en argument une fonction avec elle-même 2 arguments
- resolve : fonction à laquelle on passera le résultat si le traitement s'est déroulé sans erreur
- reject : fonction à laquelle on passera une info indiquant qu'une erreur s'est produite

*/

const myPromise = new Promise(
    function(resolve, reject) {
        if (traitementIsOk) {
            resolve('TOUT VA BIEN ! Tout s\\'est bien passé');
        } else {
            reject('ERROR !! Une erreur s\\'est produite');
        }
    }
);

/*

Les promesses ont une méthode then (la fameuse)
Cette méthode reçoit (elle aussi) une fonction en argument
En argument de cette fonction, on reçoit ce que la promesse a passé à resolve

*/

myPromise.then(
    function(message) {
        //dans message, on retrouve ce qu'on a passé à resolve dans la promesse
        console.log(message);
    }
);`
        },
        {
            code:
`const myBoolean = true;

const myPromise = new Promise(
    function(resolve, reject) {
        //on simule un temps de traitement (le temps de recevoir des infos de la BDD, de lire un fichier, ...) avec un timeout
        if (myBoolean) {
            resolve('TOUT VA BIEN ! Tout s\\'est bien passé');
        } else {
            reject('ERROR !! Une erreur s\\'est produite');
        }
    }
);`
        },
        {
            code:
`const myBoolean = false;

const myPromise = new Promise(
    function(resolve, reject) {
        //on simule un temps de traitement (le temps de recevoir des infos de la BDD, de lire un fichier, ...) avec un timeout
        if (myBoolean) {
            resolve('TOUT VA BIEN ! Tout s\\'est bien passé');
        } else {
            reject('ERROR !! Une erreur s\\'est produite');
        }
    }
);`
        },
        {
            code:
`/*

Les promesses ont une méthode then (la fameuse)
Cette méthode reçoit (elle aussi) une fonction en argument
En argument de cette fonction, on reçoit ce que la promesse a passé à resolve

Pour traiter les éventuelles erreurs, on utilise une autre méthode des promesses : catch
catch reçoit également une fonction en argument
En argument de cette fonction, on reçoit ce que la promesse a passé à reject

*/
myPromise.then(
    function(message) {
        //dans message, on retrouve ce qu'on a passé à resolve dans la promesse
        console.log(message);
    }
).catch(
    function(error) {
        console.log(error);
    }
);`
        },
        {
            code:
`/*on veut modéliser le cheminement allant de la demande d'un client jusqu'à une structure de base de données
on a identifié les étapes suivantes :
  - demandeClient
  - analyseBesoin
  - useCases
  - kanban
  - wireframes
  - mcd
  - mld
  - structureBDD


chaque étape nécessite que la précédente ait été effectuée
pour ne pas y passer 3 plombes, on part du principe que chaque étape dure 1 seconde

Pour gérer les tâches, on utilise un module Gestion De Projet
Ce module met à dispo une méthode doTaskPromise qui prend 1 argument :
- le nom de la tâche à effectuer
cette méthode renvoie une promesse

si le nom de la tâche n'est pas dans la liste ci-dessus, le module va renvoyer une erreur
*/

const gdp = require("./gdp");

gdp.doTaskPromise('demandeClient')
.then(() => console.log('Tout s\\'est bien passé, on continue'))
.catch(error => console.log(error));`
        },
        {
            code:
`gdp.doTaskPromise('demandeClient')
.then(() => {
    gdp.doTaskPromise('analyseBesoin')
    .then(() => console.log('Tout s\\'est bien passé, on continue')));
    .catch(error => console.log(error));
}
.catch(error => console.log(error));`
        },
        {
            code:
`//Pour chainer des promises il faut les retourner pas seuleument les appeler
gdp.doTaskPromise('demandeClient')
.then(() => {
    return gdp.doTaskPromise('analyseBesoin')
})
.then(() => console.log('Tout s\\'est bien passé, on continue')))
.catch(error => console.log(error));`
        },
        {
            code:
`//Pour chainer des promises il faut les retourner pas seuleument les appeler
gdp.doTaskPromise('demandeClient')
.then(() => gdp.doTaskPromise('analyseBesoin'))
.then(() => console.log('Tout s\\'est bien passé, on continue')))
//on place le catch à la fin, un erreur dans n'importe quelle promesse avant sera captée ici et le traitement s'arrêtera
.catch(error => console.log(error));`
        },
        {
            code:
`//Pour chainer des promises il faut les retourner pas seuleument les appeler
gdp.doTaskPromise('demandeClient')
.then(() => gdp.doTaskPromise('analyseBesoin')) 
.then(() => gdp.doTaskPromise('useCases'))
.then(() => gdp.doTaskPromise('kanbans'))
.then(() => gdp.doTaskPromise('wireframes'))
.then(() => gdp.doTaskPromise('mcd'))
.then(() => gdp.doTaskPromise('mld'))
.then(() => gdp.doTaskPromise('structureBDD'))
.then(() => console.log('On peut enfin coder !!'))
//on place le catch à la fin, un erreur dans n'importe quelle promesse avant sera captée ici et le traitement s'arrêtera
.catch(error => console.log(error));`
        }
    ],
    async: [
        {
            code:
`/*on veut modéliser le cheminement allant de la demande d'un client jusqu'à une structure de base de données
on a identifié les étapes suivantes :
  - demandeClient
  - analyseBesoin
  - useCases
  - kanban
  - wireframes
  - mcd
  - mld
  - structureBDD

chaque étape nécessite que la précédente ait été effectuée
pour ne pas y passer 3 plombes, on part du principe que chaque étape dure 1 seconde

Pour gérer les tâches, on utilise un module Gestion De Projet
Ce module met à dispo une méthode doTaskAndGetNext qui prend 1 argument :
- le nom de la tâche à effectuer
Cette méthode est une promesse, elle passe à resolve le nom de la tâche suivante à effectuer quand elle a fini son traitement

Si la tâche vaut undefined, le traitement est terminé

*/

const gdp = require("./gdp");

//on déclare la fonction avec async pour pouvoir utiliser await à l'intérieur
const doTheJob = async () => {
    //on écrit l'appel à la fonction en le précédant de await
    //nextTask prendra la valeur de la prochaine tâche quand la promesse aura appelé resolve
    let nextTask = await gdp.doTaskAndGetNext('demandeClient');
    console.log('Prochaine tâche : ', nextTask);
}

//on appelle la fonction pour lancer le traitement
doTheJob();`
        },
        {
            code:
`/on déclare la fonction avec async pour pouvoir utiliser await à l'intérieur
const doTheJob = async () => {
    let nextTask = 'demandeClient';
    while(task !== undefined) {
        //on écrit l'appel à la promesse en le précédant de await
        //nextTask prendra la valeur de la prochaine tâche quand la promesse aura appelé resolve
        nextTask = await gdp.doTaskAndGetNext(task);
    }
    console.log('On peut enfin coder !!');
}

//on appelle la fonction pour lancer le traitement
doTheJob();`
        },
        {
            code:
`//on déclare la fonction avec async pour pouvoir utiliser await à l'intérieur
const doTheJob = async () => {
    //on utilise try pour dire à JS d'essayer d'exécuter ce code mais qu'il va peut-être générer une erreur
    try {
        let nextTask = 'demandeClient';
        while(task !== undefined) {
            //on écrit l'appel à la fonction en le précédant de await
            //nextTask prendra la valeur de la prochaine tâche quand la promesse aura appelé resolve
            nextTask = await gdp.doTaskAndGetNext(task);
        }
        console.log('On peut enfin coder !!');
    } catch(error) {
        //si une erreur s'est produite, le code dans le catch sera exécuté
        console.log(error);
    }
}

//on appelle la fonction pour lancer le traitement
doTheJob();`
        }
    ]
};

export const day9 = {
    git: [
        {
            language: 'BASH',
            code: 
`cd Playlist; git init`
        },
        {
            language: 'BASH',
            code: 
`ls -l .git`
        },
        {
            language: 'MARKDOWN',
            code: 
`# Commandes GIT

## git init

- initialise le répertoire courant comme dépôt git
- création du dossier .git contenant les infos nécessaires à la gestion du dépôt`
        },
        {
            language: 'BASH',
            code: 
`git add README.md`
        },
        {
            language: 'BASH',
            code: 
`git commit -m "Ajout README.md"`
        },
        {
            language: 'MARKDOWN',
            code: 
`---

## git status

- donne l'état du dépôt à un moment donné

---

## git add

- ajout d'un ou plusieurs fichiers dans la zone de surveillance

    - \`git add README.md\` ajoute le fichier README.md

    - \`git add fichier1 fichier2\` ajoute les fichiers listés

    - \`git add .\` ajoute tous les fichiers non surveillés 

- à chaque modification, on doit ajouter la nouvelle version du fichier dans la zone de surveillance

---

## git rm --cached 

- retire un ou plusieurs fichiers de la zone de surveillance

    - \`git rm --cached README.md\`

---

## git commit

- enregistre dans l'historique une étape du développement

    - \`git commit -m "message explicite sur l'étape de développement"\``
        },
        {
            language: 'BASH',
            code: 
`git commit -m "Complément commandes README.md"`
        },
        {
            language: 'BASH',
            code: 
`git log`
        },
        {
            language: 'BASH',
            code: 
`git config --global alias.tree 'log --graph --oneline --all'`
        },
        {
            language: 'BASH',
            code: 
`git commit --amend`
        },
        {
            language: 'BASH',
            code: 
`git add playlist.md
git commit -m "Ajout playlist.md"`
        },
        {
            language: 'BASH',
            code: 
`git remote add origin git@github.com:Nicoclock/playlist.git`
        },
        {
            language: 'BASH',
            code: 
`git push -u origin master`
        },
        {
            language: 'BASH',
            code: 
`git remote add prof git@`
        },
        {
            language: 'BASH',
            code: 
`git remote update`
        },
        {
            language: 'BASH',
            code: 
``
        },
        {
            language: 'BASH',
            code: 
``
        },
        {
            language: 'BASH',
            code: 
``
        },
        {
            language: 'BASH',
            code: 
``
        },
    ]
};

