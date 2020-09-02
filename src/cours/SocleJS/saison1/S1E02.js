import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, Question, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce} from "../../../common";
import {day2 as snippets} from "./Code/snippets";

import "../../style.scss"

const S1E02 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Fond et forme</div>
            <div className="Inner">
                <List>
                    <Card title="Correction" duration="0:30:00">
                        <Recap>
                            <BoxItem text="Décollage en douceur" />
                            <BoxItem text="Point sur nos outils, nos nouveaux meilleurs amis" />
                            <BoxItem text="Découverte d'un 1er langage, le shell" />
                            <BoxItem text="Commandes nombreuses qui donnent le contrôle sur système" />
                            <BoxItem text="Markdown : langage de description pour mise en forme texte" />
                            <Question text="Des questions sur ce qu'on a vu hier ?" />
                        </Recap>
                        <Sondage question="Mon matos fonctionne" reponses={['nickel', "presque, j'ai contacté le sav", "non et j'ai rien fait ..."]} />
                        <Sondage question="J'ai pu faire ma présentation en md" reponses={["yep", "nope"]} />
                        <ListItem text="Présentation md">
                            <Item text="Vous deviez donc vous présenter dans un md" />
                            <Item text="Utiliser ce qu'on a vu hier, pour se faire les crocs un peu" />
                            <Question text="Des problèmes là-dessus ?" />
                            <Item text="Je vous propose ma version, évidemment pas de bonne réponse ici" />
                            <Item text="Se rappeler qu'un md commence par un titre et gaffe à la syntaxe" />
                        </ListItem>
                        <Demo type="Markdown">
                            <Code step={snippets.prez[snippet++]} />
                        </Demo>
                    </Card> 
                    <Card title="HTML" duration="1:00:00">
                        <ListItem title="Programme du jour">
                            <Item text="On attaque un peu les choses sérieuse (enfin !!)" />
                            <Item text="Langage HTML : comment ça marche, comment ça se structure, la syntaxe" />
                            <Item text="Un peu de vocabulaire, pas forcément à retenir aujourd'hui" />
                            <Item text="On va répéter ces mots pendant 6 mois, vous finirez par les connaitre" />
                            <Item text="Langage CSS : comment ça marche, comment ça se structure, la syntaxe" />
                            <Item text="Comment ça se lie à HTML, où on peut mettre du CSS" />
                            <Question text="Ca vous va comme programme ?" />
                            <Item text="Bah ça tombe bien ..." />
                        </ListItem>
                        <Doc type="Ressource" url="https://fr.wikipedia.org/wiki/HTML5" />
                        <ListItem title="Syntaxe HTML">
                            <Item text="On va utiliser la version 5 de HTML" />
                            <Item text="C'est le langage qui va nous permettre de donner du contenu à nos pages, le fond" />
                            <Item text="Un doc HTML est très structurée, plusieurs choses obligatoires" />
                            <Item text="Avant de faire un vrai doc, quelques éléments de syntaxe" />
                            <Item text="Va fonctionner avec des balises, les mots-clé sont entourés de <>" />
                            <Item text="Un exemple, ce sera plus parlant" />
                        </ListItem>
                        <Demo type="HTML">
                            {console.log(resetSnippet())}
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Structure HTML">
                            <Item text="Voilà pour la syntaxe, pas très dur à retenir" />
                            <Item text="Exemple, ces balises n'existent pas" />
                            <Item text="On va se faire un vrai fichier qu'on pourra afficher dans le navigateur" />
                            <Item text="On va le faire à la mano, VSCOde a une extension qui permet d'aller plus vite" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Commentaires">
                            <Item text="Remarquez bien la structure du fichier" />
                            <Item text="On met le doctype de côté, c'est vraiment un truc particulier" />
                            <Item text="Sinon, on a une balise globale, html, qui contient head et body" />
                            <Item text="La structure du fichier sera toujours la même" />
                            <Item text="Ce qui va changer : les balises dans head et dans body" />
                            <Item text="On peut lancer le fichier dans le navigateur pour voir" />
                            <Item text="Ctrl + j ouvre un terminal directement dans le bon dossier" />
                            <Item text="google-chrome index.html" />
                        </ListItem>
                        <Sondage question="La balise ancètre d'un doc html s'appelle ..." reponses={["mamie", "html", "doctype"]} />
                        <Sondage question="La balise html contient 2 balises de structure, lesquelles ?" reponses={["meta et title", "h1 et p", "head et body"]} />
                        <ListItem title="Présentation Emmet">
                            <Item text="Vous allez voir comme VSC est sympa" />
                            <Item text="Je vous présente un sous-pote, Emmet ou le doc pour les intimes" />
                            <Item text="Pour ceux qui connaissent : Doc Emmet Brown dans Retour vers le futur" />
                            <Item text="Extension de VSC qui propose plein de raccourcis pour faire du html" />
                        </ListItem>
                        <ListItem title="Tests Emmet">
                            <Item text="Créons nouveau fichier emmet.html" />
                            <Item text="On tape ! et entrée : magique !!" />
                            <Item text="Emmet nous a mis en place tout le squelette de la page, la structure" />
                            <Item text="On n'a plus qu'à mettre notre contenu" />
                            <Item text="Remarquez juste : html a un attribut qui indique la langue utilisée, on modifie en fr" />
                            <Item text="La meta viewport : on s'en sert pas pour l'instant, on la vire" />
                            <Item text="Par défaut, title vaut Document, on peut bien-sûr changer ça aussi !" />
                            <Item text="Je suis un pau maniac sur l'indentation, je la mets comme il faut" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://docs.emmet.io/abbreviations/syntax/" />
                        <ListItem title="Création d'éléments">
                            <Item text="Emmet est vachement puissant, plein de super pouvoirs" />
                            <Item text="On va en voir quelques uns ensemble" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Donnez le raccourci emmet pour créer une div qui contient 2 paragraphes" />
                        </Exo>
                        <ListItem title="div>p*2" />
                        <Exo>
                            <Enonce text="Donnez le raccourci emmet pour créer une ol qui contient 5 li qui chacun contient une balise <a>" />
                        </Exo>
                        <ListItem title="ol>(li>a)*5" />
                        <ListItem title="Vive la doc">
                            <Item text="Voilà quelques exemples" />
                            <Item text="Plein d'autres possibilités, on va pas tout faire y en aurait pour la journée" />
                            <Item text="Je vous ai mis le lien vers la doc, épluchez-la !" />
                            <Item text="Elle est en anglais (je sais je sais ... faut s'habituer)" />
                            <Item text="Elle est aussi bourrée d'exemples de code" />
                            <Item text="si l'anglais vous donne des boutons, vous aurez au moins des exemples de syntaxe" />
                            <Item text="Sérieusement, on vous demande pas d'être bilingue mais y a un minimum syndical" />
                            <Item text="80% de la doc sera en anglais, faut maitriser un tit peu, pas le choix !" />
                        </ListItem>
                        <Recap>
                            <BoxItem text="Syntaxe du html : balises imbriquées les unes dans les autres" />
                            <BoxItem text="Certaines balises n'ont pas besoin d'être fermées" />
                            <BoxItem text="On peut ajouter des infos complémentaires, des attributs" />
                            <BoxItem text="Structure de base d'un fichier HTML : html qui contient head et body" />
                            <BoxItem text="Emmet : on gagne beaucoup de temps grâce à lui" />
                            <BoxItem text="Système de formules pour générer du html super rapidement" />
                        </Recap>
                        <Transition>
                            <BoxItem text="On a un peu de contenu dans notre page, on a mis du fond" />
                            <BoxItem text="Par contre c'est bien moche, enfin c'est pas sexy" />
                            <BoxItem text="Voyons maintenant comment le mettre en forme, le rendre sublime, tout ça ..." />
                            <BoxItem text="Allez, encore un nouveau langage : le CSS" />
                            <BoxItem text="Ready ? C'est parti !" />
                        </Transition>
                    </Card> 
                    <Card title="CSS" duration="3:30:00">
                        <ListItem text="Mini projet : mise en place">
                            <Item text="On va avoir plusieurs fichiers à gérer" />
                            <Item text="Comme on est des gens organisés, on va les ranger dans un dossier" />
                            <Item text="projet/html, on crée un fichier index.html" />
                            <Item text="On va pas le taper, je vous fournis le code" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Fiche récap">
                            <Item text="On peut l'afficher dans le navigateur" />
                            <Item text="C'est une fiche récap de ce qu'on a vu ou verra aujourd'hui" />
                            <Item text="On va partir de ce fond pour ajouter de la forme" />
                            <Item text="Pour ça, on va utiliser du CSS" />
                        </ListItem>
                        <ListItem title="CSS, où le mettre">
                            <Item text="Plusieurs solutions" />
                            <Item text="balise style dans le head, c'est jouable a-quand on veut ajouter 2-3 règles" />
                            <Item text="Si on a plusieurs pages avec le même style, faudra recopier la balise" />
                            <Item text="Si on a de nombreuses règles, ça devient vite le bazar" />
                            <Item text="Principes DRY et SoC : on va préférer placer le code à part dans un autre fichier" />
                        </ListItem>
                        <ListItem title="Mise en place">
                            <Item text="Répertoire css, on ajoute un fichier style.css" />
                            <Item text="Avant d'ajouter des règles, on doit relier cette feuille de style à notre page html" />
                            <Item text="On fait ça dans le head avec une balise link" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Commentaires CSS">
                            <Item text="Notre lien vers le css est en place, on peut écrire nos règles" />
                            <Item text="Parlons un peu de syntaxe" />
                            <Item text="D'abord, comme toujours les commentaires" />
                            <Item text="On va aussi appliquer une première règle au body de la page" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/CSS/Reference" />
                        <ListItem title="Effet immédiat">
                            <Item text="On sauvegarde le fichier et on rafraichit la page" />
                            <Item text="Pour être sûr de prendre en compte les modifs : shift+F5 sur PC, cmd+shift+r sous mac" />
                            <Item text="On peut contrôler visuellement tout de suite, la police de la page a changé !" />
                            <Item text="C'est cool ou bien ?" />
                            <Item text="Je vous donne l'adresse de la bible du CSS et on continue" />
                        </ListItem>
                        <Doc type="Ressource" url="http://www.css-faciles.com/couleurs-css.php" />
                        <ListItem title="Couleurs en html">
                            <Item text="On va ajouter une couleur de fond à notre page" />
                            <Item text="Comme des rideaux sur une fenêtre, ça habille !" />
                            <Item text="Certaines couleurs sont prédéfinies dans html, on peut utiliser leur nom" />
                            <Item text="La propriété css : background-color" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://htmlcolorcodes.com/fr/selecteur-de-couleur/" />
                        <ListItem title="Couleurs héxa">
                            <Item text="On peut aussi indiquer les valeurs rouge, vert et bleu en héxadécimal" />
                            <Item text="Rappel : les chiffres en héxa vont de 0 à ... F" />
                            <Item text="On code chaque couleur sur 2 digits" />
                            <Item text="On met un # devant" />
                            <Item text="Pas facile de choisir une couleur au jugé, y a des outils en ligne qui facilitent la vie" />
                            <Item text="On va se mettre un vert café" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Couleur du texte">
                            <Item text="On peut aussi donner une couelur au texte d'un élément" />
                            <Item text="la propriété à utiliser : color" />
                        </ListItem>
                        <Exo>
                            <Enonce text="Appliquer la couleur de code 666666 au texte du h1 de la page" />
                        </Exo>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="font-size">
                            <Item text="On va donner une taille à notre texte dans le h1" />
                            <Item text="Vous connaissez la propriété ?" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" />
                        <ListItem title="Unités">
                            <Item text="Un mot sur les unités, ici on a mis px pour pixels, y en a d'autres" />
                            <Item text="Une autre que vous verrez souvent : em" />
                            <Item text="Ca indique la taille en % par rapport à celle de l'élément parent" />
                            <Item text="Le navigateur a une taille par défaut (souvent 16px)" />
                            <Item text="Si aucune taille n'est indiquée dans les éléments parents, ça sert de référence" />
                            <Item text="Le % existe aussi, c'est aussi un % de la valeur du parent" />
                        </ListItem>
                        <Exo>
                            <Enonce text="Créer le style pour les h2" />
                            <Enonce text="Appliquer la couleur 0bad93 au texte" />
                            <Enonce text="Chercher dans la doc comment mettre le texte en italic" />
                        </Exo>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Selecteur multiple">
                            <Item text="Je voudrais maintenant tous les h2 et tous les h3 en majuscule" />
                            <Item text="On pourrait mettre la propriété qui va bien sur h2 et rajouter un sélécteur pour h3" />
                            <Item text="On va plutôt éviter une répétition, on va cibler les 2 d'un coup" />
                            <Item text="Pour passer le texte en majuscule : text-transform" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Découverte doc">
                            <Item text="Allez, encore à vous de bosser" />
                            <Item text="Va encore falloir fouiller un peu la doc" />
                            <Item text="Encore un truc qu'on pouvait pas faire en markdown" />
                        </ListItem>
                        <Exo>
                            <Enonce text="Créer le style pour les éléments em" />
                            <Enonce text="Chercher dans la doc comment mettre souligner le texte (propriété text-???)" />
                        </Exo>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Créer le style pour les éléments strong" />
                            <Enonce text="Appliquer une couleur de fond de nom lightyellow" />
                            <Enonce text="Chercher dans la doc comment mettre le texte en gras (propriété font-???)" />
                        </Exo>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout d'une image">
                            <Item text="On ajoute une ballise img à notre fichier html" />
                            <Item text="src permet d'indiquer le chemin vers l'image" />
                            <Item text="on utilise un chemin relatif par rapport à la position de index.html" />
                            <Item text="alt : un texte de description de l'image, utile pour l'accessibilité" />
                            <Question text="L'image se trouve dans le dossier image. C'est quoi le chemin relatif ?" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Style de l'image">
                            <Item text="On va ajouter une bordure à notre image" />
                            <Question text="Une idée comment faire ?" />
                            <Item text="On va arrondir les angle, ce sera plus doux à l'oeil" />
                            <Question text="Comment kon fé ?" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Quelques liens">
                            <Item text="Pour finir, on va ajouter quelques liens vers de la doc" />
                            <Item text="On va bien-sûr styliser l'affichage" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Nouveau sélecteur">
                            <Item text="Remarquez bien l'attribut id sur la balise p" />
                            <Item text="On va l'utiliser pour sélectionner ce paragraphe et lui appliquer du style" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Sélecteur en cascade">
                            <Item text="On va aussi pouvoir cibler les a contenus dans ce paragraphe précis" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Pseudo class">
                            <Item text="Un  dernier truc et je vous laisse tranquilles pour aujourd'hui" />
                            <Item text="On va appliquer un effet quand la souris est au dessus d'un lien" />
                            <Item text="Syntaxe un peu curieuse, je rentre pas trop dans les détails maintenant" />
                        </ListItem>
                        <Demo type="HTML">
                            <Code step={snippets.html[snippet++]} />
                        </Demo>
                        <ListItem title="Présentation challenge" />
                    </Card> 
                </List>
            </div>
        </Fragment>
    );
}

export default S1E02;