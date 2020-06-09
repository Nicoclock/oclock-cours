import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce} from "../../../common";
import {day1 as snippets} from "./Code/snippets";

import "../../style.scss"

const S3E01 = props => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };

    return (
        <Fragment>
            <div className="Title">Node</div>
            <div className="Inner">
                <Card title="Node" duration="1:00:00">
                    <List>
                        <Doc type="Slides" url="http://localhost:1234/s3/e1/intro-node" />
                        <ListItem title="Présentation">
                            <Item text="Saison dernière, JS dans le navigateur" />
                            <Item text="Objects à notre dispo : window, document" />
                            <Item text="Points d'entrée JS depuis le navigateur" />
                            <Item text="Voyons ce qui change avec Node" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem text="C'est quoi NodeJS ?">
                            <Item text="C'est un runtime JS, environnement d'exécution" />
                            <Item text="Toujours du JS mais on change de terrain de jeu" />
                            <Item text="Créateur Ryan Dahl : a pris le moteur V8 et l'a sorti du navigateur" />
                            <Item text="Node venait de naitre (2009) : tite révolution, JS en dehors du navigateur" />
                            <Item text="Accès à l'OS entier : on peut écrire des services côté serveur" />
                            <Item text="JS devient fullstack, front et back" />
                            <Item text="Alternative solide à PHP, Java, Ruby ..." />
                        </ListItem>
                        <Click dir="bottom x 3" />
                        <ListItem title="Runtime">
                            <Item text="Runtime : environnement d'exécution, un terrain de jeu" />
                            <Item text="Comprend un context (fournit les jouets) et un moteur JS" />
                            <Item text="Dans navigateur, context donne window, document, ..." />
                            <Item text="Moteur nous permet de programmer avec JS" />
                            <Item text="Association des 2 : environnement d'exécution, runtime" />
                            <Item text="Différence avec Node : le context va changer, pas le moteur, pas le langage" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Moteur">
                            <Item text="Contexte nous donne outils, jouets pour interagir avec environnement" />
                            <Item text="Rôle du moteur : lire et exécuter notre code" />
                            <Item text="Avec JS : pas de compilation, d'étape intermédiare" />
                            <Item text="Interpréteur va interpréter, transformer le code à chaud pour l'exécuter" />
                            <Item text="Chaque navigateur a sa propre solution" />
                            <SubItem text="Firefox : SpiderMonkey" />
                            <SubItem text="Safari : JavascriptCore" />
                            <SubItem text="Microsoft : Chakra" />
                            <SubItem text="Chrome : V8, plus rapide que les autres quand il est sorti" />
                            <Item text="Juste pour info, pas besoin de retenir les noms" />
                            <Item text="A retenir : JS a besoin d'un moteur pour être compris par l'ordi" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Contexte">
                            <Item text="C'est le contexte qui nous fournit nos jouets, le point d'entrée de la prog" />
                            <Item text="Déjà connu, le contexte navigateur avec object global window" />
                            <Item text="Object global, point d'entrée, c'est lui qui correspond au keyword this" />
                        </ListItem>
                        <Demo type="Console">
                            <Code step={snippets.context[snippet++]} />
                        </Demo>
                        <Click dir="bottom x 2" />
                        <ListItem title="Nouveau contexte : NodeJS">
                            <Item text="Avec Node, le contexte change, point d'entrée différent" />
                            <Item text="L'object global s'appelle ... global : super du à retenir !" />
                        </ListItem>
                        <Demo type="REPL">
                            <Code step={snippets.context[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On s'étend pas sur this tout de suite" />
                            <Item text="A retenir : this correspond au point d'entrée, au contexte" />
                            <Item text="Info : module est un object qu'on peut importer pour avoir ses fonctionnalités" />
                            <Item text="Module : top de l'empaquetage du code, on en verra plein" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Changement de contexte">
                            <Item text="En faisant du Node, on change juste de contexte" />
                            <Item text="JS vu en S2 est toujours utile, on change juste d'outils pour interagir" />
                            <Item text="Avec navigateur : window, document, navigator, ..." />
                            <Item text="Avec node, on tape dans l'OS : os, fs, http, ..." />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="A quoi sert NodeJS">
                            <Item text="A plein de choses !!!" />
                            <Item text="Applis en ligne de commande : pas sexy mais très utile" />
                            <Item text="Développer nos propres serveurs web : reçoit demandes(requêtes), envoie des réponses" />
                            <Item text="Empaqueter du JS pour des applis 'classiques' (Program Files ou Applications)" />
                            <Item text="Applis pour gérer des objects connectés : robotique, circuits imprimés, capteurs, ..." />
                        </ListItem>
                        <Click dir="right x 2" />
                        <ListItem title="Comment ça marche">
                            <Item text="Bah ... super bien !" />
                            <Item text="J'insiste : JS ne change pas !! heureusement ..." />
                            <Item text="Ce qui change : le contexte, les jouets dispos dans le terrain de jeu" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Comment va jusque là ? Des questions ?" />
                        </Control>
                        <Sondage question="NodeJS c'est un ... ?" reponses={["nouveau runtime", "nouveau contexte", "nouveau moteur"]} />
                        <Sondage question="Avec NodeJS, on peut ... ?" reponses={["faire du café", "manipuler le DOM", "utiliser des fonctionnalités de l'OS"]} />
                        <Recap>
                            <BoxItem text="NodeJS : changement de contexte" />
                            <BoxItem text="On accède avec JS au système d'exploitation" />
                            <BoxItem text="Univers plus vaste que le navigateur à notre dispo" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Assez de blah blah, on a tous des fourmis dans les doigts" />
                            <BoxItem text="Passons à la pratique" />
                        </Transition>
                    </List>
                </Card>
                <Card title="REPL Node" duration="0:30:00">
                    <List>
                        <Doc type="Ressource" url="https://nodejs.org/en/docs/" />
                        <ListItem title="Doc de Node">
                            <Item text="Votre nouvelle meilleure amie pour cette saison : la doc !" />
                            <Item text="1er boulot : vérifions notre version de node" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="REPL">
                            <Code step={snippets.repl[snippet++]} />
                        </Demo>
                        <ListItem title="Tour d'horizon">
                            <Item text="Sélection de la bonne version de la doc" />
                            <Item text="On affiche la doc de notre 1er outil : REPL" />
                            <Item text="Read Eval Print Loop" />
                            <Item text="Equivalent de la console pour le navigateur" />
                            <Item text="Pratique pour tester un truc vite fait" />
                            <Item text="On peut l'utiliser directement : node dans le terminal" />
                        </ListItem>
                        <Demo type="REPL">
                            <Code step={snippets.repl[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Et c'est parti, on peut déclarer nos variables" />
                        </ListItem>
                        <Demo type="REPL">
                            <Code step={snippets.repl[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On avait fait la même démo dans le navigateur" />
                            <Item text="C'est le même JS !!" />
                            <Item text="On peut faire des tableaux" />
                        </ListItem>
                        <Demo type="REPL">
                            <Code step={snippets.repl[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="des objects" />
                            <Item text="on va utiliser l'éditeur multiligne pour ça" />
                            <Item text="Ctrl+D pour valider, Ctrl+C pour annuler" />
                        </ListItem>
                        <Demo type="REPL">
                            <Code step={snippets.repl[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="de la même façon, on peut faire des conditions, des boucles, des fonctions" />
                            <Item text="sur une seule ligne ou avec .editor, comme on veut" />
                        </ListItem>
                        <Demo type="REPL">
                            <Code step={snippets.repl[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="A vous de jouer, faites une fonction addition" />
                            <Item text="2 nombres en paramètres, retourne la somme" />
                            <Item text="appelez-la en stockant le result dans une var result" />
                            <Item text="affichez le résultat en console" />
                            <Item text="on le fait ensemble dans 2 minutes" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Comment va jusque là ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Outil REPL pour faire des tests rapides" />
                            <BoxItem text="Equivalent à la console dans le navigateur" />
                            <BoxItem text="En tout cas, c'est le même JS !" />
                        </Recap>
                        <Transition>
                            <BoxItem text="C'est sympa, c'est pratique mais pas très user-friendly" />
                            <BoxItem text="Voyons si c'est plus mieux avec VSCode" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Premiers pas avec Node" duration="0:45:00">
                    <List>
                        <ListItem title="Premier projet">
                            <Item text="Création d'un répertoire et lancement VSCode" />
                            <Item text="Création index.js avec un hello world" />
                            <Item text="Pour exécuter, CTRL/Cmd+J : terminal dans le bon dossier" />
                            <Item text="On lance le script avec node index.js" />
                        </ListItem>
                        <Exo>
                            <Enonce text="Créez une fonction sayMyName" />
                            <Enonce text="3 paramètres : firstName, lastName et age" />
                            <Enonce text="Affichez un message avec ces 3 paramètres" />
                            <Enonce text="Appelez la fonction avec les arguments qui vont bien" />
                        </Exo>
                        <ListItem title="Découvrons un peu nos nouveaux jouets">
                            <Item text="Doc console : on retrouve les méthodes qu'on connait déjà" />
                            <Item text="On dirait bien les mêmes que dans le navigateur, on retrouve une copine" />
                            <Item text="Plus nouveau, module os : accès à un tat d'infos sur le système" />
                        </ListItem>
                        <ListItem>
                            <Item text="Utilisons tout ça dans notre index.js" />
                            <Item text="Bonne nouvelle : ES6 est dispo dans node, pas besoin de vérifier sur caniuse" />
                            <Item text="Truc pratique : quand variable a même nom que prop object, pas besoin de répéter" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="Node">
                            <Code step={snippets.node[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Avec console.table, on a une version plus lisible de notre object" />
                            <Item text="On peut le parcourir, l'inspecter avec for ...in" />
                        </ListItem>
                        <Demo type="Node">
                            <Code step={snippets.node[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour un tableau, for ...in va utiliser l'index, for...of les valeurs" />
                        </ListItem>
                        <Demo type="Node">
                            <Code step={snippets.node[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pas grand chose de nouveau, on va utiliser os" />
                            <Item text="Nouveau fichier, os.js" />
                            <Item text="Pour utiliser os, il faut l'importer dans notre script" />
                        </ListItem>
                        <Demo type="Node">
                            <Code step={snippets.node[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant, accès à toutes ses fonctionnalités" />
                            <Item text="On a tout stocké dans la const os" />
                            <Item text="Pour s'y retrouver : vite vite la doc !" />
                            <Item text="Cette doc : must have dans les favoris !" />
                            <Item text="Allez, tit exo" />
                        </ListItem>
                        <Exo>
                            <Enonce text="afficher dans la console le pourcentage de mémoire libre sur votre système, arrondi à l'entier le plus proche" />
                            <Enonce text="Regardez dans la doc les méthodes de la forme os.xxxmem(), ça devrait vous aider ..." />
                        </Exo>
                        <Demo type="Node">
                            <Code step={snippets.node[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On corse un peu, on va modifier l'affichage selon le % obtenu" />
                        </ListItem>
                        <Exo>
                            <Enonce text="SI pourcentage est inférieur à 15% ALORS afficher un avertissement" />
                            <Enonce text="SINON SI pourcentage < 4% ALORS afficher une erreur" />
                            <Enonce text="SINON afficher un log" />
                        </Exo>
                        <Demo type="Node">
                            <Code step={snippets.node[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="on utilise encore un peu os et sa doc" />
                        </ListItem>
                        <Exo>
                            <Enonce text="afficher le temps depuis lequel la machine est allumée, sous la forme Xh Xm Xs" />
                        </Exo>
                        <ListItem>
                            <Item text="on a 2 solutions ici" />
                            <SubItem text="soit on part des heures pour arriver aux secondes" />
                            <SubItem text="soit inverse : on part des secondes pour arriver aux heures" />
                        </ListItem>
                        <ListItem title="1ère solution" />
                        <Demo type="Node">
                            <Code step={snippets.node[snippet++]} />
                        </Demo>
                        <ListItem title="2ème solution">
                            <Item text="On va utiliser l'opérateur % : reste de la division entière" />
                            <Item text="3%2 = 1, 4%2 = 0" />
                        </ListItem>
                        <Demo type="Node">
                            <Code step={snippets.node[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ca va toujours ? J'ai perdu personne ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Y a pas, c'est le même JS !" />
                            <BoxItem text="Plus de navigateur, ok, mais plein d'outils sympas" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Ce qu'on a pas fait : demander des infos au user" />
                            <Question text="On fait comment d'habitude ?" />
                            <BoxItem text="J'essaie le prompt" />
                            <BoxItem text="Bon ça marche pas, faut utiliser autre chose : readline" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Readline">
                    <List>
                        <Doc type="Ressource" url="https://nodejs.org/api/readline.html#readline_readline" />
                        <ListItem title="Présentation">
                            <Item text="C'est un module inclus dans Node, on l'importe avec require, comme os" />
                            <Item text="Il sert à lire des flux d'informations : dans l'exemple, le terminal" />
                            <Item text="On commence par définir une interface" />
                            <Item text="Object en paramètre pour définir les flux entrant(saisie user) et sortant(affichage)" />
                            <Item text="process représente le terminal, stdin l'entrée, stdout la sortie" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="Readline">
                            <Code step={snippets.readline[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://nodejs.org/api/os.html#os_os_eol" />
                        <ListItem>
                            <Item text="Interface créée, on peut interroger le user" />
                            <Item text="Méthode question, réponse obtenue via un callback" />
                            <Item text="Pour sauter une ligne : os.EOL, valable pour tous les OS" />
                            <Item text="En fin de code du callback, on ferme l'interface et le process pour terminer le prog" />
                            <Item text="Attention, à appeler dans le callback sinon fin prog avant d'avoir eu la réponse" />
                        </ListItem>
                        <Demo type="Readline">
                            <Code step={snippets.readline[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pas de prompt ? Même pas mal, readline fait le boulot" />
                            <Item text="Fait bien plus, on va pouvoir utiliser des événements" />
                            <Item text="On va se faire une séance de psy" />
                        </ListItem>
                        <Demo type="Readline">
                            <Code step={snippets.readline[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour récup réponses user, on utilise l'événement line et son callback" />
                            <Item text="On définit le comportement pour l'evt close aussi" />
                        </ListItem>
                        <Doc type="Ressource" url="https://nodejs.org/docs/latest-v10.x/api/readline.html#readline_event_line" />
                        <Doc type="Ressource" url="https://nodejs.org/docs/latest-v10.x/api/readline.html#readline_event_close" />
                        <Demo type="Readline">
                            <Code step={snippets.readline[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="pour les 20 secondes de séance : setTimeout" />
                            <Item text="A la fin du délai, on affiche les réponses" />
                            <Item text="On ferme l'interface avec .close qui va lancer événement close et fermer l'appli" />
                        </ListItem>
                        <Demo type="Readline">
                            <Code step={snippets.readline[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="I bon pour vous ? Cette histoire d'événements ça va ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Readline remplace avantageusement prompt" />
                            <BoxItem text="Plus de fonctionnalités, utilise des callbacks" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Readline peut lire (et écrire) avec d'autres types de flux (pas que console)" />
                            <BoxItem text="Voyons ça avec un 'tit exo" />
                        </Transition>
                        <Doc type="Ressource" url="https://nodejs.org/docs/latest-v10.x/api/readline.html#readline_example_read_file_stream_line_by_line" />
                        <ListItem title="Lecture fichier">
                            <Item text="On récupère le repo" />
                            <Item text="Fichier texte avec des strings encodées" />
                            <Item text="Fichier JS avec fonction pour décoder" />
                            <Item text="Votre mission, utiliser readline" />
                            <SubItem text="créer une interface qui va lire le fichier ligne par ligne" />
                            <SubItem text="utiliser les événements pour afficher les lignes décodées" />
                            <Item text="A vous de jouer !" />
                        </ListItem>
                        <Demo type="Readline">
                            <Code step={snippets.readline[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Pratique non ?" />
                            <BoxItem text="Impossible à faire dans l'environnement navigateur" />
                            <BoxItem text="Une 'tit ola pour Node !" />
                        </Recap>
                        <ListItem text="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S3E01;