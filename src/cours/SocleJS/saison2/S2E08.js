import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce, ExoSondage, Snippet} from "../../../common";
import {rpg} from "./Code/challenges";
import {day8 as snippets} from "./Code/snippets";

import "../../style.scss"

const S2E08 = props => {
    let challenge = 0;
    let snippet = 0;

    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Vers ES6</div>
            <div className="Inner">
                <Card title="ES6" duration="1:00:00">
                    <List>
                        <Control>
                            <BoxItem text="'tit sondage habituel" />
                            <BoxItem text="Vous l'avez vécu comment ce challenge ?" />
                            <Sondage question="J'ai trouvé ça : " reponses={[
                                "trop facile",
                                "m'en suis tiré",
                                "j'ai galéré !",
                                "z'êtes malades !!",
                                "papu/pasu/pavoulu"
                            ]} />
                        </Control>
                        <ListItem title="Scope des variables">
                            <Item text="On va revoir tout ça ensemble" />
                            <Item text="D'abord, on va parler un peu d'ES6" />
                            <Item text="JS très vivant, nombreuses modifs au fil des années" />
                            <Item text="Jusqu'ici, syntaxe ES5, compatible avec tous les navigateurs" />
                            <Item text="Intro sur 2 nouvelles façons de déclarer des variables, spec ES6" />
                            <Item text="Contrôle caniuse, très bien supporté" />
                            <Item text="Petit exemple vite fait" />
                        </ListItem>
                        <Doc type="repo Demo" url="http://localhost:1235/Demos/Let/html/" />
                        <Demo type="repo Demo">
                            <Code step={snippets.let[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.let[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.let[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.let[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.let[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.let[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.let[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="On a le code suivant :" />
                            <Snippet lines={snippets.let[snippet++].code} />
                            <ExoSondage question="Que va afficher le console.log ?" reponses={['l\'heure', '10', 'undefined']} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a le code suivant :" />
                            <Snippet lines={snippets.let[snippet++].code} />
                            <ExoSondage question="Ce code pose-t-il problème ?" reponses={['oui, on a 2 fois let x', 'non, ça passe']} />
                        </Exo>
                        <Control>
                            <BoxItem text="Ok pour vous let ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="A retenir : let est définie dans le bloc, var au niveau global" />
                            <BoxItem text="reste : même comportement : déclarer sans assigner et modifier sa valeur" />
                        </Recap>
                        <ListItem title="Variables read-only">
                            <Item text="On sait qu'une valeur ne va pas changer" />
                            <Item text="On stocke dans une const, évite de modifier par erreur" />
                            <Item text="On ne peut assigner qu'une seule fois avec =" />
                            <Item text="Encore petit exemple" />
                        </ListItem>
                        <Doc type="repo Demo" url="http://localhost:1235/Demos/Const/html/" />
                        {console.log(resetSnippet())}
                        <Demo type="repo Demo">
                            <Code step={snippets.const[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.const[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.const[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.const[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="On a le code suivant :" />
                            <Snippet lines={snippets.const[snippet++].code} />
                            <ExoSondage question="Ce code est-il correct ?" reponses={['bah ... oui', 'bah ... non', 'bah ... j\'en sais rien']} />
                        </Exo>
                        <Exo>
                            <Enonce text="On a le code suivant :" />
                            <Snippet lines={snippets.const[snippet++].code} />
                            <ExoSondage question="Ce code est-il correct ?" reponses={['bah ... oui', 'bah ... non', 'bah ... j\'en sais rien']} />
                        </Exo>
                        <Control>
                            <BoxItem text="Ok pour const ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="A retenir : const est définie dans le bloc" />
                            <BoxItem text="Pas de ré-assignation à la même référence, au même nom" />
                            <BoxItem text="Assignation d'une valeur obligatoire à la déclaration" />
                            <BoxItem text="Bien différencier ref, nom d'une variable et son contenu" />
                        </Recap>
                        <ListItem title="Arrow functions">
                            <Item text="Dernier point de syntaxe ES6 avant d'attaquer" />
                            <Item text="Ecrire des fonctions de façon plus concise" />
                            <Item text="Cosmétique, comportement sera le même mais code plus léger" />
                        </ListItem>
                        <Doc type="repo Demo" url="http://localhost:1235/Demos/ArrowFunctions/html/" />
                        {console.log(resetSnippet())}
                        <Demo type="repo Demo">
                            <Code step={snippets.arrow[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.arrow[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Juste de la cosmétique, c'est toujours une fonction" />
                            <BoxItem text="Code plus concis, plus clair" />
                            <BoxItem text="Attention aux excès, toujours privilégier la clarté" />
                        </Recap>
                    </List>
                </Card>
                <Card title="RGP" duration="4:00:00">
                    <List>
                        <ListItem title="Correction">
                            <Item text="Cette fois on attaque" />
                        </ListItem>
                        <Doc type="repo Correction" url="http://localhost:1235/E08/Correction" />
                        <ListItem title="Modif HTML">
                            <Item text="Création div#board" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="init en arrow">
                            <Item text="Passons déjà la function init en arrow function" />
                            <Item text="Ca change rien, on s'entraîne" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Player et target">
                            <Item text="Modif app : ajout des props" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="drawBoard">
                            <Item text="Ajout fonction drawBoard : lignes" />
                            <Item text="Appel dans init" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Cells">
                            <Item text="Ajout nouveau for pour les cases" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="CSS row et cell">
                            <Item text="Ajout de style pour voir quelque chose" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Logique affichage">
                            <Item text="Ajout de logique pour player et targetCell" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Style target" />
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="ClearBoard" />
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="RedrawBoard" />
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Switch">
                            <Item text="Avant de continuer, alternative à if else : switch" />
                        </ListItem>
                        <Doc type="repo Demo" url="http://localhost:1235/Demos/Switch/html/" />
                        {console.log(resetSnippet())}
                        <Demo type="repo Demo">
                            <Code step={snippets.switch[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.switch[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Même effet que if" />
                            <BoxItem text="Utile quand on connait plusieurs valeurs possibles" />
                            <BoxItem text="Ne pas oublier le break pour sortir du switch" />
                        </Recap>
                        <ListItem title="Retour challenge">
                            <Item text="Appliquons ça pour turnLeft et turnRight" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Effet visuel">
                            <Item text="Pour l'instant, fonctions changent prop de l'object player" />
                            <Item text="Pas d'effet à l'écran" />
                            <Item text="Modif drawBoard pour prise compte" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="CSS correspondant" />
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="MoveForward">
                            <Item text="Besoin d'étudier la direction pour avancer : switch" />
                            <Item text="A chaque étape, vérif qu'on ne sort pas de la board" />
                            <Item text="Log de nos actions, on utilise une nouvelle forme de concaténation" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Littéraux_gabarits" />
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Auto redraw">
                            <Item text="Constat : à chaque modif du player, on doit redraw" />
                            <Item text="Appelons directement app.redrawBoard" />
                        </ListItem>
                        <ListItem title="Keyboard events" />
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Game over">
                            <Item text="Ajout de la prop gameOver à false" />
                            <Item text="Modif de turnRight, turnLeft, moveForward" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="isGameOver">
                            <Item text="On n'oublie pas de l'appeler à la fin de drawBoard, après la double boucle" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 1">
                            <Item text="Ajout prop nbMoves à l'object" />
                            <Item text="Init à zéro" />
                            <Item text="Incrémentation dans chaque méthode de move" />
                            <Item text="Modif message gagné" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 2">
                            <Item text="On passe la board en class .beautiful" />
                            <Item text="On redéfinit le CSS pour le player avec nouveau sélecteur" />
                            <Item text="On part sur un bg de 70px de haut, largeur auto" />
                            <Item text="On adapter les class --modifier" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={rpg.etapes[challenge++]} />
                        </Demo>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E08;