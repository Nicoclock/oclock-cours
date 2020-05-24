import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage} from "../../../common";
import * as code from "./code";

import "../../style.scss"

const S2E07 = props => {
    return (
        <Fragment>
            <div className="Title">Fonction avancées</div>
            <div className="Inner">
                <Card title="ESLint" duration="0:30:00">
                    <List>
                        <Control>
                            <Sondage question="Alors cet atelier ?" reponses={["sympa", "j'ai souffert", "j'ai envie de me pendre"]} />
                        </Control>    
                        <Doc type="Ressource" url="https://eslint.org/" /> 
                        <ListItem title="Présentation ESLint">
                            <Item text="Avant d'attaquer correction, outil très utile" />
                            <Question text="Est-ce que vous savez ce qu'est un linter ?" />
                            <Item text="Analyse du code pour identifier + rapidement les problème" />
                            <Item text="Capable de les corriger automatiquement" />
                            <Item text="Fonctionne avec des règles pré-définies(built-in) ou règles qu'on définit (custom)" />
                        </ListItem>
                        <ListItem title="Installation npm">
                            <Item text="Commençons par l'installer : npm, gestionnaire de paquets de node" />
                            <Item text="Vu plus en détail dans les saisons suivantes" />
                            <Item text="npm install -g eslint" />
                            <Item text="-g installe au niveau du système, dispo dans tous les projets futurs" />
                        </ListItem>
                        <Control>
                            <Sondage question="Installation eslint ok ?" reponses={["yep", "nope"]} />
                        </Control>
                        <ListItem title="Installation plugin">
                            <Item text="Plugin VSCode le rend dispo dans notre éditeur" />
                            <Item text="Installation : " />
                            <SubItem text="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" />
                            <SubItem text="Via le gestionnaire d'extensions : eslint dans zone recherche" />
                            <SubItem text="Ligne de commande : code --install-extension dbaeymer.vscode-eslint" />
                        </ListItem>
                        <Control>
                            <Sondage question="Installation plugin eslint ok ?" reponses={["yep", "nope"]} />
                        </Control>
                        <ListItem title=".eslintrc env">
                            <Item text="Pour le configurer : .eslintrc à la racine du projet" />
                            <Item text="Config : object presque JS, JSON" />
                            <Item text="Attention : double quotes obligatoires" />
                            <Item text="Environnement d'exécution : ici browser" />
                            <Item text="On se prépare pour la suite : es6 pour accepter la nouvelle syntaxe" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JSON" code={code.eslintEnv} />
                        </Demo>
                        <ListItem title=".eslintrc extends">
                            <Item text="Pour que le linter fonctionne, on utilise des règles pré-définies" />
                            <Item text="Rôle de la ligne extends : on choisit les règles recommandées" />
                            <Item text="Nombreuses autres set de règles dispos" />
                        </ListItem>
                        <Doc type="Resosurce" url="https://eslint.org/docs/rules/" />
                        <Doc type="Ressource" url="https://www.npmjs.com/search?q=eslint-config" />
                        <Demo type="repo Invader">
                            <Code language="JSON" code={code.eslintExtends} />
                        </Demo>
                        <ListItem title=".eslintrc rules">
                            <Item text="On peut ajouter nos propres règles" />
                            <Item text="Format : ruleId: ruleSeverity" />
                            <Item text="off: désactive, warn: avertissement en jaune, error : signale un pb en rouge" />
                            <Item text="On peut ajouter une option, dans ce cas : ruleId: [ruleSeverity, option]" />
                            <Item text="Définissons quelques règles" />
                            <SubItem text="La 1ère indique de signaler une erreur quand indentation !== 4" />
                            <SubItem text="La 2nde : erreur si string entourée de autre chose que '...'" />
                            <SubItem text="La 3ème : erreur si ; manquant en fin d'instruction" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JSON" code={code.eslintRules} />
                        </Demo>
                        <ListItem title="ESLint disable">
                            <Item text="Dans certains cas, besoin de désactiver une règle" />
                            <Item text="On peut le faire pour une ligne ou pour un fichier" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JSON" code={code.eslintDisable} />
                        </Demo>
                        <Control>
                            <Sondage question="ESLint c'est ... ?" reponses={["de la balle", "intéressant mais compliqué", "du souci pour rien"]} />
                        </Control>
                        <Transition>
                            <BoxItem text="Code avec toujours la même syntaxe" />
                            <BoxItem text="Sorte de correcteur d'orthographe pour JS" />
                            <BoxItem text="Outil en place, on peut commencer à coder" />
                            <BoxItem text="Ready pour la correction ?" />
                        </Transition>
                    </List>                    
                </Card>
                <Card title="Correction" duration="4:30:00">
                    <List>
                        <Doc type="repo Invader" url="http://localhost:1235/E06/Invader/html/invader.html" />
                        <ListItem title="Mise en place grille">
                            <Item text="On va 2 vars pour la taille de la grille et la taille de chaque pixel" />
                            <Item text="On va stocker la div target dans une var drawingBoard" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderVars} />
                        </Demo>
                        <ListItem>
                            <Item text="Création grille : on utilise 2 boucles for imbriquées" />
                            <Item text="POUR les lignes de 1 à 8" />
                            <Item text="POUR les colonnes de 1 à 8" />
                            <Item text="On crée un pixel et on l'ajoute à la ligne courante" />
                            <Item text="On ajoute la ligne à la div target" />
                            <Item text="On se met tout ça dans une fonction" />
                            <Item text="On oublie pas de l'appeler en fin de fichier" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderDrawBoard} />
                        </Demo>
                        <ListItem>
                            <Item text="Tout de suite un peu de refactoring" />
                            <Item text="Mise en fonction du style des lignes et des pixels" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderRefactStyle} />
                        </Demo>
                        <ListItem>
                            <Item text="Eléments existent dans le DOM" />
                            <Item text="on complète le style avec CSS" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="CSS" code={code.invaderStyleStart} />
                        </Demo>
                        <ListItem title="Click sur pixel">
                            <Question text="Comment vous pensez gérer les couleurs ici ?" />
                            <Item text="On va utiliser les class CSS" />
                            <Item text="On va les manipuler avec .classList, tab des classes d'un élément" />
                            <Item text="Faisons déjà les classes CSS" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="CSS" code={code.invaderStylePixels} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant, gestion du click" />
                            <Question text="De quoi on va avoir besoin pour ça ?" />
                            <Item text="Listener event click attaché à chaque pixel" />
                            <Item text="Méthode pour le traitement" />
                            <Question text="Comment on va savoir de quel pixel il s'agit ?" />
                            <Item text="Méthode devra utiliser l'argument par défaut, event" />
                            <Item text="event.target contiendra le pixel concerné" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderClickHandle} />
                        </Demo>
                        <ListItem title="Formulaire">
                            <Item text="Remplissons le formulaire" />
                            <Item text="Un champ pour saisir la taille de la grille, type number" />
                            <Item text="Un bouton pour valider le formulaire" />
                            <Item text="On met ça dans une fonction, on l'appelle en fin de fichier" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderFillForm} />
                        </Demo>
                        <ListItem>
                            <Item text="C'est affreux, on retourne vite dans le CSS" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="CSS" code={code.invaderFormCss} />
                        </Demo>
                        <ListItem>
                            <Item text="Petit problème de scroll" />
                            <Question text="Vous voyez d'où ça vient ? Comment on corrige ?" />
                            <Item text="Du à la height qu'on a mis au formulaire" />
                            <Item text="On corrige avec calc()" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="CSS" code={code.invaderHeightCorrect} />
                        </Demo>
                        <ListItem>
                            <Item text="Il nous reste la gestion de la validation" />
                            <Question text="Quel événement on va utiliser ici ? Sur quelle cible ?" />
                            <Item text="event submit sur le formulaire" />
                            <Item text="On lui passe methode handleSubmit qu'on va définir" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderListener} />
                        </Demo>
                        <ListItem>
                            <Question text="Qu'est-ce va vouloir faire à la validation ?" />
                            <Item text="Mettre à jour gridSize avec la prop value du champ" />
                            <Item text="Effacer la grille existante" />
                            <Item text="Créer une nouvelle grille avec la nouvelle taille" />
                            <Item text="Commençons par la fonction pour effacer la grille" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderClearBoard} />
                        </Demo>
                        <ListItem>
                            <Item text="Faisons la méthode handleSubmit" />
                            <Question text="Est-ce qu'on aura besoin du param event ?" />
                            <Item text="On va vouloir empècher le rechargement de la page : event.preventDefault" />
                            <Item text="Pour input, on va utiliser tab childNodes du formulaire" />
                            <Item text="1er élément, input, 2nd le bouton" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderHandleSubmit} />
                        </Demo>
                        <Control>
                            <Sondage question="Comment va jusque là ?" reponses={["ok c'est clair", "je vais relire la correction", "je vais me faire agriculteur dans la creuse"]} />
                        </Control>
                        <Recap>
                            <BoxItem text="On a réutilisé les boucles" />
                            <BoxItem text="On a pousser un peu plus les événements" />
                            <BoxItem text="event.target : plein de props utiles" />
                        </Recap>
                        <Transition>
                            <BoxItem text="C'est le bazard, y en a partout" />
                            <BoxItem text="On va empaqueter tout ça dans un object" />
                        </Transition>
                        <ListItem title="Refactoring">
                            <Item text="On va l'appeler app" />
                            <Item text="Pour commencer, gridSize et pixelSize en prop" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderApp} />
                        </Demo>
                        <ListItem>
                            <Item text="On va ensuite définir une méthode init" />
                            <Item text="On y place l'initialation des targets drawingArea et form qu'en transforme en prop" />
                            <Item text="On appelle app.init() en fin de fichier" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderInitPart} />
                        </Demo>
                        <ListItem>
                            <Item text="Passons aux autres fonctions" />
                            <Item text="setLineStyle, setPixelStyle et handlePixelClick, pas de feinte" />
                            <Item text="On appelle ça des fonctions pures, elles ne modifient pas les autres props de l'object" />
                            <Item text="il suffit de les transformer en prop de l'object" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderPure} />
                        </Demo>
                        <ListItem>
                            <Item text="Faisons maintenant drawingBoard et resetBoard" />
                            <Item text="Elles utilisent d'anciennes variables" />
                            <Item text="Bien faire gaffe d'utiliser les props de app" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderDraw} />
                        </Demo>
                        <ListItem>
                            <Item text="Même mécanisme avec handleSubmit et fillForm" />
                            <Item text="Bien faire gaffe d'utiliser les props de app" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderReste} />
                        </Demo>
                        <ListItem>
                            <Item text="Enfin, il reste les appels à drawBoard et fillForm" />
                            <Item text="On va les placer dans la méthode init" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderInitFull} />
                        </Demo>
                        <ListItem>
                            <Item text="Okay, on va maintenant ajouter un champ au formulaire pour pixelSize" />
                            <Item text="On va créer une méthode generateInput qu'on va appeler dans fillForm" />
                            <Item text="2 choses vont changer entre les 2 inputs : le placeholder et la value" />
                            <Item text="On les passe en param de generateInput" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderGenerateInput} />
                        </Demo>
                        <ListItem>
                            <Item text="Avant de continuer, un truc me chifonne" />
                            <Item text="Arrondi devrait être sur le premier champ seulement" />
                            <Question text="Une idée de comment faire ça ?" />
                            <Item text="Le plus optimisé : pseudo class css :first-child" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="CSS" code={code.invaderInputCss} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant que c'est beau, occupons-nous de récupérer la valeur" />
                            <Item text="On modifie handleSubmit dans ce sens en récupérant childNodes[1]" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderSubmitFull} />
                        </Demo>
                        <ListItem title="Palette de couleurs">
                            <Item text="Commençons par ajouter le tableau à notre app" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderStyle} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour attribuer la couleur au pixel, on va jouer sur sa class CSS" />
                            <Item text="On définit donc 2 nouvelles calsses : pixel-light et pixel-highlight" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="CSS" code={code.invaderStyleCss} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant, ajoutons nouvelle méthode, addPalette, pour générer l'élément" />
                            <Item text="On l'appelera depuis la méthode init" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderPalette1} />
                        </Demo>
                        <ListItem>
                            <Item text="Avant de continuer, faisons la class palette dans le CSS" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="CSS" code={code.invaderPaletteCss} />
                        </Demo>
                        <ListItem>
                            <Item text="La palette est crée, il faut la remplir" />
                            <Item text="On va utiliser la prop style" />
                            <Item text="C'est un tableau, on va boucler dessus et créer un élément par item" />
                            <Item text="On pourrait le faire avec un for mais autre possibilité : forEach" />
                            <Item text="Méthode qu'on peut appliquer sur un tableau pour le parcourir" />
                            <Item text="Paramètre : une fonction callback avec un paramètre, l'élément courant du tableau" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderPalette2} />
                        </Demo>
                        <ListItem>
                            <Item text="Vous voyez le principe ? la fonction est exécuter pour chaque élément du tableau" />
                            <Item text="Créons une méthode addStyle avec un paramètre style" />
                            <Item text="Passons-la en paramètre de forEach" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderAddStyle} />
                        </Demo>
                        <ListItem>
                            <Item text="Le forEach a bien créé 4 éléments <a>" />
                            <Item text="On a affiché le nom du style, c'est pas ce qu'on veut" />
                            <Item text="On va pourtant avoir besoin d'associer le nom du style à notre <a>" />
                            <Item text="Comme d'hab, plusieurs solutions possibles : on va utiliser dataset" />
                            <Item text="Permet d'ajouter des attributs exotiques à une balise html" />
                            <Item text="Ils seront de la forme data-xxx" />
                            <Item text="Valides même si non définis dans la spec" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderDataset} />
                        </Demo>
                        <ListItem>
                            <Item text="Les éléments sont bien créés, il serait temps qu'on les voit !" />
                            <Item text="Ajoutons-leur un peu de CSS" />
                            <Item text="On ajoute une class générale et une autre spécifique selon le style" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderAddStyle2} />
                        </Demo>
                        <ListItem>
                            <Item text="On passe au CSS" />
                            <Item text="Ces class palette__color--modifier auront les même props que les class pixel--modifier" />
                            <Item text="On passe utilise un selecteur multiple pour ces class" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="CSS" code={code.invaderAddStyleCss} />
                        </Demo>
                        <ListItem>
                            <Item text="Ayé, on voit les couleurs dans la palette !" />
                            <Item text="Avant de s'occuper du click, définissons couleur courante dans l'object, value plain" />
                            <Item text="Si la couleur courante === element courant, new class CSS pour la distinguer" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderDefaultColor} />
                        </Demo>
                        <ListItem>
                            <Item text="On définit ce nouveau modifier dans le CSS" />
                            <Item text="On va en profiter pour appliquer un style en cas de survol de la souris" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="CSS" code={code.invaderActive} />
                        </Demo>
                        <ListItem>
                            <Item text="Qu'est-ce qui doit se passr au click de la souris ?" />
                            <SubItem text="On enlève la class --active de l'ancienne couleur" />
                            <SubItem text="On récupère le <a> concerné avec event.target" />
                            <SubItem text="On lui assigne la class active" />
                            <SubItem text="On utilise son dataset pour récup nouveau style" />
                            <SubItem text="On met à jour la prop app.chosenStyle" />
                            <Item text="Allons-y, créons déjà la fonction de callback" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderColorClick} />
                        </Demo>
                        <ListItem>
                            <Item text="Il nous reste à ajouter un listener sur les <a> couleur" />
                            <Item text="On va le faire dans addStyle" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderAddStyle3} />
                        </Demo>
                        <ListItem>
                            <Item text="Ca fonctionne dans la palette mais la couleur dessinée n'a pas changé" />
                            <Item text="On doit modifier handlePixelClick, le if ne fait plus le boulot" />
                            <SubItem text="On va supprimer toutes les classes pixel--modifier en parcourant tableau styles" />
                            <SubItem text="On va ajouter la class correspondante à chosenColor" />
                        </ListItem>
                        <Demo type="repo Invader">
                            <Code language="JavaScript" code={code.invaderPixelClick} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Voilà, notre appli est complète" />
                            <BoxItem text="Pas mal de pratique sur les événements, sur classList" />
                            <BoxItem text="On a découvert forEach et dataset" />
                        </Recap>
                        <Control>
                            <BoxItem text="Maintenant qu'on a fait la correction" />
                            <Sondage question="Comment vous le sentez ?" reponses={["ok, je pourrais le refaire", "mouais, faut que je relise", "râââ râââ râââ"]} />
                        </Control>
                        <Transition>
                            <BoxItem text="Vous vous dites que la journée a été dure ?" />
                            <BoxItem text="Bah désol, mais c'est pas fini" />
                            <BoxItem text="Je veux juste vous avertir : le challenge de ce soir est un peu costaud" />
                            <BoxItem text="Le but : pas forcément de finir mais de chercher !" />
                            <BoxItem text="De toute façon à 3h30 du mat', tout le monde au lit !" />
                            <BoxItem text="Je déconne !! Sérieusement, n'y passez pas la nuit !" />
                        </Transition>
                        <ListItem text="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S2E07;