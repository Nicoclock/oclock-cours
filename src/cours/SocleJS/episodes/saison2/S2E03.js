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
                            <Item text="Dans notre code, ça nous évite de faire un premier prompt à l'extérieur de la boucle" />
                            <Item text="nbTries doit être initialisé à 0" />
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
            </div>
        </Fragment>
    );
}

export default S2E03;