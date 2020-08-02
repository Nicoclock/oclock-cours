import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Demo,} from "../../../common";
import {day1 as snippets} from "./Code/snippets";

import "../../style.scss"

const S5E01 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Gestion de projet appliquée</div>
            <div className="Inner">
                <Card title="oQuizz - Gestion de projet" duration="3:00:00">
                    <List>
                        <ListItem title="Alors, cette saison 4 ?">
                            <Item text="Découverte des BDD, de PostgreSQL" />
                            <Item text="Gestion de projet, organisation du code" />
                        </ListItem>
                        <ListItem title="Maintenant, la saison 5 ...">
                            <Item text="On va continuer à gratter la gestion de projet" />
                            <Item text="Nouveau support, projet oQuiz" />
                            <Item text="Nouveau mode d'empaquetage : les classes" />
                            <Item text="Organisation du code, architecture" />
                        </ListItem>
                        <ListItem title="Today">
                            <Item text="On a une demande client qu'on va décortiquer ensemble" />
                            <Item text="A partir des infos, lister les cas d'utilisation" />
                            <Item text="Quelques wireframes pour savoir où on va" />
                            <Item text="On va déterminer les entités qui nous seront nécessaires" />
                            <Item text="Création du MCD avec MoCoDo" />
                        </ListItem>
                        <Doc type="Resosurce" url="http://localhost:1235/E01/oQuiz.mp4" />
                        <ListItem title="Vidéo">
                            <Item text="Prenons des notes !" />
                            <SubItem text="Création plateforme de quiz" />
                            <SubItem text="Elève se connecte à une interface pour répondre" />
                            <SubItem text="Structure d'un quiz : titre, thématique, sujets liés, auteur" />
                            <SubItem text="Question : réponses possibles, contexte : anecdote/wiki, difficulté" />
                            <SubItem text="Après quiz, affichage score" />
                            <SubItem text="Pas de stockage des scores" />
                        </ListItem>
                        <ListItem title="Cas d'utilisation">
                            <Item text="On va se faire un tableau" />
                            <SubItem text="En tant que" />
                            <SubItem text="J'ai besoin de" />
                            <SubItem text="Afin de" />
                            <SubItem text="Sprint" />
                        </ListItem>
                        <Demo type="useCases.md">
                            <Code step={snippets.useCases[snippet++]} />
                        </Demo>
                        <ListItem title="Identification utilisateurs" />
                        <ListItem title="Rédaction use cases" />
                        <Demo type="useCases.md">
                            <Code step={snippets.useCases[snippet++]} />
                        </Demo>
                        <ListItem title="Sprints">
                            <Item text="On a notre liste, on va déterminer les sprints" />
                            <Item text="Sprint : étape dans le dev" />
                            <Item text="A la fin du sprint, quelque chose à montrer au client pour validation" />
                            <Item text="Sprint 1 : aspect visuel" />
                            <Item text="Sprint 2 : inscription/connexion/déconnexion" />
                            <Item text="Sprint 3 : réponse aux quiz et scores" />
                            <Item text="Sprint 4 : administration" />
                        </ListItem>
                        <Demo type="useCases.md">
                            <Code step={snippets.useCases[snippet++]} />
                        </Demo>
                        <ListItem title="Quelques wireframes" />
                    </List>
                </Card>
                <Card title="MCD" duration="2:00:00">
                    <List>
                        <ListItem title="MoCoDo">
                            <Item text="D'abord, identifions les entités" />
                            <Item text="Représentation d'un élément ayant un rôle dans notre système" />
                            <Item text="On verra ensiute comment les relier entre elles" />
                            <SubItem text="utilisateur" />
                            <SubItem text="thème" />
                            <SubItem text="quiz" />
                            <SubItem text="question" />
                            <SubItem text="reponse" />
                            <SubItem text="niveau" />
                        </ListItem>
                        <Demo type="MCD">
                            {console.log(resetSnippet())}
                            <Code step={snippets.mcd[snippet++]} />
                        </Demo>
                        <ListItem text="relations user/quiz">
                            <Item text="un utilisateur peut créer 0 n quiz" />
                            <Item text="un quiz est créé par un et un seul utilisateur" />
                        </ListItem>
                        <Demo type="MCD">
                            <Code step={snippets.mcd[snippet++]} />
                        </Demo>
                        <ListItem text="relations quiz/theme">
                            <Item text="un quiz peut appartenir à 0 n quiz" />
                            <Item text="un quiz peut avoir un ou plusieurs thèmes" />
                        </ListItem>
                        <Demo type="MCD">
                            <Code step={snippets.mcd[snippet++]} />
                        </Demo>
                        <ListItem text="relations quiz/question">
                            <Item text="un quiz est composé de 0 n question" />
                            <Item text="une question appartient à 1 seul quiz" />
                        </ListItem>
                        <Demo type="MCD">
                            <Code step={snippets.mcd[snippet++]} />
                        </Demo>
                        <ListItem text="relations question/niveau">
                            <Item text="une question se rapporte à 1 seul niveau" />
                            <Item text="un niveau peut concerner 0 n questions" />
                        </ListItem>
                        <Demo type="MCD">
                            <Code step={snippets.mcd[snippet++]} />
                        </Demo>
                        <ListItem text="relations question/réponse">
                            <Item text="une question peut posséder 0 n réponses" />
                            <Item text="une reponse appartient à 1 seule question" />
                        </ListItem>
                        <Demo type="MCD">
                            <Code step={snippets.mcd[snippet++]} />
                        </Demo>
                        <ListItem text="relations question/réponse">
                            <Item text="une question possède 1 suele réponse valide" />
                            <Item text="une reponse peut être la bonne réponse pour 0 ou 1 question" />
                        </ListItem>
                        <Demo type="MCD">
                            <Code step={snippets.mcd[snippet++]} />
                        </Demo>
                        <ListItem title="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S5E01;