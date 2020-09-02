import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Recap, Demo, BoxItem, Sondage} from "../../../common";
import {day5 as snippets} from "./Code/snippets";

import "../../style.scss"

const S1E05 = props => {
    let snippet = 0;
    return (
        <Fragment>
            <div className="Title">Position</div>
            <div className="Inner">
                <List>
                    <Card title="Correction" duration="2:00:00">
                        <Recap>
                            <BoxItem text="Pratique du box model et ses props" />
                            <BoxItem text="propriété display, ses valeurs et comportement des éléments" />
                            <BoxItem text="float pour intégrer au mieux un élément dans le flow" />
                            <BoxItem text="flexbox : nouveau type de layout, c'est le parent qui décide" />
                        </Recap>
                        <Sondage question="Et ce challenge alors ?" reponses={["au top, j'adore flexer sur FF", "ouais bon, flexbox à pratiquer encore", "moi j'aime pas la flexbox"]} />
                        <ListItem title="Mise en place">
                            <Item text="On va reprendre tout ça tranquillement" />
                            <Item text="On se crée d'abord les répertoires et fichiers qui vont bien" />
                            <Item text="On n'oublie pas d'ajouter le fichier reset.css pour la compat entre navigateurs" />
                            <Item text="On met en place le squelette html" />
                            <Item text="On y copie les textes fournis" />
                            <Item text="On ne va faire que 3 images ensemble, ça suffit pour piger la technique" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Sémantique">
                            <Item text="On met en place les balises sémantiques" />
                            <Question text="Comment vous avez découpé cette page ?" />
                            <Item text="Dessin à l'écran" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Raleway font">
                            <Item text="On nous dit de prendre la font Raleway sur googlefonts" />
                            <Item text="On va en prendre 2 versions, une normale et une bold" />
                            <Item text="On récupère le link et on le place dans le html" />
                            <Item text="On configure body dans le css pour que tous les éléments utilisent cette font" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem text="Balises header">
                            <Item text="On va déjà structurer le header de la page" />
                            <Item text="On a un titre/logo avec un bout de texte sur la même ligne et un sous-titre" />
                            <Item text="Pour le bout de texte faut quoi comme type de display ?" />
                            <Item text="Il doit être inline pour s'intégrer dans la phrase" />
                            <Item text="Nouvelle balise : span" />
                            <Item text="Sous-titre : une simple div avec le type de figurine dans un strong" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://css-tricks.com/bem-101/" />
                        <ListItem title="Intro BEM">
                            <Item text="Pourquoi j'ai nommé mes classes css comme ça ?" />
                            <Item text="J'utilise un standard de nommage : le BEM" />
                            <Item text="Block Element Modifier" />
                            <Item text="Pour chaque block de contenu, on donne une classe css" />
                            <Item text="Pour chaque élément qui le compose, class vaut class block__nom element" />
                            <Item text="Si un un block ou un élément a plusieurs versions (couleurs, forme, ...), modifier avec --" />
                            <Item text="Standard qui se répand, code css plus modulaire, les trucs qui font sens ensemble sont vite identifiables" />
                            <Item text="Ca permet de réutiliser des définitions d'un projet à l'autre" />
                            <Item text="Au niveau lisibilité, fichier css plus clair, plus facile à faire évoluer" />
                            <Item text="Pas toujours respecté (petits projets) mais ça vaut le coup de connaitre" />
                        </ListItem>
                        <ListItem title="Style header">
                            <Item text="On a donné nos noms de classes css, on va les écrire" />
                            <Item text="pour le header, on remarque :" />
                            <SubItem text="sur fond rouge" />
                            <SubItem text="texte en blanc" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style logo">
                            <Item text="Le h1 maintenant : oFig doit être bien gros, en gras et décollé du bord" />
                            <Item text="Le bout de texte à la suite en plus petit" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style sélection">
                            <Item text="Et pour le sous-titre, je vous écoute" />
                            <SubItem text="couleur de fond" />
                            <SubItem text="texte centré" />
                            <Item text="Pour la sélection courante" />
                            <SubItem text="un peu plus gros" />
                            <SubItem text="en italic" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style footer">
                            <Item text="On fait le footer vite fait" />
                            <Item text="On met le text dans un paragraphe" />
                            <Item text="Et pour le style on a :" />
                            <SubItem text="couleur de fond comme sous-titre" />
                            <SubItem text="taille du texte plus petite" />
                            <SubItem text="texte en blanc" />
                            <SubItem text="un peu de gras autour" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Balises item" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style item" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style item img" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style item content" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style item buy" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style main" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="On applique aux 2 autres items" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Toutes les images" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                    </Card>
                    <Card title="Positionnement" duration="3:00:00">
                        <ListItem title="Positionnement par défaut">
                            <Item text="Pour l'instant, on s'est pas occupé de la position des blocks" />
                            <Item text="Positionnement DANS un block avec flexbox" />
                            <Item text="Sinon, sans indication, les blocks se positionnent dans le flox, les uns à la suite des autres" />
                            <Item text="Comportement normal mais on peut souhaiter un autre layout" />
                            <Item text="Attribut css position va nous permettre de gérer plus finement" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/CSS/position" />
                        <ListItem title="Valeurs">
                            <Item text="Par défaut : static, le bloc prend sa place dans le flow, on peut pas intervenir" />
                            <Item text="On peut voir ça comme une file d'attente à l'aéroport : chacun son tour" />
                            <Item text="Autres valeurs moins rigides" />
                            <Item text="fixed : va figer un élément à une position à l'écran" />
                            <Item text="relative : on est toujours dans le flow, la file d'attente" />
                            <Item text="mais on peut se déplacer autour de notre place" />
                            <Item text="autres éléments gardent leur place" />
                            <Item text="absolute : n sort du flow, position par rapport à un élément parent positionné" />
                        </ListItem>
                        <ListItem title="Header accroché" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Pastilles soldes" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Cartouche soldes" />
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>

                    </Card>
                </List>
            </div>
        </Fragment>
    );
}

export default S1E05;