import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce, Snippet, ExoSondage} from "../../../common";
import {gamehubMw as gamehub} from "./Code/challenges";
import {day8 as snippets} from "./Code/snippets";

import "../../style.scss"

const S3E08 = props => {
    let challenge = 0;
    let snippet = 0;

    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Response parser</div>
            <div className="Inner">
                <Card title="Correction" duration="1:00:00">
                    <List>
                        <Doc type="Ressource" url="https://www.bonjour404.fr/" />
                        <ListItem title="Amélioration jeu non trouvé" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Middleware 404">
                            <Item text="Gaffe à la position !" />
                            <Item text="Après la route /game/:nomDuJeu" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://expressjs.com/fr/api.html#req" />
                        <ListItem title="Middleware log">
                            <Item text="La doc est notre amie" />
                            <Item text="Date : on sait faire, js ou moment" />
                            <Item text="Ip : property de la request" />
                            <Item text="Chemin accédé : property path de la request" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus : mise en forme">
                            <Item text="Pour ISO, recheche google ..." />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                    </List>
                </Card>
                <Card title="Méthode GET" duration="2:00:00">
                    <List>
                        <Doc type="repo ettehcruof-http-module" url="https://github.com/o-clock-jason/ettehcruof-http-module" />
                        <ListItem title="Intégration ettehcruof">
                            <Item text="Continuons l'intégration dans le GameHub" />
                            <Item text="Next game : fourchette over HTTP" />
                            <Item text="Version modularisée offerte par la maison, avec intégration en plus" />
                        </ListItem>
                        <Sondage question="J'ai récupéré le repo" reponses={['yep', 'nope']} />
                        <ListItem title="Mise en place des fichiers">
                            <Item text="On prend les fichiers un par un pour les ajouter au GameHub" />
                            <Item text="assets/messages.js => public/js/ettehcruofMessages.js" />
                            <Item text="assets/style.css => public/css/ettehcruof.css" />
                            <Item text="modules/ettehcruof.js => modules/ettehcruof.js" />
                        </ListItem>
                        <ListItem title="Dossier views">
                            <Item text="Pour les vues, on va vérifier les fichiers qu'elles appellent" />
                            <Item text="views/partials/*Button*.ejs => views/partials/" />
                            <Item text="header et footer déjà définis dans GameHub, on va adapter" />
                            <Item text="views/home.ejs => views/home.ejs" />
                            <Item text="views/ettehcruof.ejs => views/ettehcruof.ejs" />
                        </ListItem>
                        <ListItem title="Ajout à games.json" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Ajout d'une route dédiée" />
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Correction routes des boutons">
                            <Item text="Nos boutons fonctionnent plus, faut modifier les routes" />
                            <Item text="On pourrait ajouter une route par action" />
                            <Item text="Plus efficace, on va configurer la requête" />
                            <Item text="On modifie les liens dans les partials/buttons" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Modif route dédiée pour prise en compte">
                            <Item text="Pour récup les paramètres de la requête, besoin d'un middleware d'Express" />
                            <Item text="urlencoded va ajouter une prop query à la requête et placer les paramètres dedans" />
                            <Item text="Copiez cette ligne dans vos projets, ce sera toujours la même" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <Demo type="repo Correction">
                            <Code step={gamehub.etapes[challenge++]} />
                        </Demo>
                        <ListItem title="Ajout H3 dans la vue" />
                        <Recap>
                            <BoxItem text="On peut configurer l'object request, lui ajouter des variables" /> 
                            <BoxItem text={`après l'url, ?nom=value&nom2=value2`} /> 
                            <BoxItem text="Côté back, middleware urlencoded, extended: true" /> 
                            <BoxItem text="Les paramètres et leurs- valeur stockés dans request.query" /> 
                        </Recap>
                    </List>
                </Card>
                <Card title="Méthode POST" duration="2:00:00">
                    <List>
                        <ListItem title="Ajout du formulaire login">
                            <Item text="création vue" />
                        </ListItem>
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout CSS" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout route GET /login" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout route POST /login" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Import fichier users.json" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Complément route POST /login" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout var currentUser" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Modif route POST /login" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout erreur dans login.ejs" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Un peu de CSS pour l'erreur" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout nom user dans header.ejs" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Un peu de CSS pour le nom" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                        <ListItem title="Installation et import de bcrypt" />
                        <ListItem title="Changement users.json to users-crypt.json" />
                        <ListItem title="Modif POST /login" />
                        <Demo type="repo GameHub">
                            <Code step={snippets.post[snippet++]} />
                        </Demo>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S3E08;