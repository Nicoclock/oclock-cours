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
                            <div className="Item">C'est quoi la programmation ? qu'est-ce que ça mange le matin ?</div>
                        </li>
                    </ul>
                </Card>
            </div>
        </Fragment>
);
}

export default S2E01;