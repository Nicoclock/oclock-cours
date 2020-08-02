import React, {Fragment} from "react";

import {Card, Code, List, ListItem, Item, Control, Recap, Demo, BoxItem, Sondage, Git} from "../../../common";
import {simon} from "./Code/challenges";

import "../../style.scss"

const S2E10 = () => {
    let challenge = 0;
    return (
        <Fragment>
            <div className="Title">Révisions</div>
            <div className="Inner">
                <Card title="Simon Game">
                    <List>
                        <ListItem title="Séance de révision">
                            <Item text="on fait ensemble un Simon Game" />
                            <Item text="Récupérez le repo déjà" />
                            <Item text="Un bon 1/4 d'heure : lisez l'énoncé, regardez le code fourni" />
                        </ListItem>
                        <Sondage question="J'ai récupéré le repo" reponses={["yep", "nope"]} />
                        <ListItem title="Etape 1">
                            <Item text="Pas d'erreur en console mais rien à l'écran" />
                            <Item text="Le script est chargé pourtant : regardons le prog principal" />
                            <Item text="On retrace ce qui est sensé se passer" />
                            <Item text="Problème sur le point d'entrée" />
                        </ListItem>
                        <Sondage question="Etape 1" reponses={["ok c'est bon", "je laisse tomber"]} />
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <Git commit="Etape 1" />
                        <ListItem title="Etape2">
                            <Item text="On identifie la méthode : showMessage" />
                            <Item text="On identifie l'id du bouton à cacher : go" />
                            <Item text="Récup dans JS et modif de style.display" />
                        </ListItem>
                        <Sondage question="Etape 2" reponses={["ok c'est bon", "je laisse tomber"]} />
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Même principe pour hideMessage" />
                            <Item text="On modifie style.display pour les message et pour le bouton" />
                            <Item text="Test en console" />
                        </ListItem>
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <Demo type="Console">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Souci, quelqu'un voit se qui peut clocher ?" />
                            <Item text="Dans showMessage, on gère pas le display du texte" />
                            <Item text="Marche le 1er coup mais pas après, message reste en display none" />
                        </ListItem>
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <Git commit="Etape 2" />
                        <ListItem title="Etape 3">
                            <Item text="Pas de feinte, on applique juste l'énoncé" />
                        </ListItem>
                        <Sondage question="Etape 3" reponses={["ok c'est bon", "je laisse tomber"]} />
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <Git commit="Etape 3" />
                        <ListItem title="Etape 4">
                            <Item text="on ajoute une propriété indice à 0 dans l'object" />
                        </ListItem>
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant, ajouter un listener sur les cases pour écouter le click" />
                            <Item text="Faut trouver dans le code où les cases sont générées" />
                            <Item text="On en profite pour ajouter le listener" />
                        </ListItem>
                        <Sondage question="Etape 4" reponses={["ok c'est bon", "je laisse tomber"]} />
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On crée notre callback en suivant l'énoncé" />
                            <Item text="bumpCell a besoin de la couleur, où on la trouve ?" />
                            <Item text="Dans callback, accès à la case avec event.target" />
                            <Item text="La couleur est pas dans une des propriétés ?" />
                            <Item text="Pour le reste, on écrit l'algo et on implémente" />
                            <Item text="Indice nous sert comme index du tab sequence" />
                        </ListItem>
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <Git commit="Etape 4" />
                        <ListItem title="Etape 5">
                            <Item text="nextMove : on ajoute une couleur à la séquence" />
                            <Item text="On pense bien à remettre indice à 0 pour relire la séquence du début" />
                            <Item text="On redonne la parole à Simon après léger timeout pour UX" />
                        </ListItem>
                        <Sondage question="Etape 5" reponses={["ok c'est bon", "je laisse tomber"]} />
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <Git commit="Etape 5" />
                        <ListItem title="Etape 6">
                            <Item text="On met le message quand Simon prend la parole" />
                            <Item text="Où on sait que c'est au player de causer ?" />
                            <Item text="On est dans le if tant que la séquence n'est pas finie" />
                            <Item text="On ajoute un else : la séquence est finie, c'est au tour du player" />
                        </ListItem>
                        <Sondage question="Etape 6" reponses={["ok c'est bon", "je laisse tomber"]} />
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <Git commit="Etape 6" />
                        <ListItem title="Etape 7">
                            <Item text="Simon a fini de parler, on sait où c'est dans le code" />
                            <Item text="setTimeout retourne une référence" />
                            <Item text="Il faut la stocker pour pouvoir utiliser clearTimeout" />
                        </ListItem>
                        <Sondage question="Etape 7" reponses={["ok c'est bon", "je laisse tomber"]} />
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <Git commit="Etape 7" />
                        <ListItem title="Bonus">
                            <Item text="On va utiliser une nouvelle prop. De quel type ?" />
                            <Item text="Quand Simon parle, on la passe à true" />
                            <Item text="Quand il a fini, on la passe à false" />
                            <Item text="Il faut empêcher le traitement de playerSays quand la prop est à true" />
                        </ListItem>
                        <Sondage question="Bonus" reponses={["ok c'est bon", "je laisse tomber"]} />
                        <Demo type="repo Simon">
                            <Code step={simon.etapes[challenge++]} />
                        </Demo>
                        <Git commit="Bonus" />
                        <Control>
                            <BoxItem text="Comment ça va ? Vous voyez le principe pour ce genre d'exo ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="1ère étape : analyse de l'existant pour se familiariser" />
                            <BoxItem text="Pour chaque point de l'énoncé, 2 questions" />
                            <BoxItem text="Comment je fais ce qui est demandé ?" />
                            <BoxItem text="Comment je l'intègre dans le code existant, modification ou création ?" />
                        </Recap>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E10;