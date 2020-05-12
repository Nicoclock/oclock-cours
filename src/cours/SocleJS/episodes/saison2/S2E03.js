import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem} from "../../../../common";
import * as code from "../../code";

import "../../../style.scss"

const S2E03 = props => {
    return (
        <Fragment>
            <div className="Title">Objets</div>
            <div className="Inner">
                <Card title="Correction">
                    <Doc type="repo CHallengeS2E02" url="http://localhost:1235/E02/ChallengeS2E02/html/" />
                    <List>
                        <Recap>
                            <BoxItem text="Hier on a donc vu :" />
                            <BoxItem text="Principe de la fonction, factorisation du code" />
                            <BoxItem text="Principe des tableaux, stocker plusieurs valeurs dans une même variable" />
                            <BoxItem text="Enfin, on a découvert les boucles while et for" />
                        </Recap>
                        <Control>
                            <BoxItem text="Ce challenge alors ? Vous avez souffert ?" />
                            <BoxItem text="Sondage : J'ai trouvé ça : trop facile, m'en suis tiré, j'ai galléré, z'êtes malades !!" />
                            <BoxItem text="Sondage : exo fini : oui/presque/non" />
                            <BoxItem text="Sondage : bonus fini : oui/presque/non" />
                        </Control>
                        <Transition>
                            <BoxItem text="On regarde tout ça ensemble" />
                        </Transition>
                        <ListItem title="Correction - 1">
                            <Item text="On commence par créer une constante MAX initialisée à 500" />
                            <Item text="On crée notre nombre aléatoire à deviner :" />
                            <SubItem text="On utilise Math.random pour avoir la partie aléatoire entre 0 et 1" />
                            <SubItem text="On l'applique à notre fouchette en multipliant random et MAX" />
                            <SubItem text="On l'arrondit avec Math.round pour avoir un nombre entier" />
                            <SubItem text="On peut détailler les étapes ou mettre tout dans la même instruction, plus concis" />
                        </ListItem>
                        <Demo type="repo ChallengeS2E02">
                            <Code language="JavaScript" code={code.randomNumber} />
                        </Demo>
                        <ListItem title="Correction - 2">
                            <Item text="On a notre nombre aléatoire, on va demander à l'utilisateur de saisir un nombre" />
                            <Item text="On stocke cette saisie dans une variable en number" />
                            <Item text="On est des pros maintenant, je mets ça sur une seule ligne" />
                            <Item text="J'utilise MAX dans la question. Si on change de fourchette, on aura juste MAX à modifier" />
                        </ListItem>
                        <Demo type="repo ChallengeS2E02">
                            <Code language="JavaScript" code={code.randomInput} />
                        </Demo>
                        <ListItem title="Correction - 3">
                            <Item text="On a notre nombre aléatoire, on a le nombre choisi par l'utilisateur" />
                            <Question text="Et maintenant ? Qu'est-ce qu'on fait ?" />
                            <Item text="TANT QUE randomNumber et userGuess ne sont pas égaux, on demande un nouveau nombre à l'utilisateur" />
                            <Item text="TANT QUE randomNumber est différent de userGuess, on demande un nouveau nombre à l'utilisateur" />
                            <Item text="On a pas vu cet opérateur différent de, vous l'avez trouvé ? C'est !==" />
                            <Item text="Dans ce cas, c'est pas un compteur à incrémenter" />
                            <Item text="La valeur de userGuess va changer à chaque tour de boucle, chaque itération" />
                            <Item text="Quand randomNumber et userGuess sont égaux, la condition passe à false, on sort de la boucle" />
                        </ListItem>
                        <Demo type="repo ChallengeS2E02">
                            <Code language="JavaScript" code={code.randomWhile} />
                        </Demo>
                        <ListItem title="Correction - 4">
                            <Item text="Le plus gros de la boucle est fait mais c'est un peu sommaire" />
                            <Item text="Déjà on peut avoir un problème avec la saisie de l'utilateur" />
                            <Question text="Est-ce que vous voyez lequel ?" />
                            <Item text="Y a des p'tits malins chez les utilateurs ..." />
                            <Item text="Faut vérifier que la saisie est bien un nombre" />
                            <Item text="Si ce n'est pas un nombre, on affiche un message d'erreur" />
                            <Question text="Vous vous souvenez comment faire pour tester si c'est pas un nombre?" />
                            <Item text="On va tester : SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur" />
                        </ListItem>
                        <Demo type="repo ChallengeS2E02">
                            <Code language="JavaScript" code={code.randomNan} />
                        </Demo>
                        <ListItem title="Correction - 5">
                            <Item text="Tel quel le jeu est un peu compliqué, ça peut être très long de trouver" />
                            <Item text="On va mettre une indication en console pour aider l'utilisateur" />
                            <Item text="SI randomNumber est plus grand que userGuess ALORS on affiche Le nombre à deviner est plus grand" />
                            <Item text="SINON SI randomNumber est plus petit que userGuess ALORS on affiche Le nombre à deviner est plus petit" />
                            <Item text="On a déjà un premier SI avec le test NaN, on va les enchainer" />
                            <Item text="Algo complet :" />
                            <SubItem text="SI la saisie n'est pas un nombre ALORS on affiche un message d'erreur" />
                            <SubItem text="SINON SI randomNumber est plus grand que userGuess ALORS on affiche Le nombre à deviner est plus grand" />
                            <SubItem text="SINON SI randomNumber est plus petit que userGuess ALORS on affiche Le nombre à deviner est plus petit" />
                        </ListItem>
                        <Demo type="repo ChallengeS2E02">
                            <Code language="JavaScript" code={code.randomWhileFull} />
                        </Demo>
                        <ListItem title="Correction - 6">
                            <Item text="Bon c'est super tout ça mais quand on sort de la boucle il se passe rien" />
                            <Item text="On rajoute un 'tit message pour dire à l'utilisateur qu'il a trouvé" />
                        </ListItem>
                        <Demo type="repo ChallengeS2E02">
                            <Code language="JavaScript" code={code.randomWin} />
                        </Demo>
                        <Control>
                            <BoxItem text="On est pas mal pour cet exo, c'est bon pour vous ? Des question ?" />
                        </Control>
                        <ListItem title="Correction - 7">
                            <Item text="Il nous reste le bonus : compter le nombre d'essai" />
                            <Question text="Dites-moi tout, comment on fait ça ?" />
                            <Item text="On déclare nbTries = 1 juste après le premier prompt" />
                            <Item text="Si on passe dans la boucle, c'est un essai supplémentaire, on incrémente" />
                        </ListItem>
                        <Demo type="repo ChallengeS2E02">
                            <Code language="JavaScript" code={code.randomFull} />
                        </Demo>
                        <Control>
                            <BoxItem text="Voilà pour ce challenge, on a tout fait on est bon" />
                            <BoxItem text="Si vous avez eu du mal, est-ce que c'est plus clair ?" />
                        </Control>
                        <ListItem title="Correction - 8">
                            <Item text="Juste pour info, on a une autre façon d'écrire un while" />
                            <Item text="Au lieu de dire TANT QUE(condition) {...instructions}" />
                            <Item text="On va dire FAIRE {...instructions} TANT QUE (condition)" />
                            <Item text="En faisant ça, on passe dans la boucle au moins une fois" />
                            <Item text="La condition est évaluée à la fin de l'itération" />
                        </ListItem>
                        <Demo type="repo ChallengeS2E02">
                            <Code language="JavaScript" code={code.randomDoWhile} />
                        </Demo>
                        <Transition>
                            <BoxItem text="Maintenant qu'on est bon là-dessus, revenons un peu sur les fonctions" />
                            <BoxItem text="Je vous ai pas tout dit ..." />
                            <BoxItem text="On sait déjà comment déclarer une fonction et la configurer avec des paramètres" />
                            <BoxItem text="Mais elle peut aussi nous renvoyer des informations" />
                            <BoxItem text="On va voir ça tout de suite" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Fonctions avancées">
                    <Doc type="Slides" url="http://localhost:1234/s2/e3/fonction-II" />
                    <ListItem title="Les fonctions avancées">
                        <Item text="Ca fait sérieux là !!" />
                        <Item text="N'ayez pas peur, ça va bien se passer" />
                    </ListItem>
                    <Click dir="right" />
                    <ListItem title="Paramètres et arguments">
                        <Item text="Bon, ça c'est pas nouveau, juste quelques précisions à apporter" />
                    </ListItem>
                    <Click dir="bottom" />
                    <ListItem title="Fonction hello">
                        <Item text="On a donc une fonction hello qui prend info en paramètre" />
                        <Item text="A l'appel, on lui passe monsieur en argument" />
                        <Item text="Dans la fonction, info prendra la valeur de monsieur" />
                        <Item text="Jusque là, pas de surprise" />
                    </ListItem>
                    <Click dir="bottom" />
                    <ListItem title="Fonction hello - 2 args">
                        <Item text="On l'a vu rapidement hier, une fonction peut avoir plusieurs paramètres" />
                        <Item text="A l'appel, chaque paramètre prendra la valeur de l'argument dans le même ordre" />
                        <Item text="Message aura pour valeur coucou, info aura pour valeur monsieur" />
                        <Item text="Rien de bien transcendant non plus ..." />
                    </ListItem>
                    <Click dir="bottom" />
                    <ListItem title="Params par défaut">
                        <Item text="Ah ! Quelque chose de nouveau" />
                        <Item text="En JS, on n'est pas obligé d'utiliser tous les paramètres d'un fonction quand on l'appelle" />
                        <Item text="Ca fait pas d'erreur, le langage est très permissif" />
                        <Item text="Mais dans le code de la fonction ça peut poser problème" />
                        <Item text="Si l'argument est manquant, la valeur du paramètre sera undefined" />
                        <Item text="On peut éviter ça en lui donnant une valeur par défaut, de remplacement" />
                        <Item text="On la note dans la déclaration en faisant suivre le nom du param de = valeur" />
                        <Item text="Ici c'est une string, ça peut être n'importe quel type" />
                    </ListItem>
                    <Control>
                        <BoxItem text="Ok pour vous, vous voyez l'intérêt ?" />
                    </Control>
                    <Click dir="right" />
                    <ListItem title="Retour à l'envoyeur">
                        <Item text="Je vous le disais en intro, une fonction va aussi pouvoir nous renvoyer des infos" />
                    </ListItem>
                    <Click dir="bottom" />
                    <ListItem title="Retour à hello">
                        <Item text="Reprenons notre fonction hello" />
                        <Item text="Vous comprenez son code, elle fait juste un console.log, elle ne renvoie pas d'info" />
                        <Item text="On dit qu'elle ne retourne rien" />
                    </ListItem>
                    <Click dir="bottom" />
                    <ListItem title="Retour à hello - 2">
                        <Item text="Ca veut dire quoi ?" />
                        <Item text="Si on assigne l'appel de la fonction dans une variable, elle prendra la valeur undefined" />
                        <Item text="La fonction n'a pas retourné d'infos, on n'a rien à mettre dans la variable" />
                    </ListItem>
                    <Click dir="bottom" />
                    <ListItem title="Retour à hello - 3">
                        <Item text="Ce serait pourtant bien pratique" />
                        <Item text="Regardez l'exemple : on aimerait bien factoriser la logique et obtenir une valeur en retour" />
                        <Item text="Pour l'instant, tout ce qu'on obtient c'est undefined" />
                    </ListItem>
                    <Click dir="bottom" />
                    <ListItem title="Hello with return">
                        <Item text="Si on regarde ce nouveau code, on voit tout de suite le mot-clé return" />
                        <Item text="Ce qu'on a après, c'est justement la valeur qu'on obtiendra en appelant la fonction" />
                        <Item text="Ici, on aura la string Bonjour monsieur !" />
                        <Item text="On pourra stocker cette valeur de retour, la string, dans une variable" />
                        <Item text="On pourra utiliser cette variable où bon nous semble après" />
                        <Item text="Comme pour les params par defaut, ici on retourne une string" />
                        <Item text="La valeur retournée peut être de n'importe quel type" />
                    </ListItem>
                    <Control>
                        <BoxItem text="Des question sur return ? On est bon ?" />
                    </Control>
                    <Recap>
                        <BoxItem text="On a revu comment configurer une fonctions" />
                        <BoxItem text="On peut mettre plusieurs paramètres dans sa déclaration" />
                        <BoxItem text="On peut donner des valeurs par défaut à chaque paramètre" />
                        <BoxItem text="Une fonction peut nous retourner des informations avec return" />
                    </Recap>
                    <Transition>
                        <BoxItem text="Assez de blah blah, j'ai des fourmis dans les doigts" />
                        <BoxItem text="Du code du code" />
                    </Transition>
                    <Doc type="repo CHallengeS2E02" url="http://localhost:1235/E02/ChallengeS2E02/html/" />
                    <ListItem title="Exo autonomie">
                        <Item text="Repartons de notre beau code du dernier challenge" />
                        <Item text="Faisons un peu de refactoring" />
                        <Item text="On va se créer une fonction qui va prendre en charge :" />
                        <SubItem text="La demande de saisie d'un nombre à l'utilisateur" />
                        <SubItem text="La validation que la saisie est bien un nombre" />
                        <SubItem text="Si c'est un nombre, la fonction doit retourner le nombre saisi en type number" />
                        <SubItem text="Sinon, elle retournera -1" />
                        <Item text="A vous de jouer, comment on fait ça ?" />
                    </ListItem>
                    <ListItem title="Exo dirigé">
                        <Item text="Déjà, on déclare notre nouvelle fonction" />
                        <Question text="Est-ce qu'on a besoin de paramètres ?" />
                        <Item text="Pas de paramètres ici" />
                        <SubItem text="On déclare la variable userGuess et on l'assigne avec la valeur du prompt" />
                        <SubItem text="On convertit en number avec Number ou parseInt" />
                        <SubItem text="Et on teste : SI pas un nombre ALORS on retourne -1 SINON on retourne le nombre" />
                    </ListItem>
                    <Demo type="repo ChallengeS2E02">
                        <Code language="JavaScript" code={code.getNumber} />
                    </Demo>
                    <ListItem title="Exo dirigé - 2">
                        <Item text="Maintenant, faut appaler notre nouvelle fonction dans la boucle while" />
                        <Question text="Je vous écoute, qu'est-ce que je tape ?" />
                    </ListItem>
                    <Demo type="repo ChallengeS2E02">
                        <Code language="JavaScript" code={code.randomWithGetNumber} />
                    </Demo>
                    <Control>
                        <BoxItem text="Des questions là-dessus ?" />
                    </Control>
                    <ListItem title="Exo dirigé - 3">
                        <Item text="Si tout est clair, on va s'enrefaire une petite" />
                        <Item text="Je voudrais qu'on mette dans une fonction la logique des autres messages d'erreur" />
                        <Item text="Je vous donne la déclaration de la fonction" />
                        <Item text="Votre mission, si vous l'acceptez :" />
                        <SubItem text="Implémenter la fonction" />
                        <SubItem text="L'appeler dans notre code" />
                        <SubItem text="On se retrouve dans 5 minutes ?" />
                    </ListItem>
                    <Demo type="repo ChallengeS2E02">
                        <Code language="JavaScript" code={code.checkNumbersDeclare} />
                    </Demo>
                    <ListItem title="Exo dirigé - 4">
                        <Item text="OK, on commence par copier coller les instrucctions qui nous intéressent dans le corps de la fonction" />
                        <Item text="On remplace les noms des variables par les noms des paramètres" />
                        <Item text="Et c'est tout pour la fonction" />
                    </ListItem>
                    <Demo type="repo ChallengeS2E02">
                        <Code language="JavaScript" code={code.checkNumbers} />
                    </Demo>
                    <ListItem title="Exo dirigé - 5">
                        <Item text="Pour finir, on met l'appel à notre fonction dans la boucle" />
                        <Item text="La paramètre guess aura la valeur de userGuess" />
                        <Item text="La paramètre random aura la valeur de randomNumber" />
                    </ListItem>
                    <Demo type="repo ChallengeS2E02">
                        <Code language="JavaScript" code={code.randomWhileDef} />
                    </Demo>
                    <Control>
                        <BoxItem text="C'est bon pour tout le monde ?" />
                        <BoxItem text="Vraiment n'hésitez pas à poser des questions" />
                        <BoxItem text="Faut bien comprendre ce mécanisme pour la suite" />
                    </Control>
                    <Recap>
                        <BoxItem text="Vous voyez le code tout propre qu'on a maintenant ?" />
                        <BoxItem text="On a segmenté chaque partie de l'algo dans une fonction dédiée" />
                        <BoxItem text="Nous les devs, On adore ça, empaqueter le code !" />
                    </Recap>
                    <Transition>
                        <BoxItem text="Bon, on a fait un bon 'tit tour des fonctions" />
                        <BoxItem text="On va continuer dans l'art d'empaqueter avec un nouveau type de variable : les Objects" />
                        <BoxItem text="Vous êtes prêts ? Alors accrochez vous, on décole !" />
                    </Transition>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E03;