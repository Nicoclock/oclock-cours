import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce, Snippet} from "../../../common";
import {day5 as snippets} from "./Code/snippets";
import {diceRoller} from "./Code/challenges";

import "../../style.scss"

const S2E05 = () => {
    let challenge = 0;
    let snippet = 0;

    return (
        <Fragment>
            <div className="Title">Events</div>
            <div className="Inner">
                <Card title="Correction" duration="2:00:00">
                    <List>
                        <Recap>
                            <BoxItem text="On est devenu des pros de l'object" />
                            <BoxItem text="Stockage de données et manipulation dans le même paquet de code" />
                            <BoxItem text="Interaction JS avec le DOM" />
                            <BoxItem text="Création, configuration et ajout d'éléments à la page" />
                            <BoxItem text="Modification du style par JS" />
                        </Recap>
                        <Control>
                            <BoxItem text="'tit sondage habituel" />
                            <BoxItem text="Vous l'avez vécu comment celui-là ?" />
                            <Sondage question="J'ai trouvé ça : " reponses={[
                                "trop facile",
                                "m'en suis tiré",
                                "j'ai galéré !",
                                "papu/pasu/pavoulu"
                            ]} />
                        </Control>
                        <Transition>
                            <BoxItem text="Cette histoire de sprites, moi j'ai eu du mal au début" />
                            <BoxItem text="On voit tout ça ensemble" />
                        </Transition>
                        <Doc type="repo Correction" url="http://localhost:1235/E05/Correction/html/" />
                        <ListItem title="Création dé">
                            <Item text="Commençons par créer le dé" />
                            <Item text="On est des pros maintenant, direct une fonction" />
                            <Item text="Création div avec document.createElement" />
                            <Item text="Ajout class avec propriété className" />
                            <Item text="Ajout au DOM dans l'élément d'id player" />
                            <Item text="Appel pour exécuter le code" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Random">
                            <Item text="On devait ensuite créer un random entre 1 et 6" />
                            <Item text="On a fait 1ère version, faut la modifier un peu" />
                            <Item text="On veut un nombre entre 1 et 6, pas 1 et 7" />
                            <Item text="Math.floor pour l'entier le + proche par le bas" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <Doc type="Image" url="http://localhost:1235/E05/sprites.jpg" />
                        <ListItem title="backgroundPosition">
                            <Item text="Random ok, faut l'utiliser pour afficher une face du dé" />
                            <Item text="Pour position sprites, on utilise backgroundPosition" />
                            <Item text="On va décaler l'image de (random-1) * 100px vers la gauche" />
                            <Item text="Attention, l'image, pas la div !" />
                            <Item text="Pour afficher 1, décalage de 0px" />
                            <Item text="Pour 2, décalage de -100px, 3, -200px, etc..." />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Nb dices">
                            <Item text="BG positionné, on est bon" />
                            <Item text="Maintenant on doit afficher plusieurs dés selon nb saisi par user" />
                            <Item text="On utilise prompt pour lui demander" />
                            <Item text="On a besoin d'un number, faut convertir" />
                            <Item text="Tant que c'est pas un number, on redemande" />
                            <Item text="Enfin, boucle for pour créer nb de dés" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Dealer">
                            <Item text="Pour bonus, ajout d'unadversaire" />
                            <Item text="Ajout div dans html" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ajout du param target dans createDice" />
                            <Item text="Modif appel getElementById" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Modif de la boucle for" />
                            <Item text="un dé pour player, un dé pour dealer" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <Control>
                            <Sondage question="C'est clair cette correction ?" reponses={["voui voui", "mouais, c'est mieux", "pas encore top", "tu m'as perdu ..."]} />
                        </Control>
                        <Recap>
                            <BoxItem text="Une seule image, plusieurs visuels, vive les sprites !" />
                            <BoxItem text="Manip de plusieurs propriétés : className, style" />
                            <BoxItem text="Pratique d'ajout dans le DOM" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Moi j'aime pas les prompts !" />
                            <BoxItem text="On pourrait le remplacer par un élément dans la page" />
                            <BoxItem text="On va améliorer ça avec une UI" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Intro events" duration="1:00:00">
                    <List>
                        <ListItem title="Présentation événements">
                            <Item text="Pour chaque action de l'utilisateur, JS crée un événement" />
                            <Item text="Object qui contient plein d'infos :" />
                            <SubItem text="Type d'événement : Mouse, keyboard, ..." />
                            <SubItem text="Propriété target : contient un ref vers l'object HTML" />
                            <Item text="Pour réagir à un événement, on attache un écouter à l'élément" />
                            <Item text="EventListener : 1er arg : type d'événement, 2ème arg : fct à exécuter" />
                            <Item text="Fonction de rappel : callback" />
                            <Item text="Pas exécutée tout de suite, seulement lors de l'événement" />
                        </ListItem>
                        <ListItem title="Exemple">
                            <Item text="On crée quelques éléments HTML" />
                        </ListItem>
                        <Demo type="repo Event">
                            <Code step={snippets.event[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On cible l'input" />
                        </ListItem>
                        <Demo type="repo Event">
                            <Code step={snippets.event[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ajout d'un EventListener" />
                        </ListItem>
                        <Demo type="repo Event">
                            <Code step={snippets.event[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Création du callback" />
                        </ListItem>
                        <Demo type="repo Event">
                            <Code step={snippets.event[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On cible les boutons, boucle pour associer EventListener" />
                        </ListItem>
                        <Demo type="repo Event">
                            <Code step={snippets.event[snippet++]} />
                        </Demo>
                        <Sondage question="Pour gérer un événement, on utilise un ... ?" 
                            reponses={["calendrier", "écouteur d'événement", "object JS"]} />
                        <Sondage question="Une fonction de rappel se dit ... ?" 
                            reponses={["callback", "comeback", "cookback"]} />
                        <Sondage question="Un callback a toujours un paramètre event" 
                            reponses={["oui", "non", "C'est quoi un callback ?"]} />
                        <Sondage question="Ce paramètre event du callback, d'où il sort ?" 
                            reponses={["il faut le créer", "JS le crée pour nous", "de chez sa mère"]} />
                        <Sondage question="L'EventListener a deux paramètres :" 
                            reponses={["le callback et le nom de l'event", "le nom de l'event et le callback", "le premier et le deuxième"]} />
                        <Exo>
                            <Enonce text="On a le code suivant :" />
                            <Snippet lines={snippets.event[snippet++].code} />
                            <Enonce text="Quel est le problème ?" />
                        </Exo>
                        <Exo>
                            <Enonce text="On a le code suivant :" />
                            <Snippet lines={snippets.event[snippet++].code} />
                            <Enonce text="Quel est le problème ?" />
                        </Exo>
                        <Doc type="repo Correction" url="http://localhost:1235/E05/Correction/html/" />
                        <ListItem title="Modif HTML">
                            <Item text="Déjà on commente le prompt" />
                            <Item text="On modifie notre html pour ajouter un bouton" />
                            <Item text="Pour commencer, on va toujours lancer 6 dés" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://unicode.org/emoji/charts/full-emoji-list.html" />
                        <ListItem title="Emoticon (si question)">
                            <Item text={`On va utiliser une entité html : &...;`} />
                            <Item text="Code qui nous intéresse : après U+" />
                            <Item text={`Pour caractère depuis un code hexa : &#x + code + ;`} />
                            <Item text={`Ici pour le wink, j'ai ajouté &#x1F609;`} />
                        </ListItem>
                        <ListItem title="CSS">
                            <Item text="Html, c'est fait mais c'est moche !" />
                            <Item text="Vite vite, un peu de css" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Evénements">
                            <Item text="Là, c'est moins moche !" />
                            <Item text="Par contre, rien au click sur le bouton ..." />
                            <Item text="Dire à JS d'écouter, d'attendre cet événement" />
                            <Item text="On va targeter l'élément et lui ajouter un listener" />
                            <Item text="Mécanisme qui va attendre un type d'événement et lui associer une fonction, un callback" />
                            <Item text="Quand l'événement se produit, le listener le capte et exécute le code du callback" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ca c'est le principe" />
                            <Item text="Cette fonction : on voudra l'empaqueter dans un object" />
                            <Item text="On va la définir, et on passera son nom en argument du listener" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Remarquez bien : pas d'appel !!" />
                            <Item text="C'est un piège courant : passer les instructions au lieu de la fonction" />
                            <Item text="Effet : code exécuté tout de suite" />
                            <Item text="On veut qu'il s'exécute LORS DE l'événement, pas au chargement" />
                            <Item text="Pas d'appel, pas de parenthèses" />
                            <Item text="Définissons déjà la fonction reset" />
                            <Item text="on efface le contenu des div #player et #dealer" />
                            <Item text="on l'appelle dans newGame" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Fonction play : on a déjà le code, boucle for" />
                            <Item text="On n'a plus la variable nbDices : même pas mal, on la met en paramètre" />
                            <Item text="on l'appelle dans newGame" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Dans l'appel a play, passe 6 en argument" />
                            <Item text="On le met en dur pour l'instant, on fera mieux après" />
                            <Item text="Dans la précision, on dit qu'on peut jouer en tapant une touche" />
                            <Item text="Faut prévenir JS : on va metre un listener keyup sur le body" />
                            <Item text="Quand touche de clavier cliquée, on va lancer un nouveau jeu" />
                            <Item text="Pour accéder au body en JS : document.body" />
                            <Question text="On a la cible, on a le nom de l'événement, je tape quoi ?" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Avantage de fonction newGame : pas de code répété" />
                            <Item text="Ca me fatiguait d'avance ..." />
                            <Item text="Pratique non ? La factorisation, c'est la vie !" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Définition d'un écouteur d'événement, listener" />
                            <BoxItem text="Associer à un élément particulier" />
                            <BoxItem text=".addEventListener + nom event + callback" />
                            <BoxItem text="Intérêt de la factorisation : code réutilisable" />
                        </Recap>
                        <Control>
                            <Sondage question="Comment ça va vous ?" reponses={["pas mal et toi ?", "un peu indigeste", "j'ai mal au crâne"]} />
                        </Control>
                        <Transition>
                            <BoxItem text="Bon, y en partout, faut ranger, faut empaqueter" />
                        </Transition>
                        <ListItem title="Refactoring">
                            <Item text="Mettons la logique du jeu dans un object bien propre" />
                            <Item text="On le déclare" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="on prend toutes les fonctions et on les passent en props" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Encore 'tit bout de code qui traine" />
                            <Item text="Intégration dans l'object : init" />
                            <Item text="Appel app.init() en fin de fichier" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <Transition>
                            <BoxItem text="Continuons à jouer avec DOM et events" />
                            <BoxItem text="on va améliorer notre interface" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Dice roller - Améliorations" duration="2:00:00">
                    <List>
                        <ListItem title="Ecran d'accueil">
                            <Item text="Commençons par ajouter un écran d'accueil" />
                            <Item text="Comportera juste un bouton jouer" />
                            <Item text="Jeu sera caché jusqu'au click" />
                            <Item text="D'abord, le HTML, c'est parti" />
                            <Item text="Ajout div#welcome et class hidden a app" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Bon, on a tout cassé" />
                            <Item text="Allons arranger ça avec CSS" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On a notre page d'accueil" />
                            <Item text="Ajoutons un peu de JS pour pouvoir jouer" />
                            <Item text="On fait une méthode start pour gérer switch welcome / app" />
                            <Item text="On ajoute un listener sur click dans init" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Le listener est en place, on peut de nouveau jouer" />
                            <Item text="On va ajouter possibilité de sélectionner nb dés" />
                            <Item text="Remplaçons la div#ui par un 'tit formulaire" />
                            <Item text="C'est parti pour le HTML" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On retourne dans le CSS pour styliser tout ça" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/CSS/calc" />
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ca ressemble à quelque chose maintenant" />
                            <Item text="On retourne dans le JS, d'abord gérons le slider" />
                            <Item text="On lui associe un listener dans init" />
                            <Item text="On se crée une nouvelle fonction pour gérer les modifs" />
                            <SubItem text="Récup valeur du slider" />
                            <SubItem text="Socke la valeur dans object app, on en aura besoin" />
                            <SubItem text="MAJ contenu div#dice-number" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="La gestion du slider est en place" />
                            <Item text="Occupons-nous du formulaire" />
                            <Item text="Ajout d'un listener sur event submit dans init" />
                            <Item text="OK dans init, sera appelé seulement lors du submit" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Mais que ce passe-t-il ? Pourquoi ça marche pas ?" />
                            <Question text="Une idée de ce qui se passe ? Que voyez-vous dans l'URL ?" />
                            <Item text="A l'envoi du form, la page se recharge ! C'est pas ce qu'on veut !!" />
                            <Item text="Pour corriger ça, utilisons argument fourni par JS pour callbacks d'événements" />
                            <Item text="C'est un object, par convention on va l'appeler event" />
                            <Item text="Juste une convention, on peut l'appeler tot si on veut" />
                            <Item text="Bonne pratique, plus calir de l'appeler event" />
                            <Item text="Il est fourni par défaut, on peut l'ajouter en paramètre de la fonction play" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="L'est de mieux en mieux cette appli" />
                            <Item text="C'était bien de lancer le jeu au clavier, on va le refaire" />
                            <Item text="Limité à la touche espace" />
                            <Item text="Nouvelle façon de déclarer un callback : fonction anonyme" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="On a ajouté une page d'accueil" />
                            <BoxItem text="On peut lancer l'appli depuis bouton page accueil ou espace" />
                            <BoxItem text="On peut choisir le nombre de dés" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Qu'est-ce qu'on peut faire maintenant ?" />
                            <BoxItem text="On va compter les points pour savoir qui gagne" />
                        </Transition>
                        <ListItem>
                            <Item text="On va modifier méthode createDice" />
                            <Item text="Elle va retourner le nombre de points sur le dé" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ca suffit pas bien-sûr" />
                            <Item text="Il faut cumuler les points de chaque dés pour avoir un score" />
                            <Item text="On va se faire une méthode qui se charge de ça" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On va modifier méthode play pour prendre en compte cette fonction" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ca fonctionne, on a nb de points, on peut dire qui a gagné !" />
                            <Item text="On va compter les victoires et les défaites" />
                            <Item text="SI scorePlayer > scoreDealer ALORS victoire" />
                            <Item text="SINON SI scorePlayer < scoreDealer ALORS defaite" />
                            <Item text="SINON rien" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ca tourne mais affichage console pas top ..." />
                            <Item text="On va faire une méthode pour créer une div et afficher" />
                            <Item text="Victoires dans la div#player, les défaites dans div#dealer" />
                            <Question text="Qu'est-ce qu'on va lui passer en paramètre ?" />
                            <Item text="On a besoin de l'id du joueur et du nombre à afficher" />
                            <Item text="On remplace les console.log par l'appel qui va bien" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Visiblement, on a besoin de CSS" />
                            <Item text="Définissons la class result" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="C'est chouette mais un peu tristouille ..." />
                            <Item text="On va animer l'affichage, plus dynamique" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Yes, plus sympa comme ça" />
                            <Item text="Maintenant, on va modifier méthode resetBoard" />
                            <Item text="Découvrir une autre méthode pour sélectionner des éléments" />
                            <Item text="querySelectorAll : return tableau avec éléments concernés par sélecteur" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Dans ce cas là, innerHTML et textContent sont interchangeables" />
                            <Item text="Et si on rajoutait un peu de suspense ?" />
                            <Item text="On pourrait utiliser setTimeout pour différer affichage dealer" />
                            <Item text="Genre 3 secondes, trop de suspense tue le suspense" />
                            <Item text="Il faut qu'on affiche le score seulement quand dealer ok" />
                            <Item text="Faisons déjà la méthode et modifions play, on fera le timeout après" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Comportement inchangé, méthode ok" />
                            <Item text="Maintenant, le timeout" />
                            <Question text="A vous, comment appeler dealerPlay au bout de 3 secondes ?" />
                            <Item text="Attention, on a un argment à passer" />
                            <Question text="Vous vous souvenez comment faire ?" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ca marche mais dans le coup problème" />
                            <Item text="Si on reclique sur le bouton jouer avant fin du timeout, nouveau tirage" />
                            <Item text="C'est pas ce qu'on veut, faut gérer ça" />
                            <Question text="Des idées de comment faire ?" />
                            <Item text="on va utiliser un boolean isPlaying à false au début" />
                            <Item text="On le passe à true au click sur le bouton" />
                            <Item text="'tit bout de code pour désactiver code bouton si isPlaying à true" />
                            <Item text="A la fin du timeout, repasse à false pour rejouer" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pas mal pas mal, ça commence à avoir de la gueule" />
                            <Item text="On rajoute un peu de dynamisme ? On anime les dés ?" />
                            <Item text="On va mettre 'tit effet à l'apparition, direction CSS" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Cool, ça claque !" />
                            <Item text="Un dernier truc qu'on peut faire : compteur pour les 3 secondes" />
                            <Item text="On se demande ce qui se passe pendant 3 secondes" />
                            <Item text="Avec compteur de 3 à 0, on saura qu'on attend quelque chose" />
                            <Item text="Pour modifier l'affichage toutes les secondes on va utiliser ?" />
                            <Item text="setInterval, très adapté. On va le stocker pour pouvoir l'arrêter" />
                            <Item text="Déjà créons le compteur avec une méthode qu'on appelle dans play" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="setInterval utilise une méthode qui n'existe pas, créons-la !" />
                            <Item text="On va devoir décrémenter la valeur de counter, mettre à jour l'affichage" />
                            <Item text="Quand compteur à 0, on va appeler une méthode deleteCounter" />
                            <Item text="On va la créer juste après" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="countdown, on est bon, faisons deleteCounter" />
                            <Item text="On va stopper notre interval avec clearInterval" />
                            <Item text="Le compteur ne sert plus, on va le retirer du DOM" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Il nous reste à styliser la div.counter" />
                            <Item text="Direction le CSS" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={diceRoller.etapes[challenge++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Alors ce carrelage, magnifique ou pas magnifique ?" />
                            <BoxItem text="On a creusé un peu plus les événements et les listeners" />
                            <BoxItem text="Argument par défaut des callbacks : event" />
                            <BoxItem text="Sélection de plusieurs balises sous forme de tableau : querySelectorAll" />
                            <BoxItem text="Revu setTimeout et setInterval" />
                        </Recap>
                        <Control>
                            <BoxItem text="A fiouf, c'était intense !!" />
                            <Sondage question="Vous l'avez vécu comment, on a des morts ou pas ?" reponses={[
                                "ça va, imothep !",
                                "je vais revoir ça tranquille",
                                "pas clair, pas clair ...",
                                "je suis PER-DU !!",
                            ]} />
                        </Control>
                        <Transition>
                            <BoxItem text="Bon demain, atelier pair programming" />
                            <BoxItem text="En attendant, pratiquez, échangez, aidez-vous les uns les autres !" />
                        </Transition>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E05;