import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage, Exo, Enonce, Snippet, ExoSondage} from "../../../common";
import {worldtime} from "./Code/challenges";
import {day5 as snippets} from "./Code/snippets";

import "../../style.scss"

const S3E05 = () => {
    let challenge = 0;
    let snippet = 0;

    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Express : vues</div>
            <div className="Inner">
                <Card title="Correction" duration="2:00:00">
                    <List>
                        <Recap>
                            <BoxItem text="Express : LE framework pour serveur web" />
                            <BoxItem text="Séparation des rôles avec les modules" />
                            <BoxItem text="Routes dans module avec router" />
                            <BoxItem text="Routes paramétrables avec :param" />
                            <BoxItem text="Envoi d'une string avec response.send" />
                            <BoxItem text="Envoi d'un fichier avec response.sendFile" />
                        </Recap>
                        <Sondage question="Alors ce challenge ?" reponses={["ça a été", "j'ai galéré", "La misère !!"]} />
                        <Transition>
                            <BoxItem text="Allez, on se le corrige" />
                        </Transition>
                        <ListItem title="Init projet">
                            <Item text="Dans le dossier du projet : npm init" />
                            <Item text="Installation express et moment : npm install express moment" />
                            <Item text="On vérifie dans package.json : les dépendances sont bien ajoutées" />
                            <Item text="On en profite pour faire le script start avec nodemon" />
                        </ListItem>
                        <Doc type="Ressource" url="https://momentjs.com/timezone/docs/" />
                        <ListItem title="Fuseaux horaires">
                            <Item text="En anglais : timezone" />
                            <Item text="On demande à google : node + moment + timezone" />
                            <Item text="Package proposé : moment-timezone. On l'installe" />
                        </ListItem>
                        <ListItem title="Création serveur">
                            <Item text="Commençons par créer le serveur" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Création 1ère route">
                            <Item text="Serveur en place, on peut créer la route" />
                            <Item text="On veut envoyer le fichier index.html" />
                            <Question text="Quel va être le chemin à indiquer ?" />
                            <Question text="Quelle méthode de response on va utiliser ?" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Détail capitales">
                            <Item text="Module avec les infos : on l'importe" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Route paramétrée">
                            <Item text="Au survol des liens, la route est de la forme /city/cityName" />
                            <Item text="On sait comment paramétrer une route comme ça" />
                            <Question text="Pour ajouter un paramètre cityName à la route, on va écrire ?" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Création module de gestion">
                            <Item text="Pour gérer affichage des infos : module de gestion" />
                            <Item text="On va l'appeler cityTime : ajout dans my_modules et import dans app" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Ce module va gérer :" />
                            <SubItem text="Identification de la ville concernée dans une liste" />
                            <SubItem text="Affichage de la date et l'heure" />
                            <Item text="On peut déjà importer moment et moment-timezone" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On se crée un object pour empaqueter la logique" />
                            <Item text="On crée direct une méthode pour lui indiquer une liste de villes" />
                            <Item text="Dans app, on initialise la liste avec le contenu de capitalCities" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On doit identid-fier la timezone de la ville sélectionnée" />
                            <Item text="Coup d'oeil dans la doc : tz est une string de la forme continent/ville" />
                            <Question text="Dans capitalCities, on n'a pas un truc qui ressemble ?" />
                            <Item text="Dans cityTime, on va devoir récupérer object ville et utiliser champ tz" />
                            <Item text="Attention : dans les links, nom en minuscule. Dans module, capitalize" />
                            <Item text="Pour harmoniser, méthode de string : toLowerCase" />
                            <Item text="Créons méthode avec paramètre city qui va récupérer l'object" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Essayons d'utiliser cette méthode dans notre app" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Timezone identifiée, on ajoute 2 méthodes au module" />
                            <SubItem text="Une pour afficher le jour" />
                            <SubItem text="Une pour afficher l'heure'" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Module cityTime est pas mal, on a tout ce qui faut" />
                            <Item text="On l'utilise dans app.js pour générer la page de desc des capitales" />
                            <Item text="Variables à ajouter : on doit générer la string complète et utiliser response.send()" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem title="Locales">
                            <Item text="On est pas mal mais dates seraient mieux en français" />
                            <Item text="Méthode setLocale dans cityTime pour plus de souplesse" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Remarquez : on peut faire un require où on veut dans le code" />
                            <Item text="Merci JS : souple et permissif, pratique" />
                            <Item text="On initialise les locales dans app.js" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Ca va jusqu'ici ? Des questions ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Pratique du jeu de ping poong entre les modules et l'app" />
                            <BoxItem text="Revu moment et découvert moment-timezone" />
                            <BoxItem text="Require peut être utilisé où on veut" />
                        </Recap>
                        <ListItem title="Bonus 1">
                            <Item text="On ajoute une réponse si la capitale n'est pas trouvée" />
                            <Item text="'tit coup d'oeil dans doc express : comment indiquer le status" />
                        </ListItem>
                        <Doc type="Ressource" url="https://expressjs.com/fr/api.html#res.status" />
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://momentjs.com/timezone/" />
                        <ListItem title="Bonus 2">
                            <Item text="On peut utiliser la map dispo sur le site de moment" />
                            <Item text="Ajout de Reykjavik (Islande), Antananarivo (Madagascar)" />
                            <Item text="On les ajoute dans le module capitalCities" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Puis dans index.html" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Normalement, c'est tout ... On teste !" />
                        </ListItem>
                        <ListItem title="Bonus 3">
                            <Item text="on doit déplacer la logique de date et heure dans un module à part" />
                            <Item text="On ajoute un fichier timezone.js dans my_modules" />
                            <Question text="Qu'est-ce qu'on va devoir mettre dedans ?" />
                            <Item text="Tout ce qui concernen moment et moment-timezone" />
                            <Item text="En plus, méthode pour récup object city" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On retire cette logique de cityTime bien sûr" />
                            <Item text="Il nous reste à modif app.js pour use ce new module" />
                        </ListItem>
                        <Demo type="repo Correction">
                            <Code step={worldtime.steps[challenge++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Pas trop mal au crâne ?" />
                            <BoxItem text="Clair pour vous comment on extrait de la logique d'un point à un autre ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Pas mal d'aller-retour modules/app encore" />
                            <BoxItem text="Ca arrivera souvent ..." />
                        </Recap>
                        <Transition>
                            <BoxItem text="Maintenant, j'ai quelques infos sur l'atelier de demain ..." />
                            <BoxItem text="Y aura des technos à utiliser qu'on a pas encore vues" />
                            <BoxItem text="On va peut-être les regarder maintenant ? Ca vous dit ?" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Static" duration="1:00:00">
                    <List>
                        <ListItem title="Factorisation routes statiques">
                            <Item text="Vu hier, répétition dans les routes de la fourchette" />
                            <Item text="On parle de fichiers statiques : pas de variable, écrits dans le marbre" />
                            <Item text=".html, .js pour front, .css, toutes les images, vidéos, ..." />
                            <Item text="Tous les fichiers avec sendFile sont dans rep assets" />
                            <Item text="On n'aime pas se répéter, faudrait un moyen de factoriser" />
                            <Item text="De dire : pour toutes les routes non définies, regarde dans ce dossier" />
                            <Item text="Bonne surprise : Express le permet !" />
                        </ListItem>
                        <Doc type="Ressource" url="https://expressjs.com/fr/starter/static-files.html" />
                        <Doc type="Ressource" url="http://localhost:1235/E05/Static" />
                        <ListItem title="Démo">
                            <Item text="Récup repo et npm install" />
                            <Item text="app.js : structure de base d'un serveur express, pas de routes" />
                            <Item text="dossier assets avec une image, un html et un css" />
                            <Item text="script start avec nodemon" />
                        </ListItem>
                        <Sondage question="J'ai pu lancer le serveur ?" reponses={["yep", "nope"]} />
                        <ListItem>
                            <Item text="On suit la doc, ajout du dossier statique assets" />
                            <Item text="Pour accéder à une ressource du dossier, le path (chemin) / pointera en fait sur /assets/" />
                        </ListItem>
                        <Demo type="static">
                            <Code step={snippets.static[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Le chemin / est transformé en /assets/index.html" />
                            <Item text="La page s'affiche mais on n'a pas linké le css" />
                            <Item text="A vous de jouer : ajoutez 2 balises link à index.html" />
                            <Item text="1 pour reset.css, une pour style.css" />
                            <Item text="Gaffe à la valeur de href" />
                        </ListItem>
                        <Demo type="static">
                            <Code step={snippets.static[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pas très organisé tout ça ..." />
                            <Item text="Ajoutons un dossier css dans assets pour y ranger les fichiers" />
                            <Item text="On a cassé les liens, modifiez le href des balises link pour prendre la modif en compte" />
                        </ListItem>
                        <Demo type="static">
                            <Code step={snippets.static[snippet++]} />
                        </Demo>
                        <Exo>
                            <Enonce text="Ajoutez un dossier js à assets" />
                            <Enonce text="Ajoutez un fichier script.js dans le dossier js" />
                            <Enonce text="Dans ce fichier, ajoutez une commande qui va appliquer l'animation turn à l'image" />
                            <Enonce text="L'animation doit durer 5 secondes, être linéaire et boucler à l'infini" />
                            <Enonce text="Enfin, ajoutez ce script à la fin du body de index.html" />
                            <Enonce text="A vous de jouer !" />
                        </Exo>
                        <Demo type="static">
                            <Code step={snippets.static[snippet++]} />
                        </Demo>
                        <Demo type="static">
                            <Code step={snippets.static[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="C'est bon pour vous cette histoire de static ?" />
                        </Control>
                        <Exo>
                            <Enonce text="Dans un serveur Express, on a la ligne suivante :" />
                            <Snippet lines={snippets.static[snippet++].code} />
                            <ExoSondage question="Quel sera le href pour accéder au fichier `./public/assets/css/style.css` ?"
                                reponses={['href="/style.css"', 'href="/css/style.css"', 'href="/public/assets/css/style.css"']} />
                        </Exo>
                        <Exo>
                            <Enonce text="Dans un serveur Express, on a la ligne suivante :" />
                            <Snippet lines={snippets.static[snippet++].code} />
                            <ExoSondage question="Quel sera le src pour accéder au fichier `./public/assets/images/logo.jpg` ?"
                                reponses={['href="/logo.jpg"', 'href="/images/logo.jpg"', 'href="/assets/images/logo.jpg"']} />
                        </Exo>
                        <ListItem>
                            <Item text="Maintenant qu'on maîtrise, on peut modifier la fourchette !" />
                            <SubItem text="Ajouter le rep assets en statique dans server.js" />
                            <SubItem text="Retirer ou commenter les routes qui pointes vers assets dans modules/routes.js" />
                            <Item text="Vous essayez de le faire ?" />
                        </ListItem>
                        <Demo type="static">
                            <Code step={snippets.static[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Pour indiquer un répertoire contenant des ressources statiques, express.static()" />
                            <BoxItem text="Le répertoire indiqué devient la racine des paths vers les ressources" />
                            <BoxItem text="Les ressources statiques : de tout type, .html, .css, .js, images, vidéos, ..." />
                        </Recap>
                        <Transition>
                            <BoxItem text="Les statics, on est pas mal" />
                            <BoxItem text="Maintenant, ce serait cool de pouvoir utiliser des variables dans un fichier .html" />
                            <BoxItem text="Ca éviterait ces strings pénibles dans nos routes, ça fait pas propre ..." />
                            <BoxItem text="En plus, c'est dans la liste des technos pour l'atelier ..." />
                            <BoxItem text="On va voir comment utiliser des templates pour générer du html avec EJS" />
                        </Transition>
                    </List>
                </Card>
                <Card title="Templates EJS" duration="2:00:00">
                    <List>
                        <ListItem title="Moteur template">
                            <Item text="On va donc se débarasser des strings html dans nos toutes routes" />
                            <Item text="On va utiliser un moteur de templates, EJS" />
                            <Item text="Générer du HTML en utilisant un modèle qu'on va pouvoir configurer" />
                            <Item text="Allons déjà jeter un coup d'oeil à la doc" />
                        </ListItem>
                        <Doc type="Ressource" url="https://ejs.co/" />
                        <ListItem title="EJS">
                            <Item text="On parcoure un peu ..." />
                            <Item text="On peut l'utiliser sous node, en LDC, dans le navigateur ... pratique !" />
                            <Item text="Oui bon, on comprend pas tout : pas grave, empèche pas de jouer" />
                            <Item text="Pas limpide ... Voyons si on peut pas trouver plus clair pour commencer" />
                            <Item text="Demandons à google : express + templates" />
                        </ListItem>
                        <Doc type="Ressource" url="https://expressjs.com/fr/guide/using-template-engines.html" />
                        <ListItem title="Express + templates">
                            <Item text="Utilise pug, autre moteur mais le principe va être le même" />
                            <Item text="Faudra indiquer le répertoire avec nos vues" />
                            <Item text="Aussi le moteur qu'on va devoir utiliser" />
                        </ListItem>
                        <Doc type="Ressource" url="https://github.com/mde/ejs/wiki/Using-EJS-with-Express" />
                        <ListItem>
                            <Item text="Voyons si on trouve pas une doc + adaptée" />
                            <Item text="google : express + ejs" />
                            <Item text="Basic setup : ça a l'air parfait" />
                            <Item text="Bon, qu'on se perde pas ... Un 'tit projet pour tester" />
                        </ListItem>
                        <ListItem title="Demo">
                            <Item text="Répertoire EjsDemo" />
                            <Item text="Init en une seule commande" />
                            <Item text={`npm init && npm install express ejs`} />
                            <Item text="On s'ajoute le script start avec nodemon" />
                            <Item text="On monte un serveur basic sur le port 3000" />
                        </ListItem>
                        {console.log(resetSnippet())}
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On lance le serveur et on reprend la doc" />
                            <Item text="On crée le répertoire views" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On essaie une première vue simple, sans variable" />
                            <Item text="views/index.ejs : tiens, emmet marche avec ejs !" />
                        </ListItem>
                        <ListItem>
                            <Item text="Cool, on a un index.html, rien de bien neuf ici" />
                            <Item text="Voyons maintenant cette histoire de variable ..." />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Doc type="Ressource" url="https://ejs.co/#docs" />
                        <ListItem>
                            <Item text="Doc ejs, on avait des exemples du langage" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Cool, voyons si ça marche avec un number" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On scroll un peu la doc EJS" />
                            <Item text="Include a l'air intéressant ..." />
                            <Item text="Avec ça, on va pouvoir utiliser des partials" />
                            <Item text="Des bouts de HTML qu'on va importer dans la vue finale" />
                            <Item text="Dossier partials, header.ejs, footer.ejs" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="index.ejs : on essaie les includes" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On se fait une deuxième vue, page.ejs" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On ajoute un lien dans index vers la nouvelle page" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="On ajoute la route dans app.js" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="Alors ce carrelage ? Magnifique non ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="Mis en place EJS" />
                            <BoxItem text="Ajouté 2 vues au projet" />
                            <BoxItem text="Joué un peu avec paramètres et includes" />
                            <BoxItem text="Partials nous permettent d'éviter la répétition" />
                            <BoxItem text="include de bouts de HTML configurables" />
                        </Recap>
                        <Transition>
                            <BoxItem text="Si on reprend le 1er exemple sur doc EJS" />
                            <BoxItem text="On voit qu'on peut inclure des structures JS" />
                            <BoxItem text="Ca a l'air tentant ... On se fait un if ?" />
                        </Transition>
                        <Exo>
                            <Enonce text="Créez une nouvelle vue description.ejs" />
                            <Enonce text="inclure les partials header et footer" />
                            <Enonce text="le titre de la page : My beautiful description" />
                            <Enonce text="Incluez 2 <p> avec vos nom et prénom" />
                            <Enonce text="Ces infos devront être passées en paramètres" />
                            <Enonce text="Ajoutez un paramètre showNom à true" />
                            <Enonce text="SI showNom est vrai, afficher le <p> qui contient le nom" />
                            <Enonce text="SINON afficher un <p> avec 'Nom inconnu'" />
                            <Enonce text="Ajoutez une route /description à app.js pour faire un rendu de cette vue" />
                            <Enonce text="Ajoutez un lien dans l'index.ejs qui pointe sur cette nouvelle route" />
                            <Enonce text="Testez ! Passez showNom à false pour voir ..." />
                        </Exo>
                        <Exo>
                            <Enonce text="Bonus : passez un tableau de passions en paramètre à description.ejs" />
                            <Enonce text="Ajoutez un <ul> à description" />
                            <Enonce text="Faites un <li> de chaque valeur du tableau avec un for" />
                        </Exo>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="On a conditionné notre traitement" />
                            <BoxItem text="Le nom ne s'affiche que si showNom vaut true" />
                            <BoxItem text="Voyons le bonus vite fait" />
                        </Recap>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Transition>
                            <BoxItem text="Voyons comment on peut utiliser ça sur la fourchette" />
                        </Transition>
                        <ListItem title="Retour fourchette">
                            <Item text="On ajoute ejs au projet" />
                            <Item text="On configure express pour l'utiliser" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Dossiers views et views/partials" />
                            <Item text="4 partials : header, footer, gameButtons, winButton" />
                            <Item text="On commente dans modules/routes.js" />
                        </ListItem>
                        <ListItem title="home.ejs">
                            <Item text="On crée une vue pour home" />
                            <Item text="On copie le contenu de body dans assets/home.html" />
                            <Item text="Ajout de header et footer" />
                            <Item text="Modif dans modules/routes.js" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem title="game.ejs">
                            <Item text="Pour la page de jeu, on crée game.ejs" />
                            <Item text="On peut déjà mettre les partials header et footer" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Pour chaque étape du jeu, on aura un message différent" />
                            <Item text="On aura besoin de paramètres" />
                            <Item text="Action pour savoir sur quelle route on est et notre object game" />
                            <Item text="Faisons /new déjà" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Maintenant dans game.ejs, on ajoute le test sur action pour le message" />
                            <Item text="On en profite, on fait tout de suite la logique des buttons" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Même démarche pour les autres routes" />
                            <Item text="Dans server.js, on fait un render en passant l'action et l'object game en paramètres" />
                            <Item text="Dans game.ejs, on ajoute un cas à notre 1er if" />
                            <Item text="Pour plus et moins, le message est le même, on peut les grouper" />
                        </ListItem>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Demo type="ejs">
                            <Code step={snippets.ejs[snippet++]} />
                        </Demo>
                        <Control>
                            <BoxItem text="On est bon là-dessus ? Des questions ?" />
                        </Control>
                        <Recap>
                            <BoxItem text="On a adapté notre jeu fourchette pour utiliser EJS" />
                            <BoxItem text="Le code du routeur est beaucoup plus clean" />
                            <BoxItem text="On a mieux séparé les rôles" />
                            <BoxItem text="Je pense qu'on est ready pour l'atelier maintenant !" />
                        </Recap>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S3E05;