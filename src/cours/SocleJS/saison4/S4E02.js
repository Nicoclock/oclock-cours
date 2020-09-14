import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce} from "../../../common";
import {day2 as snippets} from "./Code/snippets";

import "../../style.scss"

const S4E02 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Organiser ses données - 1</div>
            <div className="Inner">
                <List>
                    <Card title="Correction" duration="1:00:00">
                        <Recap>
                            <BoxItem text="Bases de la gestion de projet" />
                            <BoxItem text="Méthodes agiles plus souples et plus efficace que cycle en V classique" />
                            <BoxItem text="Scrum : une méthode agile parmi d'autres" />
                            <BoxItem text="Notre projet : trombin-o'clock" />
                            <BoxItem text="Ebauche de cahier des charges depuis mail client" />
                            <BoxItem text="Uses cases et wireframes" />
                            <BoxItem text="Implémentation sprint 1" />
                        </Recap>
                        <Sondage question="Et ce challenge ?" reponses={["finger in the nose", "wireframe ok, pas la route", "papu pasu pavoulu"]} />
                        <ListItem title="Wireframes">
                            <Item text="Ceux qui veulent, vous pouvez m'envoyer les wireframes sur slack" />
                            <Item text="On va les regarder ensemble" />
                        </ListItem>
                        <ListItem title="Ajout de la route" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout de la méthode controleur" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Création de la vue" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Toujours la même démarche, on suit le fil" />
                            <BoxItem text="Routeur, controleur, vue" />
                            <BoxItem text="On a injecté des data depuis json, c'est cool" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Mais limité, on peut pas facilement en ajouter" />
                            <BoxItem text="Ou faire une sélection sur plusieurs critères" />
                            <BoxItem text="Tout l'intérêt des bases de données" />
                        </Transition>
                    </Card>
                    <Card title="BDD" duration="1:30:00">
                        <Doc type="Slides" url="http://localhost:1234/s4/bdd" />
                        <ListItem title="Base de données">
                            <Item text=" ou BDD pour les intimes" />
                            <Click dir="Bottom x 3" />
                            <Item text="Un service à part, besoin de personne d'autre ppur exister" />
                            <Item text="Il peut répondre à plusieurs demandes" />
                            <Item text="On utilise un langage particulier pour lui causer" />
                            <Click dir="Bottom" />
                            <Click dir="Bottom" />
                            <Item text="Un serveur : il reçoit des requêtes et envoie des réponses" />
                            <Click dir="Bottom x 2" />
                            <Item text="on lui délègue une partie du boulot" />
                            <Click dir="Right" />
                            <Item text="lecture slide" />
                            <Click dir="Bottom x 2" />
                            <Item text="relationnelle : système de référence d'une liste de données à l'autre" />
                            <Item text="Not Only SQL : plus pour du stockage d'infos indépendantes" />
                            <Click dir="Bottom" />
                            <Item text="Détail liste" />
                            <Click dir="Bottom" />
                            <Item text="Pas de langage SQL pour communiquer" />
                            <Click dir="Right" />
                            <Click dir="Bottom" />
                            <Item text="Serveur peut avoir des dizaines de bases" />
                            <Click dir="Bottom" />
                            <Item text="Poupées russes : une base peut avoir des dizaines de tables" />
                            <Click dir="Bottom" />
                            <Item text="une table contient plusieurs champs" />
                            <Click dir="Bottom" />
                            <Item text="un ensemble des champs fait une ligne dans la table" />
                            <Click dir="Bottom" />
                            <Item text="Voilà à quoi ressemble une table" />
                            <Click dir="Bottom" />
                            <Item text="De nombreux types de champ, on aura l'occasion de les voir" />
                            <Click dir="Bottom" />
                            <Item text="Quand le type est défini, on peut pas mettre autre chose dans le champ" />
                            <Click dir="Bottom" />
                            <Item text="1ère liste de types, y a pas tout encore ..." />
                            <Click dir="Bottom" />
                            <Item text="convention de nommage, toujours de les respecter" />
                            <Click dir="Right" />
                            <Item text="Méthodes pour designer la base" />
                            <Item text="Merise, une des méthodes qui codifie comment créer :" />
                            <Click dir="Bottom" />
                            <SubItem text="le Modèle Conceptuel de Donnes" />
                            <Click dir="Bottom" />
                            <SubItem text="le Modèle Logique de Donnes" />
                            <Click dir="Bottom" />
                            <Item text="Entité : représentation d'un élément ayant un rôle dans notre système" />
                            <Item text="On précise un peut les relations avec les cardinalités" />
                            <Click dir="Bottom" />
                            <Item text="MLD est plus précis, étape d'après" />
                            <Item text="typage des champs, on design nos tables en BDD" />
                            <Item text="on précise certaines relations, parfois besoin d'une table sup" />
                            <Click dir="Bottom" />
                        </ListItem>
                        <ListItem title="Demo mocodo" />
                        <Doc type="Ressource" url="https://github.com/O-clock-Alumni/fiches-recap/blob/master/bdd/conception-03-mcd.md" />
                        <Exo>
                            <Enonce text="A vous de jouer, entités pour trombi selon ce qu'on a dans les json" />
                        </Exo>
                        <Demo type="MCD">
                            {console.log(resetSnippet())}
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="MLD">
                            <Item text="Cette fois, on va indiquer les relations entre les tables de la BDD" />
                            <Item text="Déjà, on rajoute un id à tout le monde" />
                            <Item text="Dans étudiant, on ajoute une ref vers la promo" />
                        </ListItem>
                        <Demo type="MLD">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Travail de reflexion super important !" />
                            <BoxItem text="On repère les pbs de conception à ce niveau-là" />
                            <BoxItem text="Quand la BDD est créée avec des data, c'est plus pénible de modifier" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Bien joli tout ça mais là on est opé !" />
                            <BoxItem text="Comment créer la base et mettre la structure en place ?" />
                            <BoxItem text="Pour causer avec la BDD, besoin d'un langage spécial : SQL" />
                        </Transition>
                    </Card>
                    <Card title="SQL, nouveau langage" duration="1:00:00">
                        <Doc type="Ressource" url="https://www.postgresql.org/docs/current/" />
                        <ListItem title="Postgresql">
                            <Item text="Vu dans les slides, plein de SGBDR" />
                            <Item text="On va utiliser Postgresql" />
                            <Item text="Très répandu, complet, respecte le standard SQL" />
                        </ListItem>
                        <Doc type="Ressource" url="https://www.postgresql.org/docs/current/app-psql.html" />
                        <ListItem title="psql">
                            <Item text="Serveur de BDD, on a besoin d'un client" />
                            <Item text="Un logiciel capable de communiquer avec le serveur" />
                            <Item text="HTTP : navigateur, Postgresql : psql" />
                            <Item text="Vous l'avez tous sur votre VM" />
                            <Item text="On vérifie ensemble : psql --version" />
                        </ListItem>
                        <Sondage question="Résultat de `psql --version`" reponses={["un numéro de version", "commande introuvable", "autre"]} />
                        <ListItem title="Connexion distante">
                            <Item text="Je le fais moi pour l'instant, suivez-moi" />
                            <Item text="Je vais me connecter à une base existante" />
                            <Item text="psql -h oclockpg.cbyp1h3aq7pw.eu-west-3.rds.amazonaws.com -U postgres -d prof | oclockpg" />
                            <Item text="Remarquez le prompt, il a changé" />
                            <Item text="Je suis maintenant connecté à une BDD qui s'appelle prof" />
                        </ListItem>
                        <ListItem title="Requêtes SQL">
                            <Item text="Pour afficher les tables : \d" />
                            <Item text="On va afficher le contenu de la table prof avec SQL" />
                            <Item text="Une idée de la commande ?" />
                        </ListItem>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Syntaxe SQL">
                            <Item text="Pour afficher des enregistrements : SELECT" />
                            <Item text="* veut dire tous les enregistrements" />
                            <Item text="On indique la table visée avec FROM <nom_table>" />
                            <Item text="nom de la table entre double quotes (double c'est important)" />
                            <Item text="pas obligatoire mais ça évite des ennuis, prenez l'habitude" />
                            <Item text="Requête SQL doit se terminer par ;, c'est pas optionnel comme en JS" />
                        </ListItem>
                        <ListItem title="Détail affichage">
                            <Item text="On obtient une liste des enregistrements sous forme de tableau" />
                            <Item text="Header, nom des champs, autres lignes : values" />
                            <Item text={`psql permet d'afficher les champs d'une table sans les values : \\d "prof"`} />
                            <Item text="Fiche récap ce soir mais on va se faire la nôtre" />
                        </ListItem>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Sélection sur certains champs">
                            <Item text="Pas obligé d'afficher tous les champs, je peux en sélectionner certains" />
                            <Item text="Nom des champs comme nom des tables, entre double quotes" />
                        </ListItem>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Modifiez la requête pour afficher le nom, le prénom et l'âge" />
                        </Exo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Sélection filtrée">
                            <Item text="Pas obligé non plus d'afficher tous les enregistrements" />
                            <Item text="On peut mettre une condition avec WHERE" />
                            <Item text="On va afficher les gens bien dans cette liste" />
                        </ListItem>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Sélection multi critères">
                            <Item text="On va afficher les gens encore mieux dans la liste" />
                            <Item text="On peut indiquer plusieurs critères dans le where" />
                            <Item text="On peut les cumuler avec AND, on prendra les recs qui matchent tous les critères" />
                            <Item text="ou prendre les recs matchant au moins un critère avec OR" />
                        </ListItem>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="On change de base">
                            <Item text="On va varier les plaisirs un peu, on change de base" />
                            <Item text="Pas de requête SQL pour ça, commande de psql : \c <nom_base>" />
                            <Item text="Je me place sur la base trombi : \c trombi" />
                            <Item text="Je veux voir la liste des tables, je tape quoi ?" />
                            <Item text="Avec \d, je vois qu'on a une table promo et une table student" />
                            <Item text="La troisième, on peut l'ignorer pour l'instant : table interne crée par postgres" />
                        </ListItem>
                        <Exo>
                            <Enonce text="Affichez toutes les promos" />
                        </Exo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Affichez la promo dont l'id est 129" />
                        </Exo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Affichez les prénom et nom des étudiants dont l'id de promo est 123 OU 129" />
                        </Exo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Contient">
                            <Item text="Un dernier truc avant de retourner dans JS" />
                            <Item text="On connait pas forcément la valeur exacte du champ" />
                            <Item text="SQL nous propose un truc pour dire qu'un champ contient qqc" />
                            <Item text="Chercher les étudiants dont le nom commence par C" />
                            <Item text="Chercher les promos dont le nom contient te" />
                            <Item text="Au lieu de =, on met le keyword LIKE" />
                            <Item text="On remplace les caractères inconnus par un %" />
                        </ListItem>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <ListItem title="Tri croissant ou décroissant">
                            <Item text="Allez, encore un tit truc pour la route" />
                            <Item text="On a souvent besoin d'ordonner les résultats" />
                            <Item text="On pourrait le faire en JS mais on peut aussi le faire en SQL" />
                            <Item text="A la fin de la requête, on utilise le mot-clé ORDER BY" />
                            <Item text="suivi du nom du champ qui sert de critère de tri" />
                            <Item text="ASC (par défaut) pour le tri croissant, DESC pour décroissant" />
                        </ListItem>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Demo type="SQL">
                            <Code step={snippets.sql[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="psql : client de connexion au serveur de BDD" />
                            <BoxItem text="Pour causer à la BDD, on utilise le langage SQL" />
                            <BoxItem text="On n'a pas tout vu encore loin de là !" />
                            <BoxItem text="Mais on en sait suffisament pour jouer un peu" />
                        </Recap>
                        <Transition>
                            <BoxItem text="On va retourner dans JS et faire une connexion à la BDD" />
                            <BoxItem text="Dans le terminal, on a le client psql" />
                            <BoxItem text="Il nous faut un autre client pour JS : module pg" />
                        </Transition>
                    </Card>
                    <Card title="Lien SQL-JS" duration="1:00:00">
                        <ListItem title="Installation pg" />
                        <Doc type="Ressource" url="https://node-postgres.com/" />
                        <ListItem title="Connexion depuis JS">
                            <Item text="Regardons un peu comment se connecter depuis JS" />
                            <Item text="Dans la doc, connecting ça a l'air pas mal" />
                            <Item text="Plusieurs façons de faire :" />
                            <SubItem text="Avec des variables d'environnement dans le .env" />
                            <SubItem text="Avec un object JS en argument de connect" />
                            <SubItem text="Avec une URL contenant toutes ces infos" />
                            <Item text="On se fait un fichier test.js pour essayer tout ça" />
                        </ListItem>
                        <Demo type="PG">
                            {console.log(resetSnippet())}
                            <Code step={snippets.pg[snippet++]} />
                        </Demo>
                        <ListItem title="Syntaxe instinctive">
                            <Item text="La question maintenant, c'est comment faire une requête et récupérer les recs dans JS" /> 
                            <Item text="Instinctivement, on aurait envie de faire un truc comme ça" /> 
                        </ListItem>
                        <Demo type="PG">
                            <Code step={snippets.pg[snippet++]} />
                        </Demo>
                        <ListItem title="Callback, kezako">
                            <Item text="Si on regarde la doc de plus près, ils font pas comme ça" />
                            <Item text="Il va y avoir un délai entre l'envoi de la requête et la réception de la réponse" />
                            <Item text="On va devoir utiliser un callback" />
                            <Item text="Une fonction qui sera exécutée quand la BDD aura répondu" />
                            <Item text="Comme au resto, on commande un plat, on attend que le serveur revienne pour manger" />
                            <Item text="Callback avec 2 paramètres : l'éventuelle erreur en 1er, les éventuels resultats en 2ème" />
                            <Item text="Pour chaque requête, on va tester s'il y a eu une erreur" />
                            <Item text="Si c'est le cas, results vaudra null, pas la peine d'aller plus loin" />
                            <Item text="On essaie ?" />
                        </ListItem>
                        <Demo type="PG">
                            <Code step={snippets.pg[snippet++]} />
                        </Demo>
                        <ListItem title="Utilisation des callbacks">
                            <Item text="Super important : le traitement qui utilise les infos de la BDD doit être DANS le callback" />
                            <Item text="Pareil pour la fermeture de la connexion : ne doit se faire qu'après avoir utilisé les infos de la BDD" />
                        </ListItem>
                        <Demo type="PG">
                            <Code step={snippets.pg[snippet++]} />
                        </Demo>
                        <Sondage question="Un callback c'est ..." reponses={["reviens Léon en anglais", "une fonction", "une connexion à la BDD"]} />
                        <Sondage question="Les callbacks de pg ont 2 paramètres" reponses={["error et results", "results et error", "le 1er et le 2ème"]} />
                        <Sondage question="Un callback est exécuté quand il a ..." reponses={["obtenu les infos attendus", "le temps", "été déclaré"]} />
                        <Recap>
                            <BoxItem text="Quand on effectue une requête, on utilise un callback pour traiter les résultats" />
                            <BoxItem text="On les appelle aussi des fonctions de rappel" />
                            <BoxItem text="Ca induit un délai entre le passage de la commande et la réception des résultats" />
                            <BoxItem text="On en a déjà vu : addEventListener en front, les middlewares d'express" />
                        </Recap>
                        <ListItem title="Présentation challenge" />
                    </Card>
                </List>
            </div>
        </Fragment>
    );
}

export default S4E02;