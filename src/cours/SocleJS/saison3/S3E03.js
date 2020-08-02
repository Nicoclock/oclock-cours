import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce, Snippet, ExoSondage} from "../../../common";
import {http} from "./Code/challenges";
import {day3 as snippets} from "./Code/snippets";

import "../../style.scss"

const S3E03 = () => {
    let challenge = 0;
    let snippet = 0;

    return (
        <Fragment>
            <div className="Title">Modules (journée ménage)</div>
            <div className="Inner">
                <Card title="Correction">
                    <List>
                        <Recap>
                            <BoxItem text="Client/Serveur : on a quoi derrière ces vilains mots ?" />
                            <BoxItem text="Trop fort Node : on peut créer nos propres serveurs HTTP" />
                            <BoxItem text="On a joué un peu avec les objects request et response" />
                            <BoxItem text="On a créer nos premières routes !" />
                        </Recap>
                        <Sondage question="Alors ce challenge ?" reponses={["ça a été", "j'ai galéré", "La misère !!"]} />
                        <Transition>
                            <BoxItem text="On revoit tout ça ensemble" />
                        </Transition>
                        <ListItem title="Création serveur" />
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Réponse par défaut" />
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Création routes">
                            <Question text="Qu'est-ce qu'on va utiliser pour faire notre aiguillage ?" />
                            <Question text="Dans le coup, notre réponse ce sera quelle route ?" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Mise en place logique" />
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Réponse html">
                            <Question text="Qu'est-ce qu'on va devoir changer ?" />
                            <Item text="On veut une vraie page html, pas juste des balises : html, header et body" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Mise en place liens" />
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Reset sur bravo">
                            <Item text="On veut reset les bornes et la proposition" />
                            <Item text="On veut conserver les valeurs d'origine des bornes" />
                            <Item text="On les stocke dans un object" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={http.steps[challenge++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ca va vous ? Vous pouvez le refaire ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="On a repris beaucoup de logique du précédent challenge" />
                            <BoxItem text="On a changé une partie : les commandes tapées par user sont devenues des routes" />
                            <BoxItem text="On a fait une interface graphique sans fioritures : texte devenu balises html" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Appli fonctionnelle over HTTP, déjà super cool !" />
                            <BoxItem text="Maniac du rangement, logique route et logique jeu mélangées, pas top ..." />
                            <BoxItem text="Comment améliorer ? Mettre la logique jeu ailleurs et l'utiliser dans server.js" />
                            <BoxItem text="Solution : les modules ! Voyons ça de suite" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Modules et fichiers">
                    <List>
                        <Doc type="Schéma" url="http://localhost:1235/Demo/Module/modules.jpg" />
                        <ListItem title="Koi c'est un module ?">
                            <Item text="Un fichier à part qui contient des infos" />
                            <Item text="Mécanisme pour rendre ce code dispo dans d'autres fichiers" />
                            <Item text="On l'utilise déjà : c'est require" />
                            <Item text="Avec require, on importe le contenu exportable du fichier mmodule dans notre code" />
                            <Item text="On le stocke dans une variable pour l'utiliser" />
                            <Item text="C'est ce qu'on a fait en écrivant const http = require('http');" />
                            <Item text="Pour l'instant, modules built-in, Node sait où les trouver : on met juste leur nom" />
                            <Item text="On va pouvoir fabriquer nos propres modules !" />
                            <Item text="Voyons de plus près comment ça marche : on va se faire un 'tit module" />
                        </ListItem>
                        <ListItem title="Demo module">
                            <Item text="On rend exportable une valeur toute bête : 23" />
                            <Item text="On la place dans module.exports" />
                            <Item text="Module perso, pas built-in : chemin relatif pour le trouver" />
                            <Item text="Pour info : pas obligé de mettre le .js dans require" />
                            <Item text="console.log de require : on obtient bien 23" />
                        </ListItem>
                        <Demo type="module">
                            <Code step={snippets.module[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour l'utiliser, on doit stocker la valeur dans une variable" />
                        </ListItem>
                        <Demo type="module">
                            <Code step={snippets.module[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On peut exporter n'importe quel type de valeur" />
                        </ListItem>
                        <Demo type="module">
                            <Code step={snippets.module[snippet++]} />
                        </Demo>
                        <Demo type="module">
                            <Code step={snippets.module[snippet++]} />
                        </Demo>
                        <Demo type="module">
                            <Code step={snippets.module[snippet++]} />
                        </Demo>
                        <Demo type="module">
                            <Code step={snippets.module[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Dans module, pas obligé de mettre les valeurs direct" />
                            <Item text="On peut utiliser des variables, on exporte leur contenu" />
                        </ListItem>
                        <Demo type="module">
                            <Code step={snippets.module[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Grâce à destructuration d'ES6, on peut récupérer ce qui nous intéresse" />
                            <Item text="Syntaxe un peu bizarre mais ça marche !" />
                            <Item text="Contrainte : faut connaitre le nom de la prop" />
                        </ListItem>
                        <Demo type="module">
                            <Code step={snippets.module[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Même combat pour un tableau" />
                            <Item text="Syntaxe toujours bizarre mais ça marche encore !" />
                        </ListItem>
                        <Demo type="module">
                            <Code step={snippets.module[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Un module, c'est de l'empaquetage++" />
                            <BoxItem text="Système d'import/export entre les fichiers" />
                            <BoxItem text="On peut exporter ce qu'on veut" />
                            <BoxItem text="On le place dans module.exports pour le rendre dispo" />
                            <BoxItem text="On le récupère dans notre prog avec require" />
                            <BoxItem text="On peut cibler ce qu'on récupère avec la destructuration" />
                            <BoxItem text="Modules Node : pas besoin de chemin, Node sait les trouver" />
                            <BoxItem text="Modules persos : chemin relatif dans le require" />
                        </Recap>
                        <Control>
                            <BoxItem text="Fiouf, beaucoup d'infos d'un coup !" />
                            <BoxItem text="Vous digérez ? Vous voyez l'intérêt du truc ?" />
                        </Control>
                        <Sondage question="Un module peut exporter ..." reponses={["un objet", "des variables", "n'importe quelle valeur"]} />
                        <Sondage question="Pour importer un module, on utilise ..." reponses={["une boite d'import/export", "require", "add"]} />
                        <Sondage question="Pour exporter des valeurs, un module utilise ..." reponses={["export module", "module.exports", "un camion"]} />
                        <Exo>
                            <Enonce text="On a l'export suivant dans le fichier module.js :" />
                            <Snippet lines={snippets.module[snippet++].code} />
                            <Enonce text="Notre code est dans le fichier prog.js dans le même répertoire" />
                            <ExoSondage question="Comment importer ce module dans notre code ?" 
                                reponses={["const PIx2 = module;", "const PIx2 = require('module');", "const PIx2 = require('./module');"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a le code suivant dans le fichier module.js :" />
                            <Snippet lines={snippets.module[snippet++].code} />
                            <Enonce text="Notre code est dans le fichier prog.js dans le même répertoire" />
                            <Enonce text="On veut utiliser la fonction comme suit :" />
                            <Snippet lines={snippets.module[snippet++].code} />
                            <ExoSondage question="Comment importer la fonction display dans notre code ?" 
                                reponses={["const myFunction = require('./module');", "const {myFunction} = require('./module');", "const [myFonction] = require('./module')"]} />
                        </Exo>
                        <Control>
                            <BoxItem text="Comment ça va vous ? Des questions à ce niveau-là ?" />
                        </Control>
                        <Transition>
                            <BoxItem text="Modules : impec pour que chacun ait son rôle" />
                            <BoxItem text="Plus facile de s'y retrouver dans les gros projets" />
                            <BoxItem text="Communeauté JS très active, pas besoin de réinventer la roue" />
                            <BoxItem text="Quand on cherche fonctionnalité, on est rarement les 1ers" />
                            <BoxItem text="Moyen de récupérer des modules prêts à l'emploi ?" />
                            <BoxItem text="Node nous le permet : npm" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Modules tiers : NPM">
                    <List>
                        <ListItem title="Présentation NPM">
                            <Item text="NPM : Node Package Manager" />
                            <Item text="Pour ceux qui connaissent Ubuntu ou Debian : équivalent à apt mais pour Node" />
                            <Item text="Installé avec Node, dispo sur votre VM" />
                            <Item text="npm --version pour vérifier" />
                        </ListItem>
                        <Sondage question="J'ai npm d'installé" reponses={["yep", "nope"]} />
                        <Doc type="Ressource" url="https://www.npmjs.com/" />
                        <ListItem>
                            <Item text="npm donne accès à des milliers de packages" />
                            <Item text="Pour chercher, le + simple : consulter le site" />
                        </ListItem>
                        <ListItem>
                            <Item text="Maintenant qu'on a la liste, comment on installe un paquet ?" />
                            <SubItem text="D'abord, dans le dossier du projet : npm init" />
                            <SubItem text="Plein de questions, on fait enter" />
                        </ListItem>
                        <ListItem>
                            <Item text="Dans dossier, package.json" />
                            <Item text="Fichier qui contient toutes les infos de notre projet" />
                            <Item text="On va le modifier au fur et à mesure" />
                            <Item text="Maintenant, on peut installer des packages dans notre projet" />
                        </ListItem>
                        <ListItem>
                            <Item text="Sur npmjs, cherchons rocket launcher" />
                            <Item text="On a une 'tite démo, package qui va changer nos vies !" />
                            <Item text="Pour le fun, on va l'installer dans notre projet" />
                            <Item text="npm install rocket-launcher" />
                            <Item text="ajout de --save plus obligatoire : va modifier le package.json pour le noter comme dépendance" />
                        </ListItem>
                        <ListItem>
                            <Item text="package.json a changé, ajout de dependencies avec la ref du package" />
                            <Item text="Dans le projet : dossier node_modules" />
                            <Item text="Contient le package installé et ses propres dépendances" />
                            <Item text="Tout de suite, reflexe : ajout d'un fichier .gitignore" />
                            <Item text="On voudra jamais envoyer node_modules sur github" />
                            <Item text="Là ça va, mais plus tard : 10aines de dossiers dans node_modules, super lourd" />
                            <Item text="On vérifie avec git status, node_modules est bien ignoré" />
                        </ListItem>
                        <ListItem title="essai Rocket launcher">
                            <Item text="On se le teste ce package ?" />
                            <Item text="On se crée un index.js on copie le code proposé et on lance node index.js" />
                        </ListItem>
                        <ListItem>
                            <Item text="Je vous avais prévenu : ce package va changer nos vies !!" />
                            <Item text="J'en profite : pourquoi on peut ignorer node_modules sur github" />
                            <Item text="Supprimons le dossier node_modules" />
                            <Item text="Pour l'instant si on lance, ça plante, trouve pas le module" />
                            <Item text="npm va pouvoir utiliser les infos de package.json pour reconstruire ce dossier" />
                            <Item text="npm install" />
                            <Item text="Quand on relance, c'est nickel !" />
                        </ListItem>
                        <ListItem title="Nodemon">
                            <Item text="Voyons un package nettement plus utile" />
                            <Item text="Cherchez sur le site nodemon" />
                            <Item text="Package utile pour le dev, inutile pour la prod" />
                            <Item text="Installation avec autre option : npm install --save-dev nodemon" />
                            <Item text="Remarquez la différence dans package.json" />
                            <Item text="Pas obliger de l'installer dans chaque projet : npm install -g nodemon" />
                        </ListItem>
                        <ListItem title="Nodemon">
                            <Item text="Commentons le code d'index.js" />
                            <Item text="A la place, var str='test'; et console.log" />
                            <Item text="Pour l'utiliser dans le projet : script dans package.json" />
                            <Item text="start, nodemon index.js" />
                            <Item text="Pour lancer l'appli, plus de node, on tape npm run + nom du script" />
                            <Item text="start cas particulier, on peut le lancer avec npm start" />
                            <Item text="si on modifie index.js, magique ! Il recharge le fichier tout seul !" />
                        </ListItem>
                        <ListItem>
                            <Item text="On se fait un 'tit serveur vite fait" />
                            <Item text="Tout pareil, à chaque modif, recharge le fichier" />
                            <Item text="Plus besoin de couper/relancer, on gagne un temps monstre !!" />
                        </ListItem>
                        <ListItem>
                            <Item text="On peut se faire un script pour le dev, un pour la prod" />
                            <Item text="npm run dev pour nodemon" />
                            <Item text="npm start pour la prod" />
                            <Item text="A chaque nom de script, on associe une commande" />
                        </ListItem>
                        <ListItem title="Quelques packages utiles">
                            <Item text="cli-color : permet coloration dans la console" />
                            <Item text="Peut-être sympa pour s'y retrouver dans les logs" />
                            <Item text="Jetez un coup d'oeil à la doc si ça vous plait" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Alors, c'est cool npm ou bien ?" />
                            <BoxItem text="Vous voyez tout ce à quoi ça nous donne accès ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Npm utilitaire vital dans l'univers de node" />
                            <BoxItem text="Installation des paquets, lancement de l'appli selon nos critères via scripts" />
                            <BoxItem text="Nodemon : le must have, gain de temps infini" />
                        </Recap>
                        <Sondage question="NPM veut dire ..." reponses={["Ne Pas Maltraiter", "Node Package Manager", "Nouilles Porc Mandarine"]} />
                        <Sondage question="NPM sert à ..." reponses={["Installer des paquets tiers", "Créer un package.json", "Créer le dossier node_modules", "Tout ça en fait ..."]} />
                        <ListItem title="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S3E03;