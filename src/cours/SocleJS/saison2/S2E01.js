import React, {Fragment} from "react";

import {Card, Doc, Code, Click, List, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce, Git, Snippet, ExoSondage} from "../../../common";
import {day1 as snippets} from "./Code/snippets";

import "../../style.scss"

const S2E01 = () => {
    let snippet = 0;

    return (
        <Fragment>
            <div className="Title">Programmer</div>
            <div className="Inner">
                <Card title="Intro saison" duration="0:30:00">
                    <Doc type="Slides" url="http://localhost:1234/s2/e1/intro" />
                    <List>
                        <ListItem title="Une petite intro">
                            <Item text="Je me présente : Nico, 42 ans développeur depuis ... longtemps" />
                            <Item text="J'ai commencé par Java, dev web depuis une dizaine d'années" />
                            <Item text="J'ai pu suivre les gandes évolutions du dev web, particulièrement JS" />
                            <Item text="Aujourd'hui, JS est devenu incontournable, écosystème immense, communauté très active" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="C'est quoi JS" />
                        <Click dir="bottom" />
                        <ListItem title="Javascript ou JS ou ES ou EcmaScript">
                            <Item text="Rien à voir avec Java: créateurs ont profité de sa popularité à l'époque" />
                            <Item text="Nom marketing, il en a plein d'autres" />
                            <Item text="Existe depuis 1995, développé par Netscape" />
                            <Item text="TRES nombreuses améliorations/modifications au fil des ans" />
                            <Item text="Depuis NodeJS (1ère sortie : 2009), langage est parmi les plus populaires chez les devs" />
                            <Item text="C'est pour ça qu'on est tous là !" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="JS, un langage">
                            <Item text="Langage de programmation qui comporte 2 aspects" />
                            <SubItem text="Côté client (front) : code exécuté par le navigateur, pas par le serveur" />
                            <Question text="Vous faites bien la différence client / serveur ?" />
                            <SubItem text="Côté server (back) : code exécuté EN DEHORS du navigateur, grande nouveauté de Node" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Pour faire quoi ?">
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Front">
                            <Item text="Vu en saison 1, navigateur affiche HTML (fond) rendu magnifique par CSS (forme)" />
                            <Item text="Affichage dit statique, une fois affiché, non modifiable" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Rôle de JS : interactivité">
                            <Item text="JS va nous servir à dynamiser les pages" />
                            <Item text="Comme une recette de gâteau" />
                            <SubItem text="HTML/CSS : ingrédients" />
                            <SubItem text="Navigateur : four" />
                            <Item text="Une fois cuit, on peut voir le gâteau (page affichée) mais on ne peut pas le couper (non modifiable)" />
                            <Item text="JS : le couteau qui va rendre le gâteau/page mangeable" />
                            <Item text="Couche suplémentaire ajoutée à la page web pour la rendre dynamique, modifiable" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Back">
                            <Item text="Faut en garder pour la suite, on en reparlera (longuement même)" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Concrètement à quoi ça sert ?">
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Navigation des slides">
                            <Item text="click souris ou flèches clavier modifient l'affichage, pas d'appel serveur" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Récupérer la webcam">
                            <Item text="JS peut contrôler certains périphériques" />
                            <Item text="Pas tous ! Problème de sécurité !!" />
                            <Item text="Pirate NE DOIT PAS pouvoir effacer disque dur sur simple connexion" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Envoyer message de chat">
                            <Item text="JS récupère le texte tapé et l'insère dans la conversation" />
                            <Item text="Trop fort ce JS !!" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Pour résumer">
                            <Item text="Tout le cockpit est orchestré par JS" />
                            <Item text="Sans JS, notre voyage serait moins agréable" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Non mais sérieux">
                            <Item text="J'étais très sérieux déjà !" />
                            <Item text="Plus concrètement" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Action sans recharger la page">
                            <Item text="Supprimer un produit du panier" />
                            <Item text="Afficher des messages d'aide" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Animer les éléments">
                            <Item text="Carroussel d'images" />
                            <Item text="Afficher / masquer des éléments" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Valider un formulaire">
                            <Item text="Afficher un message d'erreur / de succès" />
                            <Item text="Vérifier les informations avant enregistrement" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Notre objectif pendant cette saison ?">
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Apprendre en jouant">
                            <Item text="On va fabriquer nos propres jeux" />
                            <Item text="Super fiers de jouer à un truc qu'on aura écrit" />
                            <Item text="un peu moins beau Final Fantasy ou Call of Duty ..." />
                            <Item text="... mais déjà super pour un début !" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Ce qu'on va découvrir">
                            <Item text="On a notre but, comment procéder ?" />
                            <Item text="Avant d'attaquer, parlons un peu prog" />
                            <Item text="Ensuite étape un peu pas drôle mais INDISPENSABLE :" />
                            <Item text="Dégrossir les bases du langage" />
                            <SubItem text="Comment créer des variables" />
                            <SubItem text="Quels sont les types de variables qu'on va utiliser" />
                            <SubItem text="Comment créer des structures de contrôle : conditions, boucles" />
                            <SubItem text="Comment créer des fonctions" />
                            <Item text="Si pas clair, pas de panique, c'est normal, c'est pour ça qu'on est là" />
                            <Item text="Découverte au fur et à mesure" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Juste une petite couche de plus, on va aussi apprendre à ...">
                            <Item text="Manipuler le DOM" />
                            <Question text="Vous voyez ce que c'est le DOM ?" />
                            <SubItem text="Dans le gâteau/page, c'est le moule pour éviter pâte étalée au fond du four" />
                            <SubItem text="Plus concrètement, objet du navigateur contenant HTML et CSS pour les traiter et les afficher" />
                            <Item text="Réagir au comportement de l'utilisateur" />
                            <SubItem text="Capter ses actions au clavier ou à la souris" />
                            <SubItem text="Exécuter une action en fonction de son comportement" />
                            <Item text="Utiliser le temps" />
                            <SubItem text="Exécuter une action au bout de X secondes" />
                            <SubItem text="Exécuter une action toutes les X secondes (horloge)" />
                        </ListItem>
                        <Control>
                            <BoxItem text="J'ai perdu personne ? Tout le monde est là ?" />
                        </Control>
                        <Click dir="right" />
                        <Recap>
                            <BoxItem text="Maintenant, on sait un peu plus ce qu'on va faire pendant cette saison" />
                            <BoxItem text="On a un but : faire des jeux en JS !" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Mais avant de ré-écrire World of Warcraft, faut commencer par le début" />
                            <BoxItem text="C'est quoi la programmation ? Qu'est-ce que ça mange le matin ?" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Programmation" duration="0:30:00">
                    <Doc type="RPG" url="http://localhost:1235/E01/Ressources/RPG/" />
                    <List>
                        <ListItem title="Qu'est-ce que c'est la programmation ?">
                            <Question text="Y en parmi vous qui ont déjà écrit du code ?" />
                            <Sondage question="Qui a déjà écrit du code ?" reponses={["Oui j'en ai écrit", "J'en ai déjà lu", "Non, ça me file des boutons"]} />
                            <Question text="Dans quel langage ? Pour faire quoi ?" />
                            <Item text="Prog a 2 aspects :" />
                            <SubItem text="Stockage d'informations, on verra les différentes façons de faire" />
                            <SubItem text="Utiliser les informations stockées" />
                            <Item text="Pour ça, avec du code, on indique à l'ordi comment :" />
                            <SubItem text="Résoudre un problème" />
                            <SubItem text="Effectuer une action" />
                            <Item text="Pour écrire ce code, on utilise un langage de programmation" />
                            <Item text="Bien différencier les langages de description ..." />
                            <SubItem text="HTML pour décrire le fond, écrit avec des balises" />
                            <SubItem text="CSS pour décrire la forme, écrit avec des propriétés" />
                            <Item text="... et les langages de programmation, utilisé pour stocker et détailler les étapes :" />
                            <SubItem text="pour résoudre un problème" />
                            <SubItem text="pour effectuer une action" />
                            <Question text="Vous connaissez sûrement des noms de langage de prog ?" />
                            <Item text="Peut-être entendu parler de Java, C++, Python" />
                            <Item text="Pendant cette saison, on va utiliser JS" />
                        </ListItem>
                        <ListItem title="Algorithmique">
                            <Item text="Ces langages permettent d'implémenter des algorithmes : j'explique !" />
                            <Item text="Algorithme : cheminement de pensée pour résoudre un problème" />
                            <Item text="Dans notre cas, le problème : emmener le player sur la case arrivée" />
                            <Question text="Comment vous feriez, vous ?" />
                            <Question text="Ce serait quoi les étapes ?" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Bravo, vous venez de réfléchir à votre 1er algorithme !" />
                        </Recap>
                        <ListItem title="Implémentation">
                            <Item text="Etape suivante : traduire notre cheminement de pensée dans un langage de prog" />
                            <Item text="RPG : les devs ont utilisé JS pour dire à l'ordi comment :" />
                            <SubItem text="tourner à gauche ou à droite" />
                            <SubItem text="avancer" />
                        </ListItem>
                        <Demo type="console" />
                        <ListItem title="Méthode">
                            <Item text="Découpe du raisonnement en petites portions :" />
                            <SubItem text="Mises bout à bout, elles permettent de déplacer le player" />
                            <SubItem text="On peut l'amener au bon endroit, problème résolu" />
                            <Item text="En prog, très souvent plusieurs solutions possible" />
                            <SubItem text="Pas forcément une meilleure que les autres" />
                            <SubItem text="Dépend souvent des préférences ou habitudes du dev" />
                            <SubItem text="Parfois certaines plus adaptées ou plus élégantes" />
                            <SubItem text="On se fera une idée au fur et à mesure qu'on deviendra super fort" />
                        </ListItem>
                        <Recap>
                        <BoxItem text="En prog, pour résoudre un problème, on utilise" />
                            <BoxItem text="des algorithmes (cheminements de pensée)" />
                            <BoxItem text="implémentés (traduits) dans un langage de prog" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Voyons comment ça a été fait dans notre jeu" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Ca sert à quoi ?" duration="0:30:00">
                    <Doc type="RPG" url="http://localhost:1235/E01/Ressources/RPG/" />
                    <List>
                        <ListItem title="Actions possibles">
                            <Item text="Voyons quelles fonctionnalités les devs ont mis à notre dispo" />
                            <Item text="On va se servir de la console" />
                            <Question text="Est-ce que savez où elle est ?" />
                            <Item text="Vous connaissez l'inspecteur ? Onglet d'à côté" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Tout le monde a sa console affichée ?" />
                            <Sondage question="Votre console est affichée ?" reponses={["yep", "nope"]} />
                        </Control>
                        <ListItem>
                            <Item text="La console sert à :" />
                            <SubItem text="Afficher des traces de l'exécution, messages d'erreur, de contrôle, ..." />
                            <SubItem text="Exécuter du code" />
                            <Item text="Les devs ont mis à dispo plusieurs actions :" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Aussi des fonctionnalités plus exotiques :" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ca sert pas à grand-chose mais c'est rigolo" />
                            <Item text="Avantage : ça nous montre d'autres trucs qu'on peut contrôler avec JS" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Console est un outil puissant" />
                            <BoxItem text="Permet de suivre le fonctionnement d'un programme" />
                            <BoxItem text="Peux exécuter du code" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Vous avez l'eau à la bouche ?" />
                            <BoxItem text="Temps de passer à du concret" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Bases du langage" duration="1:15:00">
                    <Doc type="Slides" url="http://localhost:1234/s2/e1/decouverte-js" />
                    <Doc type="Repo" url="http://localhost:1235/E01/Syntaxe" />
                    <List>
                        <ListItem title="Bases du JS">
                            <Item text="Pas le plus drôle mais vraiment nécessaire" />
                            <Item text="Concepts très généraux, utiles dans tous les langages" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Syntaxe">
                            <Item text="En français, grammaire et orthographe" />
                            <Item text="En JS (même en prog), syntaxe, règles d'écriture" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Commentaires">
                            <Item text="Ecrire du texte dans la source sans influencer l'exécution" />
                            <Item text="Nous accompagne dans tous nos devs" />
                            <Item text="Documenter, expliquer le code, pour mémoire ou pour d'autres devs" />
                            <Item text="Desactiver du code sans le supprimer" />
                            <Item text="On peut mettre un roman, ignoré l'exécution" />
                            <Item text="Deux façons de les écrire :" />
                            <SubItem text="Sur une ligne ou en fin de ligne : //" />
                            <SubItem text="Sur plusieurs lignes : /* */" />
                        </ListItem>
                        <ListItem title="Où mettre le code ?">
                            <Item text="Création index.html" />
                            <Item text="Dans une balise script" />
                            <Item text="Comme CSS, plusieurs endroits possible :" />
                            <SubItem text="directement dans le HTML, en fin de body" />
                            <SubItem text="dans un fichier externe, script avec src" />
                            <Item text="Nous, on va mettre dans un fichier externe" />
                            <Question text="Vous voyez pourquoi c'est mieux ?" />
                            <Question text="Avantage du fichier externe ?" />
                            <Item text="Séparation logique / présentation" />
                            <Item text="Code plus lisible" />
                            <Item text="Code réutilisable par d'autres pages HTML" />
                            <Item text="Nous les développeurs, on n'aime pas se répéter, on préfère les fichiers externes" />
                            <Item text="Bonne pratique : regroupement par répertoire" />
                            <Item text="Intérêt pas encore évident, plus parlant dans gros projets avec des dizaines de fichiers" />
                            <Item text="Prenons tout de suite l'habitude" />
                        </ListItem>
                        <ListItem title="Démo commentaires">
                            <Item text="Essayez de coder avec moi" />
                            <Item text="On est entre nous, commentaires en français" />
                            <Item text="Pour les applis en prod, mieux en anglais" />
                            <Item text="On a décrit ce qu'on voulait faire, on peut coder" />
                        </ListItem>
                        <Demo type="repo Syntaxe">
                            <BoxItem text="Création js/syntaxe.js" />
                            <BoxItem text="Exemple de commentaires" />
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Git commit="Commentaires" />
                        <Click dir="bottom" />
                        <ListItem title="Variables">
                            <Item text="En prog, on entendra tout le temps parler de variables" />
                            <Item text="C'est quoi une variable, à quoi ça sert ?" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="C'est quoi">
                            <Item text="Une sorte de boite avec une étiquette, un nom, et qui contient des infos" />
                        </ListItem>
                        <ListItem title="Ca sert à quoi">
                            <Item text="C'est une référence pour les infos stockées" />
                            <Item text="Dans notre programme, on utilise les noms de variables pour accéder aux infos" />
                            <Item text="A l'exécution, le navigateur va remplacer le nom de variable par les infos qu'elle contient" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Déclaration">
                            <Item text="On utilise le mot-clé var" />
                            <Item text="Suivi du nom de la boite, son etiquette" />
                            <Item text="Pas de caractères spéciaux(accents), ne peut commencer par un chiffre" />
                            <Item text="Bonne pratique : camelCase" />
                            <Item text="On lui assigne une valeur avec = suivi de la valeur" />
                            <Item text="Sans assignation, la valeur est undefined" />
                        </ListItem>
                        <Demo type="console">
                            <BoxItem text="console.log" />
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Modification">
                            <Item text="Une variable peut varier" />
                            <Item text="Pour la modifier, on assigne une nouvelle valeur avec =" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Instructions">
                            <Item text="En JS, pas des phrases, des instructions" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Description">
                            <Item text="S'écrit sur une ligne" />
                            <Item text="Se termine par un ;" />
                            <Item text="Pas obligatoire en JS mais bonne pratique" />
                            <Item text="Si j'oublie, vous avez droit de me fâcher" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Ne pas faire">
                            <Item text="Assigner sans déclarer" />
                            <Item text="JS est permissif, pas d'erreur" />
                            <Item text="Effets de bord, effets inattendus, à proscrire !!" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Déclarer une variable avec var, lui assigner une valeur avec =" />
                            <BoxItem text="Sans assignation, la variable a pour valeur undefined" />
                            <BoxItem text="Modifier la valeur d'une variable en lui assignant une nouvelle valeur avec =" />
                            <BoxItem text="Pour parler JS avec l'ordi, on écrit des instructions sur une ligne terminées par ;" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Parlons un peu des différents types de variables disponibles" />
                        </Transition>
                        <Click dir="right" />
                        <ListItem title="Types de données">
                            <Item text="Une variable est toujours d'un certain type" />
                            <Item text="Types de base, types primitifs" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Les nombres">
                            <Item text="On les note tel quel, juste les chiffres" />
                            <Item text="Nombre à virgule, on met un ." />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Les booléens">
                            <Item text="Type le plus simple" />
                            <Item text="Ne peut prendre que 2 valeurs : frai ou faux" />
                            <Item text="En anglais, comme en JS : true ou false" />
                            <Item text="Convention : on les appelle isXXX ou hasXXX" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Les chaines de caractères (string)">
                            <Item text={`On les note entre '' ou ""`} />
                            <Item text="On peut les ajouter, les concaténer avec +" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Opérateur +">
                            <Item text="Utilisé pour une autre opération" />
                            <Question text="Vous voyez laquelle ?" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Addition">
                            <Item text="sur 2 strings, concaténation" />
                            <Item text="sur 2 nombres, addition" />
                            <Item text="sur 1 nombre et 1 string, concaténation" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ca va ? Pas trop mal au crâne encore ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="On a vu les 3 types primitifs de variables" />
                            <BoxItem text="Les nombres ou numbers, les float utilise le ." />
                            <BoxItem text="Les booléen, de valeur true ou false" />
                            <BoxItem text={`Les chaines de caractères, du texte noté entre '' ou ""`} />
                        </Recap>
                        <Transition>
                            <BoxItem text="Maintenant qu'on sait déclarer des variables, on va commencer à les utiliser" />
                        </Transition>
                        <Click dir="right" />
                        <ListItem title="Opérations sur les nombres">
                            <Item text="Faisons un peu de maths" />
                            <Item text="Marche avec les entiers et les floats" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Addition / soustraction">
                            <Item text="opérateur + comme on vient de voir" />
                            <Item text="opérateur - pour la soustraction" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Multiplication / division">
                            <Item text="opérateur *" />
                            <Item text="opérateur /" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Click dir="right" />
                        <ListItem title="Pratique">
                            <Item text="Temps de se chauffer les doigts" />
                            <Item text="Plus pénible est passé, on va commencer à jouer" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Outils">
                            <Item text="Petit point sur les outils nécessaires" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Navigateur">
                            <Item text="Dans un 1er temps, suffisant pour jouer" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Console">
                            <Item text="JS nous met à dispo la console" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/API/Console" />
                        <Click dir="bottom x 2" />
                        <ListItem title="Affichage">
                            <Item text="console a de nombreuses méthodes, fonctionnalités rattachées à un objet" />
                            <Item text="avec console.log, on affiche ce qu'on veut" />
                            <Item text="même des variables" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <ListItem title="Plusieurs arguments">
                            <Item text="Entre les paranthèses, on peut mettre plusieurs éléments de plusieurs type séparés par une virgule" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Control>
                            <Sondage question="Fonctionnement de la console, c'est ok ?" reponses={["yep", "à pratiquer", "nope"]} />
                        </Control>
                        <Recap>
                            <BoxItem text="Console outil très pratique pour tester rapidement" />
                            <BoxItem text="Juste besoin du navigateur" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Continuons nos tests" />
                            <BoxItem text="On retourne dans notre repo syntaxe" />
                        </Transition>
                        <Demo type="repo Syntaxe">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Complétez la variable phase pour obtenir une string de la forme :" />
                            <Enonce text="titre de auteur - Année de sortie : XXXX - Prix : xxxx - Déjà lu : xxx" />
                        </Exo>
                        <Demo type="repo Syntaxe">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Control>
                            <Sondage question="C'est bon la concaténation ?" reponses={["yep", "à pratiquer", "nope"]} />
                        </Control>
                        <Git commit="Types primitifs et concaténation" />
                        <Demo type="repo Syntaxe">
                            <BoxItem text="Addition ensemble" />
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Créez les variables soustraction, multiplication et division" />
                            <Enonce text="Elles doivent avoir pour valeur les opérations qu'elles décrivent" />
                            <Enonce text="Pour chacune, faire un console.log afin de vérifier le résultat" />
                        </Exo>
                        <Demo type="repo Syntaxe">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Control>
                            <Sondage question="C'est ok les opérations ?" reponses={["yep", "à pratiquer", "nope"]} />
                        </Control>
                        <Git commit="Opérations arithmétiques" />
                        <Recap>
                            <BoxItem text="Où mettre notre code js : appel dans body, src dans fichier externe dans un répertoire" />
                            <BoxItem text="Déclaration de nos premières variables" />
                            <BoxItem text="Concaténer des variables" />
                            <BoxItem text="Opérations simples sur les nombres" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Y a pas que console dans la vie" />
                            <BoxItem text="Voyons d'autres méthodes pour afficher des messages" />
                            <BoxItem text="ou demander des infos à l'utilisateur" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Premiers pas" duration="0:30:00">
                    <Doc type="Repo" url="http://localhost:1235/E01/Syntaxe" />
                    <List>
                        <ListItem title="Alert">
                            <Item text="On peut afficher un message autrement" />
                        </ListItem>
                        <Demo type="repo Syntaxe">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <ListItem title="Pas idéal">
                            <Item text="Chargement coincé tant qu'on a pas cliqué ok" />
                            <Item text="Fonction dite bloquante" />
                            <Item text="Pas top pour expérience utilisateur mais on peut avoir des raisons" />
                        </ListItem>
                        <ListItem title="Prompt">
                            <Item text="Permet de demander des infos à l'utilisateur" />
                        </ListItem>
                        <Demo type="repo Syntaxe">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <ListItem title="Utilisation">
                            <Item text="On déclare une variable pour stocker la saisie utilisateur" />
                            <Item text="On l'assigne (donne une valeur) avec le résultat du prompt" />
                        </ListItem>
                        <Control>
                            <BoxItem text="C'est clair l'utilisation de prompt ?" />
                        </Control>
                        <ListItem title="Exo">
                            <Item text="On a le prénom, demandons le nom" />
                            <Question text="A vous de jouer, comment vous feriez ça ?" />
                            <Item text="Faisons la même chose avec l'âge" />
                            <Question text="Je vous écoute, qu'est-ce qu'on écrit ?" />
                            <Item text="On a ces infos dans des variables, affichons-les" />
                            <Item text="console.log ou alert, comme vous préférez" />
                            <Question text="Dites-moi tout, comment on fait ça ?" />
                        </ListItem>
                        <Demo type="repo Syntaxe">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Git commit="Alert et prompt" />
                        <Recap>
                            <BoxItem text="On a déjà dégrossi pas mal de choses" />
                            <BoxItem text="On a commencé à jouer avec des variables" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Déjà chouette mais on va souvent vouloir faire des traitements différents selon la réponse reçue" />
                            <BoxItem text="JS y a pensé pour nous, dans notre code on va pouvoir mettre des conditions" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Un peu de logique" duration="1:30:00">
                    <Doc type="Slides" url="http://localhost:1234/s2/e1/conditions" />
                    <List>
                        <ListItem title="Conditions">
                            <Item text="Comment ça marche ?" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Principe">
                            <Item text="Mécanisme qui va renvoyer un boolean" />
                            <Item text="Rappel : un boolean ne peut être que true ou false" />
                            <Item text="Mécanisme renvoie true => certain traitement" />
                            <Item text="Mécanisme renvoie false => aucun traitement ou autre traitement" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Mise en place">
                            <Item text="On part d'une hypothèse" />
                            <Item text="SI hypothèse est vraie ALORS on fait un truc" />
                            <Item text="SI fausse ALORS on fait rien ou un autre truc" />
                            <Item text="Comme les théorèmes de maths au collège" />
                            <Item text="Exemple slide" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Conditionner le traitement">
                            <Item text="Définition des critères" />
                            <Item text="SI critère vérifié (est vrai, renvoie true) ALORS traitement" />
                            <Item text="Exemple slide" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Avec des SI">
                            <Item text="Exemple plus concret" />
                            <Question text="Vous avez identifié le critère à évaluer ?" />
                            <Question text="Le traitement si c'est vrai ?" />
                            <Question text="Si c'est faux ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Reformuler le problème">
                            <Item text="Identification du problème : remplace si par est-ce que" />
                            <Item text="Réponse oui, c'est vrai, réponse non, c'est faux" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Vous voyez comment ça s'articule ?" />
                            <BoxItem text="Cette histoire de oui/non true/false, ça s'éclaircit ?" />
                        </Control>
                        <Click dir="bottom" />
                        <ListItem title="Plus complexe">
                            <Item text="On peut enchaîner les conditions avec SINON" />
                            <Item text="Exemple slide" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Et la prog ?">
                            <Item text="Avec SI, SINON et ALORS on décrit un cheminement de pensée" />
                            <Item text="C'est déjà un algorithme" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Implémentation">
                            <Item text="On n'a plus qu'à le traduire en JS" />
                            <Question text="On va faire ... ?" />
                            <Item text="L'implémentation" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Exemple concret">
                            <Question text="Reformulez le critère avec âge" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="On reformule">
                            <Item text="On met le critère entre parenthèses" />
                            <Item text="On se prépare psychologiquement à la suite" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Apercu JS">
                            <Item text="Qu'est-ce que ça donne en JS ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="En JS">
                            <Item text="Plusieurs choses importantes à noter" />
                            <SubItem text="SI devient if" />
                            <SubItem text="Le critère est entre parenthèse" />
                            <SubItem text="Le traitement, l'ensemble des instructions est mis entre accolades" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="SINON">
                            <Item text="On reprend l'exemple du quiz" />
                            <Item text="On a déjà notre algo" />
                            <Question text="Vous pouvez le reformuler avec le mot score ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Pseudo-code">
                            <Item text="Avant la condition, le message est vide" />
                            <Item text={`Si score > 2, le message devient "Bien joué !"`} />
                            <Item text={`Sinon, le message devient "On révise encore un coup"`} />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Implémentation">
                            <Item text="SINON dans l'algorithme devient else en JS" />
                            <Item text="Si question pourquoi message déclaré d'abord :" />
                            <SubItem text="chaque variable a une portée, un scope, une zone de définition" />
                            <SubItem text="une var déclarée entre les accolades n'existera que là" />
                            <SubItem text="On ne pourra pas l'utiliser ailleurs, elle sera undefined" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="SINON SI">
                            <Item text="Dans notre exemple, on ajoute un critère et un message avec SINON SI" />
                            <Question text="Question vache : vous avez une idée de l'implémentation en JS ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Implémentation">
                            <Item text="SINON SI devient else if" />
                            <Item text="Remarquez comment on teste si 2 valeurs sont égales" />
                            <Item text="Pas une faute de frappe, il faut bien 3 =" />
                            <Item text="On en reparle tout de suite" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Conditions permettent d'effectuer un traitement différent selon critère true ou false" />
                            <BoxItem text="En algo, de la forme SI critère ALORS traitement" />
                            <BoxItem text="On peut le complexifier avec SINON et SINON SI" />
                            <BoxItem text={`En JS, if (...) {...} else if () {...} else {...}`} />
                        </Recap>
                        <Click dir="right" />
                        <ListItem title="Comparaisons">
                            <Item text="On va définir nos critère en utilisant des comparaisons" />
                            <Item text="JS met à dispo plusieurs opérateurs" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Opérateurs de comparaison">
                            <Item text="Parcours slide" />
                            <Item text="Vous retiendrez vite ces opérateurs" />
                            <Item text="Pas nombreux et on s'en sert tout le temps" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Bizarrerie du ===">
                            <Item text="Egalité stricte" />
                            <Item text="Autre opérateur pour égalité pas stricte, ==" />
                            <Item text="Pour la culture, on s'en servira pas" />
                            <Item text="Différence : " />
                            <SubItem text="=== compare la valeur ET le type de variable" />
                            <SubItem text="== compare JUSTE la valeur" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Quiz opérateurs" />
                            <Sondage question={`25 > 15 ?`} reponses={["true", "false"]} />
                            <Sondage question={`12 <= 12 ?`} reponses={["true", "false"]} />
                            <Sondage question={`"5" === 5 ?`} reponses={["true", "false"]} />
                        </Control>
                        <Click dir="bottom" />
                        <ListItem title="Combinaison">
                            <Item text="On va pouvoir combiner plusieurs critères dans la même série de ()" />
                            <BoxItem text={`- un critère ET un autre critère : &&`} />
                            <SubItem text="Tous les critères doivent être vrais pour avoir true" />
                            <Item text="un critère OU un autre critère : ||" />
                            <SubItem text="Au moins un des critères doit être vrai pour avoir true" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Quiz combinaisons" />
                            <Sondage question={`12 < 30 && 15 > 10 ?`} reponses={["true", "false"]} />
                            <Sondage question={`12 > 30 && 15 > 10 ?`} reponses={["true", "false"]} />
                            <Sondage question={`"5" === "5" || 12 > 30 ?`} reponses={["true", "false"]} />
                        </Control>
                        <Click dir="right" />
                        <Recap>
                            <BoxItem text="Comparaisons avec différents opérateurs" />
                            <BoxItem text="Comparer l'égalité de façon stricte avec ===" />
                            <BoxItem text={`Combiner des critères avec && et ||`} />
                        </Recap>
                        <Transition>
                            <BoxItem text="Pour terminer, on refait un peu de pratique" />
                            <BoxItem text="Nouvelle méthode pour récupérer une info utilisateur : confirm" />
                            <BoxItem text="Marche comme prompt mais au lieu d'une string, retourne un boolean quand click ok" />
                            <BoxItem text="Pratique pour les conditions :-)" />
                        </Transition>
                        <Exo>
                            <Enonce text="Demander à l'utilisateur 'Voulez-vous jouer avec moi ?' en utilisant confirm" />
                            <Enonce text="SI il répond oui ALORS on affiche 'Bienvenue !'" />
                            <Enonce text="SINON on affiche 'Une prochaine fois alors ...'" />
                        </Exo>
                        <Demo type="repo Syntaxe">
                            <Code step={snippets.syntaxe[snippet++]} />
                        </Demo>
                        <Git commit="Confirm" />
                        <Transition>
                            <BoxItem text="Le challenge de ce soir va vous refaire pratiquer tout ça" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Exos">
                    <List>
                        <Recap>
                            <BoxItem text="Concepts de prog, algorithme et implémentation" />
                            <BoxItem text="Variables : déclaratin, assignation, modification" />
                            <BoxItem text="Types : number, boolean, string" />
                            <BoxItem text="Console : outil indispensable" />
                            <BoxItem text="alert, prompt, confirm" />
                            <BoxItem text="Conditions SI ... ALORS" />
                            <BoxItem text="Combinaisons" />
                        </Recap>
                        <Sondage question="Quelle est la bonne façon de définir une variable ?"
                            reponses={[`firstName = "Nico"`, "var firstName = 'Nico';", "firstName: Nico", "C'est quoi une variable ?"]} />
                        <Sondage question="Une variable string, boolean ou number est dite ... ?" 
                            reponses={["primordiale", "primitive", "primaire"]} />
                        <Sondage question="Un algorithme est ... ?" reponses={["juste un vilain mot", "une maladie contagieuse", "un cheminement de pensée"]} />
                        <Sondage question="Pour traduire du pseudo-code en JS, on fait ... ?" reponses={["l'implémentation", "une prière à l'ordi", "F5"]} />
                        <Sondage question="Pour conditionner le traitement, le critère est de type ... ?" 
                            reponses={["number", "string", "boolean"]} />
                        <Sondage question="Un critère de condition s'écrit ... ?" reponses={["entre parenthèses", "entre accolades", "comme ça"]} />
                        <Sondage question="Pour combiner des conditions, on utilise ... ?" reponses={["< ou >", "&& ou ||", "=== ou !=="]} />
                        <Exo>
                            <Enonce text="On a la déclaration suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Quel est le type de test ?" reponses={["number", "string", "boolean"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a la déclaration suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Quel est le type de test ?" reponses={["number", "string", "boolean"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a la déclaration suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="D'après le nom de la variable, pouvez-vous déduire son type ?" reponses={["number", "string", "boolean"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a la déclaration suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Quel est le type de test ?" reponses={["number", "string", "boolean"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a la déclaration suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Quel est le type de test ?" reponses={["number", "string", "boolean"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a l'expression suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Cette expression vaut ... ?" reponses={["true", "false"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a l'expression suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Cette expression vaut ... ?" reponses={["true", "false"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a l'expression suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Cette expression vaut ... ?" reponses={["true", "false"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a l'expression suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Cette expression vaut ... ?" reponses={["true", "false"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a l'expression suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Cette expression vaut ... ?" reponses={["true", "false"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a l'expression suivante :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <ExoSondage question="Cette expression vaut ... ?" reponses={["true", "false"]} />
                        </Exo>
                        <Exo>
                            <Enonce text="Le code suivant est buggé :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <Enonce text="Quel est le problème ?" />
                        </Exo>
                        <Exo>
                            <Enonce text="Le code suivant est buggé :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <Enonce text="Quel est le problème ?" />
                        </Exo>
                        <Exo>
                            <Enonce text="Le code suivant est buggé :" />
                            <Snippet lines={snippets.syntaxe[snippet++].code} />
                            <Enonce text="Quel est le problème ?" />
                        </Exo>
                        <Exo>
                            <Enonce text="Implémentez l'algorithme suivant :" />
                            <Enonce text="Demander Quel est votre livre préféré ?" />
                            <Enonce text="SI le livre n'est pas Dune" />
                            <Enonce text="ALORS afficher oui bon ... personne n'est parfait" />
                            <Enonce text="SINON afficher aaahhh voilà quelqu'un de bien !" />
                        </Exo>
                        <Exo>
                            <Enonce text="Implémentez l'algorithme suivant :" />
                            <Enonce text="Demander Etes vous inscrit à la médiathèque ?" />
                            <Enonce text="SI oui" />
                            <Enonce text="ALORS demander quel livre voulez-vous emprûnter et afficher le livre" />
                            <Enonce text="SINON" />
                            <Enonce text="Demander Voulez-vous vous inscrire maintenant ?" />
                            <Enonce text="SI oui ALORS afficher Remplissez le formulaire" />
                            <Enonce text="SINON afficher Bah ... pas de bras, pas de bouquin ..." />
                        </Exo>
                        <Exo>
                            <Enonce text="Implémentez l'algorithme suivant :" />
                            <Enonce text="Demander Etes vous fan de Star Wars ?" />
                            <Enonce text="SI oui" />
                            <Enonce text="ALORS Demander Quel est votre perso préféré ?" />
                            <Enonce text="SI le perso est Yoda ALORS afficher May the force be with you !" />
                            <Enonce text="SINON SI le perso est Chewie ALORS afficher Arf, vous aimez les poils ..." />
                            <Enonce text="SINON afficher De toute façon on les aime tous !" />
                            <Enonce text="SINON (pas fan de Star Wars) afficher Vous savez pas ce que vous perdez ..." />
                            
                        </Exo>
                        <Git commit="Exos pratiques" />
                        <ListItem title="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
);
}

export default S2E01;