import React, {Fragment} from "react";

import {Card} from "../../../../common";

import "../../../style.scss"

const S2E01 = props => {
    return (
        <Fragment>
            <div className="Title">Programmer</div>
            <div className="Inner">
                <Card title="Intro saison">
                    <div className="Doc">Slides : http://localhost:1234/s2/e1/intro</div>
                    <ul className="List">
                        <li className="ListItem">
                            <div className="Slide">Une petite intro</div>
                            <div className="Item">- Je me présente : Nico, 42 ans développeur depuis ... longtemps</div>
                            <div className="Item">- J'ai commencé par Java, dev web depuis une dizaine d'années</div>
                            <div className="Item">- J'ai pu suivre les gandes évolutions du dev web, particulièrement JS</div>
                            <div className="Item">- Aujourd'hui, JS est devenu incontournable, écosystème immense, communauté très active</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">C'est quoi JS</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Javascript ou JS ou ES ou EcmaScript</div>
                            <div className="Item">- Rien à voir avec Java: créateurs ont profité de sa popularité à l'époque</div>
                            <div className="Item">- Nom marketing, il en a plein d'autres</div>
                            <div className="Item">- Existe depuis 1995, développé par Netscape</div>
                            <div className="Item">- TRES nombreuses améliorations/modifications au fil des ans</div>
                            <div className="Item">- Depuis NodeJS (1ère sortie : 2009), langage est parmi les plus populaires chez les devs</div>
                            <div className="Item">- C'est pour ça qu'on est tous là !</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">JS, un langage</div>
                            <div className="Item">- Langage de programmation qui comporte 2 aspects</div>
                            <div className="SubItem">* Côté client (front) : code exécuté par le navigateur, pas par le serveur</div>
                            <div className="Question">Vous faites bien la différence client / serveur ?</div>
                            <div className="SubItem">* Côté server (back) : code exécuté EN DEHORS du navigateur, grande nouveauté de Node</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Pour faire quoi ?</div>
                        </li>
                        <li className="Click">Click bottom x 2</li>
                        <li className="ListItem">
                            <div className="Slide">Front</div>
                            <div className="Item">- Vu en saison 1, navigateur affiche HTML (fond) rendu magnifique par CSS (forme)</div>
                            <div className="Item">- Affichage dit statique, une fois affiché, non modifiable</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Rôle de JS : interactivité</div>
                            <div className="Item">- JS va nous servir à dynamiser les pages</div>
                            <div className="Item">- Comme une recette de gâteau</div>
                            <div className="SubItem">* HTML/CSS : ingrédients</div>
                            <div className="SubItem">* Navigateur : four</div>
                            <div className="Item">- Une fois cuit, on peut voir le gâteau (page affichée) mais on ne peut pas le couper (non modifiable)</div>
                            <div className="Item">- JS : le couteau qui va rendre le gâteau/page mangeable</div>
                            <div className="Item">- Couche suplémentaire ajoutée à la page web pour la rendre dynamique, modifiable</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Back</div>
                            <div className="Item">- Faut en garder pour la suite, on en reparlera (longuement même)</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Concrètement à quoi ça sert ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Navigation des slides</div>
                            <div className="Item">- click souris ou flèches clavier modifient l'affichage, pas d'appel serveur</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Récupérer la webcam</div>
                            <div className="Item">- JS peut contrôler certains périphériques</div>
                            <div className="Item">- Pas tous ! Problème de sécurité !!</div>
                            <div className="Item">- Pirate NE DOIT PAS pouvoir effacer disque dur sur simple connexion</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Envoyer message de chat</div>
                            <div className="Item">- JS récupère le texte tapé et l'insère dans la conversation</div>
                            <div className="Item">- Trop fort ce JS !!</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Pour résumer</div>
                            <div className="Item">- Tout le cockpit est orchestré par JS</div>
                            <div className="Item">- Sans JS, notre voyage serait moins agréable</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Non mais sérieux</div>
                            <div className="Item">- J'étais très sérieux déjà !</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Plus concrètement</div>
                        </li>
                        <li className="Click">Click bottom x 2</li>
                        <li className="ListItem">
                            <div className="Slide">Action sans recharger la page</div>
                            <div className="Item">- Supprimer un produit du panier</div>
                            <div className="Item">- Afficher des messages d'aide</div>
                        </li>
                        <li className="Click">Click bottom x 2</li>
                        <li className="ListItem">
                            <div className="Slide">Animer les éléments</div>
                            <div className="Item">- Carroussel d'images</div>
                            <div className="Item">- Afficher / masquer des éléments</div>
                        </li>
                        <li className="Click">Click bottom x 2</li>
                        <li className="ListItem">
                            <div className="Slide">Valider un formulaire</div>
                            <div className="Item">- Afficher un message d'erreur / de succès</div>
                            <div className="Item">- Vérifier les informations avant enregistrement</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Notre objectif pendant cette saison ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Apprendre en jouant</div>
                            <div className="Item">- On va fabriquer nos propres jeux</div>
                            <div className="Item">- Super fiers de jouer à un truc qu'on aura écrit</div>
                            <div className="Item">- un peu moins beau Final Fantasy ou Call of Duty ...</div>
                            <div className="Item">- ... mais déjà super pour un début !</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Ce qu'on va découvrir</div>
                            <div className="Item">- On a notre but, comment procéder ?</div>
                            <div className="Item">- Avant d'attaquer, parlons un peu prog</div>
                            <div className="Item">- Ensuite étape un peu pas drôle mais INDISPENSABLE :</div>
                            <div className="Item">- Dégrossir les bases du langage</div>
                            <div className="SubItem">* Comment créer des variables</div>
                            <div className="SubItem">* Quels sont les types de variables qu'on va utiliser</div>
                            <div className="SubItem">* Comment créer des structures de contrôle : conditions, boucles</div>
                            <div className="SubItem">* Comment créer des fonctions</div>
                            <div className="Item">- Si pas clair, pas de panique, c'est normal, c'est pour ça qu'on est là</div>
                            <div className="Item">- Découverte au fur et à mesure</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Juste une petite couche de plus, on va aussi apprendre à ...</div>
                            <div className="Item">- Manipuler le DOM</div>
                            <div className="Question">Vous voyez ce que c'est le DOM ?</div>
                            <div className="SubItem">* Dans le gâteau/page, c'est le moule pour éviter pâte étalée au fond du four</div>
                            <div className="SubItem">* Plus concrètement, objet du navigateur contenant HTML et CSS pour les traiter et les afficher</div>
                            <div className="Item">- Réagir au comportement de l'utilisateur</div>
                            <div className="SubItem">* Capter ses actions au clavier ou à la souris</div>
                            <div className="SubItem">* Exécuter une action en fonction de son comportement</div>
                            <div className="Item">- Utiliser le temps</div>
                            <div className="SubItem">* Exécuter une action au bout de X secondes</div>
                            <div className="SubItem">* Exécuter une action toutes les X secondes (horloge)</div>
                        </li>
                        <li className="Control">
                            <div className="Item">J'ai perdu personne ? Tout le monde est là ?</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">Maintenant, on sait un peu plus ce qu'on va faire pendant cette saison</div>
                            <div className="Item">On a un but : faire des jeux en JS !</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Mais avant de ré-écrire World of Warcraft, faut commencer par le début</div>
                            <div className="Item">C'est quoi la programmation ? Qu'est-ce que ça mange le matin ?</div>
                        </li>
                    </ul>
                </Card>
                <Card title="Programmation">
                    <div className="Doc">RPG : http://localhost:1235/RPG/</div>
                    <ul className="List">
                        <li className="ListItem">
                            <div className="Slide">Qu'est-ce que c'est la programmation ?</div>
                            <div className="Question">Y en parmi vous qui ont déjà écrit du code ?</div>
                            <div className="Question">Dans quel langage ? Pour faire quoi ?</div>
                            <div className="Item">- Indiquer à l'ordi grâce à du code comment :</div>
                            <div className="SubItem">* Résoudre un problème</div>
                            <div className="SubItem">* Effectuer une action</div>
                            <div className="Item">- Pour écrire ce code, on utilise un langage de programmation</div>
                            <div className="Item">- Bien différencier les langages de description ...</div>
                            <div className="SubItem">* HTML pour décrire le fond, écrit avec des balises</div>
                            <div className="SubItem">* CSS pour décrire la forme, écrit avec des propriétés</div>
                            <div className="Item">- ... et les langages de programmation, utilisé pour détailler les étapes :</div>
                            <div className="SubItem">* pour résoudre un problème</div>
                            <div className="SubItem">* pour effectuer une action</div>
                            <div className="Question">Vous connaissez sûrement des noms de langage de prog ?</div>
                            <div className="Item">- Peut-être entendu parler de Java, C++, Python</div>
                            <div className="Item">- Pendant cette saison, on va utiliser JS</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Algorithmique</div>
                            <div className="Item">- Ces langages permettent d'implémenter des algorithmes : j'explique !</div>
                            <div className="Item">- Algorithme : cheminement de pensée pour résoudre un problème</div>
                            <div className="Item">- Dans notre cas, le problème : emmener le player sur la case arrivée</div>
                            <div className="Question">Comment vous feriez, vous ?</div>
                            <div className="Question">Ce serait quoi les étapes ?</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Bravo, vous venez de réfléchir à votre 1er algorithme !</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Implémentation</div>
                            <div className="Item">- Etape suivante : traduire notre cheminement de pensée dans un langage de prog</div>
                            <div className="Item">- RPG : les devs ont utilisé JS pour dire à l'ordi comment :</div>
                            <div className="SubItem">* tourner à gauche ou à droite</div>
                            <div className="SubItem">* avancer</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Méthode</div>
                            <div className="Item">- Découpe du raisonnement en petites portions :</div>
                            <div className="SubItem">* Mises bout à bout, elles permettent de déplacer le player</div>
                            <div className="SubItem">* On peut l'amener au bon endroit, problème résolu</div>
                            <div className="Item">- En prog, très souvent plusieurs solutions possible</div>
                            <div className="SubItem">* Pas forcément une meilleure que les autres</div>
                            <div className="SubItem">* Dépend souvent des préférences ou habitudes du dev</div>
                            <div className="SubItem">* Parfois certaines plus adaptées ou plus élégantes</div>
                            <div className="SubItem">* On se fera une idée au fur et à mesure qu'on deviendra super fort</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">En prog, pour résoudre un problème, on utilise</div>
                            <div className="Item">des algorithmes (cheminements de pensée)</div>
                            <div className="Item">implémentés (traduits) dans un langage de prog</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Voyons comment ça a été fait dans notre jeu</div>
                        </li>
                    </ul>
                </Card>
                <Card title="Ca sert à quoi ?">
                    <div className="Doc">RPG : http://localhost:1235/RPG/</div>
                    <ul className="List">
                        <li className="ListItem">
                            <div className="Slide">Actions possibles</div>
                            <div className="Item">- Voyons quelles fonctionnalités les devs ont mis à notre dispo</div>
                            <div className="Item">- On va se servir de la console</div>
                            <div className="Question">Est-ce que savez où elle est ?</div>
                            <div className="Item">- Vous connaissez l'inspecteur ? Onglet d'à côté</div>
                            <div className="Control">
                                <div className="Item">Tout le monde a sa console affichée ?</div>
                                <div className="Item">Sondage console affichée : oui/non</div>
                            </div>
                            <div className="Item">- La console sert à :</div>
                            <div className="SubItem">* Afficher des traces de l'exécution, messages d'erreur, de contrôle, ...</div>
                            <div className="SubItem">* Exécuter du code</div>
                            <div className="Item">- Les devs ont mis à dispo plusieurs actions :</div>
                            <div className="SubItem">* moveForward()</div>
                            
                            <li className="Demo">
                                <div className="Item">Démo console</div>
                            </li>
                            <div className="SubItem">* turnLeft()</div>
                            <li className="Demo">
                                <div className="Item">Démo console</div>
                            </li>
                            <div className="SubItem">* turnRight()</div>
                            <li className="Demo">
                                <div className="Item">Démo console</div>
                            </li>
                            <div className="Item">- Aussi des fonctionnalités plus exotiques :</div>
                            <div className="SubItem">* surprise()</div>
                            <li className="Demo">
                                <div className="Item">Démo console</div>
                            </li>
                            <div className="SubItem">* makeBeautiful()</div>
                            <li className="Demo">
                                <div className="Item">Démo console</div>
                            </li>
                            <div className="Item">- Ca sert pas à grand-chose mais c'est rigolo</div>
                            <div className="Item">- Avantage : ça nous montre d'autres trucs qu'on peut contrôler avec JS</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">Console est un outil puissant</div>
                            <div className="Item">Permet de suivre le fonctionnement d'un programme</div>
                            <div className="Item">Peux exécuter du code</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Vous avez l'eau à la bouche ?</div>
                            <div className="Item">Temps de passer à du concret</div>
                        </li>
                    </ul>
                </Card>
                <Card title="Bases du langage">
                    <div className="Doc">Slides : http://localhost:1234/s2/e1/decouverte-js</div>
                    <div className="Doc">Repo : http://localhost:1235/Syntaxe</div>
                    <ul className="List">
                        <li className="ListItem">
                            <div className="Slide">Bases du JS</div>
                            <div className="Item">Pas le plus drôle mais vraiment nécessaire</div>
                            <div className="Item">Concepts très généraux, utiles dans tous les langages</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Syntaxe</div>
                            <div className="Item">En français, grammaire et orthographe</div>
                            <div className="Item">En JS (même en prog), syntaxe, règles d'écriture</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Commentaires</div>
                            <div className="Item">- Ecrire du texte dans la source sans influencer l'exécution</div>
                            <div className="Item">- Nous accompagne dans tous nos devs</div>
                            <div className="Item">- Documenter, expliquer le code, pour mémoire ou pour d'autres devs</div>
                            <div className="Item">- Desactiver du code sans le supprimer</div>
                            <div className="Item">- On peut mettre un roman, ignoré l'exécution</div>
                            <div className="Item">- Deux façons de les écrire :</div>
                            <div className="SubItem">* Sur une ligne ou en fin de ligne : //</div>
                            <div className="SubItem">* Sur plusieurs lignes : /* */</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo dans repo Syntaxe</div>
                            <div className="Item">Création index.html</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Où mettre le code ?</div>
                            <div className="Item">- Dans une balise script</div>
                            <div className="Item">- Comme CSS, plusieurs endroits possible :</div>
                            <div className="SubItem">* directement dans le HTML, en fin de body</div>
                            <div className="SubItem">* dans un fichier externe, script avec src</div>
                            <div className="Item">- Nous, on va mettre dans un fichier externe</div>
                            <div className="Question">Vous voyez pourquoi c'est mieux ?</div>
                            <div className="Question">Avantage du fichier externe ?</div>
                            <div className="Item">- Séparation logique / présentations</div>
                            <div className="Item">- Code plus lisible</div>
                            <div className="Item">- Code réutilisable par d'autres pages HTML</div>
                            <div className="Item">- Nous les développeurs, on n'aime pas se répéter, on préfère les fichiers externes</div>
                            <div className="Item">- Bonne pratique : regroupement par répertoire</div>
                            <div className="Item">- Intérêt pas encore évident, plus parlant dans gros projets avec des dizaines de fichiers</div>
                            <div className="Item">- Prenons tout de suite l'habitude</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Démo commentaires</div>
                            <div className="Item">- Essayez de coder avec moi</div>
                            <div className="Item">- On est entre nous, commentaires en français</div>
                            <div className="Item">- Pour les applis en prod, mieux en anglais</div>
                            <div className="Item">- On a décrit ce qu'on voulait faire, on peut coder</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo dans repo Syntaxe</div>
                            <div className="Item">Création js/syntaxe.js</div>
                            <div className="Item">Exemple de commentaires</div>
                            <div className="Item">Creation repo</div>
                            <div className="Item">First commit and push</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Variables</div>
                            <div className="Item">- En prog, on entendra tout le temps parler de variables</div>
                            <div className="Item">- C'est quoi une variable, à quoi ça sert ?</div>
                        </li>
                        <li className="Click">Click bottom x 2</li>
                        <li className="ListItem">
                            <div className="Slide">C'est quoi</div>
                            <div className="Item">- Une sorte de boite avec une étiquette, un nom, et qui contient des infos</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Ca sert à quoi</div>
                            <div className="Item">- C'est une référence pour les infos stockées</div>
                            <div className="Item">- Dans notre programme, on utilise les noms de variables pour accéder aux infos</div>
                            <div className="Item">- A l'exécution, le navigateur va remplacer le nom de variable par les infos qu'elle contient</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Déclaration</div>
                            <div className="Item">- On utilise le mot-clé var</div>
                            <div className="Item">- Suivi du nom de la boite, son etiquette</div>
                            <div className="Item">- On lui assigne une valeur avec = suivi de la valeur</div>
                            <div className="Item">- Sans assignation, la valeur est undefined</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">console.log</div>
                            <div className="Item">firstName, firstName =</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Modification</div>
                            <div className="Item">- Une variable peut varier</div>
                            <div className="Item">- Pour la modifier, on assigne une nouvelle valeur avec =</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">firstName = nouvelle valeur</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Instructions</div>
                            <div className="Item">- En JS, pas des phrases, des instructions</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Description</div>
                            <div className="Item">- S'écrit sur une ligne</div>
                            <div className="Item">- Se termine par un ;</div>
                            <div className="Item">- Pas obligatoire en JS mais bonne pratique</div>
                            <div className="Item">- Si j'oublie, vous avez droit de me fâcher</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Ne pas faire</div>
                            <div className="Item">- Assigner sans déclarer</div>
                            <div className="Item">- JS est permissif, pas d'erreur</div>
                            <div className="Item">- Effets de bord, effets inattendus, à proscrire !!</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">Déclarer une variable avec var, lui assigner une valeur avec =</div>
                            <div className="Item">Sans assignation, la variable a pour valeur undefined</div>
                            <div className="Item">Modifier la valeur d'une variable en lui assignat une nouvelle valeur avec =</div>
                            <div className="Item">Pour parler JS avec l'ordi, on écrit des instructions sur une ligne terminées par ;</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Parlons un peu des différents types de variables disponibles</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Types de données</div>
                            <div className="Item">- Une variable est toujours d'un certain type</div>
                            <div className="Item">- Types de base, types primitifs</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Les nombres</div>
                            <div className="Item">- On les note tel quel, juste les chiffres</div>
                            <div className="Item">- Nombre à virgule, on met un .</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">entier</div>
                            <div className="Item">décimal</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Les booléens</div>
                            <div className="Item">- Type le plus simple</div>
                            <div className="Item">- Ne peut prendre que 2 valeurs : frai ou faux</div>
                            <div className="Item">- En anglais, comme en JS : true ou false</div>
                            <div className="Item">- Convention : on les appelle isXXX</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">isNice</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Les chaines de caractères (string)</div>
                            <div className="Item">- On les note entre '' ou ""</div>
                            <div className="Item">- On peut les ajouter, les concaténer avec +</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">"Nico"+" "+"Charpin"</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Opérateur +</div>
                            <div className="Item">- Utilisé pour une autre opération</div>
                            <div className="Question">Vous voyez laquelle ?</div>
                        </li>
                        <li className="Click">Click bottom x 2</li>
                        <li className="ListItem">
                            <div className="Slide">Addition</div>
                            <div className="Item">- sur 2 strings, concaténation</div>
                            <div className="Item">- sur 2 nombres, addition</div>
                            <div className="Item">- sur 1 nombre et 1 string, concaténation</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">"2"+"5"</div>
                            <div className="Item">2+5</div>
                            <div className="Item">"2"+5</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Ca va ? Pas trop mal au crâne encore ?</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">On a vu les 3 types primitifs de variables</div>
                            <div className="Item">Les nombres ou numbers, les float utilise le .</div>
                            <div className="Item">Les booléen, de valeur true ou false</div>
                            <div className="Item">Les chaines de caractères, du texte noté entre '' ou ""</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Maintenant qu'on sait déclarer des variables, on va commencer à les utiliser</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Opérations sur les nombres</div>
                            <div className="Item">- Faisons un peu de maths</div>
                            <div className="Item">- Marche avec les entiers et les floats</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Addition / soustraction</div>
                            <div className="Item">- opérateur + comme on vient de voir</div>
                            <div className="Item">- opérateur - pour la soustraction</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">5 + 18</div>
                            <div className="Item">25.3 + 24.7</div>
                            <div className="Item">12 - 5</div>
                            <div className="Item">17.3 - 4.8</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Multiplication / division</div>
                            <div className="Item">- opérateur *</div>
                            <div className="Item">- opérateur /</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">25 * 4</div>
                            <div className="Item">12.5 * 4</div>
                            <div className="Item">100 / 5</div>
                            <div className="Item">25.5 / 2</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Pratique</div>
                            <div className="Item">- Temps de se chauffer les doigts</div>
                            <div className="Item">- Plus pénible est passé, on va commencer à jouer</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Outils</div>
                            <div className="Item">- Petit point sur les outils nécessaires</div>
                        </li>
                        <li className="Click">Click bottom x 2</li>
                        <li className="ListItem">
                            <div className="Slide">Navigateur</div>
                            <div className="Item">- Dans un 1er temps, suffisant pour jouer</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Console</div>
                            <div className="Item">- JS nous met à dispo la console</div>
                        </li>
                        <div className="Doc">Ressource : https://developer.mozilla.org/fr/docs/Web/API/Console</div>
                        <li className="Click">Click bottom x 2</li>
                        <li className="ListItem">
                            <div className="Slide">Affichage</div>
                            <div className="Item">- console a de nombreuses méthodes, fonctionnalités rattachées à un objet</div>
                            <div className="Item">- avec console.log, on affiche ce qu'on veut</div>
                            <div className="Item">- même des variables</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">console.log("Hello, Nico vous parle")</div>
                            <div className="Item">console.log( 7+5)</div>
                            <div className="Item">var book = "Dune"</div>
                            <div className="Item">console.log(book)</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Plusieurs arguments</div>
                            <div className="Item">- Entre les paranthèses, on peut mettre plusieurs éléments de plusieurs type séparés par une virgule</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo console</div>
                            <div className="Item">console.log("test", true, 12345, book)</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Utilisation de console ok ?</div>
                            <div className="Item">Sondage console ok : oui/non</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">Console outil très pratique pour tester rapidement</div>
                            <div className="Item">Juste besoin du navigateur</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Continuons nos tests</div>
                            <div className="Item">On retourne dans notre repo syntaxe</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">Objet livre : title, author, year, price, isRead</div>
                            <div className="Item">console.log title de author</div>
                            <div className="Item">exo : Ajout - Date de parution : year - Prix : price - Déjà lu : isRead</div>
                        </li>
                        <li className="Control">
                            <div className="Item">C'est bon pour vous la concaténation ?</div>
                            <div className="Item">Sondage concaténation ok : oui/non</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">Commit / push</div>
                            <div className="Item">Addition ensemble</div>
                            <div className="Item">Soustraction, multiplication division en autonomie</div>
                        </li>
                        <li className="Control">
                            <div className="Item">C'est ok les opérations ?</div>
                            <div className="Item">Sondage opérations ok : oui/non</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">Commit / push</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">Où mettre notre code js : appel dans body, src dans fichier externe dans un répertoire</div>
                            <div className="Item">Déclaration de nos premières variables</div>
                            <div className="Item">Concaténer des variables</div>
                            <div className="Item">Opérations simples sur les nombres</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Y a pas que console dans la vie</div>
                            <div className="Item">Voyons d'autres méthodes pour afficher des messages</div>
                            <div className="Item">ou demander des infos à l'utilisateur</div>
                        </li>
                    </ul>
                </Card>
                <Card title="Premiers pas">
                    <div className="Doc">Repo : http://localhost:1235/Syntaxe</div>
                    <ul className="List">
                        <li className="ListItem">
                            <div className="Slide">Alert</div>
                            <div className="Item">- On peut afficher un message autrement</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">alert("Mon chouette message !")</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Pas idéal</div>
                            <div className="Item">- Chargement coincé tant qu'on a pas cliqué ok</div>
                            <div className="Item">- Fonction dite bloquante</div>
                            <div className="Item">- Pas top pour expérience utilisateur mais on peut avoir des raisons</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Prompt</div>
                            <div className="Item">- Permet de demander des infos à l'utilisateur</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">Commenter alert</div>
                            <div className="Item">var firstName = prompt("Quel est votre prenom ?")</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Utilisation</div>
                            <div className="Item">- On déclare une variable pour stocker la saisie utilisateur</div>
                            <div className="Item">- On l'assigne (donne une valeur) avec le résultat du prompt</div>
                        </li>
                        <li className="Control">
                            <div className="Item">C'est clair l'utilisation de prompt ?</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">Commit / push</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Exo</div>
                            <div className="Item">- On a le prénom, demandons le nom</div>
                            <div className="Question">A vous de jouer, comment vous feriez ça ?</div>
                            <div className="Item">- Faisons la même chose avec l'âge</div>
                            <div className="Question">Je vous écoute, qu'est-ce qu'on écrit ?</div>
                            <div className="Item">- On a ces infos dans des variables, affichons-les</div>
                            <div className="Item">- console.log ou alert, comme vous préférez</div>
                            <div className="Question">Dites-moi tout, comment on fait ça ?</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">On a déjà dégrossi pas mal de choses</div>
                            <div className="Item">On a commencé à jouer avec des variables</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Déjà chouette mais on va souvent vouloir faire des traitements différents selon la réponse reçue</div>
                            <div className="Item">JS y a pensé pour nous, dans notre code on va pouvoir mettre des conditions</div>
                        </li>
                    </ul>
                </Card>
                <Card title="Un peu de logique">
                    <div className="Doc">Slides : http://localhost:1234/s2/e1/conditions</div>
                    <ul className="List">
                        <li className="ListItem">
                            <div className="Slide">Conditions</div>
                            <div className="Item">- Comment ça marche ?</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Principe</div>
                            <div className="Item">- Mécanisme qui va renvoyer un boolean</div>
                            <div className="Item">- Rappel : un boolean ne peut être que true ou false</div>
                            <div className="Item">- Mécanisme renvoie true => certain traitement</div>
                            <div className="Item">- Mécanisme renvoie false => aucun traitement ou autre traiement</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Mise en place</div>
                            <div className="Item">- On part d'une hypothèse</div>
                            <div className="Item">- SI hypothèse est vraie ALORS on fait un truc</div>
                            <div className="Item">- SI fausse ALORS on fait rien ou un autre truc</div>
                            <div className="Item">- Comme les théorèmes de maths au collège</div>
                            <div className="Item">- Exemple slide</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Conditionner le traitement</div>
                            <div className="Item">- Définition des critères</div>
                            <div className="Item">- SI critère vérifié (est vrai, renvoie true) ALORS traitement</div>
                            <div className="Item">- Exemple slide</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Avec des SI</div>
                            <div className="Item">- Exemple plus concret</div>
                            <div className="Question">Vous avez identifié le critère à évaluer ?</div>
                            <div className="Question">Le traitement si c'est vrai ?</div>
                            <div className="Question">Si c'est faux ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Reformuler le problème</div>
                            <div className="Item">- Identification du problème : remplace si par est-ce que</div>
                            <div className="Item">- Réponse oui, c'est vrai, réponse non, c'est faux</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Vous voyez comment ça s'articule ?</div>
                            <div className="Item">Cette histoire de oui/non true/false, ça s'éclaircit ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Plus complexe</div>
                            <div className="Item">- On peut enchaîner les conditions avec SINON</div>
                            <div className="Item">- Exemple slide</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Et la prog ?</div>
                            <div className="Item">- Avec SI, SINON et ALORS on décrit un cheminement de pensée</div>
                            <div className="Item">- C'est déjà un algorithme</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Item">- On n'a plus qu'à le traduire en JS</div>
                            <div className="Question">On va faire ... ?</div>
                            <div className="Item">- L'implémentation</div>
                        </li>
                        <li className="Click">Click bottom x 2</li>
                        <li className="ListItem">
                            <div className="Slide">Exemple concret</div>
                            <div className="Question">Reformulez le critère avec âge</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">On reformule</div>
                            <div className="Item">- On met le critère entre parenthèses</div>
                            <div className="Item">- On se prépare psychologiquement à la suite</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                        <div className="Slide">Apercu JS</div>
                            <div className="Item">- Qu'est-ce que ça donne en JS ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">En JS</div>
                            <div className="Item">- Plusieurs choses importantes à noter</div>
                            <div className="SubItem">* SI devient if</div>
                            <div className="SubItem">* Le critère est entre parenthèse</div>
                            <div className="SubItem">* Le traitement, l'ensemble des instructions est mis entre accolades</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">SINON</div>
                            <div className="Item">- On reprend l'exemple du quiz</div>
                            <div className="Item">- On a déjà notre algo</div>
                            <div className="Question">Vous pouvez le reformuler avec le mot score ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Pseudo-code</div>
                            <div className="Item">- Avant la condition, le message est vide</div>
                            <div className="Item">- Si score > 2, le message devient "Bien joué !"</div>
                            <div className="Item">- Sinon, le message devient "On révise encore un coup"</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Implémentation</div>
                            <div className="Item">- SINON dans l'algorithme devient else en JS</div>
                            <div className="Item">- Si question pourquoi message déclaré d'abord :</div>
                            <div className="SubItem">* chaque variable a une portée, un scope, une zone de définition</div>
                            <div className="SubItem">* une var déclarée entre les accolades n'existera que là</div>
                            <div className="SubItem">* On ne pourra pas l'utiliser ailleurs, elle sera undefined</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">SINON SI</div>
                            <div className="Item">- Dans notre exemple, on ajoute un critère et un message avec SINON SI</div>
                            <div className="Question">Question vache : vous avez une idée de l'implémentation en JS ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Implémentation</div>
                            <div className="Item">- SINON SI devient else if</div>
                            <div className="Item">- Remarquez comment on teste si 2 valeurs sont égales</div>
                            <div className="Item">- Pas une faute de frappe, il faut bien 3 =</div>
                            <div className="Item">- On en reparle tout de suite</div>
                        </li>
                        <li className="Recap">
                            <div className="Item">Conditions permettent d'effectuer un traitement différent selon critère true ou false</div>
                            <div className="Item">En algo, de la forme SI critère ALORS traitement</div>
                            <div className="Item">On peut le complexifier avec SINON et SINON SI</div>
                            <div className="Item">En JS, if (...) &lcub;...&lcub; else if () &lcub;...&lcub; else &lcub;...&lcub;</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="ListItem">
                            <div className="Slide">Comparaisons</div>
                            <div className="Item">- On va définir nos critère en utilisant des comparaisons</div>
                            <div className="Item">- JS met à dispo plusieurs opérateurs</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Opérateurs de comparaison</div>
                            <div className="Item">- Parcours slide</div>
                            <div className="Item">- Vous retiendrez vite ces opérateurs</div>
                            <div className="Item">- Pas nombreux et on s'en sert tout le temps</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Bizarrerie du ===</div>
                            <div className="Item">- Egalité stricte</div>
                            <div className="Item">- Autre opérateur pour égalité pas stricte, ==</div>
                            <div className="Item">- Pour la culture, on s'en servira pas</div>
                            <div className="Item">- Différence : </div>
                            <div className="SubItem">=== compare la valeur ET le type de variable</div>
                            <div className="SubItem">== compare JUSTE la valeur</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Quiz opérateurs</div>
                            <div className="Item">25 &gt; 15 : vrai ou faux ?</div>
                            <div className="Item">12 &lt;= 12 : vrai ou faux ?</div>
                            <div className="Item">"5" === 5 : vrai ou faux ?</div>
                        </li>
                        <li className="Click">Click bottom</li>
                        <li className="ListItem">
                            <div className="Slide">Combinaison</div>
                            <div className="Item">- On va pouvoir combiner plusieurs critères dans la même série de ()</div>
                            <div className="Item">- un critère ET un autre critère : &amp;&amp;</div>
                            <div className="SubItem">* Tous les critères doivent être vrais pour avoir true</div>
                            <div className="Item">- un critère OU un autre critère : ||</div>
                            <div className="SubItem">* Au moins un des critères doit être vrai pour avoir true</div>
                        </li>
                        <li className="Control">
                            <div className="Item">Quiz combinaisons</div>
                            <div className="Item">12 &lt; 30 &amp;&amp; 15 &gt; 10 : true ou false ?</div>
                            <div className="Item">12 &gt; 30 &amp;&amp; 15 &gt; 10 : true ou false ?</div>
                            <div className="Item">"5" === "5" || 12 > 30 : true ou false ?</div>
                        </li>
                        <li className="Click">Click right</li>
                        <li className="Recap">
                            <div className="Item">Comparaisons avec différents opérateurs</div>
                            <div className="Item">Comparer l'égalité de façon stricte avec ===</div>
                            <div className="Item">Combiner des critères avec &amp;&amp; et ||</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Pour terminer, on refait un peu de pratique</div>
                            <div className="Item">Nouvelle méthode pour récupérer une info utilisateur : confirm</div>
                            <div className="Item">Marche comme prompt mais au lieu d'une string, retourne un boolean quand click ok</div>
                            <div className="Item">Pratique pour les conditions :-)</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">Exo : Demander à l'utilisateur s'il veut jouer avec confirm</div>
                            <div className="Item">Réponse true ou false</div>
                            <div className="Item">Si true, afficher "Bienvenue !"</div>
                            <div className="Item">Si false, afficher "Une prochaine fois alors ..."</div>
                        </li>
                        <li className="Transition">
                            <div className="Item">Le challenge de ce soir va vous refaire pratiquer tout ça</div>
                            <div className="Item">Je vous le met en ligne et je vous le présente</div>
                        </li>
                        <li className="Demo">
                            <div className="Item">Démo repo</div>
                            <div className="Item">Manip partage challenge du jour</div>
                        </li>
                        <li className="ListItem">
                            <div className="Slide">Présentation challenge</div>
                        </li>
                    </ul>
                </Card>
            </div>
        </Fragment>
);
}

export default S2E01;