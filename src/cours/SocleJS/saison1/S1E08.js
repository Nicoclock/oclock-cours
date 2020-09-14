import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce} from "../../../common";
import {day8 as snippets} from "./Code/snippets";

import "../../style.scss"

const S1E08 = props => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
        <div className="Title">Responsive</div>
        <div className="Inner">
            <List>
                <Card title="Correction" duration="3:00:00">
                    <Sondage question="Dur ce challenge ?" reponses={["la misèèère !", "les forms ça pique", "j'ai un peu galéré", "ça a été"]} />
                    <ListItem title="Mise en place">
                        <Item text="Copie de index vers cart.html" />
                        <Item text="On repart de cette base pour le CSS et le layout général" />
                        <Item text="On donne une class au main, une largeur et on le centre" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Mise en place structure" />
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Tableau" />
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="1ère colonne" />
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="2ème colonne" />
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Total à payer" />
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Buttons" />
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes" />
                    <ListItem title="pseudo-class">
                        <Item text="on connait déjà :hover" />
                        <Item text="plein d'autres dispos" />
                        <Item text="grattez un peu la doc, comment on va faire ce bonus ?" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-%C3%A9l%C3%A9ments" />
                    <ListItem title="peudo-elements">
                        <Item text="Dans la même veine, pseudo element" />
                        <Item text="Permet de mettre en forme une partie de l'élément ciblé" />
                        <Item text="::placeholder peut être très utile !" />
                    </ListItem>
                    <Recap>
                        <BoxItem text="Un bon mix de tout ce qu'on a vu déjà" />
                        <BoxItem text="form, flexbox, plein de props css" />
                        <BoxItem text="Découverte : le tableau : thead, tbody, tfoot, rappel balise sémantiques" />
                        <BoxItem text="pseudo-class : nickel pour styliser un élément dans un étét particulier" />
                        <BoxItem text="pseudo-element : impec pour styliser une partie d'un élément" />
                    </Recap>
                    <Transition>
                        <BoxItem text="Page sur le navigateur est impec" />
                        <BoxItem text="Beaucoup de users utilisent leur mobile pour surfer" />
                        <BoxItem text="Voyons comment rendre page responsive ou même mieux, adaptative" />
                    </Transition>
                </Card>
                <Card title="RWD" duration="2:00:00">
                    <Doc type="Slides" url="http://localhost:1234/s1/e8/rwd" />
                    <ListItem title="RWD">
                        <Item text="Essayons de décortiquer un peu" />
                        <Click dir="right" />
                        <Item text="Pour commencer, un mot sur les périphériques concernés" />
                        <Click dir="bottom" />
                        <Item text="Avant, facile, un seul type de périph pour afficher du web" />
                        <Item text="Bien changé aujourd'hui, on sait pas où ça s'arrêtera" />
                        <Click dir="bottom" />
                        <Item text="Commentaires diapo" />
                        <Click dir="right" />
                        <Item text="3 grandes familles de design, 3 philosophies" />
                        <Click dir="bottom" />
                        <Item text="Device specific : commentaires" />
                        <Click dir="bottom" />
                        <Item text="Adaptive : commentaires" />
                        <Click dir="bottom" />
                        <Item text="Responsive : commentaires" />
                        <Click dir="right" />
                        <Item text="On va s'intéresser au responsive" />
                        <Click dir="bottom" />
                        <Item text="5 points clé : commentaires" />
                        <Click dir="right" />
                        <Item text="meta viewport, la fameuse : commentaires" />
                        <Click dir="right" />
                        <Item text="layout fluide ou flexible, on connait, la flexbox, les % : commentaires" />
                        <Click dir="right" />
                        <Item text="images flexibles, on connait moins ... : commentaires" />
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Apprendre/HTML/Comment/Ajouter_des_images_adaptatives_%C3%A0_une_page_web" />
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTML/Element/picture" />
                        <Click dir="right" />
                        <Item text="textes fluides, on sait faire : commentaires" />
                        <Click dir="bottom" />
                        <Item text="règles de conversion : commentaires" />
                        <Click dir="right" />
                        <Item text="media queries : commentaires" />
                        <Click dir="bottom" />
                        <Item text="exemple media querie : commentaires" />
                        <Click dir="right" />
                        <Item text="Mobile first : commentaires" />
                        <Item text="Content first : commentaires" />
                        <Click dir="bottom" />
                        <Item text="Nombreuses ressources sur le sujet" />
                    </ListItem>
                    <ListItem title="1er exemple">
                        <Item text="on part de notre panier" />
                        <Item text="Déjà, on ajoute la meta viewport" />
                        <Item text="CTRL + P : on simule une impression" />
                        <Item text="trop d'infos, pas très utile, on va en virer !" />
                    </ListItem>
                    <Demo type="RWD">
                        {console.log(resetSnippet())}
                        <Code step={snippets.rwd[snippet++]} />
                    </Demo>
                    <ListItem title="Affichage dans chrome">
                        <Item text="sur l'inspecteur, esc" />
                        <Item text="menu ..., rendering" />
                        <Item text="on scrolle jusqu'à emulate CSS media type" />
                        <Item text="on sélectionne print" />
                    </ListItem>
                    <ListItem title="principe">
                        <Item text="définition d'un sélecteur de device" />
                        <Item text="redéfinition des class css pour ce device" />
                        <Item text="exemple du print mais presque tout le temps, screen" />
                    </ListItem>
                    <Doc type="Ressources" url="https://developer.mozilla.org/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries" />
                    <ListItem title="2ème exemple">
                        <Exo>
                            <Enonce text="Trouvez dans la doc comment cibler un écran dont la largeur minimum est de 1000px" />
                        </Exo>
                    </ListItem>
                    <Demo type="RWD">
                        <Code step={snippets.rwd[snippet++]} />
                    </Demo>
                    <ListItem title="Adaptation grand écran">
                        <Item text="On ajoute quelques règles" />
                        <Item text="C'est plus pour l'exemple ici ..." />
                    </ListItem>
                    <Demo type="RWD">
                        <Code step={snippets.rwd[snippet++]} />
                    </Demo>
                    <ListItem title="Petits écrans">
                        <Exo>
                            <Enonce text="Ecrivez la media query pour centrer l'élément de class logo pour les écrans de 900px au maximum" />
                        </Exo>
                    </ListItem>
                    <Demo type="RWD">
                        <Code step={snippets.rwd[snippet++]} />
                    </Demo>
                    <ListItem title="Tout petits écrans">
                        <Item text="Les mobiles quoi ..." />
                        <Item text="Avantage des font-size en em ou rem" />
                    </ListItem>
                    <Demo type="RWD">
                        <Code step={snippets.rwd[snippet++]} />
                    </Demo>
                    <ListItem title="Et on adapte">
                        <Item text="on s'arrête pas là bien sûr !" />
                        <Item text="on peut imaginer toutes les modifs qu'on veut" />
                        <Item text="Le seul truc : bien penser sa structure et son découpage html !" />
                    </ListItem>
                    <Demo type="RWD">
                        <Code step={snippets.rwd[snippet++]} />
                    </Demo>
                    <Recap>
                        <BoxItem text="Le responsive, c'est la vie !" />
                        <BoxItem text="Tout site qui veut un peu de visibilité : obligatoire" />
                        <BoxItem text="Contraintes : bien réfléchir à sa structure, anticiper" />
                        <BoxItem text="Définir des class CSS pour cibler facilement les éléments concernés" />
                        <BoxItem text="Ca se décide AVANT d'écrire la 1ère balise" />
                        <BoxItem text="media query : sélecteur de device, système de conditions" />
                        <BoxItem text="dans la query : sous-feuille de style pour le device ciblé" />
                    </Recap>
                    <ListItem title="Présentation atelier solo" />
                </Card>
            </List>
        </div>
    </Fragment>
);
}

export default S1E08;