import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Git, Exo, Enonce} from "../../../common";
import {day2 as snippets} from "./Code/snippets";
import {first} from "./Code/challenges";
import "../../style.scss"

const S2E02 = () => {
    let challenge = 0;
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
    }

    return (
        <Fragment>
            <div className="Title">JS, ça fonctionne bien</div>
            <div className="Inner">
                <Card title="Correction" duration="1:00:00">
                    <Doc type="Challenge" url="http://localhost:1235/E02/Correction/" />
                    <List>
                        <Recap>
                            <BoxItem text="A quoi peut servir JS" />
                            <BoxItem text="Concept généraux de prog" />
                            <BoxItem text="Bases du langage : déclaration, assignation, type primitifs" />
                            <BoxItem text="Utilisation de la console" />
                            <BoxItem text="Conditions, comparaisons" />
                        </Recap>
                        <Control>
                            <BoxItem text="Alors comment ça s'est passé ce challenge ?" />
                            <Sondage question="J'ai trouvé ça : " reponses={[
                                "trop facile",
                                "m'en suis tiré",
                                "j'ai galéré !",
                                "papu/pasu/pavoulu"
                            ]} />
                        </Control>
                        <Transition>
                            <BoxItem text="On va revoir tout ça ensemble" />
                        </Transition>
                        <ListItem title="Correction exo1">
                            <Item text="pas de feinte, même principe qu'hier" />
                            <Item text="on déclare nos 2 variables et on leur assigne une valeur" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ok exo 1 ? Y avait pas de piège ..." />
                        </Control>
                        <ListItem title="Correction exo2 - 1">
                            <Question text="Qu'est-ce qu'on va utiliser comme fonction ?" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Correction exo2 - 2">
                            <Item text="Vous avez remarqué la phrase ? On dirait de l'algo ..." />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Correction exo2 - 3">
                            <Question text="Qui me dit comment on va implémenter ça ?" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="C'est clair ce if ?" />
                        </Control>
                        <ListItem title="Correction exo3 - 1">
                            <Item text="Plus tricky celui-là ..." />
                            <Item text="Au début pas de souci, on déclare question2 et solution2" />
                            <Item text="On pose la question et on stocke dans reponse2" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Correction exo3 - 2">
                            <Item text="Ensuite on doit comparer avec la bonne réponse, c'est là que ça se corse :" />
                            <SubItem text="On nous l'a donné en indice : prompt renvoie une string" />
                            <SubItem text="Notre réponse, c'est 63, un number" />
                            <Item text="D'où un problème, si on compare une string et un number avec ===, ça renvoie faux" />
                            <Item text="On nous a donné un autre indice : parseInt" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt" />
                        <ListItem title="Correction exo3 - 3">
                            <Item text="Ca a l'air nickel, c'est bien ça qu'on veut faire" />
                            <Item text="Dans notre cas, c'est la base 10" />
                            <Item text="On va pouvoir vérifier son type avec typeof" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.numbers[snippet++]} />
                        </Demo>
                        <ListItem title="Correction exo3 - 4">
                            <Item text="NaN : not a number, la conversion n'a pas marché" />
                            <Item text="JS nous indique qu'il attendait une valeur number mais qu'il l'a pas eue" />
                            <Item text="On a une autre méthode pour transformer une string en number, c'est Number" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" />
                        <Demo type="console">
                            <Code step={snippets.numbers[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="2 méthodes pour transformer une string en number" />
                            <BoxItem text="parseInt : renvoie un entier, même si lettres APRES le nombre" />
                            <BoxItem text="Number : renvoie un entier ou un float, mais aime pas du tout les lettres" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Maintenant qu'on est bien armé, on peut retourner au combat" />
                        </Transition>
                        <ListItem title="Correction exo3 - 5">
                            <Item text="On a la solution dans solution2, c'est un number" />
                            <Item text="On a la reponse de l'utilisateur dans reponse2, c'est une string" />
                            <Question text="C'est a vous maintenant, qu'est-ce que je fais pour les comparer ?" />
                            <Item text="On va transformer reponse2 en number" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Correction bonus - 1">
                            <Question text="Réfléchissons ensemble, c'est quoi les étapes ?" />
                            <Item text="On va créer une variable pour contenir le score" />
                            <Item text="On va la mettre à jour à chaque bonne réponse" />
                            <Item text="On va afficher le score à la fin du jeu" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Correction bonus - 2">
                            <Item text="On doit donc ajouter 1 à score à chaque bonne réponse" />
                            <Question text="On fait comment dans le coup ?" />
                            <Item text="Il faut incrémenter la variable, lui ajouter 1" />
                            <Item text="On assigne une nouvelle valeur : l'ancienne valeur + 1" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Correction bonus - 3">
                            <Item text="Il nous reste à afficher le score en fin de partie" />
                            <Item text="On va afficher un message différent : au pluriel si score > 1, sinon singulier" />
                            <Question text="On va utiliser une ... ?" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Dans ce challenge on a révisé les variables, les conditions et les comparaisons" />
                            <BoxItem text="On a découvert comment transformer une string en number" />
                            <BoxItem text="On a aussi vu 3 façons d'incrémenter une variable : oldValue+1, value += 1; value++" />
                        </Recap>
                        <Git commit="Correction challenge + bonus" />
                        <Transition>
                            <BoxItem text="Le code fonctionne, c'est le but 1er c'est super !" />
                            <BoxItem text="Est-ce que vous remarquez qu'entre question 1 et question2 le code se ressemble vachement ?" />
                            <BoxItem text="Nous les devs, on n'aime pas se répéter" />
                            <BoxItem text="Faudrait pouvoir prendre ce bout de code similaire et le stocker ailleurs pour réutilisation" />
                            <BoxItem text="JS nous aime, il a encore pensé à nous : c'est le rôle des fonctions" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Intro fonctions" duration="0:30:00">
                    <Doc type="Slides" url="http://localhost:1234/s2/e2/fonction" />
                    <List>
                        <ListItem title="Intro">
                            <Item text="On va utiliser des fonctions pour factoriser le code" />
                            <Item text="On évite au maximum de se répéter :" />
                            <SubItem text="le code est plus propre, plus agréable à lire" />
                            <SubItem text="en cas de modif, on ne change qu'à un seul endroit" />
                            <Item text="Imaginez un déménagement, qu'est-ce qu'il vaut mieux : 15 voitures qui se suivent ou un gros camion" />
                            <Item text="Si camion change de route, pas grave, 15 bagnoles, plus dur, vaut mieux factoriser les ressources" />
                            <Item text="La fonction fait ça avec les instructions" />
                            <Item text="Sac à code, Liste d'instructions qu'on va exécuter en appelant la fonction" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Point de départ">
                            <Item text={`prog met un message = "bonjour"`} />
                            <Item text="demande prénom et l'ajoute (concat avec +=)" />
                            <Item text="on a vu +=, marche avec numbers, marche aussi avec strings" />
                            <Item text="pareil avec nom et age" />
                            <Item text="affiche le message" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Bon pour tout le monde ?" />
                        </Control>
                        <Click dir="bottom" />
                        <ListItem title="DRY">
                            <Item text="Nous les devs, on n'aime pas se répéter" />
                            <Item text="Je le redirai souvent, c'est une bonne pratique de prog" />
                            <Item text="Effectivement, copier/coller peut marcher mais code fouilli" />
                            <Item text="Pour modifier, penser à tous les endroits où on a copié" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Comment stocker les instructions ?">
                            <Item text="L'idée : pouvoir assigner des instructions à une variable" />
                            <Item text="Pas possible comme ça, faut qu'on trouve autre chose" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Les fonctions">
                            <Item text="JS nous a à la bonne, c'est le rôle des fonctions" />
                            <Item text="Stocker des instructions qu'on exécutera toutes d'un coup en appelant la fonction" />
                            <Item text="Comment on fait ça ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Déclaration">
                            <Item text="Comme une variable, il faut déclarer une fonction" />
                            <Item text="Plusieurs façons de faire en JS :" />
                            <Item text="Classique : mot-clé function, nom, parenthèses accolades" />
                            <Item text="Entre accolades, on place les instructions" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Décortique">
                            <Item text="Je répète : mot-clé function, nom, parenthèses accolades" />
                            <Item text="C'est la déclaration" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Exécuter">
                            <Item text="Appeler/exécuter la fonction !== déclarer" />
                            <Item text="On va exécuter toutes les instructions entre accolades" />
                            <Item text="On utilise le nom + ()" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Recap">
                            <Item text="On déclare avec function + nom + ..." />
                            <Item text="On exécute avec nom + ()" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Fonction presentation">
                            <Item text="On a déplacé toutes nos instructions entre les accolades de fonction presentation" />
                            <Item text="C'est la déclaration, aucun code n'est exécuté" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Exécution">
                            <Item text="On appelle fonction presentation avec ()" />
                            <Item text="Pour l'exécuter 2 fois, il suffit de l'appeler 2 fois" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Fonction : paquet d'instructions, plus propre, plus simple à maintenir" />
                            <BoxItem text={`Déclarer une fonction : function nom () {}`} />
                            <BoxItem text="Appeler/exécuter une fonction: nom + ()" />
                        </Recap>
                        <Doc type="Schema" url="http://localhost:1235/E02/noParamNoReturn.jpg" />
                        <Transition>
                            <BoxItem text="C'est déjà chouette mais on peut faire bien plus" />
                            <BoxItem text="Pour code souple et réutilisable, on va le configurer, le rendre adaptable" />
                        </Transition>
                        <Click dir="right" />
                        <ListItem title="Paramètres">
                            <Item text="Ca va être le rôle des paramètres" />
                            <Item text="Le comportement du code sera différent selon les paramètres reçus" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Fonction simple">
                            <Item text="Dans fonction, variable message qui vaut Bonjour" />
                            <Item text="on alert message concaténé à !!" />
                            <Item text="Si on veut dire autre chose que bonjour ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Paramètre message">
                            <Item text="On ne va plus déclarer message dans la fonction avec du code en dur" />
                            <Item text="On définit un paramètre message entre les parenthèses" />
                            <Item text="Paramètre va agir comme une variable dans la fonction" />
                            <Item text="A la déclaration, enveloppe vide" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Argument message">
                            <Item text="A l'appel, on passe la valeur de message qu'on souhaite" />
                            <Item text="On remplit l'enveloppe vide avec valeur" />
                            <Item text="Au lieu de Bonjour!!, on aura Hello!!" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Recap">
                            <Item text="Dans la déclaration, on définit un paramètre entre les parenthèse" />
                            <Item text="A l'exécution, on passe un argument entre les parenthèses" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Code final">
                            <Item text="On déclare presentation avec un paramètre message" />
                            <Item text="On peut l'exécuter plein de fois avec des arguments différents" />
                            <Item text="Le message affiché sera différent, il a été configuré" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Point de détail">
                            <Item text="Je vous ai dit : plusieurs façons de déclarer une fonction" />
                            <Item text="une autre façon qu'on verra assez souvent : var nom = function parenthèses" />
                            <Item text="Fonction est dite anonyme" />
                            <Item text="Petites subtilités dans l'utilisation mais on en reparlera plus tard" />
                            <Item text="Utilisez celle que vous préférez" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Tout le monde est là ?" />
                            <BoxItem text="Y en a qui pleurent ou pas ? Faut me le dire !" />
                        </Control>
                        <Doc type="Schema" url="http://localhost:1235/E02/paramNoReturn.jpg" />
                        <Recap>
                            <BoxItem text="On a vu comment déclarer avec function nom() et appeler une fonction" />
                            <BoxItem text="Comment la configurer avec paramètres pour code plus souple et l'appeler avec arguments" />
                            <BoxItem text="2ème façon de déclarer avec var nom = function()" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Pratiquons avec un exemple puis avec code du challenge" />
                            <BoxItem text="On va le rendre beau, propre, réutilisable" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Isoler son code" duration="1:15:00">
                    <Doc type="Demo" url="http://localhost:1235/E02/Demo/Maths/" />
                    <List>
                        <Demo type="repo Maths">
                            <BoxItem text="Création repo, index.html, js/maths.js" />
                        </Demo>
                        <Exo>
                            <Enonce text="Déclarez une fonction carre qui prend un nombre en parametre" />
                            <Enonce text="La fonction doit afficher ce nombre au carré dans la console" />
                            <Enonce text="Appelez la fonction pour la tester" />
                        </Exo>
                        <Control>
                            <BoxItem text="Vous êtes à l'aise ou pas ?" />
                            <BoxItem text="Vous voulez qu'on fasse la déclaration ensemble ?" />
                        </Control>
                        {console.log(resetSnippet())}
                        <Demo type="repo Maths">
                            <Code step={snippets.maths[snippet++]} />
                        </Demo>
                        <ListItem title="Exo autonomie - 2">
                            <Item text="Le nombre à mettre au carré est demandé à l'utilisateur" />
                            <Item text="Fonction avec une string en paramètre" />
                            <Question text="Ca va poser des problèmes dans notre code. Vous voyez lequels ?" />
                            <Item text="Prévoir conversion string to number" />
                            <Item text="Vérifier que la conversion a marché" />
                            <Item text="Nouvelle fonction : isNaN qui va retourner true si son argument n'est PAS un nombre" />
                            <Item text="is not a number" />
                        </ListItem>
                        <Demo type="Console">
                            <Code step={snippets.maths[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="L'utilisateur saisi quelque chose au clavier" />
                            <BoxItem text="On passe cette saisie en argument à carre()" />
                            <BoxItem text="Dans la fonction, on convertit la saisie en number" />
                            <BoxItem text="On verifie avec isNaN si on a bien un nombre" />
                            <BoxItem text="Si oui, on affiche le carre dans la console" />
                            <BoxItem text="Si non, on affiche un message d'erreur" />
                        </Recap>
                        <Demo type="repo Maths">
                            <Code step={snippets.maths[snippet++]} />
                        </Demo>
                        <Git commit="Fonction carre v1 et v2" />
                        <Transition>
                            <BoxItem text="Essayons d'appliquer ce qu'on vient de voir au challenge d'hier" />
                        </Transition>
                    </List>
                     <Doc type="Challenge" url="http://localhost:1235/E02/Correction/" />
                    <List>
                        <ListItem title="Analyse">
                            <Item text="Commençons par repérer les bouts de code qui se ressemblent, qui se répètent" />
                            <Question text="Qu'est-ce qu'on peut factoriser ?" />
                            <Item text="Comparer la réponse et la solution" />
                            <Item text="Mettre le score à jour si besoin" />
                            <Item text="Afficher le message adéquat" />
                            <Question text="Y a une 'tite subtilité, différence de traitement. Vous la voyez ?" />
                            <Item text="Avant comparaison, on check si la solution est un number" />
                            <Item text="SI solution est de type number ALORS transforme réponse en number" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Vérifier si solution est number" />
                            <BoxItem text="Si number, on transforme la réponse en number" />
                            <BoxItem text="Vérifier si solution et réponse sont égales" />
                            <BoxItem text="Si bonne réponse, mise à jour du score" />
                        </Recap>
                        <ListItem title="Déclaration fonction">
                            <Question text="Est-ce qu'on a besoin de configurer la fonction ?" />
                            <Question text="Qu'est-ce qu'on met comme paramètres ?" />
                            <Item text="On fait la déclaration ensemble" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Implémentation en autonomie">
                            <Item text="A vous de jouer, essayez d'implémenter cet algo" />
                            <Item text="Je vous laisse 5 minutes et on corrige ensemble" />
                        </ListItem>
                        <ListItem title="Implémentation">
                            <Question text="On doit trouver le type de solution, qu'est-ce qu'on a comme outil pour ça ?" />
                            <Question text="Comment on va pourvoir utiliser ça dans une condition ?" />
                            <Item text={`On va comparer typeof solution avec "number"`} />
                            <Item text="SI comparaison est true, on convertit" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Implémentation">
                            <Item text="Maintenant que tout est en string, on peut comparer reponse et solution" />
                            <Item text="Si gagné, on n'oublie pas d'incrémenter le score" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Appel fonction">
                            <Item text="Il nous reste à appeler notre fonction dans le code" />
                            <Item text="Je vous écoute, on l'appelle où et comment ? Avec quels arguments ?" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Comment ça va jusque là ?" />
                            <Sondage question="fonction checkReponse ?" reponses={["c'est ok", "à pratiquer", "suis largué ..."]} />
                        </Control>
                        <ListItem title="DisplayScore">
                            <Item text="Poussons le vice un peu" />
                            <Item text="Je voudrais mettre la logique d'affichage du score dans une fonction displayScore" />
                            <Item text="On pourra l'appeler après chaque question pour voir le score au fur et à mesure" />
                            <Question text="Est-ce qu'on a besoin de configurer cette fonction ?" />
                            <Item text="On va juste déplacer la logique dans le corps de notre fonction" />
                            <Item text="On va l'appeler après chaque appel à checkReponse" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={first.etapes[challenge++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="C'est bon pour tout le monde ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="On a donc vu la démarche pour faire du refactoring" />
                            <BoxItem text="On repère les parties du code qui se répètent ou se ressemblent beaucoup" />
                            <BoxItem text="On crée une fonction qui va stocker les instructions" />
                            <BoxItem text="On remplace le code par un appel à la fonction" />
                        </Recap>
                        <Git commit="Refactoring avec fonctions" />
                    </List>
                    <List>
                       <Transition>
                            <BoxItem text="On va faire une dernière version de carre() qui va utiliser une bibliothèque javascript" />
                            <BoxItem text="C'est un ensemble de fonctions qu'on a regroupé" />
                            <BoxItem text="La lib s'appelle Math et permet nombreuses opérations" />
                            <BoxItem text="N'hésitez pas à checker la doc" />
                        </Transition>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math" />
                        <ListItem title="Exo autonomie - 3">
                            <Item text="Scroll un peu on arrive à Math.pow" />
                            <Item text="Mettre au carré, c'est passer le nombre à la puissance 2" />
                            <Question text="Comment on peut utiliser Math.pow dans notre code ?" />
                        </ListItem>
                        <Demo type="repo Maths">
                            <Code step={snippets.maths[snippet++]} />
                        </Demo>
                        <ListItem title="Exo autonomie - 4">
                            <Item text="Autre méthode super utile : Math.random" />
                            <Item text="En prog, souvent besoin d'un nombre aléatoire" />
                            <Item text="Imaginons qu'on veuille simuler tirage du loto : nombre au hasard entre 1 et 49" />
                            <Item text="Math.random donne un nb au hasard entre 0 et 1" />
                            <Item text="En multipliant 49 par random, on obtient % de 49" />
                        </ListItem>
                        <Demo type="repo Maths">
                            <Code step={snippets.maths[snippet++]} />
                        </Demo>
                        <ListItem title="Exo autonomie - 4">
                            <Item text="Au loto, y a pas de nombre à virgule" />
                            <Question text="Vous voyez quelque chose qui peut nous aider dans la doc ? Une fonction qui nous renvoie un entier ?" />
                            <Item text="Math.floor, Math.ceil, Math.round" />
                        </ListItem>
                        <Demo type="repo Maths">
                            <Code step={snippets.maths[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Vous vous sentez bien toujours ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="On a vu plein de chose encore !" />
                            <BoxItem text="Refactoring du code : plus beau ou plus efficace" />
                            <BoxItem text="La lib Math : plein d'opérations disponibles" />
                        </Recap>
                        <Git commit="Fonction carre v3 avec Math" />
                        <Transition>
                            <BoxItem text="Pour un vrai tirage du loto, on aurait besoin de garder des traces des tirages" />
                            <BoxItem text="Il faudrait qu'on les stocke pour les afficher" />
                            <BoxItem text="On peut créer une variable par boule mais c'est pas génial" />
                            <BoxItem text="Nouveau type de variable : le tableau" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Tableaux" duration="1:00:00">
                    <Doc type="Slides" url="http://localhost:1234/s2/e2/tableau" />
                    <List>
                        <ListItem title="Les tableaux">
                            <Item text="Découvrons ensemble ce nouveau type, ce qu'il mange le matin, ..." />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Types connus">
                            <Item text="On a déjà vu plusieurs types de variables" />
                            <SubItem text="boolean : true ou false" />
                            <SubItem text="string : chaine de caractères" />
                            <SubItem text="number : nombres entiers ou float" />
                            <Item text="Il existe d'autres types qu'on va voir au fur et à mesure" />
                            <Item text="Notamment le tableau ou Array" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Tableaux, c'est à dire">
                            <Item text="Variable : boite avec un nom et une valeur" />
                            <Item text="Tableau : étagère de boites, liste de valeurs" />
                            <Item text="Ex prénom ou tirage loto : " />
                            <SubItem text="pour stocker plusieurs valeurs, une variable à chaque fois" />
                            <SubItem text="peut vite devenir fastidieux ..." />
                            <SubItem text="si nb de valeurs inconnu, on est coincé !" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Tableaux en JS">
                            <Item text="Intérêt du tableau : on peut y ajouter autant de valeurs qu'on veut" />
                            <Item text="Référence unique, nom unique pour désigner la liste de valeurs" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Déclaration">
                            <Item text="En JS : avec le mot-clé var, comme toujours" />
                            <Item text="Tableau se note entre crochets" />
                            <Item text="Si pas de valeur entre crochets, le tableau existe, pas undefined, juste vide" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Déclaration avec valeurs">
                            <Item text="Pas toujours le cas mais des fois, valeurs connues d'avance" />
                            <Item text="On peut alors les indiquer à la déclaration" />
                            <Item text="Chaque valeur est séparée par une virgule" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Lecture des valeurs">
                            <Item text="Pour lire les valeurs, on utilise leur position, leur index : nom tab + index entre crochets" />
                            <Item text="Dans majorité des langages, le premier élément est à l'index 0, 2ème, 1, 3ème, 2, etc..." />
                            <Item text="Coup à prendre, on s'y fait très vite !" />
                            <Item text="Ex slide : on accède à la deuxième valeur du tab avec l'index 1" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Ajout de valeurs">
                            <Item text="On peut ajouter des valeurs après la déclaration" />
                            <Item text="Quand on connait le contenu, il suffit d'utiliser l'index suivant" />
                            <Item text="Dans notre cas, 3 valeurs stockées aux index 0, 1 et 2" />
                            <Item text="Prochain index 3, on ajoute la valeur avec [3]" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Entrées vides">
                            <Item text="Si on se trompe dans l'index, qu'on met 4, pas d'erreur" />
                            <Item text="JS comble l'élément manquant avec un élément vide" />
                            <Item text="Log du tableau : 1 élément noté empty" />
                            <Item text="Log de cet élément : undefined" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Override">
                            <Item text="Si on se trompe dans l'autre sens, qu'on réutilise index 1, pas d'erreur non plus" />
                            <Item text="Y a déjà une valeur à cet index, elle va être écrasée par la nouvelle valeur" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <ListItem title="Contourner index - 1">
                            <Item text="Cette histoire d'index : un peu fastidieux" />
                            <Item text="On connait pas toujours le contenu, donc l'index suivant" />
                            <Item text="Les tableaux en js ont une propriété, une variable qui leur appartient : length" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <ListItem title="Contourner index - 2">
                            <Item text="Vous remarquez ? le nombre renvoyé par length, c'est le nb d'éléments du tab" />
                            <Item text="Mais c'est aussi l'index suivant ! Pratique !!" />
                            <Item text="Si tab.length renvoie 3, on sait que les éléments 0, 1 et 2 sont occupés" />
                            <Item text="On peut ajouter une valeur en fin de tableau en utilisant length" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <ListItem title="Contourner index - 3">
                            <Item text="Autre solution : utiliser une méthode des tableaux, une fonction rattaché à un type d'objet" />
                            <Item text="push() permet d'ajouter un élément en fin de tableau" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Comment ça va jusqu'à maintenant ?" />
                            <BoxItem text="Vous commencez à voir l'intérêt des tableaux ?" />
                            <BoxItem text={`Quiz : on le tableau suivant : var tirage = ["boule1", "boule2", "boule3"];`} />
                            <Sondage question="Quel élément est à l'index 2 ?" reponses={["boule1", "boule2", "boule3"]} />
                            <Sondage question="Comment afficher le 2ème élément ?" reponses={["console.log(tirage[0])", "console.log(tirage[1])", "console.log(tirage[2])"]} />
                        </Control>
                        <Recap>
                            <BoxItem text="On a vu comment déclarer un tableau" />
                            <BoxItem text="Comment y stocker des valeurs" />
                            <BoxItem text="Comment accéder à ces valeurs avec l'index" />
                            <BoxItem text="Comment ajouter des valeurs avec l'index ou en utilisant length ou avec push" />
                        </Recap>
                        <Click dir="right" />
                        <Transition>
                            <BoxItem text="Pour l'instant, on a mis que des string dans le tab" />
                            <BoxItem text="Vous commencez à connaitre JS, ça se limite pas à ça !" />
                        </Transition>
                        <Click dir="bottom" />
                        <ListItem title="Stockage - 1">
                            <Item text="On peut y stocker tous les types de valeurs qu'on a vu :" />
                            <SubItem text="des strings" />
                            <SubItem text="des numbers" />
                            <SubItem text="des booleans" />
                            <Item text="Souplesse de JS : tableaux ne sont pas typés" />
                            <Item text="On peut mélanger les types de variables dedans, pas permis dans tous les langages" />
                            <Item text="Pas obligé de mettre des valeurs en dur, on peut mettre des variables" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Stockage - 2">
                            <Item text="On peut même ajouter un tableau dans un tableau" />
                            <Item text="Ca parait vicieux mais ça peut être très utile" />
                            <Item text="Ex slide : pour accéder à une valeur du tab dans le tab :" />
                            <SubItem text="Premier index pour accéder au tableau" />
                            <SubItem text="Second index : pour accéder à une valeur dans le tableau" />
                        </ListItem>
                        <ListItem title="Petite parenthèse">
                            <Item text="Pour JS, une string, c'est aussi un tableau" />
                            <Item text="On peut récupérer un caractère précis avec son index" />
                            <Item text="On peut connaitre sa longueur avec length" />
                        </ListItem>
                        <Demo type="console">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <Click dir="bottom" />
                        <ListItem title="Présentation">
                            <Item text="Quand un tableau contient beaucoup d'éléments, on peut le présenter différemment" />
                            <Item text="On place un élément par ligne" />
                            <Item text="Plus lisible, plus facile à modifier" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Tout le monde est là ? J'ai perdu personne ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Tableaux peuvent contenir tous les types, même un autre tableau" />
                            <BoxItem text="La string est une sorte de tableau, caractères par index, méthode length" />
                            <BoxItem text="Libre dans la présentation, plus c'est clair mieux c'est !" />
                        </Recap>
                        <Click dir="right" />
                        <Transition>
                            <BoxItem text="Assez de théorie, allons pratiquer avec un 'tit exo" />
                        </Transition>
                        <Doc type="repo Fruits" url="http://localhost:1235/E02/Code/" />
                        <ListItem title="Exo en autonomie">
                            <Item text="On va se créer un nouveau répertoire avec index et js/fruits.js" />
                        </ListItem>
                        <Exo>
                            <Enonce text="Déclarez un tableau contenant quelques fruits" />
                            <Enonce text="Affichez un console un message du genre 'je mange xxx'" />
                            <Enonce text="Utilisez un index pour récupérer une valeur du tableau" />
                            <Enonce text="Bonus : afficher un fruit de façon aléatoire en utilisant Math.random" />
                            <Enonce text="Attention : un index est un entier, vous devrez combiner avec une autre méthode de Math" />
                        </Exo>
                        <Demo type="repo Fruits">
                            <Code step={snippets.array[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ok pour tout le monde ? les tableaux sont vos amis ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="On a décotiqué les tableaux : déclaration, modification, lecture des valeurs" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Imaginons qu'on a besoin d'un tableau avec tous les nb de 0 à 999" />
                            <BoxItem text="On ne va pas assigner les valeurs une par une, trop galère" />
                            <BoxItem text="On aurait besoin d'un outil pour répéter une action" />
                            <BoxItem text="Merci JS, on va pouvoir faire ça avec les boucles" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Boucles" duration="1:00:00">
                    <Doc type="Slides" url="http://localhost:1234/s2/e2/boucle" />
                    <List>
                        <ListItem title="C'est quoi une boucle">
                            <Item text="Structure de code qui va permettre de répéter des instructions" />
                            <Item text="Pas limpide, voyons ça plus en détail" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Principe - 1">
                            <Item text="Mecanisme basé sur les conditions" />
                            <Item text="Tant qu'une condition est vérifiée (true), on exécute les instructions de la boucle" />
                            <Item text="Quand condition est false, on sort de la boucle et on exécute le code après la boucle" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Principe - 2">
                            <Item text="Principe plutôt clair, mais grattons un peu pour bien comprendre" />
                            <Item text="Reprenons notre tableau de fruits" />
                            <Question text="On s'y prend comment pour afficher les valeurs du tableau une par une ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Principe - 3">
                            <Item text="On peut utiliser console.log avec chaque index" />
                            <Item text="Ca marche mais devient vite fastidieux" />
                            <Question text="Si on a 200 fruits ou 1000 fruits ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Principe - 4">
                            <Item text="2 façon d'envisager le problème, 2 algos :" />
                            <SubItem text="TANT QU'il y a des fruits dans le tableau, on affiche" />
                            <SubItem text="POUR chaque élément dans le tableau, on affiche" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Vous comprenez le principe ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Dans les 2 cas, on va PARCOURIR notre tableau de l'index 0 à la fin" />
                            <BoxItem text="On va passer sur chaque élément et l'afficher" />
                        </Recap>
                        <Click dir="right" />
                        <ListItem title="While - 1">
                            <Item text="Commençons par l'algo TANT QUE" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="While - 2">
                            <Item text="Rappel principe : TANT QUE condition est vraie, on exécute les instructions dans la boucle" />
                            <Item text="En JS, TANT QUE va se dire while" />
                            <Item text="Regardons le code proposé :" />
                            <SubItem text="on déclare une var compteur initialisée à 0" />
                            <SubItem text="tant que le compteur est inférieur à 3" />
                            <SubItem text="on affiche le fruit à l'index compteur" />
                            <SubItem text="on incrémente notre compteur (ajoute 1)" />
                            <Item text="Attention à l'incrémentation : super important" />
                            <Item text="Si on l'oublie, on ne sort jamais de la boucle" />
                            <Item text="Boucle infinie ou boucle folle" />
                            <Item text="Sur certains système (au hasard windows ...), ça peut planter la machine" />
                            <Item text="J'insiste : dans boucle while, toujours prévoir une porte de sortie" />
                            <Item text="Dans le code de la boucle, faire en sorte que la condition puisse passer à false" />
                            <Item text="Règle d'or pour while : prévoir comment sortir de la boucle" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="for">
                            <Item text="Rappel principe : POUR chaque élément du tableau, afficher" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="for">
                            <Item text="Le fonctionnement est à peu près le même" />
                            <Item text="On l'écrit différemment" />
                            <Item text="POUR devient for en JS" />
                            <Item text="entre les parenthèses, on décrit le comportement de notre compteur (ici index)" />
                            <Item text="3 instructions condensées sur 1 ligne séparées par ;" />
                            <SubItem text="déclaration : var index = 0;" />
                            <SubItem text="condition : index < 3;" />
                            <SubItem text="incrémentation : index++; ou index += 1; ou index = index+1;" />
                            <Item text="Comme avec while, tant que la condition est true, on exécute les instructions de la boucle" />
                            <Item text="Ici, on affiche le fruit à l'index index" />
                            <Item text="Côté pratique du for, moins de chance d'oublier l'incrémentation :-)" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Comment vous le sentez les boucles ? Ca va ?" />
                        </Control>
                        <Click dir="right" />
                        <Recap>
                            <BoxItem text="Une boucle sert donc à répéter des instructions selon une condition" />
                            <BoxItem text="On a vu 2 façons de faire une boucle" />
                            <BoxItem text="Algo TANT QUE, while en js" />
                            <BoxItem text="déclaration avant boucle, condition entre (), incrémentation dans le corps de la boucle" />
                            <BoxItem text="Algo POUR, for en js" />
                            <BoxItem text="déclaration condition incrémentation dans la même ligne séparées par ;" />
                        </Recap>
                        <Transition>
                            <BoxItem text="pour que ça rentre bien, il faut qu'on pratique, allons jouer !" />
                        </Transition>
                        <Doc type="repo Boucles" url="http://localhost:1235/E02/Boucles/" />
                        <ListItem title="exo autonomie">
                            <Item text="Rien de tel qu'un 'tit exo" />
                            <Item text="On va se créer un nouveau repo Boucles, index, js/boucles" />
                        </ListItem>
                        <Exo>
                            <Enonce text="Créez un tableau vide" />
                            <Enonce text="Avec une boucle while ou une boucle for, remplissez ce tableau avec les chiffres de 0 à 9" />
                            <Enonce text="Affichez en console le tableau obtenu" />
                        </Exo>
                        <ListItem>
                            <Item text="On commence par déclarer notre tableau vide" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="repo Boucles">
                            <Code step={snippets.loops[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Question text="Ensuite, qu'est-ce qu'il faut qu'on fasse ?" />
                            <Item text="Il faut initialiser notre compteur" />
                        </ListItem>
                        <Demo type="repo Boucles">
                            <Code step={snippets.loops[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On a notre tableau pour stocker les résultats, on a notre compteur" />
                            <Question text="Je vous écoute, on fait quoi maintenant ?" />
                            <Item text="On va lancer la boucle" />
                        </ListItem>
                        <Demo type="repo Boucles">
                            <Code step={snippets.loops[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ma boucle est foireuse là" />
                            <BoxItem text="Qui peut me dire pourquoi ?" />
                        </Control>
                        <ListItem>
                            <Item text="Je n'ai pas incrémenté mon compteur !!!" />
                            <Item text="Je lance pas ma page, je corrige d'abord !" />
                        </ListItem>
                        <Demo type="repo Boucles">
                            <Code step={snippets.loops[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour finir, on va afficher un message pour vérifier combien d'éléments dans le tab" />
                        </ListItem>
                        <Demo type="repo Boucles">
                            <Code step={snippets.loops[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="C'est ok pour le while ? Clair pour vous ?" />
                        </Control>
                        <ListItem>
                            <Item text="Dans le coup, à vous de jouer pour le for" />
                        </ListItem>
                        <Demo type="repo Boucles">
                            <Code step={snippets.loops[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On déclare un autre tableau" />
                            <Item text="On lance le for avec init, condition et incrémentation" />
                            <Item text="On affiche le nb d'éléments dans le tableau" />
                        </ListItem>
                        <Control>
                            <BoxItem text="Ok pour vous le for ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="On a donc revu ensemble le principe des boucles" />
                            <BoxItem text="Avec while : compteur déclaré hors boucle, condition entre (), incrémentation dans la boucle" />
                            <BoxItem text="Avec for : déclaration, condition incrémentation entre () séparées par ;" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Encore une bonne journée !! Riche en nouveautés !" />
                            <BoxItem text="Vous allez repratiquer tout ça dans le challenge, on le regarde tout de suite" />
                        </Transition>
                        <ListItem title="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E02;