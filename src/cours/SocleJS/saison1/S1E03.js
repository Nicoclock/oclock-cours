import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Recap, Transition, Demo, BoxItem, Sondage} from "../../../common";
import {day3 as snippets} from "./Code/snippets";

import "../../style.scss"

const S1E03 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
        <div className="Title">Box-model</div>
        <div className="Inner">
            <List>
                <Card title="Correction" duration="1:30:00">
                    <Recap>
                        <BoxItem text="Bases du html : syntaxe, structure d'un fichier" />
                        <BoxItem text="Quelques balises, hierarchie et imbrication" />
                        <BoxItem text="Appliquer du style avec css" />
                        <BoxItem text="DRY et SoC : on met le style dans un fichier à part" />
                        <BoxItem text="Sélecteurs et syntaxe" />
                    </Recap>
                    <Sondage question="Alors ce challenge ?" reponses={["trop fastoche", "des trucs pas clairs encore", "rôlala, la misère !"]} />
                    <Transition>
                        <BoxItem text="Souvenez-vous, si vous avez galéré, c'est normal !" />
                        <BoxItem text="On a vu tout ça hier seulement, ça peut pas rentrer comme ça" />
                        <BoxItem text="On va repratiquer ensemble et à force de le faire, ce sera de + en + facile" />
                    </Transition>
                    <ListItem title="Structure de fichiers">
                        <Item text="1er boulot, on prépare notre projet" />
                        <Item text="On est organisé, propre sur nous, on crée un dossier pour le html, un pour le css" />
                        <Item text="On est aussi des pros, on se fait ça dans le terminal, si si !" />
                        <Item text="J'ouvre un shell, je me place dans mon répertoire Recette-pancakes" />
                        <Item text="Dites-moi tout, comment je peux créer mes 2 répertoires ?" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Création fichiers">
                        <Question text="On va avoir besoin de quoi comme fichiers ?" />
                        <Item text="Un pour le html qu'on va appeler index.html" />
                        <Item text="Un pour le style qu'on va appeler style.css" />
                        <Item text="On les place chacun dans le dossier qui va bien" />
                        <Question text="C'est quoi déjà la commande pour créer un fichier vide ?" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Fichier html">
                        <Item text="On est opé on peut lancer VSCode" />
                        <Item text="Je suis dans le bon répertoire, je peux lancer avec la commande code ." />
                        <Item text="On va commencer par pré-remplir notre fichier html" />
                        <Item text="Grâce au doc, ! + entrée et c'est (presque) fini" />
                        <Item text="Comme Marie, c'est pas parce que c'est déjà fait ..." />
                        <Item text="On modifie la langue, le titre (et l'indentation pour les maniacs)" />
                        <Item text="On peut aussi tout de suite ajouter le lien vers notre fichier de style" />
                        <Item text="Dites-moi tout, j'écris quoi ?" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Mise en place structure, les titres">
                        <Item text="Les textes à mettre en place étaient fournis, on commence par les copier dans le body de la page" />
                        <Item text="On analyse un peu pour deviner quels balises mettre en place" />
                        <Item text="D'abord, la structure, le fond. On s'occupera du style quand ce sera en place" />
                        <Item text="On s'aide de l'image sur le README ou de l'image resultat.png" />
                        <Item text="D'abord le titre, c'est quoi comme balise ?" />
                        <Item text="On a aussi 4 gros textes en rouge, c'est quoi pour vous ?" />
                        <Item text="Et dans le coup, ces textes soulignés ?" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Reste du texte">
                        <Item text="Et le reste alors ? Moi je vois 3 types de balises à ajouter" />
                        <Item text="Vous en pensez quoi vous ?" />
                        <Item text="Pour le texte en bord de page : des paragraphes" />
                        <Item text="Pour les listes à puces, une liste non ordonnée" />
                        <Item text="Pour la liste à nombres, une liste ordonnée" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Contrôle visuel">
                        <Item text="On jette un coup d'oeil ?" />
                        <Item text="On lance la page dans chrome depuis le terminal (si, si, encore !)" />
                        <Item text="Au niveau structure, on a l'air pas mal" />
                        <Item text="On va pouvoir s'occuper du style maintenant" />
                    </ListItem>
                    <ListItem title="Style de base">
                        <Item text="D'abord, on va styliser le body" />
                        <Item text="La couleur de fond et la font" />
                        <Item text="En mettant les infos sur la font dans body, ça s'appliquera à toutes les balises à l'intérieur" />
                        <Item text="Pour la font, parfois très dur de deviner, on essaie de s'approcher au max" />
                        <Item text="Beaucoup d'éléments centrés, on va appliquer ça au body aussi" />
                        <Item text="Comment je peux centrer le texte ?" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Style h1">
                        <Item text="Pour le body, on est pas mal" />
                        <Item text="On passe au titre de la page, le h1" />
                        <Item text="4 choses à remarquer ici sur le résultat attendu" />
                        <SubItem text="taille du texte" />
                        <SubItem text="couleur de fond" />
                        <SubItem text="texte en blanc" />
                        <SubItem text="texte en majuscule" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Style h2">
                        <Item text="Pour les h2, qu'est-ce que vous avez noté ?" />
                        <SubItem text="Taille du texte" />
                        <SubItem text="Couleur du texte" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Style h3">
                        <Item text="Les h3 maintenant, dites-moi tout" />
                        <SubItem text="texte en italic" />
                        <SubItem text="texte normal, pas en gras" />
                        <SubItem text="texte souligné" />
                        <SubItem text="peut-être la taille du texte ?" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Paragraphes et listes">
                        <Item text="On va aligner les listes et paragraphes à gauche" />
                        <Item text="On le fait en un seul coup, avec un sélecteur multiple" />
                        <Item text="On va aussi définir une règle pour les paragraphes, pas la même couleur que les listes" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="détails">
                        <Item text="Il nous reste des bricoles à régler" />
                        <Item text="Certains éléments de texte sont mis en évidences, il faut qu'on le fasse sur la page" />
                        <Item text="Vous vous en êtes tirés comment là-dessus ?" />
                        <Item text="On va utiliser 2 balises qu'on a vu un peu hier : stropng et em" />
                        <Item text="On les met en place dans le html" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Style détails">
                        <Item text="L'affichage est bien modifié mais c'est pas le bon style" />
                        <Item text="On ajoute une règle pour ces éléments" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Ajout du visuel" />
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Ajout des liens vers images">
                        <Item text="Les liens mug et crêpière, vous pouviez choisir l'image qui vous plaisait" />
                        <Item text="Ce que je mets là c'est juste une proposition" />
                        <Item text="On leur met un peu de style pour coller au visuel" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Ancres">
                        <Item text="Vous voyez que la pâte et cuisson sont des liens aussi" />
                        <Item text="Vont pas pointer sur des images comme les autres mais vers des éléments de la page" />
                        <Item text="On peut scoller vers ces éléments en utilisant un id" />
                        <Item text="On met cet id sur les 2 h3 dans instructions" />
                        <Item text="Dans le href des liens, on met l'id précédée d'un #, comme un sélecteur CSS" />
                        <Item text="C'est cool ou bien ?" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <ListItem title="Dernier bonus">
                        <Item text="On procède de la même façon, d'abord on ajoute le fond, le contenu au html" />
                        <Item text="Pour le style, on va utiliser un nouveau truc, vous aviez le lien : les classes" />
                        <Item text="Dans une classe css, on va lister un certain nombre de règles" />
                        <Item text="On va pouvoir les appliquer à plusieurs balises qui peuvent être différentes" />
                        <Item text="On va utiliser l'attribut class sur les balises" />
                        <Item text="Et une nouvelle syntaxe pour le sélecteur dans le css" />
                        <Item text="#+nom pour l'id, .+nom pour la class" />
                    </ListItem>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Demo type="Challenge">
                        <Code step={snippets.challenge[snippet++]} />
                    </Demo>
                    <Recap>
                        <BoxItem text="On a fait notre première intégration" />
                        <BoxItem text="On est parti d'un visuel et on l'a reproduit aussi fidèlement que possible en html" />
                        <BoxItem text="On a repratiqué ce qu'on a vu hier : balises html, règles css" />
                        <BoxItem text="On a aussi découvert quelques nouveauté : liens vers un élément via son id" />
                    </Recap>
                    <Transition>
                        <BoxItem text="C'est pas encore limpide tout ça ? C'est normal" />
                        <BoxItem text="Faut le pratiquer, c'est ce qu'on va faire tout de suite" />
                        <BoxItem text="On va encore découvrir de nouvelles choses" />
                        <BoxItem text="Et parler de comment les balises s'intègrent dans la page" />
                        <BoxItem text="Elles utilisent un set de règles, le box model" />
                    </Transition>
                </Card>
                <Card title="BoxModel" duration="3:30:00">
                    <ListItem title="Nouveau projet">
                        <Item text="On va partir d'un exemple, une nouvelle intégration à faire" />
                        <Item text="Je récupère le repo avec git clone" />
                        <Item text="On a les textes à intégrer dans textes.txt" />
                        <Item text="Et le visuel pour nous guider" />
                        <Item text="Avant de découvrir de nouveaux trucs, faisons ce qu'on sait faire déjà" />
                    </ListItem>
                    <ListItem title="Intégration textes">
                        <Item text="JLe fichier index.html est créé, j'ouvre VSCode dans le bon dossier" />
                        <Item text="Je modifie un peu le html parce que je suis maniac" />
                        <Item text="Je récupère les textes et je les copie dans le body de la page" />
                    </ListItem>
                    <Demo type="Chaussons">
                        {console.log(resetSnippet())}
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Bonne pratique">
                        <Item text="Pour commencer, on va mettre tout le contenu dans une div" />
                        <Item text="Pas obligatoire mais bonne pratique" />
                        <Item text="On évite de donner du style à body sauf pour les trucs TRES génériques" />
                        <Item text="En général, la font-family, un background pis c'est tout" />
                        <Item text="Je crée ma div, je lui donne un id pour la cibler facilement dans le css" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Balises sémantiques">
                        <Item text="Maintenant on va parler de sémantique, vous savez ce que c'est ?" />
                        <Item text="Le smoteurs de recherche utilisent des robots pour référencer les pages" />
                        <Item text="Plus la structure des pages sera claire, plus ce sera facile pour eux" />
                        <Item text="Pareil pour les outils d'accessibilité" />
                        <Item text="Balises spéciales : se comportent comme des divs mais ont des noms avec une signification" />
                        <Item text="Si on regarde le visuel, on a :" />
                        <SubItem text="une partie haute, l'entête ou le header" />
                        <SubItem text="une partie principale, le main" />
                        <SubItem text="une partie basse, le pied de page ou footer" />
                        <Item text="On les met en place" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Sémantique sur le header">
                        <Item text="On va prendre la même logique et utiliser une balise spéciale pour le menu" />
                        <Item text="C'est un menu de navigation, on a une balise qui s'appelle justement nav" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Sémantique dans main">
                        <Item text="Pareil dans le main, on peut voir 2 zones à l'intérieur" />
                        <Item text="Dessin à l'écran" />
                        <Item text="Une autre balise sémantique : section" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Sémantique dans section">
                        <Item text="Dans la 2ème section, on a cette fois 3 zones qu'on peut découper" />
                        <Item text="Dessin à l'écran" />
                        <Item text="Une autre balise sémantique : article" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Balises complémentaires">
                        <Item text="On a donné du sens à notre structure" />
                        <Item text="Même pour les humains, elle apparait de façon plus évidente" />
                        <Item text="On ne laisse pas du texte brut dans une page" />
                        <Item text="On complète avec des balises classiques" />
                        <Item text="On ajoute également l'image' fournie" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <Doc type="Demo" url="https://codepen.io/ncerminara/pen/RLMwmy" />
                    <ListItem title="Harmoniser les navigateurs">
                        <Item text="Vous voyez : sans aucune règle CSS, le navigateur a déjà appliqué des trucs" />
                        <Item text="Ca parait pratique mais ça peut être très handicapant" />
                        <Item text="Quand on fait un site, on veut qu'il s'affiche de la même façon sur tous les navigateurs" />
                        <Item text="On a plusieurs fichiers des règles CSS qui permettent d'harmoniser les props CSS de départ" />
                        <Item text="Démo site" />
                        <Item text="Vous pourrez choisir celui qui vous parait le mieux" />
                        <Item text="Perso, j'aime bien reset.css, je le mets en place sur ma page" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Priorité CSS">
                        <Item text="Gaffe à l'ordre des fichiers CSS" />
                        <Item text="C'est un peu comme en politique, c'est le dernier qui a parlé qui a raison" />
                        <Item text="Je mets bien le reset AVANT styles" />
                        <Item text="Ce qu'on mettra dans style va écraser les valeurs dans reset, c'est bien styles qui va gagner" />
                        <Item text="Ca peut paraitre violent quand on rafraichit ..." />
                        <Item text="Mais dans le coup, c'est nous qui déciderons VRAIMENT le style à appliquer" />
                    </ListItem>
                    <ListItem title="Un peu de style">
                        <Item text="On regarde un peu le visuel et on analyse" />
                        <Item text="On a une couleur de fond pour la page, une autre pour le contenu lui-même" />
                        <Item text="On a bien fait de faire une div container (j'avais un plan en fait ...)" />
                        <Item text="On s'occupe du body, on v alui mettre une font-family aussi" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Style container">
                        <Item text="Le container maintenant : on va lui donner un bg et une largeur" />
                        <Item text="Faut qu'on trouve le moyen de centrer cette div" />
                        <Item text="Bonne occaz de parler du box model : schéma pas mal dans l'inspecteur" />
                        <Item text="Exemple du corps : os, padding=graisse et chair, border=peau, margin=espace de danse" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <Sondage question="Quelle est la largeur totale du container ?" reponses={["auto", "775px", "800px"]} />
                    <ListItem title="Style header">
                        <Item text="On va s'occuper du header : le h1, la nav et son contenu" />
                        <Item text="On a de l'air autour des liens, un bg, le titre est bien big" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Style des liens">
                        <Item text="On est pas mal sur les positions" />
                        <Item text="Mais les liens sont pas comme il faut" />
                        <Item text="Avant la section header dans le css, on ajoute une section général" />
                        <Item text="L'ordre n'a pas de conséquence sur l'affichage, c'est plus pour la lisibilité" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Style des h2">
                        <Item text="On va s'occuper des h2, vous en dites quoi vous ?" />
                        <SubItem text="Taille du texte" />
                        <SubItem text="texte en gras" />
                        <SubItem text="Couleur du texte" />
                        <SubItem text="texte centré" />
                        <SubItem text="texte en majuscule" />
                        <SubItem text="Un peu d'air en haut et en bas" />
                        <SubItem text="Un peu de gras en bas" />
                        <SubItem text="Une bordure en bas" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Style image">
                        <Item text="Faut faire quelque chose pour cette image aussi" />
                        <Item text="Pour l'instant, elle déborde, c'est pas top ..." />
                        <Item text="Des idées de votre côté ?" />
                        <SubItem text="une largeur" />
                        <SubItem text="une bordure arrondie" />
                        <SubItem text="centrée" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="display">
                        <Item text="On est mieux mais le margin a pas fonctionné" />
                        <Item text="En fait une image c'est comme une balise a, elle est inline" />
                        <Item text="C'est à dire que par défaut, elle va se placer à la suite du flow" />
                        <Item text="Je m'explique : quand on fait une div, elle s'étale sur toute la largeur disponible" />
                        <Item text="L'élément suivant sera forcément placé à la ligne" />
                        <Item text="Regardez nos liens en bas de page : ils se sont mis à la suite du texte sans revenir à la ligne" />
                        <Item text="Pour l'image, c'est pareil, il faut qu'on force l'élément à s'étaler sur toute la largeur" />
                        <Item text="On peut le faire avec la prop display, on remplace le inline par défaut par block" />
                        <Item text="Ca va lui donner le même comportement qu'une div et le margin auto va marcher" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Style h3">
                        <Item text="Les h3 maintenant, vous en dites quoi ?" />
                        <SubItem text="Plus petits que les h2" />
                        <SubItem text="En gras" />
                        <Item text="Pas trop méchant celui-là" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Style p">
                        <Item text="Pour le main, il nous reste encore les paragraphes" />
                        <SubItem text="C'est pas la même police j'ai l'impression" />
                        <SubItem text="On a besoin d'air en haut et en bas" />
                        <SubItem text="Le texte prend toute la largeur dispo" />
                        <SubItem text="On va joueur sur la taille des lignes et l'écart entre les lettres" />
                        <Item text="C'est pas vraiment nécessaire, c'est plus pour vous montrer les props" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Style footer">
                        <Item text="On y est presque, on s'approche du but" />
                        <Item text="Il ne reste plus que le footer, alors vous diriez quoi ici ?" />
                        <SubItem text="Couleur de fond" />
                        <SubItem text="Un peu d'air en haut" />
                        <SubItem text="Un peu de gras pour ne pas étouffer le texte" />
                        <Item text="Pour ses paragraphes" />
                        <SubItem text="texte centré" />
                        <SubItem text="plus petit que dans le main" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <ListItem title="Pinaillerie de la fin">
                        <Item text="Arf, presque, faut pas qu'on ait ce blanc autour du footer" />
                        <Item text="On a moyen de l'enlever, vous avez une idée ?" />
                        <Item text="On va joueur sur la marge et réduire son espace de danse dans le coup" />
                        <Item text="On peut mettre des valeurs négatives aussi" />
                        <Item text="Le padding du conteneur est de 15 et 20px, on va réduire la marge du footer d'autant" />
                        <Item text="On laisse 50px en haut, on change les valeurs de right, bottom et left" />
                    </ListItem>
                    <Demo type="Chaussons">
                        <Code step={snippets.chaussons[snippet++]} />
                    </Demo>
                    <Recap>
                        <BoxItem text="Et là c'est nickel, mission accomplie ! Fiouf ..." />
                        <BoxItem text="C'était plus costaud aujourd'hui !" />
                        <BoxItem text="A retenir, le box model : un os, du gras, une peau et de l'air" />
                        <BoxItem text="un contenu, du padding, une border, une margin" />
                        <BoxItem text="display inline : s'affiche au fil du texte" />
                        <BoxItem text="display block : prend la largeur dispo, éléments suvants à la ligne" />
                        <BoxItem text="On a vu pas mal de trucs et astuces en CSS, je vous laisse relire tout ça tranquille" />
                        <BoxItem text="Pas mal de props ont ces notations multiples (padding, margin, ...)" />
                        <BoxItem text="1 valeur s'applique aux 4 côtés" />
                        <BoxItem text="2 valeurs : top-bottom, left-right" />
                        <BoxItem text="4 valeurs : dans le sens des aiguilles d'une montre, top, right, bottom, left" />
                        <BoxItem text="Avec auto, on laisse le navigateur calculer s'il le peut" />
                    </Recap>
                    <ListItem title="Présentation challenge" />
                </Card>
            </List>
        </div>
    </Fragment>
);
}

export default S1E03;