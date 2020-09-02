import React, {Fragment} from "react";

import {Card, Doc, Code, List, ListItem, Item, SubItem, Question, Recap, Demo, BoxItem, Sondage} from "../../../common";
import {day9 as snippets} from "./Code/snippets";

import "../../style.scss"

import "../../style.scss"

const S5E09 = () => {
    let snippet = 0;
    return (
        <Fragment>
            <div className="Title">Get Intimate with good Tools</div>
            <div className="Inner">
                <Card title="DJs Michel et Henriette">
                    <List>
                        <Recap>
                            <BoxItem text="Des promesses, des promesses, toujours des promesses !" />
                            <BoxItem text="Callback hell : les limites des callbacks chaînés" />
                            <BoxItem text="ES6 et les promesses : nouvelle façon d'écrire les callbacks" />
                            <BoxItem text="On peut chainer les then en retournant une nouvelle promesse" />
                            <BoxItem text="Code plus lisible et plus facile à maintenir" />
                            <BoxItem text="En plus de then, catch et finally pour attraper les erreurs et exécuter un bout de code même en cas d'erreur" />
                            <BoxItem text="Cran du dessus : async et await" />
                            <BoxItem text="Permet d'écrire du code asynchrone de façon synchrone" />
                            <BoxItem text="async : type de fonction : on prévient JS qu'on va appeler await dedans" />
                            <BoxItem text="await : on 'attend' d'avoir une réponse avant de continuer" />
                            <BoxItem text="try : on essaie, catch : on capture une erreur, finally: on exécute quelque soit le résultat" />
                        </Recap>
                        <Sondage question="Des questions sur les promesses ?" reponses={["yes", "pas encore, trop frais", "nope, c'est ok"]} />
                        <ListItem title="Programme du jour">
                            <Item text="Git : on va revoir les commandes qu'on connait déjà" />
                            <Item text="On va aussi en découvrir qu'on connait pas encore" />
                            <Item text="On va étudier de plus près les liens entre Git et GitHub" />
                        </ListItem>
                        <ListItem title="Mise en place du projet">
                            <Item text="Pour l'instant c'est moi qui code, partage du repo après" />
                            <Item text="Crée un nouveau répertoire : Playlist" />
                            <Item text="Je veux le transformer en dépôt Git" />
                            <Item text="Sije fais un git status : on me jette, pas un repo git" />
                            <Question text="Je me place où et je tape quoi ?" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="Git init">
                            <Item text="git status : quelques infos, branche master, pas de commit encore" />
                            <Item text="Création dossier .git dans dossier Playlist" />
                            <Item text="Dans ce dossier, toutes les infos nécéssaires à Git pour gérer notre historique" />
                            <Item text="On n'a pas à intervenir dedans mais on peut regarder ce qu'il contient" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="Gestion de fichiers dans Git">
                            <Item text="quelques fichiers et dossiers qui servent à :" />
                            <SubItem text="lister les fichiers à tracer" />
                            <SubItem text="enregistrer l'état actuel du projet" />
                            <SubItem text="lister la config particulère à ce repo" />
                            <Item text="J'ajoute un README, on va lister les commandes qu'on utilise" />
                            <Item text="git status : le nouveau fichier est détecté mais non tracé" />
                            <Item text="Il n'est pas dans la liste des fichiers noté comme à surveiller" />
                            <Question text="Comment je peux l'ajouter aux fichiers tracés dans le dépôt ?" />
                            <Item text="Pas trop dûr, c'est marqué ..." />
                            <Question text="Et si je voulais l'ignorer ?" />
                            <Item text="Ajout d'un .gitignore + nom du fichier dedans" />
                            <Item text="ici, on va l'ajouter" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="Archivage des fichiers tracés">
                            <Item text="On a juste indiqué à git de surveiller les changements dans ce fichier" />
                            <Item text="Il ne fait pas encore partie du dépôt" />
                            <Item text="git status : on doit effectuer un commit pour inclure ce fichier dans le dépôt" />
                            <Item text="En cas d'erreur avant le commit, on peut retirer un fichier de al zone de surveillance" />
                            <Item text="git rm --cached README.md" />
                            <Item text="On ne veut pas ici, je fais le commit" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="Plusieurs commits en local">
                            <Item text="git status : tous les fichiers sont pris en compte, le repo est à jour" />
                            <Item text="On modifie le README pour ajouter ces commandes et on va refaire un commit" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="git log">
                            <Item text="2 commits dans notre repo, 2 étapes du dev" />
                            <Item text="git log : permet d'afficher la liste des commits et donne des infos" />
                            <Item text="HEAD : indique la position du commit sélectionné, master, la branche auquel il appartient" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="Options">
                            <Item text="quand on a beaucoup de commits, affichage plus concis est plus clair" />
                            <Item text="la commande : git log --graph --oneline --all" />
                            <Item text="un peu pénible à taper, on va se faire un alias" />
                            <Item text="On le fait au niveau global, pour faire 1 alias sur ce projet seulement, on retire --global" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="amend">
                            <Item text="Mes message de commits sont pas géniaux" />
                            <Item text="Tant qu'on a pas envoyé le repo sur un serveur distant, on peut modifier" />
                            <Item text="commandes vi :" />
                            <SubItem text="i pour insérer du contenu" />
                            <SubItem text="esc pour sortir de l'édition" />
                            <SubItem text=":x pour sauvegarder les modifs" />
                            <SubItem text=":q! pour quitter sans sauvegarder" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="Playlist.md">
                            <Item text="J'arrête de mettre à jour le README au fur et à mesure, trop long" />
                            <Item text="Version complète ce soir" />
                            <Item text="J'ajoute playlist.md avec du contenu, add et commit" />
                            <Item text="et on passe aux choses sérieuses" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="Dépôt distant">
                            <Item text="On crée un nouveau repo sur github : playlist" />
                            <Item text="J'essaie de pusher mon code sur le repo avec git push" />
                            <Item text="Erreur, on n'a pas préciser de remote" />
                            <Item text="Comme le courrier : pas d'adresse de destination, envoi impossible" />
                            <Item text="GitHub fournit la commande" />
                            <Item text="On ajoute une adresse distante appelée origin et on fournit l'adresse ssh du repo" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="git push marche toujours pas" />
                            <Item text="Il a l'adresse mais on a besoin de lier notre branche locale courante avec une branche du dépôt distant" />
                            <Item text="GitHub fournit aussi la commande" />
                        </ListItem>
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem>
                            <Item text="Cette fois c'est bon, les dépôts local et distant sont synchro" />
                            <Item text="Allons voir sur github, je rafraichis" />
                            <Item text="On a bien une branche master et 3 commits" />
                            <Item text="Important ici : quand on pushe, on envoie tout l'historique du dépôt local, pas seulement le dernier commit" />
                            <Item text="Dans le coup, pas obligé de faire un push après chaque commit, on peut mais pas obligatoire" />
                            <Item text="Au moment du push, tous les commits non enregistrés en distant seront ajoutés" />
                        </ListItem>
                        <ListItem title="Classroom">
                            <Item text="Je crée un classroom, acceptez-le et récupérez le repo, vous allez manipuler avec moi maintenant" />
                            <Item text="Juste un mot sur les outils graphiques de git" />
                            <Item text="Y en a plein, c'est bien cool mais quand on sait ce qu'on fait !" />
                            <Item text="Sur serveur de prod, pas forcément d'interface graphique" />
                            <Item text="Important de connaitre les commandes dans le terminal" />
                            <Item text="Si terminal ok, GUI ok, l'inverse est pas forcément vrai" />
                        </ListItem>
                        <Sondage question="Repo récupéré" reponses={["yep", "oups, problème"]} />
                        <ListItem title="On plante le décor">
                            <Item text="On a une playlist et on demande à 2 DJs de nous aider à la mettre à jour" />
                            <Item text="2 DJs super célèbres : Henriette et Michel" />
                            <Item text="Ils connaissent un peu git et bossent proprement" />
                            <Item text="Pour éviter de corrompre la branche master, ils se font chacun une branche" />
                            <Item text="Henriette est lève-tôt, elle crée sa branche la première" />
                        </ListItem>
                        <ListItem title="git branch">
                            <Item text="Plusieurs façon de créer une branche" />
                            <Question text="Vous en connaissez ?" />
                            <Item text="git branch henriette, puis git checkout henriette pour se placer dessus" />
                            <Item text="version plus courte : git checkout -b henriette" />
                            <Item text="j'en profite : pour supprimer une branche, vous savez ?" />
                            <Item text="git branch -D henriette" />
                            <Item text="on peut mettre -d : vérif que les branches locale et distante sont synchro avant suppression" />
                        </ListItem>
                        <ListItem title="modif sur henriette">
                            <Item text="on fait une modif sur playlist.md : Fatboy c'est du funk" />
                            <Item text="on add et on commit" />
                            <Item text="git status, ça doit être tout clean" />
                        </ListItem>
                        <Sondage question="Bon pour tout le monde ?" reponses={["yes", "non"]} />
                        <ListItem title="Push henriette">
                            <Item text="git push : on se fait jeter, vous voyez pourquoi ?" />
                            <Item text="On n'a pas raccordé la branche locale avec une branche distante" />
                            <Item text="On le fait avec -u origin henriette" />
                            <Item text="Cette fois ok, 2 branches sur github" />
                            <Item text="insights/network : on voit le point de départ de la branche et le commit sup" />
                            <Item text="Ce commit n'existe que chez henriette pas sur master, on va voir comment les fusionner" />
                        </ListItem>
                        <ListItem title="Création conflit">
                            <Item text="On va faire exprès de créer un conflit pour voir comment ça se règle" />
                            <Item text="Michel est enfin debout et se met au boulot" />
                            <Item text="On retourne sur master : git checkout master" />
                            <Item text="On crée une branche pour michel : git checkout -b michel" />
                            <Item text="On modifie le fichier playlist au même endroit : Fatboy c'est de la soul" />
                            <Item text="On add, on commit et on push en indiquant bien l'upstream" />
                            <Item text="On retourne sur github pour voir le résultat, on a 3 branches" />
                        </ListItem>
                        <Sondage question="J'ai bien 3 branches sur GitHub" reponses={["yes", "no"]} />
                        <ListItem title="1ère pull request">
                            <Item text="Une pull request qu'est-ce que c'est ?" />
                            <Item text="Un des développeurs veut intégrer ses modifs sur master avec une review du code par le propriétaire" />
                            <Item text="Avant de faire un trou dans le mur, on demande l'autorisation au proprio" />
                            <Item text="Onglet pull request, new pull request, master <- henriette" />
                            <Item text="Sens de la flêche, on veut intégrer henriette à master" />
                            <Item text="Direct on ous dit : able to merge. tit commentaire et create pull request" />
                            <Item text="Pas de conflit, on peut faire le merge" />
                            <Item text="Insights/network, henriette a rejoint master" />
                            <Item text="Dans les commits de master, 1 de plus : commit de merge avec henriette" />
                            <Item text="Pour l'instant, seulement en distant, faut rappatrier en local" />
                        </ListItem>
                        <ListItem title="fetch et pull">
                            <Item text="En local, on retourne sur master : git checkout master" />
                            <Item text="On demande à récupérer les commits manquants : git fetch origin" />
                            <Item text="Avec git tree, on voit que les commits sont là mais HEAD a 2 crans de retard" />
                            <Item text="Pour vraiment se synchro avec le distant : git pull" />
                            <Item text="Cette fois, le tag HEAD est bien placé, on est synchro" />
                            <Item text="On peut faire pull directement, il fera le fetch pour nous" />
                        </ListItem>
                        <ListItem title="L'heure du conflit">
                            <Item text="Pull request pour michel" />
                            <Item text="On nous prévient direct : pas de merge automatique possible, faudra régler le conflit !" />
                            <Item text="On va faire ça à la mano" />
                            <Item text="Depuis master, on fait un git merge michel : pb pour merger playlist.md" />
                            <Item text="On édite playlist.md pour voir ce que git nous a mis comme infos sur le conflit" />
                            <Item text="On choisit comment régler le conflit, la ou les lignes à conserver, à supprimer, à fusionner" />
                            <Item text="On add, on commit de merge et on push" />
                            <Item text="Mis à jour sur GitHub, la pull request est notée mergée, on est bon" />
                        </ListItem>
                        <Sondage question="Les 2 pull requests sont mergées" reponses={["yes", "no"]} />
                        <Recap>
                            <BoxItem text="On a vu les manips de base pour gérer le repo en local" />
                            <BoxItem text="init, status, add, commit, log" />
                            <BoxItem text="Comment configurer des alias pour les commandes un peu pénibles à taper avec git config" />
                            <BoxItem text="Comment créer un repo distant, le configurer en local et lui ajouter des fichiers" />
                            <BoxItem text="Comment créer plusieurs branches pour le travail en collaboration" />
                            <BoxItem text="Comment créer un pull request sur GitHub pour proposer une modif du code" />
                            <BoxItem text="Comment rappatrier ces branches sur le master et gérer les conflits avec merge" />
                            <Question text="Il vous rest des questions sur tout ça ?" />
                        </Recap>
                        <ListItem title="Multi remote">
                            <Item text="Un autre truc très pratique qui vous servira souvent : le multi remote" />
                            <Item text="Kezaco : la possibilité d'ajouter plusieurs remotes à notre repo" />
                            <Item text="Pour l'instant, seulement ajouté origin" />
                            <Item text="On va aussi pouvoir récupérer du code dans un repo qui nous appartient pas" />
                            <Item text="Genre ... le repo du prof après le challenge" />
                        </ListItem>
                        <ListItem title="Mise à jour README">
                            <Item text="J'accepte le classroom à mon tour pour avoir un nouveau repo, je le clone" />
                            <Item text="Je mets à jour le README sur mon repo prof" />
                            <Item text="On va ensemble récupérer le nouveau README sur ce repo" />
                        </ListItem>
                        <ListItem title="Ajout nouveau remote" />
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="Fetch des commits" />
                        <Demo type="repo Code">
                            <Code step={snippets.git[snippet++]} />
                        </Demo>
                        <ListItem title="Fusion">
                            <Item text="On vérifie avec git remote -v" />
                            <Item text="On a de nouvelles branches depuis un autre remote" />
                            <Item text="Il nous reste à faire le merge sur le master : git checkout master" />
                            <Item text="git merge prof/master : peut pas marcher direct" />
                            <Item text="Les 2 repos ont des commits d'ids différents, on doit forcer le truc" />
                            <Item text="git merge prof/master --allow-unrelated-histories" />
                            <Item text="Normalement, pas de conflit mais si y en a, on les traite" />
                            <Item text="Enfin, le commit qui valide le merge : add, commit et push pour update notre repo distant" />
                        </ListItem>
                        <Sondage question="J'ai le README à jour" reponses={["yes", "no"]} />
                        <ListItem title="essai sur oQuiz">
                            <Item text="On va essayer la manip sur oQuiz depuis le repo de correction" />
                            <Item text="Dans le dossier classroom :" />
                            <SubItem text="créer une branche fusion" />
                            <SubItem text="ajouter le remote prof" />
                            <SubItem text="git remote update pour fetch les commits" />
                            <SubItem text="merge en permettant des historiques séparés" />
                            <SubItem text="règlement des conflits" />
                        </ListItem>
                        <Doc type="Ressource" url="https://www.atlassian.com/fr/git/tutorials/comparing-workflows/gitflow-workflow" />
                        <ListItem title="git workflow">
                            <Item text="branches utiliser pour organiser la collaboration dans gros projets" />
                            <Item text="master : toujours clean, on bosse pas dessus, on n'y met que du code fonctionnel" />
                            <Item text="plusieurs branches utilisées dans des cas bien précis" />
                            <Item text="develop, release, feature, hotfix" />
                            <Item text="Voir site pour plus de détails" />
                        </ListItem>
                    </List>
                </Card>
            </div>
        </Fragment>
    );
}

export default S5E09;