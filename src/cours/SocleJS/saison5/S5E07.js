import React, {Fragment} from "react";

import {Card, Doc, Code, List, Click, ListItem, Item, SubItem, Question, Control, Recap, Transition, Demo, BoxItem, Sondage} from "../../../common";
import {day7 as snippets} from "./Code/snippets";

import "../../style.scss"

const S5E07 = () => {
    let snippet = 0;
    const resetSnippet = () => {
        snippet = 0;
        return snippet;
    };
    return (
        <Fragment>
            <div className="Title">Auth et rôles</div>
            <div className="Inner">
                <List>
                    <Card title="Correction" duration="2:00:00">
                        <Control>
                            <Sondage question="Atelier PP, c'était comment ?" reponses={["très dur !", "costaud mais bon ...", "ça a été"]} />
                        </Control>
                        <Recap>
                            <BoxItem text="Maintenant on a nos modèles et on les a testé (M de MVC)" />
                            <BoxItem text="On va compléter l'architecture du projet" />
                            <BoxItem text="Mise en place des controleurs et des vues" />
                            <BoxItem text="Et on rend le tout disponible sur un site web avec express" />
                            <BoxItem text="C'est parti" />
                        </Recap>
                        <ListItem title="Config du projet">
                            <Item text="Dans le repo, on voit un package.json mais pas de node_modules" />
                            <Item text="1er truc à faire : npm install" />
                            <Item text="On va aussi avoir besoin d'express et d'ejs : npm install express ejs" />
                            <Item text="On a tous le spackages dont on a besoin, on peut compléter l'archi du projet" />
                        </ListItem>
                        <ListItem title="Création serveur express">
                            <Item text="A la racine, on crée index.js" />
                            <Item text="On crée tout de suite un fichier .env avec PG_URL et PORT" />
                            <Item text="On met en place la structure de base du serveur express" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="Mise en places structure dossiers">
                            <Item text="Dans app, on ajoute un fichier router.js, un dossier controllers et un dossier views" />
                            <Item text="Dans controllers, on ajoute le fichier mainController.js" />
                            <Item text="On met en place la structure du routeur dans router.js" />
                            <Item text="On l'importe dans index.js et on l'ajoute comme middleware" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="Première route">
                            <Item text="On déplace index.html dans le dossier views et on le renomme en .ejs" />
                            <Item text="Dans mainController, on met en place une méthode home qui fait un rendu de index.ejs" />
                            <Item text="Dans le router, on branche cette méthode sur la route /" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="Test de la route /">
                            <Item text="On va vérifier que notre structure est correcte" />
                            <Item text="Normalement, la route / devrait répondre si on a pas fait de bétise ..." />
                            <Item text="package.json : on ajoute un script start pour utiliser nodemon" />
                            <Item text="Et moment de vérité : npm start et affichage de la page" />
                            <Item text="Ca passe, la structure est ok, express, le router et le controller communiquent correctement" />
                        </ListItem>
                        <ListItem title="Première vue">
                            <Item text="On va s'occuper de la page d'accueil" />
                            <Item text="On va remplacer les valeurs en dur par des infos de la BDD" />
                            <Question text="De quelles infos on va avoir besoin ici ?" />
                            <Item text="La liste des quiz avec leur auteur" />
                            <Item text="Normalement, avec sequelize, même pas mal" />
                            <Item text="On va pouvoir faire un include de l'auteur grâce aux relations qu'on a mises en place" />
                            <Item text="Dans chaque instance de Quiz, on aura une prop suppélementaire author avec les infos User qui vont bien" />
                            <Item text="La magie de sequelize, on fait des JOIN de façon très transparente" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="Utilisation dans la vue index.ejs">
                            <Item text="Dans la vue on va factoriser l'affichage des quiz" />
                            <Item text="On a passé un tableau de quiz fourni par sequelize à la vue, en param de render" />
                            <Item text="On va boucler sur ce tableau" />
                            <Item text="Puis afficher les infos titre, description et nom de l'auteur pour chaque quiz" />
                            <Item text="On utilise la syntaxe EJS : comment on affiche une valeur ? comment on peut faire un for ?" />
                            <Item text="On en profite pour corriger les paths css : dans la console, gros 404 !" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="Nouvelle route : /quiz/:id">
                            <Item text="Imaginons le raisonnement pour faire ça ..." />
                            <Item text="Faut suivre le chemin depuis la vue jusqu'au router ou l'inverse" />
                            <SubItem text="vue quizz.ejs, on regarde les infos nécessaires" />
                            <SubItem text="titre, description, auteur, nb questions, thèmes, niveau, réponses ..." />
                            <SubItem text="on va devoir recevoir un quiz en param qui centralisera tout ça ..." />
                            <SubItem text="le MCD peut nous aider là-dessus" />
                            <SubItem text="quizController.js : utilisera sequelize pour récupérer le quiz et infos sups en base (include)" />
                            <SubItem text="routeur.js : on crée la route qui pointe vers la méthode du nouveau controleur" />
                            <SubItem text="et on teste !" />
                            <Item text="On y va ? On attaque la vue" />
                        </ListItem>
                        <ListItem title="Forme de notre paramètre quiz">
                            <Item text="Ici, on a besoin du quiz, de son auteur (User), de ses thèmes (Tag), des questions (Question))" />
                            <Item text="Pas de problème jusque là, on a défini des relations pour tout ça" />
                            <Item text="Quiz est directement relié à toutes ces tables" />
                            <Item text="Grâce à sequelize, on aura quiz.author, quiz.questions et quiz.tags" />
                            <Item text="Pour le niveau de la question et les réponses, c'est plus délicat, ils ne sont reliés qu'à question" />
                            <Item text="Il va faloir qu'on fasse un include dans un include" />
                            <Item text="Vous vous souvenez comment on peut faire ça ?" />
                            <Item text="En passant un object au lieu d'une string" />
                            <Item text="On va boucler sur le tableau de questions pour les afficher" />
                            <Item text="On obtiendra le niveau avec question.level et les reponses dans question.answers" />
                            <Item text="On part là-dessus ? allez go !" />
                        </ListItem>
                        <ListItem title="Mise en place partials">
                            <Item text="on déplace quizz.html dans views et on le renomme en ejs" />
                            <Item text="on en profite pour faire 2 partials : un header et un footer" />
                            <Item text="on fait les include qui vont bien dans index et quizz. La syntaxe d'un include ?" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="Remplacement des valeurs en dur dans la 1ère div">
                            <Item text="on utilise les props de quiz" />
                            <Item text="puis de quiz.author" />
                            <Item text="puis de quiz.questions : tableau, on utilise.length pour avoir le nb de questions" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="Liste des thèmes">
                            <Item text="Ici on utilise le tableau quiz.tags, on boucle dessus pour afficher tous les thèmes associés à ce quiz" />
                            <Item text="on modifie le texte ET la class CSS" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="Liste des questions">
                            <Item text="Ici on utilise le tableau quiz.questions, on boucle dessus pour afficher chaque question du quiz" />
                            <Item text="on compte sur sequelize pour associer le niveau et les réponses à chaque question" />
                            <Item text="on veut qu'ils soient inclus dans une prop level et une prop answers pour chaque question" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="quizzController.js">
                            <Item text="Pour la vue on doit être pas mal" />
                            <Item text="Passons au controleur, on crée quizzController.js dans controllers" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout de la route">
                            <Item text="Fiouf, ça c'est de la requête !" />
                            <Item text="Imaginez si on avait du faire ça avec des JOIN !!! L'enfer" />
                            <Item text="Il nous reste à ajouter la route dans router.js" />
                            <Item text="On n'oublie pas de require le nouveau controleur, of course" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.atelier[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="Regardez moi cette requête ... C'est quand-même cool sequelize !" />
                            <BoxItem text="A écrire à la main, je vous raconte pas la misère, casse-gueule au possible !" />
                            <BoxItem text="On va pas corriger les thèmes ensemble, je vous les donnerai dans le repo ce soir" />
                        </Recap>
                        <Transition>
                            <BoxItem text="On va plutôt s'intéresser aux formulaires de connexion/inscription" />
                            <BoxItem text="Voir comment on va authentifier les utilisateurs" />
                            <BoxItem text="Voir comment on va pouvoir gérer les rôles de chaque type d'utilisateur" />
                            <BoxItem text="Pour ça on va parler de la gestion des autorisations" />
                        </Transition>
                    </Card>
                    <Card title="Autorisations">
                        <Doc type="Slides" url="http://localhost:1234/s5/auth" />
                        <ListItem title="Authentification">
                            <Item text="Il faut que la connexion d'un user soit persistante" />
                            <Item text="Il faut aussi s'assurer que c'est un minimum sécurisé" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Password" />
                        <Click dir="bottom" />
                        <ListItem title="Hashage" />
                        <Click dir="bottom x 2" />
                        <ListItem title="Steack">
                            <Item text="Si le user perd son mot de passe, on pourra rien pour lui" />
                            <Item text="Faudra en créer un nouveau, aucun moyen de le récupérer" />
                            <Item text="Vous vous souvenez comment on peut hasher un mot de passe ?" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="bcrypt" />
                        <Click dir="right" />
                        <ListItem title="Session">
                            <Item text="Alors des idées ? Comment savoir qu'un user est connecté ?" />
                            <Item text="Comment on garde des infos de façon sécurisée sans stocker en base ?" />
                        </ListItem>
                        <Click dir="bottom x 2" />
                        <ListItem title="Sécurité">
                            <Item text="On ne gardera que les infos nécessaires" />
                            <Item text="Ca sert à rien de stocker le mot de passe, pas besoin dans les vues" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="Rôles">
                            <Item text="2ème aspect : chaque utilisateur n'aura pas les mêmes droits" />
                            <Item text="Un visiteur ne doit pas pouvoir modifier les quiz" />
                            <Item text="Un admin doit pouvoir le faire !" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="stockage info">
                            <Item text="On va se servir de la BDD pour stocker cette info" />
                            <Item text="On va attribuer un rôle à chaque utilisateur" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Pattern simple">
                            <Item text="On va juste ajouter un champ à notre table user pour stocker le rôle" />
                            <Item text="On verra comment gérer l'accès depuis express à partir de cette info" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Pattern plus complexe">
                            <Item text="Y a d'autres patterns qui permettent une gestion plus fine" />
                            <Item text="Plus complexe à mettre en place, pas besoin pour notre projet" />
                        </ListItem>
                        <Click dir="right" />
                        <ListItem title="URP">
                            <Item text="Top du top, c'est le pattern URP" />
                            <Item text="Détail MCD" />
                        </ListItem>
                        <Click dir="bottom" />
                        <ListItem title="Lecture slide" />
                        <Click dir="right" />
                        <ListItem title="A l'attaque">
                            <Item text="On va commencer par modifier la BDD pour ajouter une colonne rôle" />
                            <Item text="Ensuite, on va mettre en place la logique de connexion/inscription" />
                            <Item text="On va gérer notre session côté express" />
                            <Item text="On va enfin mettre en place une gestion simple des rôles dans notre appli" />
                            <Item text="Ready ? On y va" />
                        </ListItem>
                        <ListItem title="Modification de la table">
                            <Item text="Une idée de la requête pour modifier la table ?" />
                            <Item text="On se connecte à la base et on fait notre requête" />
                        </ListItem>
                        <Demo type="repo Code">
                            {console.log(resetSnippet())}
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <ListItem title="Login">
                            <Item text="Chaque user a un nouveau champ role qui vaut 'user'" />
                            <Item text="On se fera un admin tout à l'heure" />
                            <Item text="Pour l'instant, occupons-nous du login et de l'inscription" />
                            <Item text="Même démarche que tout à l'heure :" />
                            <SubItem text="On met en place la vue" />
                            <SubItem text="Puis le controleur : on va s'en faire un nouveau pour la gestion des users" />
                            <SubItem text="Puis on définit la route" />
                            <SubItem text="Enfin, on teste" />
                            <Item text="Mais 1ère étape : on a besoin de packages supps, on les installe" />
                        </ListItem>
                        <ListItem title="Packages supplémentaires">
                            <Item text="Pour gérer les sessions, on installe express-session" />
                            <Item text="Pour stocker les mots de passe, on installe bcrypt" />
                            <Item text="npm install express-session bcrypt" />
                        </ListItem>
                        <ListItem title="Vue login">
                            <Item text="On copie login.html dans views et on le renomme en .ejs" />
                            <Item text="Include header et footer" />
                            <Item text="On va prévoir l'affichage d'un message d'erreur si l'identification échoue" />
                            <Item text="On va aussi prévoir une variable fields qui contiendra ce qu'a saisi l'utilisateur" />
                            <Item text="On s'ajoute vivement une classe .error dans le css" />
                        </ListItem> 
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <Sondage question="Ca va pour la vue login ?" reponses={["oui c'est bon", "le ternaire me perturbe", "pourquoi on passe cette variable field ?"]} />
                        <ListItem title="Mise en place session">
                            <Item text="Petite entorse au déroulé, on va mettre en place la session dans index.js" />
                            <Item text="On va ajouter 2 autres middlewares" />
                            <SubItem text="Un pour rendre user dans toutes les vues" />
                            <SubItem text="Un pour pouvoir récupérer les données envoyées en POST" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <ListItem title="Controleur user">
                            <Item text="on ajoute userController.js dans le dossier controllers" />
                            <Item text="On définit 2 routes" />
                            <SubItem text="GET /login pour afficher le formulaire" />
                            <SubItem text="POST /login pour vérifier les infos saisies" />
                            <Item text="En cas d'erreur d'identification, on réaffiche la vue login avec l'erreur et les champs saisis" />
                            <Item text="En cas de succès, on va mettre à jour la session et rediriger vers la page d'accueil" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <ListItem title="Routes dans le router">
                            <Item text="Il nous reste à ajouter les 2 routes dans router.js" />
                            <Item text="Une en GET et une en POST vers /login" />
                            <Item text="On n'oublie pas d'importer le nouveau controleur, of course !" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <Sondage question="On est bon là-dessus ?" reponses={["c'est good", "heu ... à relire", "pas clair, pas clair ..."]}/>
                        <ListItem title="Test">
                            <Item text="Test avec un user existant, il m'a filé son mot de passe !" />
                            <Item text="philippe@oclock.io / quizoclock" />
                        </ListItem>
                        <ListItem title="Inscription">
                            <Item text="Même démarche pour l'inscription" />
                            <Item text="La vue, le controleur, la route, un test" />
                        </ListItem>
                        <ListItem title="Vue signup">
                            <Item text="On place le fichier au bon endroit t on le renomme" />
                            <Item text="Include header et footer" />
                            <Item text="Message d'erreur et champs préremplis en cas d'erreur" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <ListItem title="Controleur">
                            <Item text="on ajoute la logique dans userController.js" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <ListItem title="Routes">
                            <Item text="on ajoute les routes dans router.js" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <ListItem title="Test" />
                        <ListItem title="Logout">
                            <Item text="connexion/inscription, on est bon" />
                            <Item text="on va mettre en place la logique du logout et celle de la page de profile" />
                            <Item text="logout : pas de vue à faire, une méthode dans le controleur et une route" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <ListItem title="Profile">
                            <Item text="Je vous donne la vue à placer dans views" />
                            <Item text="On va juste faire un rendu de cette vue dans le controleur" />
                            <Item text="On va faire pointer cette méthode sur la route /profile" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <ListItem title="Modif menu">
                            <Item text="On y est presque !" />
                            <Item text="On va modifier un peu le header.ejs" />
                            <Item text="Si l'utilisateur est connecté :" />
                            <SubItem text="On enlève les liens S'inscrire et se connecter" />
                            <SubItem text="On le remplace par un lien vers la page du compte et un lien déconnexion" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.auth[snippet++]} />
                        </Demo>
                        <Recap>
                            <BoxItem text="On a mis en place les vues, la logique controleur et les routes pour se connecter et s'inscrire" />
                            <BoxItem text="On a modifié le menu pour prendre en compte l'état de l'utilisateur" />
                        </Recap>
                        <Transition>
                            <BoxItem text="On va maintenant utiliser le champ role qu'on a ajouté à User" />
                            <BoxItem text="Par défault, tous les utilisateurs ont le rôle user" />
                            <BoxItem text="On va en modifier un pour lui donner le rôle admin" />
                        </Transition>
                    </Card>
                    <Card title="Roles">
                        <ListItem title="Principe">
                            <Item text="On va ajouter un lien dans le menu si l'utilisateur est admin" />
                            <Item text="Je vais vous donner la vue, on va ajouter un controleur pour en faire le rendu" />
                            <Item text="On va ajouter la route mais on veut en protéger l'accès" />
                            <Item text="Si on tape directement l'url sans être admin, il faut qu'on se fasse gentillement jeter" />
                            <Item text="on va protéger la route avec un nouveau middleware" />
                            <Item text="Si l'utilisateur n'est pas loggué, on redirige sur /login" />
                            <Item text="Si l'utilisateur est loggué mais pas admin, on fait un rendu d'une vue d'erreur que je vais vous donner aussi" />
                            <Item text="S'il est bien admin, on appelle next" />
                        </ListItem>
                        <ListItem title="Déjà le lien" />
                        <Demo type="repo Code">
                            {console.log(resetSnippet())}
                            <Code step={snippets.roles[snippet++]} />
                        </Demo>
                        <ListItem title="vues admin et 401" />
                        <ListItem title="Ajout du controleur admin" />
                        <Demo type="repo Code">
                            <Code step={snippets.roles[snippet++]} />
                        </Demo>
                        <ListItem title="Création du middleware adminMW" />
                        <Demo type="repo Code">
                            <Code step={snippets.roles[snippet++]} />
                        </Demo>
                        <ListItem title="Ajout de la route protégée">
                            <Item text="On va chainer 2 middlewares" />
                            <Item text="Si le premier (adminMW) appelle next, le second qui fait le rendu de la vue sera exécuté" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.roles[snippet++]} />
                        </Demo>
                        <ListItem title="Test avec utilisateur user" />
                        <ListItem title="Passage du user en admin" />
                        <Demo type="repo Code">
                            <Code step={snippets.roles[snippet++]} />
                        </Demo>
                        <ListItem title="Modif du modèle pour prendre en compte le nouveau champ" />
                        <Demo type="repo Code">
                            <Code step={snippets.roles[snippet++]} />
                        </Demo>
                        <ListItem title="Test avec utilisateur admin" />
                        <Recap>
                            <BoxItem text="Pour gérer les accès des utilisateurs, on utilise le champ rôle de la BDD" />
                            <BoxItem text="Selon le rôle, le user va pouvoir ou non accéder à certaines parties du site" />
                            <BoxItem text="Pour en protéger l'accès, on garde la route avec un middleware dédié" />
                            <BoxItem text="On peut chainer les middlewares, on est sûr que si le rendu se fait, le user est admin" />
                        </Recap>
                    </Card>
                </List>
            </div>
        </Fragment>
    );
}

export default S5E07;