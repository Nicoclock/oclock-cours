import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem} from "../../../../common";
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
                        <Tansition>
                            <BoxItem text="On va essayer de pousser un peu plus" />
                            <BoxItem text="Temps d'utiliser toutes les possibilités d'un object" />
                            <BoxItem text="En plus des infos, on va y mettre la logique du jeu" />
                        </Tansition>
                    </List>                    
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E04;