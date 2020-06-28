import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce} from "../../../common";
import {bookshelf} from "./Code/challenges";
import {day4 as snippets} from "./Code/snippets";

import "../../style.scss"

const S3E04 = () => {
    let challenge = 0;
    let snippet = 0;

    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Express : routes</div>
            <div className="Inner">
                <Card title="Correction" duration="1:00:00">
                    <List>
                        <Recap>
                            <BoxItem text="Module : le top de l'empaquetage" />
                            <BoxItem text="Module peut exporter tout type de valeur" />
                            <BoxItem text="Mécanisme d'import/export entre app et module" />
                            <BoxItem text="Projet node et npm : installer et utiliser des modules tiers" />
                        </Recap>
                        <Sondage question="Alors ce challenge ?" reponses={["ça a été", "j'ai galéré", "La misère !!"]} />
                        <Transition>
                            <BoxItem text="On revoit tout ça ensemble" />
                        </Transition>
                        <ListItem title="Création table HTML" />
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Installation momentjs">
                            <Question text="Avant de pouvoir installer le package, on doit ?" />
                            <Item text="npm init dans le dossier" />
                            <Item text="package.json est présent, on peut installer moment" />
                            <Item text="Profitons-en, installons nodemon aussi !" />
                            <Item text="npm install --save moment" />
                            <Item text="npm install --save-dev nodemon" />
                            <Item text="Mettons le lancement de nodemon dans un script start" />
                            <Question text="Comment on lance l'appli depuis le terminal ?" />
                        </ListItem>
                        <Doc type="Ressource" url="https://momentjs.com/docs/#/parsing/" />
                        <Doc type="Ressource" url="https://momentjs.com/docs/#/displaying/" />
                        <ListItem title="Formatage date">
                            <Question text="Premier boulot pour utiliser moment dans notre app ?" />
                            <Item text="On l'importe avec require" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Dans doc : moment() donne la date courante, c'est pas ce qu'on veut" />
                            <Item text="Utiliser moment pour afficher la date du livre" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Date affichée mais mauvais format" />
                            <Item text="On re tourne dans la doc" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Ajout age" />
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 1 - locale" />
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 2 - module books" />
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 2 - module bookshelf" />
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Bonus 2 - clean app.js" />
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort" />
                        <ListItem title="Bonus 3 - sortBy" />
                        <Demo type="repo Correction">
                            <Code step={bookshelf.steps[challenge++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Comment va ? Ca rentre les modules ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Installatin module tiers : moment" />
                            <BoxItem text="Super pratique pour manipuler les dates" />
                            <BoxItem text="Quand on connait pas : la doc est notre amie" />
                            <BoxItem text="Nos propres modules pour séparer les rôles" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Quand on a beaucoup de routes : switch fastidieux" />
                            <BoxItem text="Si modif, pas évident de s'y retrouver comme ça" />
                            <BoxItem text="Idéal : avoir une fonction callback par route" />
                            <BoxItem text="Express : LE framework pour faire du web" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Express" duration="2:00:00">
                    <List>
                        <Doc type="Ressource" url="http://expressjs.com/fr/" />                        
                        <ListItem title="Découverte express">
                            <Item text="Pas chien, doc en français" />
                            <Item text="infrastructure = framework" />
                            <Item text="Populaire parce que rapide et sans trop de contraintes" />
                            <Item text="Applis web comme ce qu'on va faire" />
                            <Item text="APIs : Application Programming Interface : on le fera plus tard" />
                        </ListItem>
                        <ListItem title="exemple">
                            <Item text="Mise en route / Installation : pas de feinte, c'est comme d'hab" />
                            <Item text="Hello world : détail require, instanciation, .get" />
                            <Item text="Comparaison syntaxe avec http : 1 callback par route, callback sur listen" />
                            <Item text="Moins verbeux que http, ça a l'air cool !" />
                            <Item text=".send remplace .write et .end on dirait ..." />
                            <Question text="On s'en fait un petit pour tester ?" />
                        </ListItem>
                        <ListItem title="Demo">
                            <Item text="On se crée un rep Express et on le npm init" />
                            <Item text="On installe express : comme dans doc, npm install express" />
                            <Question text="Truc à faire tout de suite pour repo avec node_modules ?" />
                            <Item text=".gitgnore" />
                            <Item text="Nodemon tout de suite, tit script start : nodemon app.js" />
                        </ListItem>
                        <ListItem title="Mise en place Express">
                            <Item text="Architecture en place, on peut coder" />
                            <Item text="Gardons l'exemple de la doc pour nous aider" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <ListItem title="Mise en place routes">
                            <Item text="Le serveur est prêt, définissons une 1ère route" />
                            <Item text="sur la racine /, on va renvoyer un H1 avec Bonjour !" />
                            <Question text="Je vous licoute, qu'est-ce que j'écris ?" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Sur la route /categories : liste ul de thèmes à consulter" />
                            <SubItem text="JavaScript" />
                            <SubItem text="NodeJS" />
                            <Question text="Un 'tit spoiler please ?" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Z'êtes trop forts !!" />
                            <Item text="Allez, un peu plus dur ..." />
                            <Item text="On va se faire un 'tit module texts.js dans un dossier modules" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Importez le module dans app.js" />
                            <Enonce text="Créez les routes en GET /categories/javascript et /categories/nodejs" />
                            <Enonce text="Ces routes doivent renvoyer une div contenant le texte associé" />
                        </Exo>
                        <ListItem title="Exo">
                            <Item text="On ajoute le module avec require" />
                            <Item text="On crée les 2 routes" />
                            <Item text="On utilise response send pour envoyer la div avec le bon texte" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Transformons les li de /categories en liens vers nos nouvelles routes" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Mise en place d'un serveur Express" />
                            <BoxItem text="Définition des routes de notre mini site" />
                            <BoxItem text="Plus propre, plus lisible que le switch avec http" />
                        </Recap>
                        <Transition>
                            <Item text="Les 3 routes /categories ont un contexte commun, elles font sens ensemble" />
                            <Item text="Ce serait bien de pouvoir les grouper dans un module à part" />
                            <Item text="On passerait ce module à la route /categories d'Express" />
                            <Item text="Le module gèrerait les 3 routes" />
                            <Item text="On va pouvoir faire ça avec un object du package : Router" />
                        </Transition>
                        <Doc type="Ressource" url="https://expressjs.com/fr/guide/routing.html" />
                        <ListItem title="Router">
                            <Item text="Scroll en fin de page : exemple avec Router" />
                            <Item text="Module à part qui gère des routes commençant par ..." />
                            <Item text="Essayons avec les catégories, créons un nouveau module categories" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On reporte les routes /categories de app.js dans le nouveau module" />
                            <Item text="On remplace app. par router. en enlevant /categories des routes" />
                            <Item text="On aura besoin du module texts, on l'importe" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On importe ce nouveau module dans app.sj (plus besoin de texts.js ici)" />
                            <Item text="On utilise la syntaxe de l'exemple pour utiliser notre router" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="On peut regrouper des routes dans un module à part avec Router" />
                            <BoxItem text="Permet d'avoir un module par unité de sens" />
                            <BoxItem text="C'est plus rangé, l'app principale plus clean" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Appli fonctionne, c'est cool, essayons de l'améliorer encore" />
                            <BoxItem text="Les 2 routes /js et /node ont un traitement très similaire" />
                            <BoxItem text="Très envie de les factoriser : on n'aime pas se répéter" />
                            <BoxItem text="Faudrait paramétrer le traitement : Express le permet !!" />
                        </Transition>
                        <Doc type="Ressource" url="http://expressjs.com/fr/api.html#req.params" />
                        <ListItem title="Requête paramétrée">
                            <Item text="Dans la doc on voit : param dans route s'écrit :nom_param" />
                            <Item text="Il sera placé dans l'object params de la requête" />
                            <Item text="Essayons ça : on commente les 2 routes et on crée une nouvelle avec un param" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Dans request.params, prop test avec la valeur passée dans l'url" />
                            <Question text="Comment on peut utiliser ça pour factoriser le traitement ?" />
                            <Item text="if ou switch, ok mais pas top ..." />
                            <Item text="On doit récupérer une prop du module texts" />
                            <Question text="Comment récup une prop d'object depuis une variable ?" />
                            <Item text="object.prop ou object['propName']" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="On peut paramétrer une partie de la route avec :nom_param" />
                            <BoxItem text="On récup la valeur du paramètre dans request.params" />
                            <BoxItem text="OBject avec paire clé/valeur nom du param/valeur du param" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Nos routes sont propres et bien rangées, c'est cool" />
                            <BoxItem text="On va améliorer notre page d'accueil" />
                            <BoxItem text="Rien d'extraordinaire mais au moins lien vers /categories" />
                            <BoxItem text="String avec des balises pas top, vite fastidieux" />
                            <BoxItem text="Voyons plutôt comment serveur peut envoyer un fichier index.html" />
                        </Transition>
                        <ListItem title="Views">
                            <Item text="Créons un new rep views et dedans, index.html" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="response.send envoie une string, ça va pas, faut qu'on trouve autre chose" />
                            <Item text="Direction la doc : sendFile" />
                        </ListItem>
                        <Doc type="Ressource" url="http://expressjs.com/fr/api.html#res.sendFile" />
                        <ListItem>
                            <Item text="d'après doc, sans option root, path doit être absolu" />
                            <Item text="On peut mettre le chemin en dur, pas génial pour déployer ..." />
                            <Item text="Node à la rescousse : __dirname pointe sur répertoire courant dans FS" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Utilisons cette var pour indiquer le chemin vers index.html" />
                        </ListItem>
                        <Demo type="express">
                            <Code step={snippets.express[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Des questions sur tout ça ?" />
                        </Control>
                        <Sondage question="Avec Express, on peut facilement ..." reponses={["prendre un TGV", "créer un serveur", "créer un module"]} />
                        <Sondage question="Pour envoyer une string au client, on utilise ..." reponses={["response.send()", "une enveloppe", "request.url"]} />
                        <Sondage question="Pour envoyer un fichier au client, on utilise ..." reponses={["require", "un mail", "response.sendFile()"]} />
                        <Sondage question="Pour paramétrer une route, on note ..." reponses={["/param", "/:param", "/_param"]} />
                        <Recap>
                            <BoxItem text="Minisite qui utilise une page index.html et des modules pour générer du contenu" />
                            <BoxItem text="Bon 'tit tour d'horizon de ce que permet Express" />
                            <BoxItem text="Reste PLEIN de fonctionnalités : épluchez la doc" />
                            <BoxItem text="Déjà vu comment envoyer un fichier html, créer nos routes, les ranger, les factoriser" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Essayons de transformer notre projet fourchette over http" />
                            <BoxItem text="Rendre plus beau, plus modulaire en utilisant express et new connaissances" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Routage" duration="2:00:00">
                    <List>
                        <ListItem title="Application challenge fourchette over http">
                            <Item text="Maintenant qu'on sait, nettoyons ce jeu de la fourchette !" />
                            <Item text="Essayons de mettre la logique du jeu dans un module" />
                            <Item text="Dossier modules, fichier fourchette.js" />
                            <Item text="On prend toute la logique et on la met dans le nouveau fichier" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Bon, on a tout cassé ..." />
                            <Item text="On va se créer un object qui va contenir notre logique" />
                            <Item text="Variables locales, non accessibles depuis l'extérieur" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant, retour au serveur" />
                            <Item text="On va remettre notre jeu en état" />
                            <Item text="D'abord, import et init du module" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Et c'est parti, modifions le cas plus" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Puis le moins" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Puis le bravo" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Enfin le cas par défaut" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Améliorons un chouille : bouton rejouer quand on a gagné" />
                            <Item text="2 vars : gameButtons et winButton" />
                            <Item text="A chaque case ses buttons" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Tout le monde est là ? J'ai perdu personne ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Toute la logique du jeu est dans le module" />
                            <BoxItem text="La gestion des requêtes et des réponses : server.js" />
                            <BoxItem text="Séparation des pouvoirs, séparation des rôles" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Maintenant, expressifions notre serveur" />
                        </Transition>
                        <ListItem>
                            <Item text="Installons express : pas oublier npm init ..." />
                            <Item text="Nodemon dans le script start" />
                            <Item text="Et on y va, on commente le serveur exitant" />
                            <Item text="On refait avec express" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On voit déjà que header et footer vont se répéter" />
                            <Item text="Comme les boutons, on les met dans des var" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On continue avec les 3 autres routes" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Bon, l'appli est expressifiée, elle fonctionne" />
                            <Item text="Mais on peut encore faire mieux" />
                            <Item text="On a vu comment extraire les routes avec un routeur" />
                            <Item text="Faisons un module routes.js pour utiliser ça" />
                            <Item text="On aura besoin du module jeu et des éléments html : on les déplace" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Routeur est prêt, on l'importe dans le serveur" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Des questions ? Vous m'avez suivi ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Encore une fois, déplacer une partie de la logique dans un module à part" />
                            <BoxItem text="L'appli principale est super clean maintenant !" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Peut-être temps de rendre l'appli plus sexy ..." />
                            <BoxItem text="Un peu de CSS, ça vous dit ?" />
                        </Transition>
                        <ListItem title="Assets">
                            <Item text="Mais comment on va pouvoir l'intégrer ?" />
                            <Item text="Comme d'hab, un link dans le header HTML" />
                            <Item text="Mais en plus, une 'tite route pour envoyer le fichier quand le client va le demander" />
                            <Question text="Vous vous souvenez comment on envoie un fichier ?" />
                            <Item text="Comme index.html tout à l'heure, avec sendFile" />
                            <Item text="Créons un dossier assets et un fichier style.css" />
                            <Item text="On va se concenter sur express, je vous donne le css" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ajoutons une route vers ce fichier dans routes.js" />
                            <Item text="On ajoute aussi une balise link dans le header" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant, ajoutons des class à nos éléments html" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Rôôô, c'est beau comme tout !!" />
                            <BoxItem text="On a modifié le HTML côté serveur : class + link" />
                            <BoxItem text="On a ajouter une route qui fait correspondre /style.css à notre fichier" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Maintenant, une 'tite page d'accueil ce serait sympa ..." />
                        </Transition>
                        <ListItem title="Accueil">
                            <Item text="On doit modifier un peu notre code pour libérer la route /" />
                            <Item text="On va l'appeler /new à la place" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On va ajouter un fichier home.html dans le dossier assets" />
                            <Item text="Je vous donne le code, on se concentre sur express" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Modifions la route / pour la faire pointer sur le fichier home.html" />
                            <Item text="Je vous laisse 2 minutes pour le faire ?" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On ajoute un peu de JS côté front ?" />
                            <Item text="Créons un fichier messages.js dans assets" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Le script utilise des classes CSS, je vous les donne" />
                            <Item text="On les ajoute dans style.css" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On ajoute une balise script dans htmlFooter et dans home.html" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On ajoute une route /messages.js qui pointe sur le fichier" />
                            <Item text="Comme pour home.html et style.css : on verra comment factoriser ça" />
                        </ListItem>
                        <Demo type="Fourchette express">
                            <Code step={snippets.fourchette[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ca va ? Pas trop perdus avec tous ces aller-retours ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Possible d'ajouter des fichiers, suffit d'avoir la route qui va bien" />
                            <BoxItem text="Ajout page d'accueil, css et JS côté front" />
                            <BoxItem text="Pas chômé mais belle appli !" />
                        </Recap>
                        <Transition>
                            <BoxItem text="On a juste un peu de répétition pour récupérer les assets" />
                            <BoxItem text="On verra plus tard comment faire plus efficacement" />
                        </Transition>
                        <ListItem title="Présentation challenge" />
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S3E04;