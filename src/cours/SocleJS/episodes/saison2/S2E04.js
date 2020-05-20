import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem} from "../../../../common";
import * as code from "../../code";

import "../../../style.scss"

const S2E04 = props => {
    return (
        <Fragment>
            <div className="Title">DOM</div>
            <div className="Inner">
                <Card title="Correction">
                    <Doc type="repo ChallengeS2E03" url="http://localhost:1235/E03/ChallengeS2E03/html/" />
                    <List>
                        <Recap>
                            <BoxItem text="Qu'est-ce qu'on a fait hier ?" />
                            <BoxItem text="Fonctions plus en détail" />
                            <BoxItem text="Découverte de l'Object" />
                            <BoxItem text="Stockage et manipulation infos" />
                        </Recap>
                        <Control>
                            <BoxItem text="Le challenge vous a fait pratiquer tout ça" />
                            <BoxItem text="Comment vous vous en êtes tirés ?" />
                            <BoxItem text="Sondage : J'ai trouvé ça : trop facile, m'en suis tiré, j'ai galléré, z'êtes malades !!" />
                        </Control>
                        <Transition>
                            <BoxItem text="On y retourne, comment faire ça ?" />
                        </Transition>
                        <ListItem title="Déclaration object">
                            <Item text="Créer un objet qui contient les infos de configuration" />
                            <Question text="Qu'est-ce que vous avez mis vous ?" />
                            <Item text="On y met :" />
                            <SubItem text="le nombre d'essais à 0" />
                            <SubItem text="le nombre à trouver (undefined, on le rajoutera à chaud)" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.gameObject} />
                        </Demo>
                        <Control>
                            <BoxItem text="Pas de problème particulier ici ?" />
                        </Control>
                        <ListItem title="Fonction play - 1">
                            <Item text="Regrouper instructions du jeu dans fonction play" />
                            <Item text="génération nombre à deviner" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.gamePlay1} />
                        </Demo>
                        <ListItem title="Fonction play - 2">
                            <Item text="Incrémente le nombre d'essai" />
                            <Item text="Demande un nombre à l'utilisateur" />
                            <Item text="On transforme la string en number" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.gamePlay2} />
                        </Demo>
                        <ListItem title="Fonction play - 3">
                            <Item text="On ajoute notre boucle while" />
                            <Item text="Attention aux variables qui appartiennent à game !" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.gamePlay3} />
                        </Demo>
                        <ListItem title="Fonction play - 4">
                            <Item text="On termine par le message de félicitations" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.gamePlay4} />
                        </Demo>
                        <ListItem title="Lancement jeu">
                            <Question text="Qu'est-ce qui manque pour pouvoir jouer ?" />
                            <Item text="On appalle la fonction pour exécuter son code" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.gamePlay} />
                        </Demo>
                        <Control>
                            <BoxItem text="Fonction play, on est pas mal" />
                            <BoxItem text="Comment ça va vous ? Des questions là-dessus ?" />
                        </Control>
                        <Transition>
                            <BoxItem text="On continue notre empaquetage" />
                        </Transition>
                        <ListItem title="Fonction generateRandomNumber - 1">
                            <Item text="Bon moi je suis fatigué ce matin, à vous de jouer" />
                            <Question text="Qu'est ce que j'écris pour mettre la génération du random dans une fonction ?" />
                            <Item text="On déclare la fonction" />
                            <Item text="On copie colle le code qui génère le nombre" />
                            <Item text="On modifie pour prendre en compte params min et max" />
                            <Item text="On retourne le nombre obtenu" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.random1} />
                        </Demo>
                        <ListItem title="Fonction generateRandomNumber - 2">
                            <Item text="Bon on a notre fonction" />
                            <Item text="On va rajouter min et max à notre object game" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.random2} />
                        </Demo>
                        <ListItem title="Fonction generateRandomNumber - 3">
                            <Item text="On va remplacer code dans play par appel fonction" />
                            <Question text="Je vous écoute, dites-moi tout, comment je fais ?" />
                            <Item text="On a min et max dans notre object game" />
                            <Item text="On va les utiliser en arguments de la fonction" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.random3} />
                        </Demo>
                        <ListItem title="Ajout à chaud">
                            <Item text="Pas obligé de déclarer searchNumber à undefined" />
                            <Item text="On peut ajouter des propriétés à chaud, en cours d'exécution" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.random4} />
                        </Demo>
                        <Control>
                            <BoxItem text="Fonction generateRandomNumber, c'est fait !" />
                            <BoxItem text="Vous pigez le principe ? C'est clair pour vous ?" />
                        </Control>
                        <Transition>
                            <BoxItem text="On va ajouter les scores alors !" />
                        </Transition>
                        <ListItem title="Scores - 1">
                            <Item text="On va stocker les scores dans un tableau" />
                            <Question text="Où est-ce qu'on va déclarer ce tableau ?" />
                            <Item text="On a un bel object game, autant l'utiliser" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.gameFull} />
                        </Demo>
                        <ListItem title="Scores - 2">
                            <Item text="Ok, on a le tableau" />
                            <Question text="Maintenant, comment on le remplit ?" />
                            <Item text="Après while, quand le jeu en cours est gagné" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.scoresFill} />
                        </Demo>
                        <ListItem title="Scores - 3">
                            <Item text="Le tableau est rempli, y a plus qu'à l'afficher" />
                            <Item text="Ici pas de feinte, console.log après l'ajout du dernier score" />
                            <Item text="Et on relance le jeu" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.scoresDisplay} />
                        </Demo>
                        <Control>
                            <BoxItem text="Des question sur cette partie ?" />
                        </Control>
                        <Transition>
                            <BoxItem text="Relancer play direct, pas top, on est coincé sur la page" />
                            <BoxItem text="Justement, le bonus améliore ça" />
                        </Transition>
                        <ListItem title="Scores - 4">
                            <Item text="Alors, le bonus ..." />
                            <Question text="Vous vous souvenez de confirm ? Qu'est-ce qu'il retourne ?" />
                            <Item text="Confirm nous renvoie un boolean, on peut l'utiliser directement dans un if" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.gameReplay} />
                        </Demo>
                        <ListItem title="Scores - 5">
                            <Item text="Enfin, on améliore l'affichage des scores, l'est pas top ..." />
                            <Question text="On utilise quoi pour parcourir le tableau ?" />
                            <Item text="POUR chaque entrée : ça sent la boucle for" />
                            <Item text="'tite feinte : on doit afficher partie 1, partie 2" />
                            <Question text="Comment on va identifier le num de la partie ?" />
                            <Item text="L'index commence à 0, on va juste lui ajouter 1" />
                            <Item text="On le ré-assigne pas, on ne veut pas changer sa valeur" />
                            <Item text="On veut juste afficher sa valeur + 1" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.scoresBetter} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Bon on a vu plein de choses encore !" />
                            <BoxItem text="On a empaqueté toutes les variables qui trainaient dans un bel objet" />
                            <BoxItem text="On a mis notre logique de jeu dans une fonction" />
                            <BoxItem text="Ca c'est un chouette refactoring" />
                        </Recap>
                        <Transition>
                            <BoxItem text="On va essayer de pousser un peu plus" />
                            <BoxItem text="Temps d'utiliser toutes les possibilités d'un object" />
                            <BoxItem text="En plus des infos, on va y mettre la logique du jeu" />
                        </Transition>
                    </List>                    
                </Card>
                <Card title="Un vrai Object">
                    <List>
                        <ListItem title="Fonction displayScores">
                            <Item text="Mettons déjà le code d'affichage dans une fonction" />
                            <Item text="On change l'appel" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.displaySores} />
                        </Demo>
                        <Transition>
                            <Item text="Bon rien de très nouveau, rien de très compliqué" />
                            <Item text="Passons à la partie plus sympa !" />
                        </Transition>
                        <ListItem title="Exemple console">
                            <Item text="Dit rapidement déjà, dans un object on peut stocker des infos mais aussi de la logique" />
                            <Item text="Démo rapide pour montrer le principe" />
                            <Item text="Crée un objecft spaceship" />
                        </ListItem>
                        <Demo type="Console">
                            <Code language="JavaScript" code={code.spaceship} />
                        </Demo>
                        <ListItem>
                            <Item text="Console.log de spaceship.lightspeed" />
                            <Item text="On voit le code de la fonction" />
                            <Question text="Si on veut appeler cette fonction, que faire ?" />
                            <Item text="Comme une fonction classique : appel avec () et éventuellement arguments" />
                        </ListItem>
                        <Demo type="Console">
                            <Code language="JavaScript" code={code.lightspeed} />
                        </Demo>
                        <ListItem>
                            <Item text="Code de la fonction exécuté" />
                            <Item text="Avantage : tout le code concernant le spaceship stocké dans un object unique" />
                            <Item text="Voyons comment faire pour object game" />
                        </ListItem>
                        <ListItem title="Refactoring - 1">
                            <Item text="On va ajouter des propriétés à notre object game" />
                            <Item text="Au lieu de leur assigner une string, un number, ... on leur assigne une fonction" />
                            <Item text="Je vous fais voir" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.embedRandom} />
                        </Demo>
                        <Control>
                            <BoxItem text="Vous comprenez le principe ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="La fonction devient une propriété de l'object, comme les autres" />
                            <BoxItem text="Pour la déclarer : nomFonction + : + function() ..." />
                        </Recap>
                        <Transition>
                            <BoxItem text="Fonction fait maintenant partie de l'object" />
                            <BoxItem text="On doit modifier son appel dans la fonction play" />
                        </Transition>
                        <ListItem title="Refactoring - 2">
                            <Item text="Pour l'instant, notre appel c'est  game.searchedNumber = generateRandomNumber..." />
                            <Question text="Je vous écoute, comment je fais pour appeler la fonction de l'objet ? A votre avis ?" />
                            <Item text="On ajoute game. devant, on appelle la propriété de l'objet" />
                            <Item text="Comme pour fonction classique, on l'appelle avec () et arguments" />
                        </ListItem>
                        <Control>
                            <BoxItem text="C'est important là, bien clair pour tout le monde ?" />
                            <BoxItem text="On fait la même chose pour displayScore ?" />
                        </Control>
                        <ListItem title="Refactoring - 3">
                            <Item text="De la même façon, on déclare la fonction dans le corps de l'object" />
                            <Item text="On place le code de la fonction après les :" />
                            <Item text="Modif de l'appel dans play" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.embedDisplay} />
                        </Demo>
                        <ListItem title="Refactoring - 3">
                            <Item text="Empaquetons jusqu'au bout" />
                            <Item text="On intègre la fonction play dans l'object" />
                        </ListItem>
                        <Demo type="repo ChallengeS203">
                            <Code language="JavaScript" code={code.embedPlay} />
                        </Demo>
                        <ListItem title="Refactoring - 4">
                            <Item text="L'object game est empaqueté, les variables et la logique du jeu lui appartiennent" />
                            <Item text="Plus pratique pour intégrer dans portail de jeu" />
                            <Item text="Si plusieurs jeux avec même noms de vras ou fonctions, pas de problème" />
                        </ListItem>
                        <Transition>
                            <BoxItem text="Bonne nouvelle, on a fini de dégrossir le langage" />
                            <BoxItem text="On va pouvoir commencer à jouer pour de vrai !" />
                            <BoxItem text="Je sais pas vous mais moi, raz le bol des messages alert" />
                            <BoxItem text="Après tout, on a page web toute vierge" />
                            <BoxItem text="Et si on écrivait dedans plutôt ?" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Object et DOM">
                    <List>
                        <ListItem title="Objects JS">
                            <Item text="Avant d'attaquer, quelques objects fournis par JS :" />
                            <SubItem text="window" />
                            <SubItem text="navigator" />
                            <SubItem text="document" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/API/Window" />
                        <ListItem title="window">
                            <Item text="Vous l'avez utilisé sans le savoir" />
                            <Item text="alert, prompt, confirm, parseInt" />
                            <Item text="C'est l'object qui représente la fenêtre, l'onglet" />
                            <Item text="TRES nombreuses propriétés et méthode, je vous laisse voir la doc" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/API/Navigator" />
                        <ListItem title="navigator">
                            <Item text="Donne des infos sur le client" />
                            <Item text="Type de navigateur utilisé (userAgent)" />
                            <Item text="Infos de geolocalisation (geolocation, si utilisateur ok)" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/API/Document" />
                        <ListItem title="document">
                            <Item text="En tant que devs, le plus utile" />
                            <Item text="Donne accès au DOM de la page" />
                            <Item text="On va pouvoir commencer à le manipuler !" />
                        </ListItem>
                        <ListItem title="Scores table">
                            <Item text="On va modifier l'affichage des scores" />
                            <Item text="Moins d'alert, plus agréable à jouer" />
                            <Item text="Modif du html : ajout de div#scores" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="HTML" code={code.scoresDiv} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour le modifier depuis JS, il faut cibler l'élément" />
                            <Item text="Besoin d'une référence sur cette balise" />
                            <Item text="Object document permet ça avec méthode getElementById" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="HTML" code={code.displayScoresStart} />
                        </Demo>
                        <ListItem>
                            <Item text="console.log nous donne une string" />
                            <Item text="console.dir donne un object" />
                            <Item text="Regardez toutes ces props qu'on va pouvoir modifier" />
                            <Item text="Valable pour chaque balise de la page" />
                            <Item text="Des fois, des méthodes en plus selon la balise (ex: form, video)" />
                        </ListItem>
                        <Transition>
                            <BoxItem text="On a notre référence, à quoi elle va servir ?" />
                            <BoxItem text="Onva pouvoir lui ajouter des éléments direct depuis JS" />
                        </Transition>
                        <ListItem>
                            <Item text="Commençons par créer un élément" />
                            <Item text="object document sait faire : createElement" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="JavaScript" code={code.displayScoresCreate} />
                        </Demo>
                        <ListItem>
                            <Item text="Dès création élément, on peut le manipuler" />
                            <Item text="Ajout d'une class css avec .className" />
                            <Item text="Ajout de contenu avec .innerHTML" />
                            <Item text="Diff avec .textContent : que du text, innerHTML peut contenir des balises" />
                            <Item text="On a ajouté une class, créons le css" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="CSS" code={code.scoresTitle} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour terminer avec ce titre, il faut encore ajouter dans notre div" />
                            <Item text="Pour ça, notre ref target a une méthode : appendChild" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="JavaScript" code={code.scoresAppend} />
                        </Demo>
                        <ListItem>
                            <Item text="On raffraichit pour voir" />
                            <Item text="C'est super, on vient de créer notre 1er élément HTML depuis JS !" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTML/Element/table" />
                        <ListItem>
                            <Item text="On va stocker nos scores dans un tableau" />
                            <Item text="Une ligne pour chaque score" />
                            <Item text="on se crée une var table pour contenir la ref" />
                            <Question text="je vous écoute, j'écris quoi pour créer un élément table ?" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="JavaScript" code={code.scoresTable} />
                        </Demo>
                        <ListItem>
                            <Item text="On créer un nouvel élément pour contenir le header du tab" />
                            <Item text="On y définit les titres de nos colonnes" />
                            <Item text="Toujours plusieurs solutions pour insérer du contenu" />
                            <Item text="Cette fois, on construit une string HTML qu'on va ajouter avec .innerHTML" />
                            <Item text="On aurait pu construire chaque élément tr, th avec createElement mais + rapide comme ça" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="JavaScript" code={code.scoresThead} />
                        </Demo>
                        <Control>
                            <BoxItem text="Tout le monde est là ? J'ai perdu personne ?" />
                        </Control>
                        <ListItem>
                            <Item text="On passe donc au corps du tableau, élément tbody" />
                            <Item text="'tit spoiler, comment je crée ça ?" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="JavaScript" code={code.scoresTbody} />
                        </Demo>
                        <ListItem>
                            <Item text="Chaque ligne contient un score" />
                            <Item text="On reprend notre for pour parcourir" />
                            <Item text="A chaque tout de boucle, on va ajouter une tr au body" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="JavaScript" code={code.scoresRows} />
                        </Demo>
                        <ListItem>
                            <Item text="Toutes les infos sont dans le corps du tableau" />
                            <Item text="Il nous reste à :" />
                            <SubItem text="Ajouter le corps au tableau" />
                            <SubItem text="Ajouter le tableau à notre div#scores" />
                        </ListItem>
                        <Demo type="Repo ChallengeS203">
                            <Code language="JavaScript" code={code.scoresAppendTab} />
                        </Demo>
                        <ListItem>
                            <Item text="On raffraichit et magique, les scores apparaissent" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="On crée un élément avec document.createElement" />
                            <BoxItem text="Récup object JS, on peut modifier ses propriétés et utiliser ses méthodes" />
                            <BoxItem text="Ajout de contenu avec innerHTML ou textContent" />
                            <BoxItem text="Création de l'arborescence avec appendChild" />
                        </Recap>
                        <Control>
                            <BoxItem text="Beaucoup d'un coup là ..." />
                            <BoxItem text="Comment vous vous sentez ?" />
                            <BoxItem text="Sondage : tout compris, à pratiquer, au secours !" />
                        </Control>
                        <Transition>
                            <BoxItem text="'tit exo pour pratiquer tout ça ?" />
                            <BoxItem text="Si si, vous en mourez d'envie, je le sais !" />
                        </Transition>
                        <Doc type="repo Chrono" url="http://localhost:1235/E04/Chrono/" />
                        <ListItem title="exo dirigé">
                            <Item text="On va se faire un chronomètre tout simple" />
                            <Item text="Aperçu gestion du temps en JS" />
                            <Item text="Principe : ajouter 3 divs pour les minutes, les secondes, les 1/10 de secondes" />
                            <Item text="Tous les 1/10 de secondes, mise à jour de l'affichage" />
                            <Item text="On a déjà le html et le css, attaquons le JS !" />
                            <Item text="premier boulot, on se crée un object pour contenir nos infos" />
                        </ListItem>                        
                        <Demo type="Repo Chrono">
                            <Code language="JavaScript" code={code.chronoFirst} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant, on se crée une méthode pour remplir la div#chrono" />
                            <Question text="Comment je récupère ma cible ?" />
                        </ListItem>                        
                        <Demo type="Repo Chrono">
                            <Code language="JavaScript" code={code.chronoInit1} />
                        </Demo>
                        <ListItem>
                            <Item text="On crée une div d'id minutes pour commencer" />
                            <Question text="'tit spoiler, comment je crée l'élément ?" />
                            <Item text="On lui ajoute la prop id=minutes" />
                            <Item text="Init du contenu avec propriété de chrono" />
                            <Item text="Ajout à div#chrono" />
                        </ListItem>
                        <Demo type="Repo Chrono">
                            <Code language="JavaScript" code={code.chronoInit2} />
                        </Demo>
                        <ListItem>
                            <Item text="Même principe pour secondes et dixiemes" />
                            <Question text="Je vous laisse 2 minutes ? Vous complétez ?" />
                        </ListItem>
                        <Demo type="Repo Chrono">
                            <Code language="JavaScript" code={code.chronoInit3} />
                        </Demo>
                        <ListItem>
                            <Item text="Penser à appeler la méthode en fin de fichier, sinon ... on verra rien" />
                            <Item text="On crée une autre méthode display pour modifier l'affichage" />
                            <Item text="Nouvelle façon de récup un élément : querySelector" />
                            <Item text="Même principe que getElementById avec sélécteurs css" />
                            <Item text="Ce qui va changer : les propriétés de chrono" />
                            <Item text="On raffraichit l'affichage en ré-assignant le .textContent avec valeurs de chrono" />
                        </ListItem>
                        <Demo type="Repo Chrono">
                            <Code language="JavaScript" code={code.chronoDisplay} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant, méthode pour gérer la mise à jour des props de chrono" />
                            <Item text="On ajoute 1 à dixième" />
                            <Item text="SI dixiemes = 10, on les remet à 0 et on ajoute une seconde" />
                            <Item text="SI secondes = 60, on les remet à 0 et on ajoute une minute" />
                            <Item text="On raffraichit l'affichage avec un appel à display" />
                        </ListItem>
                        <Demo type="Repo Chrono">
                            <Code language="JavaScript" code={code.chronoAddTime} />
                        </Demo>
                        <Doc type="Ressource" url="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval" />
                        <Doc type="Ressource" url="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout" />
                        <ListItem>
                            <Item text="Reste mise à jour à chaque 1/10 de secondes" />
                            <Item text="Pour gérer le temps, JS propose plusieurs méthodes" />
                            <Item text="setInterval : permet d'éxecuter du code toutes les x millisecondes" />
                            <Item text="setTimeout : permet d'éxecuter du code au bout de x millisecondes" />
                            <Item text="Premier param : la fonction à exécuter, 2nd, le délai" />
                            <Item text="Dans notre cas, chaque dixième de seconde, en milli = 100" />
                            <Item text="Un peu comme une boule avec en plus aspect temps qui passe" />
                            <Question text="Qu'est-ce qu'on va vouloir répéter ici ? Quelle méthode ?" />
                            <Item text="AddTime : va mettre à jour les props de chrono ET l'affichage, nickel !" />
                        </ListItem>
                        <Demo type="Repo Chrono">
                            <Code language="JavaScript" code={code.chronoStart} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour finir, y a plus qu'à appeler chrono start() en fin de fichier" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Ca vous a paru compliqué ?" />
                            <BoxItem text="Vous avez des points de blocage ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Plusieurs façons de récup un élément : getElementById, querySelector (entre autres)" />
                            <BoxItem text="Avec JS, on peut modifier chaque propriété d'un élément" />
                            <BoxItem text="On peut gérer le temps avec, par exemple, setInterval" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Aperçu rapide mais vous commencez à voir la taille du terrain de jeu" />
                            <BoxItem text="Possibilités immenses, on est un 'tit glaçon au sommet de l'iceberg" />
                            <BoxItem text="Un dernier truc : on peut modifier le css depuis JS" />
                        </Transition>
                        <ListItem title="Modif CSS">
                            <Item text="Element en JS a une propriété style" />
                            <Item text="Contient tout le css défini pour cet élément" />
                            <Item text="Pour modifier : element.style.prop = " />
                            <Item text="Pour props avec 2 mots (-), on utilise le camelCase" />
                            <Item text="text-align devient textAlign, background-color, backgroundColor, etc..." />
                        </ListItem>
                        <Transition>
                            <BoxItem text="Dernier exo pour pratiquer tout ça ?" />
                            <BoxItem text="Si si, dernier exo pour pratiquer tout ça !" />
                        </Transition>
                        <Doc type="repo Chrono" url="http://localhost:1235/E04/MoveText/" />
                        <ListItem title="Exo autonomie">
                            <Item text="Je vous ai préparé un 'tit repo" />
                            <Item text="HTML et CSS sont fait, on va juste s'occuper du JS" />
                            <Item text="Notre mission : " />
                            <SubItem text="styliser la div de class .text" />
                            <SubItem text="mécanisme pour aller de top left à bottom right avec setInterval" />
                            <Item text="Commençons par créer un object move" />
                        </ListItem>
                        <Demo type="repo MoveText">
                            <Code language="JavaScript" code={code.move} />
                        </Demo>
                        <ListItem>
                            <Item text="Ajout prop text pour référencer l'élément à modifier" />
                            <Question text="Comment je peux référencer un élément qui n'a as d'id ?" />
                        </ListItem>
                        <Demo type="repo MoveText">
                            <Code language="JavaScript" code={code.moveText} />
                        </Demo>
                        <ListItem>
                            <Item text="Ajout méthode init pour le styliser" />
                            <Item text="Pas oublier appel en fin de fichier" />
                        </ListItem>
                        <Demo type="repo MoveText">
                            <Code language="JavaScript" code={code.moveInit} />
                        </Demo>
                        <ListItem>
                            <Item text="Notre div est belle, on va la faire bouger maintenant" />
                            <Item text="Définition méthode display avec 2 params, top et left" />
                            <Item text="On va mettre à jour le css avec ces 2 valeurs" />
                            <Item text="On va utiliser top pour faire un hue-rotate" />
                        </ListItem>
                        <Demo type="repo MoveText">
                            <Code language="JavaScript" code={code.moveDisplay} />
                        </Demo>
                        <ListItem>
                            <Item text="On définit la méthode qui va effectuer les changement sur top et left" />
                            <Item text="Dernière instruction de la méthode : move.display avec les nouveaux top et left" />
                            <Item text="parseInt : pratique pour récup les props sous forme de nombre" />
                        </ListItem>
                        <Demo type="repo MoveText">
                            <Code language="JavaScript" code={code.moveChange} />
                        </Demo>
                        <ListItem>
                            <Item text="Enfin on ajoute la gestion du temps avec setInterval" />
                            <Item text="Délai : 1/10ème de seconde, comme dans la transition" />
                            <Item text="Attention : attend un délai en millisecondes" />
                            <Item text="Comme ex précédent, on appelle move.start en fin de fichier" />
                        </ListItem>
                        <Demo type="repo MoveText">
                            <Code language="JavaScript" code={code.moveStart} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ca vous a paru très compliqué ?" />
                            <BoxItem text="Tout ce qu'on peut faire en quelques lignes de code ..." />
                        </Control>
                        <Recap>
                            <BoxItem text="Info : pas une bonne pratique de faire tout CSS en JS, juste pour l'exemple" />
                            <BoxItem text="Toutes les propriétés CSS sont accessibles en JS" />
                            <BoxItem text="une prop avec - s'écrit en camelCase" />
                            <BoxItem text="Gestion du temps permet 'tits effets sympas" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Maintenant on sait gérer une page en JS" />
                            <BoxItem text="Dernier morceau pour demain : événements" />
                            <BoxItem text="Actions utilisateurs, mais pas que ..." />
                        </Transition>
                        <ListItem text="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E04;