import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Demo, Sondage} from "../../../common";
import {day1 as snippets} from "./Code/snippets";

import "../../style.scss"

const S4E01 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Organiser son projet et son code</div>
            <div className="Inner">
                <List>
                    <Card title="Le besoin" duration="1:00:00">
                        <ListItem title="Organisation">
                            <Item text="On se jette pas dans le code" />
                            <Item text="Tout un travail préparatoire" />
                            <Item text="Pas du temps perdu, on cartographie le projet" />
                            <Item text="Plus la carte est claire, plus on code sereinement" />
                        </ListItem>
                        <ListItem title="Data">
                            <Item text="Organiser les données" />
                            <Item text="Plus les stocker dans le code" />
                            <Item text="D'abord, depuis un fichier json externe" />
                            <Item text="BDD : kezaco, kessamange, ..." />
                        </ListItem>
                        <ListItem title="Cette saison">
                            <Item text="Un seul gros projet sur les 15 jours" />
                            <Item text="Serveur express, routage, EJS, ... " />
                            <Item text="Pratique de l'organisation sur le projet, dans le code" />
                            <Item text="Grosse nouveauté : on ira chercher les données ailleurs" />
                        </ListItem>
                        <ListItem title="Aujourd'hui">
                            <Item text="Préparatin du projet, mise en place architecture" />
                            <Item text="On va parler de GDP" />
                        </ListItem>
                        <Sondage question="GDP veut dire ..." reponses={["Gros Dégueu Poilu", "Grab your Desk and Pray", "Gestion De Projet"]} />
                        <Doc type="Ressource" url="https://fr.wikipedia.org/wiki/Cycle_en_V#/media/Fichier:Cycle_V_temps_details.JPG" />
                        <ListItem title="Cycle en V">
                            <Item text="Méthode la plus ancienne" />
                            <Item text="Détails schéma" />
                            <Item text="Rigide et problèmatique pour détection des problèmes" />
                        </ListItem>
                        <Doc type="Ressource" url="https://fr.wikipedia.org/wiki/M%C3%A9thode_agile" />
                        <ListItem title="Méthodes agiles">
                            <Item text="On découpe le développement en étapes" />
                            <Item text="On reproduit le cycle en V pour chaque étape, chaque itération" />
                            <Item text="Beaucoup plus souple, permet de revenir en arrière et corriger plus vite" />
                            <Item text="Implication forte du client final pour valider chaque étape" />
                            <Item text="Gagnant gagnant : client plus satisfait, équipe de devs ont moins de pression" />
                            <Item text="Méthode agile, terme générique, vous en connaissez ?" />
                            <Item text="La plus connue : Scrum" />
                        </ListItem>
                        <ListItem title="Scrum">
                            <Item text="C'est celle qu'on va essayer d'appliquer ensemble" />
                            <Item text="Etapes de développement appelées sprint" />
                            <Item text="On se répartit les tâches en début de sprint puis chaque dev fait sa vie" />
                            <Item text="Tite réunion chaque matin, debout où on fait le point : avancée, blocage, prog du jour" />
                            <Item text="Orchestré par un sprint master, rôle tournant pour partager charge mentale" />
                            <Item text="Scrum master : dev qui manage l'équipe, vérifie faisabilité des sprints" />
                            <Item text="!== chef de projet, en relation avec le client" />
                        </ListItem>
                        <ListItem title="Analyse du besoin">
                            <Item text="assez de blah blah, passons au concret" />
                            <Item text="On a une demande client, on doit aboutir à un projet" />
                            <Item text="Différentes étapes pour y arriver" />
                        </ListItem>
                        <Demo type="Besoin">
                            <Code step={snippets.besoin[snippet++]} />
                        </Demo>
                        <ListItem title="Uses cases">
                            <Item text="On doit traduire le besoin du client en use cases" />
                            <Item text="Liste des fonctionnalités atomiques, granulaires de notre appli" />
                            <Item text="On en profite pour éclaircir les zones d'ombre avec le client (c'est moi)" />
                            <Item text="Pas de on verra plus tard, ce sera trop tard !" />
                            <Item text="Phase d'analyse à ne pas négliger (analyste développeur)" />
                            <Item text="Evite de perdre du temps en phase de dev, productivité, tout ça" />
                            <Item text="Précision, concision, faut pas avoir à jouer avec la phrase pour comprendre" />
                            <Item text="Pas de redécoupage, si phrase compliqué, use case doit être splitté" />
                            <Item text="Formalisme des use cases : " />
                            <SubItem text="en tant que <statut du user>" />
                            <SubItem text="Je veux <action à effectuer>" />
                            <SubItem text="Afin de <objectif>" />
                        </ListItem>
                        <Demo type="Besoin">
                            <Code step={snippets.besoin[snippet++]} />
                        </Demo>
                    </Card>
                    <Card title="Github Project" duration="0:30:00">
                        <ListItem title="Création du repo GitHub" />
                        <ListItem title="Liaison avec repo local" />
                        <ListItem title="Création projet et Kanban">
                            <Item text="To do, doing, to validate, done" />
                            <Item text="Ajout des cartes, on commence par la fin" />
                        </ListItem>
                        <Demo type="Besoin">
                            <Code step={snippets.besoin[snippet++]} />
                        </Demo>
                    </Card>
                    <Card title="Wireframes" duration="1:00:00">
                        <ListItem title="Outils wireframe">
                            <Item text="Pas de truc très précis ou beau, on n'est pas designers" />
                            <Item text="Grandes lignes : layout général, position des éléments, ..." />
                        </ListItem>
                        <Demo type="Besoin">
                            <Code step={snippets.besoin[snippet++]} />
                        </Demo>
                    </Card>
                    <Card title="Organiser son code" duration="2:00:00">
                        <ListItem title="Mise en place structure">
                            <Item text="npm init, npm install express ejs" />
                            <Item text="On n'oublie pas le .gitignore" />
                            <Item text="index.js : point d'entrée" />
                            <Item text="Un dossier pour l'appli : app" />
                            <Item text="app/router.js" />
                            <Item text="SoC : dossier controllers pour la logique derrière les routes" />
                            <Item text="Un dossier pour les ressources statiques : public" />
                            <Item text="public/css, public/images" />
                            <Item text="logo dans images, reset.css et style.css dans css" />
                        </ListItem>
                        <ListItem title="Express">
                            <Item text="Mise en place serveur" />
                            <Item text="Plutôt que port en dur, variable d'environnement, plus sécurisé" />
                            <Item text="process.env : liste des variables d'environnement" />
                            <Item text="On peut ajouter dans le script start" />
                            <Item text="présentation dotenv, npm install dotenv" />
                            <Item text="ajout .env (direct dans .gitignore), .env.example" />
                            <Item text="index.js : on met en place serveur express" />
                            <Item text="script start dans package.json" />
                        </ListItem>
                        <Demo type="App">
                            {console.log(resetSnippet())}
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="routeur">
                            <Item text="on crée le routeur" />
                            <Item text="on l'ajoute comme middleware à l'app" />
                        </ListItem>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="mainController">
                            <Item text="Une méthode home pour la page d'accueil" />
                            <Item text="Une méthode notFound pour la gestion des erreurs" />
                            <Item text="Ajout du controlleur et des routes dans le routeur" />
                        </ListItem>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="Partials et home">
                            <Item text="header et footer sont communs, on les met dans partials direct" />
                            <Item text="dans home.ejs, une div avec les 2 boutons" />
                            <Item text="tit test avant de styliser" />
                        </ListItem>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="Vite du css">
                            <Item text="Tout est là, pas d'erreur dans la structure" />
                            <Item text="Fichiers css et images sont bien chargés" />
                            <Item text="On ajoute du style" />
                        </ListItem>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="Liste promos">
                            <Item text="Déjà la structure, on fera la vue après" />
                            <Item text="Dossier data avec 2 fichiers json" />
                            <Item text="On va ajouter un nouveau controlleur : promosController.js" />
                        </ListItem>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="On ajoute la route et on modifie home.ejs" />
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout de la vue promos" />
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="Détails promo">
                            <Item text="pas de wireframe, tant pis" />
                            <Item text="On va s'inspirer du wireframe détail étudiant" />
                            <Item text="Lien en plus : liste des étudiants de cette promo" />
                            <Item text="Mais déjà, la méthode dans promoController" />
                        </ListItem>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout de la route" />
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="Modif promos.ejs" />
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="Création de la vue" />
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                        <ListItem title="présentation challenge" />
                        <Demo type="App">
                            <Code step={snippets.app[snippet++]} />
                        </Demo>
                    </Card>
                </List>
            </div>
        </Fragment>
    );
}

export default S4E01;