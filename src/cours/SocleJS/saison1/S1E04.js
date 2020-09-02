import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Recap, Transition, Demo, BoxItem, Sondage} from "../../../common";
import {day4 as snippets} from "./Code/snippets";

import "../../style.scss"

const S1E04 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Layout</div>
            <div className="Inner">
                <List>
                    <Card title="Correction" duration="3:00:00">
                        <Recap>
                            <BoxItem text="Box-model : quelle place prennent les éléments dans le flux de la page" />
                            <BoxItem text="display inline ou block" />
                            <BoxItem text="suite découverte des props css" />
                            <Question text="Des questions sur tout ça ?" />
                        </Recap>
                        <Sondage question="Et ce challenge alors ?" reponses={["ça a été", "j'ai fini tard !", "j'attends la correction"]} />
                        <ListItem title="Mise en place">
                            <Item text="On regarde les éléments fournis" />
                            <SubItem text="index.html" />
                            <SubItem text="reset.css et styles.css (reset AVANT style, l'ordre est important)" />
                            <SubItem text="images" />
                            <SubItem text="textes de la page" />
                            <Item text="On prépare notre page html, link vers css, copie textes sans les bonus" />
                            <Item text="On met tout le contenu dans une div container" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Structure">
                            <Item text="On structure notre page avec des balises sémantiques" />
                            <Item text="Image d'entête : on pourrait ajouter une balise img mais on va faire autrement avec CSS" />
                            <Item text="On a vu hier : header, main et footer" />
                            <Item text="Qu'est-ce qu'on met dans le header ?" />
                            <Item text="Qu'est-ce qu'on met dans le footer ?" />
                            <Item text="On place ce qui reste dans le main" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Découpage main">
                            <Item text="Regardons un peu le main, comment le structurer ?" />
                            <Item text="On voit un sous-header, un texte principal, un complément d'info" />
                            <Item text="Au niveau sémantique, comment on peut traduire ça ?" />
                            <Item text="Une section qui contient un header, un article et un complément d'info" />
                            <Item text="On n'a pas vu encore : pour un texte secondaire, moins impportant, nouvelle balise : aside" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="balises classiques">
                            <Item text="Structure sémantique en place, robots vont voir les éléments importants et la structure" />
                            <Item text="On met les textes dans des balises classiques pour pouvoir les styliser" />
                            <Item text="On ajoute aussi les images là où il faut" />
                            <Item text="Allez aidez-moi, on met quoi dans quoi ?" />
                            <Item text="step by step pour chaque ligne" />
                            <Item text="Paragraphes ont un style commun, on anticipe, class css" />
                            <Item text="Exception : contenu aside, autre class css" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style body">
                            <Item text="La structure est opé, on peut afficher la page et attaquer le css" />
                            <Item text="On va du plus général au plus particulier : on commence par les 2 règles sur le body" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style container">
                            <Item text="On passe au container, regardons le visuel" />
                            <SubItem text="on va lui donner une largeur et le centrer" /> 
                            <SubItem text="tit espace de danse en haut et en bas" /> 
                            <SubItem text="on centre le contenu par défaut, on modifiera pour les paragraphes alignés à gauche" /> 
                            <SubItem text="bg en blanc" /> 
                            <SubItem text="bordure" /> 
                            <SubItem text="un peu de gras entre la peau et l'os, a l'air régulier" /> 
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style titres">
                            <Item text="Avant d'attaquer le header, vous remarquez pas des points communs sur les titres ?" />
                            <SubItem text="en gras" />
                            <SubItem text="espace de danse" />
                            <Item text="On va factoriser tout ça avec un sélecteur multiple" />
                            <Item text="On indique ensuite les spécificités dans un sélecteur unique" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Background image">
                            <Item text="header a un peu de gras sous la peau" />
                            <Item text="On lui donne aussi une hauteur pour gérer correctement l'image" />
                            <Item text="Image dans l'entête, nouvelle technique en CSS" />
                            <Item text="Dans la doc, regardez si vous trouvez comment faire" />
                            <Item text="Prop background a plein de sous-props, dont background-image" />
                            <Item text="Combiné à d'autre, réglage assez fin de l'affichage" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style h1">
                            <Item text="On complète la définition du h1" />
                            <SubItem text="bordure en haut et en bas" />
                            <SubItem text="un peut de gras entre l'os et la peau" />
                            <Item text="Je le déplace dans la partie header, pas d'importance, juste plus clair" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style h1 strong">
                            <Item text="Pour le strong, je vous écoute, qu'est-ce que vous remarquez ?" />
                            <SubItem text="texte plus petit" />
                            <SubItem text="en blanc sur fond noir" />
                            <SubItem text="en gras je pense" />
                            <SubItem text="encore du gras sous la peau, plus à gauche et à droite qu'en haut et en bas" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style main">
                            <Item text="Header on est pas mal" />
                            <Item text="On attaque le main donc, qu'est-ce quevous pouvez m'en dire ?" />
                            <Item text="Pas grand-chose à mettre, on va plutôt styliser les balises internes" />
                            <Item text="on peut quand-même lui appliquer une petite marge en haut et en bas" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style main section">
                            <Item text="Section présentation maintenant, vous remarquez quoi ?" />
                            <SubItem text="centrée dans le main, moins large" />
                            <SubItem text="couleur de fond" />
                            <SubItem text="un peu de gras sous la peau" />
                            <SubItem text="un peu d'air en bas" />
                            <SubItem text="on ajoute aussi un peu d'air entre les lignes" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style main header">
                            <Item text="On s'occupe maintenant du header de cette section" />
                            <Item text="On utilise sa border pour le trait de séparation" />
                            <Item text="Un peu d'air aussi avant de passer à l'aside" />
                            <Item text="Pour le contenu, on a déjà styliser le h2 dans la section général, rien à ajouter" />
                            <Item text="L'image est trop large, on va lui donner une taille et un peu d'air pour coller au visuel" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style p">
                            <Item text="On donne du style aux paragraphes" />
                            <Item text="Dans la structure, on a prévu 2 classes, 1 pour l'aside, une pour les autres" />
                            <Item text="note : italic, plus petit" />
                            <Item text="les autres : alignés à gauche, un peu d'air en bas" />
                            <Item text="les autres strong : en gras" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style footer">
                            <Item text="Il nous reste le footer, comme d'hab dites-moi tout, vous voyez quoi ?" />
                            <SubItem text="une couleur de fond" />
                            <SubItem text="de la graisse en haut (un peu) et en bas (plus)" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Voilà pour le challenge, si vous êtes arrivé là c'est génial !" />
                            <BoxItem text="On a surtout repratiqué ce qu'on a vu hier" />
                            <BoxItem text="Tite nouveauté : background-image et comment l'utiliser" />
                            <Question text="Des questions sur tout ça ? On passe aux bonus ?" />
                        </Recap>
                        <ListItem title="Google fonts">
                            <Question text="Vous avez galéré ou pas ?" />
                            <Item text="démo sur site, récup et intégration dans le html" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Liste acteurs">
                            <Item text="On commence par récupérer les textes et on les copie dans le html" />
                            <Item text="On va faire une nouvelle section pour contenir la liste" />
                            <Item text="On crée ensuite une liste, non ordonnée, pour contenir les textes" />
                            <Item text="Les liens étaient pour le super bonus, je les ajoute maintenant" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style acteurs">
                            <Item text="Pour coller au visuel, on va ajouter du style à la liste et aux items" />
                            <SubItem text="même taille que la section et centrée" />
                            <SubItem text="chaque item a une couleur de fond" />
                            <SubItem text="couleur de texte" />
                            <SubItem text="petite marge" />
                            <SubItem text="liens non soulignés, en majuscule avec un peu de graisse" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Super bonus">
                            <Item text="Vous avez trouvé comment ouvrir dans un nouvel onglet ?" />
                            <Item text="Nouvel attribut de a : target. Avec _blank en value, nouvelle page ouverte au click" />
                            <Item text="On va aussi gérer l'effet au survol" />
                            <Question text="Vous vous souvenez comment faire ? On met le :hover sur quel élément ?" />
                            <Item text="Un tit cadeau, on va rendre la transition plus fluide, spoiler de demain" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Gestion images">
                            <Item text="Dernière ligne droite, le bloc des images" />
                            <Item text="Nouvelle section, le titre et on copie les textes fournis" />
                            <Item text="On organise nos balises avant de passer au style" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <ListItem title="Style images">
                            <Item text="On va styliser la div" />
                            <SubItem text="une largeur, et on la centre" />
                            <SubItem text="un peu d'air, un peu de graisse" />
                            <SubItem text="une bordure" />
                            <Item text="On va aussi limiter la hauteur de l'image à l'intérieur" />
                            <Item text="La largeur s'adaptera automatiquement" />
                        </ListItem>
                        <Demo type="Challenge">
                            <Code step={snippets.challenge[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Voilà pour ce challenge" />
                            <BoxItem text="Un tit rappel sur la gestion des liens, nouvel onglet avec target à _blank" />
                            <BoxItem text="Différents types de sélecteur, plus on est précis mieux c'est" />
                        </Recap>
                        <Transition>
                            <BoxItem text="On va revenir un peu sur les différentes valeurs de display" />
                            <BoxItem text="Comportement de certaines props différent selon le choix qu'on fait" />
                        </Transition>
                    </Card>
                    <Card title="Float and inline-block" duration="1:00:00">
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/CSS/display" />
                        <ListItem title="Valeurs possibles">
                            <Item text="Vous pouvez le voir sur la doc : plein de valeurs possibles" />
                            <Item text="Rassurez-vous, on va pas tout détailler !" />
                            <Item text="On va parler des plus communes : block, inline, inline block et flex" />
                        </ListItem>
                        <ListItem title="display block">
                            <Item text="Valeur par défaut de tous les containers : div, section, article, aside, p, h1 à h6, ..." />
                            <Item text="Comportement : hauteur variable mais prend toute la largeur disponible" />
                            <Item text="Accès à toutes les propriétés du box-model" />
                            <Item text="Même si largeur définie, l'élément suivant sera placé à la ligne" />
                        </ListItem>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/CSS/float" />
                        <ListItem title="Float">
                            <Item text="Dans une disposition en block, on peut utiliser float pour positionner des élément dans le flux" />
                            <Item text="On va jouer un peu avec le aside pour voir comment ça marche" />
                        </ListItem>
                        <Demo type="Display">
                            {console.log(resetSnippet())}
                            <Code step={snippets.display[snippet++]} />
                        </Demo>
                        <ListItem title="display inline">
                            <Item text="a, strong, em, img, ..." />
                            <Item text="Va s'intégrer dans le flux mais props du box-model ne s'appliquent pas dans le flux" />
                            <Item text="demo sur <a> dans Hero Corp #actors" />
                        </ListItem>
                        <ListItem title="display inline-block">
                            <Item text="Mix des 2, contenu inséré dans le flux avec des props box-model qui vont interagir avec le reste" />
                            <Item text="Plus parlant avec un exemple : on va jouer avec le strong de la présentation" />
                        </ListItem>
                        <Demo type="Display">
                            <Code step={snippets.display[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="http://fr.learnlayout.com/toc.html" />
                    </Card>
                    <Card title="Flexbox" duration="1:00:00">
                        <ListItem title="Kezaco">
                            <Item text="Nouveau type de layout" />
                            <Item text="Jusqu'à maintenant, on appliquait des règles sur chaque élément" />
                            <Item text="Avec la flexbox, on va définir un comportement sur le parent, le container" />
                            <Item text="Et on le laisse bosser pour pacer ses enfants correctemnt" />
                            <Item text="Comme l'hôtesse dans un avion qui nous dit où nous placer" />
                        </ListItem>
                        <ListItem title="Jouons avec les images !">
                            <Item text="on va passer la liste pictures en display flex" />
                            <Item text="on va pouvoir tester les différents types d'affichage proposés" />
                        </ListItem>
                        <Doc type="Ressource" url="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" />
                        <Doc type="Ressource" url="https://jonibologna.com/content/flexboxsheet.pdf" />
                        <ListItem title="Une cheat sheet pour nous aider" />
                        <ListItem title="Présentation challenge" />
                    </Card>
                </List>
            </div>
        </Fragment>
    );
}

export default S1E04;