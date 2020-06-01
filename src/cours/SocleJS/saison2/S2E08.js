import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce, ExoSondage, Snippet} from "../../../common";
import {invaders} from "./Code/challenges";
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
                        <Code step={snippets.let[snippet++]} />
                    </Demo>
                    <Exo>
                        <Enonce text="On a le code suivant :" />
                        <Snippet lines={snippets.let[snippet++].code} />
                        <ExoSondage question="Ce code est-il correct ?" reponses={['bah ... oui', 'bah ... non', 'bah ... j\'en sais rien']} />
                    </Exo>
                    <Exo>
                        <Enonce text="On a le code suivant :" />
                        <Snippet lines={snippets.let[snippet++].code} />
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
                        <Item text="Autre point de syntaxe ES6" />
                        <Item text="Ecrire des fonctions de façon plus concise" />
                        <Item text="Cosmétique, comportement sera le même mais code plus léger" />
                    </ListItem>
                    <Doc type="repo Demo" url="http://localhost:1235/Demos/ArrowFunctions/html/" />
                    {console.log(resetSnippet())}


                </List>
            </div>
        </Fragment>
    );
}

export default S2E08;