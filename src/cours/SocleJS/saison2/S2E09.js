import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Recap, Transition, Demo, BoxItem} from "../../../common";
import {day9 as snippets} from "./Code/snippets";

import "../../style.scss"

const S2E09 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };

    return (
        <Fragment>
            <div className="Title">Atelier solo</div>
            <div className="Inner">
                <Card title="Bilan" duration="1:00:00">
                    <List>
                        <Doc type="Slides" url="http://localhost:1234/s2/e9/recap-js" />
                        <ListItem title="Recap saison">
                            <Item text="Déjà vu pas mal de choses" />
                            <SubItem text="bases du langages" />
                            <SubItem text="structures de contrôle : conditions, boucles" />
                            <SubItem text="fonctions : rôle et utilité" />
                            <SubItem text="tableaux : stocker plusieurs valeurs" />
                            <SubItem text="objects : comment bien organiser son code" />
                            <SubItem text="Manip du DOM : document, events" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="A quoi ça sert ?" />
                        <Click dir="bottom x 2" />
                        <ListItem>
                            <Item text="JS pour gérer interactions avec utilisateur" />
                            <Item text="Actions user => événement en JS" />
                            <Item text="Modification du DOM en cours d'exécution" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Comment faire pour ...">
                            <Item text="On revoit en détail" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="...récupérer un élément">
                            <Item text="A vous, comment on fait ?" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem>
                            <Item text="Avec id : getElementById" />
                            <Item text="Avec CSS : querySelector" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="...modifier le contenu">
                            <Item text="2 solutions, lesquelles ?" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem>
                            <Item text="textContent : texte seulement" />
                            <Item text="innerHTML : texte + balises HTML" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="...modifier les attributs">
                            <Item text="Comment on accède aux attributs d'une balise ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem>
                            <Item text="récup élément" />
                            <Item text="accès aux attributs avec ." />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="...créer un élément">
                            <Item text="C'est quelle méthode ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem>
                            <Item text="createElement avec en arg le type de balise" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="...ajouter au DOM">
                            <Item text="Suffit pas de créer, on ajoute comment ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem>
                            <Item text="on rajoute un enfant à la cible" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="...réagir à une interaction">
                            <Item text="Pour exécuter du code lors d'une action du user, on doit ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem>
                            <Item text="rec eventListener" />
                            <SubItem text="string qui décrit l'evt à attendre" />
                            <SubItem text="fonction de rappel, callback avec code à exécuter" />
                            <SubItem text="arg par défaut fourni par JS : event" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="...stocker de l'info">
                            <Item text="tableau ou object" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem>
                            <Item text="tableau pour liste de valeurs" />
                            <Item text="object pour liste de paires clé/valeur" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="...organiser son code">
                            <Item text="le top de l'empaquetage, c'est ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem>
                            <Item text="object qui regroupe variables(propriétés ou champs) et logique(méthodes)" />
                            <Item text="point d'entrée de l'appli : méthode de l'object, souvent init" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Spécificités">
                            <Item text="Ce qui est propre à JS" />
                        </ListItem>
                        <Click dir="bottom" />
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/API/Console" />
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/debugger" />
                        <ListItem title="Outils">
                            <Item text="Console" />
                            <SubItem text="tester du code rapidement" />
                            <SubItem text="afficher plusieurs types de message" />
                            <SubItem text="nombreuses méthodes : cf la doc" />
                            <Item text="Debugger" />
                            <SubItem text="placement de points d'arrêt" />
                            <SubItem text="inspecter l'état de l'appli par étapes" />
                            <SubItem text="peut aider à trouver la ligne foireuse" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Types de vars">
                            <Item text="Attention aux types : JS très permissif, erreurs faciles" />
                            <Item text="Rappel : number + string => string" />
                            <Item text="Soyons vigilants !" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Autre outil super pratique" />
                        <Click dir="bottom" />
                        <ListItem>
                            <Item text="Le linter : vérificateur de code" />
                            <Item text="Correcteur orthographique pour JS" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem>
                            <Item text="Intégré à VSCode via plugin" />
                            <Item text="Checkez autres plugons dispos, linter pour pleins d'autre langages" />
                        </ListItem>
                        <Click dir="bottom" />
                        <Doc type="Ressource" url="https://eslint.org/docs/user-guide/" />
                        <ListItem>
                            <Item text="Fichier de config minimaliste" />
                            <Item text="Réglages très fins possibles : cf doc" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="'tite rétrospective pour rafraichir les mémoires" />
                            <BoxItem text="Pas tout vu, loin de là !" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Pas vu comment gérer le temps" />
                            <BoxItem text="Principe un peu similaire au callbacks" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Timeout et Interval" duration="0:30:00">
                    <List>
                        <ListItem title="facteur temps">
                            <Item text="toujours un facteur temps dans une exécution" />
                            <Item text="JS nous permet d'utiliser ce temps qui passe" />
                            <Item text="Fournit des mécanismes pour :" />
                            <SubItem text="Exécuter du code au bout de X millisecondes : setTimeout" />
                            <SubItem text="Exécuter du code toutes les X millisecondes : setInterval" />
                        </ListItem>
                        <Doc type="repo Demo" url="http://localhost:1235/E09/Demo/Timeout/html/" />
                        <ListItem text="setTimeout">
                            <Item text="signature : fonction à exécuter, délai" />
                            <Item text="exécution au bout de delai milliseconds" />
                        </ListItem>
                        <Demo type="repo Demo">
                            <Code step={snippets.timeout[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.timeout[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.timeout[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.timeout[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.timeout[snippet++]} />
                        </Demo>
                        <Doc type="repo Demo" url="http://localhost:1235/E09/Demo/Interval/html/" />
                        <ListItem text="setInterval">
                            <Item text="même principe : fonction à exécuter, délai" />
                            <Item text="Cette fois, exécution toutes les x milliseconds" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="repo Demo">
                            <Code step={snippets.interval[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.interval[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.interval[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.interval[snippet++]} />
                        </Demo>
                    </List>
                </Card>
                <Card title="Spread operator" duration="0:30:00">
                    <List>
                        <ListItem title="Nouvel opérateur ES6">
                            <Item text="Permet d'accéder très vite aux valeurs d'un object ou d'un tableau" />                            
                            <Item text="Pas facile avec des mots, faisons une démo" />                            
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition" />
                        {console.log(resetSnippet())}
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                        <Demo type="repo Demo">
                            <Code step={snippets.spread[snippet++]} />
                        </Demo>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E09;