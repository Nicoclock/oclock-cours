import React, {Fragment} from "react";

import {Card, Doc, Code, ListItem, Item, SubItem, Question, Recap, Transition, Demo, BoxItem, Sondage} from "../../../common";
import {day7 as snippets} from "./Code/snippets";

import "../../style.scss"

const S1E07 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
        <div className="Title">Forms</div>
        <div className="Inner">
            <list>
                <Card title="Correction" duration="3:00:00">
                    <Sondage question="Le pair programming, c'est ..." reponses={["le pied !", "ouais bof ...", "pas aimé du tout !"]} />
                    <Sondage question="J'ai trouvé l'atelier" reponses={["super dur", "dur", "facile", "sur github"]} />
                    <Recap>
                        <BoxItem text="HTML : syntaxe et structure" />
                        <BoxItem text="CSS : syntaxe et plein de props" />
                        <BoxItem text="Box model, flex box et position" />
                        <BoxItem text="Gros mix de tout ça pour faire l'atelier" />
                    </Recap>
                    <ListItem title="Point sur l'existant">
                        <Item text="Pas grand-chose en fait ..." />
                        <SubItem text="Les images" />
                        <SubItem text="Les textes à intégrer" />
                    </ListItem>
                    <ListItem title="Mise en place projet">
                        <Item text="Dossiers html et css" />
                        <Item text="Fichiers index.html, reset.css et style.css" />
                        <Item text="Squelette html" />
                    </ListItem>
                    <ListItem title="Zoning">
                        <Item text="Pas de copie des textes tout de suite" />
                        <Item text="Définition des grandes zones" />
                        <Item text="Définition class css helper, ok avec inspecteur mais plus visuel" />
                    </ListItem>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="Tout en flex !">
                        <Item text="On va essayer de tout faire en flex, ok ?" />
                        <Item text="Conteneur en display flex, par défaut row flex-start" />
                        <Item text="Sections : largeur moitié de l'écran" />
                        <Item text="Hauteur totale : vh indiqué" />
                    </ListItem>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="left side">
                        <Item text="Layout général ok, on vire les classes helper" />
                        <Item text="Mise en place partie gauche, header, main, footer" />
                        <Item text="header et footer, hauteur min pour la mise en place" />
                        <Item text="main doit prendre toute la place restante" />
                    </ListItem>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="right side">
                        <Item text="Layout gauche ok, on vire les classes helper" />
                        <Item text="Mise en place partie droite, header, main" />
                    </ListItem>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="Copie textes">
                        <Item text="Layout droit ok, on vire les classes helper" />
                        <Item text="Copie des textes dans la bonne div" />
                        <Item text="Complète avec ce qu'on voit sur le visuel" />
                    </ListItem>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="Nicole" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="left header" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="news" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="menu" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="right-side" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="title" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="layout articles" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="article" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="On reproduit sur les autres" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="Bonus lisibilité">
                        <Item text="Position harmonieuse on est pas mal" />
                        <Item text="Grâce au flex, la partie news reste centrée" />
                        <Item text="Lisibilité du texte: text-shadow" />
                    </ListItem>
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="Overflow" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <ListItem title="Alignement liens article" />
                    <Demo type="Atelier">
                        <Code step={snippets.atelier[snippet++]} />
                    </Demo>
                    <Recap>
                        <BoxItem text="Alors, c'est magique la flexbox ou bien ?" />
                        <BoxItem text="Ceux qui ont galéré, est-ce que la démarche est plus claire ?" />
                        <BoxItem text="On va du plus général au plus particulier" />
                        <BoxItem text="On réfléchit au layout, on définit les zones et la sémantique" />
                        <BoxItem text="On remplit avec le contenu et on applique le style" />
                    </Recap>
                    <Transition>
                        <BoxItem text="Elle est pas mal notre page, mais on ne fait que présenter des données" />
                        <BoxItem text="Souvent besoin de demander des infos au user" />
                        <BoxItem text="En web, moyen le plus pratique : le formulaire" />
                    </Transition>
                </Card>
                <Card title="Formulaires" duration="2:00:00">
                    <ListItem title="Présentation form">
                        <Item text="Voilà la page qu'on veut mettre derrière le lien contact" />
                        <Item text="Structure à gauche est la même" />
                        <Item text="On va réutiliser le style existant" />
                        <Item text="Faut remplacer Nicole par Gabriel" />
                        <Question text="Comment vous feriez vous ?" />
                    </ListItem>
                    <ListItem title="Copie index">
                        <Item text="On copie le fichier index, bonne base" />
                        <Item text="On met le lien en place sur l'index" />
                        <Item text="On met en place une classe pour gérer l'image de fond" />
                    </ListItem>
                    <Demo type="Form">
                        {console.log(resetSnippet())}
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <ListItem title="left-side news">
                        <Item text="Même principe pour le main à gauche" />
                        <Item text="modifier pour Nicole, on ajoute le fond transparent et le box-shadow" />
                        <Item text="On change le texte du titre au passage" />
                        <Item text="On retire les articles de la droite" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <ListItem title="Contenu">
                        <Item text="On nous a fourni le gros du html et le css" />
                        <Item text="A nous de compléter le html avec les balises adéquates" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML" />
                    <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTML/Element/form" />
                    <ListItem title="Formulaire de base">
                        <Item text="MDN reste notre ami, plein de doc dispo" />
                        <Item text="Analyse structure de base" />
                    </ListItem>
                    <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTML/Element/fieldset" />
                    <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTML/Element/legend" />
                    <ListItem title="Fieldset">
                        <Item text="On regroupe les éléments avec un sens commun dans un fieldset" />
                        <Item text="Coup d'oeil sur la doc pour la syntaxe" />
                        <Item text="Visuel : on remarque 3 blocks" />
                        <Item text="On les met en place avec la légende qui va bien" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input" />
                    <ListItem title="1er input : radio button">
                        <Item text="1er champ c'est quoi pour vous ?" />
                        <Item text="On veut sélectionner une valeur OU l'autre" />
                        <Item text="Regardez dans la doc ce qui pourrait coller" />
                        <Item text="type radio correspond à ce qu'on veut" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <ListItem title="Champs text">
                        <Item text="Les 2 suivants, champs classiques, type text" />
                        <Item text="Trouvez dans la doc comment mettre texte de remplacement" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTML/Element/select" />
                    <ListItem title="Select">
                        <Item text="Champ suivant : liste déroulante" />
                        <Item text="Tit tour dans la doc, comment on peut faire ça ?" />
                        <Item text="Un select avec des options" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <ListItem title="Type email">
                        <Item text="Champ suivant, on pourrait mettre text mais y a mieux" />
                        <Item text="Depuis HTML5, plus de valeur pour type" />
                        <Item text="Vérif automatique avant envoi" />
                        <Item text="Pour une adresse mail, on met quoi comme type ?" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/HTML/Element/textarea" />
                    <ListItem title="textarea">
                        <Item text="Champ suivant, sorte de chmp text mais big" />
                        <Item text="On va pas mettre input, balise plus adaptée" />
                        <Item text="Vous la connaissez ?" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <ListItem title="Input file">
                        <Item text="Champ suivant un peu particulier" />
                        <Item text="On propose d'inclure un fichier à l'envoi" />
                        <Item text="input de type spécial, vous me le trouvez ?" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <ListItem title="Input checkbox">
                        <Item text="Dernier champ : case à cocher" />
                        <Item text="Type radio : une seule valeur possible" />
                        <Item text="Ce type là : plusieurs choix possibles" />
                        <Item text="Vous me trouvez le type ?" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <ListItem title="Button">
                        <Item text="Il nous faut moyen de valider le formulaire" />
                        <Item text="Le plus simple : balise button" />
                    </ListItem>
                    <Demo type="Form">
                        <Code step={snippets.form[snippet++]} />
                    </Demo>
                    <Recap>
                        <BoxItem text="Saisies utilisateur : formulaire <form>" />
                        <BoxItem text="On peut regrouper les infos avec sens commun : <fieldset>" />
                        <BoxItem text="Champ <input>, plein de types selon l'info attendue" />
                        <BoxItem text="Radio : un seul choix parmi plusieurs" />
                        <BoxItem text="Checkbox : choix multiple" />
                        <BoxItem text="File : ajout d'un fichier lors de l'envoi" />
                        <BoxItem text="text, email, ... types HTML5 sont vérifiés avant envoi" />
                        <BoxItem text="<textarea> pour pavé de texte" />
                        <BoxItem text="On valide avec <button>" />
                    </Recap>
                    <Transition>
                        <BoxItem text="Au click sur button, on voit les infos dans l'url" />
                        <BoxItem text="On sait pas encore comment les traiter mais ça viendra" />
                        <BoxItem text="On verra ça en S2 et S3, patience" />
                    </Transition>
                    <ListItem title="Présentation challenge" />
                </Card>
            </list>
        </div>
    </Fragment>
);
}

export default S1E07;