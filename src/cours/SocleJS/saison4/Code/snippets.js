export const day1 = {
    besoin: [
        {
            langage: 'MARKDOWN',
            code: 
`# GDP

transformer un mail de quelques lignes en cahier des charges


## les étapes

- étape 0 : demande d'un client, appel d'offre, ...
- etape 1 : traduction en use cases (cas d'utilisation) : phrases formalisées qui décrivent les fonctionnalités attendues
- etape 2 : prioriser et organiser les uses cases en sprint : étape de développement sur une période définie
- etape 3 : maquettage (wireframes) de l'interface 

## etape 0 - la demande du client

> Bonjour, nous sommes une école qu'elle est bien, et nous voulons un outil pour faciliter les contacts entre étudiants.  
Nous aimerions donc pouvoir lister les promotions ainsi que les étudiants qui les composent, 
mais aussi accèder aux détails d'un étudiant, photo de profil comprise.  
L'accès aux profils serait libre et gratuit.  
Dans un second temps l'outil pourrait servir à éditer les profils et promotions.  
En ésperant que vous pourrez répondre favorablement à notre demande,  
Cordialement  
Nicole.`
        },
        {
            langage: 'MARKDOWN',
            code: 
`## etape 1 - Use cases

on traduit la demande en fonctionnalités atomiques implémentables. 

|#|En tant que ...|je veux ...|afin de ...
|---|---|---|---
|1|visiteur|accéder à la page d'accueil|voir les fonctionnalités du site (quasi universel)
|2|visiteur|accéder à la liste des promos|voir les promos
|3|visiteur|accéder aux détails d'une promo|voir les étudiants qui la composent
|4|visiteur|accéder aux détails d'un étudiant|voir son profil
|5|visiteur|accéder à la liste des étudiants|voir tous les étudiants de l'école
|6|visiteur|accéder à un formulaire d'inscription|devenir un étudiant
|7|visiteur|accéder à un formulaire de login|me connecter
|8|etudiant|pouvoir devenir admin|d'accéder aux pages d'administration
|9|admin|accéder à un formulaire d'édition d'une promo|modifier les infos d'une promo
|10|admin|accéder à un formulaire d'édition d'un étudiant|modifier les infos d'un étudiant

visiteur : un utilisateur non enregistré ou non loggué  
étudiant : un utilisateur connecté et loggué  
admin : un utilisateur enregistré et loggué avec les droits d'accès qui vont bien`
        },
        {
            langage: 'MARKDOWN',
            code: 
`## etape 2 : organisation et priorisation des tâches

on utilise un kanban`
        },
        {
            langage: 'MARKDOWN',
            code: 
`## etape 3 : wireframes

- papier crayon
- app.diagrams.net
- wireframe.cc
- lucidchart
- paint

### page d'accueil
![Wireframe page d'accueil](./ressources/accueil.jpg)

### liste promos
![Wireframe liste des promos](./ressources/promos.jpg)

### détails etudiant
![Wireframe détails étudiant](./ressources/detailsEtudiant.jpg)`
        }
    ],
    app: [
        {
            code: 
`/*
on stocke les variables globales de l'app dans le fichier .env
pour y avoir accès dans le code, on utilise le package dotenv
*/
const dotenv = require('dotenv');
//pour ajouter les variables à process.env, on utilise la méthode config du package
dotenv.config();

console.log(process.env);

//on stocke le port dans une variable
//en cas d'erreur avec dotenv, on prévoit un port par défaut
const PORT = process.env.PORT || 3000;

//on crée le serveur express
const express = require('express');
const app = express();

//configuration du dossier de ressources statiques
app.use(express.static('./public'));

//configuration du serveur de templates
app.set('view engine', 'ejs');
app.set('views', './app/views');

//TODO : ajout du routeur

//on lance le serveur
app.listen(PORT, () => {
    console.log(\`Server started on port \${PORT}\`);
});`
        },
        {
            code: 
`router.js

//on importe le module express
const express = require('express');
//on crée le routeur
const router = new express.Router();

//TODO : ajout des routes

//on exporte le routeur pour l'utiliser dans index.js
module.exports =  router;



index.js

//on importe le routeur et on l'ajoute aux middlewares
const router = require('./app/router');
app.use(router);`
        },
        {
            code: 
`mainController.js

const mainController = {
    //page d'accueil
    home: (request, response) => {
        response.render('home');
    },
    //traitement des erreurs d'url
    notFound: (request, response) => {
        response.render('404');
    }
}

//on exporte le controlleur pour l'utiliser dans le routeur
module.exports = mainController;


router.js

//on importe le module express
const express = require('express');
//on crée le routeur
const router = new express.Router();

//import des controlleurs
const mainController = require('./controllers/mainController');

//page d'accueil
router.get('/', mainController.home);

//erreurs d'URL
router.use(mainController.notFound);

//on exporte le routeur pour l'utiliser dans index.js
module.exports =  router;`
        },
        {
            langage: 'HTML',
            code: 
`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/reset.css">
        <link rel="stylesheet" href="/css/style.css">
        <title>Trombin-o'clock</title>
    </head>
    <body>
        <div id="container">
            <header>
                <a href="/">
                    <h1>
                        <img src="/images/logo.png" alt="Logo Trombin-o'clock">
                        Trombin-O'Clock
                    </h1>
                </a>
                <nav>
                    <a href="#">Connexion</a>
                    <a href="#">Inscription</a>
                </nav>
            </header>
            <main>
`
        },
        {
            langage: 'HTML',
            code: 
`            </main>
            <footer>
                <p>Copyright © 2020 Promo Lyra - All Right Reserved</p>
                <a href="mailto:contact@trombinoclock.io">Contact</a>
            </footer>
        </div>
    </body>
</html>`
        },
        {
            langage: 'HTML',
            code: 
`<%- include('partials/header') %>

<div class="main__buttons">
    <a href="#">Liste des promos</a>
    <a href="#">Liste des étudiants</a>
</div>

<%- include('partials/footer') %>`
        },
        {
            language: 'HTML',
            code: 
`<%- include('./partials/header')  %> 

<div class="img404"></div>

<%- include('./partials/footer') %>`
        },
        {
            langage: 'CSS',
            code: 
`body {
    font-family: sans-serif;
    color: #021132;
    background-color: #fffdd8;
    overflow: hidden;
}

#container {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #1a4c79;
    background-color: #fff;
}

header h1 {
    display: flex;
    align-items: center;
    font-size: 2em;
    margin: .2em;
    padding-left: .5em;
}

header h1 img {
    max-width: 75px;
}

header nav {
    padding: 2em;
}

header nav a, footer a {
    margin: 1em;
    padding: .5em;
    border: 2px solid #1a4c79;
    border-radius: 5px;
    transition: .3s;
}

header nav a:hover, footer a:hover {
    background-color: #1a4c79;
    color: white;
}

main {
    flex-grow: 1;
    display: flex;
}

.main__buttons {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.main__buttons a {
    display: block;
    width: 40%;
    text-align: center;
    font-size: 2em;
    padding: 1.5em;
    background-color: #1a4c79;
    color: white;
    border: 3px solid white;
    border-radius: 10px;
    transition: .3s;
}

.main__buttons a:hover {
    background-color: white;
    color: #1a4c79;
    border: 3px solid #1a4c79;

}

footer {
    height: 50px;
    background-color: #fff;
    border-top: 3px solid #1a4c79;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.img404 {
    width: 100%;
    height: 100%;
    background: #fff url(/images/404.jpg) center/contain no-repeat
}`
        },
        {
            code: 
`//on importe des données sous forme de tableau depuis un fichier json
const promos = require('../../data/promos.json');


const promosController = {
    allPromos: (request, response) => {
        //on passe le tableau de data à la vue pour affichage
        response.render('promos', {promos})
    }
}

module.exports = promosController;`
        },
        {
            code: 
`//on importe le module express
const express = require('express');
//on crée le routeur
const router = new express.Router();

//import des controlleurs
const mainController = require('./controllers/mainController');
const promosController = require('./controllers/promosController');

//page d'accueil
router.get('/', mainController.home);

//liste des promos
router.get('/promos', promosController.allPromos);

//erreurs d'URL
router.use(mainController.notFound);

//on exporte le routeur pour l'utiliser dans index.js
module.exports =  router;`
        },
        {
            langage: 'HTML',
            code: 
`<div class="main__buttons">
    <a href="/promos">Liste des promos</a>
    <a href="#">Liste des étudiants</a>
</div>`
        },
        {
            langage: 'HTML',
            code: 
`<%- include('partials/header') %>

<div class="main">
    <h2>Liste des promos</h2>
    <div class="main__container">
        <%# on veut afficher toutes les promos, on boucle sur le tableau %>
        <% for (const promo of promos) { %>
            <div class="promo">
                <h3 class="promo__name"><%= promo.name %></h3>
                <img class="promo__image" src="<%= promo.github_organization %>.png" alt="Logo <%= promo.name %>">
            </div>
        <%}%>
    </div>
</div>

<%- include('partials/footer') %>`
        },
        {
            langage: 'CSS',
            code: 
`.main {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.main h2 {
    width: 80%;
    margin: 1em auto;
    text-align: center;
    font-size: 1.7em;
    padding: 1.5em;
    font-weight: bold;
    box-shadow: -3px 3px 5px #00c4a7;
    background-color: #fff;
}

.main__container {
    display: flex;
    justify-content: space-evenly;
    flex-grow: 1;
    flex-wrap: wrap;
    overflow-y: auto;
}

.promo {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    margin: 1em;
    background-color: #eee;
    border: 3px solid #1a4c79;
    border-radius: 10px;
    transition: .3s;
}

.promo:hover {
    background-color: #fff;
    box-shadow: 3px 3px 5px #1a4c79;
}

.promo__name {
    width: 100%;
    text-align: center;
    color: white;
    background-color: #00c4a7;
    font-size: 1.2em;
    padding: .5em;
    border-bottom: 2px solid #1a4c79;
}

.promo__image {
    max-width: 80%;
    padding: 1em;
}`
        },
        {
            code: 
`detailsPromo: (request, response) => {
    //on récupère l'id de promo dans les paramètres de l'url
    const promoId = request.params.id;
    //on filtre les data pour prendre la promo qui nous intéresse
    //ATTENTION : promoId est une string, promo.id est un number ...
    const promo = promos.find(el => el.id === parseInt(promoId));
    //on récupère le nb d'étudiants
    const nbStudents = students.filter(el => el.promo === parseInt(promoId)).length;
    //on envoie ces infos à la vue
    response.render('detailsPromo', {promo, nbStudents});
}`
        },
        {
            code: 
`//détails promo
router.get('/promos/:id', promosController.detailsPromo);`
        },
        {
            langage: 'HTML',
            code: 
`<% for (const promo of promos) { %>
    <a href="/promos/<%= promo.id %>">
        <div class="promo">
            <h3 class="promo__name"><%= promo.name %></h3>
            <img class="promo__image" src="<%= promo.github_organization %>.png" alt="Logo <%= promo.name %>">
        </div>
    </a>
<%}%>`
        },
        {
            langage: 'HTML',
            code: 
`<%- include('partials/header') %>

<div class="main">
    <h2>Détails de la promo <%= promo.name %></h2>
    <div class="main__details">
        <div class="details__image">
            <img class="promo__image" src="<%= promo.github_organization %>.png" alt="Logo <%= promo.name %>">
        </div>
        <div class="details__promo">
            <p>Organisation GitHub : <span><a target="_blank" href="<%=promo.github_organization %>"><%= promo.github_organization %></a></span></p>
            <p>Nb d'étudiants : <span><%= nbStudents %></span></p>
            <a href="/promos/<%=promo.id%>/students">Afficher les étudiants de cette promo</a>
        </div>
    </div>
</div>

<%- include('partials/footer') %>`
        },
        {
            langage: 'CSS',
            code: 
`.main__details {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.details__image {
    width: 25%;
    max-width: 400px;
}

.details__promo {
    display: flex;
    flex-direction: column;
    box-shadow: -3px 3px 5px #ccc;
}

.details__promo * {
    font-size: 1.1em;
    font-weight: bold;
    padding: 1.5em 1em;
}

.details__promo span, .details__promo span a {
    font-weight: normal;
    font-size: 1em;
    padding: 0em;
}

.details__promo>a {
    font-size: 1.5em;
    text-align: center;
}

.details__promo>a:hover, .details__promo span a:hover {
    color: #d8373a;
    text-decoration: underline;
}`
        },
        {
            langage: 'MARKDOWN',
            code: 
`## challenge jour 1

- faire le wireframe de la page "Etudiants d'une promo"
- implémenter la route /promo/:id/students

Pour la photo des étudiants, utilisez l'url \`https://github.com/{username}.png\``
        }
    ]
};

export const day2 = {
    challenge: [
        {
            code: 
`//étudiants d'une promo
router.get('/promos/:id/students', promosController.promoStudents);`
        },
        {
            code: 
`promoStudents: (request, response) => {
    //on récupère l'id de promo dans les paramètres de l'url
    const promoId = request.params.id;
    //on filtre les data pour prendre la promo qui nous intéresse
    const promo = promos.find(el => el.id === parseInt(promoId));
    //on récupère les étudiants de cette promo
    const promoStudents = students.filter(el => el.promo === parseInt(promoId));
    //on passe le tout à la vue pour affichage
    response.render('promoStudents', {promo, students: promoStudents});
}`
        },
        {
            langage: 'HTML',
            code: 
`<%- include('partials/header') %>

<div class="main">
    <h2>Etudiants de la promo <%= promo.name %></h2>
    <div class="main__container">
        <%# on veut afficher tous les étudiants, on boucle sur le tableau %>
        <% for (const student of students) { %>
            <a href="/students/<%= student.id %>">
                <div class="student">
                    <p class="student__lastname"><%= student.last_name %></p>
                    <p class="student__firstname"><%= student.first_name %></p>
                    <p class="student__pseudo" ><%= student.github_username %></p>
                    <img class="student__image" src="https://github.com/<%= student.github_username %>.png" alt="Pseudo github">
                </div>
            </a>
        <% } %>
    </div>
</div>

<%- include('partials/footer') %>`
        },
        {
            langage: 'CSS',
            code: 
`.promo, .student {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    margin: 1em;
    background-color: #eee;
    border: 3px solid #1a4c79;
    border-radius: 10px;
    transition: .3s;
}

.promo:hover, .student:hover {
    background-color: #fff;
    box-shadow: 3px 3px 5px #1a4c79;
}

...

.promo__image, .student__image {
    max-width: 80%;
    padding: 1em;
}

...

.student__lastname {
    font-size: 1.2em;
    font-weight: bold;
    padding: .5em 0;
}

.student__firstname {
    font-size: 1.2em;
    padding-bottom: .5em;
}`
        }
    ],
    sql: [
        {
            language: 'SQL',
            code:
`PROMO: _nom, organisation_githug
CONTIENT, 0N PROMO, 11 ETUDIANT
ETUDIANT : _prénom, nom, pseudo_github`
        },
        {
            langage: 'SQL',
            code: 
`promo (id SERIAL, name VARCHAR, github_organization VARCHAR)
etudiant (id SERIAL, first_name VARVCHAR, last_name VARCHAR, github_username VARCHAR, #promo(id) INT)`
        },
        {
            language: 'SQL',
            code:
`SELECT * FROM "prof";`
        },
        {
            language: 'MARKDOWN',
            code:
`# SQL et psql

## SQL

### Affichage de tous les enregistrements

\`\`\`sql
SELECT * FROM "<nom_table>";
\`\`\`



## psql

Client de connexion à une base Postgresql

\`\`\`bash
psql -h <nom_hôte> -U <nom_user> -d <nom_BDD>
\`\`\`

En cas de succès, le prompt du terminal change
Il affiche le nom de la base à laquelle on est connecté

### Afficher les tables contenues dans une base

\`\`\`bash
\\d
\`\`\`

### Afficher la liste des tables d'une base

\`\`\`bash
\\dt <nom_base>
\`\`\`

### Afficher les champs d'une table

\`\`\`bash
\\d <nom_table>
\`\`\``
        },
        {
            language: 'SQL',
            code:
`SELECT "first_name", "last_name" FROM prof;`
        },
        {
            language: 'SQL',
            code:
`SELECT "last_name", "first_name", "age" FROM prof;`
        },
        {
            language: 'MARKDOWN',
            code:
`### Affichage de tous les enregistrements avec tous les champs

\`\`\`sql
SELECT * FROM "<nom_table>";
\`\`\`

### Affichage de tous les enregistrements avec filtre sur certains champs

\`\`\`sql
SELECT "<nom_champ1>", "<nom_champ2>" FROM "<nom_table>";
\`\`\``
        },
        {
            language: 'SQL',
            code:
`SELECT * FROM "prof" WHERE spe_js=true;`
        },
        {
            language: 'SQL',
            code:
`SELECT "first_name", "last_name" FROM "prof" WHERE spe_js=true;`
        },
        {
            language: 'MARKDOWN',
            code:
`### Filtrer les enregistrments à afficher

\`\`\`sql
SELECT "<nom_champ1>", "<nom_champ2>" FROM "<nom_table>" WHERE "<nom_champ>"=<value_champ>;
\`\`\`

Attention : pour les champs de type texte (VARCHAR, TEXT), on doit mettre la valeur entre ''

\`\`\`sql
SELECT * FROM "prof" WHERE "first_name"='Simon';
\`\`\``
        },
        {
            language: 'SQL',
            code:
`SELECT * FROM "prof" WHERE spe_js=true AND spe_html_css=true;
SELECT * FROM "prof" WHERE spe_js=true OR spe_html_css=true;`
        },
        {
            language: 'MARKDOWN',
            code:
`### Filtre multi-critères

Pour cumuler des critères, on les sépare avec **AND**

\`\`\`sql
SELECT * FROM "prof" WHERE "spe_js"=true AND "spe_html_css"=true;
\`\`\`

Pour récupérer les enregistrements correspondant à au moins un critère, on les sépare avec **OR**

\`\`\`sql
SELECT * FROM "prof" WHERE "spe_js"=true OR "spe_html_css"=true;
\`\`\``
        },
        {
            language: 'SQL',
            code:
`SELECT * FROM "promo";`
        },
        {
            language: 'SQL',
            code:
`SELECT * FROM "promo" WHERE "id"=129;`
        },
        {
            language: 'SQL',
            code:
`SELECT "first_name", "last_name" FROM "student" WHERE "promo_id"=123 OR "promo_id"=129;`
        },
        {
            language: 'SQL',
            code:
`SELECT * FROM "student" WHERE "last_name" LIKE 'C%';`
        },
        {
            language: 'SQL',
            code:
`SELECT * FROM "promo" WHERE "name" LIKE '%te%';`
        },
        {
            language: 'MARKDOWN',
            code:
`### Valeur de champ texte approximative

On utilise le mot-clé **LIKE** et on indique les caractères manquants avec **%**

#### Commence par
\`\`\`sql
SELECT * FROM "student" WHERE "last_name" LIKE 'C%';
\`\`\`

#### Contient par
\`\`\`sql
SELECT * FROM "student" WHERE "last_name" LIKE '%ra%';
\`\`\`

#### Se termine par
\`\`\`sql
SELECT * FROM "student" WHERE "last_name" LIKE '%x';
\`\`\`

...

### Changer de BDD

\`\`\`bash
\\c <nom_base>
\`\`\``
        },
        {
            language: 'SQL',
            code:
`SELECT * FROM "promo" ORDER BY name;
SELECT * FROM "promo" ORDER BY name DESC;`
        },
        {
            language: 'MARKDOWN',
            code:
`### Ordonner les résultats

A la fin de la requête, on utilise le mot-clé **ORDER BY** suivi du nom du champ qui servira de critère de tri  
Par défaut, le tri se fait dans l'ordre croissant, on ajoute le mot-clé **DESC** pour obtenir un tri dans l'ordre décroissant

#### Ordre croissant
\`\`\`sql
SELECT * FROM "prof" WHERE "last_name" LIKE '%x' ORDER BY "last_name";
SELECT * FROM "prof" WHERE "last_name" LIKE '%x' ORDER BY "last_name" ASC;
\`\`\`

#### Ordre décroissant
\`\`\`sql
SELECT * FROM "prof" WHERE "last_name" LIKE '%x' ORDER BY "last_name" DESC;
\`\`\``
        }
    ],
    pg: [
        {
            code:
`/*
On doit d'abord importer le module pour l'utiliser dans le code
On fait comme dans la doc : pas besoin de tout importer, on ne prend que ce qui nous intéresse grâce à la destructuration
*/
const {Client} = require('pg');

/* Connection depuis une URL */
//const client = new Client('postgresql://etudiant:XXX@oclockpg.cbyp1h3aq7pw.eu-west-3.rds.amazonaws.com:5432/trombi');

/* Connection avec un object en argument */
// const client = new Client({
//     host: 'oclockpg.cbyp1h3aq7pw.eu-west-3.rds.amazonaws.com',
//     user: 'etudiant',
//     password: 'XXX',
//     database: 'trombi'
// });

/* Connexion avec les variables d'environnement
Les variables suivantes sont à ajouter dans le .env
On utilisera dotenv pour charger ces variables dans l'environnement

PGHOST=oclockpg.cbyp1h3aq7pw.eu-west-3.rds.amazonaws.com
PGUSER=etudiant
PGPASSWORD=XXX
PGDATABASE=trombi
PGPORT=5432
*/

require('dotenv').config();
const client = new Client();

/* Quand le client est créé, on doit le connecter avant de pouvoir faire des requêtes */
client.connect();

/* On peut maintenant faire des requêtes vers la base */`
        },
        {
            code:
`const results = client.query('SELECT * FROM "promo"');
console.log(results);`
        },
        {
            code:
`/* 
on utilise un callback pour réceptionner l'erreur ou les résultats 
le traitement est asynchrone : on aura un délai d'attente entre l'envoi de la requête et la réception des résultats 
les callbacks en JS permettent de prévoir le traitement qu'on va faire à la réception des infos
ça permet de ne pas bloquer l'application en attendant la réponse
le callback est une fonction qui prend 2 paramètres :
- l'éventuelle erreur (serveur non lancé, erreur dans la requête, ...)
- les éventuels résultats si tout s'est bien passé
*/
client.query('SELECT * FROM "promo"', (error, results) => {
    //on commence par vérifier s'il y a eu une erreur
    if (error) {
        console.log('Une erreur s\\'est produite', error);
    } else {
        /* 
        pas d'erreur, on doit avoir obtenu des résultats sour la forme d'un gros object
        les informations qui nous intéressent se trouvent dans la propriété rows : un tableau contenant tous les enregistrements
        on boucle sur le tableau pour les afficher
        */
       for (const rec of results.rows) {
           console.log(rec);
       }

       //le traitement est terminé, on peut fermer la connexion
       client.end();
    }
});`
        },
        {
            code:
`client.query('SELECT * FROM "promo"', (error, results) => {
    //on commence par vérifier s'il y a eu une erreur
    if (error) {
        console.log('Une erreur s\\'est produite', error);
    } else {
        /* 
        pas d'erreur, on doit avoir obtenu des résultats sour la forme d'un gros object
        les informations qui nous intéressent se trouvent dans la propriété rows : un tableau contenant tous les enregistrements
        on boucle sur le tableau pour les afficher
        */
       for (const rec of results.rows) {
           console.log(rec);
       }

       //le traitement est terminé, on peut fermer la connexion
    }
});
client.end();`
        },
        {
            language: '',
            code:
``
        },
        {
            language: '',
            code:
``
        },
        {
            language: '',
            code:
``
        },
        {
            language: '',
            code:
``
        },
        {
            language: '',
            code:
``
        },
        {
            language: '',
            code:
``
        },
        {
            language: '',
            code:
``
        },
        {
            language: '',
            code:
``
        },
        {
            language: '',
            code:
``
        },
        {
            language: '',
            code:
``
        },
    ]
}