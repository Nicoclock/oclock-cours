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
            </div>
        </Fragment>
    );
}

export default S3E08;