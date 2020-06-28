import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Control, Transition, Demo, BoxItem, Sondage, Exo, Enonce, Snippet, ExoSondage} from "../../../common";
import {gamehub} from "./Code/challenges";
import {day7 as snippets} from "./Code/snippets";

import "../../style.scss"

const S3E07 = () => {
    let challenge = 0;
    let snippet = 0;

    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };

    return (
        <Fragment>
            <div className="Title">Middleware</div>
            <div className="Inner">
                <Card title="Correction" duration="2:00:00">
                    <List>
                        <Sondage question="le pair programming, c'est cool ou bien ?" reponses={["Le pied !", "ouais bof", "Pas aimé du tout !"]} />
                        <Sondage question="Et sinon, cet atelier ?" reponses={["ça a été", "on a galéré", "La misère !!"]} />
                        <Transition>
                            <BoxItem text="Ok, on reprend tout ça ensemble" />
                        </Transition>
                        <ListItem title="Setup projet">
                            <Item text="On initialise : npm init" />
                            <Item text="On installe les deps : npm install express ejs" />
                            <Item text="package.json créé, on est bon" />
                        </ListItem>
                        <ListItem title="Mise en place express" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Mise en place route /" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="On complète index.ejs" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Mise en place routes /game/fourchette et /game/diceRoller" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Factorisons la nav">
                            <Item text="Ajout répertoire partials dans views" />
                            <Item text="Ajout fichier header.ejs dans partials" />
                            <Item text="On y copie/colle le code jusqu'à </header> dans index.ejs" />
                            <Item text="Ajout include du partial dans les 3 vues" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Modif route /game/diceRoller" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Ajout du test css dans header.ejs">
                            <Item text="on passe par locals. différence entre variable et prop d'object" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Import games.json dans index.js" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Inclusion object obtenu dans toutes les vues" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Boucle dans header.js pour générer les <li> jeux" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Mise en place route paramétrée pour les jeux" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Ajout de game à la vue" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Modif de header.ejs pour prise en compte" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Copie de app.js -> public/js/grunt.js" />
                        <ListItem title="Copie de style.css -> public/css/grunt.css" />
                        <ListItem title="Copie de sprite.png -> public/images/sprite.png" />
                        <ListItem title="Copie du contenu de index.html dans une nouvelle vue grunt.ejs" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Modif de grunt.ejs pour nouveau path js" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Modif de grunt.css pour nouveau path image" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Modif games.json" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Ajout de footer.ejs" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                    </List>
                </Card>
                <Card title="Middlewares" duration="3:00:00">
                    <List>
                        <ListItem title="Les middlewares : why ?">
                            <Item text="Nouveau concept de prog qui va être très pratique" />
                            <Item text="utilisé dans de nombreux frameworks : NextJS, Botkit, ... et Express" />
                            <Item text="Principe : équipe d'ouvriers, chacun va effectuer UNE tâche" />
                            <Item text="Chef d'équipe va orchestrer le travail pour arriver au produit fini" />
                        </ListItem> 
                        <Doc type="repo Tablify" url="http://1235/E07/tablify" />
                        <ListItem title="Tablify">
                            <Item text="Tit projet qu'on va faire ensemble" />
                            <Item text="A partir d'un tableau d'objects, obtenir un tableau HTML" />
                            <Item text="On veut que le code fonctionne pour tous les tableaux d'objects similaires, mêmes props" />
                            <Question text="Comment vous feriez ça vous ?" />
                        </ListItem> 
                        <ListItem title="Méthode bourrin">
                            <Item text="Grosse fonction qui pourrait faire ça :" />
                            <SubItem text="ouverture table" />
                            <SubItem text="génération thead" />
                            <SubItem text="génération tbody" />
                            <SubItem text="génération tfoot" />
                            <SubItem text="fermeture table" />
                            <Item text="Dans le tfoot, on voudra souvent des totaux, des moyennes, ..." />
                            <Item text="Imaginez la taille de cette fonction !" />
                            <Item text="Dur de s'y retrouver, pas facile à maintenir, à faire évoluer" />
                            <Item text="Pas rangé, pas découpé, c'est moche" />
                            <Item text="Big fat function, 25 paramètres dont 12 optionnels, usine à gaz" />
                        </ListItem>
                        <Doc type="Schéma" url="http://localhost:1235/E07/sansMiddlewaresV2.jpg" />
                        <Doc type="Schéma" url="http://localhost:1235/E07/middlewaresV2.jpg" />
                        <ListItem title="Exemple concret et parlant">
                            <Item text="Usine à gaz qui effectue plein de traitements : BAD" />
                            <Item text="Plusieurs équipes qui effectuent chacune 1 tâche, un bout du traitement : GOOD" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Vous comprenez pourquoi c'est mieux de découper ?" />
                        </Control>
                        <ListItem title="Concrètement en JS">
                            <Item text="Comment on va implémenter ça ?" />
                            <Item text="On pourrait se dire : pleins de fonctions qui s'appellent les unes les autres" />
                            <Item text="On appelle la 1ère étape qui va appeler la 2ème qui va appeler la 3ème ..." />
                            <Item text="Version vases communiquants, chaque fonction fait une tâche et transmet le résultat à la suivante" />
                            <Item text="Solution OK, mais pas top, pas souple, dur d'ajouter/enlever une étape" />
                        </ListItem>
                        <Doc type="Schéma" url="http://localhost:1235/E07/moteurMiddlewares.jpg" />
                        <ListItem title="Middleware entre en jeu">
                            <Item text="Concrètement, middleware fonction avec 3 paramètres fournis par moteur" />
                            <SubItem text="Input : les data de départ : tableau d'objects JS" />
                            <SubItem text="Output : le résultat : tableau HTML" />
                            <SubItem text="Next : fonction du moteur pour passer au middleware suivant" />
                        </ListItem>
                        <Sondage question="input et output sont déclarés ... ?" reponses={['dans le middleware', 'dans le moteur', 'en douane']} />
                        <Sondage question="On appelle next ... ?" reponses={['dans le middleware', 'dans le moteur', 'en criant très fort']} />
                        <ListItem title="Passage par référence">
                            <Item text="Middleware doit pouvoir modifier input et output" />
                            <Item text="Ces 2 infos doivent être passées par référence" />
                        </ListItem>
                        <ListItem title="Différence entre types primitifs et complexes">
                            <Item text="Types primitifs : boolean, number, string" />
                            <Item text="l'argument est copié dans la fonction, nouvel emplacement mémoire" />
                            <Item text="le contenu de la variable originale n'est pas modifié" />
                        </ListItem>
                        <Demo type="repo Reference">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <Demo type="repo Reference">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <Demo type="repo Reference">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <ListItem>
                        <Item text="Types complexes : array, object" />
                            <Item text="l'argument n'est pas copié dans la fonction, on passe sa référence, son adresse mémoire" />
                            <Item text="le contenu de la variable originale est modifié" />
                        </ListItem>
                        <Demo type="repo Reference">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <Demo type="repo Reference">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="On a le code suivant :" />
                            <Snippet lines={snippets.reference[snippet++].code} />
                            <ExoSondage question="Que va afficher le console.log ?" reponses={['essai', 'essai_test', 'rien', 'réponse D']} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a le code suivant :" />
                            <Snippet lines={snippets.reference[snippet++].code} />
                            <ExoSondage question="Que va afficher le console.log ?" reponses={['[]', '[\'Nouvelle valeur\']', 'rien', 'réponse D']} />
                        </Exo>
                        <ListItem title="Moteur de tablify">
                            <Item text="Regardons un peu comment fonctionne notre moteur" />
                            <Item text="Il s'agit pas de retenir mais de comprendre" />
                            <Item text="On n'a pas à écrire le moteur, juste les middlewares" />
                        </ListItem>
                        <ListItem title="Commençons à coder">
                            <Item text="Maintenant on sait un peu ce qu'on fait" />
                            <Item text="On peut ajouter des middlewares au moteur avec chain" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <ListItem title="Ajout 1er middleware" />
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>

                        <ListItem title="Ajout 2ème middleware" />
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>

                        <ListItem title="Mise en place logique tbody" />
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <ListItem title="Mise en place tbody" />
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <ListItem title="Exo thead" />
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <ListItem title="Exo tfoot" />
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <Demo type="repo Tablify">
                            <Code step={snippets.tablify[snippet++]} />
                        </Demo>
                        <ListItem title="Mais pourquoi ?">
                            <Item text="A quoi ça va servir concrètement ?" />
                            <Item text="En fait on s'en sert depuis plusieurs jours !" />
                            <Item text="Express EST un moteur de middleware" />
                            <Item text="A chaque fois qu'on utilise .use ou déclare une route, on passe un middleware" />
                            <Item text="Nos routes, express.static : middleware conditionné, exécuté si match sur la route" />
                            <Item text="On n'appelle pas next parce que en bout de chaine : génèrent une réponse et l'envoient" />
                            <Item text="Ajout de nos propres middlewares chainés avec next" />
                            <Item text="Ordre reste important dans ce cas" />
                            <Question text="Dans Express, c'est quoi l'input ?" />
                            <Question text="Dans Express, c'est quoi l'output ?" />
                        </ListItem>
                        <ListItem title="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S3E07;